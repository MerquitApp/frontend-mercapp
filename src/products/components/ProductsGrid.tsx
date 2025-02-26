import React from 'react';
import ProductCard from '../../ui/components/ProductCard';
import { ProductResponse } from '@/types';

interface ProductsGridProps {
  products: ProductResponse[];
}
const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  return (
    <div className="product-grid">
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
        <p>No se encontraron productos.</p>
      )}

      <style jsx>{`
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default ProductsGrid;
