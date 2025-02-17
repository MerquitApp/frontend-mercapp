'use client';

import { BACKEND_URL } from '@/constants';
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
  const setUserId = useAuthStore((state) => state.setUserId);

  useEffect(() => {
    const init = async () => {
      try {
        const result = await fetch(`${BACKEND_URL}/auth/verify`, {
          credentials: 'include'
        });
        const data = await result.json();

        if (result.ok) {
          setName(data.name);
          setEmail(data.email);
          setProfilePicture(data.profile_picture ?? '/profile-default.jpg');
          setUserId(data.user_id);
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
