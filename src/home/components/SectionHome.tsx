import Image from 'next/image';
import React from 'react';
import sectionImage from '@/assets/section-image.svg';
import PrimaryButton from '@/ui/components/PrimaryButton';

function SectionHome() {
  return (
    <div className="flex flex-col justify-center items-center mt-8 p-4 gap-4">
      <span className="border-small border-greyPalette w-full"></span>
      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-4xl">
        <div className="bg-gray-200 p-4 w-full md:w-1/2">
          <h2 className="font-bold text-3xl md:text-4xl">
            Aquí, lo antiguo es lo
            <span className="text-primaryPalette"> nuevo.</span>
          </h2>
          <h2 className="font-bold text-3xl md:text-4xl">
            Compra y vende
            <span className="text-primaryPalette"> facilmente.</span>
          </h2>
          <div className="flex justify-center items-center mt-8">
            <PrimaryButton>Compra ahora</PrimaryButton>
          </div>
        </div>
        <div className="mt-4 md:mt-0 w-full md:w-1/2 flex justify-center">
          <Image
            width={710}
            height={399}
            src={sectionImage}
            className="w-full md:w-auto"
            alt="Imagen de E-commerce"
          />
        </div>
      </div>
    </div>
  );
}

export default SectionHome;
