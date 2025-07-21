import { Metadata } from 'next';
import { ArrowLeft, Shield, Users, Gavel, Mail } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Code of Conduct | HackUNCP 2026',
  description: 'HackUNCP Code of Conduct - Creating a safe, professional, and welcoming environment for all participants.',
  openGraph: {
    title: 'Code of Conduct | HackUNCP 2026',
    description: 'HackUNCP Code of Conduct - Creating a safe, professional, and welcoming environment for all participants.',
    url: 'https://hackuncp.org/code-of-conduct',
    siteName: 'HackUNCP 2026',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Code of Conduct | HackUNCP 2026',
    description: 'HackUNCP Code of Conduct - Creating a safe, professional, and welcoming environment for all participants.',
  },
};

export default function CodeOfConductPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link 
                href="/"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                aria-label="Back to HackUNCP homepage"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back to HackUNCP</span>
              </Link>
              
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-teal-400" />
                <span className="text-xl font-bold text-white">Code of Conduct</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-amber-400 to-green-400 mb-4">
              HackUNCP Code of Conduct
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Creating a safe, professional, and welcoming environment for all participants at HackUNCP 2026
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Our Commitment */}
            <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-6 w-6 text-teal-400" />
                <h2 className="text-2xl font-bold text-white">Our Commitment</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                HackUNCP is dedicated to providing a harassment-free, professional, and welcoming environment for all participants regardless of age, gender, disability, physical appearance, body size, race, ethnicity, nationality, religion, previous hackathon experience, computing experience, or choice of text editor.
              </p>
            </section>

            {/* Expected Behavior */}
            <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Expected Behavior</h2>
              <p className="text-gray-300 mb-4">All participants are expected to:</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-teal-400 mt-1" aria-hidden="true">•</span>
                  <span><strong className="text-white">Be respectful and professional</strong> in speech and actions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-400 mt-1" aria-hidden="true">•</span>
                  <span><strong className="text-white">Be collaborative</strong> and supportive of fellow participants</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-400 mt-1" aria-hidden="true">•</span>
                  <span><strong className="text-white">Be mindful</strong> of your surroundings and fellow participants</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-400 mt-1" aria-hidden="true">•</span>
                  <span><strong className="text-white">Respect the venue</strong> and all provided materials and equipment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-400 mt-1" aria-hidden="true">•</span>
                  <span><strong className="text-white">Follow all instructions</strong> from HackUNCP organizers and volunteers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-400 mt-1" aria-hidden="true">•</span>
                  <span><strong className="text-white">Respect intellectual property</strong> - only use resources you have permission to use</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-400 mt-1" aria-hidden="true">•</span>
                  <span><strong className="text-white">Maintain a professional demeanor</strong> during presentations and interactions with sponsors</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-400 mt-1" aria-hidden="true">•</span>
                  <span><strong className="text-white">Report concerns</strong> to organizers immediately if you witness or experience inappropriate behavior</span>
                </li>
              </ul>
            </section>

            {/* Unacceptable Behavior */}
            <section className="bg-red-500/5 backdrop-blur-sm rounded-xl p-8 border border-red-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Unacceptable Behavior</h2>
              <p className="text-gray-300 mb-4">The following behaviors are considered harassment and are unacceptable:</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-red-400 mt-1" aria-hidden="true">×</span>
                  <span><strong className="text-white">Verbal or written abuse</strong> targeting any individual or group</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 mt-1" aria-hidden="true">×</span>
                  <span><strong className="text-white">Sexual language, imagery, or advances</strong> of any kind</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 mt-1" aria-hidden="true">×</span>
                  <span><strong className="text-white">Deliberate intimidation, stalking, or following</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 mt-1" aria-hidden="true">×</span>
                  <span><strong className="text-white">Harassing photography or recording</strong> without consent</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 mt-1" aria-hidden="true">×</span>
                  <span><strong className="text-white">Sustained disruption</strong> of talks, workshops, or other events</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 mt-1" aria-hidden="true">×</span>
                  <span><strong className="text-white">Unwanted physical contact</strong> including touching, hugging, or blocking someone&apos;s path</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 mt-1" aria-hidden="true">×</span>
                  <span><strong className="text-white">Discrimination</strong> based on any protected characteristic</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 mt-1" aria-hidden="true">×</span>
                  <span><strong className="text-white">Theft or vandalism</strong> of venue property or participant belongings</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 mt-1" aria-hidden="true">×</span>
                  <span><strong className="text-white">Disrespectful behavior</strong> toward sponsors, mentors, judges, or organizers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 mt-1" aria-hidden="true">×</span>
                  <span><strong className="text-white">Use of technology</strong> to intimidate, harass, or harm others</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 mt-1" aria-hidden="true">×</span>
                  <span><strong className="text-white">Network abuse</strong> or attempts to compromise provided systems</span>
                </li>
              </ul>
            </section>

            {/* Consequences */}
            <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Gavel className="h-6 w-6 text-amber-400" />
                <h2 className="text-2xl font-bold text-white">Consequences</h2>
              </div>
              <p className="text-gray-300 mb-4">Participants who engage in unacceptable behavior may face:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                    <span className="text-yellow-400" aria-hidden="true">•</span>
                    <span className="text-gray-300">Verbal warning from organizers</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                    <span className="text-orange-400" aria-hidden="true">•</span>
                    <span className="text-gray-300">Temporary suspension from activities</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                    <span className="text-red-400" aria-hidden="true">•</span>
                    <span className="text-gray-300">Immediate expulsion from event</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-red-600/10 rounded-lg border border-red-600/20">
                    <span className="text-red-500" aria-hidden="true">•</span>
                    <span className="text-gray-300">Permanent ban from future events</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-red-700/10 rounded-lg border border-red-700/20">
                    <span className="text-red-600" aria-hidden="true">•</span>
                    <span className="text-gray-300">Notification to law enforcement</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Reporting */}
            <section className="bg-teal-500/5 backdrop-blur-sm rounded-xl p-8 border border-teal-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Reporting</h2>
              <p className="text-gray-300 mb-6">If you experience or witness unacceptable behavior:</p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <svg className="h-8 w-8 text-teal-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-white font-semibold mb-2">Help Desk</h3>
                  <p className="text-gray-300 text-sm">Main reporting center located at registration area</p>
                </div>
                
                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <svg className="h-8 w-8 text-green-400 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5.042 15.165a.5.5 0 0 1-.707-.707l2.829-2.828a.5.5 0 0 1 .707 0l1.414 1.414 4.243-4.243a.5.5 0 0 1 .707 0l2.829 2.828a.5.5 0 0 1-.707.707L13.5 9.48l-4.243 4.243a.5.5 0 0 1-.707 0L7.136 12.31 5.042 15.165Z"/>
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2V4Zm0 2.383V12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6.383L15.7 9.6a.5.5 0 0 1-.4 0L8 6.383V4Z"/>
                  </svg>
                  <h3 className="text-white font-semibold mb-2">Contact on Slack</h3>
                  <p className="text-gray-300 text-sm">Quick messaging in HackUNCP workspace</p>
                </div>

                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <Mail className="h-8 w-8 text-amber-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Email Us</h3>
                  <a 
                    href="mailto:team@hackuncp.com" 
                    className="text-amber-400 hover:text-amber-300 transition-colors text-sm"
                    aria-label="Email HackUNCP team"
                  >
                    team@hackuncp.com
                  </a>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                <p className="text-gray-300 text-sm">
                  <strong className="text-green-400">Confidential:</strong> All reports will be handled with discretion and confidentiality.
                </p>
              </div>
            </section>

            {/* Guidelines Sections */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Intellectual Property */}
              <section className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Intellectual Property</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex gap-2">
                    <span className="text-teal-400" aria-hidden="true">•</span>
                    <span>Original work only during hackathon period</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-teal-400" aria-hidden="true">•</span>
                    <span>Respect licenses and authorizations</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-teal-400" aria-hidden="true">•</span>
                    <span>Attribute properly and give credit</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-teal-400" aria-hidden="true">•</span>
                    <span>No plagiarism or false submissions</span>
                  </li>
                </ul>
              </section>

              {/* Technology Use */}
              <section className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Technology Use</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex gap-2">
                    <span className="text-amber-400" aria-hidden="true">•</span>
                    <span>Respect network resources and WiFi</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-400" aria-hidden="true">•</span>
                    <span>No malicious software creation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-400" aria-hidden="true">•</span>
                    <span>Appropriate content only</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-400" aria-hidden="true">•</span>
                    <span>Respect user privacy in applications</span>
                  </li>
                </ul>
              </section>
            </div>

            {/* Competition & Safety */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Competition Integrity */}
              <section className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Competition Integrity</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex gap-2">
                    <span className="text-green-400" aria-hidden="true">•</span>
                    <span>Compete honestly and ethically</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-400" aria-hidden="true">•</span>
                    <span>Follow team formation rules</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-400" aria-hidden="true">•</span>
                    <span>Respect submission deadlines</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-400" aria-hidden="true">•</span>
                    <span>Accept judge decisions gracefully</span>
                  </li>
                </ul>
              </section>

              {/* Health & Safety */}
              <section className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Health & Safety</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex gap-2">
                    <span className="text-slate-400" aria-hidden="true">•</span>
                    <span>Know emergency exits and procedures</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-slate-400" aria-hidden="true">•</span>
                    <span>Inform organizers of medical needs</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-slate-400" aria-hidden="true">•</span>
                    <span>Stay hydrated and get rest</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-slate-400" aria-hidden="true">•</span>
                    <span>No alcohol or illegal substances</span>
                  </li>
                </ul>
              </section>
            </div>

            {/* Enforcement */}
            <section className="bg-gradient-to-r from-amber-500/10 to-red-500/10 backdrop-blur-sm rounded-xl p-8 border border-amber-500/20">
              <div className="flex items-center gap-3 mb-6">
                <Gavel className="h-6 w-6 text-amber-400" />
                <h2 className="text-2xl font-bold text-white">Enforcement</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>HackUNCP organizers have the right and responsibility to remove, edit, or reject any participant, project, comment, or other contribution that violates this Code of Conduct.</p>
                <p><strong className="text-white">Event Photography:</strong> By attending HackUNCP, you consent to being photographed and recorded for promotional purposes. Inform organizers if you prefer not to be included.</p>
                <p><strong className="text-white">Final Authority:</strong> All decisions regarding Code of Conduct violations are made at the sole discretion of HackUNCP organizers and are final.</p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-teal-500/10 to-amber-500/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <div className="space-y-2 text-gray-300">
                <p><strong className="text-white">Event Organizers:</strong> AI@UNCP</p>
                <p>
                  <strong className="text-white">Email:</strong>{' '}
                  <a 
                    href="mailto:team@hackuncp.com" 
                    className="text-teal-400 hover:text-teal-300 transition-colors"
                    aria-label="Email HackUNCP organizers"
                  >
                    team@hackuncp.com
                  </a>
                </p>
                <p><strong className="text-white">Date:</strong> February 21-22, 2026</p>
              </div>
              
              <div className="mt-6 p-4 bg-white/5 rounded-lg">
                <p className="text-gray-300 text-sm">
                  By participating in HackUNCP 2026, you agree to abide by this Code of Conduct. 
                  We reserve the right to update this document as needed.
                </p>
              </div>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm mt-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center text-gray-400 text-sm">
              <p>Last Updated: July 2025 | © 2026 HackUNCP - AI@UNCP</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}