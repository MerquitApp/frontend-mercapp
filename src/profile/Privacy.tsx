import Head from '@/home/components/Header';
import Footer from '@/ui/components/Footer';
import React from 'react';

function Privacy() {
  return (
    <>
      <Head />
      <div className="flex flex-col justify-center items-center p-4 md:p-10 gap-8">
        <div className="flex flex-col items-center justify-center max-w-4xl w-full">
          <h1 className="font-semibold text-3xl md:text-4xl mb-6 text-center">
            Política de Privacidad
          </h1>

          <section className="w-full">
            <h2 className="font-semibold text-2xl mb-4">1. Introducción</h2>
            <p className="mb-4">
              En nuestra plataforma, nos comprometemos a proteger y respetar tu
              privacidad. Esta política explica cómo recopilamos, usamos y
              protegemos tu información personal.
            </p>
          </section>

          <section className="w-full">
            <h2 className="font-semibold text-2xl mb-4">
              2. Información que Recopilamos
            </h2>
            <p className="mb-4">
              Recopilamos información que nos proporcionas directamente, como tu
              nombre, dirección de correo electrónico, y datos de transacciones.
              También recopilamos información automáticamente, como tu dirección
              IP y datos de navegación.
            </p>
          </section>

          <section className="w-full">
            <h2 className="font-semibold text-2xl mb-4">
              3. Uso de la Información
            </h2>
            <p className="mb-4">
              Utilizamos tu información para mejorar nuestros servicios,
              procesar transacciones, y personalizar tu experiencia. También
              podemos usarla para enviarte actualizaciones y ofertas, siempre
              que hayas dado tu consentimiento.
            </p>
          </section>

          <section className="w-full">
            <h2 className="font-semibold text-2xl mb-4">
              4. Compartir Información
            </h2>
            <p className="mb-4">
              No compartimos tu información personal con terceros, excepto
              cuando sea necesario para proporcionar nuestros servicios o cuando
              la ley lo requiera.
            </p>
          </section>

          <section className="w-full">
            <h2 className="font-semibold text-2xl mb-4">5. Tus Derechos</h2>
            <p className="mb-4">
              Tienes derecho a acceder, corregir o eliminar tu información
              personal en cualquier momento. También puedes oponerte al
              procesamiento de tus datos o retirar tu consentimiento.
            </p>
          </section>

          <section className="w-full">
            <h2 className="font-semibold text-2xl mb-4">
              6. Cambios en la Política de Privacidad
            </h2>
            <p className="mb-4">
              Nos reservamos el derecho de actualizar esta política en cualquier
              momento. Te notificaremos de cualquier cambio significativo a
              través de nuestra plataforma o por correo electrónico.
            </p>
          </section>

          <section className="w-full">
            <h2 className="font-semibold text-2xl mb-4">7. Contacto</h2>
            <p className="mb-4">
              Si tienes alguna pregunta sobre nuestra política de privacidad,
              puedes contactarnos a través de{' '}
              <a href="mailto:privacidad@mercapp.com" className="text-blue-500">
                privacidad@wallapop.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Privacy;
