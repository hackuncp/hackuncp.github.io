'use client';

import Image from 'next/image';
import { Mail } from 'lucide-react';

const sponsors = [
  {
    name: 'CodeCrafters',
    logo: '/sponsors_2026/CodeCrafters.io full logo full text (Dark text).png',
    url: 'https://codecrafters.io/',
  },
  {
    name: 'College of Arts and Sciences - UNC Pembroke',
    logo: '/sponsors_2026/College of Arts and Sciences - UNC Pembroke.png',
    url: 'https://www.uncp.edu/academics/colleges-and-schools/college-of-arts-and-sciences/index.html',
  },
  {
    name: 'Department of Mathematics & Computer Science - UNC Pembroke',
    logo: '/sponsors_2026/Department of Mathematics & Computer Science - Pembroke.png',
    url: 'https://www.uncp.edu/academics/colleges-and-schools/college-of-arts-and-sciences/mathematics-and-computer-science/index.html',
  },
  {
    name: "Byrd's Computer Service",
    logo: '/sponsors_2026/BCS.PNG',
    url: 'https://www.byrdscomputerservice.com/',
  },
  {
    name: 'Thomas College of Business and Economics - UNC Pembroke',
    logo: '/sponsors_2026/TCOBE_LOGO.png',
    url: 'https://www.uncp.edu/academics/colleges-and-schools/thomas-college-of-business-and-economics/index.html',
  },
];

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="relative">
      {/* Gradient transition from dark to light */}
      <div className="h-24 bg-gradient-to-b from-neutral-950 to-[#f5f0eb]" />

      <div className="py-24 bg-[#f5f0eb]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-8">
            Sponsors
          </h2>

          <p className="text-xl text-black/50 mb-16 max-w-2xl">
            We&apos;re partnering with organizations who believe in student-led AI innovation.
          </p>

          {/* Sponsor logos - top row */}
          <div className="flex flex-wrap justify-center gap-12 mb-12">
            {sponsors.slice(0, 3).map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-[100px] w-[260px] hover:opacity-70 transition-opacity duration-300"
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={260}
                  height={100}
                  className="object-contain w-full h-full"
                />
              </a>
            ))}
          </div>

          {/* Sponsor logos - bottom row */}
          <div className="flex flex-wrap justify-center gap-12 mb-20">
            {sponsors.slice(3).map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-[100px] w-[260px] hover:opacity-70 transition-opacity duration-300"
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={260}
                  height={100}
                  className="object-contain w-full h-full"
                />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-[#8C734C] mb-16"></div>

          {/* Sponsor CTA */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Interested in sponsoring?
            </h3>
            <p className="text-black/50 mb-6 max-w-xl">
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
      </div>
    </section>
  );
}
