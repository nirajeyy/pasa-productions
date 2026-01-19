"use client";

import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Particles from "../components/particles";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background */}
      <div className="fixed inset-0 bg-black -z-20" />
      <Particles
        className="fixed inset-0 -z-10 pointer-events-none"
        quantity={30}
      />

      <Nav />

      <div className="flex-1 flex items-center relative">
        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute top-20 left-8 md:left-16 w-32 h-32 border-l border-t border-zinc-900"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-20 right-8 md:right-16 w-32 h-32 border-r border-b border-zinc-900"
        />

        {/* Large decorative number */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 right-8 md:right-16 -translate-y-1/2 text-[30vw] font-display leading-none select-none pointer-events-none"
        >
          03
        </motion.div>

        <div className="w-full px-8 md:px-16 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-20 md:mb-32"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="w-8 h-px bg-amber-500" />
                <p className="text-xs uppercase tracking-[0.3em] text-amber-500">
                  Get in touch
                </p>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white mb-6 leading-[1.1]">
                Let's create
                <br />
                <span className="text-transparent bg-gradient-to-r from-zinc-500 to-zinc-700 bg-clip-text">
                  something
                </span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text">
                  together
                </span>
              </h1>
            </motion.div>

            {/* Contact Grid */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
              {/* Email */}
              <motion.a
                href="mailto:pasaproductions.official@gmail.com"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group relative p-8 border border-zinc-900 hover:border-zinc-800 transition-all duration-500"
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-transparent group-hover:border-amber-500 transition-colors duration-500" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-transparent group-hover:border-amber-500 transition-colors duration-500" />

                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-700 mb-4">
                  Email
                </p>
                <p className="text-xl md:text-2xl text-white group-hover:text-amber-400 transition-colors duration-300 mb-4">
                  paspaproductions.official
                  <br />
                  <span className="text-zinc-500">@gmail.com</span>
                </p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  Send email
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/pasa.production/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="group relative p-8 border border-zinc-900 hover:border-zinc-800 transition-all duration-500"
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-transparent group-hover:border-amber-500 transition-colors duration-500" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-transparent group-hover:border-amber-500 transition-colors duration-500" />

                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-700 mb-4">
                  Instagram
                </p>
                <p className="text-xl md:text-2xl text-white group-hover:text-amber-400 transition-colors duration-300 mb-4">
                  @pasa.production
                </p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  Follow us
                  <span className="text-amber-500">↗</span>
                </span>
              </motion.a>
            </div>

            {/* Additional info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-20 pt-12 border-t border-zinc-900"
            >
              <p className="text-xs text-zinc-600 max-w-md">
                Based in Nepal. Available for projects worldwide. Let's bring
                your vision to life with cinematic storytelling.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
