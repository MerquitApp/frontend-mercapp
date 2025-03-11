import React from 'react';

function Terms() {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-4 md:p-10 gap-8">
        <div className="flex flex-col items-center justify-center max-w-4xl w-full">
          <h1 className="font-semibold text-3xl md:text-4xl mb-6 text-center">
            Términos y Condiciones
          </h1>

          <section className="w-full">
            <h2 className="font-semibold text-2xl mb-4">
              1. Aceptación de los Términos
            </h2>
            <p className="mb-4">
              Al acceder y utilizar nuestra plataforma, aceptas cumplir con
              estos términos y condiciones. Si no estás de acuerdo con alguna
              parte de estos términos, no debes usar nuestros servicios.
            </p>
          </section>

          <section className="w-full">
            <h2 className="font-semibold text-2xl mb-4">
              2. Uso de la Plataforma
            </h2>
            <p className="mb-4">
              Nuestra plataforma está diseñada para facilitar la compra y venta
              de productos entre usuarios. Te comprometes a usarla de manera
              legal y ética, sin realizar actividades fraudulentas o abusivas.
            </p>
          </section>

          <section className="w-full">
            <h2 className="font-semibold text-2xl mb-4">
              3. Responsabilidades del Usuario
            </h2>
            <p className="mb-4">
              Eres responsable de toda la información que publiques en la
              plataforma, incluyendo la veracidad y legalidad de los contenidos.
              Además, debes garantizar que los productos que vendes cumplen con
              las leyes aplicables.
            </p>
          </section>

          <section className="w-full">
            <h2 className="font-semibold text-2xl mb-4">
              4. Transacciones y Pagos
            </h2>
            <p className="mb-4">
              Las transacciones entre usuarios son responsabilidad exclusiva de
              las partes involucradas. Nosotros no intervenimos en los pagos ni
              nos hacemos responsables de disputas derivadas de transacciones.
            </p>
          </section>

          <section className="w-full">
            <h2 className="font-semibold text-2xl mb-4">
              5. Propiedad Intelectual
            </h2>
            <p className="mb-4">
              Todo el contenido de la plataforma, incluyendo textos, imágenes,
              logotipos y software, está protegido por derechos de autor y otras
              leyes de propiedad intelectual. No puedes usar este contenido sin
              autorización expresa.
            </p>
          </section>

          <section className="w-full">
            <h2 className="font-semibold text-2xl mb-4">
              6. Limitación de Responsabilidad
            </h2>
            <p className="mb-4">
              No nos hacemos responsables de daños directos, indirectos,
              incidentales o consecuentes que surjan del uso de la plataforma.
              Tampoco garantizamos la disponibilidad continua o libre de errores
              de nuestros servicios.
            </p>
          </section>

          <section className="w-full">
            <h2 className="font-semibold text-2xl mb-4">
              7. Modificaciones de los Términos
            </h2>
            <p className="mb-4">
              Nos reservamos el derecho de modificar estos términos en cualquier
              momento. Te notificaremos de cambios significativos, pero es tu
              responsabilidad revisar periódicamente esta página para estar al
              tanto de las actualizaciones.
            </p>
          </section>

          <section className="w-full">
            <h2 className="font-semibold text-2xl mb-4">8. Ley Aplicable</h2>
            <p className="mb-4">
              Estos términos se rigen por las leyes del país donde opera nuestra
              plataforma. Cualquier disputa relacionada con estos términos
              estará sujeta a la jurisdicción exclusiva de los tribunales de
              dicho país.
            </p>
          </section>

          <section className="w-full">
            <h2 className="font-semibold text-2xl mb-4">9. Contacto</h2>
            <p className="mb-4">
              Si tienes alguna pregunta sobre estos términos y condiciones,
              puedes contactarnos a través de{' '}
              <a href="mailto:soporte@mercapp.com" className="text-blue-500">
                soporte@mercapp.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default Terms;
