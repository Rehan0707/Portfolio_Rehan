"use client";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

type Tone = "light" | "tint" | "dark" | "gradient";

const toneClass: Record<Tone, string> = {
  light: "border-line bg-white/60 text-ink",
  tint: "border-line bg-primary/25 text-ink",
  dark: "border-white/10 bg-[#0E0B1A] text-white",
  gradient:
    "border-white/20 bg-gradient-to-br from-[#7C5CFF] via-[#9B7DFF] to-[#B89BFF] text-white",
};

/**
 * The atomic bento tile: glass/tinted/dark surface with a cursor-following
 * spotlight, scroll reveal, and hover lift. Size is controlled by passing
 * grid-span classes through `className`.
 */
export function BentoCard({
  children,
  className,
  tone = "light",
  href,
  delay = 0,
  interactive = true,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: Tone;
  href?: string;
  delay?: number;
  interactive?: boolean;
}) {
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const spotlight = useMotionTemplate`radial-gradient(220px circle at ${mx}px ${my}px, ${
    tone === "dark" || tone === "gradient"
      ? "rgba(255,255,255,0.12)"
      : "rgba(167,139,250,0.18)"
  }, transparent 70%)`;

  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  const Comp = (href ? motion.a : motion.div) as typeof motion.div;

  return (
    <Comp
      // @ts-expect-error href is valid when rendering an anchor
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      ref={ref}
      onMouseMove={onMove}
      data-cursor={href ? "hover" : undefined}
      initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={interactive ? { y: -4 } : undefined}
      className={cn(
        "grain-card group relative flex flex-col overflow-hidden rounded-3xl border p-6 backdrop-blur transition-shadow duration-300",
        toneClass[tone],
        interactive && "hover:shadow-card",
        href && "cursor-pointer",
        className
      )}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlight }}
      />
      <div className="relative flex h-full flex-col">{children}</div>
    </Comp>
  );
}
