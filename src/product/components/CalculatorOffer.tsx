'use client';

import CalculatorButton from '@/ui/components/CalculatorButton';
import { useState } from 'react';
import { RiDeleteBack2Line } from 'react-icons/ri';

interface CalculatorOfferProps {
  productPrice: number;
  onInputChange: (newValue: number) => void;
}

export const CalculatorOffer = ({
  onInputChange,
  productPrice
}: CalculatorOfferProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (value: string) => {
    // Dot can only be included once and must have a value before i
    if (
      (value === '.' && inputValue.includes('.')) ||
      (value === '.' && inputValue.trim().length <= 0)
    )
      return;

    const newValue = inputValue + value;
    if (+newValue >= productPrice) {
      return;
    }

    setInputValue(newValue);
    onInputChange(+newValue);
  };

  const handleDeleteCliick = () => {
    const newValue = inputValue.slice(0, -1);

    setInputValue(newValue);
    onInputChange(+newValue);
  };

  return (
    <div className="flex flex-col gap-2 bg-whitePalette p-4 rounded-xl">
      <div className="flex justify-center items-center gap-2">
        <CalculatorButton onClick={() => handleButtonClick('1')} type="button">
          1
        </CalculatorButton>
        <CalculatorButton onClick={() => handleButtonClick('2')} type="button">
          2
        </CalculatorButton>
        <CalculatorButton onClick={() => handleButtonClick('3')} type="button">
          3
        </CalculatorButton>
      </div>
      <div className="flex justify-center items-center gap-2">
        <CalculatorButton onClick={() => handleButtonClick('4')} type="button">
          4
        </CalculatorButton>
        <CalculatorButton onClick={() => handleButtonClick('5')} type="button">
          5
        </CalculatorButton>
        <CalculatorButton onClick={() => handleButtonClick('6')} type="button">
          6
        </CalculatorButton>
      </div>
      <div className="flex justify-center items-center gap-2">
        <CalculatorButton onClick={() => handleButtonClick('7')} type="button">
          7
        </CalculatorButton>
        <CalculatorButton onClick={() => handleButtonClick('8')} type="button">
          8
        </CalculatorButton>
        <CalculatorButton onClick={() => handleButtonClick('9')} type="button">
          9
        </CalculatorButton>
      </div>
      <div className="flex justify-center items-center gap-2">
        <CalculatorButton onClick={() => handleButtonClick('.')} type="button">
          .
        </CalculatorButton>
        <CalculatorButton onClick={() => handleButtonClick('0')} type="button">
          0
        </CalculatorButton>
        <CalculatorButton onClick={() => handleDeleteCliick()} type="button">
          <RiDeleteBack2Line className="h-[25px]" />
        </CalculatorButton>
      </div>
    </div>
  );
};
