import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { Socket } from 'socket.io-client';
import { ChatDetails, Message } from '@/types';

interface State {
  socket: Socket | null;
  chats: ChatDetails[];
  activeChatId: number | null;
}

const initialState: State = {
  socket: null,
  chats: [],
  activeChatId: null
};

interface Actions {
  setSocket: (socket: Socket) => void;
  addChatMessage: (chatId: number, message: Message) => void;
  addChat: (chat: ChatDetails) => void;
  setChats: (chats: ChatDetails[]) => void;
  setActiveChatId: (chatId: number) => void;
  clear: () => void;
}

export const useChatStore = create<State & Actions>()(
  devtools((set, get) => ({
    ...initialState,
    setChats: (chats: ChatDetails[]) => set({ chats }),
    setActiveChatId: (chatId: number) => set({ activeChatId: chatId }),
    addChat: (chat: ChatDetails) => set({ chats: [...get().chats, chat] }),
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
