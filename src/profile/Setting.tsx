'use client';

import Head from '@/home/components/Header';
import Footer from '@/ui/components/Footer';
import React from 'react';

function Setting() {
  const [editMode, setEditMode] = React.useState(false);
  const [user, setUser] = React.useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    location: 'Madrid, España',
    avatar: 'https://avatars.githubusercontent.com/u/10594771?v=4',
    description: 'Vendedor de artículos de segunda mano con experiencia.',
    id: 1 // Add a default id value
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
      const response = await fetch(`/users/${user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        // Enviamos los campos que queremos actualizar en la base de datos
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          location: user.location,
          avatar: user.avatar,
          description: user.description
        })
      });

      if (response.ok) {
        // Si la actualización fue exitosa, salimos del modo edición
        setEditMode(false);
      } else {
        console.error('Error al actualizar el usuario');
      }
    } catch (error) {
      console.error('Error al llamar a la API', error);
    }
  };

  return (
    <>
      <Head />
      <div className="flex flex-col items-center p-10 gap-8">
        <h2 className="font-semibold text-2xl">Configuración de Cuenta</h2>
        <div className="w-full max-w-md bg-white shadow-md rounded p-6">
          <div className="flex flex-col items-center mb-6">
            <img
              className="w-24 h-24 rounded-full object-cover"
              src={user.avatar}
              alt="Avatar del usuario"
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
            <label className="block text-gray-700">Ubicación:</label>
            {editMode ? (
              <input
                type="text"
                name="location"
                value={user.location}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            ) : (
              <p>{user.location}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Descripción:</label>
            {editMode ? (
              <textarea
                name="description"
                value={user.description}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            ) : (
              <p>{user.description}</p>
            )}
          </div>
          <div className="flex justify-end">
            {editMode ? (
              <>
                <button
                  onClick={handleSave}
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                  Guardar
                </button>
                <button
                  onClick={() => setEditMode(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded">
                  Cancelar
                </button>
              </>
            ) : (
              <button
                onClick={() => setEditMode(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded">
                Editar Perfil
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Setting;
