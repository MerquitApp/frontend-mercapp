import React from 'react';
import ProductCard from '../../ui/components/ProductCard';
import { ProductResponse } from '@/types';

interface ProductsGridProps {
  products: ProductResponse[];
}
const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  return (
    <div className="flex gap-4 max-w-4xl flex-wrap justify-center md:justify-normal">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={{
              ...product,
              user: {
                ...product.user,
                created_at: new Date(product.user.created_at),
                updated_at: new Date(product.user.updated_at)
              }
            }}
          />
        ))
      ) : (
        <p className="text-2xl">No se encontraron productos.</p>
      )}
    </div>
  );
};

export default ProductsGrid;
