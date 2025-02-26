'use client';
import { ProductResponse } from '@/types';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  product: ProductResponse;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/product/${product.id}`} legacyBehavior>
      <a className="p-4 border rounded-lg bg-white shadow-md w-full block">
        <Image
          width={150}
          height={125}
          src={product.cover_image.image}
          alt={product.name}
          className="w-full object-cover rounded-lg h-56"
        />
        <div className="mt-4 text-center flex flex-col items-center">
          <h3 className="font-semibold text-xs md:text-lg">{product.name}</h3>
          <p className="text-sm md:text-xl font-bold mt-2">{product.price}€</p>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
