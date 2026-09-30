export interface KubernetesCommand {
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

const kubernetesCommands: KubernetesCommand[] = [
  {
    id: "kubernetes-get",
    tool: "kubernetes",
    category: "inspection",
    name: "kubectl get",
    title: "List Kubernetes resources",
    slug: "get",
    description: "Display Kubernetes resources such as pods, services, deployments, and nodes.",
    syntax: [
      "kubectl get <resource>",
      "kubectl get <resource> -n <namespace>",
      "kubectl get <resource> -o wide",
    ],
    examples: [
      {
        command: "kubectl get pods",
        description: "List pods in the current namespace.",
      },
      {
        command: "kubectl get pods -A",
        description: "List pods across all namespaces.",
      },
      {
        command: "kubectl get deployments -o wide",
        description: "Show deployments with additional information.",
      },
    ],
    flags: [
      {
        flag: "-A, --all-namespaces",
        meaning: "List resources across all namespaces.",
      },
      {
        flag: "-n, --namespace",
        meaning: "Specify the namespace.",
      },
      {
        flag: "-o, --output",
        meaning: "Choose the output format.",
      },
    ],
    tags: ["kubectl", "resources", "inspection"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "kubernetes-describe",
    tool: "kubernetes",
    category: "inspection",
    name: "kubectl describe",
    title: "Show detailed resource information",
    slug: "describe",
    description: "Display detailed information about a Kubernetes resource, including events and configuration.",
    syntax: [
      "kubectl describe <resource> <name>",
      "kubectl describe pod <pod-name>",
    ],
    examples: [
      {
        command: "kubectl describe pod nginx",
        description: "Show detailed information about the nginx pod.",
      },
      {
        command: "kubectl describe deployment nginx",
        description: "Inspect a deployment and its recent events.",
      },
    ],
    flags: [
      {
        flag: "-n, --namespace",
        meaning: "Specify the namespace.",
      },
    ],
    tags: ["kubectl", "debugging", "inspection", "events"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "kubernetes-logs",
    tool: "kubernetes",
    category: "debugging",
    name: "kubectl logs",
    title: "View container logs",
    slug: "logs",
    description: "Print logs from a container running inside a Kubernetes pod.",
    syntax: [
      "kubectl logs <pod>",
      "kubectl logs <pod> -c <container>",
      "kubectl logs -f <pod>",
    ],
    examples: [
      {
        command: "kubectl logs nginx",
        description: "Display logs from the nginx pod.",
      },
      {
        command: "kubectl logs -f nginx",
        description: "Follow logs from the nginx pod.",
      },
      {
        command: "kubectl logs nginx -c app",
        description: "Display logs from a specific container.",
      },
    ],
    flags: [
      {
        flag: "-f, --follow",
        meaning: "Stream logs continuously.",
      },
      {
        flag: "-c, --container",
        meaning: "Specify the container name.",
      },
      {
        flag: "--previous",
        meaning: "Show logs from the previous container instance.",
      },
    ],
    tags: ["kubectl", "logs", "debugging"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "kubernetes-exec",
    tool: "kubernetes",
    category: "debugging",
    name: "kubectl exec",
    title: "Execute a command inside a container",
    slug: "exec",
    description: "Run a command inside a container in a Kubernetes pod.",
    syntax: [
      "kubectl exec <pod> -- <command>",
      "kubectl exec -it <pod> -- <command>",
      "kubectl exec -it <pod> -c <container> -- <command>",
    ],
    examples: [
      {
        command: "kubectl exec nginx -- ls",
        description: "List files inside the nginx container.",
      },
      {
        command: "kubectl exec -it nginx -- /bin/sh",
        description: "Open an interactive shell inside the container.",
      },
    ],
    flags: [
      {
        flag: "-i, --stdin",
        meaning: "Pass standard input to the container.",
      },
      {
        flag: "-t, --tty",
        meaning: "Allocate a terminal.",
      },
      {
        flag: "-c, --container",
        meaning: "Specify the container.",
      },
    ],
    tags: ["kubectl", "exec", "shell", "debugging"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "kubernetes-apply",
    tool: "kubernetes",
    category: "workloads",
    name: "kubectl apply",
    title: "Create or update resources",
    slug: "apply",
    description: "Create or update Kubernetes resources from manifest files.",
    syntax: [
      "kubectl apply -f <file>",
      "kubectl apply -f <directory>",
      "kubectl apply -f <url>",
    ],
    examples: [
      {
        command: "kubectl apply -f deployment.yaml",
        description: "Create or update resources defined in a manifest.",
      },
      {
        command: "kubectl apply -f manifests/",
        description: "Apply all supported manifests in a directory.",
      },
    ],
    flags: [
      {
        flag: "-f, --filename",
        meaning: "Specify the manifest file, directory, or URL.",
      },
      {
        flag: "--dry-run",
        meaning: "Preview the operation without applying changes.",
      },
    ],
    tags: ["kubectl", "deployment", "manifests", "configuration"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "kubernetes-create",
    tool: "kubernetes",
    category: "workloads",
    name: "kubectl create",
    title: "Create Kubernetes resources",
    slug: "create",
    description: "Create Kubernetes resources directly from the command line or from manifests.",
    syntax: [
      "kubectl create <resource> <name>",
      "kubectl create -f <file>",
    ],
    examples: [
      {
        command: "kubectl create namespace dev",
        description: "Create a namespace named dev.",
      },
      {
        command: "kubectl create -f deployment.yaml",
        description: "Create resources from a manifest.",
      },
    ],
    flags: [
      {
        flag: "-f, --filename",
        meaning: "Specify a manifest file or directory.",
      },
      {
        flag: "--dry-run",
        meaning: "Preview the resource creation.",
      },
    ],
    tags: ["kubectl", "create", "resources"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "kubernetes-delete",
    tool: "kubernetes",
    category: "workloads",
    name: "kubectl delete",
    title: "Delete Kubernetes resources",
    slug: "delete",
    description: "Delete Kubernetes resources such as pods, deployments, services, and namespaces.",
    syntax: [
      "kubectl delete <resource> <name>",
      "kubectl delete -f <file>",
      "kubectl delete <resource> --all",
    ],
    examples: [
      {
        command: "kubectl delete pod nginx",
        description: "Delete the nginx pod.",
      },
      {
        command: "kubectl delete -f deployment.yaml",
        description: "Delete resources defined in a manifest.",
      },
    ],
    flags: [
      {
        flag: "-f, --filename",
        meaning: "Delete resources defined in a manifest.",
      },
      {
        flag: "--all",
        meaning: "Delete all resources of the specified type.",
      },
      {
        flag: "-n, --namespace",
        meaning: "Specify the namespace.",
      },
    ],
    tags: ["kubectl", "delete", "cleanup"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "kubernetes-rollout",
    tool: "kubernetes",
    category: "deployments",
    name: "kubectl rollout",
    title: "Manage deployment rollouts",
    slug: "rollout",
    description: "Inspect, pause, resume, restart, or undo Kubernetes deployment rollouts.",
    syntax: [
      "kubectl rollout status deployment/<name>",
      "kubectl rollout restart deployment/<name>",
      "kubectl rollout undo deployment/<name>",
    ],
    examples: [
      {
        command: "kubectl rollout status deployment/nginx",
        description: "Wait for the nginx deployment rollout to complete.",
      },
      {
        command: "kubectl rollout restart deployment/nginx",
        description: "Restart all pods managed by the deployment.",
      },
      {
        command: "kubectl rollout undo deployment/nginx",
        description: "Roll the deployment back to its previous revision.",
      },
    ],
    flags: [
      {
        flag: "status",
        meaning: "Show rollout status.",
      },
      {
        flag: "restart",
        meaning: "Restart the resources managed by the workload.",
      },
      {
        flag: "undo",
        meaning: "Roll back to a previous revision.",
      },
    ],
    tags: ["kubectl", "deployment", "rollout", "rollback"],
    difficulty: "intermediate",
    common: true,
    dangerous: true,
  },

  {
    id: "kubernetes-scale",
    tool: "kubernetes",
    category: "deployments",
    name: "kubectl scale",
    title: "Scale workloads",
    slug: "scale",
    description: "Change the number of replicas for a Kubernetes workload.",
    syntax: [
      "kubectl scale deployment <name> --replicas=<count>",
      "kubectl scale deployment/<name> --replicas=<count>",
    ],
    examples: [
      {
        command: "kubectl scale deployment nginx --replicas=3",
        description: "Scale the nginx deployment to three replicas.",
      },
      {
        command: "kubectl scale deployment api --replicas=0",
        description: "Scale the API deployment down to zero replicas.",
      },
    ],
    flags: [
      {
        flag: "--replicas",
        meaning: "Set the desired number of replicas.",
      },
    ],
    tags: ["kubectl", "scaling", "deployment", "replicas"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "kubernetes-set-image",
    tool: "kubernetes",
    category: "deployments",
    name: "kubectl set image",
    title: "Update a container image",
    slug: "set-image",
    description: "Update the container image used by a Kubernetes workload.",
    syntax: [
      "kubectl set image deployment/<name> <container>=<image>",
    ],
    examples: [
      {
        command: "kubectl set image deployment/nginx nginx=nginx:1.27",
        description: "Update the nginx container image.",
      },
    ],
    flags: [
      {
        flag: "--record",
        meaning: "Record the command as an annotation when supported.",
      },
    ],
    tags: ["kubectl", "image", "deployment", "release"],
    difficulty: "intermediate",
    common: true,
    dangerous: true,
  },

  {
    id: "kubernetes-config",
    tool: "kubernetes",
    category: "configuration",
    name: "kubectl config",
    title: "Manage kubeconfig settings",
    slug: "config",
    description: "View and modify Kubernetes cluster, context, and user configuration.",
    syntax: [
      "kubectl config get-contexts",
      "kubectl config current-context",
      "kubectl config use-context <context>",
    ],
    examples: [
      {
        command: "kubectl config get-contexts",
        description: "List configured Kubernetes contexts.",
      },
      {
        command: "kubectl config current-context",
        description: "Show the currently selected context.",
      },
      {
        command: "kubectl config use-context production",
        description: "Switch to the production context.",
      },
    ],
    flags: [
      {
        flag: "get-contexts",
        meaning: "List available contexts.",
      },
      {
        flag: "current-context",
        meaning: "Show the active context.",
      },
      {
        flag: "use-context",
        meaning: "Switch to another context.",
      },
    ],
    tags: ["kubectl", "kubeconfig", "context", "cluster"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "kubernetes-context",
    tool: "kubernetes",
    category: "configuration",
    name: "kubectl config use-context",
    title: "Switch Kubernetes context",
    slug: "use-context",
    description: "Switch kubectl to a different configured Kubernetes cluster and user context.",
    syntax: [
      "kubectl config use-context <context>",
    ],
    examples: [
      {
        command: "kubectl config use-context staging",
        description: "Switch kubectl to the staging context.",
      },
    ],
    flags: [],
    tags: ["kubectl", "context", "cluster"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "kubernetes-namespace",
    tool: "kubernetes",
    category: "namespaces",
    name: "kubectl get namespaces",
    title: "List namespaces",
    slug: "get-namespaces",
    description: "List namespaces available in the current Kubernetes cluster.",
    syntax: [
      "kubectl get namespaces",
      "kubectl get ns",
    ],
    examples: [
      {
        command: "kubectl get namespaces",
        description: "List all namespaces.",
      },
    ],
    flags: [],
    tags: ["kubectl", "namespace", "inspection"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "kubernetes-top",
    tool: "kubernetes",
    category: "monitoring",
    name: "kubectl top",
    title: "View resource usage",
    slug: "top",
    description: "Display CPU and memory usage for nodes or pods when Metrics Server is available.",
    syntax: [
      "kubectl top nodes",
      "kubectl top pods",
      "kubectl top pod <name>",
    ],
    examples: [
      {
        command: "kubectl top nodes",
        description: "Show CPU and memory usage for cluster nodes.",
      },
      {
        command: "kubectl top pods",
        description: "Show CPU and memory usage for pods.",
      },
    ],
    flags: [
      {
        flag: "-n, --namespace",
        meaning: "Specify the namespace.",
      },
      {
        flag: "--containers",
        meaning: "Display usage for individual containers.",
      },
    ],
    tags: ["kubectl", "metrics", "cpu", "memory", "monitoring"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "kubernetes-api-resources",
    tool: "kubernetes",
    category: "inspection",
    name: "kubectl api-resources",
    title: "List available API resources",
    slug: "api-resources",
    description: "Display the Kubernetes API resources supported by the current cluster.",
    syntax: [
      "kubectl api-resources",
    ],
    examples: [
      {
        command: "kubectl api-resources",
        description: "List resource types available through the Kubernetes API.",
      },
    ],
    flags: [
      {
        flag: "--namespaced",
        meaning: "Filter resources by whether they are namespace-scoped.",
      },
      {
        flag: "--api-group",
        meaning: "Filter resources by API group.",
      },
    ],
    tags: ["kubectl", "api", "resources"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "kubernetes-version",
    tool: "kubernetes",
    category: "cluster",
    name: "kubectl version",
    title: "Display Kubernetes client and server versions",
    slug: "version",
    description: "Show version information for the kubectl client and Kubernetes server.",
    syntax: [
      "kubectl version",
      "kubectl version --short",
    ],
    examples: [
      {
        command: "kubectl version",
        description: "Display client and server version information.",
      },
    ],
    flags: [
      {
        flag: "--short",
        meaning: "Display a shorter version output when supported.",
      },
    ],
    tags: ["kubectl", "version", "cluster"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "kubernetes-cluster-info",
    tool: "kubernetes",
    category: "cluster",
    name: "kubectl cluster-info",
    title: "Display cluster information",
    slug: "cluster-info",
    description: "Display the addresses of the Kubernetes control plane and cluster services.",
    syntax: [
      "kubectl cluster-info",
      "kubectl cluster-info dump",
    ],
    examples: [
      {
        command: "kubectl cluster-info",
        description: "Show the Kubernetes control plane and service endpoints.",
      },
    ],
    flags: [],
    tags: ["kubectl", "cluster", "control-plane"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "kubernetes-port-forward",
    tool: "kubernetes",
    category: "networking",
    name: "kubectl port-forward",
    title: "Forward local ports to a pod",
    slug: "port-forward",
    description: "Forward a local port to a port on a pod or another supported Kubernetes resource.",
    syntax: [
      "kubectl port-forward pod/<name> <local-port>:<remote-port>",
      "kubectl port-forward service/<name> <local-port>:<remote-port>",
    ],
    examples: [
      {
        command: "kubectl port-forward pod/nginx 8080:80",
        description: "Forward local port 8080 to port 80 on the nginx pod.",
      },
      {
        command: "kubectl port-forward service/api 8080:80",
        description: "Access the API service through local port 8080.",
      },
    ],
    flags: [
      {
        flag: "--address",
        meaning: "Specify the local addresses to listen on.",
      },
    ],
    tags: ["kubectl", "networking", "debugging", "port-forward"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "kubernetes-label",
    tool: "kubernetes",
    category: "resources",
    name: "kubectl label",
    title: "Add or update resource labels",
    slug: "label",
    description: "Add, update, or remove labels on Kubernetes resources.",
    syntax: [
      "kubectl label <resource> <name> <key>=<value>",
      "kubectl label <resource> <name> <key>-",
    ],
    examples: [
      {
        command: "kubectl label pod nginx environment=dev",
        description: "Add an environment label to the nginx pod.",
      },
    ],
    flags: [
      {
        flag: "--overwrite",
        meaning: "Allow an existing label value to be replaced.",
      },
    ],
    tags: ["kubectl", "labels", "resources"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "kubernetes-annotate",
    tool: "kubernetes",
    category: "resources",
    name: "kubectl annotate",
    title: "Add or update resource annotations",
    slug: "annotate",
    description: "Add, update, or remove annotations on Kubernetes resources.",
    syntax: [
      "kubectl annotate <resource> <name> <key>=<value>",
      "kubectl annotate <resource> <name> <key>-",
    ],
    examples: [
      {
        command: "kubectl annotate deployment nginx description=\"web server\"",
        description: "Add an annotation to the nginx deployment.",
      },
    ],
    flags: [
      {
        flag: "--overwrite",
        meaning: "Allow an existing annotation value to be replaced.",
      },
    ],
    tags: ["kubectl", "annotations", "resources"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "kubernetes-cordon",
    tool: "kubernetes",
    category: "nodes",
    name: "kubectl cordon",
    title: "Mark a node unschedulable",
    slug: "cordon",
    description: "Mark a Kubernetes node as unschedulable so new pods are not placed on it.",
    syntax: [
      "kubectl cordon <node>",
    ],
    examples: [
      {
        command: "kubectl cordon worker-1",
        description: "Prevent new pods from being scheduled on worker-1.",
      },
    ],
    flags: [],
    tags: ["kubectl", "nodes", "scheduling", "maintenance"],
    difficulty: "intermediate",
    common: true,
    dangerous: true,
  },

  {
    id: "kubernetes-uncordon",
    tool: "kubernetes",
    category: "nodes",
    name: "kubectl uncordon",
    title: "Mark a node schedulable",
    slug: "uncordon",
    description: "Allow new pods to be scheduled on a previously cordoned node.",
    syntax: [
      "kubectl uncordon <node>",
    ],
    examples: [
      {
        command: "kubectl uncordon worker-1",
        description: "Allow pods to be scheduled on worker-1 again.",
      },
    ],
    flags: [],
    tags: ["kubectl", "nodes", "scheduling", "maintenance"],
    difficulty: "intermediate",
    common: true,
    dangerous: true,
  },

  {
    id: "kubernetes-drain",
    tool: "kubernetes",
    category: "nodes",
    name: "kubectl drain",
    title: "Safely evict pods from a node",
    slug: "drain",
    description: "Evict workloads from a node so it can be taken out of service for maintenance.",
    syntax: [
      "kubectl drain <node>",
      "kubectl drain <node> --ignore-daemonsets",
    ],
    examples: [
      {
        command: "kubectl drain worker-1 --ignore-daemonsets",
        description: "Drain worker-1 while ignoring DaemonSet-managed pods.",
      },
    ],
    flags: [
      {
        flag: "--ignore-daemonsets",
        meaning: "Ignore DaemonSet-managed pods during the drain.",
      },
      {
        flag: "--delete-emptydir-data",
        meaning: "Allow deletion of pods using emptyDir data.",
      },
      {
        flag: "--force",
        meaning: "Force eviction of pods that are not managed by a controller.",
      },
    ],
    tags: ["kubectl", "nodes", "maintenance", "eviction"],
    difficulty: "advanced",
    common: true,
    dangerous: true,
  },

  {
    id: "kubernetes-edit",
    tool: "kubernetes",
    category: "resources",
    name: "kubectl edit",
    title: "Edit a live Kubernetes resource",
    slug: "edit",
    description: "Open a Kubernetes resource in an editor and apply changes directly to the live cluster.",
    syntax: [
      "kubectl edit <resource> <name>",
    ],
    examples: [
      {
        command: "kubectl edit deployment nginx",
        description: "Edit the live nginx deployment configuration.",
      },
    ],
    flags: [
      {
        flag: "-n, --namespace",
        meaning: "Specify the namespace.",
      },
    ],
    tags: ["kubectl", "edit", "resources"],
    difficulty: "intermediate",
    common: true,
    dangerous: true,
  },

  {
    id: "kubernetes-explain",
    tool: "kubernetes",
    category: "documentation",
    name: "kubectl explain",
    title: "View Kubernetes resource documentation",
    slug: "explain",
    description: "Display documentation for Kubernetes resources and their fields.",
    syntax: [
      "kubectl explain <resource>",
      "kubectl explain <resource>.<field>",
    ],
    examples: [
      {
        command: "kubectl explain deployment",
        description: "Show documentation for Deployment resources.",
      },
      {
        command: "kubectl explain deployment.spec.template",
        description: "Show documentation for a specific Deployment field.",
      },
    ],
    flags: [
      {
        flag: "--recursive",
        meaning: "Display documentation recursively for nested fields.",
      },
    ],
    tags: ["kubectl", "documentation", "resources"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },
  {
  id: "kubectl-get-contexts",
  tool: "kubernetes",
  category: "configuration",
  name: "kubectl config get-contexts",
  title: "List Kubernetes contexts",
  slug: "config-get-contexts",
  description:
    "Lists the Kubernetes contexts configured in the local kubeconfig file.",
  syntax: ["kubectl config get-contexts"],
  examples: [
    {
      command: "kubectl config get-contexts",
      description:
        "Lists available Kubernetes contexts and shows the current context.",
    },
  ],
  flags: [],
  tags: ["config", "context", "kubeconfig"],
  difficulty: "beginner",
  common: true,
  dangerous: false,
    },
    
    {
      id: "kubectl-current-context",
      tool: "kubernetes",
      category: "configuration",
      name: "kubectl config current-context",
      title: "Show the current context",
      slug: "config-current-context",
      description:
        "Displays the Kubernetes context currently selected by kubectl.",
      syntax: ["kubectl config current-context"],
      examples: [
        {
          command: "kubectl config current-context",
          description:
            "Shows which Kubernetes cluster kubectl is currently configured to use.",
        },
      ],
      flags: [],
      tags: ["config", "context", "cluster"],
      difficulty: "beginner",
      common: true,
      dangerous: false,
    },
    
    {
      id: "kubectl-set-context",
      tool: "kubernetes",
      category: "configuration",
      name: "kubectl config set-context",
      title: "Configure a Kubernetes context",
      slug: "config-set-context",
      description:
        "Creates or modifies a Kubernetes context in the kubeconfig file.",
      syntax: [
        "kubectl config set-context <context> --cluster=<cluster> --user=<user>",
      ],
      examples: [
        {
          command:
            "kubectl config set-context dev --cluster=dev-cluster --user=dev-user",
          description:
            "Creates or updates a context using the specified cluster and user.",
        },
      ],
      flags: [],
      tags: ["config", "context", "kubeconfig"],
      difficulty: "intermediate",
      common: true,
      dangerous: false,
    },
    
    {
      id: "kubectl-set-credentials",
      tool: "kubernetes",
      category: "configuration",
      name: "kubectl config set-credentials",
      title: "Configure Kubernetes credentials",
      slug: "config-set-credentials",
      description:
        "Creates or updates user credentials in the kubeconfig file.",
      syntax: ["kubectl config set-credentials <user>"],
      examples: [
        {
          command: "kubectl config set-credentials dev-user",
          description:
            "Creates or modifies a user entry in the kubeconfig.",
        },
      ],
      flags: [],
      tags: ["config", "credentials", "kubeconfig"],
      difficulty: "intermediate",
      common: false,
      dangerous: false,
    },
    
    {
      id: "kubectl-set-cluster",
      tool: "kubernetes",
      category: "configuration",
      name: "kubectl config set-cluster",
      title: "Configure a Kubernetes cluster",
      slug: "config-set-cluster",
      description:
        "Creates or modifies a cluster entry in the kubeconfig file.",
      syntax: ["kubectl config set-cluster <cluster> --server=<server>"],
      examples: [
        {
          command:
            "kubectl config set-cluster dev --server=https://kubernetes.example.com",
          description:
            "Creates or updates a cluster entry with the specified API server.",
        },
      ],
      flags: [],
      tags: ["config", "cluster", "kubeconfig"],
      difficulty: "intermediate",
      common: false,
      dangerous: false,
    },
    
    {
      id: "kubectl-rollout-status",
      tool: "kubernetes",
      category: "deployments",
      name: "kubectl rollout status",
      title: "Watch rollout progress",
      slug: "rollout-status",
      description:
        "Displays the rollout status of a deployment or other supported workload.",
      syntax: ["kubectl rollout status deployment/<name>"],
      examples: [
        {
          command: "kubectl rollout status deployment/web",
          description:
            "Waits for the web deployment rollout to complete.",
        },
      ],
      flags: [],
      tags: ["deployment", "rollout", "status"],
      difficulty: "beginner",
      common: true,
      dangerous: false,
    },
    
    {
      id: "kubectl-rollout-history",
      tool: "kubernetes",
      category: "deployments",
      name: "kubectl rollout history",
      title: "View rollout history",
      slug: "rollout-history",
      description:
        "Displays revision history for a deployment or another supported resource.",
      syntax: ["kubectl rollout history deployment/<name>"],
      examples: [
        {
          command: "kubectl rollout history deployment/web",
          description:
            "Displays the available rollout revisions for the web deployment.",
        },
      ],
      flags: [],
      tags: ["deployment", "rollout", "history"],
      difficulty: "beginner",
      common: true,
      dangerous: false,
    },
    
    {
      id: "kubectl-rollout-undo",
      tool: "kubernetes",
      category: "deployments",
      name: "kubectl rollout undo",
      title: "Rollback a deployment",
      slug: "rollout-undo",
      description:
        "Rolls a deployment back to a previous revision.",
      syntax: ["kubectl rollout undo deployment/<name>"],
      examples: [
        {
          command: "kubectl rollout undo deployment/web",
          description:
            "Rolls the web deployment back to its previous revision.",
        },
      ],
      flags: [],
      tags: ["deployment", "rollout", "rollback"],
      difficulty: "intermediate",
      common: true,
      dangerous: true,
    },
    
    {
      id: "kubectl-rollout-pause",
      tool: "kubernetes",
      category: "deployments",
      name: "kubectl rollout pause",
      title: "Pause a rollout",
      slug: "rollout-pause",
      description:
        "Pauses a deployment rollout so further changes can be grouped before resuming.",
      syntax: ["kubectl rollout pause deployment/<name>"],
      examples: [
        {
          command: "kubectl rollout pause deployment/web",
          description:
            "Pauses the web deployment rollout.",
        },
      ],
      flags: [],
      tags: ["deployment", "rollout", "pause"],
      difficulty: "intermediate",
      common: false,
      dangerous: false,
    },
    
    {
      id: "kubectl-rollout-resume",
      tool: "kubernetes",
      category: "deployments",
      name: "kubectl rollout resume",
      title: "Resume a rollout",
      slug: "rollout-resume",
      description:
        "Resumes a previously paused deployment rollout.",
      syntax: ["kubectl rollout resume deployment/<name>"],
      examples: [
        {
          command: "kubectl rollout resume deployment/web",
          description:
            "Resumes the paused web deployment rollout.",
        },
      ],
      flags: [],
      tags: ["deployment", "rollout", "resume"],
      difficulty: "intermediate",
      common: false,
      dangerous: false,
    },
    
    {
      id: "kubectl-patch",
      tool: "kubernetes",
      category: "workloads",
      name: "kubectl patch",
      title: "Update a resource with a patch",
      slug: "patch",
      description:
        "Updates fields of an existing Kubernetes resource using a patch.",
      syntax: [
        "kubectl patch deployment <name> -p '<patch>'",
      ],
      examples: [
        {
          command:
            "kubectl patch deployment web -p '{\"spec\":{\"replicas\":3}}'",
          description:
            "Patches the web deployment to use three replicas.",
        },
      ],
      flags: [],
      tags: ["patch", "update", "resources"],
      difficulty: "advanced",
      common: true,
      dangerous: true,
    },
    
    {
      id: "kubectl-replace",
      tool: "kubernetes",
      category: "resources",
      name: "kubectl replace",
      title: "Replace a Kubernetes resource",
      slug: "replace",
      description:
        "Replaces an existing resource with the configuration provided in a file or standard input.",
      syntax: ["kubectl replace -f <file.yaml>"],
      examples: [
        {
          command: "kubectl replace -f deployment.yaml",
          description:
            "Replaces the existing resource using the supplied manifest.",
        },
      ],
      flags: [],
      tags: ["resources", "manifest", "update"],
      difficulty: "intermediate",
      common: false,
      dangerous: true,
    },
    
    {
      id: "kubectl-wait",
      tool: "kubernetes",
      category: "debugging",
      name: "kubectl wait",
      title: "Wait for a resource condition",
      slug: "wait",
      description:
        "Waits until a specified condition is satisfied on one or more Kubernetes resources.",
      syntax: ["kubectl wait --for=condition=<condition> <resource>/<name>"],
      examples: [
        {
          command: "kubectl wait --for=condition=available deployment/web",
          description:
            "Waits until the web deployment becomes available.",
        },
      ],
      flags: [],
      tags: ["wait", "debugging", "conditions"],
      difficulty: "intermediate",
      common: true,
      dangerous: false,
    },
    
    {
      id: "kubectl-auth-can-i",
      tool: "kubernetes",
      category: "rbac",
      name: "kubectl auth can-i",
      title: "Check authorization",
      slug: "auth-can-i",
      description:
        "Checks whether the current user or a specified identity is authorized to perform an action.",
      syntax: ["kubectl auth can-i <verb> <resource>"],
      examples: [
        {
          command: "kubectl auth can-i get pods",
          description:
            "Checks whether the current identity can list or get pods.",
        },
        {
          command: "kubectl auth can-i create deployments",
          description:
            "Checks whether the current identity can create deployments.",
        },
      ],
      flags: [],
      tags: ["rbac", "authorization", "security"],
      difficulty: "beginner",
      common: true,
      dangerous: false,
    },
    
    {
      id: "kubectl-auth-whoami",
      tool: "kubernetes",
      category: "rbac",
      name: "kubectl auth whoami",
      title: "Show the current Kubernetes identity",
      slug: "auth-whoami",
      description:
        "Displays information about the identity used for authentication.",
      syntax: ["kubectl auth whoami"],
      examples: [
        {
          command: "kubectl auth whoami",
          description:
            "Shows the identity associated with the current kubectl credentials.",
        },
      ],
      flags: [],
      tags: ["rbac", "identity", "security"],
      difficulty: "beginner",
      common: true,
      dangerous: false,
    },
    
    {
      id: "kubectl-cp",
      tool: "kubernetes",
      category: "debugging",
      name: "kubectl cp",
      title: "Copy files to or from a pod",
      slug: "cp",
      description:
        "Copies files and directories between a local filesystem and a container in a pod.",
      syntax: [
        "kubectl cp <namespace>/<pod>:<path> <local-path>",
        "kubectl cp <local-path> <namespace>/<pod>:<path>",
      ],
      examples: [
        {
          command: "kubectl cp default/web:/app/logs/app.log ./app.log",
          description:
            "Copies a log file from a pod to the local machine.",
        },
      ],
      flags: [],
      tags: ["pods", "files", "debugging"],
      difficulty: "beginner",
      common: true,
      dangerous: false,
    },
    
    {
      id: "kubectl-attach",
      tool: "kubernetes",
      category: "debugging",
      name: "kubectl attach",
      title: "Attach to a running container",
      slug: "attach",
      description:
        "Attaches the terminal to a running container in a pod.",
      syntax: ["kubectl attach <pod> -c <container>"],
      examples: [
        {
          command: "kubectl attach web -c nginx",
          description:
            "Attaches the terminal to the nginx container in the web pod.",
        },
      ],
      flags: [],
      tags: ["pods", "containers", "debugging"],
      difficulty: "intermediate",
      common: false,
      dangerous: false,
    },
    
    {
      id: "kubectl-run",
      tool: "kubernetes",
      category: "workloads",
      name: "kubectl run",
      title: "Create a pod from the command line",
      slug: "run",
      description:
        "Creates and runs a pod from a container image.",
      syntax: ["kubectl run <name> --image=<image>"],
      examples: [
        {
          command: "kubectl run nginx --image=nginx",
          description:
            "Creates a pod named nginx using the nginx image.",
        },
      ],
      flags: [],
      tags: ["pods", "create", "workloads"],
      difficulty: "beginner",
      common: true,
      dangerous: false,
    },
    
    {
      id: "kubectl-expose",
      tool: "kubernetes",
      category: "networking",
      name: "kubectl expose",
      title: "Expose a workload as a Service",
      slug: "expose",
      description:
        "Creates a Service that exposes a workload such as a deployment, replica set, or pod.",
      syntax: [
        "kubectl expose deployment <name> --port=<port> --target-port=<port>",
      ],
      examples: [
        {
          command:
            "kubectl expose deployment web --port=80 --target-port=8080",
          description:
            "Creates a Service exposing port 80 and forwarding traffic to port 8080.",
        },
      ],
      flags: [],
      tags: ["service", "networking", "deployment"],
      difficulty: "beginner",
      common: true,
      dangerous: false,
    },
    
    {
      id: "kubectl-autoscale",
      tool: "kubernetes",
      category: "workloads",
      name: "kubectl autoscale",
      title: "Configure horizontal pod autoscaling",
      slug: "autoscale",
      description:
        "Creates a HorizontalPodAutoscaler for a supported workload.",
      syntax: [
        "kubectl autoscale deployment <name> --min=<min> --max=<max> --cpu-percent=<percent>",
      ],
      examples: [
        {
          command:
            "kubectl autoscale deployment web --min=2 --max=10 --cpu-percent=70",
          description:
            "Creates an autoscaler that maintains between two and ten replicas based on CPU usage.",
        },
      ],
      flags: [],
      tags: ["autoscaling", "hpa", "deployment"],
      difficulty: "intermediate",
      common: true,
      dangerous: false,
    },
    
    {
      id: "kubectl-create-configmap",
      tool: "kubernetes",
      category: "configuration",
      name: "kubectl create configmap",
      title: "Create a ConfigMap",
      slug: "create-configmap",
      description:
        "Creates a ConfigMap from literals, files, directories, or environment files.",
      syntax: ["kubectl create configmap <name> --from-literal=<key>=<value>"],
      examples: [
        {
          command:
            "kubectl create configmap app-config --from-literal=APP_ENV=production",
          description:
            "Creates a ConfigMap containing an application environment value.",
        },
      ],
      flags: [],
      tags: ["configmap", "configuration", "config"],
      difficulty: "beginner",
      common: true,
      dangerous: false,
    },
    
    {
      id: "kubectl-create-secret",
      tool: "kubernetes",
      category: "configuration",
      name: "kubectl create secret",
      title: "Create a Secret",
      slug: "create-secret",
      description:
        "Creates a Kubernetes Secret from literals, files, environment files, or other supported sources.",
      syntax: [
        "kubectl create secret generic <name> --from-literal=<key>=<value>",
      ],
      examples: [
        {
          command:
            "kubectl create secret generic db-secret --from-literal=password=example",
          description:
            "Creates a generic Secret containing a key-value pair.",
        },
      ],
      flags: [],
      tags: ["secret", "security", "configuration"],
      difficulty: "beginner",
      common: true,
      dangerous: true,
    },
    
    {
      id: "kubectl-create-namespace",
      tool: "kubernetes",
      category: "namespaces",
      name: "kubectl create namespace",
      title: "Create a namespace",
      slug: "create-namespace",
      description:
        "Creates a new Kubernetes namespace.",
      syntax: ["kubectl create namespace <name>"],
      examples: [
        {
          command: "kubectl create namespace development",
          description:
            "Creates a namespace named development.",
        },
      ],
      flags: [],
      tags: ["namespace", "resources"],
      difficulty: "beginner",
      common: true,
      dangerous: false,
    },
    
    {
      id: "kubectl-delete-namespace",
      tool: "kubernetes",
      category: "namespaces",
      name: "kubectl delete namespace",
      title: "Delete a namespace",
      slug: "delete-namespace",
      description:
        "Deletes a Kubernetes namespace and the resources contained within it.",
      syntax: ["kubectl delete namespace <name>"],
      examples: [
        {
          command: "kubectl delete namespace development",
          description:
            "Deletes the development namespace and its resources.",
        },
      ],
      flags: [],
      tags: ["namespace", "delete", "resources"],
      difficulty: "beginner",
      common: true,
      dangerous: true,
    },
    
    {
      id: "kubectl-set-resources",
      tool: "kubernetes",
      category: "resources",
      name: "kubectl set resources",
      title: "Set resource requests and limits",
      slug: "set-resources",
      description:
        "Updates CPU and memory resource requests and limits on a workload.",
      syntax: [
        "kubectl set resources deployment/<name> --requests=cpu=<cpu>,memory=<memory> --limits=cpu=<cpu>,memory=<memory>",
      ],
      examples: [
        {
          command:
            "kubectl set resources deployment/web --requests=cpu=100m,memory=128Mi --limits=cpu=500m,memory=512Mi",
          description:
            "Sets CPU and memory requests and limits for the web deployment.",
        },
      ],
      flags: [],
      tags: ["resources", "cpu", "memory", "deployment"],
      difficulty: "intermediate",
      common: true,
      dangerous: false,
    },
    
    {
      id: "kubectl-set-env",
      tool: "kubernetes",
      category: "configuration",
      name: "kubectl set env",
      title: "Set environment variables",
      slug: "set-env",
      description:
        "Updates environment variables on a Kubernetes workload.",
      syntax: [
        "kubectl set env deployment/<name> KEY=value",
      ],
      examples: [
        {
          command: "kubectl set env deployment/web APP_ENV=production",
          description:
            "Sets APP_ENV to production on the web deployment.",
        },
      ],
      flags: [],
      tags: ["environment", "configuration", "deployment"],
      difficulty: "beginner",
      common: true,
      dangerous: false,
    },
    
    {
      id: "kubectl-delete-pods",
      tool: "kubernetes",
      category: "workloads",
      name: "kubectl delete pods",
      title: "Delete pods",
      slug: "delete-pods",
      description:
        "Deletes one or more Kubernetes pods.",
      syntax: ["kubectl delete pods <pod>"],
      examples: [
        {
          command: "kubectl delete pod web-7d8f9c6b7d-abcde",
          description:
            "Deletes the specified pod.",
        },
      ],
      flags: [],
      tags: ["pods", "delete", "workloads"],
      difficulty: "beginner",
      common: true,
      dangerous: true,
    },
    
    {
      id: "kubectl-diff",
      tool: "kubernetes",
      category: "resources",
      name: "kubectl diff",
      title: "Preview manifest changes",
      slug: "diff",
      description:
        "Shows the differences between the current live configuration and the configuration that would be applied.",
      syntax: ["kubectl diff -f <file.yaml>"],
      examples: [
        {
          command: "kubectl diff -f deployment.yaml",
          description:
            "Shows the changes that applying the deployment manifest would make.",
        },
      ],
      flags: [],
      tags: ["diff", "manifest", "apply"],
      difficulty: "intermediate",
      common: true,
      dangerous: false,
    },
    
    {
      id: "kubectl-view-last-applied",
      tool: "kubernetes",
      category: "resources",
      name: "kubectl apply view-last-applied",
      title: "View last applied configuration",
      slug: "apply-view-last-applied",
      description:
        "Displays the last-applied configuration stored for a resource.",
      syntax: ["kubectl apply view-last-applied deployment/<name>"],
      examples: [
        {
          command: "kubectl apply view-last-applied deployment/web",
          description:
            "Displays the configuration last applied to the web deployment.",
        },
      ],
      flags: [],
      tags: ["apply", "configuration", "deployment"],
      difficulty: "intermediate",
      common: false,
      dangerous: false,
    },
    
    {
      id: "kubectl-proxy",
      tool: "kubernetes",
      category: "networking",
      name: "kubectl proxy",
      title: "Run a local Kubernetes API proxy",
      slug: "proxy",
      description:
        "Runs a local proxy to the Kubernetes API server.",
      syntax: ["kubectl proxy"],
      examples: [
        {
          command: "kubectl proxy",
          description:
            "Starts a local proxy that can be used to access the Kubernetes API.",
        },
      ],
      flags: [],
      tags: ["networking", "api", "proxy"],
      difficulty: "intermediate",
      common: false,
      dangerous: false,
    },
    
    {
      id: "kubectl-debug",
      tool: "kubernetes",
      category: "debugging",
      name: "kubectl debug",
      title: "Create a debugging container",
      slug: "debug",
      description:
        "Creates a debugging session for a pod or node using an ephemeral or temporary container.",
      syntax: ["kubectl debug <pod> -it --image=<image>"],
      examples: [
        {
          command: "kubectl debug web -it --image=busybox",
          description:
            "Starts an interactive debugging session using a temporary container.",
        },
      ],
      flags: [],
      tags: ["debugging", "pods", "troubleshooting"],
      difficulty: "advanced",
      common: true,
      dangerous: false,
    },
    
    {
      id: "kubectl-top-pods",
      tool: "kubernetes",
      category: "monitoring",
      name: "kubectl top pods",
      title: "View pod resource usage",
      slug: "top-pods",
      description:
        "Displays CPU and memory usage for pods when the Metrics API is available.",
      syntax: ["kubectl top pods"],
      examples: [
        {
          command: "kubectl top pods",
          description:
            "Displays CPU and memory usage for pods in the current namespace.",
        },
      ],
      flags: [],
      tags: ["monitoring", "pods", "cpu", "memory"],
      difficulty: "beginner",
      common: true,
      dangerous: false,
    },
    
    {
      id: "kubectl-top-nodes",
      tool: "kubernetes",
      category: "monitoring",
      name: "kubectl top nodes",
      title: "View node resource usage",
      slug: "top-nodes",
      description:
        "Displays CPU and memory usage for Kubernetes nodes when the Metrics API is available.",
      syntax: ["kubectl top nodes"],
      examples: [
        {
          command: "kubectl top nodes",
          description:
            "Displays CPU and memory usage across cluster nodes.",
        },
      ],
      flags: [],
      tags: ["monitoring", "nodes", "cpu", "memory"],
      difficulty: "beginner",
      common: true,
      dangerous: false,
    },
];

export default kubernetesCommands;