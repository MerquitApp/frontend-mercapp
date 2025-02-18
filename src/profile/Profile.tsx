'use client';

import Head from '@/home/components/Header';
import Footer from '@/ui/components/Footer';
import React from 'react';
import ProfileSection from './components/ProfileSection';
import { useAuthStore } from '@/store/auth';

function Profile() {
  const name = useAuthStore((state) => state.name);
  const email = useAuthStore((state) => state.email);
  const profilePicture = useAuthStore((state) => state.profilePicture);

  return (
    <>
      <Head />
      <ProfileSection
        userName={name}
        userEmail={email}
        userAvatar={profilePicture}
      />
      <Footer />
    </>
  );
}

export default Profile;
