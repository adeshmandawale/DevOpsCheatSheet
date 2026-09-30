import fs from "fs";
import path from "path";
import { stringify } from "yaml";
import terraformCommands from "./data/terraform-commands";

const outputDirectory = path.join(
  process.cwd(),
  "content",
  "tools",
  "terraform",
);

fs.mkdirSync(outputDirectory, { recursive: true });

const existingFiles = fs
  .readdirSync(outputDirectory)
  .filter((file) => file.endsWith(".yaml"));

for (const file of existingFiles) {
  fs.unlinkSync(path.join(outputDirectory, file));
}

for (const command of terraformCommands) {
  const filePath = path.join(
    outputDirectory,
    `${command.slug}.yaml`,
  );

  fs.writeFileSync(filePath, stringify(command));

  console.log(`Generated: ${filePath}`);
}

console.log(
  `\nGenerated ${terraformCommands.length} Terraform command(s).`,
);