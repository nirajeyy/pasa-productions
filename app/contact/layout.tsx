import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Pasa Productions, Nepal's leading film and video production company. Contact us for TV commercials, music videos, documentaries, and corporate films in Kathmandu.",
  openGraph: {
    title: "Contact Pasa Productions | Film Production Company Nepal",
    description:
      "Ready to create something extraordinary? Contact Nepal's premier video production company for your next project.",
  },
  alternates: {
    canonical: "https://pasaproductions.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
