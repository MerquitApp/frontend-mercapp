'use client';

import Head from '@/home/components/Header';
import Footer from '@/ui/components/Footer';
import PrimaryButton from '@/ui/components/PrimaryButton';
import React from 'react';
import { useState, useEffect } from 'react';

function History() {
  // Estado para almacenar los datos del historial y el loading.
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(false);
  // Pestaña activa: 'compras' o 'ventas'
  const [activeTab, setActiveTab] = useState('compras');
  // ID del usuario actual (esto debería provenir del sistema de autenticación)
  const currentUserId = 1;

  // Se usa useEffect para obtener los datos cada vez que se cambia la pestaña activa.
  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      try {
        if (activeTab === 'ventas') {
          // Se obtienen todos los productos y se filtran por sellerId
          const response = await fetch('/api/products');
          if (!response.ok) {
            throw new Error('Error al obtener los productos');
          }
          const products = await response.json();
          // Se filtran los productos cuyo vendedor sea el usuario actual
          interface Product {
            sellerId: number;
            // Add other properties of the product as needed
          }
          const salesHistory = products.filter(
            (product: Product) => product.sellerId === currentUserId
          );
          setHistoryData(salesHistory);
        } else {
          // Se obtienen los pagos (historial de compras)
          const response = await fetch('/api/payments');
          if (!response.ok) {
            throw new Error('Error al obtener los pagos');
          }
          const payments = await response.json();
          // Se asume que cada objeto de pago tiene la información del producto en "product"
          setHistoryData(payments);
        }
      } catch (error) {
        console.error('Error fetching history data:', error);
        setHistoryData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [activeTab, currentUserId]);

  return (
    <>
      <Head />
      <div className="flex flex-col justify-center items-center p-10 gap-8">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-semibold text-2xl">
            Historial de {activeTab === 'compras' ? 'Compras' : 'Ventas'}
          </h2>
        </div>

        {/* Botones para alternar entre pestañas */}
        <div className="flex gap-4">
          <PrimaryButton
            onClick={() => setActiveTab('compras')}
            className={`px-4 py-2 rounded transition-color duration-300 ${
              activeTab === 'compras'
                ? 'bg-gray-300 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}>
            Compras
          </PrimaryButton>

          <PrimaryButton
            onClick={() => setActiveTab('ventas')}
            className={`px-4 py-2 rounded transition-color duration-300 ${
              activeTab === 'ventas'
                ? 'bg-gray-300 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}>
            Ventas
          </PrimaryButton>
        </div>

        {/* Se muestra un mensaje de carga o la lista del historial */}
        {loading ? (
          <div>Cargando...</div>
        ) : historyData.length > 0 ? (
          <div className="w-full max-w-2xl">
            {historyData.map(
              (item: {
                id: number;
                name?: string;
                price?: number;
                createdAt: string;
                product?: { name: string };
                amount?: number;
              }) => (
                <div key={item.id} className="border p-4 rounded shadow mb-4">
                  {activeTab === 'ventas' ? (
                    <>
                      <h3 className="font-bold text-xl">{item.name}</h3>
                      <p className="text-gray-600">Precio: ${item.price}</p>
                      {/* Se asume que el producto cuenta con un campo "createdAt" para la fecha */}
                      <p className="text-gray-600">Fecha: {item.createdAt}</p>
                    </>
                  ) : (
                    <>
                      {/* En compras se asume que el objeto payment tiene una propiedad "product" */}
                      <h3 className="font-bold text-xl">
                        {item.product?.name}
                      </h3>
                      <p className="text-gray-600">Precio: ${item.amount}</p>
                      <p className="text-gray-600">Fecha: {item.createdAt}</p>
                    </>
                  )}
                </div>
              )
            )}
          </div>
        ) : (
          <div>
            No hay registros de {activeTab === 'compras' ? 'compras' : 'ventas'}
            .
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default History;
