"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        {/* Video */}
        <div className="aspect-video relative overflow-hidden bg-zinc-900 mb-4">
          {project.youtubeUrl && (
            <iframe
              src={project.youtubeUrl}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="w-full h-full object-cover pointer-events-none"
            />
          )}
          {/* Overlay to capture clicks */}
          <div className="absolute inset-0 z-10" />
        </div>

        {/* Info */}
        <div>
          <div className="flex items-center justify-between gap-3 mb-1">
            <h3 className="text-sm text-white group-hover:text-amber-400 transition-colors truncate">
              {project.title}
            </h3>
            <span className="text-[10px] uppercase tracking-wider text-zinc-700 shrink-0">
              {project.category}
            </span>
          </div>
          <p className="text-xs text-zinc-600 truncate">
            {project.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
