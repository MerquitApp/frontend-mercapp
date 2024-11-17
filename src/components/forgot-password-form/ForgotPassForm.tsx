'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Button } from '@nextui-org/react';
import { Input } from '@nextui-org/react';

export default function ForgotPassForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
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
    <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 min-h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center justify-center">
          <div
            style={{
              textAlign: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
            Recuperar contraseña
          </div>
          <div
            style={{
              textAlign: 'center',
              fontSize: '1.2rem',
              marginBottom: '1rem'
            }}>
            Introduce tu correo electrónico para recibir un enlace para
            restablecer tu contraseña
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
                  {errors.email.message}
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
  );
}
