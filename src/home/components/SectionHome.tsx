import Image from 'next/image';
import React from 'react';
import PrimaryButton from '@/ui/components/PrimaryButton';

function SectionHome() {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center mt-8">
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center w-full max-w-4xl">
        <div className="bg-gray-200 p-4 w-full lg:w-1/2 rounded-tl-md rounded-bl-md">
          <h2 className="font-bold text-3xl lg:text-4xl">
            Aquí, lo antiguo es lo
            <span className="text-primaryPalette"> nuevo.</span>
          </h2>
          <h2 className="font-bold text-3xl lg:text-4xl">
            Compra y vende
            <span className="text-primaryPalette"> facilmente.</span>
          </h2>
          <div className="flex justify-center items-center mt-8">
            <PrimaryButton>Compra ahora</PrimaryButton>
          </div>
        </div>
        <Image
          src="/home-photo.webp"
          width={200}
          height={448}
          className="object-cover max-h-96 w-full lg:max-w-[470px] rounded-tr-md rounded-br-md"
          alt="Imagen de E-commerce"
          unoptimized
        />
      </div>
    </div>
  );
}

export default SectionHome;
