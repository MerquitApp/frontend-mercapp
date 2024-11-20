import { Tabs, Tab } from '@nextui-org/react';

export default function App() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 text-blackPalette">
      <Tabs aria-label="Options" variant="underlined">
        <Tab key="coches" title="Coches"></Tab>
        <Tab key="motos" title="Motos"></Tab>
        <Tab key="motor" title="Motor y accesorios"></Tab>
        <Tab key="moda" title="Moda y accesorios"></Tab>
        <Tab key="inmobiliaria" title="Inmobiliaria"></Tab>
      </Tabs>
    </div>
  );
}
