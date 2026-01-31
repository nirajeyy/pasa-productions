"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { src: "/client-logos/Nabil bank.png", alt: "Nabil Bank" },
  { src: "/client-logos/Ncell-Logo.wine.png", alt: "Ncell" },
  { src: "/client-logos/Buddha_Air-Logo.wine.png", alt: "Buddha Air" },
  { src: "/client-logos/Suzuki-Logo.wine.png", alt: "Suzuki" },
  { src: "/client-logos/Tuborg-Logo.png", alt: "Tuborg" },
  { src: "/client-logos/Nepal_tourism_board-.png", alt: "Nepal Tourism Board" },
  { src: "/client-logos/Foton-Motor-Logo.png", alt: "Foton Motor" },
  { src: "/client-logos/Maiti_Nepal_Logo-.png", alt: "Maiti Nepal" },
  { src: "/client-logos/Teach for nepal.png", alt: "Teach For Nepal" },
  { src: "/client-logos/Yatri motorcycle.png", alt: "Yatri Motorcycle" },
  { src: "/client-logos/Pulsar_dare_venture-.png", alt: "Pulsar Dare Venture" },
  { src: "/client-logos/High Ground Nepal.png", alt: "High Ground Nepal" },
  { src: "/client-logos/Presidential_.png", alt: "Presidential" },
  { src: "/client-logos/Hidden trails adventure.png", alt: "Hidden Trails Adventure" },
  { src: "/client-logos/The hidden treasure.png", alt: "The Hidden Treasure" },
  { src: "/client-logos/65af7a7773356895ccaf9262.png", alt: "Client" },
];

export default function ClientLogos() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-24"
    >
      <div className="flex items-center justify-center gap-4 mb-12">
        <span className="w-12 h-px bg-gradient-to-r from-transparent to-zinc-800" />
        <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-600">
          Brands we've worked with
        </p>
        <span className="w-12 h-px bg-gradient-to-l from-transparent to-zinc-800" />
      </div>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="group flex-shrink-0 mx-4 md:mx-6 flex items-center justify-center h-24 w-40 md:w-48 opacity-60 grayscale invert brightness-200 hover:opacity-100 hover:grayscale-0 hover:invert-0 hover:brightness-100 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={64}
                className="object-contain max-h-16 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
