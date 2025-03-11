'use client';

import ProductsGrid from './components/ProductsGrid';
import { ProductResponse } from '@/types';

interface Props {
  products: ProductResponse[];
}

const AllProducts: React.FC<Props> = ({ products }) => {
  return (
    <div className="flex flex-col items-center mx-auto mt-12">
      <ProductsGrid products={products} />
    </div>
  );
};

export default AllProducts;
