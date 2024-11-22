import type { ReactNode } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  children?: ReactNode;
  type?: string;
}

export default function Input({
  label,
  type,
  name,
  children,
  ...props
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="mt-2">
        {label}
      </label>
      <input
        name={name}
        type={type ?? 'text'}
        className="border-gray-300 border-2 rounded-md p-2"
        {...props}
      />
      {children}
    </div>
  );
}
