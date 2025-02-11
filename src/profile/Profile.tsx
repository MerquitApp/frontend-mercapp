import Head from '@/home/components/Header';
import Footer from '@/ui/components/Footer';
import React from 'react';
import ProfileSection from './components/ProfileSection';

function Profile() {
  return (
    <>
      <Head />
      <ProfileSection
        userName="John Doe"
        userEmail="johndoe@gmail.com"
        userAvatar="https://avatars.githubusercontent.com/u/10594771?v=4"
      />
      <Footer />
    </>
  );
}

export default Profile;
