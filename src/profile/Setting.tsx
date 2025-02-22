'use client';

import { BACKEND_URL } from '@/constants';
import { useAuthStore } from '@/store/auth';
import PrimaryButton from '@/ui/components/PrimaryButton';
import { Avatar } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

function Setting() {
  const {
    name,
    email,
    profilePicture,
    phone_number,
    setEmail,
    setName,
    setPhoneNumber
  } = useAuthStore((state) => state)!;
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState({
    name,
    email,
    phoneNumber: phone_number
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSave = async () => {
    try {
      // Realizamos una llamada PATCH a nuestro backend en Nest.js
      const response = await fetch(`${BACKEND_URL}/users`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        // Enviamos los campos que queremos actualizar en la base de datos
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          phoneNumber: user.phoneNumber
        })
      });

      if (response.ok) {
        // Si la actualización fue exitosa, salimos del modo edición
        setEditMode(false);
        toast.success('Perfil actualizado correctamente');
        setName(user.name);
        setEmail(user.email);
        setPhoneNumber(user.phoneNumber);
      } else {
        console.error('Error al actualizar el usuario');
        toast.error('Error al actualizar el perfil');
      }
    } catch (error) {
      toast.error('Error al actualizar el perfil');
      console.error('Error al llamar a la API', error);
    }
  };

  const handleCancelButton = () => {
    setUser({
      name,
      email,
      phoneNumber: phone_number
    });
    setEditMode(false);
  };

  useEffect(() => {
    setUser({
      name,
      email,
      phoneNumber: phone_number
    });
  }, [name, email, phone_number]);

  return (
    <div className="flex flex-col items-center p-10 gap-8">
      <h2 className="font-semibold text-2xl">Configuración de Cuenta</h2>
      <div className="w-full max-w-md bg-white shadow-md rounded p-6">
        <div className="flex flex-col items-center mb-6">
          <Avatar
            className="w-16 h-16 md:w-20 md:h-20 rounded-full opacity-100 text-primaryPalette"
            src={profilePicture}
            name={name}
            showFallback={false}
            classNames={{
              img: 'opacity-100'
            }}
          />
          {editMode ? (
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="mt-4 text-xl font-medium border p-2 rounded w-full"
            />
          ) : (
            <h3 className="mt-4 text-xl font-medium">{user.name}</h3>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          {editMode ? (
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          ) : (
            <p>{user.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Numero de teléfono:</label>
          {editMode ? (
            <input
              type="tel"
              name="phoneNumber"
              value={user.phoneNumber ?? ''}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          ) : (
            <p>{user.phoneNumber}</p>
          )}
        </div>
        <div className="flex justify-end">
          {editMode ? (
            <div className="flex gap-4 items-center justify-end">
              <PrimaryButton onClick={handleSave}>Guardar</PrimaryButton>
              <button
                onClick={handleCancelButton}
                className="bg-gray-500 text-white px-4 py-2 rounded-md">
                Cancelar
              </button>
            </div>
          ) : (
            <PrimaryButton onClick={() => setEditMode(true)}>
              Editar Perfil
            </PrimaryButton>
          )}
        </div>
      </div>
    </div>
  );
}

export default Setting;
