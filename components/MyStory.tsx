"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Flame, Laptop, Briefcase, Trophy, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { SectionHeading } from "./primitives/SectionHeading";

const CHAPTERS = [
  {
    id: 1,
    title: "Chapter 1: Code & Combat",
    subtitle: "Boxing Discipline • B.Tech in AI & Data Science",
    icon: Flame,
    color: "from-red-500/10 via-orange-500/5 to-transparent",
    border: "border-red-500/15",
    pillColor: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
    glowColor: "shadow-red-500/10",
    avatar: "/boxing-memoji.png",
    text: [
      "Before I began compiling code, I stepped into the boxing ring. The ring taught me three rules: maintain absolute focus, react in milliseconds, and build mental resilience. There are no shortcuts when you are sparred against a tough opponent.",
      "When I began my engineering degree in AI & Data Science at Sanjay Ghodawat University, I realized software development requires the exact same grit. Every line of code is a punch thrown, and every refactored file is a defensive roll in training."
    ]
  },
  {
    id: 2,
    title: "Chapter 2: The First Spar",
    subtitle: "Shipping Solace • Designing Yumyoo",
    icon: Laptop,
    color: "from-blue-500/10 via-indigo-500/5 to-transparent",
    border: "border-blue-500/15",
    pillColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    glowColor: "shadow-blue-500/10",
    avatar: "/trophy-memoji.png",
    text: [
      "My coding journey came alive when I decided to build products for real people. I designed and coded Solace, a beautifully minimal health tracker for iOS, managing morning sunlight, hydration, and sleep-rituals in native SwiftUI.",
      "This was followed by Yumyoo, a food pre-ordering app created to eliminate cafes and bakery wait-times, giving small businesses a zero-code digital storefront. Shipped end-to-end, these first apps tested my product execution."
    ]
  },
  {
    id: 3,
    title: "Chapter 3: Entering the Pro Ring",
    subtitle: "Interning at Neuroverse Software Solutions",
    icon: Briefcase,
    color: "from-emerald-500/10 via-teal-500/5 to-transparent",
    border: "border-emerald-500/15",
    pillColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    glowColor: "shadow-emerald-500/10",
    avatar: "/intern-memoji.png",
    text: [
      "Collaborating on professional engineering codebases was my next step. As an intern at Neuroverse, I dove headfirst into production Git workflows, Xcode pull requests, and native SwiftUI layouts.",
      "Working alongside senior developers taught me that code isn't just about problem-solving—it's about architecture, readability, and modular design systems that scale."
    ]
  },
  {
    id: 4,
    title: "Chapter 4: Global Arenas",
    subtitle: "OpenAI Buildathon — Top 17 Finalist Team",
    icon: Trophy,
    color: "from-purple-500/10 via-pink-500/5 to-transparent",
    border: "border-purple-500/15",
    pillColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    glowColor: "shadow-purple-500/10",
    avatar: "/openai-memoji.png",
    text: [
      "In 2026, I put my speed and execution to the test on global stages. At the OpenAI Buildathon, my team competed against hundreds of developers to build real-world AI products, placing in the Top 17 finalists globally.",
      "That same month, I tested my product strategy on global stages. In both code and combat, the goal remains the same: keep leveling up, keep pushing limits, and never stop building."
    ]
  }
];

export default function MyStory() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for 3D card tilt
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotX = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 150, damping: 20 });
  const rotY = useSpring(useTransform(mx, [0, 1], [-10, 10]), { stiffness: 150, damping: 20 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const onMouseLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev + 1) % CHAPTERS.length);
  };

  const handlePrev = () => {
    setActiveTab((prev) => (prev - 1 + CHAPTERS.length) % CHAPTERS.length);
  };

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const active = CHAPTERS[activeTab];
  const Icon = active.icon;

  return (
    <section
      id="story"
      className="relative z-20 mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 md:py-24"
    >
      <SectionHeading
        eyebrow="My Story"
        title="Code & Combat."
        description="Weaving the discipline of a competitive fighter with the logic of a software builder."
      />

      {/* Chapter navigation tabs */}
      <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
        {CHAPTERS.map((ch, i) => {
          const TabIcon = ch.icon;
          const isSelected = activeTab === i;
          return (
            <button
              key={ch.id}
              onClick={() => {
                setActiveTab(i);
                setIsPlaying(false); // Pause auto-play when clicked
              }}
              className={`relative flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                isSelected
                  ? "border-line text-ink bg-white/40 shadow-sm"
                  : "border-transparent text-muted hover:text-ink hover:bg-black/[0.03]"
              }`}
            >
              {isSelected && (
                <motion.span
                  layoutId="active-story-pill"
                  className="absolute inset-0 rounded-full bg-primary/25"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <TabIcon size={13} className="relative z-10 shrink-0" />
              <span className="relative z-10 hidden sm:inline">{ch.title.split(":")[0]}</span>
              <span className="relative z-10 sm:hidden">Ch {ch.id}</span>
            </button>
          );
        })}

        {/* Play/Pause controls */}
        <button
          onClick={() => setIsPlaying((p) => !p)}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white/50 text-muted transition-colors hover:text-ink hover:bg-black/[0.03]"
          title={isPlaying ? "Pause autoplay" : "Play autoplay"}
        >
          {isPlaying ? <Pause size={12} /> : <Play size={12} />}
        </button>
      </div>

      {/* Narrative Card */}
      <div
        ref={containerRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="relative mt-8 [perspective:1000px]"
      >
        <motion.div
          style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1000 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-line bg-white/65 p-8 shadow-glass backdrop-blur-md transition-all duration-300 hover:shadow-glow sm:p-12 md:p-16"
        >
          {/* Animated gradient background mesh based on chapter */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] opacity-10" />
          <motion.div
            animate={{ background: `radial-gradient(circle at 80% 20%, var(--tw-gradient-stops))` }}
            className={`pointer-events-none absolute inset-0 -z-15 bg-gradient-to-br ${active.color} opacity-40 transition-all duration-1000`}
          />

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Story text container */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${active.pillColor}`}>
                      <Icon size={10} />
                      {active.title}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    {active.subtitle}
                  </h3>

                  <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-muted sm:text-base">
                    {active.text.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="mt-8 flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white/70 text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-glow active:scale-95"
                  aria-label="Previous chapter"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white/70 text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-glow active:scale-95"
                  aria-label="Next chapter"
                >
                  <ChevronRight size={16} />
                </button>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted/65 ml-2">
                  {activeTab + 1} / {CHAPTERS.length}
                </span>
              </div>
            </div>

            {/* Visual Memoji container */}
            <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
              <div className="relative h-[240px] w-[240px] sm:h-[280px] sm:w-[280px]">
                {/* Visual glow backdrop mapped to active theme */}
                <motion.div
                  className={`absolute inset-4 -z-10 rounded-full blur-3xl opacity-35 ${active.glowColor} transition-all duration-700`}
                  style={{
                    background: "radial-gradient(circle, var(--accent-glow), transparent 70%)"
                  }}
                />

                {/* Floating motion wrap */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full w-full"
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeTab}
                      src={active.avatar}
                      alt={active.title}
                      initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.85, rotate: 5 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      draggable={false}
                      className="h-full w-full select-none object-contain drop-shadow-[0_16px_24px_rgba(70,50,130,0.25)]"
                    />
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
