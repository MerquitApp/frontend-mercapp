'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Avatar } from '@nextui-org/react';
import PrimaryButton from '@/ui/components/PrimaryButton';
import { Modal } from './Modal';
import { LuHeart, LuShare2, LuStar } from 'react-icons/lu';
import Image from 'next/image';

interface Props {
  id: string;
  productDescription: string;
  productName: string;
  userName: string;
  userReview: number;
  productCost: number;
  coverImage: string;
  images: string[];
}

function ProductSection({
  userName,
  userReview,
  productCost,
  productName,
  productDescription,
  coverImage,
  images,
  id
}: Props) {
  const [activeImage, setActiveImage] = useState(0);
  const [shareUrl, setShareUrl] = useState('');
  const [offer, setOffer] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [offset, setOffset] = useState(0);
  const [offerValue, setOfferValue] = useState<string | null>(null);

  const allImages = [coverImage, ...images];

  const handleOffer = () => {
    setOffer(!offer);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    setShareUrl(
      `https://x.com/intent/tweet?text=Mira%20este%20producto%20de%20Mercapp%20https%3A%2F%2F${window?.location?.host}%2Fproduct%2F${id}%0A%23Mercapp%20%23Ecomerce`
    );
  }, [id]);

  return (
    <div className="flex justify-center pt-5 px-4 max-w-7xl mx-auto">
      <div className="flex items-start gap-10">
        <div className="flex flex-col justify-between">
          <div className="mb-4">
            <div className="flex flex-row gap-8 [&_img]:rounded-md [&_img]:object-cover">
              <ul className="flex flex-col gap-8 max-h-[450px] overflow-y-scroll p-4">
                {[coverImage, ...images].map((image, index) => (
                  <li key={image}>
                    <button
                      onClick={() => setActiveImage(index)}
                      className={
                        activeImage === index
                          ? 'ring-2 ring-primaryPalette rounded-md'
                          : ''
                      }>
                      <Image
                        src={image}
                        alt="product cover"
                        width={150}
                        height={200}
                        className="h-[200px] w-[150px]"
                      />
                    </button>
                  </li>
                ))}
              </ul>
              <Image
                src={allImages[activeImage]}
                alt="product cover"
                width={400}
                height={400}
                className="h-[400px] w-[350px]"
              />
            </div>
            <div className="flex gap-3 mt-4">
              <LuHeart size={24} />
              <a href={shareUrl} target="_blank" rel="noreferrer">
                <LuShare2 size={24} />
              </a>
            </div>
          </div>
          <h3 className="font-bold text-xl text-primaryPalette">
            {productName}
          </h3>
          <p className="font-semibold text-s text-greyPalette w-full">
            {productDescription}
          </p>
          <span className="border-small border-greyPalette mt-4 w-full"></span>
          <div className="flex justify-between items-center p-4 w-full">
            <div className="flex justify-center items-center gap-4">
              <Avatar size="lg" name={userName} />
              <div className="flex flex-col gap-1">
                <h4 className="text-s">{userName}</h4>
                <div className="flex justify-around text-center items-center py-1  rounded-full bg-yellow-200">
                  <LuStar size={18} fill="#facc15" stroke="#facc15" />
                  <h4 className="text-yellow-400 font-bold">{userReview}</h4>
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
            <div className="flex gap-8 justify-start items-center">
              <div className="flex items-center gap-1">
                <h4 className="text-4xl font-bold text-blackPalette">
                  {`${productCost}`}
                </h4>
                <h4 className="text-2xl font-bold text-blackPalette">€</h4>
              </div>
              {offerValue && (
                <>
                  <div className="flex items-center gap-2">
                    <h3>
                      <span className="text-sm font-bold uppercase text-primaryPalette">
                        Nueva oferta
                      </span>
                    </h3>
                    <div className="flex items-center gap-1">
                      <h4 className="text-3xl font-bold text-redPalette">
                        {`${offerValue}`}
                      </h4>
                      <h4 className="text-xl font-bold text-redPalette">€</h4>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="flex gap-2 w-2/4">
              <PrimaryButton onClick={handleOffer} className="p-2">
                Realizar Oferta
              </PrimaryButton>
              <PrimaryButton className="p-2">Compra Ahora</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {/* <h3>Aquí pondremos las recomendaciones de otros productos</h3> */}
      </div>
      {offer && (
        <Modal
          isOpen={offer}
          onClose={() => setOffer(false)}
          setOffset={setOffset}
          setOfferValue={setOfferValue}>
          <div className="flex justify-center items-center">
            <h2>¡Oferta un nuevo precio!</h2>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ProductSection;
