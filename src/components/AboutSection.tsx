'use client';

import { GraduationCap, Hospital, Leaf, Shield } from 'lucide-react';

export default function AboutSection() {
  const tracks = [
    { title: "Education", icon: <GraduationCap className="h-5 w-5" />, color: "text-slate-400" },
    { title: "Healthcare", icon: <Hospital className="h-5 w-5" />, color: "text-green-400" },
    { title: "Sustainability", icon: <Leaf className="h-5 w-5" />, color: "text-teal-400" },
    { title: "Cybersecurity", icon: <Shield className="h-5 w-5" />, color: "text-red-400" },
  ];

  return (
    <section id="about" className="py-32 relative bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Main headline */}
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Build AI that<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400">
            actually matters.
          </span>
        </h2>

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-16 max-w-3xl">
          HackUNCP brings together students from across the nation for 24 hours of building,
          learning, and creating AI solutions that solve real problems. No experience required, just
          bring your curiosity.
        </p>

        {/* Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-teal-400 to-amber-400 mb-16"></div>

        {/* Stats inline */}
        <div className="flex flex-wrap gap-x-16 gap-y-8 mb-20">
          <div>
            <div className="text-5xl font-bold text-white">24</div>
            <div className="text-gray-500 mt-1">hours</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-white">4</div>
            <div className="text-gray-500 mt-1">AI tracks</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-white">100+</div>
            <div className="text-gray-500 mt-1">hackers</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-white">TBA</div>
            <div className="text-gray-500 mt-1">in prizes</div>
          </div>
        </div>

        {/* Tracks section */}
        <div className="mb-20">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
            Competition Tracks
          </h3>

          <div className="space-y-6">
            {tracks.map((track, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <span className={`${track.color} transition-colors`}>{track.icon}</span>
                <span className="text-2xl md:text-3xl font-semibold text-white group-hover:text-gray-300 transition-colors">
                  AI for {track.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* New for 2026 */}
        <div className="border-l-2 border-teal-400 pl-6">
          <p className="text-lg text-gray-300">
            <span className="text-teal-400 font-semibold">New for 2026:</span> Graduate students
            are now welcome alongside undergraduates, creating a richer innovation ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}
