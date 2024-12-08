import InputOffer from '@/ui/components/InputOffer';
import { CalculatorOffer } from './CalculatorOffer';

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
};

export const Modal = ({ isOpen = false, children }: Props) => {
  return (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={`${isOpen ? '' : 'hidden'} fixed inset-0 z-50 flex justify-center items-center bg-black/20 `}>
      <div className="relative p-4 w-full max-w-lg max-h-full bg-white rounded-lg shadow-lg">
        <div className="relative text-primaryPalette text-2xl font-bold mb-4 dark:bg-gray-700">
          {children}
        </div>
        <div className="flex justify-center items-center">
          <InputOffer name="offer" type="text" placeholder="Nuevo precio" />
        </div>
        <CalculatorOffer />
      </div>
    </div>
  );
};
