import InputOffer from '@/ui/components/InputOffer';
import { CalculatorOffer } from './CalculatorOffer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { offerSchema } from '@/validations/userSchema';
import PrimaryButton from '@/ui/components/PrimaryButton';
import { useState } from 'react';
import { GoXCircle } from 'react-icons/go';

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  setOfferValue: (value: string | null) => void;
};

type InputProps = {
  offer: string;
};

export const Modal = ({
  isOpen = false,
  onClose,
  setOffset,
  setOfferValue,
  children
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [inputValue, setInputValue] = useState('');

  const { register } = useForm<InputProps>({
    resolver: zodResolver(offerSchema)
  });

  const handleIconClick = () => {
    setOffset((prevOffset) => prevOffset + 1);
    onClose();
  };

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
            onClick={handleIconClick}>
            <GoXCircle size={24} />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsModalOpen(false);
              setOfferValue(inputValue);
              onClose();
            }}>
            <InputOffer
              type="text"
              placeholder="Nuevo precio"
              value={inputValue ? `${inputValue}€` : ''}
              {...register('offer')}
              required
            />
            <CalculatorOffer onInputChange={setInputValue} />
            <PrimaryButton className="mt-4" type="submit">
              Ofertar
            </PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  );
};
