import RecoverPassword from '@/auth/components/RecoverPassword';

function Page({ params }: { params: { id: string } }) {
  return <RecoverPassword token={params.id} />;
}

export default Page;
