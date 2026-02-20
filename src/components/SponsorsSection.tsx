'use client';

import Image from 'next/image';

interface Sponsor {
  name: string;
  logo: string;
  url: string;
  scale?: string;
}

const sponsors: Sponsor[] = [
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
    logo: '/sponsors_2026/BCS.png',
    url: 'https://www.byrdscomputerservice.com/',
  },
  {
    name: 'Thomas College of Business and Economics - UNC Pembroke',
    logo: '/sponsors_2026/TCOBE_LOGO.png',
    url: 'https://www.uncp.edu/academics/colleges-and-schools/thomas-college-of-business-and-economics/index.html',
  },
  {
    name: 'Sakura Sky',
    logo: '/sponsors_2026/Sakura Sky.png',
    url: '',
    scale: 'scale-[4]',
  },
];

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="relative">
      {/* Gradient transition from dark to light */}
      <div className="h-24 bg-gradient-to-b from-black to-[#f5f0eb]" />

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
            {sponsors.slice(0, 3).map((sponsor) => {
              const Wrapper = sponsor.url ? 'a' : 'div';
              const linkProps = sponsor.url ? { href: sponsor.url, target: '_blank', rel: 'noopener noreferrer' } : {};
              return (
                <Wrapper
                  key={sponsor.name}
                  {...linkProps}
                  className="flex items-center justify-center h-[100px] w-[260px] hover:opacity-70 transition-opacity duration-300"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={260}
                    height={100}
                    className={`object-contain w-full h-full ${sponsor.scale || ''}`}
                  />
                </Wrapper>
              );
            })}
          </div>

          {/* Sponsor logos - bottom row */}
          <div className="flex flex-wrap justify-center gap-12 mb-20">
            {sponsors.slice(3).map((sponsor) => {
              const Wrapper = sponsor.url ? 'a' : 'div';
              const linkProps = sponsor.url ? { href: sponsor.url, target: '_blank', rel: 'noopener noreferrer' } : {};
              return (
                <Wrapper
                  key={sponsor.name}
                  {...linkProps}
                  className="flex items-center justify-center h-[100px] w-[260px] hover:opacity-70 transition-opacity duration-300"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={260}
                    height={100}
                    className={`object-contain w-full h-full ${sponsor.scale || ''}`}
                  />
                </Wrapper>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
