import Link from 'next/link';
import AuthLayout from '../layouts/AuthLayout';
import Input from '@ui/Input';
import PrimaryButton from '@/ui/components/PrimaryButton';
export default function RecoverPassword() {
  return (
    <AuthLayout>
      <h1 className="text-blackPalette text-3xl font-bold">
        Cambiar contraseña
      </h1>
      <form className="flex flex-col gap-4 mt-2">
        <Input
          label="Contraseña"
          name="password"
          type="password"
          placeholder="********"
          required
        />
        <Input
          label="Repetir Contraseña"
          name="password-repeat"
          placeholder="********"
          type="password"
          required
        />
        <PrimaryButton type="submit">Cambiar Contraseña</PrimaryButton>
      </form>
      <div className="flex items-center justify-center w-full h-full gap-2 py-1 mt-2">
        <p className="text-grayPalette text-balance">¿Ya tienes una cuenta?</p>
        <Link href="/login" className="text-primaryPalette text-balance">
          Iniciar Sesión
        </Link>
      </div>
    </AuthLayout>
  );
}
