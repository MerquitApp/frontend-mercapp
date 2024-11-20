import AuthLayout from '../layouts/AuthLayout';
export default function RecoverPassword() {
  return (
    <AuthLayout>
      <h1 className="text-blackPalette text-3xl font-bold">
        Cambiar contraseña
      </h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-grayPalette text-sm font-medium">
            Contraseña
          </label>
          <input
            type="text"
            name="password"
            className="border-2 border-gray-500 rounded-lg p-2"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password-repeat"
            className="text-grayPalette text-sm font-medium">
            Repetir contraseña
          </label>
          <input
            type="text"
            name="password-repeat"
            className="border-2 border-gray-500 rounded-lg p-2"
            required
          />
        </div>
        <input
          type="submit"
          className="bg-primaryPalette text-white text-sm font-semibold py-2 px-4 rounded-lg uppercase cursor-pointer"
          value="Cambiar contraseña"
        />
      </form>
      <div className="flex items-center justify-center w-full h-full gap-2 py-1">
        <p className="text-grayPalette text-balance">¿Ya tienes una cuenta?</p>
        <a href="/login" className="text-primaryPalette text-balance">
          Inicia sesión
        </a>
      </div>
    </AuthLayout>
  );
}
