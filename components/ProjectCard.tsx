import Link from 'next/link'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative overflow-hidden rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:transform hover:-translate-y-1"
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
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-sm text-amber-500/90">{project.category}</span>
          <time className="text-sm text-zinc-400">
            {new Date(project.date).toLocaleDateString()}
          </time>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-500/90 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-zinc-400 line-clamp-2">{project.description}</p>
      </div>
    </Link>
  )
} 