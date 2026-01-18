"use client";

import { Instagram, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

const contacts = [
  {
    icon: Instagram,
    label: "Instagram",
    value: "@pasa.production",
    href: "https://www.instagram.com/pasa.production/",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "pasa.productions2025@gmail.com",
    href: "mailto:pasa.productions2025@gmail.com",
    external: false,
  },
];

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col bg-black"
    >
      <div className="flex-1 flex items-center">
        <div className="w-full px-8 md:px-16 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                href="/"
                className="text-xs uppercase tracking-[0.2em] text-zinc-600 hover:text-zinc-400 transition-colors inline-block mb-20"
              >
                ← Back
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-20"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-amber-500/80 mb-4">
                Get in touch
              </p>
              <h1 className="text-5xl md:text-7xl font-display text-white mb-6">
                Let's create<br />
                <span className="text-zinc-600">together</span>
              </h1>
              <p className="text-zinc-500 max-w-md">
                Have a project in mind? We'd love to hear about it.
              </p>
            </motion.div>

            <div className="space-y-12">
              {contacts.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group flex items-center gap-6 py-6 border-b border-zinc-900 hover:border-zinc-800 transition-colors"
                >
                  <contact.icon className="w-5 h-5 text-zinc-700 group-hover:text-amber-500 transition-colors" />
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-700 mb-1">
                      {contact.label}
                    </p>
                    <p className="text-xl text-white group-hover:text-amber-400 transition-colors">
                      {contact.value}
                    </p>
                  </div>
                  <span className="text-xs text-zinc-700 group-hover:text-zinc-500 transition-colors">
                    →
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}
