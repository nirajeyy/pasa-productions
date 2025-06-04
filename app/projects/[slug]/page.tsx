import { Metadata } from 'next'
import { getProjectBySlug, getRelatedProjects } from '../../../lib/projects'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ProjectCard from '../../../components/ProjectCard'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.'
    }
  }
  
  return {
    title: `${project.title} | PASA Productions`,
    description: project.description
  }
}

export default async function ProjectPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug)
  
  if (!project) {
    notFound()
  }
  
  const relatedProjects = await getRelatedProjects(project)
  const mdxSource = project.content ? await serialize(project.content) : null
  
  return (
    <div className="min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="max-w-7xl mx-auto px-10">
        <Link
          href="/projects"
          className="mt-10 inline-flex items-center text-sm text-zinc-400 hover:text-white mb-8 group"
        >
          <svg
            className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Projects
        </Link>

        {/* Hero Section */}
        <div className="mb-16">
          <div className="aspect-video relative rounded-lg overflow-hidden mb-8">
            {project.youtubeUrl && (
              <iframe
                src={project.youtubeUrl}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-cover z-20 relative"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none" />
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
              {project.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-zinc-400 mb-8">
              <span>{project.category}</span>
              <span>•</span>
              <time>{new Date(project.date).toLocaleDateString()}</time>
              {project.duration && (
                <>
                  <span>•</span>
                  <span>{project.duration}</span>
                </>
              )}
            </div>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">{project.description}</p>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <div className="prose prose-invert max-w-none">
              {mdxSource && <MDXRemote source={mdxSource} />}
            </div>
          </div>

          <div className="space-y-8">
            {/* Client Info */}
            {project.client && (
              <div className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-lg border border-zinc-800">
                <h3 className="text-lg font-semibold text-white mb-4">Client</h3>
                <p className="text-zinc-400">{project.client}</p>
              </div>
            )}

            {/* Credits */}
            {project.credits && project.credits.length > 0 && (
              <div className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-lg border border-zinc-800">
                <h3 className="text-lg font-semibold text-white mb-4">Credits</h3>
                <ul className="space-y-2">
                  {project.credits.map((credit, index) => (
                    <li key={index} className="text-zinc-400">
                      <span className="text-amber-500/90">{credit.role}:</span> {credit.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Equipment */}
            {project.equipment && project.equipment.length > 0 && (
              <div className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-lg border border-zinc-800">
                <h3 className="text-lg font-semibold text-white mb-4">Equipment</h3>
                <ul className="space-y-2">
                  {project.equipment.map((item, index) => (
                    <li key={index} className="text-zinc-400">{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Awards */}
            {project.awards && project.awards.length > 0 && (
              <div className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-lg border border-zinc-800">
                <h3 className="text-lg font-semibold text-white mb-4">Awards</h3>
                <ul className="space-y-2">
                  {project.awards.map((award, index) => (
                    <li key={index} className="text-zinc-400">{award}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 