'use client';

import { BACKEND_URL } from '@/constants';
import { ProductResponse } from '@/types';
import { Button } from '@nextui-org/react';
import { toast } from 'sonner';

interface Props {
  id: number;
  price: number;
  product: ProductResponse;
  onAction: (id: number, isAccepted: boolean) => void;
}

export default function OfferNotification({
  price,
  product,
  id,
  onAction
}: Props) {
  const handleAccept = async () => {
    toast.success('Oferta aceptada');
    await fetch(`${BACKEND_URL}/offer/accept/${id}`, {
      method: 'PATCH',
      credentials: 'include'
    });
    onAction(id, true);
  };

  const handleReject = async () => {
    toast.error('Oferta rechazada');
    await fetch(`${BACKEND_URL}/offer/reject/${id}`, {
      method: 'PATCH',
      credentials: 'include'
    });
    onAction(id, false);
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-96 p-4 shadow-lg rounded-2xl bg-white">
        <h2 className="text-2xl font-semibold text-gray-800">
          Tienes una nueva oferta
        </h2>
        <p className="text-gray-600 my-2 text-lg">
          ¿Deseas aceptarla o rechazarla?
        </p>
        <div className="flex items-center space-x-4 my-4">
          <img
            src={product.cover_image.image}
            alt="Producto"
            className="w-24 h-24 rounded-lg"
          />
          <div>
            <h3 className="text-gray-700 font-medium text-xl">
              {product.name}
            </h3>
            <p className="text-gray-500 text-lg">Ofrece {price}€</p>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <Button
            onClick={handleAccept}
            className="bg-primaryPalette transition-opacity hover:opacity-90 text-white px-4 py-2 rounded-md">
            Aceptar
          </Button>
          <Button
            onClick={handleReject}
            className="bg-redPalette/80 transition-opacity hover:opacity-90 text-white px-4 py-2 rounded-md">
            Rechazar
          </Button>
        </div>
      </div>
    </div>
  );
}
