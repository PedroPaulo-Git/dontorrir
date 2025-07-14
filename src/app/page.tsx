'use client'

import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import ProfessionalWork from '@/components/sections/ProfessionalWork';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Header />
      <Hero />
      <Services />
      <ProfessionalWork />
      <About />
      <Contact />
      <Footer />
    </main>
  );
} 