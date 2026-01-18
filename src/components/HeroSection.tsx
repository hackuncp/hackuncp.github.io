'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Code } from 'lucide-react';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const target = new Date('2026-02-21T23:00:00Z');
    const now = new Date();
    const diff = Math.max(target.getTime() - now.getTime(), 0);
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const colors = ['#8C734C', '#BFA77A'];
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    let animationFrameId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-white text-center overflow-hidden px-4 py-8 bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40" />

      {/* Soft glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-[#8C734C]/20 rounded-full blur-3xl" />

      {/* Logo */}
      <div className="relative z-10 mb-6">
        <Image
          src="/logos/HackUNCP Logo.png"
          alt="HackUNCP Logo"
          width={400}
          height={400}
          priority
          className="relative w-[240px] md:w-[300px] lg:w-[360px] h-auto object-contain mx-auto drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white">
          HACKUNCP
        </h1>
        <p className="mt-2 text-3xl sm:text-4xl md:text-5xl text-[#8C734C] font-bold">2026</p>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white/70">
          24 hours of innovation, collaboration, and competition at UNC Pembroke.
          <br />
          <span className="text-[#8C734C] font-semibold">February 21-22</span>
        </p>

        {/* Deadline extended notice */}
        <div className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-[#8C734C]/20 border border-[#8C734C]/40 rounded-full">
          <span className="text-[#8C734C] font-semibold">Deadline Extended</span>
          <span className="text-white/70">Apply by January 25, 2026</span>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => window.open('https://forms.gle/9nKvHB9M3oEAtQXg7', '_blank')}
            className="px-8 py-4 bg-[#8C734C] text-white font-semibold rounded-full hover:bg-[#A08563] transition-all duration-300 text-lg"
          >
            Apply Now
          </button>

          <button
            onClick={() => document.getElementById('2025-recap')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
          >
            <Code size={18} />
            View 2025 Highlights
          </button>
        </div>

        {/* Countdown */}
        <div className="mt-12 grid grid-cols-4 gap-6 max-w-lg mx-auto">
          {[
            { label: 'DAYS', value: timeLeft.days },
            { label: 'HRS', value: timeLeft.hours },
            { label: 'MIN', value: timeLeft.minutes },
            { label: 'SEC', value: timeLeft.seconds }
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#8C734C] font-mono">
                {String(value).padStart(2, '0')}
              </div>
              <div className="text-white/50 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
