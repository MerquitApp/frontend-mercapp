import Image from 'next/image';
import Link from 'next/link';
import AuthLayout from '../layouts/AuthLayout';
import Input from '@ui/Input';
import PrimaryButton from '@/ui/components/PrimaryButton';

export default function LoginEmail() {
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
        <form className="flex justify-center flex-col">
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
        <PrimaryButton type="submit">Iniciar sesión</PrimaryButton>
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
