import AppShell from "@/components/layout/AppShell";
import SearchClient from "@/components/search/SearchClient";
import { getAllCommands } from "@/lib/content/commands";

export default function SearchPage() {
  const commands = getAllCommands();

  return (
    <AppShell>
      <div className="max-w-3xl">
        <p className="text-sm font-medium text-emerald-400">
          SEARCH
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">
          Find a command
        </h1>

        <p className="mt-3 text-zinc-400">
          Search commands by name, description, or tags.
        </p>

        <SearchClient commands={commands} />
      </div>
    </AppShell>
  );
}