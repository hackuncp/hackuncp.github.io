'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Sparkles, Code, Brain } from 'lucide-react';

// HeroSection is the top section of the site featuring an animated background, logo, title, countdown, and call-to-action buttons.
export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  // Calculates the time remaining until the hackathon event date.
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

  // Recalculates the countdown every second.
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Creates an animated particle background on the canvas.
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const colorPalette = ['#3E8B94', '#B8232F', '#495965', '#4C7329'];
    const particles = Array.from({ length: 220 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
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
    <section className="relative flex flex-col items-center justify-center min-h-screen text-white text-center overflow-hidden px-4 py-8 bg-gradient-to-br from-slate-900 via-black to-slate-800">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Soft glowing background behind the logo */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />

      {/* HackUNCP logo with white glow */}
      <div className="relative z-10 mb-6">
        <Image
          src="/logos/HackUNCP Logo.png"
          alt="HackUNCP Logo"
          width={400}
          height={400}
          priority
          className="relative w-[280px] md:w-[340px] lg:w-[400px] h-auto object-contain mx-auto [filter:drop-shadow(0_0_12px_rgba(255,255,255,0.85))]"
        />
      </div>

      {/* Headline, subheadline, and description */}
      <div className="relative z-10 max-w-7xl w-full px-4">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight bg-gradient-to-r from-teal-400 via-amber-400 to-green-400 bg-clip-text text-transparent">
          HACKUNCP
        </h1>
        <p className="mt-2 text-4xl sm:text-5xl md:text-6xl text-amber-700 font-bold">2026</p>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300">
          24 hours of innovation, collaboration, and competition at UNC Pembroke.
          <br />
          <span className="text-teal-400 font-semibold">February 21-22</span>
        </p>

        {/* Call-to-action buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => window.open('https://forms.gle/9nKvHB9M3oEAtQXg7', '_blank')}
            className="group relative px-10 py-5 bg-gradient-to-r from-teal-500 to-amber-500 text-white font-bold rounded-full hover:from-teal-600 hover:to-amber-600 transition-all duration-500 transform hover:scale-110 shadow-xl text-xl overflow-hidden"
            aria-label="Apply for HackUNCP 2026"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
            <span className="relative z-10 flex items-center gap-2">
              <Brain size={24} /> Apply Now - Free! <Sparkles size={24} />
            </span>
          </button>

          <button
            onClick={() => document.getElementById('2025-recap')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 px-10 py-5 text-xl md:text-2xl border border-white/30 text-white rounded-2xl hover:bg-white/10 transition"
            aria-label="View HackUNCP 2025 highlights"
          >
            <Code size={22} /> View 2025 Highlights
          </button>
        </div>

        {/* Countdown timer grid */}
        <div className="mt-14 grid grid-cols-4 gap-8 max-w-2xl mx-auto text-center text-gray-300 text-base md:text-lg font-mono">
          {[{ label: 'DAYS', value: timeLeft.days }, { label: 'HRS', value: timeLeft.hours }, { label: 'MIN', value: timeLeft.minutes }, { label: 'SEC', value: timeLeft.seconds }].map(({ label, value }) => (
            <div key={label}>
              <div className="text-5xl md:text-6xl font-bold text-white">
                {String(value).padStart(2, '0')}
              </div>
              <div>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Reusable animation styles */}
      <style jsx>{`
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(-50%) translateY(0); }
          50% { transform: translateY(-50%) translateY(-15px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
