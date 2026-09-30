import fs from "fs";
import path from "path";
import { stringify } from "yaml";
import ansibleCommands from "./data/ansible-commands";

const outputDirectory = path.join(
  process.cwd(),
  "content",
  "tools",
  "ansible",
);

fs.mkdirSync(outputDirectory, { recursive: true });

const existingFiles = fs
  .readdirSync(outputDirectory)
  .filter((file) => file.endsWith(".yaml"));

for (const file of existingFiles) {
  fs.unlinkSync(path.join(outputDirectory, file));
}

for (const command of ansibleCommands) {
  const filePath = path.join(
    outputDirectory,
    `${command.slug}.yaml`,
  );

  fs.writeFileSync(filePath, stringify(command));

  console.log(`Generated: ${filePath}`);
}

console.log(
  `\nGenerated ${ansibleCommands.length} Ansible command(s).`,
);