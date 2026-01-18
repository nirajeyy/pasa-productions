"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SearchBar from "../../components/SearchBar";
import CategoryFilter from "../../components/CategoryFilter";
import ProjectCard from "../../components/ProjectCard";
import Footer from "../../components/Footer";
import { Project } from "../../types";

interface ProjectsClientProps {
  projects: Project[];
  totalPages: number;
  currentPage: number;
  search: string;
  category: string;
  categories: string[];
}

export default function ProjectsClient({
  projects,
  totalPages,
  currentPage,
  search,
  category,
  categories,
}: ProjectsClientProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex flex-col bg-black"
    >
      <div className="flex-1">
        {/* Header */}
        <div className="px-8 md:px-16 pt-10 pb-12">
          <div className="max-w-6xl mx-auto">
            {/* Back link */}
            <Link
              href="/"
              className="text-[10px] uppercase tracking-wider text-zinc-600 hover:text-zinc-400 transition-colors inline-block mb-12"
            >
              ← Back
            </Link>

            {/* Title */}
            <div className="mb-10">
              <p className="text-[10px] uppercase tracking-wider text-amber-500/70 mb-2">
                Work
              </p>
              <h1 className="text-3xl md:text-4xl font-display text-zinc-200">
                Projects
              </h1>
            </div>

            {/* Filters row - categories + search inline */}
            <div className="flex flex-wrap items-center justify-between gap-6">
              <CategoryFilter categories={categories} />
              <SearchBar />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="px-8 md:px-16">
          <div className="max-w-6xl mx-auto border-t border-zinc-900" />
        </div>

        {/* Projects Grid */}
        <div className="px-8 md:px-16 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>

            {/* Empty state */}
            {projects.length === 0 && (
              <div className="text-center py-24">
                <p className="text-zinc-600 text-sm">No projects found</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-16 flex justify-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <a
                    key={pageNum}
                    href={`/projects?page=${pageNum}${search ? `&search=${search}` : ""}${
                      category ? `&category=${category}` : ""
                    }`}
                    className={`w-8 h-8 flex items-center justify-center text-xs transition-colors ${
                      pageNum === currentPage
                        ? "bg-zinc-800 text-zinc-300"
                        : "text-zinc-600 hover:text-zinc-400"
                    }`}
                  >
                    {pageNum}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}
