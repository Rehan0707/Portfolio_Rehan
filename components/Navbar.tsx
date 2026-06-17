"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import { Magnetic } from "./primitives/Magnetic";

const SECTION_IDS = ["about", "projects", "experience", "achievements", "contact"] as const;

function useActiveSection() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 24);
    if (latest > prev && latest > 200 && !open) setHidden(true);
    else setHidden(false);
  });

  return (
    <motion.header
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: hidden ? -120 : 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-3xl items-center justify-between gap-2 rounded-full px-3 py-2 transition-all duration-500 ${
          scrolled ? "glass shadow-glass" : "border border-transparent"
        }`}
      >
        <Magnetic strength={0.25}>
          <a
            href="#main"
            className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold tracking-tight"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-[11px] font-bold text-white">
              RS
            </span>
            <span className="hidden sm:block">Rehan</span>
          </a>
        </Magnetic>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("/#", "").replace("/", "");
            const isActive = active === sectionId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                    isActive ? "text-ink font-semibold" : "text-muted hover:text-ink"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-primary/40"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Magnetic strength={0.3}>
            <a
              href="#contact"
              className="hidden rounded-full bg-ink px-5 py-2 text-sm font-medium text-white transition-all hover:shadow-glow sm:inline-flex"
            >
              Let&apos;s talk
            </a>
          </Magnetic>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/50 text-ink md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute left-4 right-4 top-20 rounded-3xl glass p-3 shadow-glass md:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-base text-ink transition-colors hover:bg-black/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.resume}
                  onClick={() => setOpen(false)}
                  className="mt-1 block rounded-2xl bg-ink px-4 py-3 text-center text-base font-medium text-white"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
