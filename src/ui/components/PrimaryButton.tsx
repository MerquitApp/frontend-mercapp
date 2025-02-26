import { forwardRef, ReactNode } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  variant?: string;
}

const PrimaryButton = forwardRef<HTMLButtonElement, Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`flex w-full items-center justify-center space-x-2 rounded-md bg-primaryPalette py-2 text-white shadow-sm transition-opacity hover:opacity-90 ${className ?? ''} active:scale-[0.98] transition-transform p-2 disabled:opacity-80 disabled:cursor-not-allowed`}
        {...props}>
        {children}
      </button>
    );
  }
);

PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
