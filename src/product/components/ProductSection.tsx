import Image from 'next/image';
import React from 'react';
import productImage from '@/assets/product-image.svg';
import Link from 'next/link';
import { Avatar } from '@nextui-org/react';
import PrimaryButton from '@/ui/components/PrimaryButton';
import SideBarProduct from './SideBarProduct';
import { Icon } from '@iconify/react/dist/iconify.js';

interface Props {
  userName: string;
  userReview: number;
  productCost: number;
}

function ProductSection({ userName, userReview, productCost }: Props) {
  return (
    <div className="flex justify-between pt-5 px-4">
      <div className="flex items-start gap-10">
        <div className="flex flex-col justify-between w-3/4">
          <div className="mb-4">
            <Image
              width={628}
              height={128}
              src={productImage}
              alt="Imagen de producto"
              className="rounded-lg shadow-black shadow-md"
            />
            <div className="flex gap-3 mt-4">
              <Icon icon="mdi:heart" className="text-redPalette h-8 w-8" />
              <Icon icon="mynaui:share" className=" h-8 w-8" />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <h3 className="font-bold text-xl text-primaryPalette">
              Kit de herramienta multiuso
            </h3>
            <h3 className="font-normal text-xs text-greyPalette pl-2">
              Como nuevo
            </h3>
            <h3 className="font-normal text-xs text-greyPalette pl-2">
              Venta solo en persona
            </h3>
          </div>
          <h4 className="font-semibold text-s text-greyPalette w-full">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quo
            dolorum dolorem.
          </h4>
          <span className="border-small border-greyPalette mt-4 w-full"></span>
          <div className="flex justify-between items-center p-4 w-full">
            <div className="flex justify-center items-center gap-4">
              <Avatar size="lg" name="John Doe" />
              <div className="flex flex-col gap-1">
                <h4 className="text-s">{userName}</h4>
                <div className="flex justify-around text-center items-center py-1  rounded-full bg-yellow-200">
                  <Icon icon="emojione:star" />
                  <h4 className="text-s text-yellow-400 font-bold">
                    {userReview}
                  </h4>
                </div>
              </div>
            </div>
            <div>
              <Link
                href="/chat"
                className="border-2 border-primaryPalette rounded-full px-4 py-1 font-bold">
                Chat
              </Link>
            </div>
          </div>
          <span className="border-small border-greyPalette mb-4 w-full"></span>
          <div className="flex justify-between w-full">
            <div>
              <h4 className="text-4xl font-bold text-blackPalette">
                {`${productCost}€`}
              </h4>
            </div>
            <div>
              <PrimaryButton className="p-2">Compra Ahora</PrimaryButton>
            </div>
          </div>
        </div>
        <SideBarProduct />
      </div>
      <div className="flex flex-col">
        <h3>Aquí pondremos las recomendaciones de otros productos</h3>
      </div>
    </div>
  );
}

export default ProductSection;
