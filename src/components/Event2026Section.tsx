'use client';

import { Calendar, MapPin, Coffee, Award, Users, Code2, Lightbulb, Trophy, Target } from 'lucide-react';

export default function Event2026Section() {
  const GOOGLE_FORM_URL = "https://forms.gle/9nKvHB9M3oEAtQXg7";

  const eventDetails = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Date",
      info: "February 21-22, 2026",
      description: "24 hours of AI innovation"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location", 
      info: "UNCP Campus",
      description: "Pembroke, North Carolina"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community",
      info: "Diverse Participants",
      description: "Including graduate students!"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Total Prizes",
      info: "TBA",
      description: "Amazing rewards await"
    }
  ];

  const benefits = [
    { icon: <Coffee className="h-5 w-5" />, text: "Free meals & snacks throughout the event", color: "from-amber-400 to-amber-600" },
    { icon: <Code2 className="h-5 w-5" />, text: "Mentorship from industry professionals", color: "from-teal-400 to-teal-600" },
    { icon: <Lightbulb className="h-5 w-5" />, text: "Hands-on workshops and tech talks", color: "from-green-400 to-green-600" },
    { icon: <Target className="h-5 w-5" />, text: "Networking with like-minded innovators", color: "from-slate-400 to-slate-600" },
    { icon: <Trophy className="h-5 w-5" />, text: "Portfolio-worthy project development", color: "from-red-400 to-red-600" },
    { icon: <Users className="h-5 w-5" />, text: "Collaborative learning environment", color: "from-amber-400 to-amber-600" }
  ];

  const handleApplyClick = () => {
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  return (
    <section id="2026-event" className="py-20 relative bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/20 via-transparent to-amber-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-green-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(62,139,148,0.4), transparent),
                           radial-gradient(circle at 80% 20%, rgba(140,115,76,0.4), transparent),
                           radial-gradient(circle at 40% 40%, rgba(76,115,41,0.4), transparent)`,
          backgroundSize: '100% 100%',
          animation: 'backgroundShift 10s ease-in-out infinite'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/15 to-amber-500/15 rounded-full px-6 py-2 mb-6 border border-teal-400/30">
            <Calendar className="h-5 w-5 text-teal-400" />
            <span className="text-teal-400 font-semibold">HackUNCP 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Beyond the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400">Boundaries</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            HackUNCP 2026 is expanding in both scale and scope. For the first time, we&apos;re welcoming 
            graduate students alongside undergraduates to push the boundaries of AI innovation across 
            four focused tracks.
          </p>
          <button 
            onClick={handleApplyClick}
            className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-amber-500 text-white font-semibold rounded-full hover:from-teal-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Apply Now - Applications Open!</span>
          </button>
        </div>

        {/* Event details grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {eventDetails.map((detail, index) => (
            <div 
              key={index}
              className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-teal-400/50 transition-all duration-500 text-center hover:scale-110 hover:rotate-1 shadow-2xl hover:shadow-teal-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-teal-400 mb-4 flex justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {detail.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">{detail.title}</h3>
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400 mb-2 group-hover:scale-105 transition-transform duration-300">{detail.info}</div>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">{detail.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Event schedule */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Event Schedule</h3>
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-amber-500/10 to-green-500/5"></div>
            <div className="relative z-10">
              <div className="mb-6">
                <div className="relative inline-block">
                  <Calendar className="h-20 w-20 text-teal-400 mx-auto mb-4 animate-bounce" />
                  <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-xl animate-pulse"></div>
                </div>
                <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-amber-400 to-green-400 mb-4">Schedule Coming Soon!</h4>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  We&apos;re crafting an amazing schedule packed with workshops, mentorship sessions, and networking opportunities. 
                  Stay tuned for the full agenda!
                </p>
              </div>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500/20 to-amber-500/20 rounded-full border border-teal-400/40 shadow-lg">
                <span className="text-teal-400 font-semibold text-lg">To Be Announced</span>
              </div>
            </div>
          </div>
        </div>

        {/* Prizes section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Prizes & Recognition</h3>
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-yellow-500/10 to-red-500/5"></div>
            <div className="relative z-10">
              <div className="mb-6">
                <div className="relative inline-block">
                  <Trophy className="h-20 w-20 text-amber-400 mx-auto mb-4 animate-bounce" style={{animationDelay: '0.5s'}} />
                  <div className="absolute inset-0 bg-amber-400/30 rounded-full blur-xl animate-pulse"></div>
                </div>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed">
                  Amazing prizes and recognition await the most innovative AI solutions. Multiple categories 
                  ensure every outstanding project gets the recognition it deserves.
                </p>
              </div>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-500/20 to-red-500/20 rounded-full border border-amber-400/40 shadow-lg">
                <Award className="h-6 w-6 text-amber-400 animate-spin-slow" />
                <span className="text-amber-400 font-semibold text-lg">Prize Categories to be Announced</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Why Join HackUNCP 2026?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:scale-105 hover:-rotate-1 transition-all duration-500 overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative z-10 flex items-center gap-4">
                  <div className={`text-white p-3 rounded-xl bg-gradient-to-br ${benefit.color} group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    {benefit.icon}
                  </div>
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">{benefit.text}</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-teal-400/20 to-amber-400/20 rounded-full blur-sm group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-amber-500/10 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-amber-500/5 to-green-500/5"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-amber-400 to-green-400 mb-6">Ready to Innovate with AI?</h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Applications are now open for HackUNCP 2026! Join us for an incredible weekend of AI innovation, 
                learning, and networking. Don&apos;t miss your chance to be part of this transformative experience.
              </p>
              <button 
                onClick={handleApplyClick}
                className="group relative px-10 py-5 bg-gradient-to-r from-teal-500 to-amber-500 text-white font-bold rounded-full hover:from-teal-600 hover:to-amber-600 transition-all duration-500 transform hover:scale-110 shadow-2xl text-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                <span className="relative z-10 flex items-center gap-3">
                  <Award className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  Apply Now - It&apos;s Free!
                  <Award className="w-6 h-6 group-hover:-rotate-12 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes backgroundShift {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.1) rotate(180deg); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-spin-slow {
            animation: spin 3s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
}