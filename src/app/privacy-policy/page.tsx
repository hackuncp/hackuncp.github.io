/**
 * HackUNCP 2026 Privacy Policy Page
 * 
 * A comprehensive privacy policy for hackathon participants that provides
 * transparent information about data collection, usage, and user rights.
 * 
 * @version 1.0.0
 * @author AI@UNCP
 * @lastUpdated July 2025
 */

import { Metadata } from 'next';
import { ArrowLeft, Shield, Database, UserCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | HackUNCP 2026',
  description: 'HackUNCP Privacy Policy - How we handle your information for our hackathon event.',
  openGraph: {
    title: 'Privacy Policy | HackUNCP 2026',
    description: 'HackUNCP Privacy Policy - How we handle your information for our hackathon event.',
    url: 'https://hackuncp.org/privacy-policy',
    siteName: 'HackUNCP 2026',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | HackUNCP 2026',
    description: 'HackUNCP Privacy Policy - How we handle your information for our hackathon event.',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      {/* Background effects */}
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
                <span className="text-xl font-bold text-white">Privacy Policy</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Title section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-amber-400 to-green-400 mb-4">
              HackUNCP Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How we handle your information for our hackathon
            </p>
          </div>

          <div className="space-y-12">
            {/* What we collect */}
            <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Database className="h-6 w-6 text-teal-400" />
                <h2 className="text-2xl font-bold text-white">What We Collect</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Registration Information</h3>
                  <p className="text-gray-300 mb-4">When you register for HackUNCP, we collect:</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex gap-2">
                      <span className="text-teal-400 mt-1" aria-hidden="true">•</span>
                      <span>Name, email, phone number, birth date</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-400 mt-1" aria-hidden="true">•</span>
                      <span>College/university, academic level, expected graduation</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-400 mt-1" aria-hidden="true">•</span>
                      <span>City, state, country (US applicants only)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-400 mt-1" aria-hidden="true">•</span>
                      <span>Gender (Male/Female), sweatshirt size, dietary restrictions</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-400 mt-1" aria-hidden="true">•</span>
                      <span>Previous HackUNCP attendance, how you heard about the event</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-400 mt-1" aria-hidden="true">•</span>
                      <span>Goals for the hackathon and previous projects you&apos;ve built</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">During the Event</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex gap-2">
                      <span className="text-amber-400 mt-1" aria-hidden="true">•</span>
                      <span>Photos and videos for event documentation</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-400 mt-1" aria-hidden="true">•</span>
                      <span>Project submissions and presentations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How we use information */}
            <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">How We Use Your Information</h2>
              
              <div className="space-y-4 text-gray-300">
                <p><strong className="text-white">Event Operations:</strong> Process applications, send updates, arrange meals and sweatshirts, track attendance</p>
                <p><strong className="text-white">Team Formation:</strong> Help connect participants with similar interests or experience levels (if requested)</p>
                <p><strong className="text-white">Future Events:</strong> Invite you to next year&apos;s HackUNCP (US applicants only)</p>
                <p><strong className="text-white">Photos/Videos:</strong> Document the event and promote future hackathons</p>
                <p><strong className="text-white">Dietary Accommodations:</strong> Ensure we provide appropriate meals for your dietary restrictions</p>
              </div>
            </section>

            {/* Data sharing */}
            <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Data Sharing</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 rounded-lg p-6 border border-green-500/20">
                  <h3 className="text-lg font-semibold text-white mb-4">✅ We Share With:</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• UNCP (our host university)</li>
                    <li>• Catering companies (dietary restrictions only)</li>
                    <li>• Sweatshirt vendors (sizes only)</li>
                    <li>• Google Forms (handles our registration system)</li>
                    <li>• Emergency contacts (if needed during the event)</li>
                  </ul>
                </div>

                <div className="bg-red-500/10 rounded-lg p-6 border border-red-500/20">
                  <h3 className="text-lg font-semibold text-white mb-4">❌ We DON&apos;T Share:</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Your contact info with sponsors</li>
                    <li>• Personal project details</li>
                    <li>• Data with other participants</li>
                    <li>• Any personal information without consent</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* User rights */}
            <section className="bg-teal-500/5 backdrop-blur-sm rounded-xl p-8 border border-teal-500/20">
              <div className="flex items-center gap-3 mb-6">
                <UserCheck className="h-6 w-6 text-teal-400" />
                <h2 className="text-2xl font-bold text-white">Your Rights</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p>You can always:</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-teal-400 mt-1" aria-hidden="true">•</span>
                    <span><strong className="text-white">Update your info:</strong> Email us to correct any details</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-teal-400 mt-1" aria-hidden="true">•</span>
                    <span><strong className="text-white">Withdraw application:</strong> Email us to remove your application before the event</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-teal-400 mt-1" aria-hidden="true">•</span>
                    <span><strong className="text-white">Opt out of photos:</strong> Tell us during registration or check-in</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-teal-400 mt-1" aria-hidden="true">•</span>
                    <span><strong className="text-white">Delete your data:</strong> Request removal after the event</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-teal-400 mt-1" aria-hidden="true">•</span>
                    <span><strong className="text-white">Unsubscribe:</strong> Stop future event emails</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Technical information */}
            <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Technical Stuff</h2>
              
              <div className="space-y-4 text-gray-300">
                <p><strong className="text-white">Google Forms:</strong> We use Google Forms for registration - they handle data security</p>
                <p><strong className="text-white">US Applicants Only:</strong> HackUNCP 2026 is open to students from the United States of America</p>
                <p><strong className="text-white">Email Communications:</strong> We&apos;ll email you event updates and next year&apos;s invitation</p>
                <p><strong className="text-white">Data Storage:</strong> We keep registration data for 2 years, photos for promotional purposes (removable upon request)</p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-teal-500/10 to-amber-500/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Questions?</h2>
              <p className="text-gray-300 mb-4">
                Email us at{' '}
                <a 
                  href="mailto:team@hackuncp.com"
                  className="text-teal-400 hover:text-teal-300 transition-colors"
                  aria-label="Email HackUNCP organizers"
                >
                  team@hackuncp.com
                </a>
              </p>
              <p className="text-gray-300">
                We&apos;re here to help with any questions about your data or privacy.
              </p>
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