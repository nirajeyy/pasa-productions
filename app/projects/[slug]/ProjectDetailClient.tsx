"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../../../components/Footer";
import Nav from "../../../components/Nav";
import ProjectCard from "../../../components/ProjectCard";
import { Project } from "../../../types";

interface ProjectDetailClientProps {
  project: Project;
  relatedProjects: Project[];
}

export default function ProjectDetailClient({
  project,
  relatedProjects,
}: ProjectDetailClientProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col bg-black"
    >
      <Nav />
      <div className="flex-1">
        {/* Header */}
        <div className="px-8 md:px-16 pt-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                href="/projects"
                className="text-xs uppercase tracking-[0.2em] text-zinc-600 hover:text-zinc-400 transition-colors inline-block mb-12"
              >
                ← Back to Projects
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Video - Full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="px-8 md:px-16 mb-16"
        >
          <div className="max-w-6xl mx-auto">
            <div className="aspect-video bg-zinc-900 overflow-hidden">
              {project.youtubeUrl && (
                <iframe
                  src={project.youtubeUrl}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              )}
            </div>
          </div>
        </motion.div>

        {/* Project Info */}
        <div className="px-8 md:px-16 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {/* Main Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="md:col-span-2"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-amber-500/80 mb-4">
                  {project.category}
                </p>
                <h1 className="text-4xl md:text-5xl font-display text-white mb-6">
                  {project.title}
                </h1>
                <p className="text-zinc-500 leading-relaxed max-w-xl">
                  {project.description}
                </p>
              </motion.div>

              {/* Meta */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-8"
              >
                {project.client && (
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-700 mb-2">
                      Client
                    </p>
                    <p className="text-white">{project.client}</p>
                  </div>
                )}

                {project.director && (
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-700 mb-2">
                      Director
                    </p>
                    <p className="text-white">{project.director}</p>
                  </div>
                )}

                {project.duration && (
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-700 mb-2">
                      Duration
                    </p>
                    <p className="text-white">{project.duration}</p>
                  </div>
                )}

                {project.location && (
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-700 mb-2">
                      Location
                    </p>
                    <p className="text-white">{project.location}</p>
                  </div>
                )}

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-700 mb-2">
                    Date
                  </p>
                  <p className="text-white">
                    {new Date(project.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                    })}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Credits */}
            {project.credits && project.credits.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-20 pt-20 border-t border-zinc-900"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 mb-8">
                  Credits
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {project.credits.map((credit, index) => (
                    <div key={index}>
                      <p className="text-xs uppercase tracking-[0.15em] text-zinc-700 mb-1">
                        {credit.role}
                      </p>
                      <p className="text-white">{credit.name}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Equipment */}
            {project.equipment && project.equipment.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-16"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 mb-6">
                  Equipment
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.equipment.map((item, index) => (
                    <span
                      key={index}
                      className="text-sm text-zinc-500 px-4 py-2 border border-zinc-900"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="px-8 md:px-16 py-24 border-t border-zinc-900">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 mb-12">
                  More work
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {relatedProjects.slice(0, 2).map((relatedProject, index) => (
                    <ProjectCard
                      key={relatedProject.slug}
                      project={relatedProject}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </motion.div>
  );
}
