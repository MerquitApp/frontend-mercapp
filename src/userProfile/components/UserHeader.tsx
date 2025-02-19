import React from 'react';
import Image from 'next/image';

interface UserHeaderProps {
  name: string;
  avatar: string;
}

const UserHeader: React.FC<UserHeaderProps> = ({ name, avatar }) => (
  <div className="flex items-center space-x-4">
    <div className="w-24 h-24 rounded-full overflow-hidden">
      <Image
        src={avatar}
        alt={`${name} avatar`}
        width={96}
        height={96}
        className="object-cover"
      />
    </div>
    <h2 className="text-3xl font-bold">{name}</h2>
  </div>
);

export default UserHeader;
