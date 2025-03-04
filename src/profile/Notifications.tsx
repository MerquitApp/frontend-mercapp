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
    <ul className="flex flex-col p-10 gap-8 max-w-4xl mx-auto">
      {data.map((notification: Notification, idx: number) => (
        <li
          className="bg-default-400/20 rounded-md p-4 flex gap-4 items-center"
          key={idx}>
          <LuInfo size={18} />
          <p className="text-lg">{notification.message}</p>
        </li>
      ))}
    </ul>
  );
}

export default Notificaciones;
