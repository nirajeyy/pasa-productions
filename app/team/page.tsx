"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import Particles from "../components/particles";

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col relative bg-black">
      {/* Background */}
      <div className="fixed inset-0 bg-black -z-20" />
      <Particles className="fixed inset-0 -z-10 pointer-events-none" quantity={50} />

      {/* Nav */}
      <nav className="fixed top-8 right-8 z-50 flex gap-8">
        <Link href="/" className="group relative text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors">
          <span>Home</span>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 group-hover:w-full transition-all duration-300" />
        </Link>
        <Link href="/projects" className="group relative text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors">
          <span>Projects</span>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 group-hover:w-full transition-all duration-300" />
        </Link>
        <Link href="/contact" className="group relative text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors">
          <span>Contact</span>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 group-hover:w-full transition-all duration-300" />
        </Link>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-8 md:px-16 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-px bg-amber-500" />
              <p className="text-xs uppercase tracking-[0.3em] text-amber-500">The Crew</p>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white leading-[1.1]">
              Meet the
              <br />
              <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text">team</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Team Grid - Placeholder for future photos */}
      <section className="py-20 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {/* Placeholder team members - will be replaced with actual photos */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group"
              >
                <div className="aspect-[3/4] bg-zinc-900 border border-zinc-800 relative overflow-hidden mb-4">
                  {/* Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-zinc-800 text-6xl font-display">?</span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <p className="text-sm text-zinc-600">Coming soon</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center text-zinc-600 text-sm mt-16"
          >
            Team photos coming soon...
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 md:px-16 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-600 mb-8">
              Want to join us?
            </p>

            <h2 className="text-4xl md:text-6xl font-display text-white mb-12">
              Let's create together
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
