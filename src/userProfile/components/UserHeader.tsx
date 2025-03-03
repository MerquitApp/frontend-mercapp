import { Avatar } from '@nextui-org/react';

interface UserHeaderProps {
  name: string;
  avatar: string;
}

const UserHeader: React.FC<UserHeaderProps> = ({ name, avatar }) => (
  <div className="flex items-center space-x-4">
    <Avatar
      name={name}
      src={avatar}
      alt={`${name} avatar`}
      size="lg"
      classNames={{
        img: 'opacity-100'
      }}
    />
    <h2 className="text-3xl font-bold">{name}</h2>
  </div>
);

export default UserHeader;
