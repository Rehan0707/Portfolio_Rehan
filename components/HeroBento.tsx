"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { profile } from "@/lib/data";
import { Magnetic } from "./primitives/Magnetic";

const ROLES = ["iOS Developer", "Product Builder", "Founder"] as const;

function RoleCycler() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block overflow-hidden align-bottom h-[1.15em] w-[14ch]">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLES[index]}
          className="absolute inset-0 text-gradient font-bold"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function HeroBento() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-4 pb-24 pt-28 sm:px-6 md:pt-32"
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        {/* ── Hero copy ── */}
        <div className="flex flex-col justify-between min-h-[460px]">
          <div>
            {/* Role cycling eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 text-sm font-semibold text-muted"
            >
              <span>{profile.name}</span>
              <span className="text-line">·</span>
              <RoleCycler />
            </motion.div>

            <h1 className="mt-4 font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
              {["Building products", "that improve", "everyday life."].map(
                (line, i) => (
                  <span key={i} className="block overflow-hidden">
                    <motion.span
                      className="block"
                      initial={{ y: "110%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        duration: 0.9,
                        delay: 0.15 + i * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {i === 2 ? (
                        <span className="text-gradient font-bold">{line}</span>
                      ) : (
                        line
                      )}
                    </motion.span>
                  </span>
                )
              )}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-5 max-w-xl text-sm leading-relaxed text-muted md:text-base"
            >
              {profile.description}
            </motion.p>
          </div>

          <div className="mt-8 flex flex-col gap-6">


            <div className="flex flex-wrap items-center gap-5">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap items-center gap-3"
              >
                <Magnetic strength={0.3}>
                  <a
                    href="#projects"
                    className="inline-flex h-11 items-center gap-1.5 rounded-full bg-ink px-6 text-sm font-semibold text-white shadow-card transition-all hover:shadow-glow"
                  >
                    View Projects <ArrowUpRight size={16} />
                  </a>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <a
                    href={profile.resume}
                    download
                    className="inline-flex h-11 items-center gap-1.5 rounded-full border border-line bg-white/70 px-5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5"
                  >
                    <Download size={15} /> Resume
                  </a>
                </Magnetic>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex gap-2"
              >
                {[
                  { icon: Github,   href: profile.github,              label: "GitHub"   },
                  { icon: Linkedin, href: profile.linkedin,            label: "LinkedIn" },
                  { icon: Mail,     href: `mailto:${profile.email}`,   label: "Email"    },
                ].map(({ icon: Icon, href, label }) => (
                  <Magnetic key={label} strength={0.4}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white/70 text-ink transition-all hover:-translate-y-0.5 hover:shadow-glow"
                    >
                      <Icon size={17} />
                    </a>
                  </Magnetic>
                ))}
              </motion.div>
            </div>

          </div>
        </div>

        {/* ── Interactive memoji ── */}
        <HeroMemoji />
      </div>
    </section>
  );
}

// ── Interactive 3D memoji ───────────────────────────────────────────────────
// Floats, turns to face the cursor, catches a moving light sheen. On hover it
// swaps to a waving pose and a thought cloud pops up with an Apple-style "hello".
// Pure CSS/Framer over transparent memoji PNGs — no phone frame.
const MEMOJI_DEFAULT = profile.heroPhoto; // "/rehan.png"
const MEMOJI_WAVE = "/rehan-wave.png";
const HELLO_SRC = "/hello.svg";

