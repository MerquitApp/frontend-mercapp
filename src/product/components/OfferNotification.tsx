import { Button } from '@nextui-org/react';
import { useState } from 'react';

export default function OfferNotification() {
  const [response, setResponse] = useState<'accepted' | 'rejected' | null>(
    null
  );

  const handleAccept = () => {
    setResponse('accepted');
  };

  const handleReject = () => {
    setResponse('rejected');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-4 shadow-lg rounded-2xl bg-white">
        {response ? (
          <div className="text-center">
            {response === 'accepted' ? (
              <p className="text-primaryPalette transition-opacity hover:opacity-90 font-semibold">
                ¡Oferta aceptada!
              </p>
            ) : (
              <p className="text-red-600 font-semibold">Oferta rechazada</p>
            )}
          </div>
        ) : (
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Tienes una nueva oferta
            </h2>
            <p className="text-gray-600 my-2">
              ¿Deseas aceptarla o rechazarla?
            </p>
            <div className="flex items-center space-x-4 my-4">
              <img
                src="/navaja.png"
                alt="Producto"
                className="w-16 h-16 rounded-lg"
              />
              <div>
                <p className="text-gray-700 font-medium">Navaja multiusos</p>
                <p className="text-gray-500 text-sm">Ofrece 9€</p>
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
                className="bg-redPalette transition-opacity hover:opacity-90 text-white px-4 py-2 rounded-md">
                Rechazar
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
