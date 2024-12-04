import { forwardRef } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
}

export const InputOffer = forwardRef<HTMLInputElement, Props>(
  ({ name, type = 'text', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        name={name}
        className="mb-4 w-[350px] text-center rounded-full border-2 bg-[#717970]/60
                     border-primaryPalette p-4 text-black/80 outline-none focus:border-primaryPalette
                     placeholder-primaryPalette placeholder:font-bold placeholder:text-2xl"
        {...props}
      />
    );
  }
);

InputOffer.displayName = 'Input';

export default InputOffer;
