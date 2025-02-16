import { BACKEND_URL } from '@/constants';
import Head from '@/home/components/Header';
import ProductSection from '@/product/components/ProductSection';
import Footer from '@/ui/components/Footer';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function ProductPage({
  params
}: {
  params: { id: string };
}) {
  const { id } = params;
  let product;

  try {
    const result = await fetch(`${BACKEND_URL}/products/${id}`);
    product = await result.json();
  } catch (error) {
    console.log(error);
    redirect('/404');
  }

  return (
    <>
      <Head />
      <ProductSection
        id={product.id}
        userName={product.user.name}
        userReview={4.8}
        productCost={product.price}
        productDescription={product.description}
        productName={product.name}
        coverImage={product.cover_image.image}
        images={product.images.map(({ image }: { image: string }) => image)}
      />
      <Footer />
    </>
  );
}
