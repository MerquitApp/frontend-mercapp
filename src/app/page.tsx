'use client';
import SectionHome from '@/home/components/SectionHome';
import Head from '../home/components/Head';
import TabsHead from '../home/components/TabsHead';
import Footer from '@/ui/components/Footer';

export default function Home() {
  return (
    <>
      <Head />
      <TabsHead />
      <SectionHome />
      <Footer />
    </>
  );
}
