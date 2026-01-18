import { getAllProjects } from "../lib/projects";
import { Project } from "../types";
import HomeClient from "./HomeClient";

const stats = [
  { iconName: "Award" as const, label: "Awards Won", value: 25, suffix: "+" },
  { iconName: "Users" as const, label: "Happy Clients", value: 150, suffix: "+" },
  { iconName: "Clock" as const, label: "Years Experience", value: 8, suffix: "+" },
  { iconName: "Star" as const, label: "Projects Completed", value: 300, suffix: "+" },
];

const services = [
  {
    title: "TV Commercials",
    description: "We craft high-end TVCs with precision and purpose. From meticulous pre-production to cinematic set design, art direction, color, wardrobe, and post-production—every frame is designed to elevate brand language and leave a lasting impact.",
  },
  {
    title: "Film Production & Photography",
    description: "Storytelling is at our core. We create visually striking films and photographs with a raw, cinematic soul—bringing unique stories to life through mood, movement, and emotion.",
  },
  {
    title: "Music Video Production",
    description: "We push boundaries with fearless ideas and bold visuals. Treating every music video like a short film, we build immersive cinematic worlds across genres, collaborating with artists both local and global.",
  },
  {
    title: "Sound Design & Music Production",
    description: "Our in-house sound studio delivers immersive audio experiences—from recording and ADR to sound design, scoring, mixing, and mastering—crafted to complete the story.",
  },
];

export default async function Home() {
  const allProjects = await getAllProjects();
  const featuredProjects = allProjects
    .filter((project: Project) => project.featured)
    .sort((a: Project, b: Project) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <HomeClient
      services={services}
      stats={stats}
      featuredProjects={featuredProjects}
    />
  );
}
