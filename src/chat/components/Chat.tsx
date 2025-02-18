'use client';

import { Message } from '@/types';
import { useEffect, useRef, useState } from 'react';
import { useSocketChat } from '../hooks/useSocketChat';
import { useAuthStore } from '@/store/auth';
import { useChatStore } from '@/store/chat';

interface Props {
  messages: Message[];
  chatId: number;
}

function Chat({ messages: messagesProp, chatId }: Props) {
  const { sendMessage } = useSocketChat();
  const authUserId = useAuthStore((state) => state.userId);
  const addChatMessage = useChatStore((state) => state.addChatMessage);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>(messagesProp);

  const handleSendMessage = () => {
    const newMessage = {
      id: (messages[messages.length - 1]?.id ?? 0) + 1,
      content: input,
      chatId,
      userId: +authUserId,
      createdAt: new Date()
    };

    addChatMessage(chatId, newMessage);
    setMessages((prev) => [...prev, newMessage]);
    setInput('');
    sendMessage(chatId, input);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView();
    }
  }, [messages]);

  useEffect(() => {
    setMessages(messagesProp);
  }, [messagesProp]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-4/5 h-screen flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((msg, index) => {
            const isLocal = msg.userId === +authUserId;

            return (
              <div
                key={index}
                className={`mb-2 flex ${isLocal ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`p-2 rounded-lg text-white ${isLocal ? 'bg-primaryPalette' : 'bg-greyPalette'}`}>
                  {msg.content}
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        <div className="flex p-2 border-t">
          <input
            className="flex-grow p-2 border rounded-l-lg focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Escribe un mensaje..."
          />
          <button
            className="bg-primaryPalette text-white px-4 rounded-r-lg hover:brightness-75 transition duration-300"
            onClick={handleSendMessage}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
export default Chat;
