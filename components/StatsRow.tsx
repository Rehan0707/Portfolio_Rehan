"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 4,  suffix: "",  label: "Products Built"     },
  { value: 2,  suffix: "",  label: "Hackathon Wins"     },
  { value: 17, suffix: "",  label: "OpenAI Top Finalists" },
  { value: 1,  suffix: "+", label: "Year Shipping"      },
] as const;

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function StatsRow() {
  return (
    <section className="relative z-10 border-y border-line bg-white/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-1 text-center"
            >
              <p className="font-serif text-4xl font-bold text-ink sm:text-5xl">
                <Counter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs font-medium uppercase tracking-wider text-muted">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
