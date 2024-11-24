import React from 'react';
import Image from 'next/image';
import productImage from '@/assets/product-image.svg';

function SideBarProduct() {
  return (
    <div className="flex flex-col gap-8">
      <Image
        width={120}
        height={100}
        src={productImage}
        alt="Imagen de producto"
        className="rounded-lg shadow-black shadow-sm"
      />
      <Image
        width={120}
        height={100}
        src={productImage}
        alt="Imagen de producto"
        className="rounded-lg shadow-black shadow-sm"
      />
      <Image
        width={120}
        height={100}
        src={productImage}
        alt="Imagen de producto"
        className="rounded-lg shadow-black shadow-sm"
      />
    </div>
  );
}

export default SideBarProduct;
