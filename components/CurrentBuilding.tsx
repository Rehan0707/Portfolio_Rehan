"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { building } from "@/lib/data";
import { BentoCard } from "./bento/BentoCard";

export default function CurrentBuilding() {
  return (
    <BentoCard
      tone="light"
      interactive={false}
      className="p-8 sm:p-10 flex flex-col justify-between h-full min-h-[380px]"
    >
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="rounded-full bg-primary/45 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent border border-primary/30">
            Now
          </span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-semibold leading-tight text-ink">
          What I&apos;m building.
        </h3>
        <p className="mt-3 text-sm text-muted">
          Active experiments and products in motion right now.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        {building.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex items-start justify-between gap-4 rounded-2xl border border-line bg-white/70 p-4 shadow-sm transition-all hover:shadow-md hover:border-accent/20"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-serif text-base font-bold text-ink">
                  {item.title}
                </h4>
                <span className="rounded-full bg-primary/30 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent border border-primary/20">
                  {item.tag}
                </span>
              </div>
              <p className="mt-1.5 text-xs text-muted leading-relaxed">
                {item.body}
              </p>
              <div className="mt-2.5 flex items-center gap-1.5 text-[10px] font-semibold text-accent">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                {item.status}
              </div>
            </div>
            <a
              href="https://github.com/Rehan0707"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-line bg-white text-muted hover:text-ink hover:border-accent/40 transition-colors"
            >
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </BentoCard>
  );
}