function HeroMemoji() {
  const ref = useRef<HTMLDivElement>(null);

  const [hovered, setHovered] = useState(false);
  const [waveErrored, setWaveErrored] = useState(false);
  const [helloErrored, setHelloErrored] = useState(false);

  // Server-rendered images can 404 before React attaches onError, so probe them
  // client-side to reliably fall back when the files aren't present yet.
  useEffect(() => {
    const probe = (src: string, mark: () => void) => {
      const img = new window.Image();
      img.onload = () => { if (!img.naturalWidth) mark(); };
      img.onerror = mark;
      img.src = src;
    };
    probe(MEMOJI_WAVE, () => setWaveErrored(true));
    probe(HELLO_SRC, () => setHelloErrored(true));
  }, []);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotX  = useSpring(useTransform(my, [0, 1], [16, -16]), { stiffness: 150, damping: 18 });
  const rotY  = useSpring(useTransform(mx, [0, 1], [-22, 22]), { stiffness: 150, damping: 18 });
  const glowX = useTransform(mx, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(my, [0, 1], ["0%", "100%"]);
  const sheen = useMotionTemplate`radial-gradient(circle at ${glowX} ${glowY}, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 55%)`;
  const auraX = useTransform(mx, [0, 1], ["38%", "62%"]);
  const auraY = useTransform(my, [0, 1], ["38%", "62%"]);
  const aura  = useMotionTemplate`radial-gradient(circle at ${auraX} ${auraY}, rgba(167,139,250,0.32), transparent 60%)`;

  const showWave = hovered && !waveErrored;
  const activeSrc = showWave ? MEMOJI_WAVE : MEMOJI_DEFAULT;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => { mx.set(0.5); my.set(0.5); }}
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex min-h-[320px] items-center justify-center [perspective:1000px]"
    >
      {/* Ambient aura that follows the cursor */}
      <motion.div
        className="absolute inset-0 -z-10 blur-3xl pointer-events-none"
        style={{ background: aura }}
      />

      {/* ── Thought cloud with the Apple-style "hello" ── */}
      <AnimatePresence>
        {hovered ? (
          <motion.div
            key="hello-cloud"
            initial={{ opacity: 0, scale: 0.6, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 8 }}
            transition={{ type: "spring", stiffness: 320, damping: 20 }}
            className="pointer-events-none absolute right-1 top-2 z-30 sm:right-4 sm:top-4"
          >
            <div style={{ filter: "drop-shadow(0 14px 30px rgba(80,60,140,0.22))" }}>
              <div className="relative rounded-[1.7rem] bg-white px-5 py-3.5">
                {/* Puffs to give it a soft cloud silhouette */}
                <span className="absolute -left-2 top-6 h-6 w-6 rounded-full bg-white" />
                <span className="absolute -top-2 left-8 h-5 w-5 rounded-full bg-white" />
                <span className="absolute -top-3 right-10 h-7 w-7 rounded-full bg-white" />
                <span className="absolute -right-2 top-7 h-5 w-5 rounded-full bg-white" />

                {/* Content */}
                <div className="relative flex flex-col items-center gap-0.5">
                  {!helloErrored ? (
                    <img
                      src={HELLO_SRC}
                      alt="hello"
                      draggable={false}
                      onError={() => setHelloErrored(true)}
                      className="h-8 w-auto select-none object-contain"
                    />
                  ) : (
                    <span className="font-serif text-3xl italic leading-none text-ink">
                      hello
                    </span>
                  )}
                  <span className="whitespace-nowrap text-sm font-semibold text-ink">
                    I&apos;m Rehan 👋
                  </span>
                </div>
              </div>

              {/* Trailing thought dots pointing toward the memoji */}
              <span className="absolute -bottom-2.5 left-7 h-3 w-3 rounded-full bg-white" />
              <span className="absolute -bottom-6 left-3 h-2 w-2 rounded-full bg-white" />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Continuous float */}
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Reactive contact shadow */}
        <motion.div
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-[50%] blur-xl pointer-events-none"
          style={{
            width: 210,
            height: 32,
            background:
              "radial-gradient(ellipse, rgba(70,50,130,0.45), transparent 70%)",
          }}
          animate={{ scaleX: [1, 0.82, 1], opacity: [0.55, 0.3, 0.55] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Cursor-tracked 3D rotation + hover / tap reactions */}
        <motion.div
          className="cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 700 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 300, damping: 16 }}
        >
          {/* Fixed box so the default + wave poses share a baseline (object-bottom) */}
          <div className="relative h-[300px] w-[240px] sm:h-[380px] sm:w-[300px] lg:h-[450px] lg:w-[360px]">
            {/* Default (smiling) pose */}
            <img
              src={MEMOJI_DEFAULT}
              alt="Rehan Sanadi memoji"
              draggable={false}
              className="absolute inset-0 h-full w-full select-none object-contain object-bottom transition-opacity duration-300"
              style={{
                filter: "drop-shadow(0 28px 48px rgba(60,40,120,0.4))",
                opacity: showWave ? 0 : 1,
              }}
            />
            {/* Waving pose (revealed on hover) */}
            <img
              src={MEMOJI_WAVE}
              alt="Rehan Sanadi waving"
              draggable={false}
              onError={() => setWaveErrored(true)}
              className="absolute inset-0 h-full w-full select-none object-contain object-bottom transition-opacity duration-300"
              style={{
                filter: "drop-shadow(0 28px 48px rgba(60,40,120,0.4))",
                opacity: showWave ? 1 : 0,
              }}
            />
            {/* Light sheen, masked to whichever pose is showing */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: sheen,
                mixBlendMode: "soft-light",
                WebkitMaskImage: `url(${activeSrc})`,
                maskImage: `url(${activeSrc})`,
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "bottom",
                maskPosition: "bottom",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
