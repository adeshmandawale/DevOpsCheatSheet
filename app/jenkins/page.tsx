import Link from "next/link";
import AppShell from "@/components/layout/AppShell";
import CopyButton from "@/components/ui/CopyButton";
import { getCommands } from "@/lib/content/commands";

const categoryLabels: Record<string, string> = {
  administration: "Administration",
  cli: "CLI",
  pipeline: "Pipeline",
  "rest-api": "REST API",
};

function formatCategory(category: string) {
  return (
    categoryLabels[category] ||
    category
      .split("-")
      .map(
        (word) =>
          word.charAt(0).toUpperCase() + word.slice(1),
      )
      .join(" ")
  );
}

export default function JenkinsPage() {
  const commands = getCommands("jenkins");

  const groupedCommands = commands.reduce<
    Record<string, typeof commands>
  >((groups, command) => {
    if (!groups[command.category]) {
      groups[command.category] = [];
    }

    groups[command.category].push(command);

    return groups;
  }, {});

  const categories = Object.keys(groupedCommands).sort(
    (a, b) => formatCategory(a).localeCompare(formatCategory(b)),
  );

  return (
    <AppShell>
      <section>
        <p className="text-sm font-medium text-red-400">
          JENKINS
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">
          Jenkins Commands
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-400">
          Practical Jenkins Pipeline, CLI, REST API, and
          administration commands with syntax, examples, flags,
          and explanations.
        </p>
      </section>

      <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
          Categories
        </h2>

        <div className="flex flex-wrap gap-2.5">
          {categories.map((category) => (
            <a
              key={category}
              href={`#${category}`}
              className="rounded-full border border-zinc-700/80 bg-zinc-950/60 px-3 py-1.5 text-xs font-medium text-zinc-400 transition-all duration-200 hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-300"
            >
              {formatCategory(category)}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-10 space-y-12">
        {categories.map((category) => (
          <section
            key={category}
            id={category}
            className="scroll-mt-24"
          >
            <div className="mb-5">
              <h2 className="text-xl font-semibold text-white">
                {formatCategory(category)}
              </h2>

              <p className="mt-1 text-sm text-zinc-500">
                {groupedCommands[category].length}{" "}
                {groupedCommands[category].length === 1
                  ? "command"
                  : "commands"}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {groupedCommands[category].map((command) => (
                <article
                  key={command.id}
                  className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-zinc-700"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link
                        href={`/command/jenkins/${command.slug}`}
                        className="font-mono text-lg font-semibold text-red-400 transition hover:text-red-300"
                      >
                        {command.name}
                      </Link>

                      <h3 className="mt-1 font-semibold text-white">
                        {command.title}
                      </h3>
                    </div>

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

                  <p className="mt-4 text-sm leading-6 text-zinc-400">
                    {command.description}
                  </p>

                  {command.dangerous && (
                    <div className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 text-red-400">
                          ⚠
                        </span>

                        <div>
                          <p className="text-sm font-medium text-red-400">
                            Use with caution
                          </p>

                          <p className="mt-1 text-xs leading-5 text-red-300/70">
                            This command can modify Jenkins jobs,
                            configuration, or server state. Make sure
                            you understand the command before running it.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-4 rounded-lg bg-zinc-950 px-3 py-2.5">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-[10px] uppercase tracking-wider text-zinc-600">
                        Example
                      </p>

                      <CopyButton text={command.syntax[0]} />
                    </div>

                    <code className="block truncate font-mono text-xs text-zinc-300">
                      $ {command.syntax[0]}
                    </code>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </AppShell>
  );
}