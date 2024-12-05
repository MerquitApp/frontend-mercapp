import CalculatorButton from '@/ui/components/CalculatorButton';
import { RiDeleteBack2Line } from 'react-icons/ri';

type CalculatorOfferProps = {
  onInputChange: (value: string) => void;
};

export const CalculatorOffer = ({ onInputChange }: CalculatorOfferProps) => {
  const handleButtonClick = (value: string) => {
    onInputChange((prev) => prev + value);
  };

  const handleDeleteCliick = () => {
    onInputChange((prev) => {
      if (typeof prev === 'string' && prev.length > 0) {
        return prev.slice(0, -1);
      }
      return ''; // Si no hay nada, devuelve una cadena vacía
    });
  };

  return (
    <div className="flex flex-col gap-2 bg-whitePalette p-4 rounded-xl">
      <div className="flex justify-center items-center gap-2">
        <CalculatorButton onClick={() => handleButtonClick('1')}>
          1
        </CalculatorButton>
        <CalculatorButton onClick={() => handleButtonClick('2')}>
          2
        </CalculatorButton>
        <CalculatorButton onClick={() => handleButtonClick('3')}>
          3
        </CalculatorButton>
      </div>
      <div className="flex justify-center items-center gap-2">
        <CalculatorButton onClick={() => handleButtonClick('4')}>
          4
        </CalculatorButton>
        <CalculatorButton onClick={() => handleButtonClick('5')}>
          5
        </CalculatorButton>
        <CalculatorButton onClick={() => handleButtonClick('6')}>
          6
        </CalculatorButton>
      </div>
      <div className="flex justify-center items-center gap-2">
        <CalculatorButton onClick={() => handleButtonClick('7')}>
          7
        </CalculatorButton>
        <CalculatorButton onClick={() => handleButtonClick('8')}>
          8
        </CalculatorButton>
        <CalculatorButton onClick={() => handleButtonClick('9')}>
          9
        </CalculatorButton>
      </div>
      <div className="flex justify-center items-center gap-2">
        <CalculatorButton onClick={() => handleButtonClick('.')}>
          .
        </CalculatorButton>
        <CalculatorButton onClick={() => handleButtonClick('0')}>
          0
        </CalculatorButton>
        <CalculatorButton onClick={() => handleDeleteCliick()}>
          <RiDeleteBack2Line className="h-[25px]" />
        </CalculatorButton>
      </div>
    </div>
  );
};
