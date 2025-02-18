'use client';

import { useEffect } from 'react';
import { useSocketChat } from '../hooks/useSocketChat';

interface Props {
  children: React.ReactNode;
}

let isSocketConnected = false;

export const ChatProvider = ({ children }: Props) => {
  const { connectSocketChat } = useSocketChat();

  useEffect(() => {
    if (isSocketConnected) return;
    connectSocketChat();
    isSocketConnected = true;
  }, [connectSocketChat]);

  return <>{children}</>;
};
