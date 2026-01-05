'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

export default function Recap2025Section() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const winners = [
    { place: "1st", team: "VENOMAI", link: "https://devpost.com/software/venomai" },
    { place: "2nd", team: "EchoLearn", link: "https://devpost.com/software/echolearn" },
    { place: "3rd", team: "LiftMate", link: "https://devpost.com/software/liftmate" },
  ];

  const photoSlides = Array.from({ length: 25 }, (_, i) => ({
    src: `/hackuncp2025/hackuncp2025_${i + 2}.jpg`
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photoSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [photoSlides.length]);

  return (
    <section id="2025-recap" className="py-32 relative bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            HackUNCP 2025
          </h2>
          <p className="text-xl text-white/60">
            Our inaugural hackathon.
          </p>
        </div>

        {/* Photo carousel */}
        <div className="relative mb-20 group">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-neutral-900">
            {photoSlides.map((slide, index) => (
              <img
                key={index}
                src={slide.src}
                alt={`HackUNCP 2025`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}

            {/* Controls */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + photoSlides.length) % photoSlides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % photoSlides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={20} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
              {currentSlide + 1} / {photoSlides.length}
            </div>
          </div>
        </div>

        {/* Winners */}
        <div className="mb-20">
          <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-8">
            Winners
          </h3>

          <div className="space-y-6">
            {winners.map((winner, index) => (
              <div key={index} className="flex items-baseline justify-between border-b border-white/10 pb-6">
                <div className="flex items-baseline gap-6">
                  <span className="text-3xl font-bold text-[#8C734C] w-12">{winner.place}</span>
                  <span className="text-xl text-white font-medium">{winner.team}</span>
                </div>
                <a
                  href={winner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-[#8C734C] transition-colors"
                >
                  <ArrowUpRight size={20} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* View all projects link */}
        <a
          href="https://hackuncp-2025.devpost.com/project-gallery"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#8C734C] hover:text-[#BFA77A] transition-colors font-medium text-lg"
        >
          View all 2025 projects
          <ArrowUpRight size={20} />
        </a>
      </div>
    </section>
  );
}
