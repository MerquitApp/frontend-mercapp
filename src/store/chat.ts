import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { Socket } from 'socket.io-client';
import { Chat, Message } from '@/types';

interface State {
  socket: Socket | null;
  chats: Chat[];
}

const initialState: State = {
  socket: null,
  chats: []
};

interface Actions {
  setSocket: (socket: Socket) => void;
  addChatMessage: (chatId: number, message: Message) => void;
  clear: () => void;
}

export const useChatStore = create<State & Actions>()(
  devtools((set, get) => ({
    ...initialState,
    setChats: (chats: Chat[]) => set({ chats }),
    addChatMessage: (chatId: number, message: Message) =>
      set({
        chats: get().chats.map((chat) => {
          if (chat.id === chatId) {
            return {
              ...chat,
              messages: [...chat.messages, message]
            };
          }

          return chat;
        })
      }),
    setSocket: (socket: Socket) => set({ socket }),
    clear: () => set({ ...initialState })
  }))
);
