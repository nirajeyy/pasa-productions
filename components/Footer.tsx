"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-20 px-8 md:px-16 overflow-hidden">
      {/* Top border with gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
        >
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block group">
              <h3 className="text-2xl font-display mb-4">
                <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text">pasa</span>
              </h3>
            </Link>
            <p className="text-xs text-zinc-600 leading-relaxed max-w-xs">
              Every frame tells a story. We craft visual narratives that resonate and inspire.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-700 mb-6">Navigate</p>
            <nav className="space-y-3">
              <Link href="/team" className="group flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors">
                <span className="w-0 h-px bg-amber-500 group-hover:w-4 transition-all duration-300" />
                <span>Team</span>
              </Link>
              <Link href="/projects" className="group flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors">
                <span className="w-0 h-px bg-amber-500 group-hover:w-4 transition-all duration-300" />
                <span>Projects</span>
              </Link>
              <Link href="/contact" className="group flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors">
                <span className="w-0 h-px bg-amber-500 group-hover:w-4 transition-all duration-300" />
                <span>Contact</span>
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-700 mb-6">Get in touch</p>
            <div className="space-y-3">
              <a
                href="mailto:pasa.productions2025@gmail.com"
                className="block text-sm text-zinc-500 hover:text-white transition-colors"
              >
                pasa.productions2025@gmail.com
              </a>
              <a
                href="https://www.instagram.com/pasa.production/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors"
              >
                <span>Instagram</span>
                <span className="text-amber-500">↗</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-700">
            © {new Date().getFullYear()} Pasa Productions. All rights reserved.
          </p>
          <p className="text-[10px] text-zinc-800">
            Crafted with passion
          </p>
        </motion.div>
      </div>

      {/* Decorative large text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15vw] font-display text-zinc-950 leading-none select-none pointer-events-none overflow-hidden whitespace-nowrap">
        PASA
      </div>
    </footer>
  );
}
