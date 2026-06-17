"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";
import { SectionHeading } from "./primitives/SectionHeading";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative z-20 mx-auto max-w-3xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading
        eyebrow="FAQ"
        title="Common questions."
        description="Answers to things people usually ask me."
      />

      <div className="mt-12 flex flex-col divide-y divide-line">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:text-accent"
              >
                <span className="font-serif text-base font-semibold leading-snug text-ink sm:text-lg">
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line bg-white/70 text-accent"
                >
                  <Plus size={14} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm leading-relaxed text-muted sm:text-base">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
