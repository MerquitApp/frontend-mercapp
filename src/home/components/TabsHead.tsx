import { Tabs, Tab, Button } from '@nextui-org/react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/dropdown';

export default function TabsHead() {
  return (
    <div className="flex flex-row items-center justify-center md:justify-between gap-2 text-blackPalette max-w-4xl w-full mx-auto">
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">Todas las categorias</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="ver">Ver todo</DropdownItem>
          <DropdownItem key="coches">Coches</DropdownItem>
          <DropdownItem key="motos">Motos</DropdownItem>
          <DropdownItem key="motor">Motor y accesorios</DropdownItem>
          <DropdownItem key="informatica">Informática</DropdownItem>
          <DropdownItem key="deporte">Deporte y ocio</DropdownItem>
          <DropdownItem key="electrodomesticos">Electrodomésticos</DropdownItem>
          <DropdownItem key="niños">Niños y bebés</DropdownItem>
          <DropdownItem key="hogar">Hogar y jardín</DropdownItem>
          <DropdownItem key="empleo">Empleo</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      {/* Contenido principal */}
      <div className="hidden md:flex">
        <Tabs aria-label="Options" variant="underlined">
          <Tab key="coches" title="Coches" />
          <Tab key="motos" title="Motos" />
          <Tab key="motor" title="Motor y accesorios" />
          <Tab key="moda" title="Moda y accesorios" />
          <Tab key="inmobiliaria" title="Inmobiliaria" />
        </Tabs>
      </div>
    </div>
  );
}
