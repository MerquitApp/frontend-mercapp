import { ProductResponse } from '@/types';
import ProductCard from '@/ui/components/ProductCard';

interface Props {
  products: ProductResponse[];
}

function UserProducts({ products }: Props) {
  return (
    <div className="mt-6">
      <h3 className="text-2xl font-bold mb-3">Productos</h3>
      <ul className="flex justify-between">
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
