'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema } from '@/validations/userSchema';
import AuthLayout from '../layouts/AuthLayout';

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

  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center w-full h-full gap-2 py-2">
        <h3 className="text-blackPalette text-2xl font-bold">
          Compra y vende en Mercapp
        </h3>
        <div className="w-3/4">
          <h4 className="text-grayPalette text-xs text-center">
            Consigue los mejores precios y gana dinero con lo que no demandas
          </h4>
        </div>
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          data;
          // TODO: Implement form submission logic
        })}>
        <div className="mb-4 flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-grayPalette text-sm font-medium">
            Nombre
          </label>
          {errors.name?.message && (
            <p className="text-redPalette font-medium text-xs">
              {errors.name?.message}
            </p>
          )}
          <input
            type="text"
            id="name"
            className="border-2 border-gray-500 rounded-lg p-2"
            placeholder="Juan"
            required
            {...register('name')}
          />
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <label
            htmlFor="phoneNumber"
            className="text-grayPalette text-sm font-medium">
            Número de teléfono
          </label>
          {errors.phoneNumber?.message && (
            <p className="text-redPalette font-medium text-xs">
              {errors.phoneNumber?.message}
            </p>
          )}
          <input
            type="tel"
            id="phoneNumber"
            className="border-2 border-gray-500 rounded-lg p-2"
            placeholder="Ej: 123456789"
            required
            {...register('phoneNumber')}
          />
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-grayPalette text-sm font-medium">
            E-mail
          </label>
          {errors.email?.message && (
            <p className="text-redPalette font-medium text-xs">
              {errors.email?.message}
            </p>
          )}
          <input
            type="text"
            id="email"
            className="border-2 border-gray-500 rounded-lg p-2"
            placeholder="ejemplo@gmail.com"
            required
            {...register('email')}
          />
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-grayPalette text-sm font-medium">
            Contraseña
          </label>
          {errors.password?.message && (
            <p className="text-redPalette font-medium text-xs">
              {errors.password?.message}
            </p>
          )}
          <input
            type="password"
            id="password"
            className="border-2 border-gray-500 rounded-lg p-2"
            placeholder="******"
            required
            {...register('password')}
          />
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <label
            htmlFor="confirmPassword"
            className="text-grayPalette text-sm font-medium">
            Confirmar Contraseña
          </label>
          {errors.confirmPassword?.message && (
            <p className="text-redPalette font-medium text-xs">
              {errors.confirmPassword?.message}
            </p>
          )}
          <input
            type="password"
            id="confirmPassword"
            className="border-2 border-gray-500 rounded-lg p-2"
            placeholder="******"
            required
            {...register('confirmPassword')}
          />
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <button className="bg-primaryPalette text-white text-sm font-semibold py-2 px-4 rounded-lg uppercase hover:font-bold">
            Registrarme
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center w-full h-full gap-2 py-1">
        <h3 className="text-blackPalette text-l font-light">
          ¿Ya tienes una cuenta?
        </h3>
        <Link href="/login">
          <h3 className="text-primaryPalette text-l font-semibold">
            Inicia sesión
          </h3>
        </Link>
      </div>
    </AuthLayout>
  );
}

export default RegistrationForm;
