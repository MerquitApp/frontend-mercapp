'use client';

import React, { useState } from 'react';
import { Avatar } from '@nextui-org/react';
import PrimaryButton from '@/ui/components/PrimaryButton';
import { OfferModal } from './OfferModal';
import { LuHeart, LuShare2, LuStar } from 'react-icons/lu';
import Image from 'next/image';
import { useAuthStore } from '@/store/auth';
import { toast } from 'sonner';
import { BACKEND_URL } from '@/constants';
import { useRouter } from 'next/navigation';
import { useChatStore } from '@/store/chat';
import Link from 'next/link';

interface Props {
  id: string;
  productDescription: string;
  productName: string;
  seller: {
    userAvatar: string;
    userId: string;
    userName: string;
    userReview: number;
  };
  productCost: number;
  coverImage: string;
  images: string[];
  isLiked: boolean;
  isActive: boolean;
}

function ProductSection({
  productCost,
  productName,
  productDescription,
  coverImage,
  images,
  id,
  isActive,
  seller: { userId, userAvatar, userName, userReview },
  isLiked: isLikedProp
}: Props) {
  const { push } = useRouter();
  const [isLiked, setIsLiked] = useState(isLikedProp);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const authUserId = useAuthStore((state) => state.userId);
  const [activeImage, setActiveImage] = useState(0);
  const [isCreatingOffer, setIsCreatingOffer] = useState(false);
  const [newPrice, setNewPrice] = useState<number>(0);
  const setActiveChatId = useChatStore((state) => state.setActiveChatId);

  const isOwner = authUserId === userId;
  const allImages = [coverImage, ...images];

  const handleCreateOffer = () => {
    setIsCreatingOffer(!isCreatingOffer);
  };

  const handleOfferValue = async (value: number) => {
    try {
      const result = await fetch(`${BACKEND_URL}/offer/${id}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          price: value
        })
      });

      if (result.ok) {
        toast.success('¡Oferta creada correctamente!');
        setIsCreatingOffer(false);
      } else {
        setNewPrice(0);
        toast.error('Error al crear la oferta');
      }
    } catch (error) {
      console.log(error);
      toast.error('Error al crear la oferta');
    }

    setNewPrice(value);
  };

  const handleLike = async () => {
    if (!isLoggedIn) {
      push('/login');
      return;
    }

    if (isLiked) {
      try {
        const result = await fetch(`${BACKEND_URL}/likes/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        });

        if (result.ok) {
          toast.success('¡Ya no te gusta el producto!');
          setIsLiked(false);
        } else {
          toast.error('Error al desmarcar como favorito');
        }
      } catch (error) {
        console.log(error);
        toast.error('Error al desmarcar como favorito');
      }
    } else {
      try {
        const result = await fetch(`${BACKEND_URL}/likes/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        });

        if (result.ok) {
          toast.success('¡Te gusta el producto!');
          setIsLiked(true);
        } else {
          toast.error('Error al marcar como favorito');
        }
      } catch (error) {
        console.log(error);
        toast.error('Error al marcar como favorito');
      }
    }
  };

  const handleCreateChat = async () => {
    if (!isLoggedIn) {
      push('/login');
      return;
    }

    try {
      const result = await fetch(`${BACKEND_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          user_id: userId
        })
      });

      const data = await result.json();

      if (result.ok) {
        setActiveChatId(data.id);
        push('/profile/conversations');
      } else {
        push('/login');
      }
    } catch (error) {
      console.log(error);
      toast.error('Error al crear el chat');
    }
  };

  const handlePayProduct = async () => {
    if (!isLoggedIn) {
      push('/login');
      return;
    }

    try {
      const result = await fetch(`${BACKEND_URL}/payments/${id}`, {
        method: 'POST',
        credentials: 'include'
      });

      const data = await result.json();

      if (result.ok) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.log(error);
      toast.error('Error al realizar la compra');
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Producto de Mercapp',
          text: '¡Mira este producto de Mercapp!',
          url: `${window?.location?.origin}/product/${id}`
        });
      } catch (error) {
        console.error('Error al compartir:', error);
        toast.error('Error al compartir');
      }
    } else {
      try {
        await navigator.clipboard.writeText(
          `${window?.location?.origin}/product/${id}`
        );
        toast.success('Texto copiado al portapapeles');
      } catch (error) {
        console.error('Error al copiar la URL:', error);
        toast.error('Error al copiar la URL');
      }
    }
  };

  return (
    <div className="flex justify-center pt-5 px-4 max-w-2xl mx-auto">
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
              <button onClick={handleLike}>
                <LuHeart
                  size={24}
                  className={isLiked ? 'fill-redPalette stroke-redPalette' : ''}
                />
              </button>
              <button onClick={handleShare}>
                <LuShare2 size={24} />
              </button>
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
            <Link
              href={`/user/${userId}`}
              className="flex justify-center items-center gap-4 cursor-pointer">
              <Avatar
                size="lg"
                name={userName}
                src={userAvatar}
                classNames={{
                  img: 'opacity-100'
                }}
              />
              <div className="flex flex-col gap-1">
                <h4 className="text-s">{userName}</h4>
                <div className="flex justify-around text-center items-center py-1  rounded-full bg-yellow-200">
                  <LuStar size={18} fill="#facc15" stroke="#facc15" />
                  <h4 className="text-yellow-400 font-bold">{userReview}</h4>
                </div>
              </div>
            </Link>
            <button
              onClick={handleCreateChat}
              disabled={isOwner || !isActive}
              className="border-2 border-primaryPalette rounded-full px-4 py-1 font-bold disabled:opacity-80 disabled:cursor-not-allowed">
              Chat
            </button>
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
              {newPrice !== 0 && (
                <div className="flex items-center gap-2">
                  <h3>
                    <span className="text-sm font-bold uppercase text-primaryPalette">
                      Nueva oferta
                    </span>
                  </h3>
                  <div className="flex items-center gap-1">
                    <h4 className="text-3xl font-bold text-redPalette">
                      {newPrice}
                    </h4>
                    <h4 className="text-xl font-bold text-redPalette">€</h4>
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-2 w-2/4">
              <PrimaryButton
                onClick={handleCreateOffer}
                className="p-2"
                disabled={isOwner || !isActive}>
                Realizar Oferta
              </PrimaryButton>
              <PrimaryButton
                className="p-2"
                disabled={isOwner || !isActive}
                onClick={handlePayProduct}>
                Compra Ahora
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {/* <h3>Aquí pondremos las recomendaciones de otros productos</h3> */}
      </div>
      {isCreatingOffer && (
        <OfferModal
          productPrice={productCost}
          isOpen={isCreatingOffer}
          onClose={() => setIsCreatingOffer(false)}
          onSetNewPrice={handleOfferValue}>
          <div className="flex justify-center items-center">
            <h2>¡Oferta un nuevo precio!</h2>
          </div>
        </OfferModal>
      )}
    </div>
  );
}

export default ProductSection;
