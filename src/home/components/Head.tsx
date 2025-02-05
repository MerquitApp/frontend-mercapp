import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Input
} from '@nextui-org/react';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import { IoAddCircleOutline } from 'react-icons/io5';

export default function Head() {
  return (
    <Navbar isBordered className="flex flex-wrap px-4 sm:px-6 h-36 sm:h-20">
      {/* Contenedor principal que cambia en pantallas pequeñas */}
      <div className="flex flex-col sm:flex-row w-full justify-between items-center">
        {/* Brand Logo */}
        <Link href="/">
          <NavbarBrand className="max-w-32 mb-4 sm:mb-0">
            <p className="font-bold text-inherit text-xl sm:text-2xl text-primaryPalette">
              MercApp
            </p>
          </NavbarBrand>
        </Link>

        {/* Search Input */}
        <NavbarContent
          as="div"
          className="flex justify-center max-w-lg w-full mx-1 mb-4 sm:mb-0">
          <Input
            classNames={{
              base: 'max-w-full sm:max-w-96 h-12',
              mainWrapper: 'h-full w-full',
              input: 'text-small',
              inputWrapper:
                'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20'
            }}
            placeholder="Busca tu producto"
            size="sm"
            startContent={<PiMagnifyingGlassBold size={18} />}
            type="search"
          />
        </NavbarContent>
      </div>

      {/* Buttons - con flex-column en pantallas pequeñas */}
      <NavbarContent
        justify="center"
        className="w-full sm:w-auto gap-2 sm:ml-4 flex flex-col sm:flex-row">
        {/* Login Button */}
        <NavbarItem>
          <Link href="/login">
            <Button
              className="text-primaryPalette bg-default-400/20 border-primaryPalette text-xs sm:text-sm py-2 px-3 sm:py-3 sm:px-4"
              variant="bordered">
              Registrate o inicia sesión
            </Button>
          </Link>
        </NavbarItem>

        {/* Sell Button */}
        <NavbarItem>
          <Link href="/upload-product">
            <Button
              className="bg-primaryPalette text-whitePalette text-xs sm:text-sm py-2 px-3 sm:py-3 sm:px-4"
              color="primary"
              startContent={<IoAddCircleOutline size={20} />}
              variant="flat">
              Vender
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
