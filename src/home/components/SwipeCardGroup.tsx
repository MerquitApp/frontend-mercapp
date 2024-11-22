'use client';

import { useState } from 'react';
import SwipeCard from './SwipeCard';
import { ProductCard } from '@/types';

interface Props {
  cards: ProductCard[];
}

export default function SwipeCardGroup({ cards }: Props) {
  const [products, setProducts] = useState(cards);

  return (
    <div className="relative">
      {products[0] && (
        <SwipeCard
          key={products[0]?.id}
          {...products[0]}
          onDecisionMade={() => {
            setProducts(products.splice(1));
          }}
        />
      )}
    </div>
  );
}
