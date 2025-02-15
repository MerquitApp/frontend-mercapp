import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const productos = Array.from({ length: 10 }, (_, i) => ({
  titulo: `Navaja multiusos ${i}`,
  precio: '10€',
  imagenUrl: '/navaja.png'
}));

const ITEM_WIDTH = 200;
const ITEM_GAP = 32;
const ITEMS_PER_VIEW = 2;

const SliderHome = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  //Calcular el máximo índice para evitar productos partidos
  const maxIndex = productos.length - ITEMS_PER_VIEW;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - ITEMS_PER_VIEW);
    }
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prevIndex) => prevIndex + ITEMS_PER_VIEW);
    }
  };

  return (
    <div className="max-w-4xl mt-12 mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Más valorados</h2>
      <div className="relative">
        {/* Contenedor del slider */}
        <div className="overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex / ITEMS_PER_VIEW) * ((ITEM_WIDTH + ITEM_GAP) * ITEMS_PER_VIEW)}px)`
            }}>
            {productos.map((producto, index) => (
              <div key={index} className={`w-[${ITEM_WIDTH}px] flex-shrink-0 `}>
                <div className="p-4 border rounded-lg bg-white shadow-md w-full">
                  <img
                    src={producto.imagenUrl}
                    alt={producto.titulo}
                    className="w-full object-cover rounded-lg"
                  />
                  <div className="mt-4 text-center flex flex-col items-center">
                    <h3 className="font-semibold text-xs md:text-lg">
                      {producto.titulo}
                    </h3>
                    <p className="text-sm md:text-xl font-bold mt-2">
                      {producto.precio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botones de navegación */}
        <div className="flex justify-center items-center gap-16 lg:block mt-8">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`lg:absolute lg:top-1/2 lg:-left-12 lg:transform lg:-translate-y-1/2 bg-white shadow-lg p-2 rounded-full text-gray-800 hover:bg-gray-100 ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}>
            <IoIosArrowBack />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className={`lg:absolute lg:top-1/2 lg:-right-12 lg:transform lg:-translate-y-1/2 bg-white shadow-lg p-2 rounded-full text-gray-800 hover:bg-gray-100 ${
              currentIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : ''
            }`}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderHome;
