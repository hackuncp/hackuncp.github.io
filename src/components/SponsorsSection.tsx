'use client';

import { Mail } from 'lucide-react';

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="py-32 relative bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Sponsors
        </h2>

        <p className="text-xl text-white/70 mb-16 max-w-2xl">
          We&apos;re partnering with organizations who believe in student-led AI innovation.
          Sponsor announcements coming soon.
        </p>

        {/* Divider */}
        <div className="w-24 h-px bg-[#8C734C] mb-16"></div>

        {/* Sponsor CTA */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Interested in sponsoring?
          </h3>
          <p className="text-white/60 mb-6 max-w-xl">
            Connect with 100+ talented students, showcase your brand, and support the next
            generation of AI innovators.
          </p>

          <a
            href="mailto:team@hackuncp.com"
            className="inline-flex items-center gap-2 text-[#8C734C] hover:text-[#BFA77A] transition-colors font-medium"
          >
            <Mail size={18} />
            team@hackuncp.com
          </a>
        </div>
      </div>
    </section>
  );
}
