import Link from "next/link";
import AppShell from "@/components/layout/AppShell";
import {
  SiLinux,
  SiGit,
  SiGnubash,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiAnsible,
  SiTerraform,
} from "@icons-pack/react-simple-icons";

const tools = [
  {
    name: "Linux",
    description: "Linux commands and utilities",
    href: "/linux",
    icon: SiLinux,
  },
  {
    name: "Git",
    description: "Version control commands",
    href: "/git",
    icon: SiGit,
  },
  {
    name: "Bash",
    description: "Shell commands and scripting",
    href: "/bash",
    icon: SiGnubash,
  },
  {
    name: "Docker",
    description: "Containers and images",
    href: "/docker",
    icon: SiDocker,
  },
  {
    name: "Kubernetes",
    description: "Container orchestration",
    href: "/kubernetes",
    icon: SiKubernetes,
  },
  {
    name: "Jenkins",
    description: "CI/CD automation",
    href: "/jenkins",
    icon: SiJenkins,
  },
  {
    name: "Ansible",
    description: "Configuration automation",
    href: "/ansible",
    icon: SiAnsible,
  },
  {
    name: "Terraform",
    description: "Infrastructure as code",
    href: "/terraform",
    icon: SiTerraform,
  },
];

export default function Home() {
  return (
    <AppShell>
      <div className="mx-auto max-w-4xl">
        <section className="pt-6 text-center md:pt-8">
          <div className="text-4xl">⚡</div>

          <p className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
            DevOps Reference
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
            DevOps Cheat Sheet
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-zinc-500">
            A practical, searchable reference for the tools you use
            every day.
          </p>
        </section>

        <section className="mt-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {tools.map((tool) => {
              const Icon = tool.icon;

              return (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-center transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950 transition group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10">
                    <Icon
                      size={28}
                      color="default"
                      title={`${tool.name} logo`}
                    />
                  </div>

                  <h2 className="mt-4 font-semibold text-white">
                    {tool.name}
                  </h2>

                  <p className="mt-1 text-xs leading-5 text-zinc-600">
                    {tool.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </AppShell>
  );
}