import { BACKEND_URL } from '@/constants';
import UserProducts from '@/userProfile/components/UserProducts';

export default async function Page() {
  const resp = await fetch(`${BACKEND_URL}/products/user`);
  const data = await resp.json();
  return <UserProducts products={data} />;
}
