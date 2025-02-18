'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Input
} from '@nextui-org/react';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import { IoAddCircleOutline } from 'react-icons/io5';
import { useAuthStore } from '@/store/auth';
import { FaUser } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import Image from 'next/image';
import { BACKEND_URL } from '@/constants';
import { ProductResponse } from '@/types';
import Link from 'next/link';

export default function Header() {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState<null | ProductResponse[]>(null);
  const [debouncedSearch] = useDebounce(search, 500);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
    if (debouncedSearch.trim().length === 0) {
      setItems(null);
      return;
    }

    const searchItems = async () => {
      try {
        const result = await fetch(
          `${BACKEND_URL}/products?q=${debouncedSearch}`
        );
        const response = await result.json();

        setItems(response);
      } catch (error) {
        console.log(error);
      }
    };

    searchItems();
  }, [debouncedSearch]);

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
          <NavbarItem className="flex-1 relative">
            <Input
              classNames={{
                base: 'max-w-full sm:max-w-96 h-12',
                mainWrapper: 'h-full w-full',
                input: 'text-small',
                inputWrapper:
                  'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20'
              }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Busca tu producto"
              size="sm"
              startContent={<PiMagnifyingGlassBold size={18} fill="#416954" />}
              type="text"
            />
            <ul
              className={`bg-whitePalette border border-gray-300 rounded-md w-full absolute p-2 mt-2 flex flex-col gap-4 ${items ? 'block' : 'hidden'}`}>
              {items?.length === 0 ? (
                <li>
                  <p className="italic">Sin resultados</p>
                </li>
              ) : (
                items?.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/product/${item.id}`}
                      className="flex items-center gap-4">
                      <Image
                        width={120}
                        height={100}
                        alt="Imagen de producto"
                        className="rounded-lg object-cover"
                        src={item.cover_image.image}
                      />
                      <div className="flex flex-col gap-1 items-center flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm">{item.price}€</p>
                      </div>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </NavbarItem>
          <NavbarItem className="flex items-center">
            {isLoggedIn ? (
              <Button
                as={Link}
                href="/profile"
                className="text-primaryPalette bg-default-400/20 border-primaryPalette"
                variant="bordered">
                <FaUser size={24} />
              </Button>
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
              <Button
                as={Link}
                href="/upload-product"
                className="bg-primaryPalette text-whitePalette"
                color="primary"
                startContent={<IoAddCircleOutline size={24} />}
                variant="flat">
                Vender
              </Button>
            )}
          </NavbarItem>
        </NavbarContent>
      </div>
    </Navbar>
  );
}
