"use client";

import { skills } from "@/lib/data";
import { BentoCard } from "./bento/BentoCard";

function getSkillLogo(name: string) {
  const normalized = name.toLowerCase();

  switch (normalized) {
    case "swift":
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.5 13.5c-1.3 3.8-5 6.4-9.1 6.4-5.4 0-9.8-4.4-9.8-9.8 0-4.8 3.4-8.6 8-9.4-1.2 1.4-1.8 3.3-1.8 5.6 0 3.3 2.6 5.9 5.9 5.9 2.1 0 4-1.1 5-2.8-.1 3 1.4 5.7 3.3 7.3z" fill="#F05138" />
        </svg>
      );
    case "swiftui":
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#FA7323" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "uikit":
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="4" stroke="#007AFF" strokeWidth="2" />
          <path d="M3 9h18M9 21V9" stroke="#007AFF" strokeWidth="2" />
        </svg>
      );
    case "c++":
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#00599C" strokeWidth="2" />
          <path d="M9 12h6M12 9v6" stroke="#00599C" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "java":
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 18s2-2 4-2 4 2 8 2 4-2 4-2M9 14c0-2-1-4 1-6s3-1 3-3-2-2-2-3l1 1s1.5.5 1.5 2-1.5 3-1.5 5 1 2 1 4-1 2-3 2-2-1-2-2z" stroke="#EA2D42" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "python":
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2c-2.7 0-4.5.3-4.5 1.8V7h4.5v1.3H6.2c-1.5 0-1.8 1-1.8 2.7V14c0 1.5.5 1.8 1.8 1.8h1.3v-2.3c0-1.5.9-2.7 2.3-2.7h4.5v-1.8c0-2.7-.3-4.5-1.8-4.5H12zm1.8 6.2v2.3H12c-1.5 0-2.3-.9-2.3-2.3V7h2.7v1.2h1.4z" fill="#3776AB" />
          <path d="M12 22c2.7 0 4.5-.3 4.5-1.8v-3.2h-4.5v-1.3H17.8c1.5 0 1.8-1 1.8-2.7v-2.8c0-1.5-.5-1.8-1.8-1.8h-1.3v2.3c0 1.5-.9 2.7-2.3 2.7h-4.5v1.8c0 2.7.3 4.5 1.8 4.5H12zm-1.8-6.2v-2.3H12c1.5 0 2.3.9 2.3 2.3v1.2H11.7v-1.2h-1.5z" fill="#FFE873" />
        </svg>
      );
    case "javascript":
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <text x="5" y="17" fill="#000" fontSize="12" fontWeight="bold" fontFamily="sans-serif">JS</text>
        </svg>
      );
    case "firebase":
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.89 15.75L12 2l1.92 3.25L3.89 15.75z" fill="#FFC24C"/>
          <path d="M20.11 15.75L12 2l-1.92 3.25 10.03 10.5z" fill="#FFA000"/>
          <path d="M3.89 15.75L12 22l8.11-6.25L12 2 3.89 15.75z" fill="#DD2C00"/>
        </svg>
      );
    case "apple intelligence":
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="url(#apple-intel-grad-skills)" />
          <defs>
            <radialGradient id="apple-intel-grad-skills" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 12) rotate(90) scale(10)">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="50%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#3B82F6" />
            </radialGradient>
          </defs>
        </svg>
      );
    case "core ml":
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="16" height="16" rx="3" stroke="#8B5CF6" strokeWidth="2" />
          <circle cx="9" cy="9" r="1.5" fill="#8B5CF6" />
          <circle cx="15" cy="9" r="1.5" fill="#8B5CF6" />
          <circle cx="12" cy="15" r="1.5" fill="#8B5CF6" />
          <path d="M9 9l3 6 3-6" stroke="#8B5CF6" strokeWidth="1.5" />
        </svg>
      );
    case "xcode":
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="4" stroke="#1D4ED8" strokeWidth="2" />
          <path d="M9 7l6 10M7 17l10-10" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "git":
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.2 11.8L11.8 2.2a1.3 1.3 0 011.8 0l8.2 8.2a1.3 1.3 0 010 1.8l-9.6 9.6a1.3 1.3 0 01-1.8 0L2.2 13.6a1.3 1.3 0 010-1.8z" fill="#F05032" />
          <circle cx="12" cy="8" r="2" fill="#FFF" />
          <circle cx="12" cy="16" r="2" fill="#FFF" />
          <path d="M12 10v4" stroke="#FFF" strokeWidth="2" />
        </svg>
      );
    case "github":
      return (
        <svg className="w-3.5 h-3.5 fill-[#181717]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.5-1.4-1.9-1.4-1.9-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3z" />
        </svg>
      );
    case "figma":
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 45a30 30 0 0 1 30-30h30v60H60a30 30 0 0 1-30-30z" fill="#F24E1E" />
          <path d="M90 45a30 30 0 0 1-30 30H60V15h30a30 30 0 0 1 30 30z" fill="#FF7262" />
          <path d="M30 105a30 30 0 0 1 30-30h30v60H60a30 30 0 0 1-30-30z" fill="#A259FF" />
          <path d="M60 75h30a30 30 0 0 1 30 30v30a30 30 0 0 1-30 30H60V75z" fill="#1ABC9C" />
          <path d="M30 165a30 30 0 0 1 30-30h30v30a30 30 0 0 1-30 30 30 30 0 0 1-30-30z" fill="#0ACF83" />
        </svg>
      );
    case "vs code":
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.9 6.5l-2.4-1.2c-.3-.2-.7-.2-.9.1L12 13.8V5.3c0-.4-.2-.8-.6-.9L2.3.5c-.4-.2-.9.1-.9.6v21.8c0 .5.5.8.9.6l9.1-3.9c.4-.2.6-.5.6-.9v-8.5l8.6 8.4c.3.3.7.3.9.1l2.4-1.2c.3-.2.4-.6.2-.9l-5.6-5 5.6-5c.2-.3.1-.7-.2-.9z" fill="#007ACC" />
        </svg>
      );
    default:
      return (
        <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
  }
}

function SkillPill({ skill }: { skill: string }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-line bg-white/70 px-4 py-2.5 text-xs font-semibold text-muted shadow-sm">
      <span className="flex items-center justify-center shrink-0">
        {getSkillLogo(skill)}
      </span>
      {skill}
    </span>
  );
}

const row1 = skills.slice(0, Math.ceil(skills.length / 2));
const row2 = skills.slice(Math.ceil(skills.length / 2));

export default function Skills() {
  return (
    <BentoCard
      tone="light"
      interactive={false}
      className="p-8 sm:p-10 flex flex-col justify-between h-full min-h-[380px] overflow-hidden"
    >
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="rounded-full bg-primary/45 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent border border-primary/30">
            Toolkit
          </span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-semibold leading-tight text-ink">
          The stack behind the products.
        </h3>
        <p className="mt-3 text-sm text-muted">
          The languages, frameworks, and Apple technologies I reach for to ship.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        {/* Row 1 — left to right */}
        <div className="group flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-3 pr-3 group-hover:[animation-play-state:paused]">
            {[...row1, ...row1].map((skill, i) => (
              <SkillPill key={`r1-${i}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Row 2 — right to left */}
        <div className="group flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee-reverse items-center gap-3 pr-3 group-hover:[animation-play-state:paused]">
            {[...row2, ...row2].map((skill, i) => (
              <SkillPill key={`r2-${i}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
