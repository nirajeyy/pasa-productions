"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Particles from "./components/particles";
import FeaturedProjects from "../components/FeaturedProjects";
import StatsCounter from "../components/StatsCounter";
import Footer from "../components/Footer";
import { Project } from "../types";

interface HomeClientProps {
  services: { title: string; description: string }[];
  stats: { iconName: "Award" | "Users" | "Clock" | "Star"; label: string; value: number; suffix: string }[];
  featuredProjects: Project[];
}

export default function HomeClient({
  services,
  stats,
  featuredProjects,
}: HomeClientProps) {
  return (
    <div className="relative min-h-screen">
      {/* Particles behind everything */}
      <div className="fixed inset-0 bg-black -z-20" />
      <Particles className="fixed inset-0 -z-10 pointer-events-none" quantity={100} />

      {/* Simple Nav */}
      <nav className="fixed top-6 right-6 z-50 flex gap-6">
        <Link href="/projects" className="text-xs uppercase tracking-wider text-zinc-500 hover:text-white transition-colors">
          Projects
        </Link>
        <Link href="/contact" className="text-xs uppercase tracking-wider text-zinc-500 hover:text-white transition-colors">
          Contact
        </Link>
      </nav>

      {/* Hero - Cinematic, full viewport */}
      <section className="h-screen flex items-center justify-center relative">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs uppercase tracking-[0.3em] text-zinc-600 mb-8"
          >
            Production House
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="font-display text-[12vw] md:text-[10vw] leading-[0.85] tracking-tight"
          >
            <span className="text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text">
              Pasa
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-2"
          >
            <span className="text-zinc-400 text-lg md:text-xl font-light tracking-[0.15em]">
              Productions
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 text-zinc-600 text-sm max-w-md mx-auto leading-relaxed"
          >
            Every frame tells a story
          </motion.p>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-16 bg-gradient-to-b from-zinc-700 to-transparent"
          />
        </motion.div>
      </section>

      {/* Services - Editorial layout */}
      <section className="py-40 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-amber-500/80 mb-4">
              What we do
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-white leading-tight max-w-2xl">
              Crafting visual stories that resonate
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-xs text-zinc-700 font-mono">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl text-white group-hover:text-amber-400 transition-colors duration-500">
                    {service.title}
                  </h3>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed pl-10">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work - Full bleed */}
      <section className="py-32">
        <div className="px-8 md:px-16 mb-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex items-end justify-between"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-amber-500/80 mb-4">
                  Selected work
                </p>
                <h2 className="text-4xl md:text-5xl font-display text-white">
                  Featured
                </h2>
              </div>
              <Link
                href="/projects"
                className="text-xs uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors duration-500 hidden md:block"
              >
                View all →
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FeaturedProjects projects={featuredProjects} />
        </motion.div>
      </section>

      {/* Stats - Minimal */}
      <section className="py-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <StatsCounter stats={stats} />
        </div>
      </section>

      {/* Contact CTA - Impactful */}
      <section className="py-40 px-8 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 mb-8">
              Ready to create?
            </p>
            <h2 className="text-5xl md:text-7xl font-display text-white mb-12">
              Let's talk
            </h2>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 border border-zinc-800 text-sm uppercase tracking-[0.2em] text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-500"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
