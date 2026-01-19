import { Metadata } from "next";
import { getProjectBySlug, getRelatedProjects } from "../../../lib/projects";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const categoryText = project.category ? `${project.category} | ` : "";
  const clientText = project.client ? ` for ${project.client}` : "";

  return {
    title: `${project.title}`,
    description: `${project.description} ${categoryText}produced by Pasa Productions${clientText}. Watch the full video and learn about this Nepal production.`,
    openGraph: {
      title: `${project.title} | Pasa Productions Nepal`,
      description: project.description,
      type: "video.other",
      images: project.thumbnail
        ? [{ url: project.thumbnail, alt: project.title }]
        : undefined,
    },
    alternates: {
      canonical: `https://pasaproductions.com/projects/${params.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = await getRelatedProjects(project);

  return <ProjectDetailClient project={project} relatedProjects={relatedProjects} />;
}
