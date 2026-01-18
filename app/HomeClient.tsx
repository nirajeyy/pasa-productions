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
  stats: {
    iconName: "Award" | "Users" | "Clock" | "Star";
    label: string;
    value: number;
    suffix: string;
  }[];
  featuredProjects: Project[];
}

export default function HomeClient({
  services,
  stats,
  featuredProjects,
}: HomeClientProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-black -z-20" />
      <Particles
        className="fixed inset-0 -z-10 pointer-events-none"
        quantity={40}
      />

      {/* Nav */}
      <nav className="fixed top-8 right-8 z-50 flex gap-8">
        <Link
          href="/team"
          className="group relative text-xs uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors"
        >
          <span>Team</span>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 group-hover:w-full transition-all duration-300" />
        </Link>
        <Link
          href="/projects"
          className="group relative text-xs uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors"
        >
          <span>Projects</span>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 group-hover:w-full transition-all duration-300" />
        </Link>
        <Link
          href="/contact"
          className="group relative text-xs uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors"
        >
          <span>Contact</span>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 group-hover:w-full transition-all duration-300" />
        </Link>
      </nav>

      {/* Hero */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Decorative corner elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute top-8 left-8 w-24 h-24 border-l border-t border-zinc-800"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 right-8 w-24 h-24 border-r border-b border-zinc-800"
        />

        <div className="text-center relative">
          {/* Floating label */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute -left-4 md:-left-32 top-1/2 -translate-y-1/2 hidden md:block"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-700 -rotate-90 block">
              Est. 2010
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 mb-6"
          >
            Production House
          </motion.p>

          {/* Main title - simple fade in */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-[18vw] md:text-[12vw] leading-[0.8] tracking-tighter"
          >
            <span className="text-white">
              Pasa
            </span>
          </motion.h1>

          {/* Tagline with line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-20 flex items-center justify-center gap-4"
          >
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-zinc-700" />
            <p className="text-zinc-600 text-xs tracking-widest uppercase">
              Every frame tells a story
            </p>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-zinc-700" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-700">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-amber-500/50 to-transparent"
          />
        </motion.div>
      </section>

      {/* Showreel Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://videos.pasaproductions.com/pasa-productions-story.mp4" type="video/mp4" />
          </video>
          {/* Overlay gradients - strong fade in/out */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black" />
          <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* Decorative frame */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-8 md:inset-16 border border-white/10 pointer-events-none z-10"
        />

        {/* Content */}
        <div className="relative z-10 text-center px-8 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-2xl lg:text-2xl font-display text-white leading-[1.2] mb-6"
          >
            <span className="font-light">"Images remember</span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text">
              what we forget"
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-4 mt-12"
          >
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-white/30" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Nepal
            </span>
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-white/30" />
          </motion.div>
        </div>

        {/* Corner accents */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute top-16 left-16 w-8 h-8 border-l-2 border-t-2 border-amber-500/30 z-10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-16 right-16 w-8 h-8 border-r-2 border-b-2 border-amber-500/30 z-10"
        />
      </section>

      {/* Services */}
      <section className="py-32 md:py-48 px-8 md:px-16 relative">
        {/* Section number */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute top-32 left-8 md:left-16 text-[120px] md:text-[200px] font-display text-zinc-900/50 leading-none select-none pointer-events-none"
        >
          01
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20 md:mb-32"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-px bg-amber-500" />
              <p className="text-xs uppercase tracking-[0.3em] text-amber-500">
                What we do
              </p>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-white leading-[1.1]">
              Crafting visual
              <br />
              <span className="text-transparent bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text">
                stories that resonate
              </span>
            </h2>
          </motion.div>

          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className={`group relative ${index % 2 === 0 ? "md:pr-[30%]" : "md:pl-[30%]"}`}
              >
                {/* Hover line */}
                <div className="absolute left-0 top-0 w-0 h-full bg-gradient-to-b from-amber-500/20 to-transparent group-hover:w-1 transition-all duration-500" />

                <div className="pl-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl md:text-5xl font-display text-zinc-800 group-hover:text-amber-500/30 transition-colors duration-500">
                      0{index + 1}
                    </span>
                    <div className="w-8 h-px bg-zinc-800 group-hover:w-16 group-hover:bg-amber-500 transition-all duration-500" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display text-white mb-4 group-hover:text-amber-400 transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-xl">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center py-16">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-32 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"
        />
      </div>

      {/* Featured Work */}
      <section className="py-32 relative">
        {/* Section number */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute top-32 right-8 md:right-16 text-[120px] md:text-[200px] font-display text-zinc-900/50 leading-none select-none pointer-events-none"
        >
          02
        </motion.div>

        <div className="px-8 md:px-16 mb-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-8"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-px bg-amber-500" />
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-500">
                    Selected work
                  </p>
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-white">
                  Featured
                </h2>
              </div>
              <Link
                href="/projects"
                className="group flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors duration-500"
              >
                <span>View all projects</span>
                <span className="w-6 h-px bg-zinc-700 group-hover:w-10 group-hover:bg-amber-500 transition-all duration-300" />
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

      {/* Stats */}
      <section className="py-32 px-8 md:px-16 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/[0.02] to-transparent pointer-events-none"
        />
        <div className="max-w-5xl mx-auto">
          <StatsCounter stats={stats} />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 md:py-48 px-8 md:px-16 relative">
        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-zinc-900 pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-zinc-900/50 pointer-events-none"
        />

        <div className="max-w-6xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-600 mb-8">
              Ready to create something extraordinary?
            </p>

            <h2 className="text-6xl md:text-8xl lg:text-9xl font-display text-white mb-4">
              Let's
            </h2>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-display text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text mb-16">
              talk
            </h2>

            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-4"
            >
              <span className="px-8 py-4 border border-zinc-800 text-sm uppercase tracking-[0.2em] text-zinc-400 group-hover:text-white group-hover:border-amber-500/50 transition-all duration-500">
                Get in touch
              </span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-amber-500"
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
