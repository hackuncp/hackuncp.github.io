"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Zap,
  Users,
  MapPin,
  Trophy,
  Code,
} from "lucide-react";
import { ReactElement } from "react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  icon: ReactElement;
  color: string;
  questions: FAQ[];
}

type FAQCategories = {
  general: FAQCategory;
  registration: FAQCategory;
  tracks: FAQCategory;
  logistics: FAQCategory;
  teams: FAQCategory;
};

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<keyof FAQCategories>("general");

  const faqCategories: FAQCategories = {
    general: {
      title: "General",
      icon: <Zap className="h-6 w-6" />,
      color: "from-teal-500 to-teal-600",
      questions: [
        {
          id: "what-is-hackathon",
          question: "What is a hackathon?",
          answer:
            "A hackathon is an event where individuals or teams collaborate intensively over a short period (usually 24 hours) to create innovative software or hardware projects. It's about rapid prototyping, creativity, and learning new technologies.",
        },
        {
          id: "what-is-hackuncp",
          question: "What is HackUNCP?",
          answer:
            "HackUNCP is an AI-focused hackathon organized by AI@UNCP, a student-led organization at the University of North Carolina at Pembroke. In our second year, we bring together students from across the region for 24 hours of building innovative AI solutions that tackle real challenges in education, healthcare, sustainability, and cybersecurity.",
        },
        {
          id: "whats-new-2026",
          question: "What's new for HackUNCP 2026?",
          answer:
            "HackUNCP 2026 is expanding beyond boundaries! For the first time, we're welcoming graduate students alongside undergraduates.",
        },
        {
          id: "cost",
          question: "How much does it cost to participate?",
          answer:
            "HackUNCP is completely free for all participants! We provide free meals, snacks, swag, and access to all workshops and mentorship throughout the 24-hour event.",
        },
        {
          id: "duration",
          question: "How long is HackUNCP 2026?",
          answer:
            "HackUNCP 2026 is a 24-hour hackathon running from Saturday evening to Sunday evening. This intensive format gives you enough time to build something amazing while keeping the energy and excitement high throughout the event.",
        },
      ],
    },
    registration: {
      title: "Registration",
      icon: <Users className="h-6 w-6" />,
      color: "from-amber-500 to-amber-600",
      questions: [
        {
          id: "who-can-participate",
          question: "Who can participate in HackUNCP 2026?",
          answer:
            "HackUNCP 2026 is open to students above the legal age of majority who are currently studying at colleges or universities in the United States. This includes both undergraduate and graduate students. You don't need to be a computer science student - we welcome participants from all backgrounds including business, design, engineering, and more.",
        },
        {
          id: "other-universities",
          question: "Can students from other universities participate?",
          answer:
            "Yes! While HackUNCP is hosted by UNC Pembroke, we welcome college students from all universities and colleges. Just make sure you're currently enrolled as an undergraduate or graduate student.",
        },
        {
          id: "application-deadlines",
          question: "When are the application deadlines?",
          answer:
            "We have two application deadlines: Priority Deadline on December 6, 2025, and Regular Deadline on January 3, 2026. Priority decisions will be released by December 23, 2025. Regular decisions will be released by January 20, 2026. Applying early allows you to plan ahead with more time and secure your spot sooner!",
        },
        {
          id: "how-to-apply",
          question: "How do I apply?",
          answer:
            "Click the 'Apply for HackUNCP 2026' button to access our application form.",
        },
        {
          id: "programming-experience",
          question: "Do I need programming experience?",
          answer:
            "Not necessarily! While AI projects often involve coding, we welcome participants with diverse skills. Teams benefit from having members with different expertise - design, business analysis, domain knowledge, and technical skills all contribute to winning projects.",
        },
        {
          id: "new-to-hackathons",
          question: "What if I'm completely new to hackathons?",
          answer:
            "Perfect! HackUNCP welcomes first-time participants. Our mentors will be available throughout the event to help answer questions and guide you. Don't worry about experience - focus on learning, collaborating, and building something cool!",
        },
      ],
    },
    tracks: {
      title: "Tracks & Competition",
      icon: <Code className="h-6 w-6" />,
      color: "from-green-500 to-green-600",
      questions: [
        {
          id: "competition-tracks",
          question: "What are the 2026 competition tracks?",
          answer:
            "We have four AI-focused tracks: AI for Education, AI for Healthcare, AI for Sustainability, and AI for Cybersecurity. All projects should integrate AI solutions to solve real-world problems in these domains.",
        },
        {
          id: "project-judging",
          question: "How are projects judged?",
          answer:
            "Projects are evaluated by industry professionals and faculty on three criteria: Innovation & Creativity (35%) - How original and inventive is your AI solution? Impact & Feasibility (35%) - How effectively does it solve real problems and how practical it is for real-world use? Technical Excellence & Presentation (30%) - Code quality, AI implementation, and communication of your solution.",
        },
        {
          id: "project-submission",
          question: "How do I submit my project?",
          answer:
            "All projects must be submitted through our official Devpost page by the deadline on February 22, 2026. Your submission must include: project title and description, demo video (max 2 minutes), source code repository (GitHub/GitLab), team member information, and which track you're competing in. Additionally, all teams will present a live demo during judging. Detailed submission guidelines can be found on our HackUNCP 2026 Devpost page.",
        },

        {
          id: "previous-projects",
          question: "Can I see projects from previous years?",
          answer:
            "Absolutely! Check out all the amazing projects from HackUNCP 2025 at our Devpost gallery: https://hackuncp-2025.devpost.com/project-gallery. This will give you a great sense of what we're looking for in 2026.",
        },
        {
          id: "prizes",
          question: "Are there prizes for winners?",
          answer:
            "Yes! We have exciting prizes for both overall winners and track champions. Overall winners will be recognized for 1st, 2nd, and 3rd place. Additionally, each of our four AI tracks (Education, Healthcare, Sustainability, Cybersecurity) will have track winners.",
        },
      ],
    },
    logistics: {
      title: "Event Logistics",
      icon: <MapPin className="h-6 w-6" />,
      color: "from-slate-500 to-slate-600",
      questions: [
        {
          id: "in-person-or-virtual",
          question: "Is HackUNCP 2026 in-person or virtual?",
          answer:
            "HackUNCP 2026 is an in-person event held at the University of North Carolina at Pembroke campus. We believe the collaborative energy and networking opportunities of an in-person hackathon create the best experience for participants.",
        },
        {
          id: "location",
          question: "Where will HackUNCP 2026 take place?",
          answer:
            "HackUNCP 2026 will be held at the University of North Carolina at Pembroke campus. Detailed venue information and directions will be provided to accepted participants closer to the event date.",
        },
        {
          id: "food",
          question: "Will food be provided?",
          answer:
            "Yes! We provide all meals and snacks throughout the entire 24-hour event.",
        },
        {
          id: "parking",
          question: "Is parking available?",
          answer:
            "Yes, free parking is available on campus for all HackUNCP participants. Specific parking areas and instructions will be included in your acceptance email and event materials.",
        },
        {
          id: "accommodations",
          question: "Will there be overnight accommodations?",
          answer:
            "Yes! We provide a designated sleeping area for participants who want to rest during the event. Please bring your own sleeping bag, pillow, and personal items. While many participants work through the night, you're always welcome to take breaks and get some sleep when needed.",
        },
        {
          id: "what-to-bring",
          question: "What should I bring?",
          answer:
            "Bring your laptop, chargers, and any hardware you want to work with. Since it's a 24-hour event, you may also want to bring any personal items you might need.",
        },
      ],
    },
    teams: {
      title: "Teams & Support",
      icon: <Trophy className="h-6 w-6" />,
      color: "from-red-500 to-red-600",
      questions: [
        {
          id: "need-team",
          question: "Do I need a team?",
          answer:
            "You can participate solo or with a team of up to 4 people. If you don't have a team, don't worry! We'll have team formation sessions at the beginning of the event to help you find teammates with complementary skills.",
        },
        {
          id: "mentors",
          question: "Will there be mentors available?",
          answer:
            "Yes! We'll have technical mentors available throughout the event to help with AI/ML concepts, programming questions, project guidance, and domain-specific expertise for each track.",
        },
      ],
    },
  };

  const toggleFAQ = (faqId: string) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  const currentQuestions = faqCategories[activeCategory]?.questions || [];
  const currentCategory = faqCategories[activeCategory];

  return (
    <section id="faq" className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/10 to-amber-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-green-500/10 to-red-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/20 to-amber-500/20 rounded-full px-6 py-2 mb-6 border border-teal-500/30">
            <HelpCircle className="h-5 w-5 text-teal-400" />
            <span className="text-teal-400 font-semibold">Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about HackUNCP 2026. Can&apos;t find what
            you&apos;re looking for?
            <br />
            Reach out to us directly!
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar category navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-3">
              {Object.entries(faqCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key as keyof FAQCategories)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 group ${
                    activeCategory === key
                      ? `bg-gradient-to-r ${category.color} border-transparent text-white shadow-lg`
                      : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`transition-colors duration-300 ${
                        activeCategory === key
                          ? "text-white"
                          : "text-gray-400 group-hover:text-teal-400"
                      }`}
                    >
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{category.title}</h3>
                      <p
                        className={`text-sm transition-colors duration-300 ${
                          activeCategory === key
                            ? "text-white/80"
                            : "text-gray-500"
                        }`}
                      >
                        {category.questions.length} questions
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* FAQ items display area */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${currentCategory.color}`}>
                  {currentCategory.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {currentCategory.title}
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {currentQuestions.map((faq: FAQ) => (
                <div
                  key={faq.id}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300 group"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                  >
                    <h4 className="text-lg font-semibold text-white pr-4 group-hover:text-teal-300 transition-colors duration-200">
                      {faq.question}
                    </h4>
                    <div
                      className={`flex-shrink-0 transition-all duration-300 ${
                        openFAQ === faq.id
                          ? "text-teal-400 rotate-180"
                          : "text-gray-400 group-hover:text-teal-400"
                      }`}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFAQ === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-5">
                      <div className="border-t border-white/10 pt-4">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact section */}
        <div className="mt-20 bg-gradient-to-r from-teal-500/10 to-amber-500/10 rounded-2xl p-8 md:p-12 border border-white/10 text-center backdrop-blur-sm">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is here to help! Reach out to us and we&apos;ll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:team@hackuncp.com"
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-amber-500 text-white font-semibold rounded-full hover:from-teal-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Email: team@hackuncp.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}