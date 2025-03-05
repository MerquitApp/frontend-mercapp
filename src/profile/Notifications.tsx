import { AUTH_COOKIE_NAME, BACKEND_URL } from '@/constants';
import { cookies } from 'next/headers';
import React from 'react';
import { LuInfo } from 'react-icons/lu';

interface Notification {
  id: number;
  message: string;
  createdAt: string;
}

async function Notificaciones() {
  const authCookie = cookies().get(AUTH_COOKIE_NAME);

  const resp = await fetch(`${BACKEND_URL}/notifications`, {
    headers: {
      Authorization: `Bearer ${authCookie?.value}`
    },
    credentials: 'include'
  });
  const data = await resp.json();

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <h2 className="text-2xl font-bold text-primaryPalette">Notificaciones</h2>
      <ul className="flex flex-col p-10 gap-8 max-w-3xl w-full mx-auto overflow-y-auto">
        {data.map((notification: Notification, idx: number) => (
          <li
            className="bg-default-400/20 rounded-md p-4 flex gap-4 items-center"
            key={idx}>
            <LuInfo size={18} />
            <p className="text-lg">{notification.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notificaciones;
