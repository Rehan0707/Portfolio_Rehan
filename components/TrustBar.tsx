"use client";

import { achievements } from "@/lib/data";
import { Star } from "lucide-react";

export default function TrustBar() {
  const items = [...achievements, ...achievements];
  return (
    <section
      aria-label="Achievements Marquee"
      className="relative z-10 border-y border-line bg-white/40 py-7 backdrop-blur"
    >
      <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.22em] text-muted">
        Recognition &amp; Milestones
      </p>
      <div className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10 group-hover:[animation-play-state:paused]">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-2.5 text-base font-medium text-ink/80 md:text-lg"
            >
              <Star size={16} className="text-accent" fill="currentColor" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
