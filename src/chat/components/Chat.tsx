'use client';

import { Message, User } from '@/types';
import { useEffect, useRef, useState } from 'react';
import { useSocketChat } from '../hooks/useSocketChat';
import { useAuthStore } from '@/store/auth';
import { useChatStore } from '@/store/chat';
import { Avatar } from '@nextui-org/react';
import PrimaryButton from '@/ui/components/PrimaryButton';
import { LuPhoneCall } from 'react-icons/lu';

interface Props {
  messages: Message[];
  chatId: number;
  users: User[];
}

function Chat({ messages: messagesProp, chatId, users }: Props) {
  const { sendMessage } = useSocketChat();
  const authUserId = +useAuthStore((state) => state.userId);
  const addChatMessage = useChatStore((state) => state.addChatMessage);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>(messagesProp);
  const otherUser = users.find((user) => user.user_id !== authUserId);

  const handleSendMessage = () => {
    const newMessage = {
      id: (messages[messages.length - 1]?.id ?? 0) + 1,
      content: input,
      chatId,
      userId: authUserId,
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
    <div className="flex flex-col items-center justify-center h-screen max-w-4xl w-3/4 mx-auto">
      <div className="flex items-center justify-between w-full p-4 bg-primaryPalette rounded-t-lg">
        <div className="flex items-center gap-4">
          <Avatar
            className="w-16 h-16 md:w-20 md:h-20 rounded-full opacity-100 text-primaryPalette"
            src={otherUser?.profile_picture}
            name={otherUser?.name}
            showFallback={false}
            classNames={{
              img: 'opacity-100'
            }}
          />
          <h2 className="font-semibold text-xl md:text-2xl text-white">
            {otherUser?.name}
          </h2>
        </div>
        <div>
          <PrimaryButton className="bg-whitePalette p-4 shadow-md">
            <LuPhoneCall size={24} className="stroke-primaryPalette" />
          </PrimaryButton>
        </div>
      </div>
      <div className="h-screen w-full flex flex-col bg-white rounded-b-lg shadow-lg overflow-hidden">
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
