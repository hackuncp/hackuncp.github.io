'use client';

import { Brain, Users, Target, ExternalLink, Sparkles, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function AIUNCPSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 100,
        y: (e.clientY / window.innerHeight - 0.5) * 100
      });
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const section = document.getElementById('ai-uncp');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const organizationHighlights = [
    { 
      label: "Innovation", 
      description: "Creative AI Solutions",
      icon: <Brain className="w-8 h-8" />,
      gradient: "from-teal-400 to-teal-700"
    },
    { 
      label: "Education", 
      description: "Learning & Development",
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: "from-amber-400 to-amber-700"
    },
    { 
      label: "Community", 
      description: "Collaborative Environment",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-green-400 to-green-700"
    },
    { 
      label: "Excellence", 
      description: "Academic Leadership",
      icon: <Target className="w-8 h-8" />,
      gradient: "from-red-400 to-red-700"
    }
  ];

  return (
    <section id="ai-uncp" className="relative min-h-screen overflow-hidden">
      {/* Background system */}
      <div className="absolute inset-0">
        {/* Primary gradient foundation */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black"></div>
        
        {/* Dynamic floating orbs with 3D movement */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full blur-3xl animate-pulse"
              style={{
                left: `${10 + (i * 8)}%`,
                top: `${15 + (i * 7)}%`,
                width: `${150 + i * 20}px`,
                height: `${150 + i * 20}px`,
                background: `radial-gradient(circle, ${
                  i % 4 === 0 ? 'rgba(62, 139, 148, 0.15)' :
                  i % 4 === 1 ? 'rgba(140, 115, 76, 0.15)' :
                  i % 4 === 2 ? 'rgba(76, 115, 41, 0.15)' :
                  'rgba(184, 35, 47, 0.15)'
                }, transparent)`,
                transform: `translate(${mousePos.x * (i % 3) * 0.05}px, ${mousePos.y * (i % 3) * 0.05 + Math.sin(scrollY * 0.01 + i) * 10}px) scale(${1 + Math.sin(scrollY * 0.005 + i) * 0.1})`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${8 + i}s`
              }}
            />
          ))}
        </div>

        {/* Neural network visualization */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3e8b94" stopOpacity="0.8"/>
                <stop offset="50%" stopColor="#8c734c" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#4c7329" stopOpacity="0.8"/>
              </linearGradient>
              <filter id="neuralGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Dynamic neural connections */}
            {[...Array(20)].map((_, i) => (
              <g key={i}>
                <circle
                  cx={100 + i * 50}
                  cy={200 + Math.sin(i) * 100}
                  r="4"
                  fill="url(#neuralGradient)"
                  filter="url(#neuralGlow)"
                >
                  <animate
                    attributeName="r"
                    values="2;6;2"
                    dur={`${2 + i * 0.2}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                {i < 19 && (
                  <line
                    x1={100 + i * 50}
                    y1={200 + Math.sin(i) * 100}
                    x2={150 + i * 50}
                    y2={200 + Math.sin(i + 1) * 100}
                    stroke="url(#neuralGradient)"
                    strokeWidth="1"
                    opacity="0.6"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.3;0.8;0.3"
                      dur={`${3 + i * 0.1}s`}
                      repeatCount="indefinite"
                    />
                  </line>
                )}
              </g>
            ))}
          </svg>
        </div>

        {/* Floating AI particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translate(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px)`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 6}s`,
              }}
            >
              <div className={`w-2 h-2 rounded-full ${
                i % 4 === 0 ? 'bg-teal-400 shadow-lg shadow-teal-400/50' :
                i % 4 === 1 ? 'bg-amber-400 shadow-lg shadow-amber-400/50' :
                i % 4 === 2 ? 'bg-green-400 shadow-lg shadow-green-400/50' :
                'bg-red-400 shadow-lg shadow-red-400/50'
              } blur-sm`}></div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero section */}
        <div className={`text-center mb-32 transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {/* Organization badge */}
          <div className="relative inline-block mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 via-amber-500/30 to-green-500/30 rounded-full blur-2xl animate-pulse"></div>
            <div 
              className="relative flex items-center gap-4 bg-white/5 backdrop-blur-3xl border border-white/20 rounded-full px-10 py-5 shadow-2xl"
              style={{
                transform: `perspective(1000px) rotateX(${mousePos.y * 0.02}deg) rotateY(${mousePos.x * 0.02}deg)`
              }}
            >
              <Brain className="h-8 w-8 text-teal-400 animate-pulse" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-amber-400 to-green-400 font-black text-xl tracking-wide">
                Artificial Intelligence @ UNCP
              </span>
              <Sparkles className="h-8 w-8 text-amber-400 animate-spin-slow" />
            </div>
          </div>
          
          {/* 3D title with layered shadow effects */}
          <div className="relative mb-12">
            <div className="absolute inset-0 transform translate-x-8 translate-y-8 opacity-10">
              <h1 className="text-8xl md:text-9xl font-black text-white">AI@UNCP</h1>
            </div>
            <div className="absolute inset-0 transform translate-x-4 translate-y-4 opacity-20">
              <h1 className="text-8xl md:text-9xl font-black text-white">AI@UNCP</h1>
            </div>
            <h1 
              className="relative text-8xl md:text-9xl font-black leading-tight"
              style={{
                transform: `perspective(1000px) rotateX(${mousePos.y * 0.01}deg) rotateY(${mousePos.x * 0.01}deg)`
              }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-amber-400 via-green-400 to-red-400 animate-gradient-flow drop-shadow-2xl">
                AI@UNCP
              </span>
            </h1>
          </div>
          
          {/* Hero title and description */}
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 opacity-90">
              Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400">AI@UNCP</span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-200 max-w-5xl mx-auto leading-relaxed">
              The student organization behind HackUNCP, creating opportunities for 
              <span className="text-teal-400 font-bold"> AI learning</span> and 
              <span className="text-amber-400 font-bold"> innovation</span> at UNC Pembroke
            </p>
          </div>
        </div>

        {/* Organization showcase cards */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 transition-all duration-2000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {organizationHighlights.map((highlight, index) => (
            <div 
              key={index}
              className="group relative"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                transform: `perspective(1000px) rotateX(${mousePos.y * 0.01}deg) rotateY(${mousePos.x * 0.01}deg)`
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-20 rounded-3xl blur-2xl group-hover:blur-xl group-hover:opacity-40 transition-all duration-700`}></div>
              
              <div className="relative bg-white/5 backdrop-blur-3xl border border-white/20 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-700 hover:scale-110 hover:rotate-3 shadow-xl min-h-[200px] flex flex-col justify-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${highlight.gradient} rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                  <div className="text-white">
                    {highlight.icon}
                  </div>
                </div>
                <div className="text-xl font-black text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                  {highlight.label}
                </div>
                <div className="text-gray-300 font-medium text-sm">
                  {highlight.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What they do showcase */}
        <div className={`relative transition-all duration-2000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="grid grid-cols-1 gap-12 mb-20">
            <div 
              className="group relative max-w-5xl mx-auto"
              style={{
                transform: `perspective(1000px) rotateX(${mousePos.y * 0.008}deg) rotateY(${mousePos.x * 0.008}deg)`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-amber-500/20 to-green-500/20 rounded-3xl blur-2xl group-hover:blur-xl group-hover:opacity-40 transition-all duration-700"></div>
              
              <div className="relative bg-white/5 backdrop-blur-3xl border border-white/20 rounded-3xl p-12 hover:bg-white/10 transition-all duration-700 hover:scale-105 shadow-2xl text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-teal-400 via-amber-500 to-green-500 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl mx-auto">
                  <Brain className="w-16 h-16 text-white" />
                </div>
                
                <h4 className="text-4xl font-black text-white mb-6">AI Innovation Community</h4>
                <p className="text-gray-200 text-xl leading-relaxed max-w-3xl mx-auto">
                  We bring together students passionate about artificial intelligence through workshops, 
                  hackathons, and collaborative projects. Our community creates hands-on learning experiences 
                  and builds the next generation of AI innovators.
                </p>
              </div>
            </div>
          </div>

          {/* Call-to-action */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-amber-500/20 to-green-500/20 rounded-3xl blur-3xl"></div>
            <div 
              className="relative bg-white/5 backdrop-blur-3xl border border-white/20 rounded-3xl p-16 text-center overflow-hidden shadow-2xl"
              style={{
                transform: `perspective(1000px) rotateX(${mousePos.y * 0.005}deg) rotateY(${mousePos.x * 0.005}deg)`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 via-amber-400/5 to-green-400/5 animate-pulse"></div>
              
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-black text-white mb-8">
                  Ready to explore AI innovation?
                </h3>
                
                <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Visit AI@UNCP to learn more about their projects, events, and how they&apos;re 
                  advancing AI education at UNC Pembroke.
                </p>

                <a 
                  href="https://aiuncp.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-teal-500 via-amber-500 to-green-500 text-white font-black rounded-full hover:from-teal-600 hover:via-amber-600 hover:to-green-600 transition-all duration-500 transform hover:scale-110 shadow-2xl text-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-amber-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                  
                  <ExternalLink className="h-7 w-7 group-hover:rotate-45 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">Learn More About AI@UNCP</span>
                  <Sparkles className="h-7 w-7 group-hover:animate-spin relative z-10" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-15px) rotate(120deg) scale(1.05); }
          66% { transform: translateY(-5px) rotate(240deg) scale(0.95); }
        }
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-gradient-flow {
          background-size: 400% 400%;
          animation: gradient-flow 8s ease infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </section>
  );
}