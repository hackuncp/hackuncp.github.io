'use client';

import { Building2, Mail, Heart, Star, Sparkles, Zap, Users, Globe } from 'lucide-react';

export default function SponsorsSection() {
  const sponsorPlaceholders = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: i * 0.2,
    scale: 0.8 + Math.random() * 0.4,
    rotation: (Math.random() - 0.5) * 20
  }));

  return (
    <section id="sponsors" className="py-20 relative bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-400/5 via-amber-400/10 to-green-400/5"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Animated mesh grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, rgba(62,139,148,0.1) 1px, transparent 1px),
                           linear-gradient(-45deg, rgba(140,115,76,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          animation: 'meshMove 20s linear infinite'
        }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full opacity-30 animate-float ${
              ['bg-teal-400', 'bg-amber-400', 'bg-green-400', 'bg-red-400'][i % 4]
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-full px-8 py-4 mb-8 border border-white/20 shadow-2xl">
            <Building2 className="h-6 w-6 text-teal-400 animate-pulse" />
            <span className="text-teal-400 font-bold text-lg">Sponsorship Opportunities</span>
            <Sparkles className="h-6 w-6 text-amber-400 animate-pulse" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-amber-400 to-green-400 mb-8 animate-gradient-text">
            Join Our Mission
          </h2>
          
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12">
            Be part of something extraordinary. Help us create the ultimate AI innovation experience 
            and connect with the brightest minds in technology.
          </p>

          {/* Event statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-500">
              <Users className="h-12 w-12 text-teal-400 mx-auto mb-4 group-hover:animate-bounce" />
              <div className="text-4xl font-black text-white mb-2">🎓</div>
              <p className="text-gray-300">Students Nationwide</p>
            </div>
            <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-500" style={{animationDelay: '0.2s'}}>
              <Globe className="h-12 w-12 text-amber-400 mx-auto mb-4 group-hover:animate-bounce" />
              <div className="text-4xl font-black text-white mb-2">24</div>
              <p className="text-gray-300">Hours of Innovation</p>
            </div>
            <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-500" style={{animationDelay: '0.4s'}}>
              <Zap className="h-12 w-12 text-green-400 mx-auto mb-4 group-hover:animate-bounce" />
              <div className="text-4xl font-black text-white mb-2">4</div>
              <p className="text-gray-300">AI Innovation Tracks</p>
            </div>
          </div>
        </div>

        {/* Sponsors showcase */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-white text-center mb-12">Our Amazing Sponsors</h3>
          
          {/* Sponsor grid */}
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
              {sponsorPlaceholders.map((placeholder) => (
                <div
                  key={placeholder.id}
                  className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-teal-400/50 transition-all duration-500 aspect-square flex items-center justify-center"
                  style={{
                    animationDelay: `${placeholder.delay}s`,
                    transform: `scale(${placeholder.scale}) rotate(${placeholder.rotation}deg)`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-amber-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-400/30 to-amber-400/30 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-white/50" />
                    </div>
                    <p className="text-white/30 text-sm font-medium">Coming Soon</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Central announcement */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/30 text-center shadow-2xl">
                <Star className="h-20 w-20 text-amber-400 mx-auto mb-6 animate-spin-slow" />
                <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500 mb-4">
                  Sponsors Reveal Coming Soon!
                </h4>
                <p className="text-lg text-gray-300 max-w-md">
                  We&#39;re partnering with incredible organizations who believe in AI innovation and student success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-amber-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/20 overflow-hidden">
              
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 via-amber-400/5 to-green-400/5 animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <Heart className="h-16 w-16 text-teal-400 animate-pulse" />
                  <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-amber-400 to-green-400">
                    Interested in Sponsoring?
                  </h3>
                  <Heart className="h-16 w-16 text-amber-400 animate-pulse" />
                </div>
                
                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Join us in empowering the next generation of AI innovators. Let&#39;s create something amazing together 
                  and make a lasting impact on the future of technology.
                </p>

                {/* Contact button */}
                <a 
                  href="mailto:team@hackuncp.org" 
                  className="group relative inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-teal-500 to-amber-500 text-white font-bold rounded-full hover:from-teal-600 hover:to-amber-600 transition-all duration-500 transform hover:scale-110 shadow-2xl text-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                  
                  <Mail className="h-8 w-8 group-hover:animate-bounce relative z-10" />
                  <span className="relative z-10">team@hackuncp.org</span>
                  <Sparkles className="h-8 w-8 group-hover:animate-spin relative z-10" />
                </a>

                {/* Decorative elements */}
                <div className="mt-12 flex items-center justify-center gap-8">
                  <div className="w-16 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
                  <Star className="h-8 w-8 text-amber-400 animate-pulse" />
                  <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes meshMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, 80px); }
        }
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
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}