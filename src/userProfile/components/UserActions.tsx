'use client';
import React from 'react';
import { GoShareAndroid } from 'react-icons/go';
import { toast } from 'sonner';

interface UserActionsProps {
  profileUrl: string;
}

const UserActions: React.FC<UserActionsProps> = ({ profileUrl }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Perfil de usuario',
          text: '¡Mira este perfil de Mercapp!',
          url: profileUrl
        });
      } catch (error) {
        console.error('Error al compartir:', error);
      }
    } else {
      // Fallback: copiar la URL al portapapeles
      try {
        await navigator.clipboard.writeText(profileUrl);
        toast.success('Texto copiado al portapapeles');
      } catch (error) {
        console.error('Error al copiar la URL:', error);
      }
    }
  };
  return (
    <div className="mt-6 flex space-x-4 flex-wrap flex-start justify-end">
      <GoShareAndroid
        onClick={handleShare}
        className="cursor-pointer size-6 stroke-current hover:stroke-primaryPalette"
      />
    </div>
  );
};

export default UserActions;
