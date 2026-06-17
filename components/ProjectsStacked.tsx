"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Clock,
  Fingerprint,
  MapPin,
  ShoppingBag,
  Store,
  Sun,
  Droplet,
  Moon,
  VolumeX,
  Languages,
  FileText,
  Compass,
  Camera,
  Navigation,
  Award,
} from "lucide-react";
import { profile } from "@/lib/data";
import { SectionHeading } from "./primitives/SectionHeading";

interface StorySection {
  title: string;
  body: string[];
}

interface Feature {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
}

interface AcademyMeta {
  origin: string;
  role: string;
  impact: string;
  learnings: string;
}

interface Project {
  id: string;
  tag: string;
  title: string;
  description: string;
  theme: "light" | "dark";
  colorClass: string;
  visual?: React.ReactNode;
  poster?: string;
  brand?: { name: string; tagline: string; logo: string };
  screens?: string[];
  features?: Feature[];
  story?: StorySection[];
  academyMeta?: AcademyMeta;
}

const projects: Project[] = [
  {
    id: "01",
    tag: "FoodTech",
    title: "Skip the queue. Order before you arrive.",
    description:
      "The real problem with food isn't finding it — it's waiting for it. Yumyoo lets people discover nearby stores, pre-order while they travel, and pick up the moment they arrive. For local businesses, it's an instant digital storefront — no website or app required.",
    theme: "light",
    colorClass: "from-[#FFF6F0]/95 to-[#FFE9DC]/95 border-orange-100",
    brand: {
      name: "Yumyoo",
      tagline: "Ready before you arrive.",
      logo: "/yumyoo-logo.png",
    },
    features: [
      { icon: MapPin, label: "Discover nearby stores" },
      { icon: Clock, label: "Pre-order while traveling" },
      { icon: ShoppingBag, label: "Skip the line, pick up instantly" },
      { icon: Store, label: "Instant storefront for businesses" },
    ],
    story: [
      {
        title: "How I identified the problem",
        body: [
          "Travelling and visiting cafés, bakeries, ice-cream shops and restaurants, I kept seeing the same thing: even when people know exactly what they want, they still queue, wait for it to be prepared, and lose 10–30 minutes — on lunch breaks, on the move, everywhere.",
          "The real problem isn't finding food. It's waiting for it.",
          "At the same time, most local food businesses have no website, app or online ordering — so they can't sell online or reach more customers.",
        ],
      },
      {
        title: "The solution I created",
        body: [
          "Yumyoo is a hyperlocal food discovery, pre-order and pickup platform.",
          "Customers discover nearby stores, browse the menu, place an order while travelling, pay online, and pick it up instantly on arrival — the food is already prepared before they reach the store.",
        ],
      },
      {
        title: "What makes Yumyoo different",
        body: [
          "Traditional delivery apps focus on getting food to the customer. Yumyoo focuses on getting customers to food — without the wait.",
        ],
      },
      {
        title: "Value for businesses",
        body: [
          "Any store can create an account, upload its logo and menu, add food photos, receive orders, manage promotions and view analytics — without building a separate website or app.",
          "Yumyoo becomes their digital storefront.",
        ],
      },
    ],
    poster: "/yumyoo-mockup.jpg",
    academyMeta: {
      origin: "Self-initiated (Independent Product)",
      role: "Individual Project (Solo Builder)",
      impact: "Launched at 5 local stores, cut order wait-times by 80%",
      learnings: "Building Yumyoo taught me how to manage real-time updates and model relationships in database design. More importantly, it showed me that software engineering is about identifying real human friction and creating clean, zero-friction workflows to solve it."
    },
  },
  {
    id: "02",
    tag: "AI Productivity",
    title: "Meetings should sound human.",
    description:
      "An AI meeting assistant focused on crystal clear voice quality, background noise reduction, and natural conversation flow.",
    theme: "dark",
    colorClass: "from-[#171424]/95 to-[#0C0A10]/95 border-white/5 text-white",
    brand: {
      name: "Hearly",
      tagline: "Your voice. Only your voice.",
      logo: "/hearly-logo.png",
    },
    features: [
      { icon: Fingerprint, label: "AI Voice Fingerprint Enrollment" },
      { icon: VolumeX, label: "Background Noise & Voice Suppressor" },
      { icon: FileText, label: "Live Transcription & Summaries" },
      { icon: Languages, label: "Real-Time Meeting Translation" },
    ],
    story: [
      {
        title: "The Idea Behind Hearly",
        body: [
          "Online meetings have become a huge part of our daily lives. Whether you’re a student attending lectures, a professional joining remote meetings, or a freelancer working from a café, background noise is everywhere.",
          "Common distractions include barking dogs, traffic sounds, nearby conversations, coffee shop chatter, typing, and household interruptions.",
          "Even with traditional noise cancellation, meetings remain distracting because unwanted background voices and ambient sounds still find their way into conversations."
        ],
      },
      {
        title: "The Insight",
        body: [
          "I noticed that most existing solutions focus solely on removing noise. But the real problem isn’t noise — it’s that meeting platforms don’t know whose voice actually matters.",
          "What if instead of trying to filter out every possible sound, we could teach an AI to recognize the user’s unique voice profile and focus exclusively on that?",
          "That question became the foundation of Hearly."
        ],
      },
      {
        title: "The Solution",
        body: [
          "Hearly is an AI-powered Chrome extension that uses voice fingerprinting and real-time audio processing to ensure that only the user’s voice remains clear during online meetings.",
          "The system learns the user’s unique voice pattern and continuously identifies it during conversations. Any sound that doesn’t match the user’s voice is automatically reduced or suppressed.",
          "The result: Your Voice is clear, and Everything Else is ignored."
        ],
      },
      {
        title: "How It Works & Why It Matters",
        body: [
          "Voice Enrollment: The user speaks for a few seconds, and Hearly creates a unique voice fingerprint using AI.",
          "Real-Time Voice Focus: During meetings, Hearly compares incoming audio against the enrolled voice profile in real-time. Only the user's voice remains active, while background distractions are minimized.",
          "Current meeting tools focus on noise cancellation. Hearly focuses on voice intelligence — keeping only the voice that matters."
        ],
      },
    ],
    poster: "/hearly-mockup.png",
    academyMeta: {
      origin: "Self-initiated (AI Hackathon Prototype)",
      role: "Individual Project (Solo Builder)",
      impact: "Built unique audio fingerprint model filtering secondary voices",
      learnings: "Building Hearly pushed me to understand digital signal processing (DSP), real-time browser audio APIs, and on-device machine learning inference. I learned that rather than filtering out generic background noise, teaching an AI model to uniquely recognize the user's voice leads to a far more effective user experience."
    },
  },
  {
    id: "03",
    tag: "HealthTech",
    title: "Find balance in every day.",
    description:
      "A comprehensive health app that helps users manage their daily habits across sunlight exposure, hydration, and sleep monitoring.",
    theme: "light",
    colorClass: "from-[#FFF6F4]/95 to-[#FFEBE7]/95 border-rose-100",
    brand: {
      name: "Solace",
      tagline: "Holistic Health Tracker",
      logo: "/solace-logo.png",
    },
    features: [
      { icon: Sun, label: "Sunlight exposure session timer" },
      { icon: Droplet, label: "Hydration logging & tracking" },
      { icon: Moon, label: "Deep starry sleep rituals" },
      { icon: Clock, label: "Local reminders & clean dashboard" },
    ],
    story: [
      {
        title: "How I identified the problem",
        body: [
          "Most wellness and health apps are cluttered with advertising, subscriptions, and overwhelming stats. They focus on tracking everything rather than the basic pillars of well-being.",
          "I wanted to build an app that strips away all trackers, ads, and noise, focusing entirely on three natural, fundamental pillars of health: morning sunlight, regular hydration, and sleep preparation."
        ],
      },
      {
        title: "The solution I created",
        body: [
          "Solace is a beautifully minimal holistic health tracker designed following Apple's core design guidelines.",
          "It provides a distraction-free space with simple, satisfying daily tracking circles for sunlight, water, and sleep, helping users build consistent habits through micro-actions."
        ],
      },
      {
        title: "SwiftUI & MVVM architecture",
        body: [
          "Developed natively for iOS in SwiftUI. Built with a clean MVVM structure for robust separation of views and business logic.",
          "Features custom animated canvas rings, background notification scheduling, and fast local persistence."
        ],
      },
    ],
    poster: "/solace-mockup.jpg",
    academyMeta: {
      origin: "Self-initiated (Personal iOS Application)",
      role: "Individual Project (Solo iOS Developer)",
      impact: "Published to the iOS App Store; 100+ active users tracking daily habits",
      learnings: "Building Solace established my foundation in native iOS design. I mastered SwiftUI state management, custom canvas graphics, local database caching, and scheduling local reminders under Apple's MVVM architecture. I learned how to strictly follow Apple's Human Interface Guidelines (HIG) to build interfaces that feel both calm and native."
    },
  },
  {
    id: "04",
    tag: "TravelTech",
    title: "Explore more. Collect memories.",
    description:
      "An AI-powered, map-centric travel companion that helps you discover amazing places in real-time, get smart insights, navigate with AR, and collect stamps as you explore the world.",
    theme: "light",
    colorClass: "from-[#F0FDF4]/95 to-[#DCFCE7]/95 border-emerald-100",
    brand: {
      name: "Roam",
      tagline: "Discover. Explore. Collect.",
      logo: "/roam-logo.png",
    },
    features: [
      { icon: Compass, label: "Real-time place discovery" },
      { icon: Camera, label: "AI Vision Landmark Identifier" },
      { icon: Navigation, label: "Immersive AR Navigation" },
      { icon: Award, label: "Gamified Stamp Collection" },
    ],
    story: [
      {
        title: "How I Got the Idea",
        body: [
          "The idea for Roam came from a common travel problem. Whenever people visit a new city or tourist destination, they often face questions like: 'What interesting places are nearby?', 'What is this monument or landmark?', and 'How do I navigate there easily?'",
          "Most map applications focus purely on utility and navigation, but they don’t make exploration engaging or educational.",
          "I noticed that tourists often walk past historical landmarks without knowing their significance, and discovering hidden gems requires searching through multiple apps like Maps, Wikipedia, blogs, and travel guides. This inspired me to create a single platform that combines exploration, navigation, AI insights, and gamification."
        ],
      },
      {
        title: "The Problem",
        body: [
          "Modern travelers face several challenges: a lack of historical or cultural context about destinations, and a fragmented experience switching between separate search, maps, Wikipedia, and navigation apps.",
          "Furthermore, many amazing local spots go undiscovered because users only visit popular tourist hotspots. Exploration feels passive, and there is no motivational rewarding loop that tracks travel milestones."
        ],
      },
      {
        title: "The Solution",
        body: [
          "Roam is an AI-powered travel companion that transforms navigation into an interactive exploration experience. Instead of simply helping users reach destinations, Roam helps them discover, learn, and remember places.",
          "It integrates MapKit, geofencing, custom SwiftUI components, and native iOS capabilities to deliver a fluid, native user experience."
        ],
      },
      {
        title: "Core Features",
        body: [
          "Real-Time Discovery & AI Vision: Users can view nearby landmarks on a live map and use AI Vision to scan and instantly identify monuments through their camera.",
          "AR Navigation & Live View: Navigate the world effortlessly with visual AR cues mapped onto streets.",
          "Gamified Rewards & Stamps: Visit physical locations to unlock collectible Stamps, which are added to a personalized travel history book automatically."
        ],
      },
    ],
    poster: "/roam-mockup.jpg",
    academyMeta: {
      origin: "Self-initiated (Apple Student Challenge Candidate)",
      role: "Individual Project (Solo iOS Developer)",
      impact: "Completed high-fidelity functional Core ML & MapKit explorer",
      learnings: "Building Roam gave me hands-on experience integrating Apple's map frameworks with advanced hardware APIs. I customized MapKit annotations, coded geofencing callbacks, integrated AR overlays, and ran local Core ML vision classifications. I learned that gamifying passive interactions turns utility tools into highly engaging journeys."
    },
  },
];

