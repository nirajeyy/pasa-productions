"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams?.get("search") || "");

  const debouncedSearch = useDebounce((value: string) => {
    const params = new URLSearchParams(searchParams?.toString() || "");

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    params.set("page", "1");
    router.push(`/projects?${params.toString()}`);
  }, 300);

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchTerm(value);
      debouncedSearch(value);
    },
    [debouncedSearch]
  );

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearch}
      placeholder="Search"
      className="w-40 px-4 py-2 text-xs text-zinc-400 border border-zinc-800 rounded focus:border-zinc-600 focus:outline-none placeholder:text-zinc-600"
    />
  );
}
