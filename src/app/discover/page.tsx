import { BACKEND_URL } from '@/constants';
import Header from '@/home/components/Header';
import SwipeCardGroup from '@/home/components/SwipeCardGroup';
import { ProductResponse } from '@/types';
import Footer from '@/ui/components/Footer';

export default async function Page() {
  const resp = await fetch(`${BACKEND_URL}/products?limit=10`);
  const data: ProductResponse[] = await resp.json();

  return (
    <>
      <Header />
      <SwipeCardGroup
        cards={data.map((el) => ({
          id: el.id,
          title: el.name,
          price: el.price,
          userName: el.user.name,
          imageSrc: el.cover_image.image,
          description: el.description,
          avatar: el.user.profile_picture
        }))}
      />
      <Footer />
    </>
  );
}
