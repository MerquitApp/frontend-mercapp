'use client';

import { BACKEND_URL } from '@/constants';
import { ProductResponse } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const ITEM_WIDTH = 200;
const ITEM_GAP = 32;
const ITEMS_PER_VIEW = 1;

const SliderHome = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [products, setProducts] = useState<ProductResponse[]>([]);

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

  const isNextButtonDisabled = currentIndex >= maxIndex;
  const isPrevButtonDisabled = currentIndex <= 0;

  useEffect(() => {
    setMaxIndex(products.length - ITEMS_PER_VIEW);
  }, [products]);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await fetch(`${BACKEND_URL}/products?limit=15`);
      const response = await result.json();

      setProducts(response);
    };

    fetchProducts();
  }, []);

  if (products.length === 0) {
    return null;
  }

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
            {products.map((p) => (
              <div key={p.id} className={`flex-shrink-0 w-[${ITEM_WIDTH}px]`}>
                <Link
                  href={`/product/${p.id}`}
                  className="p-4 border rounded-lg bg-white shadow-md w-full block">
                  <Image
                    width={150}
                    height={125}
                    src={p.cover_image.image}
                    alt={p.name}
                    className="w-full object-cover rounded-lg h-56"
                  />
                  <div className="mt-4 text-center flex flex-col items-center">
                    <h3 className="font-semibold text-xs md:text-lg">
                      {p.name}
                    </h3>
                    <p className="text-sm md:text-xl font-bold mt-2">
                      {p.price}€
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Botones de navegación */}
        <div className="flex justify-center items-center gap-16 lg:block mt-8">
          <button
            onClick={handlePrev}
            disabled={isPrevButtonDisabled}
            className={`lg:absolute lg:top-1/2 lg:-left-12 lg:transform lg:-translate-y-1/2 bg-white shadow-lg p-2 rounded-full text-gray-800 hover:bg-gray-100 ${
              isPrevButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
            }`}>
            <IoIosArrowBack />
          </button>
          <button
            onClick={handleNext}
            disabled={isNextButtonDisabled}
            className={`lg:absolute lg:top-1/2 lg:-right-12 lg:transform lg:-translate-y-1/2 bg-white shadow-lg p-2 rounded-full text-gray-800 hover:bg-gray-100 ${
              isNextButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
            }`}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderHome;
