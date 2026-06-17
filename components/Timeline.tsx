"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { timeline } from "@/lib/data";
import { SectionHeading } from "./primitives/SectionHeading";

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 70%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001,
  });
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const flat = timeline.flatMap((g) =>
    g.items.map((item, idx) => ({ ...item, year: g.year, first: idx === 0 }))
  );

  return (
    <section
      id="experience"
      className="relative z-10 mx-auto max-w-5xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32"
    >
      <SectionHeading
        eyebrow="The journey"
        title="From first build to finalist."
        description="A short timeline of the milestones that shaped where I am today."
      />

      <div ref={ref} className="relative mt-16 pl-2">
        {/* track */}
        <div className="absolute bottom-0 left-[7px] top-2 w-px bg-line sm:left-[calc(8rem+7px)]" />
        {/* progress */}
        <motion.div
          className="absolute left-[7px] top-2 w-px origin-top bg-gradient-to-b from-accent via-glow to-accent sm:left-[calc(8rem+7px)]"
          style={{ scaleY, bottom: 0 }}
        />
        {/* running glow dot */}
        <motion.span
          className="absolute left-[2px] z-10 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_18px] shadow-accent sm:left-[calc(8rem+2px)]"
          style={{ top: glowY }}
        />

        <div className="flex flex-col gap-12">
          {flat.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-8"
            >
              {/* year (left rail on desktop) */}
              <div className="flex items-center gap-3 sm:w-32 sm:justify-end sm:pr-6">
                {item.first ? (
                  <span className="font-serif text-2xl font-bold text-ink sm:text-3xl">
                    {item.year}
                  </span>
                ) : (
                  <span className="hidden sm:block" />
                )}
              </div>

              {/* node */}
              <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-bg sm:left-32">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>

              {/* card */}
              <div className="ml-7 flex-1 rounded-2xl border border-line bg-white/55 p-5 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-glass sm:ml-0">
                <h3 className="font-serif text-lg font-semibold leading-tight">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-accent">
                  {item.org}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
