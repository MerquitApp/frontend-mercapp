'use client';

import { useState, useEffect, useRef } from 'react';
import { useChatStore } from '@/store/chat';
import { useSocketChat } from '@/chat/hooks/useSocketChat';
import Chat from '@/chat/components/Chat';

export let isSocketConnected = false;

function Page() {
  const { connectSocketChat, sendMessage } = useSocketChat();
  const messages = useChatStore((state) => state.messages);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const addMessage = useChatStore((state) => state.addMessage);

  useEffect(() => {
    if (isSocketConnected) return;
    connectSocketChat();
    isSocketConnected = true;
  }, [connectSocketChat]);

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
