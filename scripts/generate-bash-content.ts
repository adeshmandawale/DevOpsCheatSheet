import fs from "fs";
import path from "path";
import { stringify } from "yaml";
import bashCommands from "./data/bash-commands";

const outputDirectory = path.join(
  process.cwd(),
  "content",
  "tools",
  "bash",
);

fs.mkdirSync(outputDirectory, { recursive: true });

// Remove existing YAML files generated from previous runs.
const existingFiles = fs
  .readdirSync(outputDirectory)
  .filter((file) => file.endsWith(".yaml"));

for (const file of existingFiles) {
  fs.unlinkSync(path.join(outputDirectory, file));
}

// Generate YAML files from the Bash command dataset.
for (const command of bashCommands) {
  const filePath = path.join(
    outputDirectory,
    `${command.slug}.yaml`,
  );

  const yamlContent = stringify(command);

  fs.writeFileSync(filePath, yamlContent);

  console.log(`Generated: ${filePath}`);
}

console.log(
  `\nGenerated ${bashCommands.length} Bash command(s).`,
);