'use client';

import { Users, Trophy, Lightbulb, Clock, Target, Sparkles, Bot, Brain, GraduationCap, Hospital, Leaf, Shield } from 'lucide-react';

export default function AboutSection() {
 const features = [
   {
     icon: <Clock className="h-8 w-8" />,
     title: "24 Hours",
     description: "Intensive coding sprint focused on AI innovation and development",
     color: "from-amber-400 to-amber-600",
     glow: "shadow-amber-500/25"
   },
   {
     icon: <Users className="h-8 w-8" />,
     title: "Diverse Community",
     description: "Students from universities and colleges across the United States",
     color: "from-teal-400 to-teal-600",
     glow: "shadow-teal-500/25"
   },
   {
     icon: <Trophy className="h-8 w-8" />,
     title: "Recognition & Awards",
     description: "Outstanding projects receive recognition and exciting opportunities",
     color: "from-amber-400 to-amber-600",
     glow: "shadow-amber-500/25"
   },
   {
     icon: <Lightbulb className="h-8 w-8" />,
     title: "AI Innovation",
     description: "Push beyond boundaries with intelligent AI solutions",
     color: "from-green-400 to-green-600",
     glow: "shadow-green-500/25"
   }
 ];

 const tracks = [
   {
     title: "AI for Education",
     description: "Design intelligent tutoring systems, automated assessment tools, personalized learning platforms, and educational chatbots that revolutionize how students learn and educators teach.",
     color: "from-slate-500 to-slate-700",
     icon: <GraduationCap className="h-8 w-8" />,
     particles: 8
   },
   {
     title: "AI for Healthcare",
     description: "Create diagnostic AI systems, medical image analysis tools, drug discovery platforms, and patient monitoring solutions that save lives and improve healthcare outcomes globally.",
     color: "from-green-500 to-green-700",
     icon: <Hospital className="h-8 w-8" />,
     particles: 6
   },
   {
     title: "AI for Sustainability",
     description: "Build climate prediction models, smart energy management systems, waste reduction algorithms, and environmental monitoring solutions that protect our planet for future generations.",
     color: "from-teal-500 to-teal-700",
     icon: <Leaf className="h-8 w-8" />,
     particles: 10
   },
   {
     title: "AI for Cybersecurity", 
     description: "Develop threat detection systems, fraud prevention algorithms, network security analyzers, and automated incident response tools that safeguard digital infrastructure worldwide.",
     color: "from-red-500 to-red-700",
     icon: <Shield className="h-8 w-8" />,
     particles: 7
   }
 ];

 return (
   <section id="about" className="py-20 relative bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-hidden">
     {/* Background effects */}
     <div className="absolute inset-0">
       <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/20 via-transparent to-amber-900/20"></div>
       <div className="absolute top-0 left-0 w-full h-full">
         <div className="absolute top-20 left-20 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
         <div className="absolute bottom-20 right-20 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
         <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-green-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
       </div>
     </div>

     {/* Neural network animation */}
     <div className="absolute inset-0 opacity-20">
       <svg className="w-full h-full" viewBox="0 0 1000 1000">
         <defs>
           <linearGradient id="neuralGlow" x1="0%" y1="0%" x2="100%" y2="100%">
             <stop offset="0%" stopColor="#3E8B94" stopOpacity="0.6" />
             <stop offset="50%" stopColor="#8C734C" stopOpacity="0.4" />
             <stop offset="100%" stopColor="#4C7329" stopOpacity="0.6" />
           </linearGradient>
           <filter id="lineGlow">
             <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
             <feMerge> 
               <feMergeNode in="coloredBlur"/>
               <feMergeNode in="SourceGraphic"/>
             </feMerge>
           </filter>
         </defs>
         
         <path d="M100,200 Q300,100 500,200 T900,200" stroke="url(#neuralGlow)" strokeWidth="2" fill="none" filter="url(#lineGlow)">
           <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="10s" repeatCount="indefinite"/>
         </path>
         <path d="M100,800 Q300,700 500,800 T900,800" stroke="url(#neuralGlow)" strokeWidth="2" fill="none" filter="url(#lineGlow)">
           <animate attributeName="stroke-dasharray" values="1000,0;0,1000" dur="12s" repeatCount="indefinite"/>
         </path>
         <path d="M200,100 Q200,300 400,500 T600,900" stroke="url(#neuralGlow)" strokeWidth="1.5" fill="none" filter="url(#lineGlow)">
           <animate attributeName="stroke-dasharray" values="0,800;800,0" dur="15s" repeatCount="indefinite"/>
         </path>
       </svg>
     </div>

     {/* Floating particles */}
     <div className="absolute inset-0 pointer-events-none">
       {[...Array(25)].map((_, i) => (
         <div
           key={i}
           className="absolute animate-float"
           style={{
             left: `${Math.random() * 100}%`,
             top: `${Math.random() * 100}%`,
             animationDelay: `${Math.random() * 8}s`,
             animationDuration: `${6 + Math.random() * 6}s`
           }}
         >
           <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${
             ['from-teal-400 to-teal-600', 'from-amber-400 to-amber-600', 'from-green-400 to-green-600', 'from-red-400 to-red-600'][i % 4]
           } opacity-60 blur-sm`}></div>
         </div>
       ))}
     </div>

     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
       {/* Section header */}
       <div className="text-center mb-20">
         <div className="relative mb-12">
           <div className="flex items-center justify-center gap-6 mb-8">
             <div className="relative">
               <Bot className="h-16 w-16 text-teal-400 animate-bounce" />
               <div className="absolute inset-0 bg-teal-400/30 rounded-full blur-xl animate-pulse"></div>
             </div>
             <div className="relative">
               <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-amber-400 to-green-400 animate-gradient-text">
                 What is
               </h2>
               <div className="absolute inset-0 text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-amber-400 to-green-400 blur-sm opacity-50 animate-pulse">
                 What is
               </div>
             </div>
             <div className="relative">
               <Brain className="h-16 w-16 text-amber-400 animate-bounce" style={{animationDelay: '0.5s'}} />
               <div className="absolute inset-0 bg-amber-400/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
             </div>
           </div>
           
           <div className="relative">
             <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400 mb-8">
               HackUNCP?
             </h2>
             <div className="absolute inset-0 text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400 blur-lg opacity-30 animate-pulse">
               HackUNCP?
             </div>
           </div>
         </div>
         
         <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8 font-medium">
           HackUNCP is a premier AI hackathon event bringing together the brightest minds from universities 
           and colleges nationwide to innovate, collaborate, and create transformative solutions. Whether you&apos;re a beginner 
           or an experienced developer, HackUNCP is your platform to shine and make a real impact.
         </p>

         <div className="relative inline-block">
           <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-amber-500 rounded-full blur opacity-50 animate-pulse"></div>
           <div className="relative inline-flex items-center gap-4 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full shadow-2xl">
             <Sparkles className="w-6 h-6 text-teal-400 animate-spin-slow" />
             <span className="text-xl font-bold text-white">
               Organized by <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400 font-black">AI@UNCP</span>
             </span>
             <span className="text-sm text-gray-300 font-medium">Student-led organization at UNC Pembroke</span>
             <Bot className="w-6 h-6 text-amber-400 animate-pulse" />
           </div>
         </div>
       </div>

       {/* Features grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
         {features.map((feature, index) => (
           <div 
             key={index}
             className="group relative"
             style={{animationDelay: `${index * 0.2}s`}}
           >
             <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl`}></div>
             
             <div className={`relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-110 hover:rotate-2 ${feature.glow} hover:shadow-2xl`}>
               <div className="relative z-10">
                 <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                   {feature.icon}
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors duration-300">{feature.title}</h3>
                 <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{feature.description}</p>
               </div>
               
               <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-teal-400/20 to-amber-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             </div>
           </div>
         ))}
       </div>

       {/* Competition tracks */}
       <div className="mb-20">
         <div className="text-center mb-16">
           <div className="relative inline-block">
             <h3 className="text-4xl md:text-5xl font-black text-white mb-6">Competition Tracks</h3>
             <div className="absolute inset-0 text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400 blur-sm opacity-50 animate-pulse">
               Competition Tracks
             </div>
           </div>
           <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
             Choose your track and build AI solutions that make a real impact in these critical domains
           </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {tracks.map((track, index) => (
             <div 
               key={index}
               className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-teal-400/50 transition-all duration-500 hover:scale-105 overflow-hidden"
             >
               <div className="absolute inset-0 pointer-events-none">
                 {[...Array(track.particles)].map((_, i) => (
                   <div
                     key={i}
                     className="absolute w-1 h-1 bg-white/30 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                     style={{
                       left: `${Math.random() * 100}%`,
                       top: `${Math.random() * 100}%`,
                       animationDelay: `${i * 0.3}s`
                     }}
                   />
                 ))}
               </div>

               <div className="relative z-10">
                 <div className="flex items-center gap-4 mb-6">
                   <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${track.color} text-white group-hover:scale-125 transition-transform duration-300 shadow-lg`} style={{animationDelay: `${index * 0.2}s`}}>
                     {track.icon}
                   </div>
                   <div className={`px-6 py-3 rounded-full bg-gradient-to-r ${track.color} text-white font-bold text-lg group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                     {track.title}
                   </div>
                 </div>
                 <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{track.description}</p>
               </div>

               <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
             </div>
           ))}
         </div>
       </div>

       {/* Mission statement */}
       <div className="relative">
         <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-amber-500/10 rounded-3xl blur-2xl"></div>
         
         <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/20 overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 via-amber-400/5 to-green-400/5 animate-pulse"></div>
           
           <div className="relative z-10 text-center">
             <div className="flex items-center justify-center gap-6 mb-8">
               <Target className="h-16 w-16 text-teal-400 animate-bounce" />
               <h3 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-amber-400 to-green-400">
                 Empowering AI Innovation
               </h3>
               <Sparkles className="h-16 w-16 text-amber-400 animate-bounce" style={{animationDelay: '0.5s'}} />
             </div>
             
             <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-8">
               HackUNCP 2026 brings together passionate students, cutting-edge technology, and real-world challenges. 
               We&apos;re challenging participants to break through conventional thinking and explore the 
               limitless potential of AI across education, healthcare, sustainability, and cybersecurity.
             </p>
             
             <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8 hover:scale-105 transition-transform duration-300">
               <p className="text-lg text-gray-300 max-w-5xl mx-auto leading-relaxed">
                 Building on our success with AI innovation, we&apos;re expanding our vision to welcome 
                 graduate students alongside undergraduates, creating a more diverse and dynamic 
                 innovation ecosystem that bridges academic learning with real-world impact.
               </p>
             </div>

             <div className="relative inline-block">
               <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-amber-600 rounded-full blur-lg opacity-50 animate-pulse"></div>
               <div className="relative inline-flex items-center gap-6 px-10 py-6 bg-white/10 backdrop-blur-xl border border-teal-400/40 rounded-full shadow-2xl">
                 <Bot className="w-8 h-8 text-teal-400 animate-spin-slow" />
                 <div className="text-center">
                   <p className="text-white font-black text-2xl">AI@UNCP</p>
                   <p className="text-teal-300 font-medium">Driving AI innovation at UNC Pembroke</p>
                 </div>
                 <Brain className="w-8 h-8 text-amber-400 animate-pulse" />
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>

     <style jsx>{`
       @keyframes float {
         0%, 100% { transform: translateY(0px) rotate(0deg); }
         50% { transform: translateY(-20px) rotate(180deg); }
       }
       @keyframes gradient-text {
         0%, 100% { background-position: 0% 50%; }
         50% { background-position: 100% 50%; }
       }
       .animate-gradient-text {
         background-size: 200% 200%;
         animation: gradient-text 4s ease infinite;
       }
       .animate-spin-slow {
         animation: spin 4s linear infinite;
       }
       .animate-float {
         animation: float 8s ease-in-out infinite;
       }
     `}</style>
   </section>
 );
}