import Head from '@/home/components/Head';
import Footer from '@/ui/components/Footer';
import React from 'react';

function Terms() {
  return (
    <>
      <Head />
      <div className="flex flex-col justify-center items-center p-10 gap-8">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-semibold text-2xl">
            Configuración de Terminos y condiciones
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Terms;
