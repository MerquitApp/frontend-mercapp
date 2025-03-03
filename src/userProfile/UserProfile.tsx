import React from 'react';
import UserHeader from './components/UserHeader';
import UserStats from './components/UserStats';
import UserProducts from './components/UserProducts';
import UserActions from './components/UserActions';
import Header from '../home/components/Header';
import Footer from '@/ui/components/Footer';
import RatingComponent from './components/RatingComponent';
import { ProductResponse, Reputation } from '@/types';

interface Props {
  id: number;
  products: ProductResponse[];
  avatar: string;
  name: string;
  numberOfSales: number;
  numberOfOrders: number;
  avg: number;
  reputation: Reputation[];
}

const UserProfile: React.FC<Props> = ({
  name,
  avatar,
  id,
  reputation,
  numberOfOrders,
  numberOfSales,
  products
}) => {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
        <UserActions profileUrl={`/users/${id}`} />
        <UserHeader name={name} avatar={avatar} />
        <UserStats sales={numberOfSales} purchases={numberOfOrders} />
        <RatingComponent reputation={reputation} />
        <UserProducts products={products} />
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
