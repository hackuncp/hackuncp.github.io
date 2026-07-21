import Image from 'next/image';
import { ArrowUpRight, CalendarDays, MapPin } from 'lucide-react';

const editions = [
  {
    year: '2025',
    date: 'March 22-23, 2025',
    description:
      'The first HackUNCP was a 24-hour hackathon focused on intelligent AI agents.',
    href: 'https://hackuncp-2025.devpost.com/',
    accent: 'from-[#fff4d8] via-[#fffaf0] to-white/70',
  },
  {
    year: '2026',
    date: 'February 21-22, 2026',
    description:
      'The second HackUNCP was a 24-hour hackathon focused on practical AI projects.',
    href: 'https://hackuncp-2026.devpost.com/',
    accent: 'from-[#eee4d1] via-[#f8f3ea] to-white/70',
    mlh: true,
  },
];

export default function Home() {
  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HackUNCP',
    url: 'https://hackuncp.github.io/',
    description:
      'The HackUNCP website, with event archives from 2025 and 2026.',
    publisher: {
      '@type': 'Organization',
      name: 'HackUNCP',
    },
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6f1e8] text-[#172033]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <div className="archive-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute left-[-10rem] top-[-16rem] h-[38rem] w-[38rem] rounded-full bg-[#d8c39f]/45 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute right-[-12rem] top-[12rem] h-[34rem] w-[34rem] rounded-full bg-[#f5c58f]/45 blur-[125px]"
        aria-hidden="true"
      />

      <a
        className="fixed right-5 top-0 z-50 hidden w-[78px] transition-transform hover:translate-y-1 lg:block"
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="HackUNCP participated in the Major League Hacking 2026 season"
      >
        <Image
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
          alt="Major League Hacking 2026 Hackathon Season"
          width={78}
          height={130}
          unoptimized
          className="h-auto w-full"
        />
      </a>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-6 sm:px-8 lg:px-12 lg:py-8">
        <header className="flex items-center justify-between border-b border-[#172033]/10 pb-5">
          <a href="#archive" className="flex items-center gap-3" aria-label="HackUNCP archive home">
            <Image
              src="/logos/HackUNCP Logo.png"
              alt=""
              width={52}
              height={52}
              priority
              className="h-12 w-12 object-contain"
            />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#172033]/80">
              HackUNCP
            </span>
          </a>
          <span className="rounded-full border border-[#172033]/10 bg-white/50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#172033]/65 shadow-sm backdrop-blur-sm">
            2025 and 2026
          </span>
        </header>

        <section id="archive" className="flex flex-1 flex-col justify-center py-10 lg:-translate-y-6 lg:py-8">
          <div className="mb-8 max-w-3xl lg:mb-10">
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              HackUNCP
              <span className="block text-[#8d6b3a]">2025 and 2026</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#172033]/70 sm:text-lg">
              HackUNCP was held at the University of North Carolina at Pembroke in 2025 and 2026.
              Visit each Devpost page for event details, projects, and winners.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {editions.map((edition) => (
              <a
                key={edition.year}
                href={edition.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`archive-card group relative overflow-hidden rounded-3xl border border-white/80 bg-gradient-to-br ${edition.accent} p-6 shadow-[0_18px_50px_rgba(59,46,29,0.09)] transition duration-300 hover:-translate-y-1 hover:border-white hover:shadow-[0_24px_65px_rgba(59,46,29,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6b3a] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f6f1e8] sm:p-7`}
              >
                <div
                  className="absolute right-[-4rem] top-[-5rem] h-44 w-44 rounded-full border-[26px] border-white/35"
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="mb-8 flex items-start justify-between">
                    <h2 className="text-4xl font-semibold tracking-[-0.04em]">HackUNCP {edition.year}</h2>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#172033] text-white shadow-lg transition group-hover:scale-105 group-hover:bg-[#8d6b3a]">
                      <ArrowUpRight size={19} aria-hidden="true" />
                    </span>
                  </div>

                  <div className="mb-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#172033]/65">
                    <span className="flex items-center gap-2">
                      <CalendarDays size={15} aria-hidden="true" />
                      {edition.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin size={15} aria-hidden="true" />
                      UNC Pembroke
                    </span>
                  </div>

                  <p className="max-w-xl text-sm leading-relaxed text-[#172033]/70 sm:text-base">
                    {edition.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#172033]/10 pt-5">
                    <span className="text-sm font-semibold text-[#172033]/80">Explore on Devpost</span>
                    {edition.mlh && (
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#172033]/60">
                        MLH 2026 Season
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-[#172033]/10 pt-5 text-xs text-[#172033]/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© HackUNCP</p>
          <nav aria-label="Organizer">
            <a className="transition hover:text-[#8d6b3a]" href="https://aiuncp.github.io/" target="_blank" rel="noopener noreferrer">
              Organized by <span className="font-semibold">AI@UNCP</span>
            </a>
          </nav>
        </footer>
      </div>
    </main>
  );
}
