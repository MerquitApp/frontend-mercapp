import { BACKEND_URL } from '@/constants';
import UserProfile from '@/userProfile/UserProfile';

async function Page({ params }: { params: { id: string } }) {
  const resp = await fetch(`${BACKEND_URL}/users/profile/${params.id}`);
  const data = await resp.json();

  return <UserProfile {...data} />;
}

export default Page;
