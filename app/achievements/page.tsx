"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Trophy, GraduationCap, Briefcase, ArrowLeft, X, Sparkles, ChevronRight } from "lucide-react";
import { BentoCard } from "@/components/bento/BentoCard";
import Background from "@/components/Background";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface AchievementDetailedItem {
  id: string;
  title: string;
  category: string;
  subCategory: "tech" | "education" | "sports";
  description: string;
  date: string;
  tone: "dark" | "light" | "gradient" | "tint";
  icon: React.ComponentType<{ className?: string; size?: number }>;
  visual?: React.ReactNode;
  story: string;
  tags: string[];
  className?: string;
}

const detailedAchievements: AchievementDetailedItem[] = [
  {
    id: "openai-buildathon",
    title: "OpenAI Buildathon",
    category: "Top 17 Finalist Team",
    subCategory: "tech",
    description: "Ranked in the top 17 teams globally for executing AI product strategy and development under intense hackathon pressure.",
    date: "2026",
    tone: "light",
    icon: Trophy,
    className: "!overflow-visible z-30",
    visual: (
      <div className="absolute -right-6 bottom-0 z-10 pointer-events-none group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 select-none origin-bottom">
        <img
          src="/openai-memoji.png"
          alt="OpenAI Memoji"
          width="170"
          className="object-contain"
        />
      </div>
    ),
    story: "Competing in the OpenAI Buildathon, my team set out to solve ambient noise distractions in online meetings. We created Hearly, an AI assistant that focuses on vocal identity recognition to isolate and clarify only the primary speaker's voice while zeroing out barking dogs, nearby conversations, or keystrokes. I led the product strategy, Figma high-fidelity layouts, and Next.js responsive frontend client, integrating with OpenAI real-time audio channels. We placed in the Top 17 globally out of hundreds of entries, recognized for outstanding UX and product execution.",
    tags: ["OpenAI API", "Product Design", "Figma", "Next.js", "AI Audio"],
  },
  {
    id: "nxtwave-buildathon",
    title: "NxtWave Buildathon",
    category: "First Place Winner",
    subCategory: "tech",
    description: "Secured first place in product design and programming challenge, building working prototypes of real-world utility apps.",
    date: "2025",
    tone: "gradient",
    icon: Trophy,
    className: "!overflow-visible z-30",
    visual: (
      <div className="absolute -right-6 bottom-0 z-10 pointer-events-none group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 select-none origin-bottom">
        <img
          src="/trophy-memoji.png"
          alt="Trophy Memoji"
          width="170"
          className="object-contain"
        />
      </div>
    ),
    story: "At the NxtWave Buildathon, we addressed restaurant queue congestion and wait times. We built Yumyoo, a digital food pre-ordering app that lets customers skip long lines, reserve tables, and checkout in a single interface while offering restaurants order analytics dashboards. I acted as the primary programmer, developing React client views and Node/Firebase data integrations. Our live demo won First Place out of dozens of team submissions, evaluated on technical execution, layout styling, and business feasibility.",
    tags: ["React", "Firebase", "Node.js", "Pre-ordering Systems", "Order Flow"],
  },
  {
    id: "boxing-gold",
    title: "Gold Medalist",
    category: "Boxing Championship",
    subCategory: "sports",
    description: "Won gold in competitive regional boxing, demonstrating physical discipline, mental resilience, and rigorous determination.",
    date: "2024",
    tone: "dark",
    icon: Award,
    className: "!overflow-visible z-30",
    visual: (
      <div className="absolute -right-6 bottom-0 z-10 pointer-events-none group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 select-none origin-bottom">
        <img
          src="/boxing-memoji.png"
          alt="Boxing Memoji"
          width="170"
          className="object-contain"
        />
      </div>
    ),
    story: "Athletics has played a major role in shaping my work ethic. Training in boxing for hours daily taught me physical discipline, tactical strategy, and mental endurance. Competing in the regional championship, I secured the Gold Medal. Winning inside the ring requires extreme focus, adapting to opponent moves, and staying calm under heavy pressure. I bring these same qualities of grit, focus, and systematic iteration to software development and building products.",
    tags: ["Discipline", "Focus", "Strategic Planning", "Endurance"],
  },
  {
    id: "neuroverse-intern",
    title: "Neuroverse Internship",
    category: "Software Developer Intern",
    subCategory: "education",
    description: "Developing native iOS layouts and UI components in SwiftUI, contributing code directly to customer-facing applications.",
    date: "2026",
    tone: "light",
    icon: Briefcase,
    className: "!overflow-visible z-30",
    visual: (
      <div className="absolute -right-6 bottom-0 z-10 pointer-events-none group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 select-none origin-bottom">
        <img
          src="/intern-memoji.png"
          alt="Intern Memoji"
          width="170"
          className="object-contain"
        />
      </div>
    ),
    story: "As a Software Developer Intern at Neuroverse Software Solutions, I contribute directly to native iOS codebases. I build modular SwiftUI layouts, custom navigation frameworks, and refine UI widgets matching our Figma design system. Working under Git workflows, I collaborate on merge requests, complete code reviews, and resolve layout constraints to ensure high responsiveness. This internship has polished my teamwork, agile habits, and production debugging capabilities.",
    tags: ["SwiftUI", "Git & PRs", "Agile Developer", "UI Refinement", "Figma Spec"],
  },
  {
    id: "btech-degree",
    title: "B.Tech in AI & Data Science",
    category: "Academic Studies",
    subCategory: "education",
    description: "Studying core concepts of software engineering, artificial intelligence algorithms, and data modeling at Sanjay Ghodawat University.",
    date: "Active",
    tone: "tint",
    icon: GraduationCap,
    className: "!overflow-visible z-30",
    visual: (
      <div className="absolute -right-6 bottom-0 z-10 pointer-events-none group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 select-none origin-bottom">
        <img
          src="/student-memoji.png"
          alt="Student Memoji"
          width="170"
          className="object-contain"
        />
      </div>
    ),
    story: "My undergraduate coursework in Artificial Intelligence & Data Science at Sanjay Ghodawat University (NIAT) focuses on foundational computer science. I study Data Structures and Algorithms, Object-Oriented Programming, Linear Algebra, Machine Learning models, and Database Management Systems. I apply academic theories to building software, analyzing algorithmic complexity, and designing scalable schemas for personal applications.",
    tags: ["C++ / OOP", "Data Structures", "ML Algorithms", "SQL Databases", "Core CS"],
  },
  {
    id: "niat-entrepreneurship",
    title: "Core Lead — NIAT Entrepreneurship Club",
    category: "Leadership & Products",
    subCategory: "education",
    description: "Leading student entrepreneurship challenges and rapid prototyping, including producing and selling 420 NFC networking cards in 48 hours.",
    date: "2025 - Present",
    tone: "gradient",
    icon: Sparkles,
    className: "!overflow-visible z-30",
    visual: (
      <div className="absolute -right-6 -bottom-6 opacity-25 pointer-events-none group-hover:scale-110 transition-all duration-500 select-none text-white">
        <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M6 9h3M6 12h5" />
          <path d="M18 8c.5 1 .5 3 0 4" />
          <path d="M19.5 6.5c1 1.5 1 4.5 0 6" />
        </svg>
      </div>
    ),
    story: "As a Core Team Lead at the NIAT Entrepreneurship Club, Sanjay Ghodawat University, I organize events designed to push students from theory to rapid action. We design and run intense execution formats, such as 5-minute elevator pitch contests and 48-hour startup sprints.\n\nIn one of our signature 48-hour challenges, our team set out to solve physical networking friction. We designed, sourced, and manufactured custom contactless NFC smart cards that allow instantly sharing LinkedIn profiles, Instagram tags, or portfolios on tap. We managed the end-to-end process: branding, technical configuration of the chip links, and sales strategy. Within 48 hours, we sold 420 cards at ₹100 each (generating ₹42,000 in revenue), demonstrating product-market fit and showing students how to convert a simple utility concept into a profitable, validated local venture.",
    tags: ["Product Strategy", "NFC Technology", "Branding", "Sales & Marketing", "Event Organizing"],
  },
  {
    id: "swift-pune",
    title: "Active Member — Swift Pune",
    category: "Developer Community",
    subCategory: "tech",
    description: "Contributing to the local Swift & iOS developer community in Pune through meetups, technical panels, and collaborative learning.",
    date: "Active",
    tone: "tint",
    icon: Sparkles,
    className: "!overflow-visible z-30",
    visual: (
      <div className="absolute -right-6 -bottom-6 opacity-25 pointer-events-none group-hover:scale-110 transition-all duration-500 select-none text-accent">
        <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </div>
    ),
    story: "Being an active member of Swift Pune, the premier developer community for Apple platforms in Pune, allows me to stay connected with the pulse of iOS development. I participate regularly in technical meetups, workshop sessions, and peer code reviews. Exchanging ideas with senior architects and developers has helped refine my approach to SwiftUI layout performance, modular architecture, and modern Swift features (like concurrency and macro systems). It is a space where I share my own project progress and learn continuously alongside other builders.",
    tags: ["iOS Meetups", "Community Engagement", "Knowledge Sharing", "Swift Concurrency", "SwiftUI Performance"],
  },
];

