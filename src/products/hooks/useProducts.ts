import { useState, useEffect } from 'react';
import { ProductResponse } from '../../types';
import { FiltersType } from '../../types/index';

export function useProducts(filters: FiltersType) {
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams();
        if (filters.q) params.append('q', filters.q);
        if (filters.userId) params.append('user_id', filters.userId.toString());
        if (filters.category && filters.category !== 'ver')
          params.append('category', filters.category);
        if (filters.distance)
          params.append('distance', filters.distance.toString());

        const res = await fetch(`/api/products?${params.toString()}`);
        if (!res.ok) throw new Error('Error al obtener los productos');
        const data = await res.json();
        setProducts(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [filters]);

  return { products, loading, error };
}
