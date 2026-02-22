# PASA Productions - Codebase Context

## Project Overview
**Type**: Portfolio/Showcase Website for a Production House
**Framework**: Next.js 16.1.6 with React 19.2.4
**CMS**: Sanity.io (headless CMS)
**Language**: TypeScript 5.2.2
**Styling**: Tailwind CSS 3.3.3
**Package Manager**: yarn

## Directory Structure

```
pasa-productions/
├── app/                          # Next.js App Router
│   ├── components/               # App-level components (particles, analytics)
│   ├── contact/page.tsx          # Contact page
│   ├── projects/
│   │   ├── page.tsx              # Projects listing with search/filter/pagination
│   │   ├── ProjectsClient.tsx    # Client component for projects page
│   │   └── [slug]/
│   │       ├── page.tsx          # Dynamic project detail page
│   │       └── ProjectDetailClient.tsx
│   ├── studio/[[...tool]]/       # Embedded Sanity Studio at /studio
│   ├── team/
│   │   ├── page.tsx              # Team page (server)
│   │   └── TeamClient.tsx        # Team page (client)
│   ├── layout.tsx                # Root layout with metadata & fonts
│   └── page.tsx                  # Home/landing page
├── components/                   # Reusable components
│   ├── CategoryFilter.tsx        # Project category dropdown
│   ├── ClientLogos.tsx           # Client logo carousel
│   ├── FeaturedProjects.tsx      # Auto-scrolling carousel
│   ├── Footer.tsx                # Site footer
│   ├── Nav.tsx                   # Navigation
│   ├── Pagination.tsx            # Pagination component
│   ├── ProjectCard.tsx           # Project card with YouTube/Sanity thumbnail
│   ├── SearchBar.tsx             # Debounced search
│   └── StatsCounter.tsx          # Animated statistics
├── sanity/                       # Sanity CMS configuration
│   ├── env.ts                    # Environment variables validation
│   ├── lib/
│   │   ├── client.ts             # Sanity client
│   │   ├── image.ts              # Image URL builder
│   │   └── queries.ts            # GROQ queries
│   └── schemas/
│       ├── index.ts              # Schema exports
│       ├── category.ts           # Category document schema
│       ├── project.ts            # Project document schema
│       └── teamMember.ts         # Team member schema
├── lib/
│   ├── projects.ts               # Project data fetching functions
│   └── team.ts                   # Team data fetching functions
├── hooks/
│   └── useDebounce.ts            # Debounce hook
├── util/
│   └── mouse.ts                  # Mouse position hook for particles
├── types/
│   └── index.ts                  # TypeScript interfaces (Project, TeamMember)
├── public/
│   ├── client-logos/             # Client logo images
│   ├── fonts/                    # Custom fonts (CalSans)
│   └── favicon.png               # Site favicon
├── sanity.config.ts              # Sanity Studio configuration
├── sanity.cli.ts                 # Sanity CLI configuration
└── Configuration files
```

## Key Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Hero landing page with services, featured work, stats, contact CTA |
| `app/layout.tsx` | Root layout with metadata, font loading (Inter & CalSans) |
| `app/projects/page.tsx` | Projects listing with search, category filter, pagination |
| `app/projects/[slug]/page.tsx` | Project detail page with YouTube, credits, equipment |
| `app/studio/[[...tool]]/page.tsx` | Embedded Sanity Studio |
| `app/team/page.tsx` | Team members page |
| `lib/projects.ts` | Data layer: getAllProjects, getProjectBySlug, searchProjects, etc. |
| `lib/team.ts` | Data layer: getAllTeamMembers |
| `sanity/lib/queries.ts` | All GROQ queries for Sanity |

## Tech Stack

### Core
- Next.js 16.1.6 (App Router)
- React 19.2.4
- TypeScript 5.2.2

### CMS
- Sanity.io v5 (headless CMS)
- next-sanity (Next.js integration)
- @sanity/image-url (image URL builder)
- @sanity/vision (GROQ query tool)
- @portabletext/react (rich text rendering)

### UI & Animation
- framer-motion (animations)
- lucide-react (icons)
- react-wrap-balancer
- styled-components (required by Sanity)

### Styling
- Tailwind CSS 3.3.3
- @tailwindcss/typography
- Custom animations in tailwind.config.js

## Data Structures

### Project (from Sanity)
```typescript
interface Project {
  _id?: string;
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
  thumbnail?: SanityImage;
  director?: string;
  cinematographer?: string;
  productionCompany?: string;
  location?: string;
  awards?: string[];
  credits?: { role: string; name: string }[];
  equipment?: string[];
  postProduction?: string[];
  content?: any[]; // Portable Text
}
```

### TeamMember (from Sanity)
```typescript
interface TeamMember {
  _id?: string;
  name: string;
  slug?: string;
  role: string;
  description: string;
  image?: SanityImage;
  expertise: string[];
  order?: number;
}
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home/landing page |
| `/projects` | Projects grid with search/filter/pagination |
| `/projects/[slug]` | Individual project detail |
| `/team` | Team members page |
| `/contact` | Contact page |
| `/studio` | Sanity Studio (CMS admin) |

## Architectural Patterns

1. **Server Components by Default** - Pages are async server components
2. **Client Components for Interactivity** - "use client" for search, filters, animations
3. **Sanity CMS** - All content managed through Sanity headless CMS
4. **GROQ Queries** - Sanity's query language for data fetching
5. **URL-based State** - Filter/search/pagination state stored in URL params
6. **Static Generation** - Project pages pre-rendered with `generateStaticParams`
7. **Embedded Studio** - Sanity Studio available at `/studio` route

## Visual Identity

- **Colors**: Black (#000), zinc grays, amber/orange accents (#f59e0b, #f97316)
- **Fonts**: CalSans (headings), Inter (body)
- **Animations**: Title reveal, fade-in, fade-left/right, scroll carousel
- **Effects**: Gradient overlays, backdrop blur, particle backgrounds

## Scripts

```bash
yarn dev              # Start development server
yarn build            # Build for production
yarn start            # Start production server
yarn fmt              # Format/lint with Rome
```

## Adding New Content

### Adding Projects
1. Go to `/studio` in your browser
2. Click "Project" in the sidebar
3. Click "+ Create" button
4. Fill in the project details
5. Set `published: true` to make it visible
6. Set `featured: true` to show in homepage carousel

### Adding Team Members
1. Go to `/studio` in your browser
2. Click "Team Member" in the sidebar
3. Click "+ Create" button
4. Fill in member details and upload photo
5. Set `order` field to control display order

## Environment Variables

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-06-01
```

## Sanity Studio

The CMS is embedded at `/studio` and provides:
- Visual editing of projects and team members
- Image upload with CDN delivery
- GROQ query playground (Vision plugin)
- Real-time preview

Access it at: `http://localhost:3000/studio` (development) or `https://your-domain.com/studio` (production)
