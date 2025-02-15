import Link from 'next/link';
import { FaCircleArrowRight } from 'react-icons/fa6';

type AccountProps = {
  accountIcon: React.ReactNode;
  accountName: string;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  [key: string]: unknown;
};
const AccountOption = ({
  accountName,
  accountIcon,
  as = Link,
  ...props
}: AccountProps) => {
  const AsComponent = as;

  return (
    <AsComponent
      {...props}
      className="flex w-full justify-between items-center gap-4 rounded-lg p-4 bg-white">
      <div className="flex items-center justify-start w-full gap-4">
        <span className="p-2 rounded-lg bg-primaryPalette/10 text-primaryPalette">
          {accountIcon}
        </span>
        <p className="text-primaryPalette font-semibold text-xs sm:text-sm md:text-base">
          {accountName}
        </p>
      </div>
      <div className="justify-end">
        <FaCircleArrowRight className="text-primaryPalette/50 w-5 h-5 hover:text-primaryPalette cursor-pointer" />
      </div>
    </AsComponent>
  );
};

export default AccountOption;
