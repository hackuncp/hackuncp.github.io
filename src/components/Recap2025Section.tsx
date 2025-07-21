'use client';

import { Award, Users, Code, Star, Trophy, Zap, ArrowRight, ExternalLink, Calendar, MapPin, Clock, ChevronLeft, ChevronRight, Play, Pause, Sparkles, Brain,Target, Lightbulb, Rocket, Shield, Layers } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Recap2025Section() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const stats = [
    { number: "42", label: "Participants", icon: <Users className="h-6 w-6" />, color: "from-teal-400 to-teal-600" },
    { number: "12", label: "Projects Submitted", icon: <Code className="h-6 w-6" />, color: "from-amber-400 to-amber-600" },
    { number: "20", label: "Judges", icon: <Star className="h-6 w-6" />, color: "from-green-400 to-green-600" },
    { number: "$7,486", label: "Prizes Awarded", icon: <Trophy className="h-6 w-6" />, color: "from-red-400 to-red-600" }
  ];

  const winners = [
    {
      place: "1st Place Overall",
      team: "VENOMAI",
      project: "VENOMAI",
      prize: "$2,349 + iPad Air M3",
      color: "from-amber-400 to-amber-600",
      link: "https://devpost.com/software/venomai"
    },
    {
      place: "2nd Place Overall", 
      team: "EchoLearn",
      project: "EchoLearn",
      prize: "$1,407 + Apple Watch",
      color: "from-slate-400 to-slate-600",
      link: "https://devpost.com/software/echolearn"
    },
    {
      place: "3rd Place Overall",
      team: "LiftMate",
      project: "LiftMate",
      prize: "$765 + AirPods 4",
      color: "from-amber-500 to-amber-700",
      link: "https://devpost.com/software/liftmate"
    }
  ];

  const trackWinners = [
    { track: "Sustainability Track", project: "Firesafe", prize: "$594", link: "https://devpost.com/software/firesafe", icon: <Lightbulb className="w-4 h-4" />, color: "from-green-400 to-green-600" },
    { track: "Education Track", project: "Baisly", prize: "$593", link: "https://devpost.com/software/baisly", icon: <Brain className="w-4 h-4" />, color: "from-teal-400 to-teal-600" },
    { track: "Interactive Media Track", project: "Web Bestie", prize: "$592", link: "https://devpost.com/software/web-bestie", icon: <Sparkles className="w-4 h-4" />, color: "from-amber-400 to-amber-600" },
    { track: "Healthcare Track", project: "AI-You-Doin'", prize: "$592", link: "https://devpost.com/software/ai-you-doin", icon: <Shield className="w-4 h-4" />, color: "from-red-400 to-red-600" },
    { track: "Cybersecurity Track", project: "VENOMAI", prize: "$594", link: "https://devpost.com/software/venomai", icon: <Target className="w-4 h-4" />, color: "from-slate-400 to-slate-600" }
  ];

  const photoSlides = [
    { src: "/hackuncp2025/hackuncp2025_2.jpg" },
    { src: "/hackuncp2025/hackuncp2025_3.jpg" },
    { src: "/hackuncp2025/hackuncp2025_4.jpg" },
    { src: "/hackuncp2025/hackuncp2025_5.jpg" },
    { src: "/hackuncp2025/hackuncp2025_6.jpg" },
    { src: "/hackuncp2025/hackuncp2025_7.jpg" },
    { src: "/hackuncp2025/hackuncp2025_8.jpg" },
    { src: "/hackuncp2025/hackuncp2025_9.jpg" },
    { src: "/hackuncp2025/hackuncp2025_10.jpg" },
    { src: "/hackuncp2025/hackuncp2025_11.jpg" },
    { src: "/hackuncp2025/hackuncp2025_12.jpg" },
    { src: "/hackuncp2025/hackuncp2025_13.jpg" },
    { src: "/hackuncp2025/hackuncp2025_14.jpg" },
    { src: "/hackuncp2025/hackuncp2025_15.jpg" },
    { src: "/hackuncp2025/hackuncp2025_16.jpg" },
    { src: "/hackuncp2025/hackuncp2025_17.jpg" },
    { src: "/hackuncp2025/hackuncp2025_18.jpg" },
    { src: "/hackuncp2025/hackuncp2025_19.jpg" },
    { src: "/hackuncp2025/hackuncp2025_20.jpg" },
    { src: "/hackuncp2025/hackuncp2025_21.jpg" },
    { src: "/hackuncp2025/hackuncp2025_22.jpg" },
    { src: "/hackuncp2025/hackuncp2025_23.jpg" },
    { src: "/hackuncp2025/hackuncp2025_24.jpg" },
    { src: "/hackuncp2025/hackuncp2025_25.jpg" },
    { src: "/hackuncp2025/hackuncp2025_26.jpg" }
  ];

  const achievements = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Global Innovation Network",
      description: "42 brilliant minds from universities nationwide converged to push AI boundaries",
      color: "from-teal-500 to-teal-700",
      accentColor: "teal-400",
      pattern: "radial-gradient(circle at 30% 30%, rgba(62, 139, 148, 0.3) 0%, transparent 50%)"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Intensive Innovation Marathon",
      description: "24 hours of non-stop creativity, coding, and breakthrough moments",
      color: "from-amber-500 to-amber-700",
      accentColor: "amber-400",
      pattern: "radial-gradient(circle at 70% 40%, rgba(140, 115, 76, 0.3) 0%, transparent 50%)"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Expert Mentorship Ecosystem",
      description: "5 technical mentors and 20 industry judges providing world-class guidance",
      color: "from-slate-500 to-slate-700",
      accentColor: "slate-400",
      pattern: "radial-gradient(circle at 20% 60%, rgba(73, 89, 101, 0.3) 0%, transparent 50%)"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Visionary AI Agent Theme",
      description: "Empowering the Future with Intelligent AI Agents - defining tomorrow's landscape",
      color: "from-green-500 to-green-700",
      accentColor: "green-400",
      pattern: "radial-gradient(circle at 80% 20%, rgba(76, 115, 41, 0.3) 0%, transparent 50%)"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Knowledge Exchange Sessions",
      description: "1 keynote tech talk and 2 roundtable discussions fostering innovation",
      color: "from-red-500 to-red-700",
      accentColor: "red-400",
      pattern: "radial-gradient(circle at 50% 80%, rgba(184, 35, 47, 0.3) 0%, transparent 50%)"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Real-World Impact Focus",
      description: "Every project integrated AI agents for solving authentic global challenges",
      color: "from-amber-600 to-amber-800",
      accentColor: "amber-500",
      pattern: "radial-gradient(circle at 40% 10%, rgba(140, 115, 76, 0.3) 0%, transparent 50%)"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photoSlides.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isPlaying, photoSlides.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 50,
        y: (e.clientY / window.innerHeight - 0.5) * 50
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % photoSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + photoSlides.length) % photoSlides.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <section id="2025-recap" className="py-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/40 via-transparent to-amber-900/40"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-green-900/30 via-transparent to-red-900/30"></div>
      
      {/* Floating parallax elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${10 + Math.random() * 25}px`,
              height: `${10 + Math.random() * 25}px`,
              transform: `translate(${mousePos.x * (i % 3) * 0.1}px, ${mousePos.y * (i % 3) * 0.1}px)`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          >
            <div className={`w-full h-full ${
              i % 4 === 0 ? 'rounded-full bg-gradient-to-r from-teal-400 to-teal-600' :
              i % 4 === 1 ? 'rounded bg-gradient-to-r from-amber-400 to-amber-600 rotate-45' :
              i % 4 === 2 ? 'rounded-full bg-gradient-to-r from-green-400 to-green-600' :
              'rounded bg-gradient-to-r from-red-400 to-red-600 rotate-12'
            } blur-sm animate-float`}></div>
          </div>
        ))}
      </div>

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <polygon points="10,1 4,8 4,16 10,23 16,16 16,8" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/50 to-amber-500/50 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative flex items-center gap-4 bg-white/10 backdrop-blur-2xl border border-white/30 rounded-full px-12 py-6 shadow-2xl">
              <Sparkles className="h-8 w-8 text-teal-400 animate-spin" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400 font-black text-xl">HackUNCP 2025 Showcase</span>
              <Trophy className="h-8 w-8 text-amber-400 animate-bounce" />
            </div>
          </div>
          
          <div className="relative mb-8">
            <div className="absolute inset-0 transform translate-x-4 translate-y-4 opacity-20">
              <h2 className="text-6xl md:text-8xl font-black text-slate-800">
                SPECTACULAR
              </h2>
            </div>
            <div className="absolute inset-0 transform translate-x-2 translate-y-2 opacity-30">
              <h2 className="text-6xl md:text-8xl font-black text-slate-700">
                SPECTACULAR
              </h2>
            </div>
            <h2 className="relative text-6xl md:text-8xl font-black leading-tight">
              <span className="text-white drop-shadow-2xl">Last Year Was </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-amber-400 to-green-400 animate-gradient-text">
                SPECTACULAR!
              </span>
            </h2>
          </div>
          
          <p className="text-2xl md:text-3xl text-gray-200 max-w-5xl mx-auto leading-relaxed">
            HackUNCP 2025 redefined innovation, bringing together visionary minds to create 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400 font-bold"> AI solutions that matter</span>
          </p>
        </div>

        {/* Photo carousel */}
        <div className="mb-24">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/30 via-amber-500/30 to-green-500/30 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-1000"></div>
            
            <div className="relative h-96 md:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              <div className="relative w-full h-full">
                {photoSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
                      index === currentSlide 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    }`}
                  >
                    <img 
                      src={slide.src}
                      alt={`HackUNCP 2025 Photo ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                    
                    {/* Photo counter overlay */}
                    <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                      <span className="text-white font-bold text-sm">
                        {index + 1} / {photoSlides.length}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation controls */}
              <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg border border-white/20"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg border border-white/20"
              >
                <ChevronRight className="w-7 h-7" />
              </button>

              {/* Play/pause control */}
              <div className="absolute top-6 right-6 flex gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/20"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </button>
              </div>
            </div>

            {/* Carousel indicators */}
            <div className="flex justify-center mt-8 gap-3">
              {photoSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 rounded-full transition-all duration-500 border border-white/30 ${
                    index === currentSlide 
                      ? 'w-12 bg-gradient-to-r from-teal-400 to-amber-400 shadow-lg' 
                      : 'w-3 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Statistics section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
              Impact <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400">Metrics</span>
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-amber-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-20 rounded-3xl blur-xl group-hover:blur-lg group-hover:opacity-30 transition-all duration-700`}></div>
                
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-700 hover:scale-110 hover:rotate-2 shadow-xl">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className={`text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-4 font-mono`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-200 font-bold uppercase tracking-wide text-sm">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Winners section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-5xl md:text-6xl font-black text-white mb-6">
              Champion <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">Winners</span>
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-red-500 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-gray-300">Celebrating extraordinary innovation and creativity</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {winners.map((winner, index) => (
              <div 
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${winner.color} opacity-25 rounded-3xl blur-2xl group-hover:blur-xl group-hover:opacity-35 transition-all duration-700`}></div>
                
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 hover:bg-white/10 transition-all duration-700 hover:scale-105 hover:-rotate-1 shadow-xl">
                  <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${winner.color} text-white font-black mb-8 shadow-lg text-lg`}>
                    <Trophy className="w-5 h-5" />
                    {winner.place}
                  </div>
                  
                  <h4 className="text-3xl font-black text-white mb-3">{winner.team}</h4>
                  <h5 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400 mb-8">{winner.project}</h5>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-green-400 font-black text-xl">{winner.prize}</span>
                    <a 
                      href={winner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-3 px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
                    >
                      <span className="font-semibold">View Project</span>
                      <ExternalLink className="w-5 h-5 group-hover/link:rotate-45 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Track winners */}
          <div className="mb-16">
            <h4 className="text-4xl font-black text-white text-center mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400">Track Champions</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {trackWinners.map((winner, index) => (
                <div 
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:rotate-1"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${winner.color} opacity-10 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  <div className="relative text-center">
                    <div className={`w-12 h-12 bg-gradient-to-br ${winner.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      <div className="text-white">
                        {winner.icon}
                      </div>
                    </div>
                    <span className={`text-xs font-bold bg-gradient-to-r ${winner.color} bg-clip-text text-transparent px-3 py-1 rounded-full block mb-3`}>
                      {winner.track}
                    </span>
                    <h5 className="text-white font-bold text-lg mb-2">{winner.project}</h5>
                    <span className="text-green-400 font-bold text-lg block mb-4">{winner.prize}</span>
                    <a 
                      href={winner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center justify-center gap-2 text-white hover:text-teal-400 transition-colors duration-300"
                    >
                      <span className="text-sm font-semibold">View</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="https://hackuncp-2025.devpost.com/project-gallery"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-teal-500 via-amber-500 to-green-500 text-white font-black rounded-full hover:from-teal-600 hover:via-amber-600 hover:to-green-600 transition-all duration-500 transform hover:scale-110 shadow-2xl text-xl"
            >
              <Code className="w-6 h-6" />
              <span>Explore All 2025 Projects</span>
              <ExternalLink className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Achievements section */}
        <div className="relative">
          <div className="text-center mb-20">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/40 to-amber-500/40 rounded-full blur-2xl"></div>
              <div className="relative flex items-center gap-4 bg-white/10 backdrop-blur-2xl border border-white/30 rounded-full px-10 py-5">
                <Star className="h-7 w-7 text-teal-400 animate-pulse" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400 font-black text-xl">Organizational Excellence</span>
                <Award className="h-7 w-7 text-amber-400 animate-bounce" />
              </div>
            </div>
            
            <h3 className="text-5xl md:text-6xl font-black text-white mb-6">
              Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-amber-400 to-green-400 animate-gradient-text">Excellence</span>
            </h3>
            <p className="text-2xl text-gray-200 max-w-4xl mx-auto">
              Discover the extraordinary planning and innovation that made HackUNCP 2025 legendary
            </p>
          </div>

          {/* Achievement grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="group relative"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  transform: `translate(${mousePos.x * (index % 3) * 0.05}px, ${mousePos.y * (index % 3) * 0.05}px)`
                }}
              >
                {/* Dynamic background pattern */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: achievement.pattern }}
                ></div>
                
                {/* Floating glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-20 rounded-3xl blur-2xl group-hover:blur-xl group-hover:opacity-30 transition-all duration-700`}></div>
                
                {/* Main card */}
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-700 hover:scale-105 hover:rotate-1 min-h-[320px] flex flex-col shadow-xl">
                  {/* Decorative corner elements */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <div className={`w-4 h-4 bg-${achievement.accentColor} rounded-full animate-pulse`}></div>
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                    <div className={`w-3 h-3 bg-${achievement.accentColor} rounded-full`}></div>
                  </div>
                  
                  {/* Icon container with enhanced effects */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl relative`}>
                    <div className="text-white relative z-10">
                      {achievement.icon}
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} rounded-3xl blur-lg opacity-50 animate-pulse`}></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h4 className={`text-2xl font-black text-${achievement.accentColor} mb-4 group-hover:scale-105 transition-transform duration-300`}>
                      {achievement.title}
                    </h4>
                    <p className="text-gray-200 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                      {achievement.description}
                    </p>
                  </div>
                  
                  {/* Interactive hover indicator */}
                  <div className={`w-full h-1 bg-gradient-to-r ${achievement.color} rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Final impact showcase */}
          <div className="text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-amber-500/20 to-green-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 shadow-2xl">
                <h4 className="text-4xl font-black text-white mb-10">
                  HackUNCP <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400">2025 Legacy</span>
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600 mb-3">March 2025</div>
                    <div className="text-gray-200 font-bold text-lg">Historic Innovation Event</div>
                  </div>
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-3">UNCP Campus</div>
                    <div className="text-gray-200 font-bold text-lg">Innovation Epicenter</div>
                  </div>
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-3">24 Hours</div>
                    <div className="text-gray-200 font-bold text-lg">Pure Innovation Intensity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-20px) rotate(180deg) scale(1.05); }
        }
        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 4s ease infinite;
        }
      `}</style>
    </section>
  );
}