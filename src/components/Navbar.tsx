'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: '2026', href: '#2026-event' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: '2025 Recap', href: '#2025-recap' },
    { name: 'Team', href: '#team-section' },
    { name: 'AI@UNCP', href: '#ai-uncp' },
    { name: 'FAQ', href: '#faq' }
  ];

  const handleNavClick = (href: string) => {
    const targetId = href.replace('#', '');
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2"
          >
            <Image
              src="/logos/HackUNCP Logo.png"
              alt="HackUNCP"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-white">
              HackUNCP
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="transition-colors text-sm font-medium text-white/60 hover:text-white"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => window.open('https://forms.gle/9nKvHB9M3oEAtQXg7', '_blank')}
              className="px-5 py-2 bg-[#8C734C] text-white text-sm font-semibold rounded-full hover:bg-[#A08563] transition-all"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/98 backdrop-blur-md border-b border-white/10 shadow-lg">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  window.open('https://forms.gle/9nKvHB9M3oEAtQXg7', '_blank');
                  setIsMenuOpen(false);
                }}
                className="w-full mt-4 px-4 py-3 bg-[#8C734C] text-white font-semibold rounded-lg hover:bg-[#A08563] transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
