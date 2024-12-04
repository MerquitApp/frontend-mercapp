import type { ReactNode } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
}

export default function CalculatorButton({
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      className={`flex w-[100px] items-center justify-center space-x-2 rounded-full bg-greyPalette/40 py-2 text-blackPallete shadow-sm transition-opacity hover:opacity-90 ${className ?? ''}`}
      {...props}>
      {children}
    </button>
  );
}
