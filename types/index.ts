export interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
  youtubeUrl?: string;
  published: boolean;
  featured?: boolean;
  category: "Commercial" | "Documentary" | "Short Film" | "TV Show" | "Music Video";
  client?: string;
  duration: string;
  thumbnail?: string;
  director?: string;
  cinematographer?: string;
  productionCompany?: string;
  location?: string;
  awards?: string[];
  credits?: {
    role: string;
    name: string;
  }[];
  equipment?: string[];
  postProduction?: string[];
  content?: string;
} 