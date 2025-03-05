import { forwardRef, ReactNode } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  variant?: string;
  as?: React.ElementType;
  [key: string]: unknown;
}

const PrimaryButton = forwardRef<HTMLButtonElement, Props>(
  ({ className, children, as = 'button', ...props }, ref) => {
    const Component = as;

    return (
      <>
        {/* @ts-expect-error Use the `as` prop */}
        <Component
          ref={ref}
          className={`flex w-full items-center justify-center space-x-2 rounded-md bg-primaryPalette py-2 text-white shadow-sm transition-opacity hover:opacity-90 ${className ?? ''} active:scale-[0.98] transition-transform p-2 disabled:opacity-80 disabled:cursor-not-allowed`}
          {...props}>
          {children}
        </Component>
      </>
    );
  }
);

PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;