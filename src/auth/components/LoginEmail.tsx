'use client';

import Image from 'next/image';
import Link from 'next/link';
import AuthLayout from '../layouts/AuthLayout';
import Input from '@ui/Input';
import PrimaryButton from '@/ui/components/PrimaryButton';
import { useAuthStore } from '@/store/auth';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function LoginEmail() {
  const setName = useAuthStore((state) => state.setName);
  const setEmail = useAuthStore((state) => state.setEmail);
  const setProfilePicture = useAuthStore((state) => state.setProfilePicture);
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  const { push } = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
        {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(Object.fromEntries(formData))
        }
      );

      const data = await result.json();

      if (result.ok) {
        setName(data.name);
        setEmail(data.email);
        setProfilePicture(data.profilePicture);
        setIsLoggedIn(true);
        push('/');
      }
    } catch (error) {
      console.log(error);
      toast.error('Las credenciales no son válidas');
    }
  };

  return (
    <AuthLayout>
      <div className="flex justify-center mb-4">
        <Image width={120} height={5} src="/logo-mercapp.png" alt="logo" />
      </div>
      <h1 className="text-center text-2xl font-semibold text-gray-800">
        Compra y vende en Mercapp
      </h1>
      <p className="text-center text-sm text-gray-600 mb-6">
        Consigue los mejores precios y vende lo que ya no usas.
      </p>
      <div className="space-y-4">
        <form
          id="login-form"
          className="flex justify-center flex-col"
          onSubmit={handleSubmit}>
          <Input
            label="E-mail"
            name="email"
            placeholder="example@mail.com"
            type="email"
            required
          />
          <Input
            label="Contraseña"
            placeholder="********"
            name="password"
            type="password"
          />
        </form>
        <PrimaryButton type="submit" form="login-form">
          Iniciar sesión
        </PrimaryButton>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <p className="text-center text-sm text-gray-600">
          ¿No tienes cuenta?{' '}
          <Link
            href="/register"
            className="font-medium text-primaryPalette hover:underline">
            Regístrate
          </Link>
        </p>
        <p className="text-center text-[14px] text-gray-600">
          ¿Quieres iniciar de otra forma?{' '}
          <Link
            href="/login"
            className="font-medium text-primaryPalette hover:underline">
            Cambiar método
          </Link>
        </p>
        <p className="text-center text-sm text-gray-600">
          ¿Has olvidado tu contraseña?{' '}
          <Link
            href="/forgot-password"
            className="font-medium text-primaryPalette hover:underline">
            Cambiar contaseña
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
