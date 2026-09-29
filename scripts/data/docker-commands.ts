export interface DockerCommand {
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
  difficulty: "beginner" | "intermediate" | "advanced";
  common: boolean;
  dangerous: boolean;
}

const dockerCommands: DockerCommand[] = [
  {
    id: "docker-help",
    tool: "docker",
    category: "basics",
    name: "docker",
    title: "Docker CLI help",
    slug: "docker",
    description:
      "Display Docker CLI help and list the available top-level commands.",
    syntax: ["docker", "docker --help"],
    examples: [
      {
        command: "docker",
        description: "Display the main Docker CLI help.",
      },
      {
        command: "docker --help",
        description: "Display detailed help for Docker commands.",
      },
    ],
    flags: [
      {
        flag: "--help",
        meaning: "Display help information.",
      },
    ],
    tags: ["basics", "help", "cli"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "docker-version",
    tool: "docker",
    category: "basics",
    name: "docker version",
    title: "Display Docker version",
    slug: "docker-version",
    description:
      "Display version information for the Docker client and Docker server.",
    syntax: ["docker version", "docker version --format '{{.Server.Version}}'"],
    examples: [
      {
        command: "docker version",
        description: "Show client and server version information.",
      },
    ],
    flags: [
      {
        flag: "--format",
        meaning: "Format the output using a Go template.",
      },
    ],
    tags: ["basics", "version", "information"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "docker-info",
    tool: "docker",
    category: "basics",
    name: "docker info",
    title: "Display Docker system information",
    slug: "docker-info",
    description:
      "Display system-wide information about the Docker daemon, containers, images, storage, and resources.",
    syntax: ["docker info"],
    examples: [
      {
        command: "docker info",
        description: "Display Docker daemon and system information.",
      },
    ],
    flags: [
      {
        flag: "--format",
        meaning: "Format the output using a Go template.",
      },
    ],
    tags: ["basics", "information", "daemon"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "docker-context",
    tool: "docker",
    category: "basics",
    name: "docker context",
    title: "Manage Docker contexts",
    slug: "docker-context",
    description:
      "Create, inspect, list, and switch between Docker contexts used to connect to different Docker daemons.",
    syntax: [
      "docker context ls",
      "docker context use <context>",
      "docker context create <name>",
    ],
    examples: [
      {
        command: "docker context ls",
        description: "List available Docker contexts.",
      },
      {
        command: "docker context use remote",
        description: "Switch the Docker CLI to the remote context.",
      },
    ],
    flags: [
      {
        flag: "ls",
        meaning: "List available Docker contexts.",
      },
      {
        flag: "use",
        meaning: "Set the active Docker context.",
      },
      {
        flag: "create",
        meaning: "Create a new Docker context.",
      },
    ],
    tags: ["basics", "context", "remote"],
    difficulty: "intermediate",
    common: false,
    dangerous: false,
  },

  {
    id: "docker-login",
    tool: "docker",
    category: "registry",
    name: "docker login",
    title: "Authenticate with a registry",
    slug: "docker-login",
    description:
      "Authenticate the Docker CLI with a container registry so images can be pulled or pushed using authenticated access.",
    syntax: ["docker login", "docker login <registry>"],
    examples: [
      {
        command: "docker login",
        description: "Log in to the default Docker registry.",
      },
      {
        command: "docker login ghcr.io",
        description: "Authenticate with GitHub Container Registry.",
      },
    ],
    flags: [
      {
        flag: "-u, --username",
        meaning: "Specify the registry username.",
      },
      {
        flag: "--password-stdin",
        meaning: "Read the password or access token from standard input.",
      },
    ],
    tags: ["registry", "authentication", "docker-hub"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "docker-pull",
    tool: "docker",
    category: "images",
    name: "docker pull",
    title: "Download an image",
    slug: "docker-pull",
    description:
      "Download a container image from a Docker registry to the local system.",
    syntax: ["docker pull <image>", "docker pull <image>:<tag>"],
    examples: [
      {
        command: "docker pull nginx",
        description: "Download the latest nginx image.",
      },
      {
        command: "docker pull nginx:alpine",
        description: "Download the Alpine-based nginx image.",
      },
    ],
    flags: [
      {
        flag: "-a, --all-tags",
        meaning: "Download all tagged images in the repository.",
      },
      {
        flag: "--platform",
        meaning: "Set the target platform for the image.",
      },
    ],
    tags: ["images", "registry", "download"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "docker-images",
    tool: "docker",
    category: "images",
    name: "docker images",
    title: "List Docker images",
    slug: "docker-images",
    description:
      "List container images stored locally on the Docker host.",
    syntax: ["docker images", "docker images <repository>"],
    examples: [
      {
        command: "docker images",
        description: "List all locally available Docker images.",
      },
      {
        command: "docker images nginx",
        description: "List local images from the nginx repository.",
      },
    ],
    flags: [
      {
        flag: "-a, --all",
        meaning: "Show intermediate and dangling images.",
      },
      {
        flag: "-q, --quiet",
        meaning: "Display only image IDs.",
      },
    ],
    tags: ["images", "list", "inspection"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "docker-image-inspect",
    tool: "docker",
    category: "images",
    name: "docker image inspect",
    title: "Inspect an image",
    slug: "docker-image-inspect",
    description:
      "Display detailed metadata and configuration information for one or more Docker images.",
    syntax: ["docker image inspect <image>"],
    examples: [
      {
        command: "docker image inspect nginx",
        description: "Inspect the nginx image configuration and metadata.",
      },
    ],
    flags: [
      {
        flag: "--format",
        meaning: "Format the output using a Go template.",
      },
    ],
    tags: ["images", "inspect", "metadata"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "docker-image-rm",
    tool: "docker",
    category: "images",
    name: "docker image rm",
    title: "Remove Docker images",
    slug: "docker-image-rm",
    description:
      "Remove one or more Docker images from the local Docker host.",
    syntax: ["docker image rm <image>", "docker image rm <image-id>"],
    examples: [
      {
        command: "docker image rm nginx",
        description: "Remove the nginx image.",
      },
    ],
    flags: [
      {
        flag: "-f, --force",
        meaning: "Force removal of the image.",
      },
    ],
    tags: ["images", "remove", "cleanup"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "docker-build",
    tool: "docker",
    category: "images",
    name: "docker build",
    title: "Build a Docker image",
    slug: "docker-build",
    description:
      "Build a Docker image from a Dockerfile and the specified build context.",
    syntax: [
      "docker build <context>",
      "docker build -t <name>:<tag> <context>",
    ],
    examples: [
      {
        command: "docker build -t myapp:latest .",
        description:
          "Build an image named myapp using the Dockerfile in the current directory.",
      },
      {
        command: "docker build -t myapp:v1 .",
        description: "Build and tag the image as version v1.",
      },
    ],
    flags: [
      {
        flag: "-t, --tag",
        meaning: "Assign a name and optionally a tag to the image.",
      },
      {
        flag: "-f, --file",
        meaning: "Specify a Dockerfile to use.",
      },
      {
        flag: "--no-cache",
        meaning: "Do not use cached layers during the build.",
      },
    ],
    tags: ["images", "build", "dockerfile"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "docker-push",
    tool: "docker",
    category: "registry",
    name: "docker push",
    title: "Push an image to a registry",
    slug: "docker-push",
    description:
      "Upload a locally available Docker image to a container registry.",
    syntax: ["docker push <image>:<tag>"],
    examples: [
      {
        command: "docker push myuser/myapp:latest",
        description: "Push the tagged image to a registry.",
      },
    ],
    flags: [],
    tags: ["registry", "images", "upload"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "docker-run",
    tool: "docker",
    category: "containers",
    name: "docker run",
    title: "Create and start a container",
    slug: "docker-run",
    description:
      "Create a new container from an image and start it with the specified configuration.",
    syntax: [
      "docker run <image>",
      "docker run -d -p <host-port>:<container-port> <image>",
    ],
    examples: [
      {
        command: "docker run nginx",
        description: "Create and start an nginx container.",
      },
      {
        command: "docker run -d -p 8080:80 nginx",
        description:
          "Run nginx in the background and map host port 8080 to container port 80.",
      },
    ],
    flags: [
      {
        flag: "-d, --detach",
        meaning: "Run the container in the background.",
      },
      {
        flag: "-p, --publish",
        meaning: "Publish a container port to the host.",
      },
      {
        flag: "--name",
        meaning: "Assign a custom name to the container.",
      },
      {
        flag: "-e, --env",
        meaning: "Set an environment variable inside the container.",
      },
      {
        flag: "-v, --volume",
        meaning: "Mount a volume or host path into the container.",
      },
    ],
    tags: ["containers", "run", "ports", "volumes"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "docker-ps",
    tool: "docker",
    category: "containers",
    name: "docker ps",
    title: "List containers",
    slug: "docker-ps",
    description:
      "List Docker containers, showing running containers by default.",
    syntax: ["docker ps", "docker ps -a"],
    examples: [
      {
        command: "docker ps",
        description: "List currently running containers.",
      },
      {
        command: "docker ps -a",
        description: "List all containers including stopped containers.",
      },
    ],
    flags: [
      {
        flag: "-a, --all",
        meaning: "Show all containers, including stopped containers.",
      },
      {
        flag: "-q, --quiet",
        meaning: "Display only container IDs.",
      },
      {
        flag: "--format",
        meaning: "Format the output using a Go template.",
      },
    ],
    tags: ["containers", "list", "inspection"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "docker-start",
    tool: "docker",
    category: "containers",
    name: "docker start",
    title: "Start stopped containers",
    slug: "docker-start",
    description:
      "Start one or more stopped Docker containers.",
    syntax: ["docker start <container>", "docker start <container1> <container2>"],
    examples: [
      {
        command: "docker start myapp",
        description: "Start the stopped container named myapp.",
      },
    ],
    flags: [
      {
        flag: "-a, --attach",
        meaning: "Attach the container's standard output and error streams.",
      },
      {
        flag: "-i, --interactive",
        meaning: "Attach the container's standard input.",
      },
    ],
    tags: ["containers", "start"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "docker-stop",
    tool: "docker",
    category: "containers",
    name: "docker stop",
    title: "Stop running containers",
    slug: "docker-stop",
    description:
      "Stop one or more running containers by sending them a termination signal.",
    syntax: ["docker stop <container>", "docker stop <container1> <container2>"],
    examples: [
      {
        command: "docker stop myapp",
        description: "Gracefully stop the container named myapp.",
      },
    ],
    flags: [
      {
        flag: "-t, --timeout",
        meaning: "Seconds to wait before forcibly stopping the container.",
      },
    ],
    tags: ["containers", "stop", "lifecycle"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "docker-rm",
    tool: "docker",
    category: "containers",
    name: "docker rm",
    title: "Remove containers",
    slug: "docker-rm",
    description:
      "Remove one or more stopped Docker containers from the local host.",
    syntax: ["docker rm <container>", "docker rm <container1> <container2>"],
    examples: [
      {
        command: "docker rm myapp",
        description: "Remove the stopped container named myapp.",
      },
    ],
    flags: [
      {
        flag: "-f, --force",
        meaning: "Force removal of a running container.",
      },
      {
        flag: "-v, --volumes",
        meaning: "Remove anonymous volumes associated with the container.",
      },
    ],
    tags: ["containers", "remove", "cleanup"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "docker-exec",
    tool: "docker",
    category: "execution",
    name: "docker exec",
    title: "Run a command inside a container",
    slug: "docker-exec",
    description:
      "Execute a command inside an already running Docker container.",
    syntax: ["docker exec <container> <command>", "docker exec -it <container> <command>"],
    examples: [
      {
        command: "docker exec -it myapp sh",
        description: "Open an interactive shell inside the myapp container.",
      },
      {
        command: "docker exec myapp ls /app",
        description: "List the contents of /app inside the container.",
      },
    ],
    flags: [
      {
        flag: "-i, --interactive",
        meaning: "Keep standard input open.",
      },
      {
        flag: "-t, --tty",
        meaning: "Allocate a pseudo-terminal.",
      },
      {
        flag: "-u, --user",
        meaning: "Run the command as a specific user.",
      },
      {
        flag: "-e, --env",
        meaning: "Set an environment variable for the command.",
      },
    ],
    tags: ["execution", "containers", "shell", "debugging"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "docker-logs",
    tool: "docker",
    category: "inspection",
    name: "docker logs",
    title: "View container logs",
    slug: "docker-logs",
    description:
      "Fetch and display the standard output and error logs generated by a container.",
    syntax: ["docker logs <container>", "docker logs -f <container>"],
    examples: [
      {
        command: "docker logs myapp",
        description: "Display the logs from the myapp container.",
      },
      {
        command: "docker logs -f myapp",
        description: "Follow the container logs in real time.",
      },
    ],
    flags: [
      {
        flag: "-f, --follow",
        meaning: "Follow log output continuously.",
      },
      {
        flag: "--tail",
        meaning: "Show only the specified number of lines from the end.",
      },
      {
        flag: "-t, --timestamps",
        meaning: "Show timestamps with log output.",
      },
    ],
    tags: ["inspection", "logs", "debugging"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "docker-inspect",
    tool: "docker",
    category: "inspection",
    name: "docker inspect",
    title: "Inspect Docker objects",
    slug: "docker-inspect",
    description:
      "Display detailed low-level information about Docker containers, images, networks, or volumes.",
    syntax: ["docker inspect <object>"],
    examples: [
      {
        command: "docker inspect myapp",
        description: "Display detailed configuration information for a container.",
      },
    ],
    flags: [
      {
        flag: "--format",
        meaning: "Format the output using a Go template.",
      },
      {
        flag: "-s, --size",
        meaning: "Display total file sizes for containers.",
      },
    ],
    tags: ["inspection", "metadata", "debugging"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "docker-stats",
    tool: "docker",
    category: "inspection",
    name: "docker stats",
    title: "Monitor container resources",
    slug: "docker-stats",
    description:
      "Display live CPU, memory, network, and block I/O usage statistics for running containers.",
    syntax: ["docker stats", "docker stats <container>"],
    examples: [
      {
        command: "docker stats",
        description: "Monitor resource usage for running containers.",
      },
      {
        command: "docker stats myapp",
        description: "Monitor resource usage for a specific container.",
      },
    ],
    flags: [
      {
        flag: "--no-stream",
        meaning: "Show the current statistics without continuously updating.",
      },
      {
        flag: "--format",
        meaning: "Format the statistics using a Go template.",
      },
    ],
    tags: ["inspection", "monitoring", "resources"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "docker-volume-create",
    tool: "docker",
    category: "volumes",
    name: "docker volume create",
    title: "Create a Docker volume",
    slug: "docker-volume-create",
    description:
      "Create a named Docker volume that can be used to persist container data.",
    syntax: ["docker volume create <name>"],
    examples: [
      {
        command: "docker volume create app-data",
        description: "Create a named volume called app-data.",
      },
    ],
    flags: [
      {
        flag: "--driver",
        meaning: "Specify the volume driver.",
      },
      {
        flag: "--label",
        meaning: "Add metadata labels to the volume.",
      },
    ],
    tags: ["volumes", "storage", "persistence"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "docker-network-create",
    tool: "docker",
    category: "networking",
    name: "docker network create",
    title: "Create a Docker network",
    slug: "docker-network-create",
    description:
      "Create a Docker network that allows containers to communicate with each other.",
    syntax: ["docker network create <name>"],
    examples: [
      {
        command: "docker network create app-network",
        description: "Create a bridge network named app-network.",
      },
    ],
    flags: [
      {
        flag: "-d, --driver",
        meaning: "Specify the network driver.",
      },
      {
        flag: "--subnet",
        meaning: "Specify the subnet for the network.",
      },
    ],
    tags: ["networking", "containers", "bridge"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "docker-system-prune",
    tool: "docker",
    category: "cleanup",
    name: "docker system prune",
    title: "Remove unused Docker resources",
    slug: "docker-system-prune",
    description:
      "Remove unused Docker resources such as stopped containers, unused networks, dangling images, and build cache.",
    syntax: ["docker system prune", "docker system prune -a"],
    examples: [
      {
        command: "docker system prune",
        description: "Remove unused resources after confirmation.",
      },
      {
        command: "docker system prune -a",
        description:
          "Remove unused resources including unused images, after confirmation.",
      },
    ],
    flags: [
      {
        flag: "-a, --all",
        meaning: "Remove all unused images, not only dangling images.",
      },
      {
        flag: "-f, --force",
        meaning: "Do not prompt for confirmation.",
      },
      {
        flag: "--volumes",
        meaning: "Also remove unused volumes.",
      },
    ],
    tags: ["cleanup", "disk-space", "maintenance"],
    difficulty: "intermediate",
    common: true,
    dangerous: true,
  },

  {
    id: "docker-compose-up",
    tool: "docker",
    category: "compose",
    name: "docker compose up",
    title: "Start Compose services",
    slug: "docker-compose-up",
    description:
      "Create and start the services defined in a Docker Compose file.",
    syntax: ["docker compose up", "docker compose up -d"],
    examples: [
      {
        command: "docker compose up",
        description: "Create and start the services in the Compose file.",
      },
      {
        command: "docker compose up -d",
        description: "Start Compose services in detached mode.",
      },
    ],
    flags: [
      {
        flag: "-d, --detach",
        meaning: "Run services in the background.",
      },
      {
        flag: "--build",
        meaning: "Build images before starting containers.",
      },
      {
        flag: "--force-recreate",
        meaning: "Recreate containers even when their configuration has not changed.",
      },
    ],
    tags: ["compose", "containers", "services"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "docker-compose-down",
    tool: "docker",
    category: "compose",
    name: "docker compose down",
    title: "Stop and remove Compose resources",
    slug: "docker-compose-down",
    description:
      "Stop and remove containers, networks, and other resources created by Docker Compose.",
    syntax: ["docker compose down", "docker compose down -v"],
    examples: [
      {
        command: "docker compose down",
        description: "Stop and remove the Compose application resources.",
      },
      {
        command: "docker compose down -v",
        description:
          "Stop and remove Compose resources including named volumes.",
      },
    ],
    flags: [
      {
        flag: "-v, --volumes",
        meaning: "Remove named and anonymous volumes declared by the Compose file.",
      },
      {
        flag: "--remove-orphans",
        meaning: "Remove containers for services not defined in the Compose file.",
      },
    ],
    tags: ["compose", "cleanup", "containers"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },
];

export default dockerCommands;