export default function ProjectsStacked() {
  return (
    <section
      id="projects"
      className="relative z-20 mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32"
    >
      <SectionHeading
        eyebrow="Selected work"
        title="Four products, one obsession: useful."
        description="Health-tech, AI, FoodTech and travel — built with SwiftUI and shipped end-to-end."
      />

      <div className="relative mt-20 flex flex-col gap-16 sm:gap-24">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

// ── Single stacked card ───────────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const isDark = project.theme === "dark";
  // Pure CSS sticky stacking — each card stacks with a small top offset so the
  // headers of previous cards stay visible.
  const topOffset = `calc(6.5rem + ${index * 2}rem)`;

  return (
    <div
      className={`${
        open ? "relative" : "sticky"
      } w-full rounded-[2.5rem] border backdrop-blur-md shadow-glass hover:shadow-glow transition-all duration-500 overflow-hidden`}
      style={{ top: open ? undefined : topOffset, zIndex: (index + 1) * 10 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] opacity-10 pointer-events-none" />

      <div
        className={`relative bg-gradient-to-br ${project.colorClass} p-8 sm:p-12 md:p-16 flex flex-col gap-10`}
      >
        <div
          className={`flex flex-col gap-10 ${
            project.poster
              ? ""
              : "md:flex-row md:items-center md:justify-between min-h-[380px]"
          }`}
        >
          {/* Left: info */}
          <div className={project.poster ? "max-w-3xl" : "flex-1 max-w-xl"}>
            {project.brand ? (
              <div className="mb-6 flex items-center gap-3">
                <BrandLogo src={project.brand.logo} name={project.brand.name} />
                <div>
                  <p className="font-serif text-xl font-bold leading-none">
                    {project.brand.name}
                  </p>
                  <p className="mt-1 text-xs font-medium text-muted">
                    {project.brand.tagline}
                  </p>
                </div>
              </div>
            ) : null}

            <div className="mb-6 flex items-center gap-3">
              <span
                className={`rounded-full px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider ${
                  isDark
                    ? "bg-white/10 text-accent border border-white/10"
                    : "bg-primary/45 text-accent border border-primary/30"
                }`}
              >
                {project.id} · {project.tag}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
              {project.title}
            </h3>

            <p
              className={`mt-4 text-sm sm:text-base leading-relaxed ${
                isDark ? "text-white/70" : "text-muted"
              }`}
            >
              {project.description}
            </p>

            {project.features ? (
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f.label} className="flex items-center gap-2.5 text-sm">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                        isDark
                          ? "bg-white/10 text-accent"
                          : "border border-black/5 bg-white/70 text-accent"
                      }`}
                    >
                      <f.icon size={15} />
                    </span>
                    <span className={isDark ? "text-white/80" : "text-muted"}>
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}

            {project.academyMeta ? (
              <div className={`mt-6 grid grid-cols-1 gap-4 border-t pt-5 sm:grid-cols-3 ${
                isDark ? "border-white/10" : "border-black/10"
              }`}>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-accent">Origin</p>
                  <p className={`mt-1 text-xs font-semibold ${isDark ? "text-white/95" : "text-ink"}`}>
                    {project.academyMeta.origin}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-accent">Role</p>
                  <p className={`mt-1 text-xs font-semibold ${isDark ? "text-white/95" : "text-ink"}`}>
                    {project.academyMeta.role}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-accent">Key Impact</p>
                  <p className={`mt-1 text-xs font-semibold ${isDark ? "text-white/95" : "text-ink"}`}>
                    {project.academyMeta.impact}
                  </p>
                </div>
              </div>
            ) : null}

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-semibold transition-all ${
                  isDark
                    ? "bg-white text-ink hover:bg-white/90 shadow-md"
                    : "bg-ink text-white hover:bg-ink/90 shadow-md"
                }`}
              >
                View Code
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              {project.story ? (
                <button
                  type="button"
                  onClick={() => setOpen((o) => !o)}
                  aria-expanded={open}
                  className={`inline-flex h-11 items-center gap-2 rounded-full border px-6 text-sm font-semibold transition-all ${
                    isDark
                      ? "border-white/15 text-white hover:bg-white/10"
                      : "border-black/10 text-ink hover:bg-black/[0.04]"
                  }`}
                >
                  {open ? "Hide story" : "Read the story"}
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                  />
                </button>
              ) : null}
            </div>
          </div>

          {/* Right (or full-width) visual */}
          {project.poster ? (
            <div className="overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-xl">
              <img
                src={project.poster}
                alt={`${project.brand?.name ?? project.title} showcase`}
                className="block h-auto w-full"
              />
            </div>
          ) : (
            <div className="flex flex-1 items-center justify-center p-4 md:p-0">
              {project.screens ? (
                <PhoneShowcase screens={project.screens} name={project.brand?.name ?? ""} />
              ) : (
                <div
                  className={`flex aspect-video w-full max-w-[340px] items-center justify-center rounded-2xl border p-6 sm:aspect-square md:aspect-auto ${
                    isDark
                      ? "bg-white/[0.03] border-white/5 shadow-inner"
                      : "bg-black/[0.02] border-black/5 shadow-inner"
                  }`}
                >
                  {project.visual}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Expandable case study */}
        {project.story ? (
          <AnimatePresence initial={false}>
            {open ? (
              <motion.div
                key="story"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div
                  className={`grid gap-x-10 gap-y-8 border-t pt-8 md:grid-cols-2 ${
                    isDark ? "border-white/10" : "border-black/10"
                  }`}
                >
                  {project.story.map((sec) => (
                    <div key={sec.title}>
                      <h4
                        className={`mb-2 font-serif text-lg font-semibold ${
                          isDark ? "text-white" : "text-ink"
                        }`}
                      >
                        {sec.title}
                      </h4>
                      {sec.body.map((p, i) => (
                        <p
                          key={i}
                          className={`mb-2 text-sm leading-relaxed ${
                            isDark ? "text-white/70" : "text-muted"
                          }`}
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  ))}

                  {project.academyMeta ? (
                    <div className={`md:col-span-2 rounded-2xl border p-6 ${
                      isDark
                        ? "bg-white/[0.03] border-white/10"
                        : "bg-white/80 border-black/5"
                    }`}>
                      <h4 className={`mb-2 font-serif text-lg font-bold ${isDark ? "text-white" : "text-ink"}`}>
                        What I Learned & Academy Takeaway
                      </h4>
                      <p className={`text-sm leading-relaxed ${isDark ? "text-white/80" : "text-muted"}`}>
                        {project.academyMeta.learnings}
                      </p>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        ) : null}
      </div>
    </div>
  );
}

// ── App-icon logo with graceful fallback ──────────────────────────────────────
function BrandLogo({ name }: { src: string; name: string }) {
  if (name.toLowerCase() === "roam") {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-emerald-100 shadow-md ring-1 ring-black/5 overflow-hidden">
        <img src="/roam-logo.png" alt="Roam Logo" className="h-full w-full object-cover" />
      </div>
    );
  }
  if (name.toLowerCase() === "hearly") {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black border border-white/10 shadow-md ring-1 ring-white/5 overflow-hidden">
        <img src="/hearly-logo.png" alt="Hearly Logo" className="h-full w-full object-cover" />
      </div>
    );
  }
  if (name.toLowerCase() === "yumyoo") {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF6F0] border border-orange-100 shadow-md ring-1 ring-black/5">
        <svg width="28" height="28" viewBox="0 0 100 100" fill="none" className="text-[#FF5E3A]">
          <rect x="25" y="25" width="12" height="24" rx="6" fill="currentColor" />
          <rect x="63" y="25" width="12" height="24" rx="6" fill="currentColor" />
          <path d="M25 60 C 25 80, 75 80, 75 60" stroke="currentColor" strokeWidth="9" strokeLinecap="round" fill="none" />
        </svg>
      </div>
    );
  }
  if (name.toLowerCase() === "solace") {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF5EE] border border-rose-100 shadow-md ring-1 ring-black/5">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-rose-400">
          <circle cx="12" cy="12" r="5" fill="currentColor" className="text-amber-400 opacity-80" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF8A3D] to-[#FF5E3A] font-serif text-lg font-bold text-white shadow-md">
      {name.charAt(0)}
    </div>
  );
}

// ── Fanned trio of app screenshots ────────────────────────────────────────────
function PhoneShowcase({ screens, name }: { screens: string[]; name: string }) {
  const [errored, setErrored] = useState<Set<number>>(new Set());
  // [splash, home (centre), menu] — centre screen sits upright and in front.
  const layout = [
    { x: -96, rotate: -9, scale: 0.9, z: 2 },
    { x: 0, rotate: 0, scale: 1, z: 3 },
    { x: 96, rotate: 9, scale: 0.9, z: 2 },
  ];

  return (
    <div className="relative flex h-[320px] w-full items-center justify-center sm:h-[400px]">
      {screens.slice(0, 3).map((src, i) => {
        const pose = layout[i] ?? layout[1];
        const isErrored = errored.has(i);
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{ zIndex: pose.z }}
            initial={{ opacity: 0, y: 36, rotate: pose.rotate, scale: pose.scale }}
            whileInView={{ opacity: 1, y: 0, rotate: pose.rotate, scale: pose.scale }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -14, rotate: 0, scale: 1.04, zIndex: 5 }}
            animate={{ x: pose.x }}
          >
            {isErrored ? (
              <div className="flex h-[300px] w-[145px] flex-col items-center justify-center gap-2 rounded-[1.7rem] bg-gradient-to-b from-[#FF8A3D] to-[#FF5E3A] text-white shadow-2xl sm:h-[370px] sm:w-[178px]">
                <span className="font-serif text-2xl font-bold">{name}</span>
                <span className="text-[10px] uppercase tracking-wider opacity-80">
                  Screenshot
                </span>
              </div>
            ) : (
              <img
                src={src}
                alt={`${name} app screen ${i + 1}`}
                draggable={false}
                onError={() =>
                  setErrored((prev) => new Set(prev).add(i))
                }
                className="w-[145px] select-none rounded-[1.7rem] shadow-2xl ring-1 ring-black/5 sm:w-[178px]"
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
