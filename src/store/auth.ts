import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const initialState: State = {
  userId: '',
  name: '',
  email: '',
  profilePicture: '',
  isLoggedIn: false
};

interface State {
  userId: string;
  name: string;
  email: string;
  profilePicture: string;
  isLoggedIn: boolean;
}

interface Actions {
  setUserId: (userId: string) => void;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setProfilePicture: (profilePicture: string) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  clear: () => void;
}

export const useAuthStore = create<State & Actions>()(
  devtools((set) => ({
    ...initialState,
    setUserId: (userId) => set({ userId }),
    setName: (name) => set({ name }),
    setEmail: (email) => set({ email }),
    setProfilePicture: (profilePicture) => set({ profilePicture }),
    setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
    clear: () => set({ ...initialState })
  }))
);
