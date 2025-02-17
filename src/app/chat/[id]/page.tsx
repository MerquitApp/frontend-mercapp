'use client';

import { useState, useEffect, useRef } from 'react';
import { useChatStore } from '@/store/chat';
import { useSocketChat } from '@/chat/hooks/useSocketChat';
import Chat from '@/chat/components/Chat';

function Page({}: { params: { id: string } }) {
  const { sendMessage } = useSocketChat();
  const messages = useChatStore((state) => state.messages);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const addMessage = useChatStore((state) => state.addMessage);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView();
    }
  }, [messages]);

  const handleSendMessage = () => {
    addMessage({
      isLocal: true,
      message: input
    });
    setInput('');
    sendMessage(input);
  };

  return <Chat messages={messages} onSendMessage={handleSendMessage} />;
}
export default Page;
