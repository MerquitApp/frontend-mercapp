'use client';

import { Message } from '@/types';
import { useEffect, useRef, useState } from 'react';

interface Props {
  messages: Message[];
  onSendMessage: (message: string) => void;
}

function Chat({ messages: messagesProp, onSendMessage }: Props) {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(messagesProp);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView();
    }
  }, [messages]);

  useEffect(() => {
    setMessages(messagesProp);
  }, [messagesProp]);

  const handleSendMessage = () => {
    onSendMessage(input);
    setInput('');
    setMessages([...messages, { message: input, isLocal: true }]);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-4/5 h-screen flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 flex ${msg.isLocal ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`p-2 rounded-lg text-white ${msg.isLocal ? 'bg-primaryPalette' : 'bg-greyPalette'}`}>
                {msg.message}
              </div>
            </div>
          ))}
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
