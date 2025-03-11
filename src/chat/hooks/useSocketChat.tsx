import { useChatStore } from '@/store/chat';
import { useWebrtcStore } from '@/store/webrtc';
import { Message } from '@/types';
import { useCallback, useEffect } from 'react';
import { io } from 'socket.io-client';
import { useSocketChatEvents } from './useSocketChatEvents';

export const useSocketChat = () => {
  const socket = useChatStore((state) => state.socket);
  const setSocket = useChatStore((state) => state.setSocket);
  const addChatMessage = useChatStore((state) => state.addChatMessage);
  const { peerConnection, setRequestingCallId, setIsOnCall } = useWebrtcStore();
  const { sendIceCandidateAnswer, sendAnswer } = useSocketChatEvents();

  const connectSocketChat = useCallback(() => {
    const socketTmp = io('http://localhost:3001', {
      withCredentials: true,
      transports: ['websocket'],
      autoConnect: true,
      forceNew: true
    });
    setSocket(socketTmp);
  }, [setSocket]);

  useEffect(() => {
    socket?.on('message', (data: Message) => {
      addChatMessage(data.chatId, {
        ...data
      });
    });

    socket?.on('hangup-call', () => {
      setIsOnCall(false);
    });

    socket?.on('join-call', async (callId: string, offer: string) => {
      if (!peerConnection) return;

      peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
          sendIceCandidateAnswer(
            callId,
            JSON.stringify(event.candidate.toJSON())
          );
        }
      };

      peerConnection?.setRemoteDescription(
        new RTCSessionDescription(JSON.parse(offer))
      );
      const answerDescription = await peerConnection?.createAnswer();
      await peerConnection?.setLocalDescription(answerDescription);
      const answerJson = JSON.stringify({
        type: answerDescription.type,
        sdp: answerDescription.sdp
      });
      sendAnswer(callId, answerJson);
    });

    socket?.on('answer', (answer: string) => {
      peerConnection?.setRemoteDescription(
        new RTCSessionDescription(JSON.parse(answer))
      );
    });

    socket?.on('ice-offer', (iceOffers: string[]) => {
      iceOffers.forEach((iceOffer) => {
        console.log(iceOffer);
        peerConnection?.addIceCandidate(
          new RTCIceCandidate(JSON.parse(iceOffer))
        );
      });
    });

    socket?.on('call-request', (data: { id: string }) => {
      setRequestingCallId(`${data.id}`);
    });

    socket?.on('accept-call', () => {
      setIsOnCall(true);
    });

    socket?.on('ice-answer', (iceAnswer: string) => {
      peerConnection?.addIceCandidate(
        new RTCIceCandidate(JSON.parse(iceAnswer))
      );
    });

    return () => {
      socket?.removeAllListeners();
    };
  }, [
    socket,
    peerConnection,
    addChatMessage,
    sendAnswer,
    sendIceCandidateAnswer
  ]);

  return {
    socket,
    connectSocketChat,
    sendIceCandidateAnswer,
    sendAnswer
  };
};
