/**
 * HackUNCP 2026 Footer Component
 * 
 * Professional footer with contact information, social links, navigation,
 * and legal pages. Includes smooth scrolling and accessibility features.
 * 
 * @version 1.0.0
 * @author AI@UNCP
 * @lastUpdated July 2025
 */

'use client';

import { Code, Mail, Instagram, MapPin, Calendar, ExternalLink, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  const socialLinks = [ 
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", url: "https://www.linkedin.com/showcase/hackuncp/" },
    { icon: <Instagram className="h-5 w-5" />, label: "Instagram", url: "https://instagram.com/hackuncp" },
    { icon: <Facebook className="h-5 w-5" />, label: "Facebook", url: "https://www.facebook.com/HackUNCP/" },
    { icon: <Mail className="h-5 w-5" />, label: "Email", url: "mailto:team@hackuncp.com" }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "HackUNCP 2026", href: "#2026-event" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "2025 Recap", href: "#2025-recap" },
    { label: "Team", href: "#team-section" },
    { label: "AI@UNCP", href: "#ai-uncp" },
    { label: "FAQ", href: "#faq" }
  ];

  const legalLinks = [
    { label: "Code of Conduct", href: "/code-of-conduct", external: true },
    { label: "Privacy Policy", href: "/privacy-policy", external: true }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-black backdrop-blur-sm border-t border-teal-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-8 w-8 text-teal-400" />
              <span className="text-2xl font-bold text-white">HackUNCP</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              University of North Carolina Pembroke&#39;s premier hackathon, fostering innovation, 
              collaboration, and the next generation of tech leaders.
            </p>
            
            {/* Contact information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-4 w-4 text-teal-400" />
                <span>University of North Carolina Pembroke, Pembroke, NC</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Calendar className="h-4 w-4 text-teal-400" />
                <span>February 21-22, 2026</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-4 w-4 text-teal-400" />
                <a href="mailto:team@hackuncp.com" className="hover:text-white transition-colors">
                  team@hackuncp.com
                </a>
              </div>
            </div>
            
            {/* Social media links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick navigation links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href.slice(1))}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources and legal links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://forms.gle/9nKvHB9M3oEAtQXg7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  Apply Now
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sponsors')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Become a Sponsor
                </button>
              </li>
              <li>
                <a
                  href="https://hackuncp.org/projects"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                 HackUNCP 2026 Devpost
                </a>
              </li>
              <li>
                <a 
                  href="https://hackuncp-2025.devpost.com/project-gallery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  Past Projects
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
            
            {/* Legal section */}
            <h3 className="text-white font-semibold mb-4 mt-8">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-300 text-sm text-center md:text-left">
              © 2026 HackUNCP. All rights reserved.
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-300">
              <span>Organized by <a href="#ai-uncp" onClick={() => scrollToSection('ai-uncp')} className="text-teal-400 font-medium hover:text-teal-300 transition-colors cursor-pointer">AI@UNCP</a></span>
              <span className="hidden md:inline text-gray-500">•</span>
              <span>Built by <a href="#ai-uncp" onClick={() => scrollToSection('ai-uncp')} className="text-amber-400 font-medium hover:text-amber-300 transition-colors cursor-pointer">AI@UNCP</a></span>
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <div className="absolute right-8 -top-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 bg-gradient-to-r from-teal-500 to-amber-500 text-white rounded-full shadow-lg hover:from-teal-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105"
            aria-label="Back to top"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}