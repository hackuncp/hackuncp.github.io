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
      {/* MLH Trust Badge */}
      <a
        id="mlh-trust-badge"
        className="hidden lg:block fixed right-4 top-0 w-[80px] z-[10000]"
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
          alt="Major League Hacking 2026 Hackathon Season"
          className="w-full"
        />
      </a>
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