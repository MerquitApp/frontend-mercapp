'use client';

import Link from 'next/link';

const Page404 = () => {
  return (
    <div className="flex items-center justify-center flex-col h-screen w-screen gap-4">
      <h1 className="text-4xl font-semibold text-primaryPalette">
        Pagina no encontrada :(
      </h1>
      <Link
        className="mt-4 px-4 py-2 bg-primaryPalette text-white rounded"
        href="/">
        Volver al inicio
      </Link>
    </div>
  );
};
export default Page404;
