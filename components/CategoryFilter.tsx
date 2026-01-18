"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface CategoryFilterProps {
  categories: string[];
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams?.get("category") || "";

  const handleCategoryChange = (category: string | null) => {
    const params = new URLSearchParams(searchParams?.toString() || "");

    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    params.set("page", "1");
    router.push(`/projects?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        onClick={() => handleCategoryChange(null)}
        className={`px-4 py-2 text-xs transition-colors rounded ${
          !currentCategory
            ? "bg-zinc-800 text-zinc-200"
            : "text-zinc-500 hover:text-zinc-300"
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          className={`px-4 py-2 text-xs transition-colors rounded ${
            currentCategory === category
              ? "bg-zinc-800 text-zinc-200"
              : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
