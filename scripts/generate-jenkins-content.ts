import fs from "fs";
import path from "path";
import { stringify } from "yaml";
import jenkinsCommands from "./data/jenkins-commands";

const outputDirectory = path.join(
  process.cwd(),
  "content",
  "tools",
  "jenkins",
);

fs.mkdirSync(outputDirectory, { recursive: true });

const existingFiles = fs
  .readdirSync(outputDirectory)
  .filter((file) => file.endsWith(".yaml"));

for (const file of existingFiles) {
  fs.unlinkSync(path.join(outputDirectory, file));
}

for (const command of jenkinsCommands) {
  const filePath = path.join(
    outputDirectory,
    `${command.slug}.yaml`,
  );

  const yamlContent = stringify(command);

  fs.writeFileSync(filePath, yamlContent);

  console.log(`Generated: ${filePath}`);
}

console.log(
  `\nGenerated ${jenkinsCommands.length} Jenkins command(s).`,
);