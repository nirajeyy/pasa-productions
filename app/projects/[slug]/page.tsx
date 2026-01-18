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

  return {
    title: `${project.title} | PASA Productions`,
    description: project.description,
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
