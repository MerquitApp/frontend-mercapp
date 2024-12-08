import { useChatStore } from '@/store/chat';
import { useWebrtcStore } from '@/store/webrtc';
import { useCallback, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

export const useSocketChat = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const addMessage = useChatStore((state) => state.addMessage);
  const { peerConnection } = useWebrtcStore();

  const connectSocketChat = useCallback(() => {
    const socketTmp = io('http://localhost:3000', {
      withCredentials: true,
      transports: ['websocket'],
      autoConnect: true,
      forceNew: true
    });
    setSocket(socketTmp);
  }, [setSocket]);

  const sendMessage = (message: string) => {
    socket?.emit('message', message);
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
    socket?.on('message', (message: string) => {
      addMessage({
        isLocal: false,
        message
      });
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
  }, [socket, addMessage, peerConnection]);

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
