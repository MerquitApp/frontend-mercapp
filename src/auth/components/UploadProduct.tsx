'use client';

import { BACKEND_URL } from '@/constants';
import { TagInput } from '@/ui/components/TagInput';
import { useState } from 'react';
import { toast } from 'sonner';

function UploadProduct() {
  const [tags, setTags] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLFormElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    formData.append('tags', JSON.stringify(tags));
    formData.append('categories', JSON.stringify(categories));

    try {
      const result = await fetch(`${BACKEND_URL}/products`, {
        method: 'POST',
        body: formData,
        credentials: 'include'
      });

      if (result.ok) {
        toast.success('Producto subido correctamente');
      } else {
        toast.error('Ha ocurrido un error al subir el producto');
      }
    } catch (error) {
      toast.error('Ha ocurrido un error al subir el producto');
      console.log(error);
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6 mb-5 mt-5">
      <h2 className="text-3xl font-bold mb-6 text-center text-primaryPalette">
        Subir Producto
      </h2>
      <form
        className="space-y-6"
        onSubmit={handleSubmit}
        onKeyDown={handleKeyDown}>
        <div>
          <label className="text-gray-700 font-medium mb-2">
            Imagen de Portada
          </label>
          <input
            type="file"
            name="cover_image"
            accept=".png,.jpg,.jpeg"
            className="mt-1 w-full text-gray-700 border border-gray-300 rounded-md p-2 cursor-pointer"
          />
        </div>

        <div>
          <label className="text-gray-700 font-medium mb-2">
            Imágenes del Producto
          </label>
          <input
            type="file"
            name="images"
            accept=".png,.jpg,.jpeg"
            multiple
            className="mt-1 w-full text-gray-700 border border-gray-300 rounded-md p-2 cursor-pointer"
          />
        </div>

        <div>
          <label className="text-gray-700 font-medium mb-2">Título</label>
          <input
            name="name"
            type="text"
            className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryPalette"
            placeholder="Título del producto"
          />
        </div>

        <div>
          <label className="text-gray-700 font-medium mb-2">Descripción</label>
          <textarea
            name="description"
            className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryPalette"
            placeholder="Describe el producto"
          />
        </div>

        <div>
          <label className="text-gray-700 font-medium mb-2">Precio</label>
          <input
            name="price"
            min={1}
            type="number"
            className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryPalette"
            placeholder="En €"
          />
        </div>

        <div>
          <label className="text-gray-700 font-medium mb-2">Categorías</label>
          <TagInput placeholder="Coche" onChange={setCategories} />
        </div>

        <div>
          <label className="text-gray-700 font-medium mb-2">Etiquetas</label>
          <TagInput placeholder="Como Nuevo" onChange={setTags} />
        </div>

        <div className="text-center">
          <input
            type="submit"
            value="Subir Producto"
            className="bg-primaryPalette text-white px-6 py-3 rounded-md hover:brightness-75 transition duration-300 w-full"
          />
        </div>
      </form>
    </div>
  );
}
export default UploadProduct;
