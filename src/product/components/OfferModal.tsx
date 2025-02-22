import InputOffer from '@/ui/components/InputOffer';
import { CalculatorOffer } from './CalculatorOffer';
import PrimaryButton from '@/ui/components/PrimaryButton';
import { useEffect, useState } from 'react';
import { GoXCircle } from 'react-icons/go';

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
  onSetNewPrice: (newPrice: number) => void;
  productPrice: number;
};

export const OfferModal = ({
  isOpen = false,
  onClose,
  productPrice,
  onSetNewPrice,
  children
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [inputValue, setInputValue] = useState<number>(0);

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  return (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex justify-center items-center bg-black/20 transition-opacity duration-300 ${
        isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
      <div
        className={`relative p-4 w-full max-w-lg max-h-full bg-white rounded-lg shadow-lg transform transition-transform duration-1000 ${
          isModalOpen ? 'scale-100' : 'scale-90'
        }`}>
        <div className="relative text-primaryPalette text-2xl font-bold mb-4 dark:bg-gray-700">
          {children}
          <button
            type="button"
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={handleClose}>
            <GoXCircle size={24} />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsModalOpen(false);
              onSetNewPrice(inputValue);
              onClose();
            }}>
            <InputOffer
              type="text"
              name="offer"
              placeholder="Nuevo precio"
              value={inputValue ? `${inputValue}€` : ''}
              required
            />
            <CalculatorOffer
              productPrice={productPrice}
              onInputChange={setInputValue}
            />
            <PrimaryButton className="mt-4" type="submit">
              Ofertar
            </PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  );
};
