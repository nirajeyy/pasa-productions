import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { getAllProjects } from "../lib/projects";
import FeaturedProjects from "../components/FeaturedProjects";
import { Project } from "../types";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default async function Home() {
  const allProjects = await getAllProjects();
  const featuredProjects = allProjects
    .filter((project: Project) => project.featured)
    .sort((a: Project, b: Project) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      {/* Particles Background */}
      <Particles
        className="fixed inset-0 -z-10 animate-fade-in"
        quantity={200}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center justify-center gap-8 py-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500/70 to-orange-500/70 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" /> */}
        {/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}
        <div className="relative z-10 text-center">
          <h1 className="py-3.5 px-0.5 z-10 text-4xl duration-1000 cursor-default animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap">
            <span className="text-transparent bg-gradient-to-r from-amber-500/90 via-orange-500/90 to-amber-500/90 bg-clip-text">pasa</span>{" "}
            <span className="text-transparent bg-white bg-clip-text text-edge-outline">productions</span>
          </h1>
          <div className="mt-8 text-center animate-fade-in">
            <h2 className="text-sm text-zinc-500 font-light tracking-wide">
              Crafting Visual Stories That <span className="text-amber-500/90">Inspire</span>
            </h2>
          </div>
        </div>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      </section>

      {/* Services Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-display">What We Do</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500/70 to-orange-500/70 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Commercials",
                description: "Compelling TV commercials that drive brand engagement",
              },
              {
                title: "Documentaries",
                description: "In-depth storytelling that captures real moments",
              },
              {
                title: "Short Films",
                description: "Creative narratives that leave lasting impressions",
              },
              {
                title: "Music Videos",
                description: "Professional content that elevates your brand",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group p-8 bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300" />
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-zinc-400">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-display">Featured Work</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500/70 to-orange-500/70 mx-auto" />
          </div>
          <FeaturedProjects projects={featuredProjects} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-lg blur opacity-25" />
            <div className="relative bg-zinc-900/50 backdrop-blur-sm p-12 rounded-lg border border-zinc-800">
              <h2 className="text-4xl font-bold text-white mb-6 font-display">Start Your Project</h2>
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
                Let's create something extraordinary together. Your vision, our expertise.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500/90 to-orange-500/90 text-black font-semibold rounded-full hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 ">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-zinc-400 text-sm">
              © {new Date().getFullYear()} PASA Productions. All rights reserved.
            </div>
            <div className="flex items-center gap-8 text-sm">
              <Link 
                href="/projects" 
                className="text-zinc-500 hover:text-zinc-300 relative group duration-500"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500/70 to-orange-500/70 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link 
                href="/contact" 
                className="text-zinc-500 hover:text-zinc-300 relative group duration-500"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500/70 to-orange-500/70 transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
