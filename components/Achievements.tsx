"use client";

import { motion } from "framer-motion";
import { BentoCard } from "./bento/BentoCard";
import { SectionHeading } from "./primitives/SectionHeading";
import { Award, Trophy, GraduationCap, Briefcase } from "lucide-react";

interface AchievementItem {
  title: string;
  category: string;
  description: string;
  date: string;
  tone: "dark" | "light" | "gradient" | "tint";
  icon: React.ComponentType<{ className?: string; size?: number }>;
  visual?: React.ReactNode;
  className?: string;
}

const achievementsData: AchievementItem[] = [
  {
    title: "OpenAI Buildathon",
    category: "Top 17 Finalist",
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
          width="160"
          className="object-contain"
        />
      </div>
    ),
  },
  {
    title: "NxtWave Buildathon",
    category: "Winner",
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
          width="160"
          className="object-contain"
        />
      </div>
    ),
  },
  {
    title: "Gold Medalist",
    category: "Boxing",
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
          width="160"
          className="object-contain"
        />
      </div>
    ),
  },
  {
    title: "Neuroverse Internship",
    category: "Software Developer",
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
          width="160"
          className="object-contain"
        />
      </div>
    ),
  },
  {
    title: "B.Tech in AI & Data Science",
    category: "Education",
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
          width="160"
          className="object-contain"
        />
      </div>
    ),
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative z-20 mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32"
    >
      <SectionHeading
        eyebrow="Milestones"
        title="Achievements & Recognition."
        description="Honors, competitive wins, and credentials from hackathons to academic milestones."
      />

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievementsData.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="h-full"
          >
            <BentoCard
              tone={item.tone}
              interactive={true}
              className={`relative flex flex-col justify-between h-full min-h-[220px] p-6 group ${item.className || ""}`}
            >
              {item.visual}
              
              <div className={`relative z-10 ${item.title === "NxtWave Buildathon" || item.title === "Gold Medalist" || item.title === "OpenAI Buildathon" || item.title === "Neuroverse Internship" || item.title === "B.Tech in AI & Data Science" ? "max-w-[58%]" : ""}`}>
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

              <div className="mt-4 flex items-center justify-end relative z-10">
                <span className={`flex h-8 w-8 items-center justify-center rounded-lg border ${
                  item.tone === "dark" || item.tone === "gradient"
                    ? "bg-white/10 border-white/5 text-white/80"
                    : "bg-white border-line text-accent"
                }`}>
                  <item.icon size={15} />
                </span>
              </div>
            </BentoCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
