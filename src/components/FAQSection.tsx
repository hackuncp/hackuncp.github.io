'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  questions: FAQ[];
}

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('general');

  const faqCategories: Record<string, FAQCategory> = {
    general: {
      title: 'General',
      questions: [
        {
          id: 'what-is-hackathon',
          question: 'What is a hackathon?',
          answer:
            'A hackathon is an event where individuals or teams collaborate intensively over a short period (usually 24 hours) to create innovative software or hardware projects. It\'s about rapid prototyping, creativity, and learning new technologies.',
        },
        {
          id: 'what-is-hackuncp',
          question: 'What is HackUNCP?',
          answer:
            'HackUNCP is an AI-focused hackathon organized by AI@UNCP, a student-led organization at the University of North Carolina at Pembroke. In our second year, we bring together students from across the region for 24 hours of building innovative AI solutions that tackle real challenges in education, healthcare, sustainability, and cybersecurity.',
        },
        {
          id: 'whats-new-2026',
          question: 'What\'s new for HackUNCP 2026?',
          answer:
            'HackUNCP 2026 is expanding beyond boundaries! For the first time, we\'re welcoming graduate students alongside undergraduates.',
        },
        {
          id: 'cost',
          question: 'How much does it cost to participate?',
          answer:
            'HackUNCP is completely free for all participants! We provide free meals, snacks, swag, and access to all workshops and mentorship throughout the 24-hour event.',
        },
        {
          id: 'duration',
          question: 'How long is HackUNCP 2026?',
          answer:
            'HackUNCP 2026 is a 24-hour hackathon running from Saturday evening to Sunday evening. This intensive format gives you enough time to build something amazing while keeping the energy and excitement high throughout the event.',
        },
      ],
    },
    registration: {
      title: 'Registration',
      questions: [
        {
          id: 'who-can-participate',
          question: 'Who can participate in HackUNCP 2026?',
          answer:
            'HackUNCP 2026 is open to students above the legal age of majority who are currently studying at colleges or universities in the United States. This includes both undergraduate and graduate students. You don\'t need to be a computer science student - we welcome participants from all backgrounds including business, design, engineering, and more.',
        },
        {
          id: 'other-universities',
          question: 'Can students from other universities participate?',
          answer:
            'Yes! While HackUNCP is hosted by UNC Pembroke, we welcome college students from all universities and colleges. Just make sure you\'re currently enrolled as an undergraduate or graduate student.',
        },
        {
          id: 'application-deadlines',
          question: 'When are the application deadlines?',
          answer:
            'We have two application deadlines: Priority Deadline was December 6, 2025 (now closed), and Regular Deadline has been extended to January 25, 2026! Decisions will be released on a rolling basis. Don\'t miss this extended opportunity to secure your spot at HackUNCP 2026!',
        },
        {
          id: 'how-to-apply',
          question: 'How do I apply?',
          answer:
            'Click the \'Apply for HackUNCP 2026\' button to access our application form.',
        },
        {
          id: 'programming-experience',
          question: 'Do I need programming experience?',
          answer:
            'Not necessarily! While AI projects often involve coding, we welcome participants with diverse skills. Teams benefit from having members with different expertise - design, business analysis, domain knowledge, and technical skills all contribute to winning projects.',
        },
        {
          id: 'new-to-hackathons',
          question: 'What if I\'m completely new to hackathons?',
          answer:
            'Perfect! HackUNCP welcomes first-time participants. Our mentors will be available throughout the event to help answer questions and guide you. Don\'t worry about experience - focus on learning, collaborating, and building something cool!',
        },
      ],
    },
    tracks: {
      title: 'Tracks & Competition',
      questions: [
        {
          id: 'competition-tracks',
          question: 'What are the 2026 competition tracks?',
          answer:
            'We have four AI-focused tracks: AI for Education, AI for Healthcare, AI for Sustainability, and AI for Cybersecurity. All projects should integrate AI solutions to solve real-world problems in these domains.',
        },
        {
          id: 'project-judging',
          question: 'How are projects judged?',
          answer:
            'Projects are evaluated by industry professionals and faculty on three criteria: Innovation & Creativity (35%) - How original and inventive is your AI solution? Impact & Feasibility (35%) - How effectively does it solve real problems and how practical it is for real-world use? Technical Excellence & Presentation (30%) - Code quality, AI implementation, and communication of your solution.',
        },
        {
          id: 'project-submission',
          question: 'How do I submit my project?',
          answer:
            'All projects must be submitted through our official Devpost page by the deadline on February 22, 2026. Your submission must include: project title and description, demo video (max 2 minutes), source code repository (GitHub/GitLab), team member information, and which track you\'re competing in. Additionally, all teams will present a live demo during judging. Detailed submission guidelines can be found on our HackUNCP 2026 Devpost page.',
        },
        {
          id: 'previous-projects',
          question: 'Can I see projects from previous years?',
          answer:
            'Absolutely! Check out all the amazing projects from HackUNCP 2025 at our Devpost gallery: https://hackuncp-2025.devpost.com/project-gallery. This will give you a great sense of what we\'re looking for in 2026.',
        },
        {
          id: 'prizes',
          question: 'Are there prizes for winners?',
          answer:
            'Yes! We have exciting prizes for both overall winners and track champions. Overall winners will be recognized for 1st, 2nd, and 3rd place. Additionally, each of our four AI tracks (Education, Healthcare, Sustainability, Cybersecurity) will have track winners.',
        },
      ],
    },
    logistics: {
      title: 'Event Logistics',
      questions: [
        {
          id: 'in-person-or-virtual',
          question: 'Is HackUNCP 2026 in-person or virtual?',
          answer:
            'HackUNCP 2026 is an in-person event held at the University of North Carolina at Pembroke campus. We believe the collaborative energy and networking opportunities of an in-person hackathon create the best experience for participants.',
        },
        {
          id: 'location',
          question: 'Where will HackUNCP 2026 take place?',
          answer:
            'HackUNCP 2026 will be held at the University of North Carolina at Pembroke campus. Detailed venue information and directions will be provided to accepted participants closer to the event date.',
        },
        {
          id: 'food',
          question: 'Will food be provided?',
          answer:
            'Yes! We provide all meals and snacks throughout the entire 24-hour event.',
        },
        {
          id: 'parking',
          question: 'Is parking available?',
          answer:
            'Yes, free parking is available on campus for all HackUNCP participants. Specific parking areas and instructions will be included in your acceptance email and event materials.',
        },
        {
          id: 'accommodations',
          question: 'Will there be overnight accommodations?',
          answer:
            'Yes! We provide a designated sleeping area for participants who want to rest during the event. Please bring your own sleeping bag, pillow, and personal items. While many participants work through the night, you\'re always welcome to take breaks and get some sleep when needed.',
        },
        {
          id: 'what-to-bring',
          question: 'What should I bring?',
          answer:
            'Bring your laptop, chargers, and any hardware you want to work with. Since it\'s a 24-hour event, you may also want to bring any personal items you might need.',
        },
      ],
    },
    teams: {
      title: 'Teams & Support',
      questions: [
        {
          id: 'need-team',
          question: 'Do I need a team?',
          answer:
            'You can participate solo or with a team of up to 4 people. If you don\'t have a team, don\'t worry! We\'ll have team formation sessions at the beginning of the event to help you find teammates with complementary skills.',
        },
        {
          id: 'mentors',
          question: 'Will there be mentors available?',
          answer:
            'Yes! We\'ll have technical mentors available throughout the event to help with AI/ML concepts, programming questions, project guidance, and domain-specific expertise for each track.',
        },
      ],
    },
  };

  const toggleFAQ = (faqId: string) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  const currentQuestions = faqCategories[activeCategory]?.questions || [];

  return (
    <section id="faq" className="py-32 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">FAQ</h2>
        <p className="text-xl text-white/60 mb-16">
          Everything you need to know about HackUNCP 2026.
        </p>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-white/10 pb-6">
          {Object.entries(faqCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === key
                  ? 'text-[#8C734C] bg-[#8C734C]/20 rounded-lg'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Questions */}
        <div className="space-y-1">
          {currentQuestions.map((faq: FAQ) => (
            <div key={faq.id} className="border-b border-white/10">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full py-6 text-left flex items-start justify-between gap-4"
              >
                <span className="text-lg text-white font-medium">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 w-5 h-5 text-white/40 transition-transform ${
                    openFAQ === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === faq.id ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-white/60 leading-relaxed pr-12">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <p className="text-white/60 mb-4">Still have questions?</p>
          <a
            href="mailto:team@hackuncp.com"
            className="text-xl text-[#8C734C] hover:text-[#BFA77A] transition-colors"
          >
            team@hackuncp.com
          </a>
        </div>
      </div>
    </section>
  );
}
