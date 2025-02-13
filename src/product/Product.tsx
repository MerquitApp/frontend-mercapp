import Head from '@/home/components/Head';
import Footer from '@/ui/components/Footer';
import React from 'react';
import ProductSection from './components/ProductSection';

function Product() {
  return (
    <>
      <Head />
      <ProductSection
        userName="John Doe."
        userReview={4.8}
        productCost={10}
        productDescription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quo dolorum dolorem."
        productName="Kit de herramienta multiuso"
      />
      <Footer />
    </>
  );
}

export default Product;
