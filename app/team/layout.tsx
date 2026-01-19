import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the creative team behind Pasa Productions. Award-winning directors, cinematographers, and producers creating exceptional films and videos in Nepal.",
  openGraph: {
    title: "Our Team | Pasa Productions Nepal",
    description:
      "Meet the talented filmmakers and creatives behind Nepal's leading production company.",
  },
  alternates: {
    canonical: "https://pasaproductions.com/team",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
