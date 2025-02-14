'use client';

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
import { useAuthStore } from '@/store/auth';

export default function Header() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <Navbar isBordered className="flex flex-wrap px-4 sm:px-6 h-36 sm:h-20">
      {/* Contenedor principal que cambia en pantallas pequeñas */}
      <div className="flex flex-col sm:gap-8 sm:flex-row w-full justify-between items-center">
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
          <NavbarItem className="flex-1">
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
          </NavbarItem>
          <NavbarItem className="flex items-center">
            {isLoggedIn ? (
              <Link href="/profile">
                <Button
                  className="text-primaryPalette bg-default-400/20 border-primaryPalette"
                  variant="bordered">
                  Perfil
                </Button>
              </Link>
            ) : (
              <Link href="/login">
                <Button
                  className="text-primaryPalette bg-default-400/20 border-primaryPalette"
                  variant="bordered">
                  Iniciar sesión
                </Button>
              </Link>
            )}
          </NavbarItem>
          <NavbarItem>
            {isLoggedIn && (
              <Link href="/upload-product">
                <Button
                  className="bg-primaryPalette text-whitePalette"
                  color="primary"
                  startContent={<IoAddCircleOutline size={30} />}
                  variant="flat">
                  Vender
                </Button>
              </Link>
            )}
          </NavbarItem>
        </NavbarContent>
      </div>
    </Navbar>
  );
}
