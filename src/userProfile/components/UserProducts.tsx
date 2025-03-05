import React from 'react';
import { ProductResponse } from '@/types';

interface Props {
  products: ProductResponse[];
}

function UserProducts({}: Props) {
  return (
    <div className="mt-6">
      <h3 className="text-2xl font-bold mb-3">Productos</h3>
    </div>
  );
}

export default UserProducts;
