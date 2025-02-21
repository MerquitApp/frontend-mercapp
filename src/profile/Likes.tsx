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

        console.log(data);
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
    <ul className="flex max-w-4xl flex-wrap gap-4 mx-auto">
      {likes.map((like) => (
        <li key={like.id}>
          <ProductCard product={like.product} />
        </li>
      ))}
    </ul>
  );
}

export default Likes;
