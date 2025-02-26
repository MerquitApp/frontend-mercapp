'use client';
// import { useAuthStore } from '@/store/auth';
import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
import { useProducts } from './hooks/useProducts';
import Filters from './components/Filters';
import ProductsGrid from './components/ProductsGrid';

const AllProduct: React.FC = () => {
  // const { userId, isLoggedIn } = useAuthStore();
  // const [isClient, setIsClient] = useState(false);
  // const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState<string>('ver');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [distance, setDistance] = useState<number>(10);

  const filters = {
    q: searchQuery,
    category: selectedCategory,
    distance: distance
    // userId: userId ? Number(userId) : undefined
  };

  const { products, loading, error } = useProducts(filters);

  //  Esta useEffect se ejecuta solo después de que el componente esté montado en el cliente
  // useEffect(() => {
  //   setIsClient(true);  // Establecer el estado para indicar que el cliente ha sido montado
  // }, []);

  // Redirigir a login si no estamos logueados, solo en el cliente
  // useEffect(() => {
  //   if (isClient && !isLoggedIn) {
  //     router.push('/login'); // Redirigimos si no estamos logueados
  //   }
  // }, [isLoggedIn, isClient, router]);  // Dependemos de isLoggedIn y isClient

  // if (!isLoggedIn) {
  //   return <p>Por favor inicia sesión para ver los productos.</p>;
  // }

  return (
    <div className="container flex flex-col items-center justify-center h-screen">
      <h1>Productos</h1>
      <Filters
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        distance={distance}
        onDistanceChange={setDistance}
      />
      {loading ? (
        <p>Cargando productos...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ProductsGrid products={products} />
      )}
    </div>
  );
};

export default AllProduct;
