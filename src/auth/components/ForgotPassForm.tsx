'use client';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@nextui-org/react';
import { FaArrowLeft } from 'react-icons/fa';
import { GoXCircle } from 'react-icons/go';
import Input from '@ui/Input';
import Link from 'next/link';
import AuthLayout from '../layouts/AuthLayout';
import { toast } from 'sonner';

type FormValues = {
  email: string;
};

export default function ForgotPassForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    reset();
    setLoading(true);

    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/password-reset-request`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: data.email
        })
      }
    );

    if (resp.ok) {
      toast.success(
        'Se ha enviado un correo con un enlace para restablecer tu contraseña'
      );
    } else {
      toast.error('Ha ocurrido un error al enviar el correo');
    }

    setLoading(false);
  };

  return (
    <AuthLayout>
      <div className="flex flex-row justify-between">
        {/* Botones de navegación */}
        <Link
          href="/login"
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
          <h1 className="text-3xl font-bold tex-size">Recuperar contraseña</h1>
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
              label="E-mail"
              type="email"
              placeholder="example@mail.com"
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
    </AuthLayout>
  );
}
