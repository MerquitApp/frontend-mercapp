'use client';

import { useSocketChat } from '@/chat/hooks/useSocketChat';
import { useWebrtcStore } from '@/store/webrtc';
import Input from '@/ui/components/Input';
import PrimaryButton from '@/ui/components/PrimaryButton';
import { useEffect, useRef, useState } from 'react';

const servers = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302']
    }
  ],
  iceCandidatePoolSize: 10
};

let isInitialized = false;

export default function Page() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { sendOffer, sendJoinCall, sendIceCandidateOffer, connectSocketChat } =
    useSocketChat();
  const { setLocalStream, setPeerConnection, peerConnection } =
    useWebrtcStore();
  const [callCodeValue, setCallCodeValue] = useState<string>('');

  const handleCreatePeerConnection = async () => {
    if (!videoRef.current) return;

    const localStreamTmp = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });
    const peerConnectionTmp = new RTCPeerConnection(servers);

    localStreamTmp.getTracks().forEach((track) => {
      peerConnectionTmp.addTrack(track, localStreamTmp);
    });

    peerConnectionTmp.ontrack = (event) => {
      if (!videoRef.current) return;
      const stream = event.streams[0];
      console.log(event.streams);
      videoRef.current.srcObject = stream;
    };

    setPeerConnection(peerConnectionTmp);
    setLocalStream(localStreamTmp);
  };

  const handleCreateOffer = async () => {
    if (!peerConnection) return;
    const callId = crypto.randomUUID();

    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        sendIceCandidateOffer(callId, JSON.stringify(event.candidate.toJSON()));
      }
    };

    const offer = await peerConnection?.createOffer();
    await peerConnection?.setLocalDescription(offer);

    const offerJson = JSON.stringify({
      type: offer.type,
      sdp: offer.sdp
    });

    setCallCodeValue(callId);
    sendOffer(callId, offerJson);
  };

  const handleAnswer = async () => {
    if (!callCodeValue) return;
    sendJoinCall(callCodeValue);
  };

  useEffect(() => {
    if (isInitialized) return;
    isInitialized = true;
    handleCreatePeerConnection();
    connectSocketChat();
  }, []);

  return (
    <div className="mt-16 flex flex-col gap-4 items-center justify-center w-full h-full">
      <video className="rounded-md" ref={videoRef} autoPlay></video>
      <div className="flex flex-col gap-4 w-full max-w-md">
        <div className="flex gap-2">
          <PrimaryButton onClick={handleCreateOffer}>Start</PrimaryButton>
          <div className="flex flex-col gap-2">
            <Input
              label="Answer"
              name="answer"
              value={callCodeValue}
              onChange={(e) => setCallCodeValue(e.target.value)}
            />
            <PrimaryButton onClick={handleAnswer}>Answer</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
