'use client';

import ProductsGrid from './components/ProductsGrid';
import { ProductResponse } from '@/types';

interface Props {
  products: ProductResponse[];
}

const AllProducts: React.FC<Props> = ({ products }) => {
  return (
    <div className="flex flex-col items-center h-screen mx-auto">
      <h1 className="text-primaryPalette text-4xl text-center font-bold my-12">
        Productos
      </h1>
      <ProductsGrid products={products} />
    </div>
  );
};

export default AllProducts;
