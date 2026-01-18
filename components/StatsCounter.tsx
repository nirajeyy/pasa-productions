"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  iconName: "Award" | "Clock" | "Star" | "Users";
  label: string;
  value: number;
  suffix: string;
}

interface StatsCounterProps {
  stats: Stat[];
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        const duration = 2000;
        const steps = 60;
        const increment = stat.value / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }

          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }, duration / steps);
      });
    }
  }, [isInView, stats]);

  return (
    <div ref={sectionRef} className="relative">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-8 h-px bg-zinc-800" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600">The Numbers</span>
          <span className="w-8 h-px bg-zinc-800" />
        </div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative text-center p-6"
          >
            {/* Decorative corner */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-zinc-800 group-hover:border-amber-500/50 transition-colors duration-500" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-zinc-800 group-hover:border-amber-500/50 transition-colors duration-500" />

            {/* Number */}
            <div className="relative">
              <span className="text-5xl md:text-6xl lg:text-7xl font-display text-white tabular-nums">
                {counts[index]}
              </span>
              <span className="text-3xl md:text-4xl font-display text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text">
                {stat.suffix}
              </span>
            </div>

            {/* Label */}
            <p className="mt-4 text-[10px] md:text-xs uppercase tracking-[0.25em] text-zinc-500 group-hover:text-zinc-400 transition-colors">
              {stat.label}
            </p>

            {/* Hover line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent group-hover:w-3/4 transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
