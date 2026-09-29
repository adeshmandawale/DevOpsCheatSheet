"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SearchButton() {
  const router = useRouter();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        router.push("/search");
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [router]);

  return (
    <button
      onClick={() => router.push("/search")}
      className="flex w-full items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-500 transition hover:border-zinc-700 hover:text-zinc-300"
    >
      <span>Search commands...</span>

      <kbd className="rounded border border-zinc-700 px-2 py-0.5 text-xs">
        Ctrl K
      </kbd>
    </button>
  );
}