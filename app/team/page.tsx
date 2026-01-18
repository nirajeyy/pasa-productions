"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import Particles from "../components/particles";

const teamMembers = [
  {
    image: "/team/team1.jpg",
    role: "Chief Director & DOP",
  },
  {
    image: "/team/team2.jpg",
    role: "Writer / Photographer",
  },
  {
    image: "/team/team3.jpg",
    role: "Cinematographer / Writer",
  },
  {
    image: "/team/team4.jpg",
    role: "Chief SFX Makeup",
  },
  {
    image: "/team/team5.jpg",
    role: "Manager",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col relative bg-black">
      {/* Background */}
      <div className="fixed inset-0 bg-black -z-20" />
      <Particles
        className="fixed inset-0 -z-10 pointer-events-none"
        quantity={50}
      />

      {/* Nav */}
      <nav className="fixed top-8 right-8 z-50 flex gap-8">
        <Link
          href="/"
          className="group relative text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
        >
          <span>Home</span>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 group-hover:w-full transition-all duration-300" />
        </Link>
        <Link
          href="/projects"
          className="group relative text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
        >
          <span>Projects</span>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 group-hover:w-full transition-all duration-300" />
        </Link>
        <Link
          href="/contact"
          className="group relative text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
        >
          <span>Contact</span>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 group-hover:w-full transition-all duration-300" />
        </Link>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-8 md:px-16 relative">
        {/* Large decorative text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 1 }}
          className="absolute top-20 right-0 text-[25vw] font-display leading-none select-none pointer-events-none"
        >
          CREW
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-px bg-amber-500" />
              <p className="text-xs uppercase tracking-[0.3em] text-amber-500">
                The Crew
              </p>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white leading-[1.1]">
              The faces
              <br />
              <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text">
                behind the lens
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Team - Creative Masonry Layout */}
      <section className="py-16 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          {/* First row - 2 large */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {teamMembers.slice(0, 2).map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="group relative"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.role}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  {/* Role overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-px bg-amber-500" />
                      <p className="text-xs uppercase tracking-[0.2em] text-white/80">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  {/* Corner frame */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/20 group-hover:border-amber-500/50 transition-colors duration-500" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/20 group-hover:border-amber-500/50 transition-colors duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second row - 3 medium */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers.slice(2).map((member, index) => (
              <motion.div
                key={index + 2}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + 0.1 * index }}
                className="group relative"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.role}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  {/* Role overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-px bg-amber-500" />
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/80">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  {/* Corner frame */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-white/20 group-hover:border-amber-500/50 transition-colors duration-500" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-white/20 group-hover:border-amber-500/50 transition-colors duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-8 md:px-16 relative overflow-hidden">
        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"
        />
      </section>

      <Footer />
    </div>
  );
}
