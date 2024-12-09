import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const productos = Array(15).fill({
  titulo: 'Navaja multiusos',
  precio: '10€',
  imagenUrl: '/navaja.png'
});

const SliderHome = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const itemsPerView = 5;

  //Calcular el máximo índice para evitar productos partidos
  const maxIndex = productos.length - itemsPerView;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Más valorados</h2>
      <div className="relative">
        {/* Contenedor del slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 20}%)`
            }}>
            {productos.map((producto, index) => (
              <div
                key={index}
                className="w-1/5 flex-shrink-0 p-4"
                style={{ flexBasis: '20%' }}>
                <div className="p-4 border rounded-lg bg-white shadow-md">
                  <img
                    src={producto.imagenUrl}
                    alt={producto.titulo}
                    className="w-full object-cover rounded-lg"
                  />
                  <div className="mt-4">
                    <h3 className="font-semibold text-lg">{producto.titulo}</h3>
                    <p className="text-xl font-bold mt-2">{producto.precio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botones de navegación */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`absolute top-1/2 -left-8 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full text-gray-800 hover:bg-gray-100 ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}>
          <IoIosArrowBack />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
          className={`absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full text-gray-800 hover:bg-gray-100 ${
            currentIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : ''
          }`}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default SliderHome;
