export interface GitCommand {
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

const gitCommands: GitCommand[] = [
  {
    id: "git-config",
    tool: "git",
    category: "configuration",
    name: "git config",
    title: "Configure Git",
    slug: "config",
    description:
      "Set and view Git configuration values for your user, repository, or system.",
    syntax: [
      "git config --global user.name \"Your Name\"",
      "git config --global user.email \"you@example.com\"",
      "git config --list",
    ],
    examples: [
      {
        command: 'git config --global user.name "Adesh Mandawale"',
        description: "Set the name used for your Git commits.",
      },
      {
        command: 'git config --global user.email "you@example.com"',
        description: "Set the email used for your Git commits.",
      },
      {
        command: "git config --list",
        description: "Display the current Git configuration.",
      },
    ],
    flags: [
      {
        flag: "--global",
        meaning: "Apply the configuration to your user account.",
      },
      {
        flag: "--local",
        meaning: "Apply the configuration to the current repository.",
      },
      {
        flag: "--list",
        meaning: "List configuration values.",
      },
    ],
    tags: ["configuration", "setup", "user"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "git-init",
    tool: "git",
    category: "repository",
    name: "git init",
    title: "Initialize a repository",
    slug: "init",
    description:
      "Create a new Git repository in the current directory.",
    syntax: ["git init"],
    examples: [
      {
        command: "git init",
        description: "Initialize the current directory as a Git repository.",
      },
      {
        command: "git init my-project",
        description: "Create a directory and initialize it as a Git repository.",
      },
    ],
    flags: [],
    tags: ["repository", "setup", "initialize"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "git-clone",
    tool: "git",
    category: "repository",
    name: "git clone",
    title: "Clone a repository",
    slug: "clone",
    description:
      "Create a local copy of an existing Git repository.",
    syntax: [
      "git clone <repository-url>",
      "git clone <repository-url> <directory>",
    ],
    examples: [
      {
        command: "git clone https://github.com/user/project.git",
        description: "Clone a remote repository into the current directory.",
      },
      {
        command: "git clone https://github.com/user/project.git my-project",
        description: "Clone the repository into a directory named my-project.",
      },
    ],
    flags: [
      {
        flag: "--depth <n>",
        meaning: "Create a shallow clone containing a limited commit history.",
      },
      {
        flag: "--branch <name>",
        meaning: "Clone a specific branch.",
      },
    ],
    tags: ["repository", "clone", "remote"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "git-status",
    tool: "git",
    category: "inspection",
    name: "git status",
    title: "Show repository status",
    slug: "status",
    description:
      "Display the state of the working tree and staging area.",
    syntax: ["git status", "git status --short"],
    examples: [
      {
        command: "git status",
        description: "Show detailed information about changed and untracked files.",
      },
      {
        command: "git status --short",
        description: "Show a compact status summary.",
      },
    ],
    flags: [
      {
        flag: "--short",
        meaning: "Use a compact output format.",
      },
      {
        flag: "--branch",
        meaning: "Show branch information in short status output.",
      },
    ],
    tags: ["status", "working-tree", "staging"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "git-add",
    tool: "git",
    category: "staging",
    name: "git add",
    title: "Stage changes",
    slug: "add",
    description:
      "Add file changes to the staging area for the next commit.",
    syntax: [
      "git add <file>",
      "git add .",
      "git add -A",
    ],
    examples: [
      {
        command: "git add index.html",
        description: "Stage a specific file.",
      },
      {
        command: "git add .",
        description: "Stage changes in the current directory.",
      },
      {
        command: "git add -A",
        description: "Stage all changes in the repository.",
      },
    ],
    flags: [
      {
        flag: "-A",
        meaning: "Stage all additions, modifications, and deletions.",
      },
      {
        flag: "-p",
        meaning: "Interactively choose which parts of changes to stage.",
      },
    ],
    tags: ["staging", "files", "commit"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "git-restore",
    tool: "git",
    category: "undo",
    name: "git restore",
    title: "Restore working tree files",
    slug: "restore",
    description:
      "Restore files in the working tree or remove them from the staging area.",
    syntax: [
      "git restore <file>",
      "git restore --staged <file>",
    ],
    examples: [
      {
        command: "git restore index.html",
        description: "Discard unstaged changes to a file.",
      },
      {
        command: "git restore --staged index.html",
        description: "Remove a file from the staging area without deleting its changes.",
      },
    ],
    flags: [
      {
        flag: "--staged",
        meaning: "Restore the index instead of the working tree.",
      },
      {
        flag: "--source <tree>",
        meaning: "Restore content from a specific commit or branch.",
      },
    ],
    tags: ["undo", "restore", "staging"],
    difficulty: "intermediate",
    common: true,
    dangerous: true,
  },

  {
    id: "git-commit",
    tool: "git",
    category: "commits",
    name: "git commit",
    title: "Create a commit",
    slug: "commit",
    description:
      "Record staged changes in the repository history.",
    syntax: [
      'git commit -m "commit message"',
      "git commit -am \"commit message\"",
    ],
    examples: [
      {
        command: 'git commit -m "Add login page"',
        description: "Create a commit with a message.",
      },
      {
        command: 'git commit -am "Fix configuration"',
        description: "Stage tracked modified files and commit them.",
      },
    ],
    flags: [
      {
        flag: "-m <message>",
        meaning: "Specify the commit message.",
      },
      {
        flag: "-a",
        meaning: "Automatically stage modified and deleted tracked files.",
      },
      {
        flag: "--amend",
        meaning: "Modify the most recent commit.",
      },
    ],
    tags: ["commit", "history", "staging"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "git-log",
    tool: "git",
    category: "history",
    name: "git log",
    title: "View commit history",
    slug: "log",
    description:
      "Display the commit history of a repository.",
    syntax: [
      "git log",
      "git log --oneline",
      "git log --graph --oneline --decorate",
    ],
    examples: [
      {
        command: "git log",
        description: "Show detailed commit history.",
      },
      {
        command: "git log --oneline",
        description: "Show commits in a compact one-line format.",
      },
      {
        command: "git log --graph --oneline --decorate",
        description: "Display a compact graphical history with branch references.",
      },
    ],
    flags: [
      {
        flag: "--oneline",
        meaning: "Show each commit on a single line.",
      },
      {
        flag: "--graph",
        meaning: "Display branch history using an ASCII graph.",
      },
      {
        flag: "--decorate",
        meaning: "Show branch and tag references.",
      },
      {
        flag: "-n <number>",
        meaning: "Limit the number of commits shown.",
      },
    ],
    tags: ["history", "commits", "branches"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "git-show",
    tool: "git",
    category: "inspection",
    name: "git show",
    title: "Show commit details",
    slug: "show",
    description:
      "Display information and changes introduced by a commit or other Git object.",
    syntax: ["git show", "git show <commit>"],
    examples: [
      {
        command: "git show",
        description: "Show details of the latest commit.",
      },
      {
        command: "git show HEAD~1",
        description: "Show the commit before the current HEAD.",
      },
    ],
    flags: [
      {
        flag: "--stat",
        meaning: "Show a summary of changed files instead of the full patch.",
      },
      {
        flag: "--name-only",
        meaning: "Show only the names of changed files.",
      },
    ],
    tags: ["history", "commit", "inspection"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "git-diff",
    tool: "git",
    category: "inspection",
    name: "git diff",
    title: "Compare changes",
    slug: "diff",
    description:
      "Show differences between working tree, staging area, commits, or branches.",
    syntax: [
      "git diff",
      "git diff --staged",
      "git diff <branch1> <branch2>",
    ],
    examples: [
      {
        command: "git diff",
        description: "Show unstaged changes.",
      },
      {
        command: "git diff --staged",
        description: "Show changes currently staged for commit.",
      },
      {
        command: "git diff main feature",
        description: "Compare two branches.",
      },
    ],
    flags: [
      {
        flag: "--staged",
        meaning: "Show changes staged for the next commit.",
      },
      {
        flag: "--stat",
        meaning: "Show a summary of changed files.",
      },
    ],
    tags: ["diff", "changes", "comparison"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "git-branch",
    tool: "git",
    category: "branching",
    name: "git branch",
    title: "Manage branches",
    slug: "branch",
    description:
      "List, create, rename, or delete branches.",
    syntax: [
      "git branch",
      "git branch <branch>",
      "git branch -d <branch>",
    ],
    examples: [
      {
        command: "git branch",
        description: "List local branches.",
      },
      {
        command: "git branch feature-login",
        description: "Create a new branch.",
      },
      {
        command: "git branch -d feature-login",
        description: "Delete a fully merged branch.",
      },
    ],
    flags: [
      {
        flag: "-a",
        meaning: "List local and remote-tracking branches.",
      },
      {
        flag: "-d",
        meaning: "Delete a fully merged branch.",
      },
      {
        flag: "-D",
        meaning: "Force-delete a branch.",
      },
      {
        flag: "-m",
        meaning: "Rename a branch.",
      },
    ],
    tags: ["branch", "branching", "workflow"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "git-switch",
    tool: "git",
    category: "branching",
    name: "git switch",
    title: "Switch branches",
    slug: "switch",
    description:
      "Switch between branches or create and switch to a new branch.",
    syntax: [
      "git switch <branch>",
      "git switch -c <new-branch>",
    ],
    examples: [
      {
        command: "git switch main",
        description: "Switch to the main branch.",
      },
      {
        command: "git switch -c feature-login",
        description: "Create and switch to a new branch.",
      },
    ],
    flags: [
      {
        flag: "-c",
        meaning: "Create a new branch and switch to it.",
      },
      {
        flag: "--detach",
        meaning: "Switch to a commit without creating a branch.",
      },
    ],
    tags: ["branch", "switch", "workflow"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "git-checkout",
    tool: "git",
    category: "branching",
    name: "git checkout",
    title: "Switch branches or restore files",
    slug: "checkout",
    description:
      "Switch branches or restore files from a commit. Git switch and git restore are preferred for many modern workflows.",
    syntax: [
      "git checkout <branch>",
      "git checkout -b <new-branch>",
      "git checkout <commit> -- <file>",
    ],
    examples: [
      {
        command: "git checkout main",
        description: "Switch to the main branch.",
      },
      {
        command: "git checkout -b feature-login",
        description: "Create and switch to a new branch.",
      },
      {
        command: "git checkout HEAD -- index.html",
        description: "Restore a file from the current commit.",
      },
    ],
    flags: [
      {
        flag: "-b",
        meaning: "Create a new branch and switch to it.",
      },
      {
        flag: "--",
        meaning: "Separate branch or commit references from file paths.",
      },
    ],
    tags: ["branch", "restore", "legacy"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "git-merge",
    tool: "git",
    category: "branching",
    name: "git merge",
    title: "Merge branches",
    slug: "merge",
    description:
      "Join the changes from one branch into another branch.",
    syntax: [
      "git merge <branch>",
      "git merge --no-ff <branch>",
    ],
    examples: [
      {
        command: "git switch main && git merge feature-login",
        description: "Merge feature-login into main.",
      },
      {
        command: "git merge --no-ff feature-login",
        description: "Create a merge commit even when a fast-forward is possible.",
      },
    ],
    flags: [
      {
        flag: "--no-ff",
        meaning: "Always create a merge commit.",
      },
      {
        flag: "--abort",
        meaning: "Abort an in-progress merge.",
      },
    ],
    tags: ["branch", "merge", "integration"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "git-rebase",
    tool: "git",
    category: "branching",
    name: "git rebase",
    title: "Reapply commits onto another base",
    slug: "rebase",
    description:
      "Move or replay commits onto a different base commit.",
    syntax: [
      "git rebase <branch>",
      "git rebase -i HEAD~3",
    ],
    examples: [
      {
        command: "git rebase main",
        description: "Rebase the current branch onto main.",
      },
      {
        command: "git rebase -i HEAD~3",
        description: "Interactively edit the last three commits.",
      },
    ],
    flags: [
      {
        flag: "-i",
        meaning: "Open an interactive rebase session.",
      },
      {
        flag: "--continue",
        meaning: "Continue after resolving conflicts.",
      },
      {
        flag: "--abort",
        meaning: "Cancel the current rebase.",
      },
    ],
    tags: ["branch", "rebase", "history"],
    difficulty: "advanced",
    common: true,
    dangerous: true,
  },

  {
    id: "git-remote",
    tool: "git",
    category: "remote",
    name: "git remote",
    title: "Manage remote repositories",
    slug: "remote",
    description:
      "Manage connections between your local repository and remote repositories.",
    syntax: [
      "git remote -v",
      "git remote add <name> <url>",
      "git remote remove <name>",
    ],
    examples: [
      {
        command: "git remote -v",
        description: "List configured remote repository URLs.",
      },
      {
        command: "git remote add origin https://github.com/user/project.git",
        description: "Add a remote named origin.",
      },
    ],
    flags: [
      {
        flag: "-v",
        meaning: "Show remote URLs.",
      },
      {
        flag: "add",
        meaning: "Add a new remote repository.",
      },
      {
        flag: "remove",
        meaning: "Remove a configured remote.",
      },
    ],
    tags: ["remote", "repository", "github"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "git-fetch",
    tool: "git",
    category: "remote",
    name: "git fetch",
    title: "Download remote changes",
    slug: "fetch",
    description:
      "Download commits and references from a remote repository without changing your current branch.",
    syntax: [
      "git fetch",
      "git fetch origin",
      "git fetch --all",
    ],
    examples: [
      {
        command: "git fetch origin",
        description: "Fetch updates from the origin remote.",
      },
      {
        command: "git fetch --all",
        description: "Fetch updates from all configured remotes.",
      },
    ],
    flags: [
      {
        flag: "--all",
        meaning: "Fetch from all configured remotes.",
      },
      {
        flag: "--prune",
        meaning: "Remove remote-tracking references that no longer exist on the remote.",
      },
    ],
    tags: ["remote", "sync", "download"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "git-pull",
    tool: "git",
    category: "remote",
    name: "git pull",
    title: "Fetch and integrate remote changes",
    slug: "pull",
    description:
      "Fetch changes from a remote repository and integrate them into the current branch.",
    syntax: [
      "git pull",
      "git pull origin main",
      "git pull --rebase",
    ],
    examples: [
      {
        command: "git pull origin main",
        description: "Fetch and integrate changes from the main branch on origin.",
      },
      {
        command: "git pull --rebase",
        description: "Fetch and rebase local commits onto the updated remote branch.",
      },
    ],
    flags: [
      {
        flag: "--rebase",
        meaning: "Rebase local commits instead of merging.",
      },
      {
        flag: "--ff-only",
        meaning: "Only update when the pull can be completed as a fast-forward.",
      },
    ],
    tags: ["remote", "sync", "update"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "git-push",
    tool: "git",
    category: "remote",
    name: "git push",
    title: "Upload local changes",
    slug: "push",
    description:
      "Send local commits and references to a remote repository.",
    syntax: [
      "git push",
      "git push origin <branch>",
      "git push -u origin <branch>",
    ],
    examples: [
      {
        command: "git push origin main",
        description: "Push the local main branch to origin.",
      },
      {
        command: "git push -u origin feature-login",
        description: "Push a new branch and set its upstream remote branch.",
      },
    ],
    flags: [
      {
        flag: "-u",
        meaning: "Set the upstream tracking branch.",
      },
      {
        flag: "--force-with-lease",
        meaning: "Safely force-update a remote branch when it has not changed unexpectedly.",
      },
    ],
    tags: ["remote", "sync", "upload"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "git-stash",
    tool: "git",
    category: "undo",
    name: "git stash",
    title: "Temporarily save changes",
    slug: "stash",
    description:
      "Temporarily store uncommitted changes so you can work on a clean working tree.",
    syntax: [
      "git stash",
      "git stash pop",
      "git stash list",
    ],
    examples: [
      {
        command: "git stash",
        description: "Save current uncommitted changes.",
      },
      {
        command: "git stash pop",
        description: "Apply the most recent stash and remove it from the stash list.",
      },
      {
        command: "git stash list",
        description: "List saved stashes.",
      },
    ],
    flags: [
      {
        flag: "pop",
        meaning: "Apply the latest stash and remove it from the stash list.",
      },
      {
        flag: "list",
        meaning: "List available stashes.",
      },
      {
        flag: "apply",
        meaning: "Apply a stash without removing it.",
      },
    ],
    tags: ["stash", "temporary", "changes"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "git-tag",
    tool: "git",
    category: "tagging",
    name: "git tag",
    title: "Create and manage tags",
    slug: "tag",
    description:
      "Create, list, delete, and manage tags used to mark important points in Git history.",
    syntax: [
      "git tag",
      "git tag <tag>",
      "git tag -a <tag> -m \"message\"",
    ],
    examples: [
      {
        command: "git tag v1.0.0",
        description: "Create a lightweight tag at the current commit.",
      },
      {
        command: 'git tag -a v1.0.0 -m "Release 1.0.0"',
        description: "Create an annotated release tag.",
      },
    ],
    flags: [
      {
        flag: "-a",
        meaning: "Create an annotated tag.",
      },
      {
        flag: "-d",
        meaning: "Delete a local tag.",
      },
    ],
    tags: ["tag", "release", "versioning"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "git-reset",
    tool: "git",
    category: "undo",
    name: "git reset",
    title: "Reset repository state",
    slug: "reset",
    description:
      "Move the current branch reference and optionally modify the staging area or working tree.",
    syntax: [
      "git reset <file>",
      "git reset --soft HEAD~1",
      "git reset --hard HEAD~1",
    ],
    examples: [
      {
        command: "git reset HEAD~1",
        description: "Move HEAD back one commit while keeping changes in the working tree.",
      },
      {
        command: "git reset --soft HEAD~1",
        description: "Move HEAD back one commit while keeping changes staged.",
      },
      {
        command: "git reset --hard HEAD~1",
        description: "Move HEAD back one commit and reset the working tree to match.",
      },
    ],
    flags: [
      {
        flag: "--soft",
        meaning: "Move HEAD while leaving the index and working tree unchanged.",
      },
      {
        flag: "--mixed",
        meaning: "Move HEAD and reset the staging area while keeping working-tree changes.",
      },
      {
        flag: "--hard",
        meaning: "Reset HEAD, staging area, and working tree. Uncommitted changes can be lost.",
      },
    ],
    tags: ["undo", "history", "reset"],
    difficulty: "advanced",
    common: true,
    dangerous: true,
  },

  {
    id: "git-revert",
    tool: "git",
    category: "undo",
    name: "git revert",
    title: "Undo a commit with a new commit",
    slug: "revert",
    description:
      "Create a new commit that reverses the changes introduced by an earlier commit.",
    syntax: [
      "git revert <commit>",
      "git revert HEAD",
    ],
    examples: [
      {
        command: "git revert HEAD",
        description: "Create a new commit that reverses the latest commit.",
      },
      {
        command: "git revert abc1234",
        description: "Create a new commit that reverses a specific commit.",
      },
    ],
    flags: [
      {
        flag: "--no-edit",
        meaning: "Use the default generated commit message without opening an editor.",
      },
      {
        flag: "--no-commit",
        meaning: "Apply the reverse changes without creating the commit immediately.",
      },
    ],
    tags: ["undo", "history", "commit"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "git-cherry-pick",
    tool: "git",
    category: "advanced",
    name: "git cherry-pick",
    title: "Apply a specific commit",
    slug: "cherry-pick",
    description:
      "Apply the changes introduced by one or more existing commits to the current branch.",
    syntax: [
      "git cherry-pick <commit>",
      "git cherry-pick <commit1> <commit2>",
    ],
    examples: [
      {
        command: "git cherry-pick abc1234",
        description: "Apply a specific commit to the current branch.",
      },
    ],
    flags: [
      {
        flag: "--no-commit",
        meaning: "Apply changes without creating a commit automatically.",
      },
      {
        flag: "--abort",
        meaning: "Cancel an in-progress cherry-pick.",
      },
      {
        flag: "--continue",
        meaning: "Continue after resolving conflicts.",
      },
    ],
    tags: ["commit", "history", "advanced"],
    difficulty: "advanced",
    common: false,
    dangerous: false,
  },

  {
    id: "git-reflog",
    tool: "git",
    category: "history",
    name: "git reflog",
    title: "View reference history",
    slug: "reflog",
    description:
      "Show updates to local Git references such as HEAD and branch pointers.",
    syntax: [
      "git reflog",
      "git reflog show <branch>",
    ],
    examples: [
      {
        command: "git reflog",
        description: "View recent movements of HEAD.",
      },
      {
        command: "git reflog show main",
        description: "View reference updates for the main branch.",
      },
    ],
    flags: [],
    tags: ["history", "recovery", "debugging"],
    difficulty: "advanced",
    common: true,
    dangerous: false,
  },

  {
    id: "git-clean",
    tool: "git",
    category: "undo",
    name: "git clean",
    title: "Remove untracked files",
    slug: "clean",
    description:
      "Remove untracked files and directories from the working tree.",
    syntax: [
      "git clean -n",
      "git clean -f",
      "git clean -fd",
    ],
    examples: [
      {
        command: "git clean -n",
        description: "Preview which untracked files would be removed.",
      },
      {
        command: "git clean -f",
        description: "Remove untracked files.",
      },
      {
        command: "git clean -fd",
        description: "Remove untracked files and directories.",
      },
    ],
    flags: [
      {
        flag: "-n",
        meaning: "Preview what would be removed without deleting anything.",
      },
      {
        flag: "-f",
        meaning: "Actually remove untracked files.",
      },
      {
        flag: "-d",
        meaning: "Include untracked directories.",
      },
    ],
    tags: ["cleanup", "files", "delete"],
    difficulty: "advanced",
    common: false,
    dangerous: true,
  },

  {
    id: "git-rm",
    tool: "git",
    category: "staging",
    name: "git rm",
    title: "Remove tracked files",
    slug: "rm",
    description:
      "Remove files from the working tree and stage their deletion.",
    syntax: [
      "git rm <file>",
      "git rm -r <directory>",
      "git rm --cached <file>",
    ],
    examples: [
      {
        command: "git rm old-file.txt",
        description: "Remove a tracked file and stage the deletion.",
      },
      {
        command: "git rm --cached .env",
        description: "Stop tracking a file while keeping it in the working directory.",
      },
    ],
    flags: [
      {
        flag: "-r",
        meaning: "Recursively remove directories.",
      },
      {
        flag: "--cached",
        meaning: "Remove files from the index while keeping them in the working tree.",
      },
    ],
    tags: ["files", "delete", "staging"],
    difficulty: "intermediate",
    common: true,
    dangerous: true,
  },

  {
    id: "git-mv",
    tool: "git",
    category: "staging",
    name: "git mv",
    title: "Move or rename files",
    slug: "mv",
    description:
      "Move or rename a file while automatically staging the change.",
    syntax: [
      "git mv <old-name> <new-name>",
      "git mv <file> <directory>",
    ],
    examples: [
      {
        command: "git mv old-name.txt new-name.txt",
        description: "Rename a tracked file.",
      },
      {
        command: "git mv app.js src/app.js",
        description: "Move a tracked file into another directory.",
      },
    ],
    flags: [],
    tags: ["files", "rename", "move"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },
    {
    id: "git-blame",
    tool: "git",
    category: "inspection",
    name: "git blame",
    title: "Show line-by-line authorship",
    slug: "blame",
    description:
      "Show which commit and author last modified each line of a file.",
    syntax: [
      "git blame <file>",
      "git blame -L <start>,<end> <file>",
    ],
    examples: [
      {
        command: "git blame app.js",
        description: "Show the commit and author associated with each line of app.js.",
      },
      {
        command: "git blame -L 10,20 app.js",
        description: "Show authorship information for lines 10 through 20.",
      },
    ],
    flags: [
      {
        flag: "-L <start>,<end>",
        meaning: "Limit the output to a specific range of lines.",
      },
      {
        flag: "-e",
        meaning: "Show author email addresses instead of names.",
      },
    ],
    tags: ["inspection", "history", "debugging", "authorship"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "git-bisect",
    tool: "git",
    category: "debugging",
    name: "git bisect",
    title: "Find the commit that introduced a bug",
    slug: "bisect",
    description:
      "Use binary search through commit history to identify the commit that introduced a problem.",
    syntax: [
      "git bisect start",
      "git bisect bad",
      "git bisect good <commit>",
    ],
    examples: [
      {
        command: "git bisect start",
        description: "Start a bisect session.",
      },
      {
        command: "git bisect bad",
        description: "Mark the current commit as containing the problem.",
      },
      {
        command: "git bisect good v1.0.0",
        description: "Mark a known-good commit so Git can narrow down the problematic commit.",
      },
      {
        command: "git bisect reset",
        description: "End the bisect session and return to the previous branch.",
      },
    ],
    flags: [],
    tags: ["debugging", "history", "bisect", "troubleshooting"],
    difficulty: "advanced",
    common: false,
    dangerous: false,
  },

  {
    id: "git-worktree",
    tool: "git",
    category: "advanced",
    name: "git worktree",
    title: "Manage multiple working trees",
    slug: "worktree",
    description:
      "Create and manage multiple working trees linked to the same Git repository.",
    syntax: [
      "git worktree list",
      "git worktree add <path> <branch>",
      "git worktree remove <path>",
    ],
    examples: [
      {
        command: "git worktree list",
        description: "List all working trees associated with the repository.",
      },
      {
        command: "git worktree add ../feature-login feature-login",
        description: "Create a separate working tree for the feature-login branch.",
      },
    ],
    flags: [
      {
        flag: "list",
        meaning: "List existing working trees.",
      },
      {
        flag: "add",
        meaning: "Create a new working tree.",
      },
      {
        flag: "remove",
        meaning: "Remove a working tree.",
      },
    ],
    tags: ["worktree", "branch", "workflow", "advanced"],
    difficulty: "advanced",
    common: false,
    dangerous: false,
  },

  {
    id: "git-archive",
    tool: "git",
    category: "repository",
    name: "git archive",
    title: "Create a source archive",
    slug: "archive",
    description:
      "Create an archive of files from a Git tree, commit, or branch.",
    syntax: [
      "git archive <tree-ish>",
      "git archive --format=tar.gz -o <file> <tree-ish>",
    ],
    examples: [
      {
        command: "git archive --format=tar.gz -o project.tar.gz main",
        description: "Create a compressed archive of the main branch.",
      },
      {
        command: "git archive -o project.zip HEAD",
        description: "Create a ZIP archive from the current commit.",
      },
    ],
    flags: [
      {
        flag: "--format=<format>",
        meaning: "Specify the archive format.",
      },
      {
        flag: "-o <file>",
        meaning: "Write the archive to the specified file.",
      },
    ],
    tags: ["archive", "release", "repository"],
    difficulty: "intermediate",
    common: false,
    dangerous: false,
  },

  {
    id: "git-submodule",
    tool: "git",
    category: "repository",
    name: "git submodule",
    title: "Manage nested repositories",
    slug: "submodule",
    description:
      "Manage another Git repository as a subdirectory of the current repository.",
    syntax: [
      "git submodule add <repository-url> <path>",
      "git submodule update --init --recursive",
      "git submodule status",
    ],
    examples: [
      {
        command: "git submodule add https://github.com/user/library.git libs/library",
        description: "Add another Git repository as a submodule.",
      },
      {
        command: "git submodule update --init --recursive",
        description: "Initialize and update submodules, including nested submodules.",
      },
    ],
    flags: [
      {
        flag: "add",
        meaning: "Add a repository as a submodule.",
      },
      {
        flag: "update",
        meaning: "Update submodules to their recorded commits.",
      },
      {
        flag: "status",
        meaning: "Show the status of submodules.",
      },
    ],
    tags: ["submodule", "repository", "dependencies"],
    difficulty: "advanced",
    common: false,
    dangerous: false,
  },

  {
    id: "git-ls-files",
    tool: "git",
    category: "inspection",
    name: "git ls-files",
    title: "List tracked files",
    slug: "ls-files",
    description:
      "Show files tracked by Git and inspect the contents of the index.",
    syntax: [
      "git ls-files",
      "git ls-files <path>",
      "git ls-files --cached",
    ],
    examples: [
      {
        command: "git ls-files",
        description: "List all files currently tracked by Git.",
      },
      {
        command: "git ls-files src/",
        description: "List tracked files under the src directory.",
      },
    ],
    flags: [
      {
        flag: "--cached",
        meaning: "Show files tracked in the index.",
      },
      {
        flag: "--others",
        meaning: "Show untracked files.",
      },
      {
        flag: "--ignored",
        meaning: "Show ignored files.",
      },
    ],
    tags: ["inspection", "files", "staging", "index"],
    difficulty: "intermediate",
    common: false,
    dangerous: false,
  },

  {
    id: "git-grep",
    tool: "git",
    category: "inspection",
    name: "git grep",
    title: "Search tracked files",
    slug: "grep",
    description:
      "Search for text patterns in files tracked by Git.",
    syntax: [
      "git grep <pattern>",
      "git grep -n <pattern>",
      "git grep <pattern> -- <path>",
    ],
    examples: [
      {
        command: "git grep TODO",
        description: "Search tracked files for TODO.",
      },
      {
        command: "git grep -n \"function login\" -- src/",
        description: "Search for a pattern under the src directory and show line numbers.",
      },
    ],
    flags: [
      {
        flag: "-n",
        meaning: "Show line numbers for matching lines.",
      },
      {
        flag: "-i",
        meaning: "Ignore case when searching.",
      },
      {
        flag: "-l",
        meaning: "Show only the names of files containing matches.",
      },
    ],
    tags: ["search", "files", "inspection", "text"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },
];

export default gitCommands;