import type { ReactNode } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  active?: boolean;
}

export default function PrimaryButton({
  active = false,
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      className={`flex w-full items-center justify-center space-x-2 rounded-md bg-primaryPalette py-2 text-white shadow-sm transition-opacity hover:opacity-90 ${
        active ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
      } ${className ?? ''}`}
      {...props}>
      {children}
    </button>
  );
}
