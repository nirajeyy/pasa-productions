import { Metadata } from "next";
import { getAllTeamMembers } from "../../lib/team";
import TeamClient from "./TeamClient";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the talented crew behind PASA Productions - directors, cinematographers, and creative professionals dedicated to bringing stories to life.",
};

export default async function TeamPage() {
  const teamMembers = await getAllTeamMembers();

  return <TeamClient teamMembers={teamMembers} />;
}
