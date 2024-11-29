import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface Message {
  message: string;
  isLocal: boolean;
}

const initialState: State = {
  messages: []
};

interface State {
  messages: Message[];
}

interface Actions {
  addMessage: (message: Message) => void;
  clear: () => void;
}

export const useChatStore = create<State & Actions>()(
  devtools((set, get) => ({
    ...initialState,
    addMessage: (message: Message) =>
      set({ messages: [...get().messages, message] }),
    clear: () => set({ ...initialState })
  }))
);