type FilterType = "all" | "tech" | "education" | "sports";

export default function AchievementsPage() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [selectedItem, setSelectedItem] = useState<AchievementDetailedItem | null>(null);

  // Lock scrolling when details popup is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  const filteredItems = detailedAchievements.filter((item) => {
    if (filter === "all") return true;
    return item.subCategory === filter;
  });

  return (
    <>
      <Preloader />
      <Background />
      <ScrollProgress />
      <Navbar />

      <main className="relative min-h-screen px-4 pb-24 pt-32 sm:px-6 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-6xl">
          {/* Header Controls */}
          <div className="mb-10 flex items-center">
            <motion.a
              href="/"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-2 text-xs font-semibold text-ink backdrop-blur-md shadow-sm transition-all hover:bg-white hover:shadow-glow"
              data-cursor="hover"
            >
              <ArrowLeft size={14} /> Back to Portfolio
            </motion.a>
          </div>

          {/* Title block */}
          <div className="mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent backdrop-blur-sm"
            >
              <Sparkles size={11} className="text-accent" />
              Accolades
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 font-serif text-[clamp(2.5rem,6vw,4rem)] font-bold leading-none tracking-tight text-gradient"
            >
              Milestones & Recognition.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base"
            >
              A timeline of key credentials, engineering triumphs, hackathon placements, and physical sports discipline that shape my product journey.
            </motion.p>
          </div>

          {/* Filters Bar */}
          <div className="mb-12 flex flex-wrap gap-2.5">
            {[
              { id: "all", label: "All Milestones" },
              { id: "tech", label: "Engineering & Hackathons" },
              { id: "education", label: "Education & Career" },
              { id: "sports", label: "Sports & Personal" },
            ].map((btn) => {
              const active = filter === btn.id;
              return (
                <button
                  key={btn.id}
                  onClick={() => setFilter(btn.id as FilterType)}
                  className={`relative rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-all ${
                    active
                      ? "text-white"
                      : "border border-line bg-white/40 text-muted hover:bg-white/70 hover:text-ink"
                  }`}
                  data-cursor="hover"
                >
                  {active && (
                    <motion.span
                      layoutId="activeFilterTab"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 z-0 rounded-full bg-ink"
                    />
                  )}
                  <span className="relative z-10">{btn.label}</span>
                </button>
              );
            })}
          </div>

          {/* Grid Cards */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45 }}
                  className="h-full"
                >
                  <BentoCard
                    tone={item.tone}
                    interactive={true}
                    className={`relative flex flex-col justify-between h-full min-h-[240px] p-6 group cursor-pointer ${item.className || ""}`}
                  >
                    <div onClick={() => setSelectedItem(item)} className="absolute inset-0 z-20" />
                    
                    {item.visual}

                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div className={item.id === "nxtwave-buildathon" || item.id === "boxing-gold" || item.id === "openai-buildathon" || item.id === "neuroverse-intern" || item.id === "btech-degree" || item.id === "niat-entrepreneurship" || item.id === "swift-pune" ? "max-w-[58%]" : ""}>
                        <div className="flex items-center justify-between mb-4">
                          <span className={`rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider border ${
                            item.tone === "dark" || item.tone === "gradient"
                              ? "bg-white/10 text-white border-white/10"
                              : "bg-primary/30 text-accent border-primary/20"
                          }`}>
                            {item.category}
                          </span>
                          <span className={`text-[10px] font-semibold ${
                            item.tone === "dark" || item.tone === "gradient" ? "text-white/60" : "text-muted"
                          }`}>
                            {item.date}
                          </span>
                        </div>

                        <h4 className="font-serif text-lg font-bold leading-tight mb-2">
                          {item.title}
                        </h4>

                        <p className={`text-xs leading-relaxed ${
                          item.tone === "dark" || item.tone === "gradient" ? "text-white/70" : "text-muted"
                        }`}>
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                          item.tone === "dark" || item.tone === "gradient" ? "text-white" : "text-accent"
                        }`}>
                          Read Story <ChevronRight size={12} />
                        </span>
                        
                        <span className={`flex h-8 w-8 items-center justify-center rounded-lg border ${
                          item.tone === "dark" || item.tone === "gradient"
                            ? "bg-white/10 border-white/5 text-white/80"
                            : "bg-white border-line text-accent"
                        }`}>
                          <item.icon size={15} />
                        </span>
                      </div>
                    </div>
                  </BentoCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* Pop Up Detail Story */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/45 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-glow md:p-8"
              role="dialog"
              aria-modal="true"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white/80 text-muted transition-all hover:bg-black/5 hover:text-ink md:right-6 md:top-6"
                aria-label="Close details"
                data-cursor="hover"
              >
                <X size={16} />
              </button>

              <div className="flex flex-col gap-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-accent">
                    <selectedItem.icon size={11} />
                    {selectedItem.category}
                  </span>
                  <span className="ml-3 text-xs font-semibold text-muted">
                    {selectedItem.date}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold leading-tight text-ink md:text-3xl">
                  {selectedItem.title}
                </h3>

                <div className="border-t border-line/60 pt-4">
                  <p className="text-sm leading-relaxed text-muted md:text-base whitespace-pre-line">
                    {selectedItem.story}
                  </p>
                </div>

                <div className="border-t border-line/60 pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted mb-2.5">
                    Skills / Areas Focus
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-line bg-white/70 px-2.5 py-1 text-xs font-medium text-ink shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
