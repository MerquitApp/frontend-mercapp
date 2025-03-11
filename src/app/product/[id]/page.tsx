import { AUTH_COOKIE_NAME, BACKEND_URL } from '@/constants';
import Header from '@/home/components/Header';
import ProductSection from '@/product/components/ProductSection';
import Footer from '@/ui/components/Footer';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function ProductPage({
  params
}: {
  params: { id: string };
}) {
  const cookiesStore = cookies();
  const { id } = params;
  let product;
  let profile;

  try {
    const productResp = await fetch(`${BACKEND_URL}/products/${id}`, {
      headers: {
        Authorization: `Bearer ${cookiesStore.get(AUTH_COOKIE_NAME)?.value}`
      }
    });
    product = await productResp.json();

    const profileResp = await fetch(
      `${BACKEND_URL}/users/profile/${product.user.user_id}`
    );
    profile = await profileResp.json();
  } catch (error) {
    console.log(error);
    redirect('/404');
  }

  return (
    <>
      <Header />
      <ProductSection
        id={product.id}
        seller={{
          userName: product.user.name,
          userReview: profile.avg,
          userAvatar: product.user?.profile_picture,
          userId: product.user.user_id
        }}
        isActive={product.isActive}
        productCost={product.price}
        productDescription={product.description}
        productName={product.name}
        coverImage={product.cover_image.image}
        images={product.images.map(({ image }: { image: string }) => image)}
        isLiked={product.isLiked}
      />
      <Footer />
    </>
  );
}
