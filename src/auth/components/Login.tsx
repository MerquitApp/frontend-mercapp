import { FaGoogle, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import AuthLayout from '../layouts/AuthLayout';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

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
        <a
          href={`${backendUrl}/auth/google`}
          className="flex w-full items-center justify-center space-x-2 rounded-md border bg-white py-2 text-gray-600 shadow-sm hover:bg-gray-50">
          <FaGoogle />
          <span>Continuar con Google</span>
        </a>
        <a
          href={`${backendUrl}/auth/github`}
          className="flex w-full items-center justify-center space-x-2 rounded-md bg-zinc-600 py-2 text-white shadow-sm hover:bg-zinc-700">
          <FaGithub />
          <span>Continuar con Github</span>
        </a>
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
