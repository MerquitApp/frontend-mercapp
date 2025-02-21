import Header from '@/home/components/Header';
import Footer from '@/ui/components/Footer';

const layout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default layout;
