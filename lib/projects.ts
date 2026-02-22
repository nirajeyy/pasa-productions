import { client } from '../sanity/lib/client'
import {
  projectsQuery,
  featuredProjectsQuery,
  projectBySlugQuery,
  projectsPaginatedQuery,
  projectsCountQuery,
  projectCategoriesQuery,
  relatedProjectsQuery,
} from '../sanity/lib/queries'
import { Project } from '../types'

const PROJECTS_PER_PAGE = 12

// Re-export Project type for convenience
export type { Project }

export async function getAllProjects(): Promise<Project[]> {
  return client.fetch(projectsQuery)
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return client.fetch(featuredProjectsQuery)
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return client.fetch(projectBySlugQuery, { slug })
}

export async function getProjectsByPage(
  page: number,
  search?: string,
  category?: string
): Promise<{
  projects: Project[]
  totalPages: number
  currentPage: number
}> {
  const start = (page - 1) * PROJECTS_PER_PAGE
  const end = start + PROJECTS_PER_PAGE

  // Prepare search term for Sanity's match operator
  const searchTerm = search ? `*${search}*` : ''

  const [projects, totalCount] = await Promise.all([
    client.fetch(projectsPaginatedQuery, {
      start,
      end,
      search: searchTerm,
      category: category || '',
    }),
    client.fetch(projectsCountQuery, {
      search: searchTerm,
      category: category || '',
    }),
  ])

  const totalPages = Math.ceil(totalCount / PROJECTS_PER_PAGE)

  return {
    projects,
    totalPages,
    currentPage: page,
  }
}

export async function getProjectsByCategory(category: string): Promise<Project[]> {
  const allProjects = await getAllProjects()
  return allProjects.filter((project) => project.category === category)
}

export async function searchProjects(query: string): Promise<Project[]> {
  const { projects } = await getProjectsByPage(1, query)
  return projects
}

export async function getProjectCategories(): Promise<string[]> {
  return client.fetch(projectCategoriesQuery)
}

export async function getRelatedProjects(
  currentProject: Project,
  limit: number = 3
): Promise<Project[]> {
  return client.fetch(relatedProjectsQuery, {
    slug: currentProject.slug,
    category: currentProject.category || '',
    client: currentProject.client || '',
    limit,
  })
}
