import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { PairingDemo } from '@/components/sections/PairingDemo';
import { FAQ } from '@/components/sections/FAQ';
import { ClosingCTA } from '@/components/sections/ClosingCTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <div style={{ background: 'var(--bg-app)', minHeight: '100vh' }}>
      <Header />
      <Hero />
      <Features />
      <PairingDemo />
      <FAQ />
      <ClosingCTA />
      <Footer />
    </div>
  );
}
