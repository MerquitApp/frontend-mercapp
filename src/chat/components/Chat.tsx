'use client';

import { Message, User } from '@/types';
import { useEffect, useRef, useState } from 'react';
import { useSocketChat } from '../hooks/useSocketChat';
import { useAuthStore } from '@/store/auth';
import { useChatStore } from '@/store/chat';
import { Avatar, Modal, ModalContent } from '@nextui-org/react';
import PrimaryButton from '@/ui/components/PrimaryButton';
import { LuPhoneCall } from 'react-icons/lu';
import Link from 'next/link';
import { useWebrtcStore } from '@/store/webrtc';

const servers = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302']
    }
  ],
  iceCandidatePoolSize: 10
};

interface Props {
  messages: Message[];
  chatId: number;
  users: User[];
}

function Chat({ messages: messagesProp, chatId, users }: Props) {
  const { sendMessage } = useSocketChat();
  const authUserId = +useAuthStore((state) => state.userId);
  const addChatMessage = useChatStore((state) => state.addChatMessage);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [input, setInput] = useState('');
  const [isCalling, setIsCalling] = useState(false);
  const [messages, setMessages] = useState<Message[]>(messagesProp);
  const otherUser = users.find((user) => user.user_id !== authUserId);
  const videoRef = useRef<HTMLVideoElement>(null);
  const setIsOnCall = useWebrtcStore((state) => state.setIsOnCall);
  const isOnCall = useWebrtcStore((state) => state.isOnCall);
  const requestingCallId = useWebrtcStore((state) => state.requestingCallId);
  const setRequestingCallId = useWebrtcStore(
    (state) => state.setRequestingCallId
  );
  const {
    sendOffer,
    sendJoinCall,
    sendIceCandidateOffer,
    sendCallRequest,
    sendAcceptCall,
    sendHangupCall
  } = useSocketChat();
  const { setLocalStream, setPeerConnection, peerConnection } =
    useWebrtcStore();

  const handleCreatePeerConnection = async () => {
    const localStreamTmp = await navigator.mediaDevices.getUserMedia({
      audio: true
    });
    const peerConnectionTmp = new RTCPeerConnection(servers);

    localStreamTmp.getTracks().forEach((track) => {
      peerConnectionTmp.addTrack(track, localStreamTmp);
    });

    peerConnectionTmp.ontrack = (event) => {
      if (!videoRef.current) return;
      // const stream = event.streams[0];
      console.log(event.streams);
      // videoRef.current.srcObject = stream;
    };

    setPeerConnection(peerConnectionTmp);
    setLocalStream(localStreamTmp);

    return peerConnectionTmp;
  };

  const handleCreateOffer = async () => {
    let pc = peerConnection;

    if (!peerConnection) {
      pc = (await handleCreatePeerConnection())!;
    }

    const callId = crypto.randomUUID();

    pc!.onicecandidate = (event: RTCPeerConnectionIceEvent) => {
      if (event.candidate) {
        sendIceCandidateOffer(callId, JSON.stringify(event.candidate.toJSON()));
      }
    };

    const offer = await pc!.createOffer();
    await pc!.setLocalDescription(offer);

    const offerJson = JSON.stringify({
      type: offer.type,
      sdp: offer.sdp
    });

    sendOffer(callId, offerJson);
    sendCallRequest(callId, chatId);
  };

  const handleAnswer = async () => {
    console.log(requestingCallId);
    if (!requestingCallId) return;
    sendJoinCall(requestingCallId);
    setIsOnCall(true);
    setIsCalling(false);
    sendAcceptCall(chatId.toString());
    setRequestingCallId(null);
  };

  const handleCallClick = () => {
    setIsCalling(true);
    handleCreateOffer();
  };

  const handleHangUp = () => {
    setIsCalling(false);
    setIsOnCall(false);
    sendHangupCall(chatId.toString());
  };

  const handleSendMessage = () => {
    const newMessage = {
      id: (messages[messages.length - 1]?.id ?? 0) + 1,
      content: input,
      chatId,
      userId: authUserId,
      createdAt: new Date()
    };

    addChatMessage(chatId, newMessage);
    setMessages((prev) => [...prev, newMessage]);
    setInput('');
    sendMessage(chatId, input);
  };

  const handleRejectCall = () => {
    setRequestingCallId(null);
  };

  useEffect(() => {
    setMessages(messagesProp);
  }, [messagesProp]);

  useEffect(() => {
    if (!isOnCall) return;

    setIsCalling(false);
  }, [isOnCall]);

  return (
    <>
      {isCalling && (
        <Modal isOpen={isCalling} onClose={handleHangUp}>
          <ModalContent className="max-w-md mx-auto p-4 flex flex-col gap-4">
            <h2 className="text-center text-2xl font-bold">
              Llamando a {otherUser?.name}
            </h2>
            <button
              className="bg-primaryPalette text-white px-4 py-2 rounded-md hover:brightness-75 transition duration-300"
              onClick={handleHangUp}>
              Cancelar
            </button>
          </ModalContent>
        </Modal>
      )}
      {requestingCallId && (
        <Modal isOpen={Boolean(requestingCallId)} onClose={handleRejectCall}>
          <ModalContent className="max-w-md mx-auto p-4 flex flex-col gap-4">
            <h2 className="text-center text-2xl font-bold">
              Solicitud de llamada
            </h2>
            <div className="flex items-center gap-2 justify-center">
              <button
                className="bg-green-700 text-white px-4 py-2 rounded-md hover:brightness-75 transition duration-300"
                onClick={handleAnswer}>
                Aceptar
              </button>
              <button
                className="bg-red-700 text-white px-4 py-2 rounded-md hover:brightness-75 transition duration-300"
                onClick={handleRejectCall}>
                Cancelar
              </button>
            </div>
          </ModalContent>
        </Modal>
      )}
      {isOnCall && (
        <Modal isOpen={isOnCall} onClose={handleHangUp}>
          <ModalContent className="max-w-md mx-auto p-4 flex flex-col gap-4 justify-center items-center">
            <Avatar
              size="lg"
              name={otherUser?.name}
              src={otherUser?.profile_picture}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full opacity-100"
            />
            <div className="flex items-center gap-2">
              <button
                className="bg-red-700 text-white px-4 py-2 rounded-md hover:brightness-75 transition duration-300"
                onClick={handleHangUp}>
                Colgar
              </button>
            </div>
          </ModalContent>
        </Modal>
      )}
      <div className="flex flex-col items-center justify-center h-[800px] max-w-4xl w-3/4 mx-auto">
        <div className="flex items-center justify-between w-full p-4 bg-primaryPalette rounded-t-lg">
          <Link
            href={`/user/${otherUser?.user_id}`}
            className="flex items-center gap-4 cursor-pointer">
            <Avatar
              className="w-16 h-16 md:w-20 md:h-20 rounded-full opacity-100 text-primaryPalette"
              src={otherUser?.profile_picture}
              name={otherUser?.name}
              showFallback={false}
              classNames={{
                img: 'opacity-100'
              }}
            />
            <h2 className="font-semibold text-xl md:text-2xl text-white">
              {otherUser?.name}
            </h2>
          </Link>
          <div>
            <PrimaryButton
              className="bg-whitePalette p-4 shadow-md"
              onClick={handleCallClick}>
              <LuPhoneCall size={24} className="stroke-primaryPalette" />
            </PrimaryButton>
          </div>
        </div>
        <div className="h-screen w-full flex flex-col bg-white rounded-b-lg shadow-lg overflow-hidden">
          <div className="flex-1 p-4 overflow-y-auto">
            {messagesProp.map((msg, index) => {
              const isLocal = msg.userId === +authUserId;

              return (
                <div
                  key={index}
                  className={`mb-2 flex ${isLocal ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`p-2 rounded-lg text-white ${isLocal ? 'bg-primaryPalette' : 'bg-greyPalette'}`}>
                    {msg.content}
                  </div>
                </div>
              );
            })}
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
    </>
  );
}
export default Chat;
