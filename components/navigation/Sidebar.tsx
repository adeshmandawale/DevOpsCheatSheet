"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tools = [
  { name: "Linux", href: "/linux", icon: "🐧" },
  { name: "Git", href: "/git", icon: "◉" },
  { name: "Bash", href: "/bash", icon: "$" },
  { name: "Docker", href: "/docker", icon: "🐳" },
  { name: "Kubernetes", href: "/kubernetes", icon: "☸" },
  { name: "Jenkins", href: "/jenkins", icon: "⚙" },
  { name: "Ansible", href: "/ansible", icon: "A" },
  { name: "Terraform", href: "/terraform", icon: "T" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-[72px] shrink-0 border-r border-zinc-800 bg-zinc-950 md:block">
      <div className="sticky top-0 flex h-screen flex-col items-center py-5">
        {/* Logo */}
        <Link
          href="/"
          className="mb-8 flex h-10 w-10 items-center justify-center rounded-xl text-xl transition hover:bg-zinc-900"
          title="DevOps Cheat Sheet"
        >
          ⚡
        </Link>

        {/* Tools */}
        <nav className="flex flex-col items-center gap-2">
          {tools.map((tool) => {
            const isActive = pathname === tool.href;

            return (
              <Link
                key={tool.name}
                href={tool.href}
                title={tool.name}
                className={`flex h-11 w-11 items-center justify-center rounded-xl text-lg transition ${
                  isActive
                    ? "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30"
                    : "text-zinc-500 hover:bg-zinc-900 hover:text-zinc-200"
                }`}
              >
                {tool.icon}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}