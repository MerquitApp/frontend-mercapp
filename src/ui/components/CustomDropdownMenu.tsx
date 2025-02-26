import React from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu as NextUIDropdownMenu,
  DropdownItem as NextUIDropdownItem
} from '@nextui-org/dropdown';
import PrimaryButton from './PrimaryButton';

interface CustomDropdownMenuProps {
  label?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

const CustomDropdownMenu: React.FC<CustomDropdownMenuProps> = ({
  label = 'Selecciona una categoría',
  onValueChange,
  children
}) => {
  return (
    <Dropdown
      onChange={(event) =>
        onValueChange &&
        onValueChange((event.target as HTMLSelectElement).value)
      }>
      <DropdownTrigger>
        <PrimaryButton variant="bordered">{label}</PrimaryButton>
      </DropdownTrigger>
      <NextUIDropdownMenu aria-label="Filtrar por categorías">
        {React.Children.toArray(children) as React.ReactElement[]}
      </NextUIDropdownMenu>
    </Dropdown>
  );
};

export const DropdownItem = NextUIDropdownItem;
export default CustomDropdownMenu;
