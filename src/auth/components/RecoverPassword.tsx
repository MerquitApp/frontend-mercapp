'use client';

import Link from 'next/link';
import AuthLayout from '../layouts/AuthLayout';
import Input from '@ui/Input';
import PrimaryButton from '@/ui/components/PrimaryButton';
import { toast } from 'sonner';
import { BACKEND_URL } from '@/constants';

interface Props {
  token: string;
}

export default function RecoverPassword({ token }: Props) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;

    const formData = new FormData(e.currentTarget);

    try {
      const result = await fetch(`${BACKEND_URL}/auth/password-reset`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token,
          ...Object.fromEntries(formData)
        })
      });

      if (result.ok) {
        toast.success('Se ha actualizado tu contraseña');

        setTimeout(() => {
          window.location.href = '/login';
        }, 1000);
      } else {
        toast.error('Ha ocurrido un error al actualizar la contraseña');
      }
    } catch (error) {
      toast.error('Ha ocurrido un error al actualizar la contraseña');
      console.log(error);
    } finally {
      target.reset()!;
    }
  };

  return (
    <AuthLayout>
      <h1 className="text-blackPalette text-3xl font-bold">
        Cambiar contraseña
      </h1>
      <form className="flex flex-col gap-4 mt-2" onSubmit={handleSubmit}>
        <Input
          label="Contraseña"
          name="password"
          type="password"
          placeholder="********"
          required
        />
        <Input
          label="Repetir Contraseña"
          name="confirmPassword"
          placeholder="********"
          type="password"
          required
        />
        <PrimaryButton type="submit">Cambiar Contraseña</PrimaryButton>
      </form>
      <div className="flex items-center justify-center w-full h-full gap-2 py-1 mt-2">
        <p className="text-grayPalette text-balance">¿Ya tienes una cuenta?</p>
        <Link href="/login" className="text-primaryPalette text-balance">
          Iniciar Sesión
        </Link>
      </div>
    </AuthLayout>
  );
}
