'use client';
import SectionHome from '@/home/components/SectionHome';
import Head from '../home/components/Head';
import TabsHead from '../home/components/TabsHead';
import Footer from '@/ui/components/Footer';
import SliderHome from '@/home/components/SliderHome';

export default function Home() {
  return (
    <>
      <Head />
      <TabsHead />
      <SectionHome />
      <SliderHome />
      <Footer />
    </>
  );
}
