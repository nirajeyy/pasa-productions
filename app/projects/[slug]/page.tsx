import { Navigation } from "../../components/nav";
import { projects } from "../../data/projects";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <div className="flex items-center justify-between gap-2">
            <div className="text-sm text-zinc-100">
              <time dateTime={new Date(project.date).toISOString()}>
                {Intl.DateTimeFormat(undefined, {
                  dateStyle: "medium",
                }).format(new Date(project.date))}
              </time>
            </div>
            <span className="px-3 py-1 text-sm bg-zinc-800 text-zinc-200 rounded-full">
              {project.category}
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-xl text-zinc-400">
            {project.description}
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        {project.youtubeUrl && (
          <div className="mx-auto max-w-4xl">
            <div className="aspect-video">
              <iframe
                src={project.youtubeUrl}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        )}

        <div className="mx-auto max-w-2xl">
          <div className="prose prose-invert">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-zinc-100">Project Details</h2>
                <div className="space-y-2">
                  {project.client && (
                    <div>
                      <span className="font-semibold text-zinc-200">Client:</span>{" "}
                      <span className="text-zinc-400">{project.client}</span>
                    </div>
                  )}
                  {project.duration && (
                    <div>
                      <span className="font-semibold text-zinc-200">Duration:</span>{" "}
                      <span className="text-zinc-400">{project.duration}</span>
                    </div>
                  )}
                  {project.location && (
                    <div>
                      <span className="font-semibold text-zinc-200">Location:</span>{" "}
                      <span className="text-zinc-400">{project.location}</span>
                    </div>
                  )}
                  {project.productionCompany && (
                    <div>
                      <span className="font-semibold text-zinc-200">Production Company:</span>{" "}
                      <span className="text-zinc-400">{project.productionCompany}</span>
                    </div>
                  )}
                </div>
              </div>

              {project.credits && project.credits.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-zinc-100">Credits</h2>
                  <div className="space-y-2">
                    {project.credits.map((credit, index) => (
                      <div key={index}>
                        <span className="font-semibold text-zinc-200">{credit.role}:</span>{" "}
                        <span className="text-zinc-400">{credit.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {project.equipment && project.equipment.length > 0 && (
              <div className="mt-8 space-y-4">
                <h2 className="text-2xl font-bold text-zinc-100">Equipment</h2>
                <div className="flex flex-wrap gap-2">
                  {project.equipment.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm bg-zinc-800 text-zinc-200 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.postProduction && project.postProduction.length > 0 && (
              <div className="mt-8 space-y-4">
                <h2 className="text-2xl font-bold text-zinc-100">Post-Production</h2>
                <div className="flex flex-wrap gap-2">
                  {project.postProduction.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-sm bg-zinc-800 text-zinc-200 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.awards && project.awards.length > 0 && (
              <div className="mt-8 space-y-4">
                <h2 className="text-2xl font-bold text-zinc-100">Awards & Recognition</h2>
                <ul className="space-y-2">
                  {project.awards.map((award, index) => (
                    <li key={index} className="text-zinc-400">
                      • {award}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
