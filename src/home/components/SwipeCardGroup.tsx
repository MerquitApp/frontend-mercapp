'use client';

import { useState } from 'react';
import SwipeCard from './SwipeCard';
import { ProductCard } from '@/types';
import { toast } from 'sonner';
import { BACKEND_URL } from '@/constants';
import React from 'react';
import { useAuthStore } from '@/store/auth';

interface Props {
  cards: ProductCard[];
}

export default function SwipeCardGroup({ cards }: Props) {
  const [products, setProducts] = useState(cards);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const handleLike = (id: number) => {
    toast.promise(
      fetch(`${BACKEND_URL}/likes/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      }),
      {
        success: '¡Te gusta el producto!',
        error: 'Error al marcar como favorito'
      }
    );
  };

  return (
    <div className="relative h-dvh flex justify-center items-center">
      {products[0] ? (
        <SwipeCard
          key={products[0]?.id}
          {...products[0]}
          onDecisionMade={(isLiked, id) => {
            setProducts(products.splice(1));

            if (isLiked && isLoggedIn) {
              handleLike(id);
            }

            if (!isLiked) {
              toast.success('No te gusta el producto');
            }
          }}
        />
      ) : (
        <div className="flex justify-center items-center h-full">
          <h2 className="text-center text-4xl font-bold text-primaryPalette">
            No hay más productos
          </h2>
        </div>
      )}
    </div>
  );
}
