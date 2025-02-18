'use client';

import { Avatar } from '@nextui-org/react';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { FaRegClock } from 'react-icons/fa6';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { CiLogout } from 'react-icons/ci';
import { IoLockClosedOutline } from 'react-icons/io5';
import AccountOption from './AccountOption';
import { toast } from 'sonner';
import { BACKEND_URL } from '@/constants';
import { LuHeart, LuUpload } from 'react-icons/lu';

interface Props {
  userName: string;
  userEmail: string;
  userAvatar: string;
}

const ProfileSection = ({ userName, userEmail, userAvatar }: Props) => {
  const handleLogout = async () => {
    try {
      const resp = await fetch(`${BACKEND_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include'
      });

      if (resp.ok) {
        window.location.reload();
      }
    } catch (error) {
      toast.error('Error al cerrar sesión');
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col items-center justify-center">
        <Avatar
          className="w-16 h-16 md:w-20 md:h-20 rounded-full opacity-100"
          src={userAvatar}
          name={userName}
          showFallback={false}
          classNames={{
            img: 'opacity-100'
          }}
        />
        <h2 className="font-semibold text-xl md:text-2xl">{userName}</h2>
        <h3 className="text-sm">{userEmail}</h3>
      </div>
      <div className="bg-greyPalette/5 w-[90%] max-w-xl flex flex-col gap-4 p-8 rounded-lg shadow-md items-center">
        <div className="flex flex-col gap-8 justify-center items-center w-full">
          <AccountOption
            accountIcon={<IoSettingsOutline />}
            accountName="Configuración"
            href="/profile/setting"
          />
          <AccountOption
            accountIcon={<LuUpload />}
            accountName="Productos Subidos"
            href="/profile/products"
          />
          <AccountOption
            accountIcon={<LuHeart />}
            accountName="Favoritos"
            href="/profile/likes"
          />
          <AccountOption
            accountIcon={<MdOutlineNotificationsActive />}
            accountName="Notificaciones"
            href="/profile/notifications"
          />
          <AccountOption
            accountIcon={<FaRegClock />}
            accountName="Historial de compras"
            href="/profile/history"
          />
          <AccountOption
            accountIcon={<IoLockClosedOutline />}
            accountName="Politica de privacidad"
            href="/profile/privacy"
          />
          <AccountOption
            accountIcon={<IoAlertCircleOutline />}
            accountName="Terminos y condiciones"
            href="/profile/terms"
          />
          <AccountOption
            accountIcon={<CiLogout />}
            accountName="Cerrar sesión"
            as={'button'}
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
