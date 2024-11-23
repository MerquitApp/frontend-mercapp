import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function SliderHome() {
  const productos = Array(10).fill({
    titulo: 'Navaja multiusos',
    precio: '€10',
    imagenUrl: '/navaja.png'
  });

  return (
    <div className="p-8 pb-0">
      <h2 className="text-2xl font-bold mb-6">Más valorados</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={5}
        navigation>
        {productos.map((producto, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col bg-whitePalette mb-10">
              <img
                src={producto.imagenUrl}
                alt={producto.titulo}
                className="w-80 mb-4 rounded-xl"
              />
              <h3 className="text-lg font-semibold">{producto.titulo}</h3>
              <p className="font-bold text-2xl mt-2">{producto.precio}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default SliderHome;
