'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema } from '@/validations/userSchema';
import AuthLayout from '../layouts/AuthLayout';
import PrimaryButton from '@/ui/components/PrimaryButton';
import Input from '@ui/Input';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

type Inputs = {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  confirmPassword: string;
};

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: zodResolver(userSchema)
  });
  const { push } = useRouter();

  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center w-full h-full gap-2 py-2">
        <h3 className="text-blackPalette md:text-2xl text-xl font-bold">
          Compra y vende en Mercapp
        </h3>
        <div className="w-3/4">
          <h4 className="text-grayPalette text-center">
            Consigue los mejores precios y gana dinero con lo que no demandas
          </h4>
        </div>
      </div>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(async (formData) => {
          try {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
              {
                method: 'POST',
                credentials: 'include',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
              }
            );

            if (response.ok) {
              push('/login');
            }
          } catch (error) {
            console.log(error);
            toast.error('Error al registrarte');
          }
        })}>
        <Input
          label="Nombre"
          type="text"
          placeholder="Juan"
          {...register('name')}
          required>
          {errors.name?.message && (
            <p className="text-redPalette font-medium text-xs">
              {errors.name?.message}
            </p>
          )}
        </Input>
        <Input
          label="Número de teléfono"
          type="tel"
          placeholder="Ej: 123456789"
          {...register('phoneNumber')}
          required>
          {errors.phoneNumber?.message && (
            <p className="text-redPalette font-medium text-xs">
              {errors.phoneNumber?.message}
            </p>
          )}
        </Input>
        <Input
          label="E-mail"
          type="text"
          placeholder="example@mail.com"
          {...register('email')}
          required>
          {errors.email?.message && (
            <p className="text-redPalette font-medium text-xs">
              {errors.email?.message}
            </p>
          )}
        </Input>
        <Input
          label="Contraseña"
          type="password"
          placeholder="********"
          {...register('password')}>
          {errors.password?.message && (
            <p className="text-redPalette font-medium text-xs">
              {errors.password?.message}
            </p>
          )}
        </Input>
        <Input
          label="Confirmar Contraseña"
          type="password"
          placeholder="********"
          {...register('confirmPassword')}>
          {errors.confirmPassword?.message && (
            <p className="text-redPalette font-medium text-xs">
              {errors.confirmPassword?.message}
            </p>
          )}
        </Input>
        <PrimaryButton className="mt-4" type="submit">
          Registrarme
        </PrimaryButton>
      </form>
      <div className="flex items-center justify-center w-full h-full gap-2 py-1 mt-2">
        <h3 className="text-blackPalette text-l font-light">
          ¿Ya tienes una cuenta?
        </h3>
        <Link href="/login">
          <h3 className="text-primaryPalette text-l font-semibold">
            Iniciar Sesión
          </h3>
        </Link>
      </div>
    </AuthLayout>
  );
}

export default RegistrationForm;
