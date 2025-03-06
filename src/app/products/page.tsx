import { BACKEND_URL } from '@/constants';
import Header from '@/home/components/Header';
import TabsHead from '@/home/components/TabsHead';
import AllProducts from '@/products/AllProducts';
import Footer from '@/ui/components/Footer';

export default async function Page({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const url = new URL(`${BACKEND_URL}/products`);
  if (searchParams?.category) {
    url.searchParams.append('category', searchParams.category as string);
  }
  const resp = await fetch(url);
  const data = await resp.json();

  return (
    <div>
      <Header />
      <TabsHead />
      <AllProducts products={data} />
      <Footer />
    </div>
  );
}
