'use client';
import SectionHome from '@/home/components/SectionHome';
import Header from '../home/components/Header';
import TabsHead from '../home/components/TabsHead';
import Footer from '@/ui/components/Footer';
import SliderHome from '@/home/components/SliderHome';

export default function Home() {
  return (
    <>
      <Header />
      <TabsHead />
      <SectionHome />
      <SliderHome />
      <Footer />
    </>
  );
}
