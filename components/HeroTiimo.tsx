"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Github, Linkedin, Sparkles } from "lucide-react";
import { profile } from "@/lib/data";
import { Magnetic } from "./primitives/Magnetic";
import { Phone } from "./primitives/Phone";
import { HearlyScreen, MedicScreen, YumyooScreen } from "./screens/Screens";

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroTiimo() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-4xl px-5 pt-32 text-center sm:px-8 md:pt-36"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-1.5 text-xs font-medium tracking-wide text-muted backdrop-blur">
          <Sparkles size={13} className="text-accent" />
          {profile.tagline}
        </span>
      </motion.div>

      <h1 className="mx-auto mt-7 max-w-3xl font-serif text-[clamp(2.5rem,8vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.02em] text-balance">
        {["Building products", "that improve", "everyday life."].map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "112%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: 0.12 + i * 0.1, ease }}
            >
              {i === 2 ? <span className="text-gradient">{line}</span> : line}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
      >
        {profile.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.62, duration: 0.6 }}
        className="mt-9 flex flex-wrap items-center justify-center gap-3"
      >
        <Magnetic strength={0.3}>
          <a
            href="#projects"
            className="inline-flex h-12 items-center gap-1.5 rounded-full bg-ink px-6 text-sm font-medium text-white shadow-card transition-all hover:shadow-glow"
          >
            View Projects <ArrowUpRight size={16} />
          </a>
        </Magnetic>
        <Magnetic strength={0.3}>
          <a
            href={profile.resume}
            download
            className="inline-flex h-12 items-center gap-1.5 rounded-full border border-line bg-white/70 px-6 text-sm font-medium text-ink backdrop-blur transition-all hover:-translate-y-0.5"
          >
            <Download size={15} /> Resume
          </a>
        </Magnetic>
        <Magnetic strength={0.45}>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white/70 text-ink backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-glow"
          >
            <Github size={19} />
          </a>
        </Magnetic>
        <Magnetic strength={0.45}>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white/70 text-ink backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-glow"
          >
            <Linkedin size={19} />
          </a>
        </Magnetic>
      </motion.div>

      {/* fanned phone mockups */}
      <div className="relative mt-16 flex h-[420px] items-end justify-center sm:h-[460px]">
        <div className="absolute bottom-0 h-[300px] w-[520px] rounded-full bg-[radial-gradient(ellipse_at_center,#B89BFF,transparent_65%)] opacity-60 blur-2xl" />

        <FanPhone
          screen={<MedicScreen />}
          className="absolute bottom-6 hidden sm:block"
          rotate={-12}
          x={-180}
          delay={0.5}
          scale={0.86}
        />
        <FanPhone
          screen={<HearlyScreen />}
          className="absolute bottom-6 hidden sm:block"
          rotate={12}
          x={180}
          delay={0.6}
          scale={0.86}
        />
        <FanPhone
          screen={<YumyooScreen />}
          className="relative z-10"
          rotate={0}
          x={0}
          delay={0.7}
          scale={1}
        />
      </div>
    </section>
  );
}

function FanPhone({
  screen,
  className,
  rotate,
  x,
  delay,
  scale,
}: {
  screen: React.ReactNode;
  className?: string;
  rotate: number;
  x: number;
  delay: number;
  scale: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 60, rotate: 0, x: 0 }}
      animate={{ opacity: 1, y: 0, rotate, x }}
      transition={{ duration: 1, delay, ease }}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 6 + Math.abs(rotate) * 0.1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ scale }}
      >
        <Phone>{screen}</Phone>
      </motion.div>
    </motion.div>
  );
}
