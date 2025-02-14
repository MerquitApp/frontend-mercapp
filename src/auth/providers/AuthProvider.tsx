'use client';

import { useAuthStore } from '@/store/auth';
import { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

function AuthProvider({ children }: Props) {
  const setName = useAuthStore((state) => state.setName);
  const setEmail = useAuthStore((state) => state.setEmail);
  const setProfilePicture = useAuthStore((state) => state.setProfilePicture);
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

  useEffect(() => {
    const init = async () => {
      try {
        const result = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verify`,
          {
            credentials: 'include'
          }
        );
        const data = await result.json();

        if (result.ok) {
          setName(data.name);
          setEmail(data.email);
          setProfilePicture(data.profilePicture);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    init();
  }, []);

  return <>{children}</>;
}

export default AuthProvider;
