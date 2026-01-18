# PASA Productions - Codebase Context

## Project Overview
**Type**: Portfolio/Showcase Website for a Production House
**Framework**: Next.js 13.5.4 with React 18.2.0
**Language**: TypeScript 5.2.2
**Styling**: Tailwind CSS 3.3.3
**Package Manager**: pnpm

## Directory Structure

```
pasa-productions/
├── app/                          # Next.js App Router
│   ├── components/               # App-level components (nav, particles, card, mdx, analytics)
│   ├── contact/page.tsx          # Contact page
│   ├── projects/
│   │   ├── page.tsx              # Projects listing with search/filter/pagination
│   │   └── [slug]/page.tsx       # Dynamic project detail page
│   ├── layout.tsx                # Root layout with metadata & fonts
│   └── page.tsx                  # Home/landing page
├── components/                   # Reusable components
│   ├── CategoryFilter.tsx        # Project category dropdown
│   ├── FeaturedProjects.tsx      # Auto-scrolling carousel
│   ├── Pagination.tsx            # Pagination component
│   ├── ProjectCard.tsx           # Project card with YouTube embed
│   ├── SearchBar.tsx             # Debounced search
│   └── StatsCounter.tsx          # Animated statistics
├── lib/
│   └── projects.ts               # Project data loading & filtering functions
├── hooks/
│   └── useDebounce.ts            # Debounce hook
├── util/
│   └── mouse.ts                  # Mouse position tracking hook
├── types/
│   ├── index.ts                  # Project interface
│   └── mdx.d.ts                  # MDX type declarations
├── content/projects/             # MDX project content files
├── public/                       # Static assets (favicon, fonts)
└── Configuration files
```

## Key Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Hero landing page with services, featured work, stats, contact CTA |
| `app/layout.tsx` | Root layout with metadata, font loading (Inter & CalSans) |
| `app/projects/page.tsx` | Projects listing with search, category filter, pagination |
| `app/projects/[slug]/page.tsx` | Project detail page with YouTube, credits, equipment, awards |
| `app/contact/page.tsx` | Contact page with Instagram & email cards |
| `lib/projects.ts` | Core data layer: getAllProjects, getProjectBySlug, searchProjects, etc. |
| `app/components/nav.tsx` | Navigation with scroll-based visibility |
| `app/components/particles.tsx` | Canvas-based animated particle background |

## Tech Stack

### Core
- Next.js 13.5.4 (App Router)
- React 18.2.0
- TypeScript 5.2.2

### Content & MDX
- @next/mdx, next-mdx-remote
- gray-matter (YAML front-matter)
- rehype-pretty-code, shiki (syntax highlighting)

### UI & Animation
- framer-motion (animations)
- lucide-react (icons)
- react-wrap-balancer

### Styling
- Tailwind CSS 3.3.3
- @tailwindcss/typography
- Custom animations in tailwind.config.js

## Project Data Structure

```typescript
interface Project {
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
  credits?: { role: string; name: string }[];
  equipment?: string[];
  postProduction?: string[];
  content?: string;
}
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home/landing page |
| `/projects` | Projects grid with search/filter/pagination |
| `/projects/[slug]` | Individual project detail |
| `/contact` | Contact page |

## Architectural Patterns

1. **Server Components by Default** - Pages are async server components
2. **Client Components for Interactivity** - "use client" for search, filters, animations
3. **MDX Content Management** - Projects stored as .mdx files with YAML front matter in `/content/projects/`
4. **URL-based State** - Filter/search/pagination state stored in URL params
5. **No Database** - Static content using MDX files
6. **No API Routes** - Server-side file reading for all data

## Visual Identity

- **Colors**: Black (#000), zinc grays, amber/orange accents (#f59e0b, #f97316)
- **Fonts**: CalSans (headings), Inter (body)
- **Animations**: Title reveal, fade-in, fade-left/right, scroll carousel
- **Effects**: Gradient overlays, backdrop blur, particle backgrounds

## Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm fmt      # Format/lint with Rome
```

## Adding New Projects

Create a new `.mdx` file in `/content/projects/` with front matter:

```mdx
---
title: "Project Title"
description: "Project description"
date: "2024-01-01"
published: true
featured: false
category: "Commercial"
youtubeUrl: "https://www.youtube.com/watch?v=..."
duration: "2:30"
client: "Client Name"
director: "Director Name"
---

Optional MDX content here...
```
