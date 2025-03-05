import React from 'react';

interface Props {
  sales: number;
  purchases: number;
}

function UserStats({ sales, purchases }: Props) {
  return (
    <div className="flex justify-around mt-4">
      <div className="text-center">
        <p className="text-xl font-semibold">{sales}</p>
        <p className="text-sm text-gray-600">Ventas</p>
      </div>
      <div className="text-center">
        <p className="text-xl font-semibold">{purchases}</p>
        <p className="text-sm text-gray-600">Compras</p>
      </div>
    </div>
  );
}

export default UserStats;
