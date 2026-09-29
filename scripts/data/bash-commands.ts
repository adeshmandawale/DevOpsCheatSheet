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
    title: "Print text",
    slug: "echo",
    description:
      "Print text or variable values to standard output.",
    syntax: [
      "echo <text>",
      "echo \"$VARIABLE\"",
    ],
    examples: [
      {
        command: 'echo "Hello World"',
        description: "Print a message to the terminal.",
      },
      {
        command: 'echo "Home: $HOME"',
        description: "Print the value of the HOME environment variable.",
      },
    ],
    flags: [
      {
        flag: "-n",
        meaning: "Do not print a trailing newline.",
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
      "Print formatted text using format strings and arguments.",
    syntax: [
      'printf "<format>" <arguments>',
      'printf "%s\\n" "$VARIABLE"',
    ],
    examples: [
      {
        command: 'printf "Hello %s\\n" "Adesh"',
        description: "Print formatted text with a string argument.",
      },
      {
        command: 'printf "Count: %d\\n" 10',
        description: "Print an integer using a numeric format.",
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
      "Read a line of input from standard input and store it in a variable.",
    syntax: [
      "read <variable>",
      "read -p \"Prompt: \" <variable>",
    ],
    examples: [
      {
        command: 'read -p "Enter your name: " name',
        description: "Prompt the user and store the response in name.",
      },
      {
        command: "read username",
        description: "Read input into the username variable.",
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
        meaning: "Do not echo input characters to the terminal.",
      },
    ],
    tags: ["input", "variables", "scripting"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-export",
    tool: "bash",
    category: "variables-environment",
    name: "export",
    title: "Set environment variables",
    slug: "export",
    description:
      "Mark shell variables for export so child processes inherit them.",
    syntax: [
      "export VARIABLE=value",
      "export VARIABLE",
    ],
    examples: [
      {
        command: "export APP_ENV=production",
        description: "Create an environment variable available to child processes.",
      },
      {
        command: "export PATH=\"$PATH:/opt/bin\"",
        description: "Add a directory to the existing PATH.",
      },
    ],
    flags: [],
    tags: ["environment", "variables", "shell"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-unset",
    tool: "bash",
    category: "variables-environment",
    name: "unset",
    title: "Remove shell variables",
    slug: "unset",
    description:
      "Remove one or more shell variables or functions from the current shell environment.",
    syntax: [
      "unset <variable>",
      "unset VAR1 VAR2",
    ],
    examples: [
      {
        command: "unset APP_ENV",
        description: "Remove the APP_ENV variable.",
      },
      {
        command: "unset TEMP_VAR",
        description: "Remove a temporary shell variable.",
      },
    ],
    flags: [
      {
        flag: "-v",
        meaning: "Treat the supplied names as variables.",
      },
      {
        flag: "-f",
        meaning: "Treat the supplied names as shell functions.",
      },
    ],
    tags: ["variables", "environment", "shell"],
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
        description: "Reload the Bash configuration in the current shell.",
      },
      {
        command: "source ./config.sh",
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
      "Define or display shell aliases that expand into commands.",
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
        command: "alias gs='git status'",
        description: "Create a shortcut for git status.",
      },
    ],
    flags: [],
    tags: ["shell", "alias", "shortcuts"],
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
      "Evaluate file, string, and numeric conditions for use in shell scripts.",
    syntax: [
      "test <condition>",
      "[ <condition> ]",
    ],
    examples: [
      {
        command: '[ -f "config.yaml" ]',
        description: "Check whether config.yaml exists as a regular file.",
      },
      {
        command: '[ "$ENV" = "production" ]',
        description: "Check whether ENV equals production.",
      },
    ],
    flags: [
      {
        flag: "-f",
        meaning: "True when a regular file exists.",
      },
      {
        flag: "-d",
        meaning: "True when a directory exists.",
      },
      {
        flag: "-z",
        meaning: "True when a string has zero length.",
      },
      {
        flag: "-n",
        meaning: "True when a string is not empty.",
      },
    ],
    tags: ["conditions", "files", "scripting"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-if",
    tool: "bash",
    category: "control-flow",
    name: "if",
    title: "Run commands conditionally",
    slug: "if",
    description:
      "Execute different commands depending on whether a condition succeeds.",
    syntax: [
      "if <condition>; then <commands>; fi",
      "if <condition>; then <commands>; else <commands>; fi",
    ],
    examples: [
      {
        command: 'if [ -f "config.yaml" ]; then echo "Found"; fi',
        description: "Run a command when a file exists.",
      },
      {
        command:
          'if [ "$ENV" = "production" ]; then echo "Production"; else echo "Other"; fi',
        description: "Choose between two branches based on a variable.",
      },
    ],
    flags: [],
    tags: ["conditions", "control-flow", "scripting"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-case",
    tool: "bash",
    category: "control-flow",
    name: "case",
    title: "Match multiple conditions",
    slug: "case",
    description:
      "Select a block of commands based on pattern matching.",
    syntax: [
      "case <value> in <pattern>) <commands> ;; esac",
    ],
    examples: [
      {
        command:
          'case "$ENV" in production) echo "prod" ;; staging) echo "stage" ;; *) echo "other" ;; esac',
        description: "Choose an action based on the value of ENV.",
      },
    ],
    flags: [],
    tags: ["conditions", "control-flow", "patterns"],
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
      "Execute commands repeatedly for each item in a list.",
    syntax: [
      "for <variable> in <list>; do <commands>; done",
    ],
    examples: [
      {
        command: 'for file in *.log; do echo "$file"; done',
        description: "Loop through all .log files in the current directory.",
      },
      {
        command: 'for env in dev staging prod; do echo "$env"; done',
        description: "Loop through a fixed list of environments.",
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
    title: "Repeat while a condition succeeds",
    slug: "while",
    description:
      "Repeatedly execute commands while a condition returns success.",
    syntax: [
      "while <condition>; do <commands>; done",
    ],
    examples: [
      {
        command:
          'while read -r line; do echo "$line"; done < input.txt',
        description: "Read and process a file line by line.",
      },
      {
        command:
          'while [ "$count" -lt 5 ]; do echo "$count"; count=$((count + 1)); done',
        description: "Repeat a block while a numeric condition is true.",
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
    title: "Define reusable shell functions",
    slug: "function",
    description:
      "Create reusable groups of Bash commands that can accept arguments.",
    syntax: [
      "function <name> { <commands>; }",
      "<name>() { <commands>; }",
    ],
    examples: [
      {
        command: 'greet() { echo "Hello $1"; }',
        description: "Define a function that accepts a name as its first argument.",
      },
      {
        command: 'deploy() { echo "Deploying $1"; }',
        description: "Define a reusable deployment function.",
      },
    ],
    flags: [],
    tags: ["functions", "scripting", "automation"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-exit-status",
    tool: "$?",
    category: "scripting",
    name: "$?",
    title: "Read the last exit status",
    slug: "exit-status",
    description:
      "Read the exit status returned by the most recently executed command.",
    syntax: [
      "echo $?",
      "if [ $? -eq 0 ]; then ... fi",
    ],
    examples: [
      {
        command: "mkdir /tmp/example && echo $?",
        description: "Print the exit status of the previous command.",
      },
      {
        command: 'if [ $? -eq 0 ]; then echo "Success"; fi',
        description: "Check whether the previous command succeeded.",
      },
    ],
    flags: [],
    tags: ["exit-status", "scripting", "debugging"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-arguments",
    tool: "bash",
    category: "scripting",
    name: "$1 / $@ / $#",
    title: "Access script arguments",
    slug: "arguments",
    description:
      "Access positional arguments and argument counts passed to a Bash script or function.",
    syntax: [
      "$1",
      "$@",
      "$#",
    ],
    examples: [
      {
        command: 'echo "First argument: $1"',
        description: "Print the first positional argument.",
      },
      {
        command: 'for arg in "$@"; do echo "$arg"; done',
        description: "Loop through all arguments passed to the script.",
      },
      {
        command: 'echo "Arguments: $#"',
        description: "Print the number of positional arguments.",
      },
    ],
    flags: [],
    tags: ["arguments", "scripting", "variables"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-arithmetic",
    tool: "$(( ))",
    category: "scripting",
    name: "$(( ))",
    title: "Perform arithmetic",
    slug: "arithmetic",
    description:
      "Evaluate arithmetic expressions in Bash.",
    syntax: [
      "$((expression))",
      "(( expression ))",
    ],
    examples: [
      {
        command: 'result=$((10 + 5))',
        description: "Calculate a numeric expression and store the result.",
      },
      {
        command: '(( count++ ))',
        description: "Increment a numeric variable.",
      },
    ],
    flags: [],
    tags: ["arithmetic", "variables", "scripting"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-command-substitution",
    tool: "$()",
    category: "scripting",
    name: "$()",
    title: "Capture command output",
    slug: "command-substitution",
    description:
      "Run a command and substitute its output into another command or assignment.",
    syntax: [
      "VARIABLE=$(command)",
      "echo \"$(command)\"",
    ],
    examples: [
      {
        command: 'current_dir=$(pwd)',
        description: "Store the output of pwd in a variable.",
      },
      {
        command: 'echo "Today is $(date)"',
        description: "Insert command output into a string.",
      },
    ],
    flags: [],
    tags: ["substitution", "variables", "scripting"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-pipeline",
    tool: "|",
    category: "redirection",
    name: "|",
    title: "Pipe command output",
    slug: "pipe",
    description:
      "Send the standard output of one command to the standard input of another command.",
    syntax: [
      "command1 | command2",
      "command1 | command2 | command3",
    ],
    examples: [
      {
        command: "ps aux | grep nginx",
        description: "Search process output for nginx.",
      },
      {
        command: "cat access.log | grep 404 | wc -l",
        description: "Count lines containing HTTP 404 responses.",
      },
    ],
    flags: [],
    tags: ["pipe", "redirection", "shell", "commands"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-output-redirection",
    tool: ">",
    category: "redirection",
    name: "> / >>",
    title: "Redirect command output",
    slug: "output-redirection",
    description:
      "Write or append command output to files instead of displaying it on the terminal.",
    syntax: [
      "command > file",
      "command >> file",
    ],
    examples: [
      {
        command: 'echo "hello" > output.txt',
        description: "Write output to a file, replacing existing contents.",
      },
      {
        command: 'echo "another line" >> output.txt',
        description: "Append output to an existing file.",
      },
    ],
    flags: [],
    tags: ["redirection", "files", "output"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "bash-input-redirection",
    tool: "<",
    category: "redirection",
    name: "<",
    title: "Redirect file input",
    slug: "input-redirection",
    description:
      "Use the contents of a file as standard input for a command.",
    syntax: [
      "command < file",
    ],
    examples: [
      {
        command: "wc -l < access.log",
        description: "Count lines using the file as standard input.",
      },
      {
        command: "sort < names.txt",
        description: "Sort the contents of a file through standard input.",
      },
    ],
    flags: [],
    tags: ["redirection", "input", "files"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-background",
    tool: "&",
    category: "jobs-processes",
    name: "&",
    title: "Run commands in the background",
    slug: "background",
    description:
      "Start a command as a background job so the shell can continue accepting commands.",
    syntax: [
      "command &",
      "command > output.log 2>&1 &",
    ],
    examples: [
      {
        command: "npm run dev &",
        description: "Start a development process in the background.",
      },
      {
        command: "long-task > task.log 2>&1 &",
        description: "Run a long task in the background and redirect its output.",
      },
    ],
    flags: [],
    tags: ["processes", "jobs", "background"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-jobs",
    tool: "jobs",
    category: "jobs-processes",
    name: "jobs",
    title: "List shell jobs",
    slug: "jobs",
    description:
      "Display the active jobs managed by the current shell.",
    syntax: [
      "jobs",
      "jobs -l",
    ],
    examples: [
      {
        command: "jobs",
        description: "List background and stopped jobs.",
      },
      {
        command: "jobs -l",
        description: "List jobs with process IDs.",
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
    tool: "fg",
    category: "jobs-processes",
    name: "fg",
    title: "Bring a job to the foreground",
    slug: "fg",
    description:
      "Resume a stopped or background job in the foreground.",
    syntax: [
      "fg",
      "fg %<job>",
    ],
    examples: [
      {
        command: "fg",
        description: "Bring the most recently suspended or background job to the foreground.",
      },
      {
        command: "fg %1",
        description: "Bring job number 1 to the foreground.",
      },
    ],
    flags: [],
    tags: ["jobs", "processes", "foreground"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-bg",
    tool: "bg",
    category: "jobs-processes",
    name: "bg",
    title: "Resume a job in the background",
    slug: "bg",
    description:
      "Resume a suspended job while keeping it running in the background.",
    syntax: [
      "bg",
      "bg %<job>",
    ],
    examples: [
      {
        command: "bg",
        description: "Resume the most recently suspended job in the background.",
      },
      {
        command: "bg %1",
        description: "Resume job number 1 in the background.",
      },
    ],
    flags: [],
    tags: ["jobs", "processes", "background"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-wait",
    tool: "bash",
    category: "jobs-processes",
    name: "wait",
    title: "Wait for background jobs",
    slug: "wait",
    description:
      "Wait for background processes to finish and return their exit status.",
    syntax: [
      "wait",
      "wait <pid>",
      "wait %<job>",
    ],
    examples: [
      {
        command: "wait $!",
        description: "Wait for the most recently started background process.",
      },
      {
        command: "wait 12345",
        description: "Wait for a specific process ID.",
      },
    ],
    flags: [],
    tags: ["jobs", "processes", "scripting"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-command-grouping",
    tool: "{ }",
    category: "shell",
    name: "{ }",
    title: "Group commands in the current shell",
    slug: "command-grouping",
    description:
      "Group multiple commands so they execute as a single compound command in the current shell.",
    syntax: [
      "{ command1; command2; }",
      "{ command1; command2; } > output.txt",
    ],
    examples: [
      {
        command: '{ echo "Start"; echo "Done"; }',
        description: "Execute multiple commands as one grouped command.",
      },
      {
        command: '{ echo "one"; echo "two"; } > output.txt',
        description: "Redirect the combined output of a command group.",
      },
    ],
    flags: [],
    tags: ["shell", "grouping", "redirection"],
    difficulty: "intermediate",
    common: false,
    dangerous: false,
  },

  {
    id: "bash-command-separator",
    tool: ";",
    category: "shell",
    name: ";",
    title: "Separate commands",
    slug: "command-separator",
    description:
      "Separate commands so they execute sequentially regardless of the previous command's exit status.",
    syntax: [
      "command1; command2",
    ],
    examples: [
      {
        command: "mkdir backup; echo 'Backup directory ready'",
        description: "Run the second command after the first command finishes.",
      },
      {
        command: "cd /tmp; pwd",
        description: "Change directory and then print the current directory.",
      },
    ],
    flags: [],
    tags: ["shell", "commands", "control-flow"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-and-operator",
    tool: "&&",
    category: "control-flow",
    name: "&&",
    title: "Run the next command on success",
    slug: "and-operator",
    description:
      "Execute the next command only when the previous command succeeds.",
    syntax: [
      "command1 && command2",
    ],
    examples: [
      {
        command: "npm install && npm run build",
        description: "Build the project only if dependency installation succeeds.",
      },
      {
        command: "mkdir build && cd build",
        description: "Change into the directory only if creation succeeds.",
      },
    ],
    flags: [],
    tags: ["control-flow", "commands", "automation"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "bash-or-operator",
    tool: "||",
    category: "control-flow",
    name: "||",
    title: "Run the next command on failure",
    slug: "or-operator",
    description:
      "Execute the next command only when the previous command fails.",
    syntax: [
      "command1 || command2",
    ],
    examples: [
      {
        command: "test -f config.yaml || echo 'Missing config'",
        description: "Display a message when the file does not exist.",
      },
      {
        command: "systemctl is-active nginx || echo 'Nginx is not running'",
        description: "Run a fallback command when the service check fails.",
      },
    ],
    flags: [],
    tags: ["control-flow", "commands", "error-handling"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },
];

export default bashCommands;