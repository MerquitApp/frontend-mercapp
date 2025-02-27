import { useChatStore } from '@/store/chat';
import { useWebrtcStore } from '@/store/webrtc';
import { Message } from '@/types';
import { useCallback, useEffect } from 'react';
import { io } from 'socket.io-client';

export const useSocketChat = () => {
  const socket = useChatStore((state) => state.socket);
  const setSocket = useChatStore((state) => state.setSocket);
  const addChatMessage = useChatStore((state) => state.addChatMessage);
  const { peerConnection } = useWebrtcStore();

  const connectSocketChat = useCallback(() => {
    const socketTmp = io('http://localhost:3001', {
      withCredentials: true,
      transports: ['websocket'],
      autoConnect: true,
      forceNew: true
    });
    setSocket(socketTmp);
  }, [setSocket]);

  const sendMessage = (chat_id: number, content: string) => {
    socket?.emit('message', { chat_id, content });
  };

  const sendJoinCall = (callId: string) => {
    socket?.emit('join-call', JSON.stringify({ callId }));
  };

  const sendAnswer = (callId: string, answer: string) => {
    socket?.emit('answer', JSON.stringify({ callId, answer }));
  };

  const sendOffer = (callId: string, offer: string) => {
    socket?.emit('offer', JSON.stringify({ callId, offer }));
  };

  const sendIceCandidateOffer = (callId: string, candidate: string) => {
    socket?.emit('ice-offer', JSON.stringify({ callId, candidate }));
  };

  const sendIceCandidateAnswer = (callId: string, candidate: string) => {
    socket?.emit('ice-answer', JSON.stringify({ callId, candidate }));
  };

  useEffect(() => {
    socket?.on('message', (data: { chat_id: number; message: Message }) => {
      addChatMessage(data.chat_id, data.message);
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
    sendMessage,
    sendOffer,
    sendIceCandidateOffer,
    sendIceCandidateAnswer,
    sendAnswer,
    sendJoinCall
  };
};
