import React from 'react';
import UserHeader from './components/UserHeader';
import UserStats from './components/UserStats';
import UserProducts from './components/UserProducts';
import UserActions from './components/UserActions';
import Header from '../home/components/Header';
import Footer from '@/ui/components/Footer';
import RatingComponent from './components/RatingComponent';

interface User {
  id: number;
  name: string;
  avatar: string;
}

const UserProfile: React.FC<{ user: User }> = ({ user }) => {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
        <UserActions profileUrl={`/users/${user.id}`} />
        <UserHeader name={user.name} avatar={user.avatar} />
        <UserStats
          sales={100}
          purchases={200}
          totalSales={300}
          totalPurchases={400}
        />
        <RatingComponent userId={user.id} hasRated={false} />
        <UserProducts />
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
