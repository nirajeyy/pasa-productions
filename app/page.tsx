import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { projects } from "./data/projects";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  const featuredProjects = projects
    .filter((project) => project.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

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
          <ul className="flex items-center justify-center gap-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center">
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <h1 className="py-3.5 px-0.5 z-10 text-4xl duration-1000 cursor-default animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap">
          <span className="text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text">pasa</span>{" "}
          <span className="text-transparent bg-white bg-clip-text text-edge-outline">productions</span>
        </h1>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-500">
            Telling Stories that matters
          </h2>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-display">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Commercials",
                description: "Compelling TV commercials that drive brand engagement",
                // icon: "🎬",
              },
              {
                title: "Documentaries",
                description: "In-depth storytelling that captures real moments",
                // icon: "📽️",
              },
              {
                title: "Short Films",
                description: "Creative narratives that leave lasting impressions",
                // icon: "🎥",
              },
              {
                title: "Music Videos",
                description: "Professional content that elevates your brand",
                // icon: "💼",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="p-6 bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                {/* <div className="text-4xl mb-4">{service.icon}</div> */}
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-zinc-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-display">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group relative overflow-hidden rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  {project.youtubeUrl && (
                    <iframe
                      src={project.youtubeUrl}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-sm text-zinc-400">{project.category}</span>
                    <time className="text-sm text-zinc-400">
                      {Intl.DateTimeFormat(undefined, {
                        dateStyle: "medium",
                      }).format(new Date(project.date))}
                    </time>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-zinc-400">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-display">Start Your Project</h2>
          <p className="text-xl text-zinc-400 mb-8">
            Let's create something extraordinary together
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
