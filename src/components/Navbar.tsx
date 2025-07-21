'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);

 useEffect(() => {
   const handleScroll = () => {
     const isScrolled = window.scrollY > 20;
     setScrolled(isScrolled);
   };

   window.addEventListener('scroll', handleScroll);
   return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 const navItems = [
   { name: 'About', href: '#about' },
   { name: 'HackUNCP 2026', href: '#2026-event' }, 
   { name: 'Sponsors', href: '#sponsors' },
   { name: '2025 Recap', href: '#2025-recap' }, 
   { name: 'Team', href: '#team-section' }, 
   { name: 'AI@UNCP', href: '#ai-uncp' },
   { name: 'FAQ', href: '#faq' }
 ];

 const handleNavClick = (href: string) => {
   const targetId = href.replace('#', '');
   const element = document.getElementById(targetId);
   
   if (element) {
     element.scrollIntoView({ 
       behavior: 'smooth',
       block: 'start'
     });
   }
   setIsMenuOpen(false);
 };

 return (
   <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
     scrolled 
       ? 'bg-slate-900/80 backdrop-blur-md border-b border-white/10' 
       : 'bg-transparent'
   }`}>
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex items-center justify-between h-16">
         
         {/* Brand logo */}
         <div className="flex items-center space-x-3">
           <span className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-amber-400 to-green-400">
             HackUNCP
           </span>
         </div>

         {/* Desktop navigation */}
         <div className="hidden md:block">
           <div className="flex items-center space-x-8">
             {navItems.map((item) => (
               <button
                 key={item.name}
                 onClick={() => handleNavClick(item.href)}
                 className="text-gray-200 hover:text-white transition-colors duration-200 font-medium hover:text-teal-400 relative group"
               >
                 {item.name}
                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-amber-400 transition-all duration-300 group-hover:w-full"></span>
               </button>
             ))}
           </div>
         </div>

         {/* Mobile menu toggle */}
         <div className="md:hidden">
           <button
             onClick={() => setIsMenuOpen(!isMenuOpen)}
             className="text-gray-200 hover:text-white transition-colors duration-200 p-2"
             aria-label="Toggle mobile menu"
           >
             {isMenuOpen ? (
               <X className="h-6 w-6" />
             ) : (
               <Menu className="h-6 w-6" />
             )}
           </button>
         </div>
       </div>

       {/* Mobile navigation menu */}
       {isMenuOpen && (
         <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-white/10">
           <div className="px-2 pt-2 pb-3 space-y-1">
             {navItems.map((item) => (
               <button
                 key={item.name}
                 onClick={() => handleNavClick(item.href)}
                 className="block w-full text-left px-3 py-2 text-gray-200 hover:text-white hover:bg-white/10 transition-colors duration-200 font-medium rounded-md"
               >
                 {item.name}
               </button>
             ))}
           </div>
         </div>
       )}
     </div>
   </nav>
 );
}