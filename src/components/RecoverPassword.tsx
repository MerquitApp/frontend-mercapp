export default function RecoverPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md h-3/4 p-4 bg-white rounded-lg shadow-md flex flex-col gap-3">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-blackPalette text-3xl font-bold">
            ¿Has olvidado tu contraseña?
          </h1>
          <p className="text-grayPalette text-lg">
            Ingresa tu correo y te enviaremos un enlace para restablecer tu
            contraseña.
          </p>
        </div>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-grayPalette text-sm font-medium">
              E-mail
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="border-2 border-gray-500 rounded-lg p-2"
              placeholder="ejemplo@gmail.com"
              required
            />
          </div>
          <input
            type="submit"
            className="bg-primaryPalette text-white text-sm font-semibold py-2 px-4 rounded-lg uppercase cursor-pointer"
            value="Enviar correo"
          />
        </form>
        <div className="flex items-center justify-center w-full h-full gap-2 py-1">
          <p className="text-grayPalette text-balance">
            ¿Ya tienes una cuenta?
          </p>
          <a href="/login" className="text-primaryPalette text-balance">
            Inicia sesión
          </a>
        </div>
      </div>
    </div>
  );
}
