export interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
  youtubeUrl?: string;
  published: boolean;
  // Video production specific fields
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
}

export const projects: Project[] = [
  {
    slug: "showdown",
    title: "Showdown - Action Short Film",
    description: "An intense action-packed short film showcasing dynamic fight choreography and stunning cinematography.",
    date: "2024-03-25",
    youtubeUrl: "https://www.youtube.com/embed/-EHP9jVP_UM?si=f2arGgzXtLbFRWOo",
    published: true,
    category: "Short Film",
    client: "Independent Production",
    duration: "5 minutes",
    thumbnail: "/projects/showdown-thumbnail.jpg",
    director: "Niraj",
    cinematographer: "Niraj",
    productionCompany: "PASA Productions",
    location: "Mumbai, India",
    awards: [
      "Best Action Short Film - Mumbai Film Festival",
      "Best Cinematography - Independent Film Awards"
    ],
    credits: [
      { role: "Director", name: "Niraj" },
      { role: "Cinematographer", name: "Niraj" },
      { role: "Fight Choreographer", name: "Action Team" },
      { role: "Editor", name: "Niraj" }
    ],
    equipment: [
      "Sony FX6",
      "Sigma Art Lenses",
      "DJI Ronin 2",
      "ARRI M18"
    ],
    postProduction: [
      "DaVinci Resolve",
      "Adobe Premiere Pro",
      "Adobe After Effects"
    ]
  },
  {
    slug: "nike-commercial",
    title: "Nike - Just Do It Campaign",
    description: "A high-energy commercial showcasing athletes pushing their limits, featuring stunning slow-motion cinematography and dynamic editing.",
    date: "2024-03-20",
    youtubeUrl: "https://www.youtube.com/embed/b0Ezn5pZE7o?si=1wcUgrn68rhXAZ4T",
    published: true,
    category: "Commercial",
    client: "Nike",
    duration: "60 seconds",
    thumbnail: "/projects/nike-thumbnail.jpg",
    director: "John Smith",
    cinematographer: "Sarah Johnson",
    productionCompany: "PASA Productions",
    location: "Los Angeles, CA",
    awards: [
      "Cannes Lions - Gold Award",
      "D&AD - Wood Pencil",
      "Clio Awards - Silver"
    ],
    credits: [
      { role: "Director", name: "John Smith" },
      { role: "Cinematographer", name: "Sarah Johnson" },
      { role: "Editor", name: "Mike Brown" },
      { role: "Colorist", name: "Lisa Chen" }
    ],
    equipment: [
      "Arri Alexa LF",
      "Cooke S7/i Lenses",
      "DJI Ronin 2",
      "ARRI SkyPanel S360-C"
    ],
    postProduction: [
      "DaVinci Resolve",
      "Adobe After Effects",
      "Nuke"
    ]
  },
  {
    slug: "ocean-documentary",
    title: "Deep Blue - Ocean Conservation",
    description: "A compelling documentary exploring marine life and the impact of climate change on ocean ecosystems, featuring breathtaking underwater cinematography.",
    date: "2024-03-15",
    youtubeUrl: "https://www.youtube.com/embed/example2",
    published: true,
    category: "Documentary",
    client: "National Geographic",
    duration: "45 minutes",
    thumbnail: "/projects/ocean-thumbnail.jpg",
    director: "Emma Wilson",
    cinematographer: "David Lee",
    productionCompany: "PASA Productions",
    location: "Great Barrier Reef, Australia",
    awards: [
      "Emmy Award - Best Documentary",
      "Wildlife Conservation Film Festival - Best Cinematography"
    ],
    credits: [
      { role: "Director", name: "Emma Wilson" },
      { role: "Underwater Cinematographer", name: "David Lee" },
      { role: "Marine Biologist Consultant", name: "Dr. James Miller" }
    ],
    equipment: [
      "RED Komodo 6K",
      "Nauticam Housing",
      "Canon CN-E 30-300mm",
      "DJI Inspire 2"
    ],
    postProduction: [
      "Adobe Premiere Pro",
      "DaVinci Resolve",
      "Adobe Audition"
    ]
  },
  {
    slug: "short-film-memory",
    title: "The Last Memory",
    description: "A touching short film about an elderly man's journey through his fading memories, beautifully shot in black and white.",
    date: "2024-03-10",
    youtubeUrl: "https://www.youtube.com/embed/example3",
    published: true,
    category: "Short Film",
    client: "Independent Production",
    duration: "15 minutes",
    thumbnail: "/projects/memory-thumbnail.jpg",
    director: "Michael Chen",
    cinematographer: "Alex Rodriguez",
    productionCompany: "PASA Productions",
    location: "San Francisco, CA",
    awards: [
      "Sundance Film Festival - Official Selection",
      "Short Film Festival - Best Cinematography"
    ],
    credits: [
      { role: "Director", name: "Michael Chen" },
      { role: "Cinematographer", name: "Alex Rodriguez" },
      { role: "Production Designer", name: "Rachel Green" }
    ],
    equipment: [
      "Sony Venice",
      "Zeiss Supreme Prime Lenses",
      "DJI Ronin 2",
      "ARRI M18"
    ],
    postProduction: [
      "DaVinci Resolve",
      "Adobe Premiere Pro",
      "FilmConvert"
    ]
  },
  {
    slug: "coca-cola-tvc",
    title: "Coca-Cola - Share Happiness",
    description: "A heartwarming TV commercial celebrating moments of connection and joy, featuring a diverse cast and vibrant cinematography.",
    date: "2024-03-05",
    youtubeUrl: "https://www.youtube.com/embed/example4",
    published: true,
    category: "Commercial",
    client: "Coca-Cola",
    duration: "30 seconds",
    thumbnail: "/projects/coca-cola-thumbnail.jpg",
    director: "Lisa Wong",
    cinematographer: "Tom Anderson",
    productionCompany: "PASA Productions",
    location: "New York City, NY",
    awards: [
      "Clio Awards - Gold",
      "ADC Awards - Silver"
    ],
    credits: [
      { role: "Director", name: "Lisa Wong" },
      { role: "Cinematographer", name: "Tom Anderson" },
      { role: "Art Director", name: "Chris Martinez" }
    ],
    equipment: [
      "Arri Alexa Mini LF",
      "Cooke Anamorphic Lenses",
      "DJI Ronin 2",
      "ARRI SkyPanel S360-C"
    ],
    postProduction: [
      "DaVinci Resolve",
      "Adobe After Effects",
      "Nuke"
    ]
  },
  {
    slug: "music-video-dreams",
    title: "Dreams - Music Video",
    description: "A visually stunning music video featuring innovative camera movements and creative visual effects, pushing the boundaries of music video production.",
    date: "2024-03-01",
    youtubeUrl: "https://www.youtube.com/embed/example5",
    published: true,
    category: "Music Video",
    client: "Universal Music",
    duration: "4 minutes",
    thumbnail: "/projects/dreams-thumbnail.jpg",
    director: "James Wilson",
    cinematographer: "Maria Garcia",
    productionCompany: "PASA Productions",
    location: "Los Angeles, CA",
    awards: [
      "MTV Video Music Awards - Best Cinematography",
      "UK Music Video Awards - Best Direction"
    ],
    credits: [
      { role: "Director", name: "James Wilson" },
      { role: "Cinematographer", name: "Maria Garcia" },
      { role: "VFX Supervisor", name: "Peter Chen" }
    ],
    equipment: [
      "RED Komodo 6K",
      "Canon CN-E 30-300mm",
      "DJI Ronin 2",
      "ARRI M18"
    ],
    postProduction: [
      "DaVinci Resolve",
      "Adobe After Effects",
      "Nuke",
      "Cinema 4D"
    ]
  }
]; 