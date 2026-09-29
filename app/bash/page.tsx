import Link from "next/link";
import AppShell from "@/components/layout/AppShell";
import CopyButton from "@/components/ui/CopyButton";
import { getCommands } from "@/lib/content/commands";

const categoryLabels: Record<string, string> = {
  output: "Output",
  input: "Input",
  variables: "Variables & Environment",
  "variables-environment": "Variables & Environment",
  shell: "Shell",
  "command-discovery": "Command Discovery",
  navigation: "Navigation",
  conditions: "Conditions",
  loops: "Loops",
  functions: "Functions",
  "pipes-redirection": "Pipes & Redirection",
  expansion: "Expansion",
  scripts: "Scripts",
  timing: "Timing",
  "processes-job-control": "Processes & Job Control",
};

interface BashPageProps {
  searchParams: Promise<{
    category?: string;
  }>;
}

export default async function BashPage({
  searchParams,
}: BashPageProps) {
  const commands = getCommands("bash");
  const params = await searchParams;

  const selectedCategory = params.category ?? "all";

  const categories = Array.from(
    new Set(commands.map((command) => command.category)),
  );

  const filteredCommands =
    selectedCategory === "all"
      ? commands
      : commands.filter(
          (command) => command.category === selectedCategory,
        );

  return (
    <AppShell>
      {/* Page heading */}
      <section>
        <p className="text-sm font-semibold tracking-[0.2em] text-teal-400">
          BASH
        </p>

        <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Bash Commands
            </h1>

            <p className="mt-2 text-sm text-zinc-500">
              Shell commands, scripting, variables, pipes, redirection,
              and job control.
            </p>
          </div>

          <span className="text-sm text-zinc-600">
            {filteredCommands.length}{" "}
            {filteredCommands.length === 1 ? "command" : "commands"}
          </span>
        </div>
      </section>

      {/* Category filters */}
      <div className="mt-8 flex flex-wrap gap-2">
        <Link
          href="/bash"
          className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
            selectedCategory === "all"
              ? "border-teal-500/40 bg-teal-500/10 text-teal-400"
              : "border-zinc-800 bg-zinc-900 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300"
          }`}
        >
          All
        </Link>

        {categories.map((category) => (
          <Link
            key={category}
            href={`/bash?category=${encodeURIComponent(category)}`}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
              selectedCategory === category
                ? "border-teal-500/40 bg-teal-500/10 text-teal-400"
                : "border-zinc-800 bg-zinc-900 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300"
            }`}
          >
            {categoryLabels[category] ?? category}
          </Link>
        ))}
      </div>

      {/* Command cards */}
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {filteredCommands.map((command) => {
          const example = command.examples[0];

          return (
            <article
              key={command.id}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-zinc-700"
            >
              {/* Command header */}
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <Link
                    href={`/command/${command.tool}/${command.slug}`}
                    className="font-mono text-lg font-semibold text-teal-400 transition hover:text-teal-300"
                  >
                    {command.name}
                  </Link>

                  <h2 className="mt-1 font-semibold text-white">
                    {command.title}
                  </h2>
                </div>

                <span
                  className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-medium capitalize ${
                    command.difficulty === "beginner"
                      ? "border-teal-500/40 bg-teal-500/10 text-teal-400"
                      : command.difficulty === "intermediate"
                        ? "border-teal-500/40 bg-teal-500/10 text-teal-400"
                        : "border-red-500/40 bg-red-500/10 text-red-400"
                  }`}
                >
                  {command.difficulty}
                </span>
              </div>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {command.description}
              </p>

              {/* Dangerous warning */}
              {command.dangerous && (
                <div className="mt-4 rounded-lg border border-red-500/20 bg-red-500/5 p-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-red-400">
                    <span>⚠</span>
                    <span>Use with caution</span>
                  </div>

                  <p className="mt-1 text-xs leading-5 text-zinc-500">
                    This command can modify, delete, or affect system
                    resources. Make sure you understand the command before
                    running it.
                  </p>
                </div>
              )}

              {/* Example */}
              {example && (
                <div className="mt-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-wider text-zinc-600">
                      Example
                    </span>

                    <CopyButton text={example.command} />
                  </div>

                  <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-3">
                    <code className="block overflow-x-auto whitespace-pre-wrap font-mono text-sm text-zinc-300">
                      {example.command}
                    </code>

                    <p className="mt-2 text-xs leading-5 text-zinc-500">
                      {example.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {command.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-zinc-950 px-2 py-1 text-xs text-zinc-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      {/* Empty state */}
      {filteredCommands.length === 0 && (
        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 p-10 text-center">
          <p className="text-zinc-400">
            No Bash commands found in this category.
          </p>
        </div>
      )}
    </AppShell>
  );
}