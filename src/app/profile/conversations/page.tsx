'use client';

import Chat from '@/chat/components/Chat';
import { BACKEND_URL } from '@/constants';
import { useAuthStore } from '@/store/auth';
import { useChatStore } from '@/store/chat';
import { Avatar } from '@nextui-org/react';
import { useEffect } from 'react';

const Page = () => {
  const authUserId = +useAuthStore((state) => state.userId);
  const activeChatId = useChatStore((state) => state.activeChatId);
  const chats = useChatStore((state) => state.chats);
  const setChats = useChatStore((state) => state.setChats);
  const setActiveChatId = useChatStore((state) => state.setActiveChatId);
  const activeChat = chats.find((chat) => chat.id === activeChatId);

  useEffect(() => {
    const fetchChats = async () => {
      const result = await fetch(`${BACKEND_URL}/chat`, {
        credentials: 'include'
      });
      const data = await result.json();

      if (result.ok) {
        setChats(data);

        if (!activeChatId && data.length > 0) {
          setActiveChatId(data[0].id);
        }
      }
    };

    fetchChats();
  }, []);

  if (chats.length === 0) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h2 className="font-bold text-center text-3xl text-primaryPalette">
          No hay chats disponibles
        </h2>
      </div>
    );
  }

  return (
    <div className="flex max-w-4xl w-[90%] mx-auto gap-4">
      <ul className="flex-1 max-h-screen flex flex-nowrap flex-col gap-4 overflow-y-scroll pr-2">
        {chats.map((chat) => {
          const otherUser = chat.users.find(
            (user) => user.user_id !== authUserId
          );
          return (
            <li key={chat.id}>
              <button
                className="flex gap-4 items-center py-2 px-4 bg-greyPalette/5 rounded-md shadow-md w-full cursor-pointer"
                onClick={() => setActiveChatId(chat.id)}>
                <Avatar
                  name={otherUser?.name}
                  src={otherUser?.profile_picture}
                  className="w-16 h-16"
                />
                <h2>{otherUser?.name}</h2>
              </button>
            </li>
          );
        })}
      </ul>
      {activeChatId && (
        <Chat
          messages={activeChat?.messages ?? []}
          chatId={activeChatId}
          users={activeChat?.users ?? []}
        />
      )}
    </div>
  );
};
export default Page;
