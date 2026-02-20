'use client';

import { GraduationCap, Hospital, Leaf, Shield } from 'lucide-react';

export default function AboutSection() {
  const tracks = [
    { title: "Education", icon: <GraduationCap className="h-5 w-5" /> },
    { title: "Healthcare", icon: <Hospital className="h-5 w-5" /> },
    { title: "Sustainability", icon: <Leaf className="h-5 w-5" /> },
    { title: "Cybersecurity", icon: <Shield className="h-5 w-5" /> },
  ];

  return (
    <section id="about" className="py-32 relative bg-black">
      <div className="max-w-4xl mx-auto px-6">
        {/* Main headline */}
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Build AI that<br />
          <span className="text-[#8C734C]">actually matters.</span>
        </h2>

        {/* Description */}
        <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-16 max-w-3xl">
          HackUNCP brings together students from across the nation for 24 hours of building,
          learning, and creating AI solutions that solve real problems. No experience required, just
          bring your curiosity.
        </p>

        {/* Divider */}
        <div className="w-24 h-px bg-[#8C734C] mb-16"></div>

        {/* Stats inline */}
        <div className="flex flex-wrap gap-x-16 gap-y-8 mb-20">
          <div>
            <div className="text-5xl font-bold text-[#8C734C]">24</div>
            <div className="text-white/50 mt-1">hours</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-[#8C734C]">4</div>
            <div className="text-white/50 mt-1">AI tracks</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-[#8C734C]">100+</div>
            <div className="text-white/50 mt-1">hackers</div>
          </div>
        </div>

        {/* Tracks section */}
        <div className="mb-20">
          <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-6">
            Competition Tracks
          </h3>

          <div className="space-y-6">
            {tracks.map((track, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <span className="text-[#8C734C]">{track.icon}</span>
                <span className="text-2xl md:text-3xl font-semibold text-white group-hover:text-white/70 transition-colors">
                  AI for {track.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* New for 2026 */}
        <div className="border-l-2 border-[#8C734C] pl-6">
          <p className="text-lg text-white/70">
            <span className="text-[#8C734C] font-semibold">New for 2026:</span> Graduate students
            are now welcome alongside undergraduates, creating a richer innovation ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}
