"use client";

import { AnimatedText } from "./AnimatedText";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em]",
              dark
                ? "border-white/15 bg-white/5 text-white/70"
                : "border-line bg-white/50 text-muted"
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <h2
        className={cn(
          "font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl",
          dark ? "text-white" : "text-ink"
        )}
      >
        <AnimatedText text={title} />
      </h2>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-xl text-base leading-relaxed md:text-lg",
              align === "center" && "mx-auto",
              dark ? "text-white/60" : "text-muted"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
