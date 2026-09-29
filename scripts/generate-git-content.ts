import fs from "fs";
import path from "path";
import gitCommands from "./data/git-commands";

const outputDirectory = path.join(
  process.cwd(),
  "content",
  "tools",
  "git",
);

fs.mkdirSync(outputDirectory, { recursive: true });

// Remove existing YAML files generated from previous runs.
const existingFiles = fs
  .readdirSync(outputDirectory)
  .filter((file) => file.endsWith(".yaml"));

for (const file of existingFiles) {
  fs.unlinkSync(path.join(outputDirectory, file));
}

// Generate YAML files from the Git command dataset.
for (const command of gitCommands) {
  const filePath = path.join(
    outputDirectory,
    `${command.slug}.yaml`,
  );

  const yaml = `id: ${command.id}
tool: ${command.tool}
category: ${command.category}
name: ${command.name}
title: ${command.title}
slug: ${command.slug}
description: ${command.description}

syntax:
${command.syntax.map((item) => `  - ${item}`).join("\n")}

examples:
${command.examples
  .map(
    (example) => `  - command: ${example.command}
    description: ${example.description}`,
  )
  .join("\n\n")}

flags:
${
  command.flags.length === 0
    ? "  []"
    : command.flags
        .map(
          (flag) => `  - flag: "${flag.flag}"
    meaning: ${flag.meaning}`,
        )
        .join("\n\n")
}

tags:
${command.tags.map((tag) => `  - ${tag}`).join("\n")}

difficulty: ${command.difficulty}
common: ${command.common}
dangerous: ${command.dangerous}
`;

  fs.writeFileSync(filePath, yaml);

  console.log(`Generated: ${filePath}`);
}

console.log(
  `\nGenerated ${gitCommands.length} Git command(s).`,
);