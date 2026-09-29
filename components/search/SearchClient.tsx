"use client";

import Fuse from "fuse.js";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Command } from "@/lib/content/commands";

interface SearchClientProps {
  commands: Command[];
}

export default function SearchClient({
  commands,
}: SearchClientProps) {
  const [query, setQuery] = useState("");

  const fuse = useMemo(
    () =>
      new Fuse(commands, {
        keys: [
          "name",
          "title",
          "description",
          "tags",
        ],
        threshold: 0.35,
      }),
    [commands],
  );

  const results = query
    ? fuse.search(query).map((result) => result.item)
    : commands;

  return (
    <>
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Try grep, files, search..."
        autoFocus
        className="mt-8 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-sm outline-none placeholder:text-zinc-600 focus:border-emerald-500"
      />

      <div className="mt-6 space-y-3">
        {results.map((command) => (
          <Link
            key={command.id}
            href={`/command/${command.tool}/${command.slug}`}
            className="block rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-zinc-700 hover:bg-zinc-800"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <code className="font-mono text-emerald-400">
                  {command.name}
                </code>

                <span
                  className={`rounded-full border px-2.5 py-1 text-xs font-medium capitalize ${
                    command.difficulty === "beginner"
                      ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                      : command.difficulty === "intermediate"
                        ? "border-amber-500/40 bg-amber-500/10 text-amber-400"
                        : "border-red-500/40 bg-red-500/10 text-red-400"
                  }`}
                >
                  {command.difficulty}
                </span>
              </div>

              <span className="text-xs uppercase text-zinc-600">
                {command.tool}
              </span>
            </div>

            <h2 className="mt-2 font-semibold text-white">
              {command.title}
            </h2>

            <p className="mt-2 text-sm text-zinc-400">
              {command.description}
            </p>

            {command.dangerous && (
              <div className="mt-3 flex items-center gap-2 text-xs text-red-400">
                <span>⚠</span>
                <span>Use with caution</span>
              </div>
            )}

            <div className="mt-3 flex flex-wrap gap-2">
              {command.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-zinc-950 px-2 py-1 text-xs text-zinc-500"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </Link>
        ))}

        {results.length === 0 && (
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-8 text-center">
            <p className="text-zinc-400">
              No commands found.
            </p>
          </div>
        )}
      </div>
    </>
  );
}