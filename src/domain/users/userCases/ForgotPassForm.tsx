'use client';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import { FaArrowLeft } from 'react-icons/fa';
import { GoXCircle } from 'react-icons/go';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type FormValues = {
  email: string;
};

export default function ForgotPassForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setLoading(true);

    // Simular una acción de recuperación de contraseña
    console.log('Correo electrónico para recuperar contraseña:', data.email);

    // Simular un retardo para imitar una llamada a la API
    setTimeout(() => {
      setLoading(false);
      // Opcional: Mostrar un mensaje de éxito o redirigir al usuario
      // Por ejemplo, redirigir a la página de inicio de sesión:
      router.push('/login');
    }, 2000);
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full bg-gray-100 min-h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 min-h-screen">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <div className="flex flex-row justify-between">
            {/* Botones de navegación */}
            <Link
              href="../users/login"
              className=" left-4 text-gray-600 hover:text-gray-800"
              aria-label="Volver">
              <FaArrowLeft size={20} />
            </Link>
            <Link
              href="/"
              className="right-4 text-gray-600 hover:text-gray-800"
              aria-label="Cerrar y volver a la home">
              <GoXCircle size={24} />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="text-center">
              <h1 className="text-3xl font-bold tex-size">
                Recuperar contraseña
              </h1>
            </div>
            <div>
              <h2 className="intem-center text-center">
                Introduce tu correo electrónico para recibir un enlace para
                restablecer tu contraseña
              </h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <div className="mb-4">
                <Input
                  type="email"
                  placeholder="Correo electrónico"
                  fullWidth
                  {...register('email', {
                    required: 'El correo es obligatorio',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: 'Introduce un correo válido'
                    }
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message as string}
                  </p>
                )}
              </div>
              <Button
                className="mt-4 w-full bg-primaryPalette text-white"
                type="submit"
                isLoading={loading}
                disabled={loading}>
                Enviar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
