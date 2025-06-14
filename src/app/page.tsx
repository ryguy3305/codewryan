import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Curriculum } from '@/components/sections/Curriculum';
import { Pricing } from '@/components/sections/Pricing';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Curriculum />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
