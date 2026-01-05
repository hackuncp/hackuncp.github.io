'use client';

import { ArrowUpRight } from 'lucide-react';

export default function AIUNCPSection() {
  return (
    <section id="ai-uncp" className="py-32 relative bg-neutral-950">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
          AI@UNCP
        </h2>

        <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-12 max-w-3xl">
          A student organization at UNC Pembroke focused on artificial intelligence.
          We organize events like HackUNCP to bring together students interested in AI
          and create opportunities to learn and build together.
        </p>

        {/* Link */}
        <a
          href="https://aiuncp.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#8C734C] hover:text-[#BFA77A] transition-colors font-medium text-lg"
        >
          Visit AI@UNCP
          <ArrowUpRight size={20} />
        </a>
      </div>
    </section>
  );
}
