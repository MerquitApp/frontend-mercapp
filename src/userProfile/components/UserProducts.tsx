import { ProductResponse } from '@/types';
import ProductCard from '@/ui/components/ProductCard';

interface Props {
  products: ProductResponse[];
}

function UserProducts({ products }: Props) {
  return (
    <div className="mt-6 max-w-4xl mx-auto">
      <ul className="flex justify-evenly mt-12 flex-wrap gap-2">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserProducts;
