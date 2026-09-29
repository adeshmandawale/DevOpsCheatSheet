"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchButton from "@/components/search/SearchButton";

export default function Header() {
  const pathname = usePathname();
  const isSearchPage = pathname === "/search";

  return (
    <header className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-6">
        <Link
          href="/"
          className="shrink-0 font-bold text-white transition hover:text-emerald-400"
        >
          ⚡ DevOps
        </Link>

        {!isSearchPage && (
          <div className="flex flex-1 justify-center">
            <div className="w-full max-w-xl">
              <SearchButton />
            </div>
          </div>
        )}

        {isSearchPage && <div className="flex-1" />}

        <button
          className="shrink-0 rounded-lg border border-zinc-800 px-3 py-2 text-sm text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
          aria-label="Toggle theme"
        >
          ☼
        </button>
      </div>
    </header>
  );
}