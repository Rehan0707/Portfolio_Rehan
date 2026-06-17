"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Animated cursor: a small dot that tracks instantly + a soft ring that
 * lags behind with spring physics and grows over interactive elements.
 * Disabled on touch / coarse-pointer devices and for reduced-motion users.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 300, damping: 28, mass: 0.6 });

  useEffect(() => {
    const fine =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;

    setEnabled(true);
    document.body.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [data-cursor='hover']"));
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[90] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink"
        style={{ x, y }}
        animate={{ scale: hovering ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[90] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/70"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          backgroundColor: hovering
            ? "rgba(167,139,250,0.14)"
            : "rgba(167,139,250,0)",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 24 }}
      />
    </>
  );
}
