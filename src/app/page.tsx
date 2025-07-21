'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import Recap2025Section from '@/components/Recap2025Section';
import Event2026Section from '@/components/Event2026Section';
import SponsorsSection from '@/components/SponsorsSection';
import Team from '@/components/Team';
import AIUNCPSection from '@/components/AIUNCPSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Event2026Section />
      <SponsorsSection />
      <Recap2025Section />
      <Team />
      <AIUNCPSection />
      <FAQSection />
      <Footer />
    </div>
  );
}