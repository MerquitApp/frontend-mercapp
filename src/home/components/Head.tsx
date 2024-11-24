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
    <Navbar isBordered className=" [&>header]:max-w-full justify-center">
      <Link href="/">
        <NavbarBrand className="max-w-32">
          <p className="font-bold text-inherit text-2xl text-primaryPalette">
            MercApp
          </p>
        </NavbarBrand>
      </Link>
      <NavbarContent
        as="div"
        className="justify-items-center max-w-screen-lgw-full"
        justify="end">
        <Input
          classNames={{
            base: 'max-w-full sm:max-w-96 h-10',
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
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">
            <Button
              className="text-primaryPalette bg-default-400/20 border-primaryPalette"
              variant="bordered">
              Registrate o inicia sesión
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/upload-product">
            <Button
              className="bg-primaryPalette text-whitePalette"
              color="primary"
              startContent={<IoAddCircleOutline size={30} />}
              variant="flat">
              Vender
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
