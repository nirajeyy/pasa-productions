'use client'

import { useRef } from 'react'
import { Project } from '../types'
import ProjectCard from './ProjectCard'

interface FeaturedProjectsProps {
  projects: Project[]
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
      
      <div 
        className="overflow-hidden hover:pause-animation"
        style={{
          cursor: 'default'
        }}
      >
        <div
          ref={scrollRef}
          className="animate-scroll"
          style={{ 
            display: 'flex',
            gap: '1rem',
            padding: '1rem',
            width: 'max-content'
          }}
        >
          {/* First set of projects */}
          {projects.map((project, index) => (
            <div 
              key={`${project.slug}-${index}`} 
              className="flex-none transform transition-transform hover:scale-105"
              style={{ minWidth: '300px', width: '300px' }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {projects.map((project, index) => (
            <div 
              key={`${project.slug}-duplicate-${index}`} 
              className="flex-none transform transition-transform hover:scale-105"
              style={{ minWidth: '300px', width: '300px' }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 120s linear infinite;
        }

        .pause-animation .animate-scroll {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  )
} 