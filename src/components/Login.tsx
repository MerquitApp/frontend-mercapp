import { FaGoogle, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-3xl bg-whitePalette p-6 shadow-md">
        <div className="flex justify-center mb-4">
          <img src="/logo-mercapp.png" alt="logo" className="h-24" />
        </div>
        <h1 className="text-center text-2xl font-semibold text-gray-800">
          Compra y vende en Mercapp
        </h1>
        <p className="text-center text-sm text-gray-600 mb-6">
          Consigue los mejores precios y vende lo que ya no usas.
        </p>
        <div className="space-y-4">
          <Link href="/login/email">
            <button className="flex w-full items-center justify-center space-x-2 rounded-md bg-primaryPalette py-2 text-white shadow-sm transition-opacity hover:opacity-90">
              <p>Inicia sesión con email</p>
            </button>
          </Link>
          <button className="flex w-full items-center justify-center space-x-2 rounded-md border bg-white py-2 text-gray-600 shadow-sm hover:bg-gray-50">
            <FaGoogle />
            <p>Continua con Google</p>
          </button>
          <button className="flex w-full items-center justify-center space-x-2 rounded-md bg-blue-600 py-2 text-white shadow-sm hover:bg-blue-700">
            <FaFacebook />
            <p>Continua con Facebook</p>
          </button>
        </div>
        <p className="mt-4 text-center text-sm text-gray-600">
          ¿No tienes cuenta?{' '}
          <Link
            href="/register"
            className="font-medium text-primaryPalette hover:underline">
            Resgistrarse
          </Link>
        </p>
      </div>
    </div>
  );
}
