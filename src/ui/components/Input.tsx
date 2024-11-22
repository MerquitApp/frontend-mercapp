import { forwardRef, type ReactNode } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  children?: ReactNode;
  type?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, name, children, type = 'text', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label className="text-grayPalette text-sm font-medium" htmlFor={name}>
          {label}
        </label>
        <div className="flex flex-col gap-1">
          <input
            ref={ref}
            type={type}
            name={name}
            className="border-2 border-grayPalette rounded-md p-2"
            {...props}
          />
          {children}
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
