import React from 'react';
import CustomDropdownMenu, {
  DropdownItem
} from '../../ui/components/CustomDropdownMenu';

interface FiltersProps {
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  distance: number;
  onDistanceChange: (value: number) => void;
}

const Filters: React.FC<FiltersProps> = ({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  distance,
  onDistanceChange
}) => {
  return (
    <div>
      <CustomDropdownMenu
        label={selectedCategory || 'Toodas las categorías'}
        onValueChange={onCategoryChange}>
        <DropdownItem key="ver" value="ver">
          Ver todo
        </DropdownItem>
        <DropdownItem key="coches" value="coches">
          Coches
        </DropdownItem>
        <DropdownItem key="motos" value="motos">
          Motos
        </DropdownItem>
        <DropdownItem key="motor" value="motor">
          Motor y accesorios
        </DropdownItem>
        <DropdownItem key="informatica" value="informatica">
          Informática
        </DropdownItem>
        <DropdownItem key="deporte" value="deporte">
          Deporte y ocio
        </DropdownItem>
        <DropdownItem key="electrodomesticos" value="electrodomesticos">
          Electrodomésticos
        </DropdownItem>
        <DropdownItem key="niños" value="niños">
          Niños y bebés
        </DropdownItem>
        <DropdownItem key="hogar" value="hogar">
          Hogar y jardín
        </DropdownItem>
        <DropdownItem key="empleo" value="empleo">
          Empleo
        </DropdownItem>
      </CustomDropdownMenu>
      {/* Filtro de Búsqueda */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filtro de Distancia (Proximidad) */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Distancia (km):
          <input
            type="number"
            min="1"
            value={distance}
            onChange={(e) => onDistanceChange(Number(e.target.value))}
            className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
      </div>
    </div>
  );
};

export default Filters;
