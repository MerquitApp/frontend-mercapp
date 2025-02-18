import { NextUIProvider } from '@nextui-org/react';
import AuthProvider from '../auth/providers/AuthProvider';
import { ChatProvider } from '@/chat/providers/ChatProvider';

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  return (
    <NextUIProvider>
      <AuthProvider>
        <ChatProvider>{children}</ChatProvider>
      </AuthProvider>
    </NextUIProvider>
  );
};
