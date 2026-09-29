import fs from "fs";
import path from "path";
import yaml from "yaml";

const toolsContentPath = path.join(
  process.cwd(),
  "content",
  "tools",
);

export interface Command {
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

export function getCommands(tool: string): Command[] {
  const contentPath = path.join(
    toolsContentPath,
    tool,
  );

  if (!fs.existsSync(contentPath)) {
    return [];
  }

  const files = fs
    .readdirSync(contentPath)
    .filter((file) => file.endsWith(".yaml"));

  return files.map((file) => {
    const filePath = path.join(contentPath, file);
    const fileContent = fs.readFileSync(filePath, "utf8");

    return yaml.parse(fileContent) as Command;
  });
}

export function getAllCommands(): Command[] {
  if (!fs.existsSync(toolsContentPath)) {
    return [];
  }

  const tools = fs
    .readdirSync(toolsContentPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory());

  return tools.flatMap((tool) => getCommands(tool.name));
}

export function getCommand(
  tool: string,
  slug: string,
): Command | undefined {
  const commands = getCommands(tool);

  return commands.find((command) => command.slug === slug);
}