import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const initialState: State = {
  peerConnection: null,
  localStream: null,
  remoteStream: null
};

interface State {
  peerConnection: RTCPeerConnection | null;
  localStream: MediaStream | null;
  remoteStream: MediaStream | null;
}

interface Actions {
  setPeerConnection: (peerConnection: RTCPeerConnection) => void;
  setLocalStream: (localStream: MediaStream) => void;
  setRemoteStream: (remoteStream: MediaStream) => void;
  clear: () => void;
}

export const useWebrtcStore = create<State & Actions>()(
  devtools((set) => ({
    ...initialState,
    setPeerConnection: (peerConnection: RTCPeerConnection) =>
      set({ peerConnection }),
    setLocalStream: (localStream: MediaStream) => set({ localStream }),
    setRemoteStream: (remoteStream: MediaStream) => set({ remoteStream }),
    clear: () => set({ ...initialState })
  }))
);
