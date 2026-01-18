"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/types";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

function getYouTubeId(url: string): string | null {
  if (!url) return null;
  // Handle various YouTube URL formats
  const patterns = [
    /youtube\.com\/embed\/([^?&]+)/,
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/v\/([^?&]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const videoId = project.youtubeUrl ? getYouTubeId(project.youtubeUrl) : null;
  const thumbnailUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        {/* Thumbnail instead of iframe */}
        <div className="aspect-video relative overflow-hidden bg-zinc-900 mb-4">
          {thumbnailUrl ? (
            <>
              <Image
                src={thumbnailUrl}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 300px"
                loading="lazy"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </>
          ) : (
            <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
              <span className="text-zinc-600 text-xs">No preview</span>
            </div>
          )}
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
