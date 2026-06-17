"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Site-wide atmosphere: drifting radial gradient blobs (CSS animation),
 * a soft glow that follows the pointer with spring lag, and a fixed grain
 * overlay so the page never reads as flat. All purely decorative.
 */
export default function Background() {
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const sx = useSpring(glowX, { stiffness: 60, damping: 20, mass: 1 });
  const sy = useSpring(glowY, { stiffness: 60, damping: 20, mass: 1 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    const onMove = (e: MouseEvent) => {
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        glowX.set(e.clientX - 250);
        glowY.set(e.clientY - 250);
        raf.current = null;
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [glowX, glowY]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* base wash */}
      <div className="absolute inset-0 bg-bg" />

      {/* drifting blobs */}
      <div className="absolute -left-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,#CBB6FF,transparent_65%)] opacity-70 blur-3xl animate-blob-drift" />
      <div
        className="absolute -right-32 top-1/4 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,#B89BFF,transparent_65%)] opacity-60 blur-3xl animate-blob-drift"
        style={{ animationDelay: "-7s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,#A78BFA,transparent_65%)] opacity-40 blur-3xl animate-blob-drift"
        style={{ animationDelay: "-14s" }}
      />

      {/* mouse-follow glow */}
      <motion.div
        className="absolute h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(184,155,255,0.5),transparent_60%)] blur-2xl"
        style={{ x: sx, y: sy }}
      />

      {/* grain */}
      <div className="noise" />
    </div>
  );
}
