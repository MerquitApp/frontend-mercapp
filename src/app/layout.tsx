import type { Metadata } from 'next';
import '../ui/styles/globals.css';
import { Providers } from '@/providers/Providers';
import { Toaster } from 'sonner';
import { Environment } from '@/types';
import Script from 'next/script';

const isDev = process.env.NODE_ENV === Environment.Development;

export const metadata: Metadata = {
  title: 'Mercapp',
  description:
    'Mercapp es una plataforma digital diseñada para facilitar la compra y venta de productos entre usuarios de manera sencilla, segura y rápida. Inspirada en la economía colaborativa, Mercapp conecta directamente a compradores y vendedores, fomentando un comercio local, personalizado y eficiente.',
  icons: {
    icon: '/logo-mercapp.png'
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: '/',
    title: 'MercApp',
    description:
      'MercApp es una plataforma digital diseñada para facilitar la compra y venta de productos entre usuarios de manera sencilla, segura y rápida. Inspirada en la economía colaborativa, Mercapp conecta directamente a compradores y vendedores, fomentando un comercio local, personalizado y eficiente.',
    images: [
      {
        url: '/logo-mercapp.png',
        width: 1200,
        height: 630
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-montserrat">
        <Providers>{children}</Providers>
        <Toaster />
      </body>
      {!isDev && (
        <Script
          defer
          src="https://analytics.hgo.one/script.js"
          data-website-id="8f4cc5ff-8db5-4a5f-8dd0-64b8b6cff403"
        />
      )}
    </html>
  );
}
