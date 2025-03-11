'use client';

import { Tabs, Tab, Button } from '@nextui-org/react';
import Link from 'next/link';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/dropdown';

const TABS: string[] = [
  'Coches',
  'Motos',
  'Motor y accesorios',
  'Moda y accesorios',
  'Inmobiliaria',
  'Deporte',
  'Electrodomésticos',
  'Niños',
  'Hogar',
  'Empleo'
];

export default function TabsHead() {
  return (
    <div className="flex flex-row items-center justify-center md:justify-between gap-2 text-blackPalette max-w-4xl w-[90%] mx-auto">
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">Todas las categorias</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="ver" as={Link} href="/products">
            Ver todos
          </DropdownItem>
          {
            TABS.map((tab) => (
              <DropdownItem
                key={tab}
                as={Link}
                href={`/products?category=${tab.toLowerCase()}`}>
                {tab}
              </DropdownItem>
            )) as any
          }
        </DropdownMenu>
      </Dropdown>
      {/* Contenido principal */}
      <div className="hidden md:flex">
        <Tabs aria-label="Options" variant="underlined">
          <Tab
            key="coches"
            title="Coches"
            as={Link}
            href="/products?category=coches"
          />
          <Tab
            key="motos"
            title="Motos"
            as={Link}
            href="/products?category=motos"
          />
          <Tab
            key="motor"
            title="Motor y accesorios"
            as={Link}
            href="/products?category=motor"
          />
          <Tab
            key="moda"
            title="Moda y accesorios"
            as={Link}
            href="/products?category=moda"
          />
          <Tab key="discover" title="Descubrir" as={Link} href="/discover" />
        </Tabs>
      </div>
    </div>
  );
}
