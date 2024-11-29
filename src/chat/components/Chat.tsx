'use client'; // Esta línea es clave
import { useState, useEffect, useRef } from 'react';

function Chat() {
  const [messages, setMessages] = useState([
    { text: '¡Hola! ¿Cómo estás?', sender: 'user1' },
    { text: '¡Hola! Todo bien, ¿y tú?', sender: 'user2' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView();
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user1' }]);
      setInput('');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-4/5 h-screen flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 flex ${msg.sender === 'user1' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`p-2 rounded-lg text-white ${msg.sender === 'user1' ? 'bg-primaryPalette' : 'bg-greyPalette'}`}>
                {msg.text}
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
