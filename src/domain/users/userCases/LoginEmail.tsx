import Image from 'next/image';
import Link from 'next/link';

export default function LoginEmail() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-3xl bg-whitePalette p-6 shadow-md">
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
            <div className="flex flex-col gap-2">
              <label htmlFor="e">E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="example@mail.com"
                className="border-gray-300 border-2 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="mt-2">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="********"
                className="border-gray-300 border-2 rounded-md p-2"
              />
            </div>
          </form>
          <button className="flex w-full items-center justify-center space-x-2 rounded-md bg-primaryPalette py-2 text-white shadow-sm transition-opacity hover:opacity-90">
            <p>Iniciar sesión</p>
          </button>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <p className="text-center text-sm text-gray-600">
            ¿No tienes cuenta?{' '}
            <Link
              href="/users/register"
              className="font-medium text-primaryPalette hover:underline">
              Resgistrarse
            </Link>
          </p>
          <p className="text-center text-sm text-gray-600">
            ¿Quieres iniciar de otra forma?{' '}
            <Link
              href="/users/login"
              className="font-medium text-primaryPalette hover:underline">
              Cambiar método
            </Link>
          </p>
          <p className="text-center text-sm text-gray-600">
            ¿Has olvidado tu contraseña?{' '}
            <Link
              href="/users/forgot-password"
              className="font-medium text-primaryPalette hover:underline">
              Cambiar contaseña
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
