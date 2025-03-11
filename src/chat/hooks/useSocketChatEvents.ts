import { useChatStore } from '@/store/chat';

export const useSocketChatEvents = () => {
  const socket = useChatStore((state) => state.socket);

  const sendCallRequest = (callId: string, chatId: number) => {
    socket?.emit('call-request', { callId, chatId });
  };

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

  const sendAcceptCall = (chatId: string) => {
    socket?.emit('accept-call', { chatId });
  };

  const sendHangupCall = (chatId: string) => {
    socket?.emit('hangup-call', { chatId });
  };

  const sendIceCandidateAnswer = (callId: string, candidate: string) => {
    socket?.emit('ice-answer', JSON.stringify({ callId, candidate }));
  };
  return {
    sendCallRequest,
    sendMessage,
    sendJoinCall,
    sendAnswer,
    sendOffer,
    sendIceCandidateOffer,
    sendAcceptCall,
    sendHangupCall,
    sendIceCandidateAnswer
  };
};
