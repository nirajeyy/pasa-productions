// Sanity image type
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface Project {
  _id?: string
  _createdAt?: string
  slug: string
  title: string
  description: string
  date: string
  youtubeUrl?: string
  published: boolean
  featured?: boolean
  category: 'Commercial' | 'Documentary' | 'Short Film' | 'TV Show' | 'Music Video'
  client?: string
  duration: string
  thumbnail?: SanityImage
  director?: string
  cinematographer?: string
  productionCompany?: string
  location?: string
  awards?: string[]
  credits?: {
    role: string
    name: string
  }[]
  equipment?: string[]
  postProduction?: string[]
  content?: any[] // Portable Text blocks
}

export interface TeamMember {
  _id?: string
  name: string
  slug?: string
  role: string
  description: string
  image?: SanityImage
  expertise: string[]
  order?: number
}
