import { Metadata } from "next";
import { getProjectBySlug, getRelatedProjects, getAllProjects } from "../../../lib/projects";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";
import { urlFor } from "../../../sanity/lib/image";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all projects
export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const categoryText = project.category ? `${project.category} | ` : "";
  const clientText = project.client ? ` for ${project.client}` : "";

  // Generate thumbnail URL for OpenGraph
  const thumbnailUrl = project.thumbnail
    ? urlFor(project.thumbnail).width(1200).height(630).url()
    : undefined;

  return {
    title: `${project.title}`,
    description: `${project.description} ${categoryText}produced by Pasa Productions${clientText}. Watch the full video and learn about this Nepal production.`,
    openGraph: {
      title: `${project.title} | Pasa Productions Nepal`,
      description: project.description,
      type: "video.other",
      images: thumbnailUrl
        ? [{ url: thumbnailUrl, alt: project.title }]
        : undefined,
    },
    alternates: {
      canonical: `https://pasaproductions.com/projects/${slug}`,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = await getRelatedProjects(project);

  return <ProjectDetailClient project={project} relatedProjects={relatedProjects} />;
}
