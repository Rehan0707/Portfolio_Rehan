"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock,
  Fingerprint,
  Lock,
  Mic,
  Sun,
  Droplet,
  Moon,
} from "lucide-react";
import { profile } from "@/lib/data";
import { SectionHeading } from "./primitives/SectionHeading";
import { BentoCard } from "./bento/BentoCard";

export default function ProjectsBento() {
  return (
    <section
      id="projects"
      className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 md:py-28"
    >
      <SectionHeading
        eyebrow="Selected work"
        title="Four products, one obsession: useful."
        description="Health-tech, AI, FoodTech and security — built with SwiftUI and shipped end to end."
      />

      <div className="mt-12 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-6">
        {/* YUMYOO — big */}
        <BentoCard
          href={profile.github}
          tone="light"
          className="md:col-span-2 lg:col-span-3 lg:row-span-2"
        >
          <Header index="01" tag="FoodTech" />
          <h3 className="mt-5 font-serif text-3xl font-semibold leading-tight md:text-4xl">
            Skip the queue.
            <br />
            Order before you arrive.
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
            A smart food pre-ordering platform that saves customers time and
            lets restaurants without a website spin up a digital storefront.
          </p>

          {/* mini order UI */}
          <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
            <div className="rounded-2xl bg-gradient-to-br from-accent to-glow p-4 text-white">
              <p className="text-[10px] uppercase tracking-wide opacity-80">
                Ready in
              </p>
              <p className="font-serif text-2xl font-bold">12 min</p>
              <p className="mt-1 flex items-center gap-1 text-[11px]">
                <Clock size={11} /> Pickup 7:30 PM
              </p>
            </div>
            <div className="flex flex-col justify-center gap-2 rounded-2xl border border-line bg-white/70 p-3">
              {[
                ["🍔", "Smash Burger"],
                ["🥗", "Garden Bowl"],
              ].map(([e, n]) => (
                <div key={n} className="flex items-center gap-2 text-xs">
                  <span className="text-base">{e}</span>
                  <span className="font-medium">{n}</span>
                </div>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* HEARLY — gradient, sound waves */}
        <BentoCard
          href={profile.github}
          tone="gradient"
          delay={0.08}
          className="md:col-span-2 lg:col-span-3"
        >
          <Header index="02" tag="AI Productivity" light />
          <h3 className="mt-4 font-serif text-2xl font-semibold leading-tight md:text-3xl">
            Meetings should sound human.
          </h3>
          <p className="mt-2 max-w-sm text-sm text-white/80">
            AI meeting assistant focused on voice clarity and noise reduction.
          </p>
          <div className="mt-auto flex items-end gap-1.5 pt-5">
            {Array.from({ length: 26 }).map((_, i) => (
              <motion.span
                key={i}
                className="w-1.5 flex-1 rounded-full bg-white/80"
                animate={{ height: ["20%", "85%", "35%", "70%", "20%"] }}
                transition={{
                  duration: 1.4 + (i % 5) * 0.18,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.05,
                }}
                style={{ height: "30%" }}
              />
            ))}
            <Mic size={18} className="ml-2 shrink-0" />
          </div>
        </BentoCard>

        {/* SOLACE — summary */}
        <BentoCard
          href={profile.github}
          tone="light"
          delay={0.12}
          className="md:col-span-1 lg:col-span-2"
        >
          <Header index="03" tag="HealthTech" />
          <h3 className="mt-4 font-serif text-2xl font-semibold leading-tight">
            Find balance in every day.
          </h3>
          <div className="mt-auto pt-4 flex flex-col gap-2.5">
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-xl border border-line bg-amber-500/5 p-2 text-center">
                <Sun size={12} className="mx-auto text-amber-500 animate-pulse" />
                <p className="mt-1 text-[9px] font-bold text-amber-900 leading-none">Sun</p>
                <p className="text-[7.5px] text-amber-800/60 font-bold mt-1 leading-none">Pending</p>
              </div>
              <div className="rounded-xl border border-line bg-sky-500/5 p-2 text-center">
                <Droplet size={12} className="mx-auto text-sky-500 animate-bounce" />
                <p className="mt-1 text-[9px] font-bold text-sky-900 leading-none">Water</p>
                <p className="text-[7.5px] text-sky-800/60 font-bold mt-1 leading-none">2.4L</p>
              </div>
              <div className="rounded-xl border border-line bg-indigo-500/5 p-2 text-center">
                <Moon size={12} className="mx-auto text-indigo-500" />
                <p className="mt-1 text-[9px] font-bold text-indigo-900 leading-none">Sleep</p>
                <p className="text-[7.5px] text-indigo-800/60 font-bold mt-1 leading-none">Ready</p>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* SECUREVAULT — dark lock */}
        <BentoCard
          href={profile.github}
          tone="dark"
          delay={0.16}
          className="md:col-span-1 lg:col-span-1"
        >
          <Header index="04" tag="Security" light />
          <div className="my-auto flex items-center justify-center py-4">
            <motion.div
              className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2.4, repeat: Infinity }}
            >
              <Lock size={26} className="text-accent" />
            </motion.div>
          </div>
          <p className="text-center text-xs font-semibold">SecureVault</p>
          <p className="flex items-center justify-center gap-1 text-center text-[11px] text-white/60">
            <Fingerprint size={11} /> Encrypted
          </p>
        </BentoCard>
      </div>
    </section>
  );
}

function Header({
  index,
  tag,
  light = false,
}: {
  index: string;
  tag: string;
  light?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span
        className={`rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-wide ${
          light
            ? "border border-white/20 bg-white/10 text-white/90"
            : "bg-primary/40 text-accent"
        }`}
      >
        {index} · {tag}
      </span>
      <ArrowUpRight
        size={18}
        className={`transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
          light ? "text-white/60" : "text-muted"
        }`}
      />
    </div>
  );
}
