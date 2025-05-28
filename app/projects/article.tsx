import Link from "next/link";
import { Project } from "../data/projects";

interface Props {
	project: Project;
}

export function Article({ project }: Props) {
	return (
		<Link href={`/projects/${project.slug}`}>
			<article className="relative w-full h-full p-4 md:p-8">
				<div className="flex items-center justify-between gap-2">
					<div className="text-xs text-zinc-100">
						<time dateTime={new Date(project.date).toISOString()}>
							{Intl.DateTimeFormat(undefined, {
								dateStyle: "medium",
							}).format(new Date(project.date))}
						</time>
					</div>
				</div>

				<h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
					{project.title}
				</h2>
				<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
					{project.description}
				</p>
				{project.youtubeUrl && (
					<div className="mt-4 aspect-video">
						<iframe
							src={project.youtubeUrl}
							title={project.title}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							className="w-full h-full rounded-lg"
						/>
					</div>
				)}
				<div className="absolute bottom-4 md:bottom-8">
					<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
						Read more <span aria-hidden="true">&rarr;</span>
					</p>
				</div>
			</article>
		</Link>
	);
}
