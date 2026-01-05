'use client';

import { ArrowRight, Check } from 'lucide-react';

export default function Event2026Section() {
  const benefits = [
    "Free meals and snacks throughout",
    "Mentorship from industry professionals",
    "Workshops and tech talks",
    "Networking with peers and sponsors",
    "Portfolio-worthy project experience",
    "Prizes for outstanding projects"
  ];

  return (
    <section id="2026-event" className="py-32 relative bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          {/* Left column - main info */}
          <div>
            <p className="text-[#8C734C] font-medium mb-4">February 21-22, 2026</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              HackUNCP 2026
            </h2>
            <p className="text-xl text-white/70 mb-8">
              24 hours of AI innovation at UNC Pembroke. Build something real,
              learn from mentors, and compete for prizes.
            </p>

            <button
              onClick={() => window.open('https://forms.gle/9nKvHB9M3oEAtQXg7', '_blank')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#8C734C] text-white font-semibold rounded-full hover:bg-[#A08563] transition-colors"
            >
              Apply Now
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right column - details */}
          <div className="space-y-8">
            <div>
              <p className="text-white/50 text-sm uppercase tracking-wider mb-2">Location</p>
              <p className="text-2xl text-white">UNC Pembroke Campus</p>
              <p className="text-white/60">Pembroke, North Carolina</p>
            </div>

            <div>
              <p className="text-white/50 text-sm uppercase tracking-wider mb-2">Format</p>
              <p className="text-2xl text-white">In-Person</p>
              <p className="text-white/60">24-hour hackathon</p>
            </div>

            <div>
              <p className="text-white/50 text-sm uppercase tracking-wider mb-2">Eligibility</p>
              <p className="text-2xl text-white">College Students</p>
              <p className="text-white/60">Undergraduate & Graduate</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-24"></div>

        {/* What you get */}
        <div className="mb-24">
          <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-8">
            What You Get
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#8C734C] flex-shrink-0" />
                <span className="text-lg text-white/70">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule teaser */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-[#8C734C] mb-2">Sat 5:30PM</p>
            <p className="text-white/50">Opening Ceremony</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#8C734C] mb-2">24 Hours</p>
            <p className="text-white/50">Build, Learn, Create</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#8C734C] mb-2">Sun 5:30PM</p>
            <p className="text-white/50">Closing & Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
}
