'use client';

import { BACKEND_URL } from '@/constants';
import { UserLike } from '@/types';
import ProductCard from '@/ui/components/ProductCard';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

function Likes() {
  const [likes, setLikes] = useState<UserLike[]>([]);

  useEffect(() => {
    const init = async () => {
      try {
        const result = await fetch(`${BACKEND_URL}/likes`, {
          credentials: 'include'
        });
        const data = await result.json();

        if (result.ok) {
          setLikes(data);
        }
      } catch (error) {
        toast.error('Ocurrio un error al obtener los likes');
        console.log(error);
      }
    };

    init();
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-screen gap-8">
      <h2 className="text-4xl font-bold text-primaryPalette">Favoritos</h2>
      <ul className="flex max-w-4xl flex-wrap gap-4 mx-auto">
        {likes.map((like) => (
          <li key={like.id}>
            <ProductCard product={like.product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Likes;
