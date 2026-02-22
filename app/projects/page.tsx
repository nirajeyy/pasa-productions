import { Metadata } from "next";
import { Suspense } from "react";
import { getProjectsByPage } from "../../lib/projects";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore Pasa Productions' portfolio of award-winning TV commercials, music videos, documentaries, and films produced in Nepal. See our best work in video production and cinematography.",
  openGraph: {
    title: "Projects | Pasa Productions Nepal",
    description:
      "Award-winning TV commercials, music videos, documentaries & films from Nepal's leading production company.",
  },
  alternates: {
    canonical: "https://pasaproductions.com/projects",
  },
};

const categories = [
  "Commercial",
  "Documentary",
  "Feature Movie",
  "Short Film",
  "TV Show",
  "Music Video",
];

interface ProjectsPageProps {
  searchParams: Promise<{
    search?: string;
    category?: string;
    page?: string;
  }>;
}

async function ProjectsContent({ searchParams }: ProjectsPageProps) {
  const { search = "", category = "", page = "1" } = await searchParams;
  const currentPage = parseInt(page);
  const { projects, totalPages } = await getProjectsByPage(
    currentPage,
    search,
    category,
  );

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

export default async function ProjectsPage(props: ProjectsPageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <ProjectsContent searchParams={props.searchParams} />
    </Suspense>
  );
}
