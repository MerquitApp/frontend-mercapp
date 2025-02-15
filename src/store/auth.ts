import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const initialState: State = {
  name: '',
  email: '',
  profilePicture: '',
  isLoggedIn: false
};

interface State {
  name: string;
  email: string;
  profilePicture: string | null;
  isLoggedIn: boolean;
}

interface Actions {
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setProfilePicture: (profilePicture: string | null) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  clear: () => void;
}

export const useAuthStore = create<State & Actions>()(
  devtools((set) => ({
    ...initialState,
    setName: (name) => set({ name }),
    setEmail: (email) => set({ email }),
    setProfilePicture: (profilePicture) => set({ profilePicture }),
    setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
    clear: () => set({ ...initialState })
  }))
);
