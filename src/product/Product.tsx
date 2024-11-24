import Head from '@/home/components/Head';
import Footer from '@/ui/components/Footer';
import React from 'react';
import ProductSection from './components/ProductSection';

function Product() {
  return (
    <>
      <Head />
      <ProductSection userName="John Doe." userReview={4.8} productCost={10} />
      <Footer />
    </>
  );
}

export default Product;
