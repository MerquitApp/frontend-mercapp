import { forwardRef } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  children?: React.ReactNode;
}

export const InputOffer = forwardRef<HTMLInputElement, Props>(
  ({ name, children, type = 'text', onChange, ...props }, ref) => {
    return (
      <>
        <input
          ref={ref}
          type={type}
          name={name}
          onChange={onChange}
          className="mb-4 w-[350px] text-center rounded-full border-2 bg-[#717970]/60
        border-primaryPalette p-4 text-black/80 outline-none select-none focus:border-primaryPalette
        placeholder-primaryPalette placeholder:font-bold placeholder:text-2xl"
          {...props}
        />
        {children}
      </>
    );
  }
);

InputOffer.displayName = 'InputOffer';


export default InputOffer;
