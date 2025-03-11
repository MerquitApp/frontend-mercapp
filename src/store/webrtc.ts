import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const initialState: State = {
  peerConnection: null,
  localStream: null,
  remoteStream: null,
  isOnCall: false,
  requestingCallId: null
};

interface State {
  peerConnection: RTCPeerConnection | null;
  localStream: MediaStream | null;
  remoteStream: MediaStream | null;
  isOnCall: boolean;
  requestingCallId: string | null;
}

interface Actions {
  setPeerConnection: (peerConnection: RTCPeerConnection) => void;
  setLocalStream: (localStream: MediaStream) => void;
  setRemoteStream: (remoteStream: MediaStream) => void;
  setIsOnCall: (isOnCall: boolean) => void;
  setRequestingCallId: (requestingCallId: string | null) => void;
  clear: () => void;
}

export const useWebrtcStore = create<State & Actions>()(
  devtools((set) => ({
    ...initialState,
    setPeerConnection: (peerConnection: RTCPeerConnection) =>
      set({ peerConnection }),
    setLocalStream: (localStream: MediaStream) => set({ localStream }),
    setRemoteStream: (remoteStream: MediaStream) => set({ remoteStream }),
    setIsOnCall: (isOnCall: boolean) => set({ isOnCall }),
    setRequestingCallId: (requestingCallId: string | null) =>
      set({ requestingCallId }),
    clear: () => set({ ...initialState })
  }))
);
