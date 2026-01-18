import { Suspense } from "react";
import { getProjectsByPage } from "../../lib/projects";
import SearchBar from "../../components/SearchBar";
import CategoryFilter from "../../components/CategoryFilter";
import ProjectCard from "../../components/ProjectCard";
import Footer from "../../components/Footer";
import ProjectsClient from "./ProjectsClient";

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
    <ProjectsClient
      projects={projects}
      totalPages={totalPages}
      currentPage={currentPage}
      search={search}
      category={category}
      categories={categories}
    />
  );
}
