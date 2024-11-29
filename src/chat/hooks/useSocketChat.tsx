import { useChatStore } from '@/store/chat';
import { useCallback, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

export const useSocketChat = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const addMessage = useChatStore((state) => state.addMessage);

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

  useEffect(() => {
    socket?.on('message', (message: string) => {
      addMessage({
        isLocal: false,
        message
      });
    });

    return () => {
      socket?.removeAllListeners();
    };
  }, [socket, addMessage]);

  return {
    socket,
    connectSocketChat,
    sendMessage
  };
};
