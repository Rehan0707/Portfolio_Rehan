"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Word-by-word staggered reveal for large editorial headings.
 * Splits on spaces and animates each word with a blur+rise.
 */
export function AnimatedText({
  text,
  className,
  delay = 0,
  once = true,
}: {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  const words = text.split(" ");
  return (
    <span className={cn("inline", className)} aria-label={text}>
      <motion.span
        aria-hidden
        className="inline"
        initial="hidden"
        whileInView="show"
        viewport={{ once, margin: "-10% 0px" }}
        variants={{
          hidden: {},
          show: { transition: { delayChildren: delay, staggerChildren: 0.06 } },
        }}
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "110%", opacity: 0, filter: "blur(8px)" },
                show: {
                  y: "0%",
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {word}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </span>
  );
}
