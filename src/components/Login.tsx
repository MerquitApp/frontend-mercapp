import { FaGoogle, FaFacebook } from 'react-icons/fa';

export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-md">
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
          <button className="flex w-full items-center justify-center space-x-2 rounded-md bg-green-600 py-2 text-white shadow-sm hover:bg-green-700">
            <p>Inicia sesión con email</p>
          </button>
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
          <a
            href="/singup"
            className="font-medium text-green-600 hover:underline">
            Resgistrarse
          </a>
        </p>
      </div>
    </div>
  );
}
