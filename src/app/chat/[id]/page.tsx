import Chat from '@/chat/components/Chat';
import { AUTH_COOKIE_NAME, BACKEND_URL } from '@/constants';
import Header from '@/home/components/Header';
import Footer from '@/ui/components/Footer';
import { cookies } from 'next/headers';

async function Page({ params }: { params: { id: string } }) {
  const cookiesStore = cookies();
  const res = await fetch(`${BACKEND_URL}/chat/${params.id}`, {
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${cookiesStore.get(AUTH_COOKIE_NAME)?.value}`
    }
  });
  const data = await res.json();

  return (
    <>
      <Header />
      <Chat messages={data.messages} chatId={+params.id} users={data.users} />
      <Footer />
    </>
  );
}
export default Page;
