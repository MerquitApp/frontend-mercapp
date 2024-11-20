'use client';

import Link from 'next/link';
import { useState } from 'react';
import AuthLayout from '../layouts/AuthLayout';

function RegistrationForm() {
  const [areaCode, setAreaCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [areaCodeError, setAreaCodeError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const validatePhone = (type: 'areaCode' | 'phoneNumber', value: string) => {
    if (type === 'areaCode') {
      if (!/^\d{1,4}$/.test(value)) {
        setAreaCodeError('Debe tener entre 1 y 4 dígitos');
      } else {
        setAreaCodeError('');
      }
    } else {
      if (!/^\d{6,10}$/.test(value)) {
        setPhoneNumberError('Debe tener entre 6 y 10 dígitos');
      } else {
        setPhoneNumberError('');
      }
    }
  };

  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center w-full h-full gap-2 py-2">
        <h3 className="text-blackPalette text-2xl font-bold">
          Compra y vende en Mercapp
        </h3>
        <div className="w-3/4">
          <h4 className="text-grayPalette text-xs text-center">
            Consigue los mejores precios y gana dinero con lo que no demandas
          </h4>
        </div>
      </div>
      <form action="">
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="" className="text-grayPalette text-sm font-medium">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border-2 border-gray-500 rounded-lg p-2"
            placeholder="Juan"
            required
          />
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <label
            htmlFor="areaCode"
            className="text-grayPalette text-sm font-medium">
            Código de área
          </label>
          <input
            type="tel"
            name="areaCode"
            id="areaCode"
            className="border-2 border-gray-500 rounded-lg p-2"
            placeholder="Ej: 54"
            required
            value={areaCode}
            onChange={(e) => {
              setAreaCode(e.target.value);
              validatePhone('areaCode', e.target.value);
            }}
          />
          {areaCodeError && (
            <p className="text-red-500 text-xs">{areaCodeError}</p>
          )}
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <label
            htmlFor="phoneNumber"
            className="text-grayPalette text-sm font-medium">
            Número de teléfono
          </label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            className="border-2 border-gray-500 rounded-lg p-2"
            placeholder="Ej: 123456789"
            required
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
              validatePhone('phoneNumber', e.target.value);
            }}
          />
          {phoneNumberError && (
            <p className="text-red-500 text-xs">{phoneNumberError}</p>
          )}
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-grayPalette text-sm font-medium">
            E-mail
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="border-2 border-gray-500 rounded-lg p-2"
            placeholder="ejemplo@gmail.com"
            required
          />
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="" className="text-grayPalette text-sm font-medium">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border-2 border-gray-500 rounded-lg p-2"
            placeholder="******"
            required
          />
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <button className="bg-primaryPalette text-white text-sm font-semibold py-2 px-4 rounded-lg uppercase hover:font-bold">
            Registrarme
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center w-full h-full gap-2 py-1">
        <h3 className="text-blackPalette text-l font-light">
          ¿Ya tienes una cuenta?
        </h3>
        <Link href="/login">
          <h3 className="text-primaryPalette text-l font-semibold">
            Inicia sesión
          </h3>
        </Link>
      </div>
    </AuthLayout>
  );
}

export default RegistrationForm;
