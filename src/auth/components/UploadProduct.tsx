function UploadProduct() {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6 mb-5 mt-5">
      <h2 className="text-3xl font-bold mb-6 text-center text-primaryPalette">
        Subir Producto
      </h2>
      <form className="space-y-6">
        <div>
          <label className="text-gray-700 font-medium mb-2">
            Imagen de Portada
          </label>
          <input
            type="file"
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
            accept=".png,.jpg,.jpeg"
            multiple
            className="mt-1 w-full text-gray-700 border border-gray-300 rounded-md p-2 cursor-pointer"
          />
        </div>

        <div>
          <label className="text-gray-700 font-medium mb-2">Título</label>
          <input
            type="text"
            className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryPalette"
            placeholder="Título del producto"
          />
        </div>

        <div>
          <label className="text-gray-700 font-medium mb-2">Descripción</label>
          <textarea
            className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryPalette"
            placeholder="Describe el producto"
          />
        </div>

        <div>
          <label className="text-gray-700 font-medium mb-2">Precio</label>
          <input
            type="number"
            className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryPalette"
            placeholder="En €"
          />
        </div>

        <div>
          <label className="text-gray-700 font-medium mb-2">Categorías</label>
          <input
            type="text"
            className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryPalette"
            placeholder="Categorías separadas por comas"
          />
        </div>

        <div>
          <label className="text-gray-700 font-medium mb-2">Etiquetas</label>
          <input
            type="text"
            className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryPalette"
            placeholder="Etiquetas separadas por comas"
          />
        </div>

        <div className="text-center">
          <button
            type="button"
            className="bg-primaryPalette text-white px-6 py-3 rounded-md hover:brightness-75 transition duration-300 w-full">
            Subir Producto
          </button>
        </div>
      </form>
    </div>
  );
}
export default UploadProduct;
