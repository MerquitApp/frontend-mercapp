import { FaGoogle, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import AuthLayout from '../layouts/AuthLayout';

export default function Login() {
  return (
    <AuthLayout>
      <div className="flex justify-center mb-4">
        <Image src="/logo-mercapp.png" width={120} height={5} alt="logo" />
      </div>
      <h1 className="text-center text-2xl font-semibold text-gray-800">
        Compra y vende en Mercapp
      </h1>
      <p className="text-center text-sm text-gray-600 mb-6">
        Consigue los mejores precios y vende lo que ya no usas.
      </p>
      <div className="space-y-4">
        <Link
          href="/login/email"
          className="flex w-full items-center justify-center space-x-2 rounded-md bg-primaryPalette py-2 text-white shadow-sm transition-opacity hover:opacity-90">
          Iniciar sesión con email
        </Link>
        <button className="flex w-full items-center justify-center space-x-2 rounded-md border bg-white py-2 text-gray-600 shadow-sm hover:bg-gray-50">
          <FaGoogle />
          <span>Continuar con Google</span>
        </button>
        <button className="flex w-full items-center justify-center space-x-2 rounded-md bg-blue-600 py-2 text-white shadow-sm hover:bg-blue-700">
          <FaFacebook />
          <span>Continuar con Facebook</span>
        </button>
      </div>
      <p className="mt-4 text-center text-sm text-gray-600">
        ¿No tienes cuenta?{' '}
        <Link
          href="/register"
          className="font-medium text-primaryPalette hover:underline">
          Regístrate
        </Link>
      </p>
    </AuthLayout>
  );
}
