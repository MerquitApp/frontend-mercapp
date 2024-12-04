import CalculatorButton from '@/ui/components/CalculatorButton';

export const CalculatorOffer = () => {
  return (
    <div className="flex flex-col gap-2 bg-whitePalette p-4 rounded-xl">
      <div className="flex justify-center items-center gap-2">
        <CalculatorButton>1</CalculatorButton>
        <CalculatorButton>2</CalculatorButton>
        <CalculatorButton>3</CalculatorButton>
      </div>
      <div className="flex justify-center items-center gap-2">
        <CalculatorButton>4</CalculatorButton>
        <CalculatorButton>5</CalculatorButton>
        <CalculatorButton>6</CalculatorButton>
      </div>
      <div className="flex justify-center items-center gap-2">
        <CalculatorButton>7</CalculatorButton>
        <CalculatorButton>8</CalculatorButton>
        <CalculatorButton>9</CalculatorButton>
      </div>
      <div className="flex justify-center items-center gap-2">
        <CalculatorButton>,</CalculatorButton>
        <CalculatorButton>0</CalculatorButton>
        <CalculatorButton>.</CalculatorButton>
      </div>
    </div>
  );
};
