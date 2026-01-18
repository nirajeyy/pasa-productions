"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SearchBar from "../../components/SearchBar";
import CategoryFilter from "../../components/CategoryFilter";
import ProjectCard from "../../components/ProjectCard";
import Footer from "../../components/Footer";
import Particles from "../components/particles";
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
    <div className="min-h-screen flex flex-col relative">
      {/* Background */}
      <div className="fixed inset-0 bg-black -z-20" />
      <Particles className="fixed inset-0 -z-10 pointer-events-none" quantity={50} />

      {/* Nav */}
      <nav className="fixed top-8 right-8 z-50 flex gap-8">
        <Link href="/" className="group relative text-xs uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors">
          <span>Home</span>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 group-hover:w-full transition-all duration-300" />
        </Link>
        <Link href="/team" className="group relative text-xs uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors">
          <span>Team</span>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 group-hover:w-full transition-all duration-300" />
        </Link>
        <Link href="/contact" className="group relative text-xs uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors">
          <span>Contact</span>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 group-hover:w-full transition-all duration-300" />
        </Link>
      </nav>

      <div className="flex-1">
        {/* Header */}
        <div className="px-8 md:px-16 pt-16 pb-16 relative">
          {/* Large decorative number */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-8 md:left-16 text-[25vw] font-display leading-none select-none pointer-events-none"
          >
            02
          </motion.div>

          <div className="max-w-6xl mx-auto relative">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-px bg-amber-500" />
                <p className="text-xs uppercase tracking-[0.3em] text-amber-500">Our Work</p>
              </div>
              <h1 className="text-5xl md:text-7xl font-display text-white">
                Projects
              </h1>
            </motion.div>

            {/* Filters row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center justify-between gap-6"
            >
              <CategoryFilter categories={categories} />
              <SearchBar />
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="px-8 md:px-16">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-6xl mx-auto border-t border-zinc-900"
          />
        </div>

        {/* Projects Grid */}
        <div className="px-8 md:px-16 py-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </motion.div>

            {/* Empty state */}
            {projects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-32"
              >
                <div className="w-16 h-16 mx-auto mb-6 border border-zinc-800 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-zinc-700">?</span>
                </div>
                <p className="text-zinc-600 text-sm mb-2">No projects found</p>
                <p className="text-zinc-700 text-xs">Try adjusting your search or filters</p>
              </motion.div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-20 flex justify-center items-center gap-1"
              >
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <a
                    key={pageNum}
                    href={`/projects?page=${pageNum}${search ? `&search=${search}` : ""}${
                      category ? `&category=${category}` : ""
                    }`}
                    className={`group relative w-10 h-10 flex items-center justify-center text-xs transition-all duration-300 ${
                      pageNum === currentPage
                        ? "text-white"
                        : "text-zinc-600 hover:text-zinc-400"
                    }`}
                  >
                    {pageNum === currentPage && (
                      <span className="absolute inset-0 border border-amber-500/50 bg-amber-500/5" />
                    )}
                    <span className="relative">{pageNum}</span>
                  </a>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
