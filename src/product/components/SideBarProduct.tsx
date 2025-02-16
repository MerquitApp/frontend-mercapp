import React from 'react';
import Image from 'next/image';

interface Props {
  images: string[];
}

function SideBarProduct({ images }: Props) {
  return (
    <div className="flex flex-col gap-8">
      {images.map((image, index) => (
        <Image
          key={index}
          width={120}
          height={100}
          alt="Imagen de producto"
          className="rounded-lg shadow-black shadow-sm"
          src={image}
        />
      ))}
    </div>
  );
}

export default SideBarProduct;
