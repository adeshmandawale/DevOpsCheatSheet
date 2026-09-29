import fs from "fs";
import path from "path";
import yaml from "yaml";

const linuxContentPath = path.join(
  process.cwd(),
  "content",
  "tools",
  "linux",
);

export interface LinuxCommand {
  id: string;
  tool: string;
  category: string;
  name: string;
  title: string;
  slug: string;
  description: string;

  syntax: string[];

  examples: {
    command: string;
    description: string;
  }[];

  flags: {
    flag: string;
    meaning: string;
  }[];

  tags: string[];
  difficulty: string;
  common: boolean;
  dangerous: boolean;
}

export function getLinuxCommands(): LinuxCommand[] {
  const files = fs
    .readdirSync(linuxContentPath)
    .filter((file) => file.endsWith(".yaml"));

  return files.map((file) => {
    const filePath = path.join(linuxContentPath, file);
    const fileContent = fs.readFileSync(filePath, "utf8");

    return yaml.parse(fileContent) as LinuxCommand;
  });
}