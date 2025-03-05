import { AUTH_COOKIE_NAME, BACKEND_URL } from '@/constants';
import Offers from '@/profile/Offers';
import { OfferResponse } from '@/types';
import { cookies } from 'next/headers';

export default async function OffersPage() {
  const authCookie = cookies().get(AUTH_COOKIE_NAME);

  const resp = await fetch(`${BACKEND_URL}/offer/seller`, {
    headers: {
      Authorization: `Bearer ${authCookie?.value}`
    }
  });
  const data: OfferResponse[] = await resp.json();

  return <Offers offers={data} />;
}
