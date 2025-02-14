import { NextUIProvider } from '@nextui-org/react';
import AuthProvider from '../auth/providers/AuthProvider';

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  return (
    <NextUIProvider>
      <AuthProvider>{children}</AuthProvider>
    </NextUIProvider>
  );
};
