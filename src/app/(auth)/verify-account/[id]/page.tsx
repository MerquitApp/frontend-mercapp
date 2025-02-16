import { BACKEND_URL } from '@/constants';
import { LuCircleCheckBig } from 'react-icons/lu';

export default async function Page({ params }: { params: { id: string } }) {
  await fetch(`${BACKEND_URL}/auth/verify-account`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token: params.id }),
    credentials: 'include'
  });

  return (
    <div className="flex flex-col items-center justify-center mt-44 gap-4">
      <LuCircleCheckBig size={100} strokeWidth={1} />
      <h1 className="text-2xl">¡Cuenta confirmada!</h1>
      <a
        href="/login"
        className="bg-primaryPalette text-white text-sm p-2 rounded-md active:scale-[0.98] transition-transform hover:scale-105">
        Iniciar sesión
      </a>
    </div>
  );
}
