import Image from 'next/image';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io5';
import Link from 'next/link';

function Footer() {
  return (
    <div className="flex flex-col p-4 gap-4 h-screen">
      <span className="border-small border-greyPalette"></span>
      <div className="flex justify-between text-start gap-4 px-6">
        <div className="flex-col justify-between gap-2">
          <Link href={'/'}>
            <Image
              width={45}
              height={3}
              src="/logo-mercapp.png"
              alt="Icono MercApp"
            />
          </Link>
          <div className="flex flex-row gap-2 mt-4">
            <Link href={''}>
              <FaXTwitter />
            </Link>
            <Link href={''}>
              <FaInstagram />
            </Link>
            <Link href={''}>
              <FaYoutube />
            </Link>
            <Link href={''}>
              <IoLogoLinkedin />
            </Link>
          </div>
        </div>
        <div className="flex-col justify-between">
          <h3 className="text-s font-bold pb-4">Mercapp</h3>
          <div className="flex flex-col gap-3">
            <p className="text-xs">Sobre Nosotros</p>
            <p className="text-xs">Trabaja con nosotros</p>
            <p className="text-xs">Sustentabilidad</p>
          </div>
        </div>
        <div>
          <h3 className="text-s font-bold pb-4">Soporte</h3>
          <div className="flex flex-col gap-3">
            <p className="text-xs">Ayuda</p>
            <p className="text-xs">Comunidad</p>
            <p className="text-xs">Tips de seguridad</p>
          </div>
        </div>
        <div>
          <h3 className="text-s font-bold pb-4">Terminos Legales</h3>
          <div className="flex flex-col gap-3">
            <p className="text-xs">Noticias legales</p>
            <p className="text-xs">Términos</p>
            <p className="text-xs">Política de Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
