import Image from 'next/image';
import React from 'react';
import sectionImage from '@/assets/section-image.svg';

function SectionHome() {
  return (
    <div className="flex flex-col justify-center mt-8 p-4 gap-4">
      <span className="border-small border-greyPalette"></span>
      <div className="flex justify-center">
        <div className="bg-gray-200 p-4 w-1/4">
          <h2 className="font-bold text-5xl">
            Aquí, lo antiguo es lo
            <span className="text-primaryPalette"> nuevo.</span>
          </h2>
          <h2 className="font-bold text-5xl">
            Compra y vende
            <span className="text-primaryPalette"> facilmente.</span>
          </h2>
          <div className="flex justify-center items-center mt-8">
            <button className="bg-primaryPalette text-white text-sm font-bold py-2 px-4 rounded-lg uppercase">
              Compra ahora
            </button>
          </div>
        </div>
        <div>
          <Image
            width={710}
            height={399}
            src={sectionImage}
            className=""
            alt="Imagen de E-commerce"
          />
        </div>
      </div>
    </div>
  );
}

export default SectionHome;
