import React from 'react';
import UserProfile from '../../userProfile/UserProfile';

function Page() {
  const user = {
    id: 1,
    name: 'John Doe',
    avatar: 'path/to/avatar.jpg'
  };
  return <UserProfile user={user} />;
}

export default Page;
