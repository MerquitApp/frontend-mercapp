'use client';

import PrimaryButton from '@/ui/components/PrimaryButton';
import React, { useState, useEffect } from 'react';
import { BACKEND_URL } from '@/constants';
import { ProductResponse } from '@/types';
import ProductCard from '@/ui/components/ProductCard';
import CommentBox from '@/ui/components/CommentBox';
import { toast } from 'sonner';

enum TABS {
  COMPRAS = 'compras',
  VENTAS = 'ventas'
}

function History() {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<TABS>(TABS.COMPRAS);
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [showCommentBox, setShowCommentBox] = useState<number | null>(null);

  const handleCommentSubmit = async (
    rating: number,
    comment: string,
    toUserId: number
  ) => {
    const createReputationDto = {
      score: rating,
      comment,
      toUserId
    };

    toast.promise(
      fetch(`${BACKEND_URL}/reputation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(createReputationDto),
        credentials: 'include'
      }),
      {
        loading: 'Enviando...',
        success: 'Comentario enviado',
        error: 'Error al enviar el comentario',
        finally: () => {
          setShowCommentBox(null);
        }
      }
    );
  };

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      if (activeTab === TABS.COMPRAS) {
        const resp = await fetch(`${BACKEND_URL}/orders`, {
          credentials: 'include'
        });
        const data = await resp.json();

        if (resp.ok) {
          setProducts(data.map((order: any) => order.product));
        }
      } else if (activeTab === TABS.VENTAS) {
        const resp = await fetch(`${BACKEND_URL}/products/user`, {
          credentials: 'include'
        });
        const data = await resp.json();

        if (resp.ok) {
          setProducts(
            data.filter((product: ProductResponse) => !product.isActive)
          );
        }
      }
      setLoading(false);
    };

    init();
  }, [activeTab]);

  const handleCommentClick = (productId: number) => {
    if (showCommentBox) {
      setShowCommentBox(null);
    } else {
      setShowCommentBox(productId);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-10 gap-8">
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-semibold text-2xl">
          Historial de {activeTab === 'compras' ? 'Compras' : 'Ventas'}
        </h2>
      </div>

      <div className="flex gap-4">
        <PrimaryButton
          onClick={() => setActiveTab(TABS.COMPRAS)}
          className={`px-4 py-2 rounded transition-color duration-300 ${
            activeTab === 'compras'
              ? 'bg-gray-300 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}>
          Compras
        </PrimaryButton>

        <PrimaryButton
          onClick={() => setActiveTab(TABS.VENTAS)}
          className={`px-4 py-2 rounded transition-color duration-300 ${
            activeTab === 'ventas'
              ? 'bg-gray-300 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}>
          Ventas
        </PrimaryButton>
      </div>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="flex flex-col gap-4">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product}>
              {activeTab === TABS.COMPRAS && (
                <>
                  <PrimaryButton
                    onClick={() => handleCommentClick(product.id)}
                    className="mb-4">
                    Comentar
                  </PrimaryButton>
                  {showCommentBox === product.id && (
                    <CommentBox
                      productId={product.id}
                      onSubmit={(_, rating, comment) =>
                        handleCommentSubmit(rating, comment, product.userId)
                      }
                    />
                  )}
                </>
              )}
            </ProductCard>
          ))}
        </div>
      )}
    </div>
  );
}

export default History;
