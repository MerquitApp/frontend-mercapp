import { Avatar } from '@nextui-org/react';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { FaRegClock } from 'react-icons/fa6';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { CiLogout } from 'react-icons/ci';
import { IoLockClosedOutline } from 'react-icons/io5';

import AccountOption from './AccountOption';

interface Props {
  userName: string;
  userEmail: string;
  userAvatar: string;
}

const ProfileSection = ({ userName, userEmail, userAvatar }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center p-10 gap-8">
      <div className="flex flex-col items-center justify-center">
        <Avatar
          className="w-16 h-16 md:w-20 md:h-20 rounded-full"
          name="John Doe"
          src={userAvatar}
        />
        <h2 className="font-semibold text-xl md:text-2xl">{userName}</h2>
        <h3 className="text-sm">{userEmail}</h3>
      </div>
      <div className="bg-greyPalette/5 w-fit flex flex-col gap-4 p-8 rounded-lg shadow-md items-center">
        <div className="flex flex-col gap-8 justify-center items-center max-w-sm">
          <AccountOption
            accountIcon={<IoSettingsOutline />}
            accountName="Configuración"
            accountSetting="setting"
          />
          <AccountOption
            accountIcon={<IoSettingsOutline />}
            accountName="Productos Subidos"
            accountSetting="products"
          />
          <AccountOption
            accountIcon={<IoSettingsOutline />}
            accountName="Favoritos"
            accountSetting="likes"
          />
          <AccountOption
            accountIcon={<MdOutlineNotificationsActive />}
            accountName="Notificaciones"
            accountSetting="notifications"
          />
          <AccountOption
            accountIcon={<FaRegClock />}
            accountName="Historial de compras"
            accountSetting="history"
          />
          <AccountOption
            accountIcon={<IoLockClosedOutline />}
            accountName="Politica de privacidad"
            accountSetting="privacy"
          />
          <AccountOption
            accountIcon={<IoAlertCircleOutline />}
            accountName="Terminos y condiciones"
            accountSetting="terms"
          />
          <AccountOption
            accountIcon={<CiLogout />}
            accountName="Cerrar sesión"
            accountSetting="/"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
