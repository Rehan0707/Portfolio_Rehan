"use client";

import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { AnimatedText } from "./primitives/AnimatedText";
import { Reveal } from "./primitives/Reveal";
import { Magnetic } from "./primitives/Magnetic";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 scroll-mt-24 px-5 py-28 sm:px-8 md:py-40"
    >
      {/* big glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#B89BFF,transparent_65%)] opacity-60 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">

        <h2 className="mt-7 font-serif text-[clamp(2.75rem,9vw,6rem)] font-semibold leading-[0.95] tracking-[-0.02em]">
          <AnimatedText text="Let's build" />
          <br />
          <span className="text-gradient">
            <AnimatedText text="something amazing." delay={0.2} />
          </span>
        </h2>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            Open to internships, collaborations, startups, and product
            opportunities. Have an idea worth building? Let&apos;s talk.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Magnetic strength={0.35}>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-14 items-center gap-2 rounded-full bg-ink px-8 text-base font-medium text-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-glow"
              >
                <Mail size={18} /> Email me <ArrowUpRight size={16} />
              </a>
            </Magnetic>
            <Magnetic strength={0.45}>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-14 w-14 items-center justify-center rounded-full glass text-ink shadow-glass transition-all hover:-translate-y-0.5"
              >
                <Linkedin size={20} />
              </a>
            </Magnetic>
            <Magnetic strength={0.45}>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-14 w-14 items-center justify-center rounded-full glass text-ink shadow-glass transition-all hover:-translate-y-0.5"
              >
                <Github size={20} />
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-8 text-sm text-muted">
            or reach me at{" "}
            <a
              href={`mailto:${profile.email}`}
              className="font-medium text-ink underline-offset-4 hover:underline"
            >
              {profile.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
