import React from 'react';
import Link from 'next/link';

function UserProducts() {
  const products: { id: number; title: string }[] = [
    {
      id: 1,
      title: 'Producto 1'
    },
    {
      id: 2,
      title: 'Producto 2'
    },
    {
      id: 3,
      title: 'Producto 3'
    }
  ]; // Definir la estructura de datos de tus productos
  return (
    <div className="mt-6">
      <h3 className="text-2xl font-bold mb-3">Productos</h3>
      {products && products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-100 p-4 rounded-lg">
              <Link href={`/products/${product.id}`} className="text-gray-800">
                {product.title}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No hay productos publicados.</p>
      )}
    </div>
  );
}

export default UserProducts;
