"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Team" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-6 right-6 z-50 flex gap-6 px-5 py-3 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
      {navLinks
        .filter((link) => link.href !== pathname)
        .map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group relative text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
          >
            <span>{link.label}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 group-hover:w-full transition-all duration-300" />
          </Link>
        ))}
    </nav>
  );
}
