import Link from "next/link";
import { notFound } from "next/navigation";
import AppShell from "@/components/layout/AppShell";
import CopyButton from "@/components/ui/CopyButton";
import {
  getCommand,
  getCommands,
} from "@/lib/content/commands";

interface CommandPageProps {
  params: Promise<{
    tool: string;
    slug: string;
  }>;
}

const toolColors: Record<
  string,
  {
    text: string;
  }
> = {
  linux: {
    text: "text-emerald-400",
  },
  git: {
    text: "text-orange-400",
  },
  bash: {
    text: "text-teal-400",
  },
  docker: {
    text: "text-sky-400",
  },
  kubernetes: {
    text: "text-indigo-400",
  },
  jenkins: {
    text: "text-red-400",
  },
  ansible: {
    text: "text-rose-400",
  },
   terraform: {
    text: "text-violet-400",
  }
};

export default async function CommandPage({
  params,
}: CommandPageProps) {
  const { tool, slug } = await params;

  const command = getCommand(tool, slug);

  if (!command) {
    notFound();
  }

  const colors = toolColors[command.tool] ?? toolColors.linux;

  const commands = getCommands(tool);

  const currentIndex = commands.findIndex(
    (item) => item.slug === slug,
  );

  const previousCommand =
    currentIndex > 0
      ? commands[currentIndex - 1]
      : undefined;

  const nextCommand =
    currentIndex < commands.length - 1
      ? commands[currentIndex + 1]
      : undefined;

  return (
    <AppShell>
      <div className="max-w-4xl">
        <Link
          href={`/${command.tool}`}
          className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-400 transition hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
        >
          ← {command.tool.charAt(0).toUpperCase() + command.tool.slice(1)} Commands
        </Link>
        <div className="mt-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs uppercase text-zinc-500">
            {command.tool}
          </span>
          
          <span
            className={`rounded-full border px-3 py-1 text-xs font-medium capitalize ${
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

        <div className="mt-6">
          <code className={`font-mono text-4xl font-bold ${colors.text}`}>
            {command.name}
          </code>

          <h1 className="mt-3 text-2xl font-semibold text-white">
            {command.title}
          </h1>

          <p className="mt-4 text-lg leading-8 text-zinc-400">
            {command.description}
          </p>

          {command.dangerous && (
            <div className="mt-5 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-red-400">⚠</span>
                    
                <div>
                  <p className="text-sm font-medium text-red-400">
                    Use with caution
                  </p>
                    
                  <p className="mt-1 text-xs leading-5 text-red-300/70">
                    This command can modify, delete, or affect system resources.
                    Make sure you understand the command before running it.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-white">
            Syntax
          </h2>

          <div className="mt-4 space-y-2">
            {command.syntax.map((syntax) => (
              <div
                key={syntax}
                className="flex items-center justify-between gap-4 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5"
              >
                <code className={`min-w-0 truncate font-mono text-sm ${colors.text}`}>
                  $ {syntax}
                </code>
            
                <CopyButton text={syntax} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-white">
            Examples
          </h2>

          <div className="mt-4 space-y-4">
            {command.examples.map((example) => (
              <div
                key={example.command}
                className="overflow-hidden rounded-xl border border-zinc-800"
              >
                <div className="flex items-center justify-between gap-4 bg-zinc-950 px-5 py-3">
                  <code className={`min-w-0 truncate font-mono text-sm ${colors.text}`}>
                    $ {example.command}
                  </code>

                  <CopyButton text={example.command} />
                </div>

                <div className="bg-zinc-900 px-5 py-4 text-sm text-zinc-400">
                  {example.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        {command.flags.length > 0 && (
          <section className="mt-10">
            <h2 className="text-lg font-semibold text-white">
              Options & Flags
            </h2>
                
            <div className="mt-4 overflow-hidden rounded-xl border border-zinc-800">
              {command.flags.map((item) => (
                <div
                  key={item.flag}
                  className="grid gap-3 border-b border-zinc-800 bg-zinc-900 px-4 py-3 last:border-b-0 sm:grid-cols-[140px_1fr]"
                >
                  <code className="font-mono text-sm text-amber-400">
                    {item.flag}
                  </code>
              
                  <span className="text-sm leading-6 text-zinc-400">
                    {item.meaning}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-white">
            Tags
          </h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {command.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-zinc-900 px-3 py-1.5 text-xs text-zinc-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        </section>
        </div>
      <div className="mt-12 flex items-center justify-between border-t border-zinc-800 pt-6">
        <div>
          {previousCommand && (
            <Link
              href={`/command/${tool}/${previousCommand.slug}`}
              className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-400 transition hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
            >
              ← {previousCommand.name}
            </Link>
          )}
        </div>
        
        <div>
          {nextCommand && (
            <Link
              href={`/command/${tool}/${nextCommand.slug}`}
              className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-400 transition hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
            >
              {nextCommand.name} →
            </Link>
          )}
        </div>
      </div> 
      </div>
    </AppShell>
  );
}