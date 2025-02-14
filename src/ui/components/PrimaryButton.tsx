import type { ReactNode } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
}

export default function PrimaryButton({
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      className={`flex w-full items-center justify-center space-x-2 rounded-md bg-primaryPalette py-2 text-white shadow-sm transition-opacity hover:opacity-90 ${className ?? ''} active:scale-[0.98] transition-transform p-2`}
      {...props}>
      {children}
    </button>
  );
}
