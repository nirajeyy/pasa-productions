"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/pasa.production/",
    icon: Instagram,
  },
  {
    name: "Email",
    href: "mailto:pasa.productions2025@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          {/* Brand */}
          <Link href="/" className="inline-block group mb-6">
            <h3 className="text-xl font-display">
              <span style={{ color: '#f59e0b' }}>pasa</span>{" "}
              <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                productions
              </span>
            </h3>
          </Link>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900/50 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4" />
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} PASA Productions
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
