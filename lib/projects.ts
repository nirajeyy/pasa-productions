import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Project } from '../types'

const PROJECTS_PER_PAGE = 12
const projectsDirectory = path.join(process.cwd(), 'content/projects')

export async function getAllProjects(): Promise<Project[]> {
  const filenames = fs.readdirSync(projectsDirectory)
  
  const projects = filenames
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => {
      const filePath = path.join(projectsDirectory, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug: filename.replace(/\.mdx$/, ''),
        ...data,
        content
      } as Project
    })
    .filter(project => project.published)
    .sort((a, b) => {
      // Featured projects come first
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      // Then sort by date within each group
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    
  return projects
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const filePath = path.join(projectsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      ...data,
      content
    } as Project
  } catch (error) {
    return null
  }
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
  let allProjects = await getAllProjects()
  
  // Apply category filter if provided
  if (category) {
    allProjects = allProjects.filter(project => project.category === category)
  }
  
  // Apply search filter if provided
  if (search) {
    const searchTerms = search.toLowerCase().split(' ')
    allProjects = allProjects.filter(project => {
      const searchableText = [
        project.title,
        project.description,
        project.client,
        project.director,
        project.cinematographer,
        project.location,
        project.awards?.join(' '),
        project.equipment?.join(' '),
        project.postProduction?.join(' ')
      ].join(' ').toLowerCase()
      
      return searchTerms.every(term => searchableText.includes(term))
    })
  }
  
  const totalPages = Math.ceil(allProjects.length / PROJECTS_PER_PAGE)
  const startIndex = (page - 1) * PROJECTS_PER_PAGE
  const endIndex = startIndex + PROJECTS_PER_PAGE
  
  return {
    projects: allProjects.slice(startIndex, endIndex),
    totalPages,
    currentPage: page
  }
}

export async function getProjectsByCategory(category: string): Promise<Project[]> {
  const allProjects = await getAllProjects()
  return allProjects.filter(project => project.category === category)
}

export async function searchProjects(query: string): Promise<Project[]> {
  const allProjects = await getAllProjects()
  const searchTerms = query.toLowerCase().split(' ')
  
  return allProjects.filter(project => {
    const searchableText = [
      project.title,
      project.description,
      project.client,
      project.director,
      project.cinematographer,
      project.location,
      project.awards?.join(' '),
      project.equipment?.join(' '),
      project.postProduction?.join(' ')
    ].join(' ').toLowerCase()
    
    return searchTerms.every(term => searchableText.includes(term))
  })
}

export async function getProjectCategories(): Promise<string[]> {
  const allProjects = await getAllProjects()
  const categories = new Set(allProjects.map(project => project.category))
  return Array.from(categories)
}

export async function getRelatedProjects(currentProject: Project, limit: number = 3): Promise<Project[]> {
  const allProjects = await getAllProjects()
  
  return allProjects
    .filter(project => 
      project.slug !== currentProject.slug && 
      (project.category === currentProject.category || 
       project.client === currentProject.client)
    )
    .sort(() => Math.random() - 0.5)
    .slice(0, limit)
} 