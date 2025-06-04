import { Suspense } from "react";
import Link from "next/link";
import { getProjectsByPage } from "../../lib/projects";
import SearchBar from "../../components/SearchBar";
import CategoryFilter from "../../components/CategoryFilter";
import ProjectCard from "../../components/ProjectCard";

const categories = [
  "Commercial",
  "Documentary",
  "Short Film",
  "TV Show",
  "Music Video",
];

interface ProjectsPageProps {
  searchParams: {
    search?: string;
    category?: string;
    page?: string;
  };
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const { search = "", category = "", page = "1" } = searchParams;
  const currentPage = parseInt(page);
  const { projects, totalPages } = await getProjectsByPage(currentPage, search, category);

  return (
    <div className="min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="max-w-7xl mx-auto px-10">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-zinc-400 hover:text-white mb-8 group mt-10"
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
          Back to Home
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4 font-display">Our Projects</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500/70 to-orange-500/70 mx-auto" />
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <SearchBar />
          <CategoryFilter categories={categories} />
        </div>

        <Suspense fallback={<div>Loading projects...</div>}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-zinc-400">No projects found matching your criteria.</p>
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-12 flex justify-center gap-4">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <a
                  key={pageNum}
                  href={`/projects?page=${pageNum}${search ? `&search=${search}` : ""}${
                    category ? `&category=${category}` : ""
                  }`}
                  className={`px-4 py-2 rounded-lg ${
                    pageNum === currentPage
                      ? "bg-amber-500/90 text-black"
                      : "bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800/50"
                  }`}
                >
                  {pageNum}
                </a>
              ))}
            </div>
          )}
        </Suspense>
      </div>
    </div>
  );
} 