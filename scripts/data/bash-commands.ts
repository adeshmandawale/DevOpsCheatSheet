export interface BashCommand {
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

const bashCommands: BashCommand[] = [
  {
    id: "bash-echo",
    tool: "bash",
    category: "output",
    name: "echo",
    title: "Print text or variables",
    slug: "echo",
    description:
      "Print text, variables, or command output to standard output.",
    syntax: [
      "echo <text>",
      "echo $VARIABLE",
      "echo \"<text>\"",
    ],
    examples: [
      {
        command: 'echo "Hello World"',
        description: "Print a message to the terminal.",
      },
      {
        command: 'echo "Home: $HOME"',
        description: "Print text containing an environment variable.",
      },
    ],
    flags: [
      {
        flag: "-n",
        meaning: "Do not print the trailing newline.",
      },
      {
        flag: "-e",
        meaning: "Enable interpretation of backslash escape sequences.",
      },
    ],
    tags: ["output", "variables", "shell"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-printf",
    tool: "bash",
    category: "output",
    name: "printf",
    title: "Format and print output",
    slug: "printf",
    description:
      "Print formatted text and values using a predictable format.",
    syntax: [
      'printf "<format>" <arguments>',
      'printf "%s\\n" "$VARIABLE"',
    ],
    examples: [
      {
        command: 'printf "Name: %s\\n" "$USER"',
        description: "Print a formatted value.",
      },
      {
        command: 'printf "%-10s %5s\\n" "Name" "Age"',
        description: "Format output into aligned columns.",
      },
    ],
    flags: [],
    tags: ["output", "formatting", "shell"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-read",
    tool: "bash",
    category: "input",
    name: "read",
    title: "Read user input",
    slug: "read",
    description:
      "Read a line of input from standard input and store it in variables.",
    syntax: [
      "read <variable>",
      "read -p \"<prompt>\" <variable>",
    ],
    examples: [
      {
        command: 'read -p "Enter your name: " name',
        description: "Prompt for a user's name and store it in name.",
      },
      {
        command: 'read -r line',
        description: "Read input without interpreting backslashes.",
      },
    ],
    flags: [
      {
        flag: "-p <prompt>",
        meaning: "Display a prompt before reading input.",
      },
      {
        flag: "-r",
        meaning: "Prevent backslashes from escaping characters.",
      },
      {
        flag: "-s",
        meaning: "Do not echo typed input to the terminal.",
      },
    ],
    tags: ["input", "variables", "scripting"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-variables",
    tool: "bash",
    category: "variables",
    name: "variables",
    title: "Create and use variables",
    slug: "variables",
    description:
      "Store values in shell variables and reference them using parameter expansion.",
    syntax: [
      "VARIABLE=value",
      "echo \"$VARIABLE\"",
      "export VARIABLE=value",
    ],
    examples: [
      {
        command: 'name="Adesh"',
        description: "Create a shell variable.",
      },
      {
        command: 'echo "Hello $name"',
        description: "Expand a variable inside a string.",
      },
      {
        command: "export APP_ENV=production",
        description: "Create an environment variable available to child processes.",
      },
    ],
    flags: [],
    tags: ["variables", "environment", "shell"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-env",
    tool: "bash",
    category: "variables",
    name: "env",
    title: "Display environment variables",
    slug: "env",
    description:
      "Display or run commands with a modified environment.",
    syntax: [
      "env",
      "env | grep <variable>",
      "env VARIABLE=value <command>",
    ],
    examples: [
      {
        command: "env",
        description: "Display the current environment.",
      },
      {
        command: "env APP_ENV=production ./app",
        description: "Run a command with a temporary environment variable.",
      },
    ],
    flags: [
      {
        flag: "-i",
        meaning: "Start with an empty environment.",
      },
      {
        flag: "-u <name>",
        meaning: "Remove a variable from the environment.",
      },
    ],
    tags: ["environment", "variables", "configuration"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-export",
    tool: "bash",
    category: "variables",
    name: "export",
    title: "Export environment variables",
    slug: "export",
    description:
      "Mark shell variables so they are available to commands and child processes.",
    syntax: [
      "export VARIABLE=value",
      "export VARIABLE",
      "export -p",
    ],
    examples: [
      {
        command: "export PATH=\"$PATH:/opt/bin\"",
        description: "Add a directory to the PATH environment variable.",
      },
      {
        command: "export APP_ENV=production",
        description: "Export an application environment variable.",
      },
    ],
    flags: [
      {
        flag: "-p",
        meaning: "Display exported variables.",
      },
    ],
    tags: ["environment", "variables", "shell"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-source",
    tool: "bash",
    category: "shell",
    name: "source",
    title: "Execute a script in the current shell",
    slug: "source",
    description:
      "Read and execute commands from a file in the current shell environment.",
    syntax: [
      "source <file>",
      ". <file>",
    ],
    examples: [
      {
        command: "source ~/.bashrc",
        description: "Reload Bash configuration in the current shell.",
      },
      {
        command: "source ./env.sh",
        description: "Load variables and functions from a script.",
      },
    ],
    flags: [],
    tags: ["shell", "scripts", "environment"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-alias",
    tool: "bash",
    category: "shell",
    name: "alias",
    title: "Create command shortcuts",
    slug: "alias",
    description:
      "Create or display shell aliases that expand to other commands.",
    syntax: [
      "alias",
      "alias <name>='<command>'",
      "unalias <name>",
    ],
    examples: [
      {
        command: "alias ll='ls -lah'",
        description: "Create a shortcut named ll.",
      },
      {
        command: "alias",
        description: "List currently defined aliases.",
      },
    ],
    flags: [],
    tags: ["shell", "aliases", "productivity"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-history",
    tool: "bash",
    category: "shell",
    name: "history",
    title: "View command history",
    slug: "history",
    description:
      "Display previously executed commands from the shell history.",
    syntax: [
      "history",
      "history <number>",
      "history | grep <pattern>",
    ],
    examples: [
      {
        command: "history",
        description: "Display the shell command history.",
      },
      {
        command: "history | grep docker",
        description: "Find previous commands containing docker.",
      },
    ],
    flags: [
      {
        flag: "-c",
        meaning: "Clear the current shell history.",
      },
      {
        flag: "-d <offset>",
        meaning: "Delete a specific history entry.",
      },
    ],
    tags: ["shell", "history", "commands"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-command",
    tool: "bash",
    category: "command-discovery",
    name: "command",
    title: "Identify or execute commands",
    slug: "command",
    description:
      "Determine how a command name is interpreted by the shell or execute it while bypassing aliases.",
    syntax: [
      "command -v <command>",
      "command -V <command>",
      "command <command>",
    ],
    examples: [
      {
        command: "command -v git",
        description: "Show the path or shell interpretation of git.",
      },
      {
        command: "command -v docker",
        description: "Check whether docker is available in PATH.",
      },
    ],
    flags: [
      {
        flag: "-v",
        meaning: "Print a command's location or interpretation.",
      },
      {
        flag: "-V",
        meaning: "Print a more detailed command description.",
      },
    ],
    tags: ["commands", "shell", "discovery"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-type",
    tool: "bash",
    category: "command-discovery",
    name: "type",
    title: "Identify command types",
    slug: "type",
    description:
      "Show whether a command is an alias, builtin, function, keyword, or external executable.",
    syntax: [
      "type <command>",
      "type -a <command>",
    ],
    examples: [
      {
        command: "type cd",
        description: "Show that cd is a Bash builtin.",
      },
      {
        command: "type -a python",
        description: "Show all known locations or definitions of python.",
      },
    ],
    flags: [
      {
        flag: "-a",
        meaning: "Show all locations containing the command.",
      },
      {
        flag: "-t",
        meaning: "Print the command type.",
      },
    ],
    tags: ["commands", "shell", "discovery"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-which",
    tool: "bash",
    category: "command-discovery",
    name: "which",
    title: "Locate an executable",
    slug: "which",
    description:
      "Locate the executable file that would be invoked for a command.",
    syntax: [
      "which <command>",
      "which -a <command>",
    ],
    examples: [
      {
        command: "which git",
        description: "Find the git executable in PATH.",
      },
      {
        command: "which -a python",
        description: "List all matching python executables in PATH.",
      },
    ],
    flags: [
      {
        flag: "-a",
        meaning: "Show all matching executables in PATH.",
      },
    ],
    tags: ["commands", "path", "discovery"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-pwd",
    tool: "bash",
    category: "navigation",
    name: "pwd",
    title: "Print working directory",
    slug: "pwd",
    description:
      "Display the absolute path of the current working directory.",
    syntax: [
      "pwd",
      "pwd -P",
    ],
    examples: [
      {
        command: "pwd",
        description: "Show the current directory.",
      },
      {
        command: "pwd -P",
        description: "Show the physical directory path without symbolic links.",
      },
    ],
    flags: [
      {
        flag: "-P",
        meaning: "Use the physical directory structure.",
      },
      {
        flag: "-L",
        meaning: "Use the logical directory path.",
      },
    ],
    tags: ["navigation", "directory", "shell"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-cd",
    tool: "bash",
    category: "navigation",
    name: "cd",
    title: "Change directory",
    slug: "cd",
    description:
      "Change the current working directory of the shell.",
    syntax: [
      "cd <directory>",
      "cd ~",
      "cd -",
    ],
    examples: [
      {
        command: "cd /var/log",
        description: "Change to the /var/log directory.",
      },
      {
        command: "cd -",
        description: "Return to the previous working directory.",
      },
      {
        command: "cd ~",
        description: "Change to the current user's home directory.",
      },
    ],
    flags: [],
    tags: ["navigation", "directory", "shell"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-test",
    tool: "bash",
    category: "conditions",
    name: "test",
    title: "Evaluate conditions",
    slug: "test",
    description:
      "Evaluate file, string, and numeric conditions in shell scripts.",
    syntax: [
      "test <condition>",
      "[ <condition> ]",
    ],
    examples: [
      {
        command: 'test -f app.sh && echo "File exists"',
        description: "Check whether a regular file exists.",
      },
      {
        command: '[ "$USER" = "root" ] && echo "Running as root"',
        description: "Compare a variable using Bash test syntax.",
      },
    ],
    flags: [
      {
        flag: "-f <file>",
        meaning: "True when the path is a regular file.",
      },
      {
        flag: "-d <path>",
        meaning: "True when the path is a directory.",
      },
      {
        flag: "-e <path>",
        meaning: "True when the path exists.",
      },
    ],
    tags: ["conditions", "scripting", "files"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-if",
    tool: "bash",
    category: "conditions",
    name: "if",
    title: "Execute commands conditionally",
    slug: "if",
    description:
      "Run commands based on whether a condition evaluates as true or false.",
    syntax: [
      "if <condition>; then <commands>; fi",
      "if <condition>; then <commands>; else <commands>; fi",
    ],
    examples: [
      {
        command: 'if [ -f app.sh ]; then echo "Found"; fi',
        description: "Run a command when a file exists.",
      },
      {
        command: 'if [ "$ENV" = "prod" ]; then echo "Production"; else echo "Other"; fi',
        description: "Choose between two branches based on a variable.",
      },
    ],
    flags: [],
    tags: ["conditions", "scripting", "logic"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-case",
    tool: "bash",
    category: "conditions",
    name: "case",
    title: "Match multiple conditions",
    slug: "case",
    description:
      "Match a value against multiple patterns and execute the corresponding commands.",
    syntax: [
      "case <value> in <pattern>) <commands> ;; esac",
    ],
    examples: [
      {
        command: 'case "$ENV" in prod) echo "Production";; dev) echo "Development";; esac',
        description: "Run different commands depending on the environment.",
      },
    ],
    flags: [],
    tags: ["conditions", "scripting", "patterns"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-for",
    tool: "bash",
    category: "loops",
    name: "for",
    title: "Loop over values",
    slug: "for",
    description:
      "Execute a block of commands repeatedly for each item in a list.",
    syntax: [
      "for <variable> in <list>; do <commands>; done",
    ],
    examples: [
      {
        command: 'for file in *.log; do echo "$file"; done',
        description: "Loop through log files in the current directory.",
      },
      {
        command: 'for env in dev staging prod; do echo "$env"; done',
        description: "Loop through a list of environments.",
      },
    ],
    flags: [],
    tags: ["loops", "scripting", "automation"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-while",
    tool: "bash",
    category: "loops",
    name: "while",
    title: "Loop while a condition is true",
    slug: "while",
    description:
      "Repeatedly execute commands while a condition evaluates as true.",
    syntax: [
      "while <condition>; do <commands>; done",
    ],
    examples: [
      {
        command: 'while read -r line; do echo "$line"; done < input.txt',
        description: "Read and process a file line by line.",
      },
    ],
    flags: [],
    tags: ["loops", "scripting", "automation"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-function",
    tool: "bash",
    category: "functions",
    name: "function",
    title: "Create reusable shell functions",
    slug: "function",
    description:
      "Define reusable blocks of shell commands that can accept arguments.",
    syntax: [
      "name() { <commands>; }",
      "function name { <commands>; }",
    ],
    examples: [
      {
        command: 'greet() { echo "Hello $1"; }',
        description: "Define a function that accepts one argument.",
      },
      {
        command: 'deploy() { echo "Deploying $1"; }',
        description: "Create a reusable deployment function.",
      },
    ],
    flags: [],
    tags: ["functions", "scripting", "automation"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-arguments",
    tool: "bash",
    category: "variables",
    name: "$1 / $@ / $#",
    title: "Access script arguments",
    slug: "script-arguments",
    description:
      "Access positional arguments and argument counts passed to a Bash script or function.",
    syntax: [
      "$1",
      "$@",
      "$#",
      "$0",
    ],
    examples: [
      {
        command: 'echo "Script: $0, first argument: $1"',
        description: "Display the script name and first argument.",
      },
      {
        command: 'for arg in "$@"; do echo "$arg"; done',
        description: "Loop through all script arguments safely.",
      },
    ],
    flags: [],
    tags: ["arguments", "variables", "scripting"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-exit-status",
    tool: "bash",
    category: "conditions",
    name: "$?",
    title: "Read the last exit status",
    slug: "exit-status",
    description:
      "Read the exit status returned by the most recently executed command.",
    syntax: [
      "echo $?",
      "<command> && echo success",
      "<command> || echo failed",
    ],
    examples: [
      {
        command: "mkdir test && echo $?",
        description: "Display the exit status of the mkdir command.",
      },
      {
        command: "./deploy.sh || echo \"Deployment failed\"",
        description: "Run a fallback command when deployment returns a non-zero status.",
      },
    ],
    flags: [],
    tags: ["exit-status", "conditions", "scripting"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-pipeline",
    tool: "bash",
    category: "pipes-redirection",
    name: "|",
    title: "Pipe command output",
    slug: "pipe",
    description:
      "Send the standard output of one command directly into the standard input of another command.",
    syntax: [
      "<command1> | <command2>",
      "<command1> | <command2> | <command3>",
    ],
    examples: [
      {
        command: "ps aux | grep nginx",
        description: "Filter process output for nginx.",
      },
      {
        command: "cat access.log | grep 500 | wc -l",
        description: "Count log lines containing HTTP 500 responses.",
      },
    ],
    flags: [],
    tags: ["pipes", "redirection", "commands"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-output-redirection",
    tool: "bash",
    category: "pipes-redirection",
    name: ">",
    title: "Redirect command output",
    slug: "output-redirection",
    description:
      "Redirect standard output to a file, replacing the file's existing contents.",
    syntax: [
      "<command> > <file>",
    ],
    examples: [
      {
        command: "echo \"hello\" > output.txt",
        description: "Write output to a file, replacing existing content.",
      },
      {
        command: "ls -la > files.txt",
        description: "Save directory listing output to a file.",
      },
    ],
    flags: [],
    tags: ["redirection", "files", "output"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "bash-append-redirection",
    tool: "bash",
    category: "pipes-redirection",
    name: ">>",
    title: "Append command output",
    slug: "append-redirection",
    description:
      "Redirect standard output to a file while preserving its existing contents.",
    syntax: [
      "<command> >> <file>",
    ],
    examples: [
      {
        command: 'echo "new entry" >> app.log',
        description: "Append a line to a log file.",
      },
      {
        command: "date >> backup.log",
        description: "Append the current date to a log file.",
      },
    ],
    flags: [],
    tags: ["redirection", "files", "logs"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-stderr",
    tool: "bash",
    category: "pipes-redirection",
    name: "2>",
    title: "Redirect error output",
    slug: "stderr-redirection",
    description:
      "Redirect standard error output separately from standard output.",
    syntax: [
      "<command> 2> <file>",
      "<command> 2>> <file>",
    ],
    examples: [
      {
        command: "./deploy.sh 2> errors.log",
        description: "Write error output to errors.log.",
      },
      {
        command: "./deploy.sh 2>> errors.log",
        description: "Append error output to errors.log.",
      },
    ],
    flags: [],
    tags: ["stderr", "redirection", "errors"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-command-substitution",
    tool: "bash",
    category: "expansion",
    name: "$()",
    title: "Use command substitution",
    slug: "command-substitution",
    description:
      "Execute a command and substitute its output into another command or variable.",
    syntax: [
      "$(command)",
      "VARIABLE=$(command)",
    ],
    examples: [
      {
        command: 'today=$(date +%F)',
        description: "Store the current date in a variable.",
      },
      {
        command: 'echo "Files: $(ls | wc -l)"',
        description: "Use command output inside another command.",
      },
    ],
    flags: [],
    tags: ["expansion", "variables", "scripting"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-globbing",
    tool: "bash",
    category: "expansion",
    name: "Globbing",
    title: "Match filenames with patterns",
    slug: "globbing",
    description:
      "Use wildcard patterns such as *, ?, and [] to match filenames.",
    syntax: [
      "*",
      "?",
      "[abc]",
      "*.log",
    ],
    examples: [
      {
        command: "ls *.log",
        description: "Match all files ending in .log.",
      },
      {
        command: "rm *.tmp",
        description: "Match temporary files in the current directory.",
      },
    ],
    flags: [],
    tags: ["globbing", "wildcards", "files"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "bash-quotes",
    tool: "bash",
    category: "expansion",
    name: "Quotes",
    title: "Control shell expansion",
    slug: "quotes",
    description:
      "Use single and double quotes to control variable expansion, whitespace, and special characters.",
    syntax: [
      "'literal text'",
      "\"expanded $VARIABLE\"",
    ],
    examples: [
      {
        command: 'echo "$HOME"',
        description: "Expand the HOME variable inside double quotes.",
      },
      {
        command: "echo '$HOME'",
        description: "Print the literal string $HOME using single quotes.",
      },
    ],
    flags: [],
    tags: ["quoting", "expansion", "variables"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-exit",
    tool: "bash",
    category: "scripts",
    name: "exit",
    title: "Exit a shell or script",
    slug: "exit",
    description:
      "Terminate the current shell or script and optionally return a specific exit status.",
    syntax: [
      "exit",
      "exit <status>",
    ],
    examples: [
      {
        command: "exit 0",
        description: "Exit successfully.",
      },
      {
        command: "exit 1",
        description: "Exit with a generic failure status.",
      },
    ],
    flags: [],
    tags: ["scripts", "exit-status", "shell"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-set",
    tool: "bash",
    category: "scripts",
    name: "set",
    title: "Control shell options and positional parameters",
    slug: "set",
    description:
      "Enable shell options and control positional parameters used by Bash scripts.",
    syntax: [
      "set -e",
      "set -u",
      "set -x",
      "set -euo pipefail",
    ],
    examples: [
      {
        command: "set -e",
        description: "Exit a script when a command returns a non-zero status.",
      },
      {
        command: "set -x",
        description: "Print commands before executing them for debugging.",
      },
      {
        command: "set -euo pipefail",
        description: "Enable common strict-mode options for Bash scripts.",
      },
    ],
    flags: [
      {
        flag: "-e",
        meaning: "Exit when a simple command fails.",
      },
      {
        flag: "-u",
        meaning: "Treat unset variables as errors.",
      },
      {
        flag: "-x",
        meaning: "Print commands and their arguments as they are executed.",
      },
    ],
    tags: ["scripts", "debugging", "strict-mode"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-trap",
    tool: "bash",
    category: "scripts",
    name: "trap",
    title: "Handle signals and shell events",
    slug: "trap",
    description:
      "Execute commands when the shell receives signals or reaches specific shell events.",
    syntax: [
      "trap '<command>' <signal>",
      "trap -l",
    ],
    examples: [
      {
        command: 'trap \'echo "Interrupted"; exit 1\' INT',
        description: "Handle Ctrl+C in a script.",
      },
      {
        command: 'trap \'rm -f "$tmpfile"\' EXIT',
        description: "Clean up a temporary file when a script exits.",
      },
    ],
    flags: [
      {
        flag: "-l",
        meaning: "List available signal names and numbers.",
      },
    ],
    tags: ["signals", "scripts", "cleanup"],
    difficulty: "advanced",
    common: false,
    dangerous: false,
  },

  {
    id: "bash-sleep",
    tool: "bash",
    category: "timing",
    name: "sleep",
    title: "Pause execution",
    slug: "sleep",
    description:
      "Pause shell execution for a specified amount of time.",
    syntax: [
      "sleep <seconds>",
      "sleep <number><unit>",
    ],
    examples: [
      {
        command: "sleep 5",
        description: "Pause for five seconds.",
      },
      {
        command: "sleep 2m",
        description: "Pause for two minutes.",
      },
    ],
    flags: [],
    tags: ["timing", "scripts", "automation"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-background",
    tool: "bash",
    category: "processes",
    name: "&",
    title: "Run a command in the background",
    slug: "background",
    description:
      "Start a command asynchronously so the shell can continue accepting commands.",
    syntax: [
      "<command> &",
      "<command> > output.log 2>&1 &",
    ],
    examples: [
      {
        command: "sleep 60 &",
        description: "Run sleep in the background.",
      },
      {
        command: "./deploy.sh > deploy.log 2>&1 &",
        description: "Run a deployment script in the background and capture output.",
      },
    ],
    flags: [],
    tags: ["processes", "background", "jobs"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-jobs",
    tool: "bash",
    category: "processes",
    name: "jobs",
    title: "List shell jobs",
    slug: "jobs",
    description:
      "Display active jobs started by the current shell.",
    syntax: [
      "jobs",
      "jobs -l",
    ],
    examples: [
      {
        command: "jobs",
        description: "List active background and stopped jobs.",
      },
      {
        command: "jobs -l",
        description: "Show jobs together with their process IDs.",
      },
    ],
    flags: [
      {
        flag: "-l",
        meaning: "Include process IDs in the output.",
      },
    ],
    tags: ["jobs", "processes", "shell"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-fg",
    tool: "bash",
    category: "processes",
    name: "fg",
    title: "Bring a job to the foreground",
    slug: "fg",
    description:
      "Move a background or stopped shell job into the foreground.",
    syntax: [
      "fg",
      "fg %<job>",
    ],
    examples: [
      {
        command: "fg",
        description: "Bring the most recent background job to the foreground.",
      },
      {
        command: "fg %1",
        description: "Bring job number 1 to the foreground.",
      },
    ],
    flags: [],
    tags: ["jobs", "processes", "shell"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-bg",
    tool: "bash",
    category: "processes",
    name: "bg",
    title: "Resume a job in the background",
    slug: "bg",
    description:
      "Resume a stopped shell job and continue running it in the background.",
    syntax: [
      "bg",
      "bg %<job>",
    ],
    examples: [
      {
        command: "bg %1",
        description: "Resume job number 1 in the background.",
      },
    ],
    flags: [],
    tags: ["jobs", "processes", "shell"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-disown",
    tool: "bash",
    category: "processes",
    name: "disown",
    title: "Detach a shell job",
    slug: "disown",
    description:
      "Remove a job from the shell's job table so it is not managed by the current shell.",
    syntax: [
      "disown",
      "disown %<job>",
      "disown -a",
    ],
    examples: [
      {
        command: "disown %1",
        description: "Detach job number 1 from the current shell.",
      },
      {
        command: "disown -a",
        description: "Remove all jobs from the shell's job table.",
      },
    ],
    flags: [
      {
        flag: "-a",
        meaning: "Remove all jobs from the job table.",
      },
      {
        flag: "-h",
        meaning: "Mark jobs so they are not sent SIGHUP when the shell exits.",
      },
    ],
    tags: ["jobs", "processes", "background"],
    difficulty: "intermediate",
    common: false,
    dangerous: false,
  },

  {
    id: "bash-here-document",
    tool: "bash",
    category: "pipes-redirection",
    name: "<<",
    title: "Use a here-document",
    slug: "here-document",
    description:
      "Provide multiple lines of input to a command directly from a shell script or command line.",
    syntax: [
      "<<EOF",
      "<command> <<EOF",
    ],
    examples: [
      {
        command: 'cat <<EOF\nHello\nWorld\nEOF',
        description: "Pass multiple lines of text to cat.",
      },
      {
        command: 'cat <<EOF > config.txt\nPORT=8080\nENV=production\nEOF',
        description: "Generate a configuration file using a here-document.",
      },
    ],
    flags: [],
    tags: ["redirection", "scripting", "input"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-here-string",
    tool: "bash",
    category: "pipes-redirection",
    name: "<<<",
    title: "Use a here-string",
    slug: "here-string",
    description:
      "Provide a single string as standard input to a command.",
    syntax: [
      "<command> <<< <string>",
    ],
    examples: [
      {
        command: 'grep "error" <<< "$LOG_LINE"',
        description: "Pass a variable directly to grep as standard input.",
      },
      {
        command: 'read -r value <<< "hello world"',
        description: "Read a string into a variable using a here-string.",
      },
    ],
    flags: [],
    tags: ["redirection", "input", "scripting"],
    difficulty: "intermediate",
    common: false,
    dangerous: false,
  },

  {
    id: "bash-tee",
    tool: "bash",
    category: "pipes-redirection",
    name: "tee",
    title: "Write output to a file and the terminal",
    slug: "tee",
    description:
      "Read standard input and write it both to standard output and one or more files.",
    syntax: [
      "<command> | tee <file>",
      "<command> | tee -a <file>",
    ],
    examples: [
      {
        command: "echo \"hello\" | tee output.txt",
        description: "Display output and write it to a file.",
      },
      {
        command: "echo \"new entry\" | tee -a app.log",
        description: "Display output and append it to a log file.",
      },
    ],
    flags: [
      {
        flag: "-a",
        meaning: "Append to the file instead of overwriting it.",
      },
    ],
    tags: ["pipes", "redirection", "files", "logs"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },
];

export default bashCommands;