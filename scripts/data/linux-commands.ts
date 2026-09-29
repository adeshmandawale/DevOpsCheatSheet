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

const linuxCommands: LinuxCommand[] = [
  {
    id: "linux-ls",
    tool: "linux",
    category: "file-management",
    name: "ls",
    title: "List Directory Contents",
    slug: "ls",
    description:
      "List files and directories in the current or specified directory.",

    syntax: [
      "ls",
      "ls -l",
      "ls -la",
      "ls -lh",
    ],

    examples: [
      {
        command: "ls",
        description:
          "List files and directories in the current directory.",
      },
      {
        command: "ls -l",
        description:
          "Display files in a detailed long-list format.",
      },
      {
        command: "ls -la",
        description:
          "Include hidden files in the listing.",
      },
      {
        command: "ls -lh",
        description:
          "Display file sizes in a human-readable format.",
      },
    ],

    flags: [
      {
        flag: "-l",
        meaning: "Long listing format",
      },
      {
        flag: "-a",
        meaning: "Include hidden files",
      },
      {
        flag: "-h",
        meaning: "Show file sizes in human-readable format",
      },
    ],

    tags: [
      "linux",
      "files",
      "directories",
      "listing",
    ],

    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-cd",
    tool: "linux",
    category: "file-management",
    name: "cd",
    title: "Change Directory",
    slug: "cd",
    description:
      "Change the current working directory.",

    syntax: [
      "cd /path/to/directory",
      "cd ..",
      "cd ~",
      "cd -",
    ],

    examples: [
      {
        command: "cd /var/log",
        description:
          "Move to the /var/log directory.",
      },
      {
        command: "cd ..",
        description:
          "Move to the parent directory.",
      },
      {
        command: "cd ~",
        description:
          "Move to the current user's home directory.",
      },
      {
        command: "cd -",
        description:
          "Return to the previous directory.",
      },
    ],

    flags: [],

    tags: [
      "linux",
      "navigation",
      "directories",
    ],

    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-pwd",
    tool: "linux",
    category: "file-management",
    name: "pwd",
    title: "Print Working Directory",
    slug: "pwd",
    description:
      "Display the absolute path of the current working directory.",

    syntax: ["pwd"],

    examples: [
      {
        command: "pwd",
        description:
          "Show the absolute path of the current directory.",
      },
    ],

    flags: [],

    tags: [
      "linux",
      "navigation",
      "directories",
    ],

    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-mkdir",
    tool: "linux",
    category: "file-management",
    name: "mkdir",
    title: "Create Directories",
    slug: "mkdir",
    description:
      "Create new directories.",

    syntax: [
      "mkdir directory",
      "mkdir -p path/to/directory",
    ],

    examples: [
      {
        command: "mkdir projects",
        description:
          "Create a directory named projects.",
      },
      {
        command: "mkdir -p projects/devops/linux",
        description:
          "Create nested directories if they do not already exist.",
      },
    ],

    flags: [
      {
        flag: "-p",
        meaning:
          "Create parent directories as needed",
      },
    ],

    tags: [
      "linux",
      "directories",
      "files",
    ],

    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-touch",
    tool: "linux",
    category: "file-management",
    name: "touch",
    title: "Create or Update Files",
    slug: "touch",
    description:
      "Create an empty file or update the modification time of an existing file.",

    syntax: [
      "touch filename",
    ],

    examples: [
      {
        command: "touch notes.txt",
        description:
          "Create an empty file named notes.txt.",
      },
      {
        command: "touch file1.txt file2.txt",
        description:
          "Create multiple files at once.",
      },
    ],

    flags: [],

    tags: [
      "linux",
      "files",
      "creation",
    ],

    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-cp",
    tool: "linux",
    category: "file-management",
    name: "cp",
    title: "Copy Files and Directories",
    slug: "cp",
    description:
      "Copy files or directories from one location to another.",

    syntax: [
      "cp source destination",
      "cp -r source-directory destination-directory",
    ],

    examples: [
      {
        command: "cp file.txt backup.txt",
        description:
          "Copy file.txt to backup.txt.",
      },
      {
        command: "cp file.txt /tmp/",
        description:
          "Copy file.txt into the /tmp directory.",
      },
      {
        command: "cp -r project backup",
        description:
          "Recursively copy the project directory.",
      },
    ],

    flags: [
      {
        flag: "-r",
        meaning:
          "Copy directories recursively",
      },
      {
        flag: "-i",
        meaning:
          "Ask before overwriting an existing file",
      },
    ],

    tags: [
      "linux",
      "files",
      "directories",
      "copy",
    ],

    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-mv",
    tool: "linux",
    category: "file-management",
    name: "mv",
    title: "Move or Rename Files",
    slug: "mv",
    description:
      "Move files and directories or rename them.",

    syntax: [
      "mv source destination",
    ],

    examples: [
      {
        command: "mv old.txt new.txt",
        description:
          "Rename old.txt to new.txt.",
      },
      {
        command: "mv file.txt /tmp/",
        description:
          "Move file.txt into the /tmp directory.",
      },
      {
        command: "mv project backup/",
        description:
          "Move the project directory into backup.",
      },
    ],

    flags: [
      {
        flag: "-i",
        meaning:
          "Ask before overwriting an existing file",
      },
      {
        flag: "-v",
        meaning:
          "Display what is being moved",
      },
    ],

    tags: [
      "linux",
      "files",
      "directories",
      "move",
      "rename",
    ],

    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-rm",
    tool: "linux",
    category: "file-management",
    name: "rm",
    title: "Remove Files and Directories",
    slug: "rm",
    description:
      "Remove files and directories from the filesystem.",

    syntax: [
      "rm filename",
      "rm -r directory",
      "rm -i filename",
    ],

    examples: [
      {
        command: "rm file.txt",
        description:
          "Remove a file named file.txt.",
      },
      {
        command: "rm -r project",
        description:
          "Recursively remove a directory and its contents.",
      },
      {
        command: "rm -i file.txt",
        description:
          "Ask for confirmation before removing the file.",
      },
    ],

    flags: [
      {
        flag: "-r",
        meaning:
          "Remove directories recursively",
      },
      {
        flag: "-i",
        meaning:
          "Ask for confirmation before removing",
      },
      {
        flag: "-f",
        meaning:
          "Force removal without prompting",
      },
    ],

    tags: [
      "linux",
      "files",
      "directories",
      "delete",
    ],

    difficulty: "advanced",
    common: true,
    dangerous: true,
  },

  {
    id: "linux-cat",
    tool: "linux",
    category: "text-processing",
    name: "cat",
    title: "Display File Contents",
    slug: "cat",
    description:
      "Display the contents of one or more files in the terminal.",

    syntax: [
      "cat file.txt",
      "cat file1.txt file2.txt",
    ],

    examples: [
      {
        command: "cat config.txt",
        description:
          "Display the contents of config.txt.",
      },
      {
        command: "cat file1.txt file2.txt",
        description:
          "Display the contents of multiple files.",
      },
      {
        command: "cat -n file.txt",
        description:
          "Display the file with line numbers.",
      },
    ],

    flags: [
      {
        flag: "-n",
        meaning:
          "Show line numbers",
      },
    ],

    tags: [
      "linux",
      "files",
      "text",
      "output",
    ],

    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-grep",
    tool: "linux",
    category: "text-processing",
    name: "grep",
    title: "Search Text",
    slug: "grep",
    description:
      "Search for matching text or patterns inside files and command output.",

    syntax: [
      'grep "pattern" file',
      'grep -i "pattern" file',
      'grep -r "pattern" directory',
    ],

    examples: [
      {
        command: 'grep "error" app.log',
        description:
          "Search for the word error inside app.log.",
      },
      {
        command: 'grep -i "error" app.log',
        description:
          "Search without considering letter case.",
      },
      {
        command: 'grep -r "TODO" .',
        description:
          "Recursively search for TODO in the current directory.",
      },
    ],

    flags: [
      {
        flag: "-i",
        meaning:
          "Ignore case differences",
      },
      {
        flag: "-r",
        meaning:
          "Search recursively through directories",
      },
    ],

    tags: [
      "linux",
      "search",
      "text",
      "logs",
      "troubleshooting",
    ],

    difficulty: "beginner",
    common: true,
    dangerous: false,
    },

  {
    id: "linux-less",
    tool: "linux",
    category: "text-processing",
    name: "less",
    title: "View Files Page by Page",
    slug: "less",
    description:
      "View large files interactively without printing the entire file to the terminal.",

    syntax: [
      "less file.txt",
      "command | less",
    ],

    examples: [
      {
        command: "less /var/log/syslog",
        description:
          "Open a large log file for interactive viewing.",
      },
      {
        command: "cat app.log | less",
        description:
          "View command output one screen at a time.",
      },
    ],

    flags: [],

    tags: [
      "linux",
      "files",
      "logs",
      "paging",
      "troubleshooting",
    ],

    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-head",
    tool: "linux",
    category: "text-processing",
    name: "head",
    title: "Show Beginning of File",
    slug: "head",
    description:
      "Display the beginning lines of a file or command output.",

    syntax: [
      "head file.txt",
      "head -n 20 file.txt",
    ],

    examples: [
      {
        command: "head file.txt",
        description:
          "Display the first 10 lines of the file.",
      },
      {
        command: "head -n 20 file.txt",
        description:
          "Display the first 20 lines.",
      },
      {
        command: "ps aux | head",
        description:
          "Display the first lines of the process list.",
      },
    ],

    flags: [
      {
        flag: "-n",
        meaning:
          "Specify the number of lines to display",
      },
    ],

    tags: [
      "linux",
      "text",
      "files",
      "logs",
    ],

    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-tail",
    tool: "linux",
    category: "text-processing",
    name: "tail",
    title: "Show End of File",
    slug: "tail",
    description:
      "Display the last lines of a file or command output.",

    syntax: [
      "tail file.txt",
      "tail -n 20 file.txt",
      "tail -f app.log",
    ],

    examples: [
      {
        command: "tail file.txt",
        description:
          "Display the last 10 lines of the file.",
      },
      {
        command: "tail -n 20 file.txt",
        description:
          "Display the last 20 lines.",
      },
      {
        command: "tail -f app.log",
        description:
          "Continuously follow new lines added to a log file.",
      },
    ],

    flags: [
      {
        flag: "-n",
        meaning:
          "Specify the number of lines to display",
      },
      {
        flag: "-f",
        meaning:
          "Follow the file as new content is added",
      },
    ],

    tags: [
      "linux",
      "text",
      "files",
      "logs",
      "troubleshooting",
    ],

    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-wc",
    tool: "linux",
    category: "text-processing",
    name: "wc",
    title: "Count Lines, Words, and Bytes",
    slug: "wc",
    description:
      "Count lines, words, characters, or bytes in files and command output.",

    syntax: [
      "wc file.txt",
      "wc -l file.txt",
      "wc -w file.txt",
    ],

    examples: [
      {
        command: "wc file.txt",
        description:
          "Display line, word, and byte counts.",
      },
      {
        command: "wc -l file.txt",
        description:
          "Count the number of lines in a file.",
      },
      {
        command: "ls | wc -l",
        description:
          "Count the number of entries returned by ls.",
      },
    ],

    flags: [
      {
        flag: "-l",
        meaning: "Count lines",
      },
      {
        flag: "-w",
        meaning: "Count words",
      },
      {
        flag: "-c",
        meaning: "Count bytes",
      },
    ],

    tags: [
      "linux",
      "text",
      "counting",
      "files",
    ],

    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-sort",
    tool: "linux",
    category: "text-processing",
    name: "sort",
    title: "Sort Lines of Text",
    slug: "sort",
    description:
      "Sort lines of text alphabetically or numerically.",

    syntax: [
      "sort file.txt",
      "sort -r file.txt",
      "sort -n numbers.txt",
    ],

    examples: [
      {
        command: "sort names.txt",
        description:
          "Sort lines alphabetically.",
      },
      {
        command: "sort -r names.txt",
        description:
          "Sort lines in reverse order.",
      },
      {
        command: "sort -n numbers.txt",
        description:
          "Sort numbers numerically.",
      },
    ],

    flags: [
      {
        flag: "-r",
        meaning:
          "Reverse the sorting order",
      },
      {
        flag: "-n",
        meaning:
          "Sort numerically",
      },
    ],

    tags: [
      "linux",
      "text",
      "sorting",
      "files",
    ],

    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-uniq",
    tool: "linux",
    category: "text-processing",
    name: "uniq",
    title: "Filter Repeated Lines",
    slug: "uniq",
    description:
      "Report or remove consecutive repeated lines from text.",

    syntax: [
      "uniq file.txt",
      "sort file.txt | uniq",
      "sort file.txt | uniq -c",
    ],

    examples: [
      {
        command: "uniq file.txt",
        description:
          "Remove consecutive duplicate lines.",
      },
      {
        command: "sort names.txt | uniq",
        description:
          "Sort the lines and remove duplicate values.",
      },
      {
        command: "sort names.txt | uniq -c",
        description:
          "Count occurrences of each unique line.",
      },
    ],

    flags: [
      {
        flag: "-c",
        meaning:
          "Prefix lines with their number of occurrences",
      },
      {
        flag: "-d",
        meaning:
          "Display only duplicated lines",
      },
    ],

    tags: [
      "linux",
      "text",
      "duplicates",
      "sorting",
      "files",
    ],

    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-chmod",
    tool: "linux",
    category: "permissions",
    name: "chmod",
    title: "Change File Permissions",
    slug: "chmod",
    description:
      "Change the permissions of files and directories.",

    syntax: [
      "chmod permissions file",
      "chmod 755 script.sh",
      "chmod u+x script.sh",
    ],

    examples: [
      {
        command: "chmod 755 script.sh",
        description:
          "Give the owner full permissions and others read and execute permissions.",
      },
      {
        command: "chmod u+x script.sh",
        description:
          "Add execute permission for the file owner.",
      },
      {
        command: "chmod 644 config.txt",
        description:
          "Set read/write permission for the owner and read-only permission for others.",
      },
    ],

    flags: [
      {
        flag: "-R",
        meaning:
          "Apply permissions recursively",
      },
    ],

    tags: [
      "linux",
      "permissions",
      "security",
      "files",
    ],

    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "linux-chown",
    tool: "linux",
    category: "permissions",
    name: "chown",
    title: "Change File Owner",
    slug: "chown",
    description:
      "Change the owner and optionally the group of files and directories.",

    syntax: [
      "chown user file",
      "chown user:group file",
      "chown -R user:group directory",
    ],

    examples: [
      {
        command: "chown adesh file.txt",
        description:
          "Change the owner of file.txt.",
      },
      {
        command: "chown adesh:devops file.txt",
        description:
          "Change both the owner and group.",
      },
      {
        command: "chown -R adesh:devops project/",
        description:
          "Recursively change ownership of a directory.",
      },
    ],

    flags: [
      {
        flag: "-R",
        meaning:
          "Apply ownership changes recursively",
      },
    ],

    tags: [
      "linux",
      "permissions",
      "ownership",
      "security",
    ],

    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "linux-chgrp",
    tool: "linux",
    category: "permissions",
    name: "chgrp",
    title: "Change File Group",
    slug: "chgrp",
    description:
      "Change the group ownership of files and directories.",

    syntax: [
      "chgrp group file",
      "chgrp -R group directory",
    ],

    examples: [
      {
        command: "chgrp devops project.txt",
        description:
          "Change the group ownership of project.txt.",
      },
      {
        command: "chgrp -R devops project/",
        description:
          "Recursively change the group of a directory.",
      },
    ],

    flags: [
      {
        flag: "-R",
        meaning:
          "Apply the group change recursively",
      },
    ],

    tags: [
      "linux",
      "permissions",
      "groups",
      "security",
    ],

    difficulty: "beginner",
    common: false,
    dangerous: true,
  },

  {
    id: "linux-whoami",
    tool: "linux",
    category: "system-information",
    name: "whoami",
    title: "Show Current User",
    slug: "whoami",
    description:
      "Display the username of the current user.",

    syntax: [
      "whoami",
    ],

    examples: [
      {
        command: "whoami",
        description:
          "Display the current username.",
      },
    ],

    flags: [],

    tags: [
      "linux",
      "users",
      "identity",
      "system",
    ],

    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-id",
    tool: "linux",
    category: "system-information",
    name: "id",
    title: "Show User and Group IDs",
    slug: "id",
    description:
      "Display user ID, group ID, and group memberships.",

    syntax: [
      "id",
      "id username",
    ],

    examples: [
      {
        command: "id",
        description:
          "Display identity information for the current user.",
      },
      {
        command: "id adesh",
        description:
          "Display identity information for a specific user.",
      },
    ],

    flags: [],

    tags: [
      "linux",
      "users",
      "groups",
      "permissions",
    ],

    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-uname",
    tool: "linux",
    category: "system-information",
    name: "uname",
    title: "Show System Information",
    slug: "uname",
    description:
      "Display information about the operating system and kernel.",

    syntax: [
      "uname",
      "uname -a",
      "uname -r",
    ],

    examples: [
      {
        command: "uname",
        description:
          "Display the operating system name.",
      },
      {
        command: "uname -a",
        description:
          "Display detailed system and kernel information.",
      },
      {
        command: "uname -r",
        description:
          "Display the kernel release version.",
      },
    ],

    flags: [
      {
        flag: "-a",
        meaning:
          "Display all available system information",
      },
      {
        flag: "-r",
        meaning:
          "Display the kernel release",
      },
    ],

    tags: [
      "linux",
      "system",
      "kernel",
      "information",
    ],

    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-uptime",
    tool: "linux",
    category: "system-information",
    name: "uptime",
    title: "Show System Uptime",
    slug: "uptime",
    description:
      "Display how long the system has been running and basic load information.",

    syntax: [
      "uptime",
    ],

    examples: [
      {
        command: "uptime",
        description:
          "Show system uptime, logged-in users, and load averages.",
      },
    ],

    flags: [],

    tags: [
      "linux",
      "system",
      "monitoring",
      "performance",
    ],

    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-free",
    tool: "linux",
    category: "system-information",
    name: "free",
    title: "Show Memory Usage",
    slug: "free",
    description:
      "Display information about system memory and swap usage.",

    syntax: [
      "free",
      "free -h",
    ],

    examples: [
      {
        command: "free",
        description:
          "Display memory and swap usage.",
      },
      {
        command: "free -h",
        description:
          "Display memory values in human-readable units.",
      },
    ],

    flags: [
      {
        flag: "-h",
        meaning:
          "Show memory values in human-readable format",
      },
    ],

    tags: [
      "linux",
      "memory",
      "system",
      "monitoring",
    ],

    difficulty: "beginner",
    common: true,
    dangerous: false,
  },
    {
    id: "linux-ps",
    tool: "linux",
    category: "process-management",
    name: "ps",
    title: "Display running processes",
    slug: "ps",
    description:
      "Displays information about currently running processes.",
    syntax: [
      "ps",
      "ps aux",
      "ps -ef",
    ],
    examples: [
      {
        command: "ps",
        description:
          "Show processes associated with the current terminal.",
      },
      {
        command: "ps aux",
        description:
          "Show detailed information about all running processes.",
      },
      {
        command: "ps -ef",
        description:
          "Display all processes in a full-format listing.",
      },
    ],
    flags: [
      {
        flag: "a",
        meaning: "Show processes for all users with a terminal.",
      },
      {
        flag: "u",
        meaning: "Display user-oriented process information.",
      },
      {
        flag: "x",
        meaning: "Include processes without a controlling terminal.",
      },
      {
        flag: "-e",
        meaning: "Select all processes.",
      },
      {
        flag: "-f",
        meaning: "Show full-format process information.",
      },
    ],
    tags: ["linux", "processes", "monitoring", "devops"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-top",
    tool: "linux",
    category: "process-management",
    name: "top",
    title: "Monitor processes in real time",
    slug: "top",
    description:
      "Provides a real-time view of running processes and system resource usage.",
    syntax: [
      "top",
      "top -u username",
    ],
    examples: [
      {
        command: "top",
        description:
          "Monitor CPU, memory, load average, and running processes in real time.",
      },
      {
        command: "top -u username",
        description:
          "Display processes belonging to a specific user.",
      },
    ],
    flags: [
      {
        flag: "-u",
        meaning: "Show processes belonging to a specific user.",
      },
    ],
    tags: ["linux", "processes", "monitoring", "cpu", "memory"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-htop",
    tool: "linux",
    category: "process-management",
    name: "htop",
    title: "Interactive process viewer",
    slug: "htop",
    description:
      "Provides an interactive and easier-to-read view of running processes and system resources.",
    syntax: [
      "htop",
    ],
    examples: [
      {
        command: "htop",
        description:
          "Open an interactive process monitor.",
      },
    ],
    flags: [],
    tags: ["linux", "processes", "monitoring", "htop"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-kill",
    tool: "linux",
    category: "process-management",
    name: "kill",
    title: "Send a signal to a process",
    slug: "kill",
    description:
      "Sends a signal to a process, commonly used to request or force a process to terminate.",
    syntax: [
      "kill PID",
      "kill -9 PID",
      "kill -SIGTERM PID",
    ],
    examples: [
      {
        command: "kill 1234",
        description:
          "Send the default termination signal to process 1234.",
      },
      {
        command: "kill -9 1234",
        description:
          "Forcefully terminate process 1234.",
      },
    ],
    flags: [
      {
        flag: "-9",
        meaning: "Send SIGKILL, which immediately terminates the process.",
      },
      {
        flag: "-SIGTERM",
        meaning: "Send SIGTERM, allowing the process an opportunity to shut down cleanly.",
      },
    ],
    tags: ["linux", "processes", "signals", "troubleshooting"],
    difficulty: "intermediate",
    common: true,
    dangerous: true,
  },

  {
    id: "linux-jobs",
    tool: "linux",
    category: "process-management",
    name: "jobs",
    title: "List shell jobs",
    slug: "jobs",
    description:
      "Displays jobs started from the current shell, including background and stopped jobs.",
    syntax: [
      "jobs",
      "jobs -l",
    ],
    examples: [
      {
        command: "jobs",
        description:
          "List background and stopped jobs in the current shell.",
      },
      {
        command: "jobs -l",
        description:
          "Display jobs together with their process IDs.",
      },
    ],
    flags: [
      {
        flag: "-l",
        meaning: "List process IDs in addition to normal job information.",
      },
    ],
    tags: ["linux", "processes", "jobs", "shell"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-bg",
    tool: "linux",
    category: "process-management",
    name: "bg",
    title: "Resume a stopped job in the background",
    slug: "bg",
    description:
      "Resumes a stopped shell job and runs it in the background.",
    syntax: [
      "bg",
      "bg %1",
    ],
    examples: [
      {
        command: "bg",
        description:
          "Resume the most recently stopped job in the background.",
      },
      {
        command: "bg %1",
        description:
          "Resume job number 1 in the background.",
      },
    ],
    flags: [],
    tags: ["linux", "processes", "jobs", "shell"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-fg",
    tool: "linux",
    category: "process-management",
    name: "fg",
    title: "Bring a job to the foreground",
    slug: "fg",
    description:
      "Moves a background or stopped shell job into the foreground.",
    syntax: [
      "fg",
      "fg %1",
    ],
    examples: [
      {
        command: "fg",
        description:
          "Bring the most recently used background job to the foreground.",
      },
      {
        command: "fg %1",
        description:
          "Bring job number 1 to the foreground.",
      },
    ],
    flags: [],
    tags: ["linux", "processes", "jobs", "shell"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-pgrep",
    tool: "linux",
    category: "process-management",
    name: "pgrep",
    title: "Find processes by name",
    slug: "pgrep",
    description:
      "Searches for running processes based on their name or other attributes.",
    syntax: [
      "pgrep process_name",
      "pgrep -a process_name",
    ],
    examples: [
      {
        command: "pgrep nginx",
        description:
          "Find process IDs for processes named nginx.",
      },
      {
        command: "pgrep -a nginx",
        description:
          "Show matching process IDs together with their command lines.",
      },
    ],
    flags: [
      {
        flag: "-a",
        meaning: "List the process ID and the full process name.",
      },
    ],
    tags: ["linux", "processes", "search", "troubleshooting"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-pkill",
    tool: "linux",
    category: "process-management",
    name: "pkill",
    title: "Send signals to processes by name",
    slug: "pkill",
    description:
      "Sends signals to processes based on their name or other matching criteria.",
    syntax: [
      "pkill process_name",
      "pkill -9 process_name",
    ],
    examples: [
      {
        command: "pkill nginx",
        description:
          "Send the default termination signal to matching nginx processes.",
      },
      {
        command: "pkill -9 nginx",
        description:
          "Forcefully terminate matching nginx processes.",
      },
    ],
    flags: [
      {
        flag: "-9",
        meaning: "Send SIGKILL to matching processes.",
      },
    ],
    tags: ["linux", "processes", "signals", "troubleshooting"],
    difficulty: "intermediate",
    common: true,
    dangerous: true,
  },

  {
    id: "linux-nice",
    tool: "linux",
    category: "process-management",
    name: "nice",
    title: "Run a command with a modified priority",
    slug: "nice",
    description:
      "Starts a command with a specified process scheduling priority.",
    syntax: [
      "nice command",
      "nice -n 10 command",
    ],
    examples: [
      {
        command: "nice sleep 100",
        description:
          "Run a command with the default nice adjustment.",
      },
      {
        command: "nice -n 10 backup.sh",
        description:
          "Start a backup script with a lower CPU scheduling priority.",
      },
    ],
    flags: [
      {
        flag: "-n",
        meaning: "Specify the nice value to apply to the command.",
      },
    ],
    tags: ["linux", "processes", "priority", "performance"],
    difficulty: "intermediate",
    common: false,
    dangerous: false,
  },
    {
    id: "linux-env",
    tool: "linux",
    category: "environment",
    name: "env",
    title: "Display environment variables",
    slug: "env",
    description:
      "Displays the environment variables available to the current process.",
    syntax: [
      "env",
      "env | grep PATH",
    ],
    examples: [
      {
        command: "env",
        description:
          "Display all environment variables available to the current shell.",
      },
      {
        command: "env | grep PATH",
        description:
          "Find environment variables containing PATH.",
      },
    ],
    flags: [],
    tags: ["linux", "environment", "variables", "shell"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-printenv",
    tool: "linux",
    category: "environment",
    name: "printenv",
    title: "Print environment variables",
    slug: "printenv",
    description:
      "Displays the value of environment variables.",
    syntax: [
      "printenv",
      "printenv PATH",
    ],
    examples: [
      {
        command: "printenv",
        description:
          "Display all environment variables.",
      },
      {
        command: "printenv PATH",
        description:
          "Display the current PATH environment variable.",
      },
    ],
    flags: [],
    tags: ["linux", "environment", "variables", "shell"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-export",
    tool: "linux",
    category: "environment",
    name: "export",
    title: "Set environment variables",
    slug: "export",
    description:
      "Sets shell variables as environment variables that can be inherited by processes started from the shell.",
    syntax: [
      "export VARIABLE=value",
      "export PATH=$PATH:/new/path",
    ],
    examples: [
      {
        command: "export APP_ENV=production",
        description:
          "Set an environment variable for the current shell and its child processes.",
      },
      {
        command: "export PATH=$PATH:/opt/tools",
        description:
          "Add a directory to the existing PATH.",
      },
    ],
    flags: [],
    tags: ["linux", "environment", "variables", "shell", "devops"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-echo",
    tool: "linux",
    category: "environment",
    name: "echo",
    title: "Display text or variable values",
    slug: "echo",
    description:
      "Prints text, variable values, or other supplied arguments to standard output.",
    syntax: [
      "echo text",
      "echo $VARIABLE",
    ],
    examples: [
      {
        command: "echo Hello",
        description:
          "Print text to the terminal.",
      },
      {
        command: "echo $HOME",
        description:
          "Display the value of the HOME environment variable.",
      },
    ],
    flags: [
      {
        flag: "-n",
        meaning: "Do not output the trailing newline.",
      },
      {
        flag: "-e",
        meaning: "Enable interpretation of backslash escape sequences in shells that support this option.",
      },
    ],
    tags: ["linux", "shell", "variables", "output"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-which",
    tool: "linux",
    category: "system-information",
    name: "which",
    title: "Locate a command",
    slug: "which",
    description:
      "Shows the path of the executable that would be used when a command is run.",
    syntax: [
      "which command",
    ],
    examples: [
      {
        command: "which python",
        description:
          "Show the path of the Python executable found in PATH.",
      },
      {
        command: "which git",
        description:
          "Show the location of the Git executable.",
      },
    ],
    flags: [],
    tags: ["linux", "commands", "path", "troubleshooting"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-whereis",
    tool: "linux",
    category: "system-information",
    name: "whereis",
    title: "Locate binaries and documentation",
    slug: "whereis",
    description:
      "Locates the binary, source, and manual page files associated with a command.",
    syntax: [
      "whereis command",
      "whereis -b command",
    ],
    examples: [
      {
        command: "whereis git",
        description:
          "Find the binary and related files for Git.",
      },
      {
        command: "whereis -b python",
        description:
          "Search specifically for the binary location of Python.",
      },
    ],
    flags: [
      {
        flag: "-b",
        meaning: "Search only for binary files.",
      },
    ],
    tags: ["linux", "commands", "path", "man-pages"],
    difficulty: "beginner",
    common: false,
    dangerous: false,
  },

  {
    id: "linux-hostname",
    tool: "linux",
    category: "system-information",
    name: "hostname",
    title: "Display or set the system hostname",
    slug: "hostname",
    description:
      "Displays the current system hostname and can be used to query related host information.",
    syntax: [
      "hostname",
      "hostname -I",
    ],
    examples: [
      {
        command: "hostname",
        description:
          "Display the system hostname.",
      },
      {
        command: "hostname -I",
        description:
          "Display the IP addresses assigned to the host.",
      },
    ],
    flags: [
      {
        flag: "-I",
        meaning: "Display all configured network addresses of the host.",
      },
    ],
    tags: ["linux", "system", "hostname", "networking"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-date",
    tool: "linux",
    category: "system-information",
    name: "date",
    title: "Display or format the system date",
    slug: "date",
    description:
      "Displays the current date and time and can format the output in different ways.",
    syntax: [
      "date",
      "date '+%Y-%m-%d'",
    ],
    examples: [
      {
        command: "date",
        description:
          "Display the current date and time.",
      },
      {
        command: "date '+%Y-%m-%d'",
        description:
          "Display the date in YYYY-MM-DD format.",
      },
    ],
    flags: [],
    tags: ["linux", "date", "time", "system"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-cal",
    tool: "linux",
    category: "system-information",
    name: "cal",
    title: "Display a calendar",
    slug: "cal",
    description:
      "Displays a calendar in the terminal.",
    syntax: [
      "cal",
      "cal 2026",
    ],
    examples: [
      {
        command: "cal",
        description:
          "Display the calendar for the current month.",
      },
      {
        command: "cal 2026",
        description:
          "Display the calendar for an entire year.",
      },
    ],
    flags: [],
    tags: ["linux", "calendar", "date", "time"],
    difficulty: "beginner",
    common: false,
    dangerous: false,
  },

  {
    id: "linux-history",
    tool: "linux",
    category: "environment",
    name: "history",
    title: "View command history",
    slug: "history",
    description:
      "Displays commands previously entered in the current shell session or stored shell history.",
    syntax: [
      "history",
      "history 20",
    ],
    examples: [
      {
        command: "history",
        description:
          "Display the shell command history.",
      },
      {
        command: "history 20",
        description:
          "Display the most recent 20 commands.",
      },
    ],
    flags: [],
    tags: ["linux", "shell", "history", "commands"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },
    {
    id: "linux-ip",
    tool: "linux",
    category: "networking",
    name: "ip",
    title: "Manage network interfaces and routing",
    slug: "ip",
    description:
      "Displays and manages network interfaces, IP addresses, routes, and other network configuration.",
    syntax: [
      "ip addr",
      "ip link",
      "ip route",
    ],
    examples: [
      {
        command: "ip addr",
        description:
          "Display network interfaces and their assigned IP addresses.",
      },
      {
        command: "ip link",
        description:
          "Display available network interfaces and their state.",
      },
      {
        command: "ip route",
        description:
          "Display the system's routing table.",
      },
    ],
    flags: [],
    tags: ["linux", "networking", "ip", "interfaces", "routing"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-ping",
    tool: "linux",
    category: "networking",
    name: "ping",
    title: "Test network connectivity",
    slug: "ping",
    description:
      "Tests whether a host is reachable over a network and measures round-trip time.",
    syntax: [
      "ping hostname",
      "ping -c 4 hostname",
    ],
    examples: [
      {
        command: "ping google.com",
        description:
          "Send ICMP requests to test connectivity to a host.",
      },
      {
        command: "ping -c 4 8.8.8.8",
        description:
          "Send four ICMP requests to a specific IP address.",
      },
    ],
    flags: [
      {
        flag: "-c",
        meaning: "Specify the number of packets to send.",
      },
    ],
    tags: ["linux", "networking", "connectivity", "troubleshooting"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-ss",
    tool: "linux",
    category: "networking",
    name: "ss",
    title: "Display network sockets",
    slug: "ss",
    description:
      "Displays information about network sockets, listening ports, and active connections.",
    syntax: [
      "ss",
      "ss -tuln",
      "ss -tunap",
    ],
    examples: [
      {
        command: "ss -tuln",
        description:
          "Display listening TCP and UDP ports without resolving service names.",
      },
      {
        command: "ss -tunap",
        description:
          "Display TCP and UDP connections together with process information.",
      },
    ],
    flags: [
      {
        flag: "-t",
        meaning: "Show TCP sockets.",
      },
      {
        flag: "-u",
        meaning: "Show UDP sockets.",
      },
      {
        flag: "-l",
        meaning: "Show listening sockets.",
      },
      {
        flag: "-n",
        meaning: "Show numerical addresses and port numbers.",
      },
      {
        flag: "-p",
        meaning: "Show the processes using the sockets.",
      },
    ],
    tags: ["linux", "networking", "ports", "sockets", "troubleshooting"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-curl",
    tool: "linux",
    category: "networking",
    name: "curl",
    title: "Transfer data from or to a URL",
    slug: "curl",
    description:
      "Transfers data using URLs and is commonly used for testing APIs, downloading resources, and troubleshooting HTTP connections.",
    syntax: [
      "curl URL",
      "curl -I URL",
      "curl -X POST URL",
    ],
    examples: [
      {
        command: "curl https://example.com",
        description:
          "Send an HTTP request and display the response.",
      },
      {
        command: "curl -I https://example.com",
        description:
          "Display only the HTTP response headers.",
      },
      {
        command: "curl -X POST https://example.com/api",
        description:
          "Send an HTTP POST request.",
      },
    ],
    flags: [
      {
        flag: "-I",
        meaning: "Fetch response headers without downloading the response body.",
      },
      {
        flag: "-X",
        meaning: "Specify the HTTP request method.",
      },
      {
        flag: "-o",
        meaning: "Write the downloaded output to a file.",
      },
    ],
    tags: ["linux", "networking", "http", "api", "devops"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-wget",
    tool: "linux",
    category: "networking",
    name: "wget",
    title: "Download files from the web",
    slug: "wget",
    description:
      "Downloads files and other resources from HTTP, HTTPS, and FTP servers.",
    syntax: [
      "wget URL",
      "wget -O filename URL",
    ],
    examples: [
      {
        command: "wget https://example.com/file.tar.gz",
        description:
          "Download a file from a URL.",
      },
      {
        command: "wget -O app.tar.gz https://example.com/file.tar.gz",
        description:
          "Download a file and save it with a specific filename.",
      },
    ],
    flags: [
      {
        flag: "-O",
        meaning: "Save the downloaded content using the specified filename.",
      },
      {
        flag: "-q",
        meaning: "Run wget in quiet mode.",
      },
    ],
    tags: ["linux", "networking", "download", "http", "devops"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-dig",
    tool: "linux",
    category: "networking",
    name: "dig",
    title: "Query DNS records",
    slug: "dig",
    description:
      "Performs DNS lookups and displays detailed information about DNS records and responses.",
    syntax: [
      "dig domain",
      "dig domain A",
      "dig domain MX",
    ],
    examples: [
      {
        command: "dig example.com",
        description:
          "Perform a DNS lookup for a domain.",
      },
      {
        command: "dig example.com MX",
        description:
          "Query the mail exchange records for a domain.",
      },
    ],
    flags: [],
    tags: ["linux", "networking", "dns", "troubleshooting"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-nslookup",
    tool: "linux",
    category: "networking",
    name: "nslookup",
    title: "Query DNS information",
    slug: "nslookup",
    description:
      "Queries DNS servers to retrieve information about domain names and IP addresses.",
    syntax: [
      "nslookup domain",
      "nslookup IP",
    ],
    examples: [
      {
        command: "nslookup example.com",
        description:
          "Find the IP address associated with a domain.",
      },
      {
        command: "nslookup 8.8.8.8",
        description:
          "Perform a reverse DNS lookup for an IP address.",
      },
    ],
    flags: [],
    tags: ["linux", "networking", "dns", "troubleshooting"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-traceroute",
    tool: "linux",
    category: "networking",
    name: "traceroute",
    title: "Trace the network path to a host",
    slug: "traceroute",
    description:
      "Shows the network hops taken by packets while traveling to a destination.",
    syntax: [
      "traceroute hostname",
      "traceroute IP",
    ],
    examples: [
      {
        command: "traceroute example.com",
        description:
          "Display the network path between the local system and a destination.",
      },
    ],
    flags: [],
    tags: ["linux", "networking", "routing", "troubleshooting"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-host",
    tool: "linux",
    category: "networking",
    name: "host",
    title: "Perform a simple DNS lookup",
    slug: "host",
    description:
      "Performs simple DNS lookups for domain names and IP addresses.",
    syntax: [
      "host domain",
      "host IP",
    ],
    examples: [
      {
        command: "host example.com",
        description:
          "Resolve a domain name to its IP address.",
      },
      {
        command: "host 8.8.8.8",
        description:
          "Perform a reverse DNS lookup.",
      },
    ],
    flags: [],
    tags: ["linux", "networking", "dns", "troubleshooting"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-nc",
    tool: "linux",
    category: "networking",
    name: "nc",
    title: "Test network connections",
    slug: "nc",
    description:
      "Creates TCP or UDP network connections and is commonly used for testing ports and basic network communication.",
    syntax: [
      "nc -zv host port",
      "nc -l port",
    ],
    examples: [
      {
        command: "nc -zv example.com 443",
        description:
          "Test whether TCP port 443 is reachable on a host.",
      },
      {
        command: "nc -l 8080",
        description:
          "Listen for incoming connections on port 8080.",
      },
    ],
    flags: [
      {
        flag: "-z",
        meaning: "Scan for listening services without sending data.",
      },
      {
        flag: "-v",
        meaning: "Enable verbose output.",
      },
      {
        flag: "-l",
        meaning: "Listen for incoming connections.",
      },
    ],
    tags: ["linux", "networking", "ports", "troubleshooting", "tcp"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },
    {
    id: "linux-tar",
    tool: "linux",
    category: "archives-compression",
    name: "tar",
    title: "Create and extract archives",
    slug: "tar",
    description:
      "Creates, lists, and extracts files from tar archives and is commonly used for packaging files and directories.",
    syntax: [
      "tar -cf archive.tar directory",
      "tar -xf archive.tar",
      "tar -tf archive.tar",
    ],
    examples: [
      {
        command: "tar -cf backup.tar project/",
        description:
          "Create a tar archive containing the project directory.",
      },
      {
        command: "tar -xf backup.tar",
        description:
          "Extract the contents of a tar archive.",
      },
      {
        command: "tar -tf backup.tar",
        description:
          "List the files stored inside an archive.",
      },
    ],
    flags: [
      {
        flag: "-c",
        meaning: "Create a new archive.",
      },
      {
        flag: "-x",
        meaning: "Extract files from an archive.",
      },
      {
        flag: "-f",
        meaning: "Specify the archive filename.",
      },
      {
        flag: "-t",
        meaning: "List the contents of an archive.",
      },
      {
        flag: "-v",
        meaning: "Show detailed output while processing files.",
      },
    ],
    tags: ["linux", "archives", "backup", "files", "devops"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-gzip",
    tool: "linux",
    category: "archives-compression",
    name: "gzip",
    title: "Compress files",
    slug: "gzip",
    description:
      "Compresses files using the gzip compression format.",
    syntax: [
      "gzip file.txt",
      "gzip -k file.txt",
    ],
    examples: [
      {
        command: "gzip access.log",
        description:
          "Compress a log file into access.log.gz.",
      },
      {
        command: "gzip -k access.log",
        description:
          "Compress the file while keeping the original file.",
      },
    ],
    flags: [
      {
        flag: "-k",
        meaning: "Keep the original file after compression.",
      },
      {
        flag: "-d",
        meaning: "Decompress a gzip file.",
      },
    ],
    tags: ["linux", "compression", "logs", "files"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-gunzip",
    tool: "linux",
    category: "archives-compression",
    name: "gunzip",
    title: "Decompress gzip files",
    slug: "gunzip",
    description:
      "Decompresses files compressed with gzip.",
    syntax: [
      "gunzip file.gz",
    ],
    examples: [
      {
        command: "gunzip access.log.gz",
        description:
          "Decompress a gzip file and restore the original file.",
      },
    ],
    flags: [],
    tags: ["linux", "compression", "logs", "files"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-bzip2",
    tool: "linux",
    category: "archives-compression",
    name: "bzip2",
    title: "Compress files using bzip2",
    slug: "bzip2",
    description:
      "Compresses files using the bzip2 compression algorithm.",
    syntax: [
      "bzip2 file.txt",
      "bzip2 -k file.txt",
    ],
    examples: [
      {
        command: "bzip2 large.log",
        description:
          "Compress a file into large.log.bz2.",
      },
      {
        command: "bzip2 -k large.log",
        description:
          "Compress a file while keeping the original.",
      },
    ],
    flags: [
      {
        flag: "-k",
        meaning: "Keep the original file.",
      },
      {
        flag: "-d",
        meaning: "Decompress a bzip2 file.",
      },
    ],
    tags: ["linux", "compression", "files", "archives"],
    difficulty: "beginner",
    common: false,
    dangerous: false,
  },

  {
    id: "linux-bunzip2",
    tool: "linux",
    category: "archives-compression",
    name: "bunzip2",
    title: "Decompress bzip2 files",
    slug: "bunzip2",
    description:
      "Decompresses files compressed using bzip2.",
    syntax: [
      "bunzip2 file.bz2",
    ],
    examples: [
      {
        command: "bunzip2 large.log.bz2",
        description:
          "Decompress a bzip2 file.",
      },
    ],
    flags: [],
    tags: ["linux", "compression", "files", "archives"],
    difficulty: "beginner",
    common: false,
    dangerous: false,
  },

  {
    id: "linux-zip",
    tool: "linux",
    category: "archives-compression",
    name: "zip",
    title: "Create ZIP archives",
    slug: "zip",
    description:
      "Creates compressed ZIP archives containing files and directories.",
    syntax: [
      "zip archive.zip file.txt",
      "zip -r archive.zip directory/",
    ],
    examples: [
      {
        command: "zip backup.zip config.txt",
        description:
          "Create a ZIP archive containing a file.",
      },
      {
        command: "zip -r project.zip project/",
        description:
          "Recursively create a ZIP archive containing a directory.",
      },
    ],
    flags: [
      {
        flag: "-r",
        meaning: "Recursively include directories and their contents.",
      },
    ],
    tags: ["linux", "zip", "compression", "archives", "files"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-unzip",
    tool: "linux",
    category: "archives-compression",
    name: "unzip",
    title: "Extract ZIP archives",
    slug: "unzip",
    description:
      "Extracts files and directories from ZIP archives.",
    syntax: [
      "unzip archive.zip",
      "unzip archive.zip -d directory",
    ],
    examples: [
      {
        command: "unzip project.zip",
        description:
          "Extract a ZIP archive into the current directory.",
      },
      {
        command: "unzip project.zip -d project/",
        description:
          "Extract an archive into a specific directory.",
      },
    ],
    flags: [
      {
        flag: "-d",
        meaning: "Specify the directory where files should be extracted.",
      },
    ],
    tags: ["linux", "zip", "compression", "archives", "files"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-xz",
    tool: "linux",
    category: "archives-compression",
    name: "xz",
    title: "Compress files using xz",
    slug: "xz",
    description:
      "Compresses files using the xz compression format, which provides high compression ratios.",
    syntax: [
      "xz file.txt",
      "xz -k file.txt",
    ],
    examples: [
      {
        command: "xz large.log",
        description:
          "Compress a file into large.log.xz.",
      },
      {
        command: "xz -k large.log",
        description:
          "Compress the file while keeping the original.",
      },
    ],
    flags: [
      {
        flag: "-k",
        meaning: "Keep the original file.",
      },
      {
        flag: "-d",
        meaning: "Decompress an xz file.",
      },
    ],
    tags: ["linux", "compression", "files", "archives"],
    difficulty: "intermediate",
    common: false,
    dangerous: false,
  },

  {
    id: "linux-unxz",
    tool: "linux",
    category: "archives-compression",
    name: "unxz",
    title: "Decompress xz files",
    slug: "unxz",
    description:
      "Decompresses files compressed using the xz format.",
    syntax: [
      "unxz file.xz",
    ],
    examples: [
      {
        command: "unxz package.tar.xz",
        description:
          "Decompress an xz-compressed file.",
      },
    ],
    flags: [],
    tags: ["linux", "compression", "files", "archives"],
    difficulty: "intermediate",
    common: false,
    dangerous: false,
  },

  {
    id: "linux-zcat",
    tool: "linux",
    category: "archives-compression",
    name: "zcat",
    title: "View gzip-compressed files",
    slug: "zcat",
    description:
      "Displays the contents of gzip-compressed files without manually extracting them first.",
    syntax: [
      "zcat file.gz",
      "zcat file.gz | less",
    ],
    examples: [
      {
        command: "zcat access.log.gz",
        description:
          "Print the contents of a compressed log file.",
      },
      {
        command: "zcat access.log.gz | less",
        description:
          "View a compressed log file page by page.",
      },
    ],
    flags: [],
    tags: ["linux", "compression", "logs", "files", "troubleshooting"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },
    {
    id: "linux-sudo",
    tool: "linux",
    category: "user-management",
    name: "sudo",
    title: "Run commands with elevated privileges",
    slug: "sudo",
    description:
      "Runs a command with the privileges of another user, commonly the root user.",
    syntax: [
      "sudo command",
      "sudo -u username command",
    ],
    examples: [
      {
        command: "sudo apt update",
        description:
          "Run a package-management command with elevated privileges.",
      },
      {
        command: "sudo -u username command",
        description:
          "Run a command as a specified user.",
      },
    ],
    flags: [
      {
        flag: "-u",
        meaning: "Run the command as the specified user.",
      },
    ],
    tags: ["linux", "sudo", "permissions", "root", "security"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "linux-su",
    tool: "linux",
    category: "user-management",
    name: "su",
    title: "Switch to another user",
    slug: "su",
    description:
      "Switches to another user account and starts a shell with that user's identity.",
    syntax: [
      "su username",
      "su - username",
    ],
    examples: [
      {
        command: "su root",
        description:
          "Switch to the root user.",
      },
      {
        command: "su - adesh",
        description:
          "Switch to a user and load that user's login environment.",
      },
    ],
    flags: [
      {
        flag: "-",
        meaning: "Start a login shell and load the target user's environment.",
      },
    ],
    tags: ["linux", "users", "root", "permissions", "security"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "linux-passwd",
    tool: "linux",
    category: "user-management",
    name: "passwd",
    title: "Change a user's password",
    slug: "passwd",
    description:
      "Changes or manages the password associated with a user account.",
    syntax: [
      "passwd",
      "sudo passwd username",
    ],
    examples: [
      {
        command: "passwd",
        description:
          "Change the password of the current user.",
      },
      {
        command: "sudo passwd username",
        description:
          "Change the password of another user with administrative privileges.",
      },
    ],
    flags: [
      {
        flag: "-l",
        meaning: "Lock the password of an account.",
      },
      {
        flag: "-u",
        meaning: "Unlock the password of an account.",
      },
      {
        flag: "-S",
        meaning: "Display password status information.",
      },
    ],
    tags: ["linux", "users", "password", "security"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "linux-useradd",
    tool: "linux",
    category: "user-management",
    name: "useradd",
    title: "Create a user account",
    slug: "useradd",
    description:
      "Creates a new user account on the Linux system.",
    syntax: [
      "sudo useradd username",
      "sudo useradd -m username",
    ],
    examples: [
      {
        command: "sudo useradd -m adesh",
        description:
          "Create a user and create a home directory for the account.",
      },
      {
        command: "sudo useradd -s /bin/bash username",
        description:
          "Create a user and specify Bash as the login shell.",
      },
    ],
    flags: [
      {
        flag: "-m",
        meaning: "Create the user's home directory.",
      },
      {
        flag: "-s",
        meaning: "Specify the user's login shell.",
      },
      {
        flag: "-d",
        meaning: "Specify the user's home directory.",
      },
    ],
    tags: ["linux", "users", "accounts", "administration"],
    difficulty: "intermediate",
    common: true,
    dangerous: true,
  },

  {
    id: "linux-usermod",
    tool: "linux",
    category: "user-management",
    name: "usermod",
    title: "Modify a user account",
    slug: "usermod",
    description:
      "Modifies properties of an existing Linux user account.",
    syntax: [
      "sudo usermod -aG group username",
      "sudo usermod -s /bin/bash username",
    ],
    examples: [
      {
        command: "sudo usermod -aG docker adesh",
        description:
          "Add a user to the docker group without removing existing group memberships.",
      },
      {
        command: "sudo usermod -s /bin/bash username",
        description:
          "Change a user's login shell to Bash.",
      },
    ],
    flags: [
      {
        flag: "-a",
        meaning: "Append the user to supplementary groups when used with -G.",
      },
      {
        flag: "-G",
        meaning: "Specify supplementary groups for the user.",
      },
      {
        flag: "-s",
        meaning: "Change the user's login shell.",
      },
      {
        flag: "-d",
        meaning: "Change the user's home directory.",
      },
    ],
    tags: ["linux", "users", "groups", "permissions", "administration"],
    difficulty: "intermediate",
    common: true,
    dangerous: true,
  },

  {
    id: "linux-userdel",
    tool: "linux",
    category: "user-management",
    name: "userdel",
    title: "Delete a user account",
    slug: "userdel",
    description:
      "Removes a user account from the Linux system.",
    syntax: [
      "sudo userdel username",
      "sudo userdel -r username",
    ],
    examples: [
      {
        command: "sudo userdel username",
        description:
          "Delete a user account while leaving its home directory.",
      },
      {
        command: "sudo userdel -r username",
        description:
          "Delete the user account and its home directory.",
      },
    ],
    flags: [
      {
        flag: "-r",
        meaning: "Remove the user's home directory and mail spool.",
      },
    ],
    tags: ["linux", "users", "accounts", "administration"],
    difficulty: "intermediate",
    common: false,
    dangerous: true,
  },

  {
    id: "linux-groupadd",
    tool: "linux",
    category: "group-management",
    name: "groupadd",
    title: "Create a group",
    slug: "groupadd",
    description:
      "Creates a new group on the Linux system.",
    syntax: [
      "sudo groupadd groupname",
    ],
    examples: [
      {
        command: "sudo groupadd developers",
        description:
          "Create a group named developers.",
      },
    ],
    flags: [
      {
        flag: "-g",
        meaning: "Specify a particular numeric group ID.",
      },
    ],
    tags: ["linux", "groups", "users", "permissions"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "linux-groupdel",
    tool: "linux",
    category: "group-management",
    name: "groupdel",
    title: "Delete a group",
    slug: "groupdel",
    description:
      "Deletes an existing group from the Linux system.",
    syntax: [
      "sudo groupdel groupname",
    ],
    examples: [
      {
        command: "sudo groupdel developers",
        description:
          "Delete the developers group.",
      },
    ],
    flags: [],
    tags: ["linux", "groups", "users", "permissions"],
    difficulty: "intermediate",
    common: false,
    dangerous: true,
  },

  {
    id: "linux-groups",
    tool: "linux",
    category: "group-management",
    name: "groups",
    title: "Display user group memberships",
    slug: "groups",
    description:
      "Displays the groups to which a user belongs.",
    syntax: [
      "groups",
      "groups username",
    ],
    examples: [
      {
        command: "groups",
        description:
          "Display the groups of the current user.",
      },
      {
        command: "groups adesh",
        description:
          "Display the groups associated with a specified user.",
      },
    ],
    flags: [],
    tags: ["linux", "groups", "users", "permissions"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-umask",
    tool: "linux",
    category: "permissions",
    name: "umask",
    title: "Set default file permissions",
    slug: "umask",
    description:
      "Displays or modifies the permission mask used when new files and directories are created.",
    syntax: [
      "umask",
      "umask 022",
    ],
    examples: [
      {
        command: "umask",
        description:
          "Display the current default permission mask.",
      },
      {
        command: "umask 022",
        description:
          "Set the permission mask to 022 for the current shell.",
      },
    ],
    flags: [
      {
        flag: "-S",
        meaning: "Display the current mask in symbolic form.",
      },
    ],
    tags: ["linux", "permissions", "security", "files"],
    difficulty: "intermediate",
    common: false,
    dangerous: false,
  },
    {
    id: "linux-df",
    tool: "linux",
    category: "disk-filesystem",
    name: "df",
    title: "Display filesystem disk usage",
    slug: "df",
    description:
      "Shows available, used, and total disk space for mounted filesystems.",
    syntax: [
      "df",
      "df -h",
      "df -h /",
    ],
    examples: [
      {
        command: "df -h",
        description:
          "Display filesystem disk usage in a human-readable format.",
      },
      {
        command: "df -h /",
        description:
          "Show disk usage for the filesystem containing the root directory.",
      },
    ],
    flags: [
      {
        flag: "-h",
        meaning: "Display sizes in a human-readable format.",
      },
      {
        flag: "-T",
        meaning: "Display the filesystem type.",
      },
    ],
    tags: ["linux", "disk", "filesystem", "storage", "troubleshooting"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-du",
    tool: "linux",
    category: "disk-filesystem",
    name: "du",
    title: "Display directory disk usage",
    slug: "du",
    description:
      "Estimates the amount of disk space used by files and directories.",
    syntax: [
      "du",
      "du -sh directory",
      "du -sh *",
    ],
    examples: [
      {
        command: "du -sh /var/log",
        description:
          "Display the total size of the log directory.",
      },
      {
        command: "du -sh *",
        description:
          "Display the size of each item in the current directory.",
      },
    ],
    flags: [
      {
        flag: "-s",
        meaning: "Display only the total for each specified item.",
      },
      {
        flag: "-h",
        meaning: "Display sizes in a human-readable format.",
      },
    ],
    tags: ["linux", "disk", "storage", "files", "troubleshooting"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-lsblk",
    tool: "linux",
    category: "disk-filesystem",
    name: "lsblk",
    title: "List block devices",
    slug: "lsblk",
    description:
      "Displays information about block devices such as disks, partitions, and logical volumes.",
    syntax: [
      "lsblk",
      "lsblk -f",
    ],
    examples: [
      {
        command: "lsblk",
        description:
          "Display disks and partitions in a tree-like structure.",
      },
      {
        command: "lsblk -f",
        description:
          "Display block devices together with filesystem information.",
      },
    ],
    flags: [
      {
        flag: "-f",
        meaning: "Display filesystem information.",
      },
    ],
    tags: ["linux", "disk", "storage", "filesystem", "devices"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-blkid",
    tool: "linux",
    category: "disk-filesystem",
    name: "blkid",
    title: "Display block device attributes",
    slug: "blkid",
    description:
      "Displays attributes such as UUID and filesystem type for block devices.",
    syntax: [
      "blkid",
      "sudo blkid /dev/sda1",
    ],
    examples: [
      {
        command: "sudo blkid",
        description:
          "Display UUID and filesystem information for available block devices.",
      },
      {
        command: "sudo blkid /dev/sda1",
        description:
          "Display attributes for a specific partition.",
      },
    ],
    flags: [],
    tags: ["linux", "disk", "storage", "uuid", "filesystem"],
    difficulty: "intermediate",
    common: false,
    dangerous: false,
  },

  {
    id: "linux-mount",
    tool: "linux",
    category: "disk-filesystem",
    name: "mount",
    title: "Mount a filesystem",
    slug: "mount",
    description:
      "Attaches a filesystem to a directory in the Linux filesystem hierarchy.",
    syntax: [
      "mount",
      "sudo mount /dev/sdb1 /mnt",
      "mount -t filesystem device directory",
    ],
    examples: [
      {
        command: "mount",
        description:
          "Display currently mounted filesystems.",
      },
      {
        command: "sudo mount /dev/sdb1 /mnt",
        description:
          "Mount a partition at the /mnt directory.",
      },
    ],
    flags: [
      {
        flag: "-t",
        meaning: "Specify the filesystem type.",
      },
      {
        flag: "-a",
        meaning: "Mount all filesystems listed in /etc/fstab.",
      },
    ],
    tags: ["linux", "disk", "filesystem", "mount", "storage"],
    difficulty: "intermediate",
    common: true,
    dangerous: true,
  },

  {
    id: "linux-umount",
    tool: "linux",
    category: "disk-filesystem",
    name: "umount",
    title: "Unmount a filesystem",
    slug: "umount",
    description:
      "Detaches a mounted filesystem from the Linux filesystem hierarchy.",
    syntax: [
      "sudo umount /mnt",
      "sudo umount /dev/sdb1",
    ],
    examples: [
      {
        command: "sudo umount /mnt",
        description:
          "Unmount the filesystem mounted at /mnt.",
      },
      {
        command: "sudo umount /dev/sdb1",
        description:
          "Unmount a specific block device.",
      },
    ],
    flags: [
      {
        flag: "-a",
        meaning: "Unmount all filesystems that match the specified criteria.",
      },
    ],
    tags: ["linux", "disk", "filesystem", "mount", "storage"],
    difficulty: "intermediate",
    common: true,
    dangerous: true,
  },

  {
    id: "linux-sync",
    tool: "linux",
    category: "disk-filesystem",
    name: "sync",
    title: "Flush filesystem buffers",
    slug: "sync",
    description:
      "Forces pending filesystem data and metadata to be written to storage.",
    syntax: [
      "sync",
    ],
    examples: [
      {
        command: "sync",
        description:
          "Flush pending filesystem writes to storage.",
      },
    ],
    flags: [],
    tags: ["linux", "disk", "filesystem", "storage"],
    difficulty: "beginner",
    common: false,
    dangerous: false,
  },

  {
    id: "linux-stat",
    tool: "linux",
    category: "disk-filesystem",
    name: "stat",
    title: "Display file metadata",
    slug: "stat",
    description:
      "Displays detailed information about a file or filesystem, including permissions, ownership, size, and timestamps.",
    syntax: [
      "stat file",
      "stat directory",
    ],
    examples: [
      {
        command: "stat app.log",
        description:
          "Display detailed metadata for a file.",
      },
      {
        command: "stat /var/log",
        description:
          "Display metadata for a directory.",
      },
    ],
    flags: [
      {
        flag: "-c",
        meaning: "Specify a custom output format.",
      },
      {
        flag: "-f",
        meaning: "Display filesystem status instead of file status.",
      },
    ],
    tags: ["linux", "files", "filesystem", "metadata", "permissions"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-fallocate",
    tool: "linux",
    category: "disk-filesystem",
    name: "fallocate",
    title: "Allocate space for a file",
    slug: "fallocate",
    description:
      "Preallocates disk space for a file without necessarily writing data to every allocated block.",
    syntax: [
      "fallocate -l 1G file.img",
      "fallocate -l 500M test.img",
    ],
    examples: [
      {
        command: "fallocate -l 1G disk.img",
        description:
          "Create a file with 1 GB of allocated space.",
      },
      {
        command: "fallocate -l 500M test.img",
        description:
          "Allocate 500 MB of space for a test file.",
      },
    ],
    flags: [
      {
        flag: "-l",
        meaning: "Specify the amount of space to allocate.",
      },
    ],
    tags: ["linux", "disk", "storage", "files", "testing"],
    difficulty: "intermediate",
    common: false,
    dangerous: false,
  },

  {
    id: "linux-fdisk",
    tool: "linux",
    category: "disk-filesystem",
    name: "fdisk",
    title: "Manage disk partitions",
    slug: "fdisk",
    description:
      "Interactive utility for viewing and modifying partition tables on disks.",
    syntax: [
      "sudo fdisk -l",
      "sudo fdisk /dev/sdb",
    ],
    examples: [
      {
        command: "sudo fdisk -l",
        description:
          "List partition tables for available disks.",
      },
      {
        command: "sudo fdisk /dev/sdb",
        description:
          "Open the interactive partition editor for a disk.",
      },
    ],
    flags: [
      {
        flag: "-l",
        meaning: "List partition tables instead of opening the interactive editor.",
      },
    ],
    tags: ["linux", "disk", "partitions", "storage", "administration"],
    difficulty: "advanced",
    common: false,
    dangerous: true,
  },
    {
    id: "linux-systemctl",
    tool: "linux",
    category: "systemd",
    name: "systemctl",
    title: "Manage systemd services",
    slug: "systemctl",
    description:
      "Controls and inspects services and other units managed by systemd.",
    syntax: [
      "systemctl status service",
      "sudo systemctl start service",
      "sudo systemctl stop service",
      "sudo systemctl restart service",
    ],
    examples: [
      {
        command: "systemctl status ssh",
        description:
          "Check the current status of the SSH service.",
      },
      {
        command: "sudo systemctl restart nginx",
        description:
          "Restart the nginx service.",
      },
      {
        command: "sudo systemctl enable nginx",
        description:
          "Configure nginx to start automatically during boot.",
      },
    ],
    flags: [
      {
        flag: "status",
        meaning: "Display the current status of a unit.",
      },
      {
        flag: "start",
        meaning: "Start a unit.",
      },
      {
        flag: "stop",
        meaning: "Stop a unit.",
      },
      {
        flag: "restart",
        meaning: "Stop and start a unit again.",
      },
      {
        flag: "enable",
        meaning: "Configure a unit to start automatically at boot.",
      },
      {
        flag: "disable",
        meaning: "Prevent a unit from starting automatically at boot.",
      },
    ],
    tags: ["linux", "systemd", "services", "processes", "devops"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "linux-journalctl",
    tool: "linux",
    category: "systemd",
    name: "journalctl",
    title: "View systemd logs",
    slug: "journalctl",
    description:
      "Queries and displays logs collected by the systemd journal.",
    syntax: [
      "journalctl",
      "journalctl -u service",
      "journalctl -f",
    ],
    examples: [
      {
        command: "journalctl -u nginx",
        description:
          "Display logs generated by the nginx service.",
      },
      {
        command: "journalctl -u nginx -f",
        description:
          "Follow nginx logs in real time.",
      },
      {
        command: "journalctl -b",
        description:
          "Display logs from the current system boot.",
      },
    ],
    flags: [
      {
        flag: "-u",
        meaning: "Show logs for a specific systemd unit.",
      },
      {
        flag: "-f",
        meaning: "Follow new log entries as they are written.",
      },
      {
        flag: "-b",
        meaning: "Show messages from a specific boot, with the current boot used by default.",
      },
      {
        flag: "-n",
        meaning: "Show a specified number of recent log entries.",
      },
    ],
    tags: ["linux", "systemd", "logs", "services", "troubleshooting"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-systemd-analyze",
    tool: "linux",
    category: "systemd",
    name: "systemd-analyze",
    title: "Analyze systemd startup",
    slug: "systemd-analyze",
    description:
      "Analyzes system boot performance and systemd unit dependencies.",
    syntax: [
      "systemd-analyze",
      "systemd-analyze blame",
      "systemd-analyze critical-chain",
    ],
    examples: [
      {
        command: "systemd-analyze",
        description:
          "Display the total time spent during system boot.",
      },
      {
        command: "systemd-analyze blame",
        description:
          "Show services ordered by the time they took during startup.",
      },
      {
        command: "systemd-analyze critical-chain",
        description:
          "Display the critical chain of units involved in boot.",
      },
    ],
    flags: [],
    tags: ["linux", "systemd", "boot", "performance", "troubleshooting"],
    difficulty: "intermediate",
    common: false,
    dangerous: false,
  },

  {
    id: "linux-service",
    tool: "linux",
    category: "systemd",
    name: "service",
    title: "Manage system services",
    slug: "service",
    description:
      "Runs System V init scripts and provides a compatibility interface for managing services.",
    syntax: [
      "service service status",
      "sudo service service start",
      "sudo service service stop",
    ],
    examples: [
      {
        command: "service ssh status",
        description:
          "Check the status of the SSH service.",
      },
      {
        command: "sudo service nginx restart",
        description:
          "Restart the nginx service.",
      },
    ],
    flags: [],
    tags: ["linux", "services", "systemd", "sysvinit"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "linux-loginctl",
    tool: "linux",
    category: "systemd",
    name: "loginctl",
    title: "Manage user sessions",
    slug: "loginctl",
    description:
      "Displays and manages user login sessions and systemd-logind information.",
    syntax: [
      "loginctl",
      "loginctl list-sessions",
      "loginctl status",
    ],
    examples: [
      {
        command: "loginctl list-sessions",
        description:
          "List currently active user sessions.",
      },
      {
        command: "loginctl status",
        description:
          "Display the status of the systemd login manager.",
      },
    ],
    flags: [],
    tags: ["linux", "systemd", "users", "sessions"],
    difficulty: "intermediate",
    common: false,
    dangerous: false,
  },

  {
    id: "linux-timedatectl",
    tool: "linux",
    category: "systemd",
    name: "timedatectl",
    title: "Manage system date and time",
    slug: "timedatectl",
    description:
      "Displays and manages system time, timezone, and time synchronization settings.",
    syntax: [
      "timedatectl",
      "timedatectl status",
      "timedatectl list-timezones",
    ],
    examples: [
      {
        command: "timedatectl status",
        description:
          "Display the current system time, timezone, and synchronization status.",
      },
      {
        command: "timedatectl list-timezones",
        description:
          "List available system timezones.",
      },
    ],
    flags: [],
    tags: ["linux", "systemd", "time", "timezone", "system"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-hostnamectl",
    tool: "linux",
    category: "systemd",
    name: "hostnamectl",
    title: "Manage the system hostname",
    slug: "hostnamectl",
    description:
      "Displays and manages the system hostname and related system information.",
    syntax: [
      "hostnamectl",
      "hostnamectl status",
    ],
    examples: [
      {
        command: "hostnamectl",
        description:
          "Display the system hostname and operating system information.",
      },
      {
        command: "hostnamectl status",
        description:
          "Display detailed hostname and system information.",
      },
    ],
    flags: [],
    tags: ["linux", "systemd", "hostname", "system"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-localectl",
    tool: "linux",
    category: "systemd",
    name: "localectl",
    title: "Manage system locale",
    slug: "localectl",
    description:
      "Displays and manages system locale and keyboard layout settings.",
    syntax: [
      "localectl",
      "localectl status",
    ],
    examples: [
      {
        command: "localectl status",
        description:
          "Display the current locale and keyboard configuration.",
      },
    ],
    flags: [],
    tags: ["linux", "systemd", "locale", "keyboard", "system"],
    difficulty: "intermediate",
    common: false,
    dangerous: false,
  },

  {
    id: "linux-runlevel",
    tool: "linux",
    category: "systemd",
    name: "runlevel",
    title: "Display the current runlevel",
    slug: "runlevel",
    description:
      "Displays the previous and current SysV runlevel, where supported.",
    syntax: [
      "runlevel",
    ],
    examples: [
      {
        command: "runlevel",
        description:
          "Display the current runlevel information.",
      },
    ],
    flags: [],
    tags: ["linux", "systemd", "runlevel", "sysvinit"],
    difficulty: "intermediate",
    common: false,
    dangerous: false,
  },

  {
    id: "linux-reboot",
    tool: "linux",
    category: "system-management",
    name: "reboot",
    title: "Restart the system",
    slug: "reboot",
    description:
      "Safely requests a system restart.",
    syntax: [
      "sudo reboot",
    ],
    examples: [
      {
        command: "sudo reboot",
        description:
          "Restart the Linux system.",
      },
    ],
    flags: [],
    tags: ["linux", "system", "reboot", "administration"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },
    {
    id: "linux-apt",
    tool: "linux",
    category: "package-management",
    name: "apt",
    title: "Manage packages on Debian-based systems",
    slug: "apt",
    description:
      "A high-level package management command used on Debian and Ubuntu systems.",
    syntax: [
      "sudo apt update",
      "sudo apt install package",
      "sudo apt remove package",
    ],
    examples: [
      {
        command: "sudo apt update",
        description:
          "Refresh the local package index.",
      },
      {
        command: "sudo apt install nginx",
        description:
          "Install the nginx package.",
      },
      {
        command: "sudo apt remove nginx",
        description:
          "Remove the nginx package.",
      },
    ],
    flags: [
      {
        flag: "update",
        meaning: "Download the latest package information.",
      },
      {
        flag: "install",
        meaning: "Install one or more packages.",
      },
      {
        flag: "remove",
        meaning: "Remove installed packages.",
      },
      {
        flag: "upgrade",
        meaning: "Upgrade installed packages.",
      },
    ],
    tags: ["linux", "apt", "debian", "ubuntu", "packages", "devops"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "linux-apt-get",
    tool: "linux",
    category: "package-management",
    name: "apt-get",
    title: "Manage Debian packages",
    slug: "apt-get",
    description:
      "A lower-level command-line package management tool for Debian-based systems.",
    syntax: [
      "sudo apt-get update",
      "sudo apt-get install package",
      "sudo apt-get upgrade",
    ],
    examples: [
      {
        command: "sudo apt-get update",
        description:
          "Update the local package index.",
      },
      {
        command: "sudo apt-get install nginx",
        description:
          "Install nginx using apt-get.",
      },
      {
        command: "sudo apt-get upgrade",
        description:
          "Upgrade installed packages.",
      },
    ],
    flags: [
      {
        flag: "update",
        meaning: "Update the package index.",
      },
      {
        flag: "install",
        meaning: "Install packages.",
      },
      {
        flag: "remove",
        meaning: "Remove packages.",
      },
      {
        flag: "upgrade",
        meaning: "Upgrade installed packages.",
      },
    ],
    tags: ["linux", "apt", "debian", "ubuntu", "packages"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "linux-apt-cache",
    tool: "linux",
    category: "package-management",
    name: "apt-cache",
    title: "Query the APT package cache",
    slug: "apt-cache",
    description:
      "Searches and displays information about packages available through APT.",
    syntax: [
      "apt-cache search keyword",
      "apt-cache show package",
      "apt-cache policy package",
    ],
    examples: [
      {
        command: "apt-cache search nginx",
        description:
          "Search for packages related to nginx.",
      },
      {
        command: "apt-cache show nginx",
        description:
          "Display detailed information about the nginx package.",
      },
      {
        command: "apt-cache policy nginx",
        description:
          "Display installed and available versions of nginx.",
      },
    ],
    flags: [],
    tags: ["linux", "apt", "debian", "ubuntu", "packages", "search"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "linux-dpkg",
    tool: "linux",
    category: "package-management",
    name: "dpkg",
    title: "Manage Debian package files",
    slug: "dpkg",
    description:
      "Installs, removes, and queries Debian package files directly.",
    syntax: [
      "sudo dpkg -i package.deb",
      "dpkg -l",
      "dpkg -L package",
    ],
    examples: [
      {
        command: "sudo dpkg -i package.deb",
        description:
          "Install a local Debian package file.",
      },
      {
        command: "dpkg -l",
        description:
          "List installed Debian packages.",
      },
      {
        command: "dpkg -L nginx",
        description:
          "List files installed by the nginx package.",
      },
    ],
    flags: [
      {
        flag: "-i",
        meaning: "Install a Debian package file.",
      },
      {
        flag: "-l",
        meaning: "List installed packages.",
      },
      {
        flag: "-L",
        meaning: "List files installed by a package.",
      },
    ],
    tags: ["linux", "dpkg", "debian", "ubuntu", "packages"],
    difficulty: "intermediate",
    common: true,
    dangerous: true,
  },

  {
    id: "linux-snap",
    tool: "linux",
    category: "package-management",
    name: "snap",
    title: "Manage Snap packages",
    slug: "snap",
    description:
      "Installs and manages applications distributed as Snap packages.",
    syntax: [
      "sudo snap install package",
      "snap list",
      "sudo snap remove package",
    ],
    examples: [
      {
        command: "sudo snap install docker",
        description:
          "Install an application using Snap.",
      },
      {
        command: "snap list",
        description:
          "List installed Snap packages.",
      },
      {
        command: "sudo snap remove package",
        description:
          "Remove a Snap package.",
      },
    ],
    flags: [
      {
        flag: "install",
        meaning: "Install a Snap package.",
      },
      {
        flag: "list",
        meaning: "List installed Snap packages.",
      },
      {
        flag: "remove",
        meaning: "Remove a Snap package.",
      },
    ],
    tags: ["linux", "snap", "packages", "ubuntu"],
    difficulty: "beginner",
    common: false,
    dangerous: true,
  },

  {
    id: "linux-rpm",
    tool: "linux",
    category: "package-management",
    name: "rpm",
    title: "Manage RPM packages",
    slug: "rpm",
    description:
      "Installs, removes, verifies, and queries RPM packages on RPM-based Linux systems.",
    syntax: [
      "rpm -qa",
      "sudo rpm -ivh package.rpm",
      "rpm -q package",
    ],
    examples: [
      {
        command: "rpm -qa",
        description:
          "List installed RPM packages.",
      },
      {
        command: "sudo rpm -ivh package.rpm",
        description:
          "Install an RPM package file.",
      },
      {
        command: "rpm -q nginx",
        description:
          "Check whether nginx is installed.",
      },
    ],
    flags: [
      {
        flag: "-q",
        meaning: "Query package information.",
      },
      {
        flag: "-a",
        meaning: "Query all installed packages when used with -q.",
      },
      {
        flag: "-i",
        meaning: "Install an RPM package.",
      },
      {
        flag: "-v",
        meaning: "Display verbose output.",
      },
      {
        flag: "-h",
        meaning: "Display progress indicators during installation.",
      },
    ],
    tags: ["linux", "rpm", "rhel", "centos", "fedora", "packages"],
    difficulty: "intermediate",
    common: true,
    dangerous: true,
  },

  {
    id: "linux-dnf",
    tool: "linux",
    category: "package-management",
    name: "dnf",
    title: "Manage packages on Fedora and RHEL-based systems",
    slug: "dnf",
    description:
      "A modern package management tool used by Fedora and many RHEL-based systems.",
    syntax: [
      "sudo dnf check-update",
      "sudo dnf install package",
      "sudo dnf update",
    ],
    examples: [
      {
        command: "sudo dnf install nginx",
        description:
          "Install nginx using DNF.",
      },
      {
        command: "sudo dnf update",
        description:
          "Update installed packages.",
      },
      {
        command: "dnf search nginx",
        description:
          "Search for packages related to nginx.",
      },
    ],
    flags: [
      {
        flag: "install",
        meaning: "Install packages.",
      },
      {
        flag: "update",
        meaning: "Update installed packages.",
      },
      {
        flag: "search",
        meaning: "Search for packages.",
      },
      {
        flag: "remove",
        meaning: "Remove packages.",
      },
    ],
    tags: ["linux", "dnf", "fedora", "rhel", "packages", "devops"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "linux-yum",
    tool: "linux",
    category: "package-management",
    name: "yum",
    title: "Manage packages on RPM-based systems",
    slug: "yum",
    description:
      "A package management command traditionally used by RHEL, CentOS, and other RPM-based distributions.",
    syntax: [
      "sudo yum install package",
      "sudo yum update",
      "yum search package",
    ],
    examples: [
      {
        command: "sudo yum install nginx",
        description:
          "Install nginx using YUM.",
      },
      {
        command: "sudo yum update",
        description:
          "Update installed packages.",
      },
    ],
    flags: [
      {
        flag: "install",
        meaning: "Install packages.",
      },
      {
        flag: "update",
        meaning: "Update installed packages.",
      },
      {
        flag: "remove",
        meaning: "Remove packages.",
      },
      {
        flag: "search",
        meaning: "Search for packages.",
      },
    ],
    tags: ["linux", "yum", "rhel", "centos", "packages"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "linux-pacman",
    tool: "linux",
    category: "package-management",
    name: "pacman",
    title: "Manage Arch Linux packages",
    slug: "pacman",
    description:
      "The primary package management utility for Arch Linux and Arch-based distributions.",
    syntax: [
      "sudo pacman -S package",
      "sudo pacman -Syu",
      "pacman -Q",
    ],
    examples: [
      {
        command: "sudo pacman -S nginx",
        description:
          "Install nginx on an Arch-based system.",
      },
      {
        command: "sudo pacman -Syu",
        description:
          "Synchronize package databases and upgrade the system.",
      },
      {
        command: "pacman -Q",
        description:
          "List installed packages.",
      },
    ],
    flags: [
      {
        flag: "-S",
        meaning: "Synchronize and install packages.",
      },
      {
        flag: "-y",
        meaning: "Refresh package databases.",
      },
      {
        flag: "-u",
        meaning: "Upgrade outdated packages.",
      },
      {
        flag: "-Q",
        meaning: "Query installed packages.",
      },
    ],
    tags: ["linux", "pacman", "arch", "packages"],
    difficulty: "intermediate",
    common: true,
    dangerous: true,
  },

  {
    id: "linux-pip",
    tool: "linux",
    category: "package-management",
    name: "pip",
    title: "Manage Python packages",
    slug: "pip",
    description:
      "Installs and manages Python packages from Python package indexes.",
    syntax: [
      "python3 -m pip install package",
      "python3 -m pip list",
      "python3 -m pip uninstall package",
    ],
    examples: [
      {
        command: "python3 -m pip install requests",
        description:
          "Install the Python requests package.",
      },
      {
        command: "python3 -m pip list",
        description:
          "List Python packages installed in the current environment.",
      },
      {
        command: "python3 -m pip freeze",
        description:
          "Display installed packages in requirements-file format.",
      },
    ],
    flags: [
      {
        flag: "install",
        meaning: "Install a Python package.",
      },
      {
        flag: "list",
        meaning: "List installed Python packages.",
      },
      {
        flag: "uninstall",
        meaning: "Remove an installed Python package.",
      },
      {
        flag: "freeze",
        meaning: "Output installed packages and their versions.",
      },
    ],
    tags: ["linux", "python", "pip", "packages", "devops"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "lvm",
    tool: "linux",
    category: "volume-management",
    name: "lvm",
    title: "Manage Logical Volumes",
    slug: "lvm",
    description:
      "Manage Linux Logical Volume Manager components such as physical volumes, volume groups, and logical volumes.",
    syntax: [
      "lvm",
      "lvm <command>",
    ],
    examples: [
      {
        command: "lvm",
        description: "Display the LVM command interface and available subcommands.",
      },
      {
        command: "lvm help",
        description: "Display help for LVM commands.",
      },
    ],
    flags: [],
    tags: ["lvm", "storage", "volumes", "disk"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "pvcreate",
    tool: "linux",
    category: "volume-management",
    name: "pvcreate",
    title: "Create a Physical Volume",
    slug: "pvcreate",
    description:
      "Initialize a disk or partition for use as a physical volume in LVM.",
    syntax: [
      "pvcreate <device>",
      "pvcreate /dev/sdb",
    ],
    examples: [
      {
        command: "sudo pvcreate /dev/sdb",
        description: "Initialize /dev/sdb as an LVM physical volume.",
      },
      {
        command: "sudo pvcreate /dev/sdb1",
        description: "Initialize a partition as an LVM physical volume.",
      },
    ],
    flags: [
      {
        flag: "--force",
        meaning: "Force creation of a physical volume when required.",
      },
      {
        flag: "--yes",
        meaning: "Answer yes to confirmation prompts.",
      },
    ],
    tags: ["lvm", "storage", "physical-volume", "disk"],
    difficulty: "intermediate",
    common: true,
    dangerous: true,
  },

  {
    id: "vgcreate",
    tool: "linux",
    category: "volume-management",
    name: "vgcreate",
    title: "Create a Volume Group",
    slug: "vgcreate",
    description:
      "Create an LVM volume group using one or more physical volumes.",
    syntax: [
      "vgcreate <volume-group> <physical-volume>",
      "vgcreate <volume-group> <physical-volume1> <physical-volume2>",
    ],
    examples: [
      {
        command: "sudo vgcreate vgdata /dev/sdb",
        description: "Create a volume group named vgdata using /dev/sdb.",
      },
      {
        command: "sudo vgcreate vgdata /dev/sdb /dev/sdc",
        description: "Create a volume group using multiple physical volumes.",
      },
    ],
    flags: [
      {
        flag: "-s <size>",
        meaning: "Set the physical extent size for the volume group.",
      },
    ],
    tags: ["lvm", "storage", "volume-group", "disk"],
    difficulty: "intermediate",
    common: true,
    dangerous: true,
  },

  {
    id: "lvcreate",
    tool: "linux",
    category: "volume-management",
    name: "lvcreate",
    title: "Create a Logical Volume",
    slug: "lvcreate",
    description:
      "Create a logical volume from available space in an LVM volume group.",
    syntax: [
      "lvcreate -L <size> -n <name> <volume-group>",
      "lvcreate -l <extents> -n <name> <volume-group>",
    ],
    examples: [
      {
        command: "sudo lvcreate -L 10G -n appdata vgdata",
        description: "Create a 10 GB logical volume named appdata.",
      },
      {
        command: "sudo lvcreate -l 100%FREE -n appdata vgdata",
        description: "Create a logical volume using all available space in vgdata.",
      },
    ],
    flags: [
      {
        flag: "-L <size>",
        meaning: "Specify the logical volume size.",
      },
      {
        flag: "-l <extents>",
        meaning: "Specify the logical volume size using physical extents.",
      },
      {
        flag: "-n <name>",
        meaning: "Specify the logical volume name.",
      },
    ],
    tags: ["lvm", "storage", "logical-volume", "disk"],
    difficulty: "intermediate",
    common: true,
    dangerous: true,
  },

  {
    id: "iptables",
    tool: "linux",
    category: "networking",
    name: "iptables",
    title: "Manage Firewall Rules",
    slug: "iptables",
    description:
      "Configure and inspect packet filtering rules in the Linux kernel's netfilter framework.",
    syntax: [
      "sudo iptables -L",
      "sudo iptables -A <chain> <rule>",
    ],
    examples: [
      {
        command: "sudo iptables -L -n -v",
        description: "List firewall rules with numeric addresses and packet counters.",
      },
      {
        command: "sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT",
        description: "Add a rule allowing incoming TCP traffic on port 22.",
      },
    ],
    flags: [
      {
        flag: "-L",
        meaning: "List rules in a chain or all chains.",
      },
      {
        flag: "-A",
        meaning: "Append a rule to a chain.",
      },
      {
        flag: "-D",
        meaning: "Delete a rule from a chain.",
      },
      {
        flag: "-n",
        meaning: "Display numeric addresses and ports without name resolution.",
      },
    ],
    tags: ["networking", "firewall", "security", "netfilter"],
    difficulty: "advanced",
    common: true,
    dangerous: true,
  },

  {
    id: "whois",
    tool: "linux",
    category: "networking",
    name: "whois",
    title: "Query Domain Registration Information",
    slug: "whois",
    description:
      "Query WHOIS services for registration and ownership information about domains and IP addresses.",
    syntax: [
      "whois <domain>",
      "whois <ip-address>",
    ],
    examples: [
      {
        command: "whois example.com",
        description: "Query WHOIS information for a domain.",
      },
      {
        command: "whois 8.8.8.8",
        description: "Query registration information for an IP address.",
      },
    ],
    flags: [],
    tags: ["networking", "domain", "dns", "information"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },
];

export default linuxCommands;