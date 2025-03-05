'use client';

import OfferNotification from '@/product/components/OfferNotification';
import { OfferResponse } from '@/types';
import { useState } from 'react';

interface Props {
  offers: OfferResponse[];
}

export default function Offers({ offers: offersProp }: Props) {
  const [offers, setOffers] = useState<OfferResponse[]>(offersProp);

  const handleAction = (id: number) => {
    setOffers((prev) => prev.filter((offer) => offer.id !== id));
  };

  return (
    <div className="flex flex-col items-center w-full h-screen gap-8">
      <h2 className="text-4xl font-bold text-primaryPalette">Ofertas</h2>
      <ul className="flex flex-col">
        {offers?.map((offer) => (
          <li key={offer.id}>
            <OfferNotification {...offer} onAction={handleAction} />
          </li>
        ))}
      </ul>
    </div>
  );
}
