"use client";
import { useState, useEffect } from "react";

interface TeamMember {
  name: string;
  role: string;
  email?: string;
  linkedin?: string;
  photo?: string;
  organization?: string;
}

export default function Team() {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [networkActivity, setNetworkActivity] = useState(0);
  const [dataFlow, setDataFlow] = useState<Array<{id: number, x: number, y: number, active: boolean}>>([]);

  const leadership = {
    advisor: {
      name: "Mark Hunt",
      role: "Advisor",
      organization: "AI@UNCP & HACKUNCP 2026",
      linkedin: "https://www.linkedin.com/in/mark-hunt-m-b-a-3291b317/",
      photo: "./team/mark_hunt.png",
    },
    officers: [
      {
        name: "Najmul Hasan",
        role: "President",
        organization: "AI@UNCP & Lead Organizer, HACKUNCP 2026",
        linkedin: "https://www.linkedin.com/in/najmulhasan-cs-math/",
        photo: "./team/najmul-hasan.jpg",
      },
      {
        name: "Andrew Cart",
        role: "Vice President",
        organization: "AI@UNCP & Organizer, HACKUNCP 2026",
        linkedin: "https://www.linkedin.com/in/andrew-cart-23b816246",
        photo: "./team/andrew_cart.png",
      },
      {
        name: "Muhammad Fardin Islam",
        role: "Secretary",
        organization: "AI@UNCP & Organizer, HACKUNCP 2026",
        linkedin: "https://www.linkedin.com/in/muhammad-fardin-islam",
        photo: "./team/fardin_islam.png",
      },
      {
        name: "Aren M Hall",
        role: "Treasurer",
        organization: "AI@UNCP & Organizer, HACKUNCP 2026",
        linkedin: "",
        photo: "./team/aren_hall.png",
      },
    ],
  };

  const allMembers = [leadership.advisor, ...leadership.officers];

  useEffect(() => {
    const interval = setInterval(() => {
      setNetworkActivity(prev => (prev + 1) % 100);
      
      setDataFlow(prev => {
        const newFlow = prev.map(particle => ({
          ...particle,
          x: particle.x + (Math.random() - 0.5) * 4,
          y: particle.y + (Math.random() - 0.5) * 4,
          active: Math.random() > 0.7
        })).filter(p => p.x > -50 && p.x < (typeof window !== 'undefined' ? window.innerWidth : 800) + 50);
        
        if (Math.random() > 0.8) {
          newFlow.push({
            id: Date.now(),
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 800),
            y: Math.random() * 400,
            active: true
          });
        }
        
        return newFlow.slice(-15);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const NetworkNode = ({ member, index, position }: { member: TeamMember; index: number; position: {x: number, y: number} }) => {
    const isAdvisor = index === 0;
    const isActive = activeNode === index;
    const [pulsePhase, setPulsePhase] = useState(0);

    const getTextPosition = () => {
      const isLeftSide = position.x < 50;
      const isTopHalf = position.y < 50;
      
      if (index === 0) {
        return "absolute top-0 left-full ml-8 z-50 font-serif whitespace-nowrap";
      } else if (isLeftSide && isTopHalf) {
        return "absolute top-8 left-full ml-8 z-50 font-serif whitespace-nowrap";
      } else if (!isLeftSide && isTopHalf) {
        return "absolute top-8 right-full mr-8 z-50 font-serif whitespace-nowrap text-right";
      } else if (isLeftSide && !isTopHalf) {
        return "absolute bottom-8 left-full ml-8 z-50 font-serif whitespace-nowrap";
      } else {
        return "absolute bottom-8 right-full mr-8 z-50 font-serif whitespace-nowrap text-right";
      }
    };

    useEffect(() => {
      const interval = setInterval(() => {
        setPulsePhase(prev => (prev + 1) % 360);
      }, 50);
      return () => clearInterval(interval);
    }, []);

    const handleLinkedInClick = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      
      if (member.linkedin && member.linkedin.trim() !== '') {
        try {
          window.open(member.linkedin, '_blank', 'noopener,noreferrer');
        } catch (error) {
          console.error('Error opening LinkedIn profile:', error);
          window.location.href = member.linkedin;
        }
      }
    };

    return (
      <div
        className="absolute transition-all duration-500 ease-out group cursor-pointer"
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
          transform: 'translate(-50%, -50%)',
          zIndex: isActive ? 50 : isAdvisor ? 30 : 20,
        }}
        onMouseEnter={() => setActiveNode(index)}
        onMouseLeave={() => setActiveNode(null)}
      >
        {/* Circuit pathways */}
        <svg className="absolute top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          {Array.from({ length: 4 }).map((_, i) => {
            const angle = (i / 4) * 360;
            const length = isActive ? 45 : 30;
            return (
              <line
                key={i}
                x1="50%"
                y1="50%"
                x2={`${50 + Math.cos((angle + pulsePhase) * Math.PI / 180) * length / 2}%`}
                y2={`${50 + Math.sin((angle + pulsePhase) * Math.PI / 180) * length / 2}%`}
                stroke={isAdvisor ? "#3e8b94" : "#8c734c"}
                strokeWidth={isActive ? "2" : "1"}
                opacity={isActive ? "0.6" : "0.2"}
                className="transition-all duration-300"
              />
            );
          })}
        </svg>

        {/* Node animation effect */}
        <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
          isActive ? 'animate-ping' : ''
        }`}>
          <div className={`w-full h-full rounded-full ${
            isAdvisor 
              ? 'bg-gradient-to-r from-teal-400/20 to-teal-600/20' 
              : 'bg-gradient-to-r from-amber-400/20 to-amber-600/20'
          }`}></div>
        </div>

        {/* Main node */}
        <div 
          className={`relative rounded-full overflow-hidden border-4 transition-all duration-300 ${
            member.linkedin && member.linkedin.trim() !== '' ? 'cursor-pointer hover:border-opacity-100 hover:scale-110' : 'cursor-default'
          } ${
            isAdvisor ? 'w-28 h-28 border-teal-400' : 'w-24 h-24 border-amber-400'
          } ${isActive ? 'scale-125 shadow-2xl' : 'scale-100'} ${
            isActive ? (isAdvisor ? 'shadow-teal-400/50' : 'shadow-amber-400/50') : ''
          }`}
          onClick={handleLinkedInClick}
        >
          {member.photo ? (
            <img
              src={member.photo}
              alt={member.name}
              className={`w-full h-full object-cover transition-transform duration-300 ${
                member.linkedin && member.linkedin.trim() !== '' ? 'hover:scale-110 cursor-pointer' : 'cursor-default'
              }`}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                target.nextElementSibling?.classList.remove("hidden");
              }}
            />
          ) : null}
          <div 
            className={`w-full h-full ${isAdvisor ? 'bg-gradient-to-br from-teal-500 to-teal-700' : 'bg-gradient-to-br from-amber-500 to-amber-700'} flex items-center justify-center font-bold text-lg text-white ${member.photo ? "hidden" : ""} ${
              member.linkedin && member.linkedin.trim() !== '' ? 'cursor-pointer hover:brightness-110' : 'cursor-default'
            }`}
          >
            {member.name.split(" ").map((n) => n[0]).join("")}
          </div>
        </div>

        {/* Text label */}
        {isActive && (
          <div className={getTextPosition()}>
            <div className="text-white text-lg font-semibold tracking-wide drop-shadow-lg italic">
              {member.name}, {member.role} AI@UNCP
            </div>
          </div>
        )}
      </div>
    );
  };

  const getNodePositions = () => {
    return [
      { x: 50, y: 30 }, // Advisor - central top
      { x: 20, y: 55 }, // Officer 1 - left
      { x: 80, y: 55 }, // Officer 2 - right  
      { x: 25, y: 85 }, // Officer 3 - bottom left
      { x: 75, y: 85 }, // Officer 4 - bottom right
    ];
  };

  return (
    <section
      id="team-section"
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-black relative overflow-hidden"
    >
      {/* Circuit board background */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 1000 600">
          <defs>
            <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 10 10 L 70 10 L 70 70 L 10 70 Z" fill="none" stroke="#3e8b94" strokeWidth="0.5"/>
              <path d="M 40 0 L 40 20 M 40 60 L 40 80 M 0 40 L 20 40 M 60 40 L 80 40" stroke="#8c734c" strokeWidth="0.5"/>
              <circle cx="20" cy="20" r="1.5" fill="#3e8b94"/>
              <circle cx="60" cy="20" r="1.5" fill="#8c734c"/>
              <circle cx="60" cy="60" r="1.5" fill="#3e8b94"/>
              <circle cx="20" cy="60" r="1.5" fill="#8c734c"/>
            </pattern>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3e8b94" stopOpacity="0.6"/>
              <stop offset="50%" stopColor="#4c7329" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#8c734c" stopOpacity="0.6"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      {/* Flowing data particles */}
      <div className="absolute inset-0 pointer-events-none">
        {dataFlow.map(particle => (
          <div
            key={particle.id}
            className={`absolute w-1 h-1 rounded-full transition-all duration-200 ${
              particle.active ? 'bg-teal-400 shadow-sm shadow-teal-400/50' : 'bg-amber-400/30'
            }`}
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              transform: `scale(${particle.active ? 1.2 : 0.8})`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="px-6 py-2 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-teal-400/30 font-mono text-sm">
              <span className="text-teal-400">{'//'}</span>
              <span className="text-white">Neural Network Architecture</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-amber-500 to-green-400 mb-6">
            Brain.exe
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white/90 mb-6">
            Processing Innovation Since 2026
          </h2>

          <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed font-mono">
            <span className="text-teal-400">$</span> initializing deep learning protocols...<br/>
            <span className="text-teal-400">{'>'}</span> loading cognitive framework<br/>
            <span className="text-green-400">STATUS:</span> neural network OPERATIONAL
          </p>
        </div>

        {/* Neural network visualization */}
        <div className="relative h-[500px] mb-16">
          {/* Background grid */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full">
              <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#ffffff" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Network connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="activeConnection" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3e8b94" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#8c734c" stopOpacity="0.8"/>
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {getNodePositions().map((pos, i) => 
              getNodePositions().slice(i + 1).map((targetPos, j) => {
                const isActive = activeNode === i || activeNode === j + i + 1;
                return (
                  <line
                    key={`${i}-${j}`}
                    x1={`${pos.x}%`}
                    y1={`${pos.y}%`}
                    x2={`${targetPos.x}%`}
                    y2={`${targetPos.y}%`}
                    stroke={isActive ? "url(#activeConnection)" : "#8c734c"}
                    strokeWidth={isActive ? "3" : "1"}
                    opacity={isActive ? "1" : "0.3"}
                    filter={isActive ? "url(#glow)" : "none"}
                    className="transition-all duration-500"
                  />
                );
              })
            )}
          </svg>

          {/* Team member nodes */}
          {allMembers.map((member, index) => (
            <NetworkNode
              key={index}
              member={member}
              index={index}
              position={getNodePositions()[index]}
            />
          ))}

          {/* System status panel */}
          <div className="absolute top-4 left-4">
            <div className="bg-slate-900/90 backdrop-blur-lg rounded-xl p-4 border border-green-400/30 font-mono text-sm shadow-lg">
              <div className="text-green-400 mb-2 font-bold flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                NEURAL STATUS
              </div>
              <div className="text-white/80 space-y-1">
                <div className="flex justify-between">
                  <span>Nodes:</span>
                  <span className="text-teal-400">{allMembers.length}/5 ACTIVE</span>
                </div>
                <div className="flex justify-between">
                  <span>Processing:</span>
                  <span className="text-amber-400">{Math.floor(networkActivity * 0.67 + 33)}% GPU</span>
                </div>
                <div className="flex justify-between">
                  <span>AI State:</span>
                  <span className="text-green-400">OPTIMAL</span>
                </div>
                <div className="mt-2 pt-2 border-t border-white/10">
                  <div className="text-xs text-white/60">
                    Last sync: {new Date().toLocaleTimeString()}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture legend */}
          <div className="absolute bottom-4 right-4">
            <div className="bg-slate-900/90 backdrop-blur-lg rounded-xl p-4 border border-amber-400/30 font-mono text-sm shadow-lg">
              <div className="text-amber-400 mb-3 font-bold flex items-center">
                <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                ARCHITECTURE
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-teal-400 rounded-full mr-3 border border-teal-300 shadow-sm shadow-teal-400/50"></div>
                    <span className="text-white/80">Core Processor</span>
                  </div>
                  <span className="text-xs text-teal-400">x1</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-amber-400 rounded-full mr-3 border border-amber-300 shadow-sm shadow-amber-400/50"></div>
                    <span className="text-white/80">Logic Units</span>
                  </div>
                  <span className="text-xs text-amber-400">x4</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal footer */}
        <div className="text-center mt-16">
          <div className="inline-block bg-slate-800/70 backdrop-blur-lg rounded-xl px-10 py-5 border border-teal-400/20 font-mono shadow-lg">
            <div className="text-teal-400 text-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 animate-pulse"></div>
              NETWORK.STATUS = OPERATIONAL
              <div className="w-2 h-2 bg-green-400 rounded-full ml-3 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}