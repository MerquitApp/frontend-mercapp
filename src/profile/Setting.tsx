import Head from '@/home/components/Header';
import Footer from '@/ui/components/Footer';
import React from 'react';

function Setting() {
  return (
    <>
      <Head />
      <div className="flex flex-col justify-center items-center p-10 gap-8">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-semibold text-2xl">Configuración de cuenta</h2>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Setting;
