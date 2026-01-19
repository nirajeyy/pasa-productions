"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, MapPin, Phone, MessageCircle } from "lucide-react";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Particles from "../components/particles";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "pasaproductions.official@gmail.com",
    displayValue: "pasaproductions.official\n@gmail.com",
    href: "mailto:pasaproductions.official@gmail.com",
    cta: "Send us an email",
    external: false,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@pasa.production",
    displayValue: "@pasa.production",
    href: "https://www.instagram.com/pasa.production/",
    cta: "Follow our journey",
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+977 9803140190",
    displayValue: "+977 980-3140190",
    href: "tel:+9779803140190",
    cta: "Give us a call",
    external: false,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+977 9803140190",
    displayValue: "+977 980-3140190",
    href: "https://wa.me/9779803140190",
    cta: "Text on WhatsApp",
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kathmandu, Nepal",
    displayValue: "Kathmandu\nNepal",
    href: "https://maps.google.com/?q=Kathmandu,Nepal",
    cta: "Find us on map",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col relative bg-black">
      {/* Background */}
      <div className="fixed inset-0 bg-black -z-20" />
      <Particles
        className="fixed inset-0 -z-10 pointer-events-none"
        quantity={30}
      />

      <Nav />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 md:px-16 relative">
        {/* Large decorative text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-0 text-[20vw] font-display leading-none select-none pointer-events-none"
        >
          HELLO
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
                Get in touch
              </p>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white leading-[1.1] mb-6">
              Let's create
              <br />
              <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text">
                together
              </span>
            </h1>
            <p className="text-zinc-500 max-w-lg text-lg">
              Ready to bring your vision to life? We'd love to hear about your
              project and explore how we can collaborate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="py-16 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative p-8 md:p-10 bg-zinc-950/50 border border-zinc-900 rounded-2xl overflow-hidden hover:border-zinc-800 transition-all duration-500"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-xl bg-zinc-900 flex items-center justify-center group-hover:bg-amber-500/10 transition-colors duration-500">
                    <method.icon className="w-6 h-6 text-zinc-500 group-hover:text-amber-500 transition-colors duration-500" />
                  </div>
                </div>

                {/* Label */}
                <p className="relative text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-3">
                  {method.label}
                </p>

                {/* Value */}
                <p className="relative text-xl md:text-2xl text-white font-display mb-6 whitespace-pre-line group-hover:text-amber-400 transition-colors duration-300">
                  {method.displayValue}
                </p>

                {/* CTA */}
                <div className="relative flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  <span>{method.cta}</span>
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    {method.external ? "↗" : "→"}
                  </motion.span>
                </div>

                {/* Corner accents */}
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-transparent group-hover:border-amber-500/30 transition-colors duration-500 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-transparent group-hover:border-amber-500/30 transition-colors duration-500 rounded-bl-lg" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-10 md:p-16 border border-zinc-900 rounded-2xl overflow-hidden text-center"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5" />

            <div className="relative">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 mb-4">
                Available for projects worldwide
              </p>
              <h2 className="text-3xl md:text-4xl font-display text-white mb-6">
                Based in{" "}
                <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text">
                  Nepal
                </span>
              </h2>
              <p className="text-zinc-500 max-w-md mx-auto">
                Let's bring your vision to life with cinematic storytelling that
                resonates and inspires audiences around the world.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
