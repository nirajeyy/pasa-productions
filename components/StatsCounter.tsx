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
    <div ref={sectionRef} className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: index * 0.15 }}
          className="text-center"
        >
          <div className="text-4xl md:text-5xl font-display text-white mb-2">
            {counts[index]}
            <span className="text-amber-500">{stat.suffix}</span>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
