export interface TerraformCommand {
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

const terraformCommands: TerraformCommand[] = [
  {
    id: "terraform-init",
    tool: "terraform",
    category: "workflow",
    name: "terraform init",
    title: "Initialize Terraform",
    slug: "init",
    description:
      "Initialize a Terraform working directory, download providers and modules, and configure the backend.",
    syntax: ["terraform init", "terraform init -upgrade"],
    examples: [
      {
        command: "terraform init",
        description: "Initialize the current Terraform configuration.",
      },
      {
        command: "terraform init -upgrade",
        description: "Initialize and upgrade providers and modules to allowed newer versions.",
      },
    ],
    flags: [
      { flag: "-upgrade", meaning: "Upgrade providers and modules to newer allowed versions." },
      { flag: "-reconfigure", meaning: "Reconfigure the backend without migrating existing state." },
      { flag: "-migrate-state", meaning: "Attempt to migrate existing state to a newly configured backend." },
    ],
    tags: ["init", "workflow", "provider", "backend", "modules"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-fmt",
    tool: "terraform",
    category: "workflow",
    name: "terraform fmt",
    title: "Format Terraform Configuration",
    slug: "fmt",
    description:
      "Format Terraform configuration files using Terraform's canonical style.",
    syntax: ["terraform fmt", "terraform fmt -recursive", "terraform fmt -check"],
    examples: [
      {
        command: "terraform fmt -recursive",
        description: "Format Terraform files in the current directory and all child directories.",
      },
    ],
    flags: [
      { flag: "-recursive", meaning: "Format files recursively in subdirectories." },
      { flag: "-check", meaning: "Check formatting without changing files." },
      { flag: "-diff", meaning: "Display formatting differences." },
    ],
    tags: ["fmt", "format", "style", "workflow"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-validate",
    tool: "terraform",
    category: "workflow",
    name: "terraform validate",
    title: "Validate Terraform Configuration",
    slug: "validate",
    description:
      "Validate the syntax and internal consistency of Terraform configuration.",
    syntax: ["terraform validate", "terraform validate -json"],
    examples: [
      {
        command: "terraform validate",
        description: "Check whether the Terraform configuration is valid.",
      },
    ],
    flags: [
      { flag: "-json", meaning: "Return validation results in machine-readable JSON." },
    ],
    tags: ["validate", "syntax", "configuration", "workflow"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-plan",
    tool: "terraform",
    category: "workflow",
    name: "terraform plan",
    title: "Preview Infrastructure Changes",
    slug: "plan",
    description:
      "Create an execution plan showing the infrastructure changes Terraform intends to make.",
    syntax: [
      "terraform plan",
      "terraform plan -out=tfplan",
      "terraform plan -var='environment=staging'",
    ],
    examples: [
      {
        command: "terraform plan",
        description: "Preview changes without modifying infrastructure.",
      },
      {
        command: "terraform plan -out=tfplan",
        description: "Save the generated plan to a file for later application.",
      },
    ],
    flags: [
      { flag: "-out=<file>", meaning: "Save the generated execution plan to a file." },
      { flag: "-var", meaning: "Set a Terraform input variable." },
      { flag: "-var-file", meaning: "Load variable values from a file." },
      { flag: "-target", meaning: "Limit planning to a specific resource or module; use sparingly." },
    ],
    tags: ["plan", "workflow", "preview", "changes"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-apply",
    tool: "terraform",
    category: "workflow",
    name: "terraform apply",
    title: "Apply Terraform Changes",
    slug: "apply",
    description:
      "Create or update infrastructure according to the Terraform configuration and execution plan.",
    syntax: [
      "terraform apply",
      "terraform apply tfplan",
      "terraform apply -auto-approve",
    ],
    examples: [
      {
        command: "terraform apply",
        description: "Review the plan and apply approved infrastructure changes.",
      },
      {
        command: "terraform apply tfplan",
        description: "Apply a previously saved execution plan.",
      },
    ],
    flags: [
      { flag: "-auto-approve", meaning: "Apply changes without interactive approval." },
      { flag: "-var", meaning: "Set a Terraform input variable." },
      { flag: "-var-file", meaning: "Load variable values from a file." },
      { flag: "-replace", meaning: "Force replacement of a specific resource." },
    ],
    tags: ["apply", "workflow", "infrastructure", "deployment"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "terraform-destroy",
    tool: "terraform",
    category: "workflow",
    name: "terraform destroy",
    title: "Destroy Managed Infrastructure",
    slug: "destroy",
    description:
      "Destroy infrastructure managed by the current Terraform configuration.",
    syntax: ["terraform destroy", "terraform destroy -auto-approve"],
    examples: [
      {
        command: "terraform destroy",
        description: "Preview and confirm destruction of managed infrastructure.",
      },
    ],
    flags: [
      { flag: "-auto-approve", meaning: "Destroy resources without interactive approval." },
      { flag: "-var", meaning: "Set a Terraform input variable." },
      { flag: "-var-file", meaning: "Load variable values from a file." },
    ],
    tags: ["destroy", "delete", "workflow", "infrastructure"],
    difficulty: "beginner",
    common: true,
    dangerous: true,
  },

  {
    id: "terraform-show",
    tool: "terraform",
    category: "inspection",
    name: "terraform show",
    title: "Show Terraform State or Plan",
    slug: "show",
    description:
      "Display the contents of the current state or a saved Terraform plan.",
    syntax: ["terraform show", "terraform show tfplan", "terraform show -json tfplan"],
    examples: [
      {
        command: "terraform show",
        description: "Display the current Terraform state in human-readable form.",
      },
      {
        command: "terraform show -json tfplan",
        description: "Display a saved plan as JSON.",
      },
    ],
    flags: [
      { flag: "-json", meaning: "Output machine-readable JSON." },
    ],
    tags: ["show", "inspect", "plan", "state", "json"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-output",
    tool: "terraform",
    category: "configuration",
    name: "terraform output",
    title: "Read Terraform Outputs",
    slug: "output",
    description:
      "Display output values declared by the Terraform configuration.",
    syntax: [
      "terraform output",
      "terraform output public_ip",
      "terraform output -raw public_ip",
      "terraform output -json",
    ],
    examples: [
      {
        command: "terraform output public_ip",
        description: "Display the value of the public_ip output.",
      },
      {
        command: "terraform output -raw public_ip",
        description: "Return a string output without Terraform's JSON-style formatting.",
      },
    ],
    flags: [
      { flag: "-raw", meaning: "Return a single primitive value in raw form." },
      { flag: "-json", meaning: "Return outputs as JSON." },
    ],
    tags: ["output", "variables", "values", "inspection"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-console",
    tool: "terraform",
    category: "inspection",
    name: "terraform console",
    title: "Terraform Expression Console",
    slug: "console",
    description:
      "Open an interactive console for evaluating Terraform expressions using the current configuration and state.",
    syntax: ["terraform console"],
    examples: [
      {
        command: "terraform console",
        description: "Open the Terraform expression console.",
      },
    ],
    flags: [],
    tags: ["console", "expressions", "debugging", "inspection"],
    difficulty: "intermediate",
    common: false,
    dangerous: false,
  },

  {
    id: "terraform-graph",
    tool: "terraform",
    category: "inspection",
    name: "terraform graph",
    title: "Generate Terraform Dependency Graph",
    slug: "graph",
    description:
      "Generate a Graphviz representation of Terraform's resource dependency graph.",
    syntax: ["terraform graph", "terraform graph | dot -Tpng > graph.png"],
    examples: [
      {
        command: "terraform graph | dot -Tpng > graph.png",
        description: "Generate a PNG visualization of Terraform dependencies using Graphviz.",
      },
    ],
    flags: [],
    tags: ["graph", "dependencies", "graphviz", "inspection"],
    difficulty: "intermediate",
    common: false,
    dangerous: false,
  },

  {
    id: "terraform-get",
    tool: "terraform",
    category: "modules",
    name: "terraform get",
    title: "Download Terraform Modules",
    slug: "get",
    description:
      "Download and update modules referenced by the current configuration.",
    syntax: ["terraform get", "terraform get -update"],
    examples: [
      {
        command: "terraform get",
        description: "Download modules referenced by the configuration.",
      },
    ],
    flags: [
      { flag: "-update", meaning: "Check for and download newer module versions where applicable." },
    ],
    tags: ["get", "modules", "download"],
    difficulty: "beginner",
    common: false,
    dangerous: false,
  },

  {
    id: "terraform-providers",
    tool: "terraform",
    category: "providers",
    name: "terraform providers",
    title: "List Terraform Providers",
    slug: "providers",
    description:
      "Display the providers required by the configuration and their module relationships.",
    syntax: ["terraform providers"],
    examples: [
      {
        command: "terraform providers",
        description: "Show required providers for the current configuration.",
      },
    ],
    flags: [],
    tags: ["providers", "dependencies", "inspection"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-import",
    tool: "terraform",
    category: "state",
    name: "terraform import",
    title: "Import Existing Infrastructure",
    slug: "import",
    description:
      "Import an existing infrastructure object into Terraform state.",
    syntax: ["terraform import <resource_address> <resource_id>"],
    examples: [
      {
        command: "terraform import aws_instance.web i-0123456789abcdef0",
        description: "Import an existing AWS instance into the aws_instance.web resource.",
      },
    ],
    flags: [],
    tags: ["import", "state", "existing", "resource"],
    difficulty: "intermediate",
    common: true,
    dangerous: true,
  },

  {
    id: "terraform-state-list",
    tool: "terraform",
    category: "state",
    name: "terraform state list",
    title: "List Terraform State Resources",
    slug: "state-list",
    description:
      "List all resource addresses currently tracked in Terraform state.",
    syntax: ["terraform state list", "terraform state list 'module.web'"],
    examples: [
      {
        command: "terraform state list",
        description: "List every resource tracked in the current state.",
      },
    ],
    flags: [],
    tags: ["state", "list", "resources", "inspection"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-state-show",
    tool: "terraform",
    category: "state",
    name: "terraform state show",
    title: "Inspect a Terraform State Resource",
    slug: "state-show",
    description:
      "Display detailed state information for a specific resource.",
    syntax: ["terraform state show <resource_address>"],
    examples: [
      {
        command: "terraform state show aws_instance.web",
        description: "Display the stored state attributes of an EC2 instance.",
      },
    ],
    flags: [],
    tags: ["state", "show", "resource", "debugging"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-state-mv",
    tool: "terraform",
    category: "state",
    name: "terraform state mv",
    title: "Move a Terraform State Resource",
    slug: "state-mv",
    description:
      "Move a resource or module instance to a different address in Terraform state.",
    syntax: ["terraform state mv <source> <destination>"],
    examples: [
      {
        command: "terraform state mv aws_instance.web aws_instance.application",
        description: "Rename a resource address in state without recreating the infrastructure.",
      },
    ],
    flags: [],
    tags: ["state", "move", "refactor", "resource"],
    difficulty: "advanced",
    common: false,
    dangerous: true,
  },

  {
    id: "terraform-state-rm",
    tool: "terraform",
    category: "state",
    name: "terraform state rm",
    title: "Remove Resource from Terraform State",
    slug: "state-rm",
    description:
      "Remove a resource from Terraform state without destroying the real infrastructure.",
    syntax: ["terraform state rm <resource_address>"],
    examples: [
      {
        command: "terraform state rm aws_instance.legacy",
        description: "Stop Terraform from managing the resource while leaving it running.",
      },
    ],
    flags: [],
    tags: ["state", "remove", "unmanage", "resource"],
    difficulty: "advanced",
    common: false,
    dangerous: true,
  },

  {
    id: "terraform-state-pull",
    tool: "terraform",
    category: "state",
    name: "terraform state pull",
    title: "Download Terraform State",
    slug: "state-pull",
    description:
      "Download the current state from the configured backend and print it to standard output.",
    syntax: ["terraform state pull > terraform.tfstate"],
    examples: [
      {
        command: "terraform state pull > terraform.tfstate",
        description: "Save the current remote state locally for inspection.",
      },
    ],
    flags: [],
    tags: ["state", "backend", "backup", "inspection"],
    difficulty: "intermediate",
    common: false,
    dangerous: false,
  },

  {
    id: "terraform-state-push",
    tool: "terraform",
    category: "state",
    name: "terraform state push",
    title: "Upload Terraform State",
    slug: "state-push",
    description:
      "Upload a local state file to the configured backend. Use only when you understand the state implications.",
    syntax: ["terraform state push terraform.tfstate"],
    examples: [
      {
        command: "terraform state push terraform.tfstate",
        description: "Push a local state file to the configured backend.",
      },
    ],
    flags: [
      { flag: "-force", meaning: "Override Terraform's normal lineage and serial checks; use with extreme caution." },
    ],
    tags: ["state", "backend", "recovery", "advanced"],
    difficulty: "advanced",
    common: false,
    dangerous: true,
  },

  {
    id: "terraform-force-unlock",
    tool: "terraform",
    category: "state",
    name: "terraform force-unlock",
    title: "Force Unlock Terraform State",
    slug: "force-unlock",
    description:
      "Remove a state lock when Terraform has stopped unexpectedly and the lock is known to be stale.",
    syntax: ["terraform force-unlock <lock-id>"],
    examples: [
      {
        command: "terraform force-unlock 123456789",
        description: "Remove a stale state lock after confirming no other Terraform operation is running.",
      },
    ],
    flags: [
      { flag: "-force", meaning: "Skip interactive confirmation." },
    ],
    tags: ["state", "lock", "unlock", "recovery"],
    difficulty: "advanced",
    common: false,
    dangerous: true,
  },

  {
    id: "terraform-workspace-list",
    tool: "terraform",
    category: "workspaces",
    name: "terraform workspace list",
    title: "List Terraform Workspaces",
    slug: "workspace-list",
    description:
      "List all Terraform workspaces in the current configuration.",
    syntax: ["terraform workspace list"],
    examples: [
      {
        command: "terraform workspace list",
        description: "Display all available Terraform workspaces.",
      },
    ],
    flags: [],
    tags: ["workspace", "environment", "state"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-workspace-new",
    tool: "terraform",
    category: "workspaces",
    name: "terraform workspace new",
    title: "Create Terraform Workspace",
    slug: "workspace-new",
    description:
      "Create a new Terraform workspace and switch to it.",
    syntax: ["terraform workspace new <name>"],
    examples: [
      {
        command: "terraform workspace new staging",
        description: "Create and select a staging workspace.",
      },
    ],
    flags: [],
    tags: ["workspace", "environment", "state"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-workspace-select",
    tool: "terraform",
    category: "workspaces",
    name: "terraform workspace select",
    title: "Select Terraform Workspace",
    slug: "workspace-select",
    description:
      "Switch the current Terraform working directory to another workspace.",
    syntax: ["terraform workspace select <name>"],
    examples: [
      {
        command: "terraform workspace select production",
        description: "Switch to the production workspace.",
      },
    ],
    flags: [],
    tags: ["workspace", "environment", "state"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-workspace-show",
    tool: "terraform",
    category: "workspaces",
    name: "terraform workspace show",
    title: "Show Current Workspace",
    slug: "workspace-show",
    description:
      "Display the name of the currently selected Terraform workspace.",
    syntax: ["terraform workspace show"],
    examples: [
      {
        command: "terraform workspace show",
        description: "Display the active workspace.",
      },
    ],
    flags: [],
    tags: ["workspace", "environment", "inspection"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-workspace-delete",
    tool: "terraform",
    category: "workspaces",
    name: "terraform workspace delete",
    title: "Delete Terraform Workspace",
    slug: "workspace-delete",
    description:
      "Delete an existing Terraform workspace.",
    syntax: ["terraform workspace delete <name>"],
    examples: [
      {
        command: "terraform workspace delete feature-test",
        description: "Delete the feature-test workspace.",
      },
    ],
    flags: [
      { flag: "-force", meaning: "Delete a workspace even when it has managed resources." },
    ],
    tags: ["workspace", "delete", "state"],
    difficulty: "intermediate",
    common: false,
    dangerous: true,
  },

  {
    id: "terraform-variable",
    tool: "terraform",
    category: "variables",
    name: "variable",
    title: "Define Terraform Input Variable",
    slug: "variable",
    description:
      "Declare an input variable that allows configuration values to be supplied externally.",
    syntax: [
      'variable "region" { type = string }',
      'variable "environment" { type = string default = "dev" }',
    ],
    examples: [
      {
        command: 'variable "environment" {\n  type    = string\n  default = "dev"\n}',
        description: "Define an environment variable with a default value.",
      },
    ],
    flags: [],
    tags: ["variable", "input", "configuration"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-var-cli",
    tool: "terraform",
    category: "variables",
    name: "-var",
    title: "Set Terraform Variable from CLI",
    slug: "var-cli",
    description:
      "Pass an input variable value directly to Terraform from the command line.",
    syntax: ["terraform plan -var='environment=staging'"],
    examples: [
      {
        command: "terraform plan -var='environment=staging'",
        description: "Set the environment variable to staging for the plan.",
      },
    ],
    flags: [
      { flag: "-var", meaning: "Set a variable using key=value syntax." },
    ],
    tags: ["variable", "cli", "plan", "apply"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-var-file",
    tool: "terraform",
    category: "variables",
    name: "-var-file",
    title: "Load Terraform Variable File",
    slug: "var-file",
    description:
      "Load input variable values from a .tfvars or .tfvars.json file.",
    syntax: ["terraform plan -var-file=staging.tfvars"],
    examples: [
      {
        command: "terraform plan -var-file=staging.tfvars",
        description: "Run a plan using values from staging.tfvars.",
      },
    ],
    flags: [
      { flag: "-var-file", meaning: "Specify a file containing variable values." },
    ],
    tags: ["variables", "tfvars", "configuration", "environment"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-tfvars",
    tool: "terraform",
    category: "variables",
    name: "terraform.tfvars",
    title: "Terraform Variable Values File",
    slug: "tfvars",
    description:
      "Use a .tfvars file to provide values for Terraform input variables.",
    syntax: [
      'environment = "staging"',
      'instance_count = 3',
    ],
    examples: [
      {
        command: 'environment = "staging"\ninstance_count = 3',
        description: "Provide environment-specific variable values.",
      },
    ],
    flags: [],
    tags: ["tfvars", "variables", "configuration"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-output-block",
    tool: "terraform",
    category: "configuration",
    name: "output",
    title: "Define Terraform Output",
    slug: "output-block",
    description:
      "Declare a value that Terraform exposes after applying the configuration.",
    syntax: ['output "instance_ip" {\n  value = aws_instance.web.public_ip\n}'],
    examples: [
      {
        command: 'output "instance_ip" {\n  value = aws_instance.web.public_ip\n}',
        description: "Expose an EC2 instance public IP as a Terraform output.",
      },
    ],
    flags: [],
    tags: ["output", "configuration", "resource"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-local",
    tool: "terraform",
    category: "configuration",
    name: "locals",
    title: "Define Terraform Local Values",
    slug: "locals",
    description:
      "Define reusable local expressions within a Terraform module.",
    syntax: ["locals {\n  common_tags = {\n    Environment = var.environment\n  }\n}"],
    examples: [
      {
        command: 'locals {\n  name_prefix = "app-${var.environment}"\n}',
        description: "Create a reusable name prefix from an input variable.",
      },
    ],
    flags: [],
    tags: ["locals", "expressions", "configuration"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-resource",
    tool: "terraform",
    category: "resources",
    name: "resource",
    title: "Define Terraform Resource",
    slug: "resource",
    description:
      "Declare infrastructure that Terraform should create and manage.",
    syntax: ['resource "aws_instance" "web" {\n  ami           = var.ami\n  instance_type = "t3.micro"\n}'],
    examples: [
      {
        command: 'resource "aws_instance" "web" {\n  ami           = var.ami\n  instance_type = "t3.micro"\n}',
        description: "Define an AWS EC2 instance resource.",
      },
    ],
    flags: [],
    tags: ["resource", "infrastructure", "configuration"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-data",
    tool: "terraform",
    category: "data-sources",
    name: "data",
    title: "Define Terraform Data Source",
    slug: "data",
    description:
      "Read information from an external system or existing infrastructure without managing the object itself.",
    syntax: ['data "aws_ami" "ubuntu" {\n  most_recent = true\n}'],
    examples: [
      {
        command: 'data "aws_caller_identity" "current" {}',
        description: "Read the AWS account identity of the current credentials.",
      },
    ],
    flags: [],
    tags: ["data", "data-source", "existing", "read"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-count",
    tool: "terraform",
    category: "meta-arguments",
    name: "count",
    title: "Create Multiple Terraform Instances with count",
    slug: "count",
    description:
      "Use the count meta-argument to create multiple instances of a resource or module.",
    syntax: ['resource "aws_instance" "web" {\n  count = 3\n}'],
    examples: [
      {
        command: 'resource "aws_instance" "web" {\n  count = var.instance_count\n}',
        description: "Create a configurable number of instances.",
      },
    ],
    flags: [],
    tags: ["count", "meta-argument", "loop", "resource"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-for-each",
    tool: "terraform",
    category: "meta-arguments",
    name: "for_each",
    title: "Create Multiple Terraform Instances with for_each",
    slug: "for-each",
    description:
      "Use the for_each meta-argument to create one resource instance for each item in a collection.",
    syntax: ['resource "aws_instance" "web" {\n  for_each = var.instances\n}'],
    examples: [
      {
        command: 'resource "aws_s3_bucket" "app" {\n  for_each = toset(var.bucket_names)\n  bucket   = each.value\n}',
        description: "Create one S3 bucket for each name in a set.",
      },
    ],
    flags: [],
    tags: ["for-each", "meta-argument", "loop", "resource"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-lifecycle",
    tool: "terraform",
    category: "meta-arguments",
    name: "lifecycle",
    title: "Control Terraform Resource Lifecycle",
    slug: "lifecycle",
    description:
      "Customize how Terraform creates, replaces, updates, and destroys a resource.",
    syntax: [
      "lifecycle {\n  create_before_destroy = true\n}",
      "lifecycle {\n  prevent_destroy = true\n}",
    ],
    examples: [
      {
        command: "lifecycle {\n  create_before_destroy = true\n}",
        description: "Create a replacement resource before destroying the existing one.",
      },
    ],
    flags: [
      { flag: "create_before_destroy", meaning: "Create a replacement before destroying the current resource." },
      { flag: "prevent_destroy", meaning: "Prevent Terraform from destroying the resource." },
      { flag: "ignore_changes", meaning: "Ignore selected attribute changes when planning." },
    ],
    tags: ["lifecycle", "resource", "replacement", "safety"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-replace",
    tool: "terraform",
    category: "workflow",
    name: "-replace",
    title: "Force Terraform Resource Replacement",
    slug: "replace",
    description:
      "Tell Terraform to replace a specific resource during the next plan or apply.",
    syntax: ["terraform plan -replace=aws_instance.web", "terraform apply -replace=aws_instance.web"],
    examples: [
      {
        command: "terraform plan -replace=aws_instance.web",
        description: "Preview replacement of the specified instance.",
      },
    ],
    flags: [
      { flag: "-replace", meaning: "Force replacement of a resource instance during the operation." },
    ],
    tags: ["replace", "resource", "plan", "apply"],
    difficulty: "intermediate",
    common: true,
    dangerous: true,
  },

  {
    id: "terraform-module",
    tool: "terraform",
    category: "modules",
    name: "module",
    title: "Use a Terraform Module",
    slug: "module",
    description:
      "Declare a reusable Terraform module from a local path, registry, or remote source.",
    syntax: [
      'module "network" {\n  source = "./modules/network"\n}',
      'module "vpc" {\n  source = "terraform-aws-modules/vpc/aws"\n}',
    ],
    examples: [
      {
        command: 'module "network" {\n  source = "./modules/network"\n}',
        description: "Load a reusable local network module.",
      },
    ],
    flags: [],
    tags: ["module", "reuse", "configuration"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-module-source",
    tool: "terraform",
    category: "modules",
    name: "module source",
    title: "Specify Terraform Module Source",
    slug: "module-source",
    description:
      "Specify where Terraform should obtain a module's source code.",
    syntax: [
      'source = "./modules/network"',
      'source = "git::https://github.com/example/network.git"',
    ],
    examples: [
      {
        command: 'module "network" {\n  source = "git::https://github.com/example/network.git"\n}',
        description: "Load a module from a Git repository.",
      },
    ],
    flags: [],
    tags: ["module", "source", "git", "registry"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-provider",
    tool: "terraform",
    category: "providers",
    name: "provider",
    title: "Configure Terraform Provider",
    slug: "provider",
    description:
      "Configure a provider that Terraform uses to interact with an external API or platform.",
    syntax: ['provider "aws" {\n  region = var.region\n}'],
    examples: [
      {
        command: 'provider "aws" {\n  region = "ap-south-1"\n}',
        description: "Configure the AWS provider for the Mumbai region.",
      },
    ],
    flags: [],
    tags: ["provider", "aws", "configuration"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-required-providers",
    tool: "terraform",
    category: "providers",
    name: "required_providers",
    title: "Declare Terraform Provider Requirements",
    slug: "required-providers",
    description:
      "Declare provider sources and acceptable provider version constraints.",
    syntax: [
      'terraform {\n  required_providers {\n    aws = {\n      source  = "hashicorp/aws"\n      version = "~> 6.0"\n    }\n  }\n}',
    ],
    examples: [
      {
        command: 'required_providers {\n  aws = {\n    source  = "hashicorp/aws"\n    version = "~> 6.0"\n  }\n}',
        description: "Declare the HashiCorp AWS provider and a compatible version range.",
      },
    ],
    flags: [],
    tags: ["provider", "version", "dependency", "configuration"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-backend",
    tool: "terraform",
    category: "state",
    name: "backend",
    title: "Configure Terraform Backend",
    slug: "backend",
    description:
      "Configure where Terraform stores state and how state locking is handled.",
    syntax: [
      'terraform {\n  backend "s3" {\n    bucket = "my-terraform-state"\n    key    = "prod/terraform.tfstate"\n    region = "ap-south-1"\n  }\n}',
    ],
    examples: [
      {
        command: 'backend "s3" {\n  bucket = "my-terraform-state"\n  key    = "prod/terraform.tfstate"\n  region = "ap-south-1"\n}',
        description: "Configure an S3 backend for remote Terraform state.",
      },
    ],
    flags: [],
    tags: ["backend", "state", "remote-state", "s3"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-refresh-only",
    tool: "terraform",
    category: "state",
    name: "terraform apply -refresh-only",
    title: "Refresh Terraform State",
    slug: "refresh-only",
    description:
      "Update Terraform state to reflect remote infrastructure without making configuration-driven changes.",
    syntax: ["terraform plan -refresh-only", "terraform apply -refresh-only"],
    examples: [
      {
        command: "terraform plan -refresh-only",
        description: "Preview changes Terraform would make to state based on remote infrastructure.",
      },
    ],
    flags: [
      { flag: "-refresh-only", meaning: "Only refresh state and do not propose normal configuration changes." },
    ],
    tags: ["refresh", "state", "drift", "inspection"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-target",
    tool: "terraform",
    category: "workflow",
    name: "-target",
    title: "Target Terraform Resource",
    slug: "target",
    description:
      "Limit a Terraform plan or apply operation to a specific resource or module address. Intended mainly for exceptional situations.",
    syntax: ["terraform plan -target=aws_instance.web"],
    examples: [
      {
        command: "terraform plan -target=aws_instance.web",
        description: "Limit planning to the specified resource.",
      },
    ],
    flags: [
      { flag: "-target", meaning: "Specify a resource or module address to target." },
    ],
    tags: ["target", "plan", "apply", "troubleshooting"],
    difficulty: "advanced",
    common: false,
    dangerous: true,
  },

  {
    id: "terraform-lock",
    tool: "terraform",
    category: "state",
    name: "state locking",
    title: "Terraform State Locking",
    slug: "state-locking",
    description:
      "Terraform automatically locks state for operations that could write state when the configured backend supports locking.",
    syntax: ["terraform plan -lock=false", "terraform apply -lock=false"],
    examples: [
      {
        command: "terraform plan",
        description: "Run a normal operation with state locking enabled by default when supported.",
      },
    ],
    flags: [
      { flag: "-lock=false", meaning: "Disable state locking for the operation; avoid unless you understand the concurrency risk." },
      { flag: "-lock-timeout", meaning: "Specify how long Terraform should wait to acquire a state lock." },
    ],
    tags: ["state", "locking", "concurrency", "backend"],
    difficulty: "intermediate",
    common: true,
    dangerous: true,
  },

  {
    id: "terraform-input",
    tool: "terraform",
    category: "workflow",
    name: "-input",
    title: "Control Terraform Interactive Input",
    slug: "input",
    description:
      "Control whether Terraform asks for interactive input during operations.",
    syntax: ["terraform plan -input=false"],
    examples: [
      {
        command: "terraform plan -input=false",
        description: "Run a plan without prompting for missing variable input.",
      },
    ],
    flags: [
      { flag: "-input=false", meaning: "Disable interactive prompts." },
    ],
    tags: ["input", "automation", "ci-cd", "pipeline"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-json-plan",
    tool: "terraform",
    category: "automation",
    name: "terraform show -json",
    title: "Export Terraform Plan as JSON",
    slug: "json-plan",
    description:
      "Convert a saved Terraform plan into JSON for CI/CD tooling, policy checks, or automation.",
    syntax: ["terraform show -json tfplan > tfplan.json"],
    examples: [
      {
        command: "terraform show -json tfplan > tfplan.json",
        description: "Export a saved plan as JSON for automated processing.",
      },
    ],
    flags: [
      { flag: "-json", meaning: "Output the plan or state in JSON format." },
    ],
    tags: ["json", "plan", "automation", "ci-cd"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-version",
    tool: "terraform",
    category: "core-cli",
    name: "terraform version",
    title: "Show Terraform Version",
    slug: "version",
    description:
      "Display the installed Terraform version and provider/plugin information.",
    syntax: ["terraform version"],
    examples: [
      {
        command: "terraform version",
        description: "Display the installed Terraform version.",
      },
    ],
    flags: [],
    tags: ["version", "diagnostics", "cli"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-help",
    tool: "terraform",
    category: "core-cli",
    name: "terraform help",
    title: "Terraform CLI Help",
    slug: "help",
    description:
      "Display Terraform CLI help and usage information.",
    syntax: ["terraform -help", "terraform <command> -help"],
    examples: [
      {
        command: "terraform plan -help",
        description: "Display help for the terraform plan command.",
      },
    ],
    flags: [
      { flag: "-help", meaning: "Display command usage information." },
    ],
    tags: ["help", "reference", "cli"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-init-backend-migration",
    tool: "terraform",
    category: "state",
    name: "terraform init -migrate-state",
    title: "Migrate Terraform State",
    slug: "init-migrate-state",
    description:
      "Migrate existing Terraform state when changing backend configuration.",
    syntax: ["terraform init -migrate-state"],
    examples: [
      {
        command: "terraform init -migrate-state",
        description: "Attempt to migrate state to the newly configured backend.",
      },
    ],
    flags: [
      { flag: "-migrate-state", meaning: "Migrate existing state to the new backend configuration." },
    ],
    tags: ["backend", "state", "migration", "init"],
    difficulty: "advanced",
    common: false,
    dangerous: true,
  },

  {
    id: "terraform-init-reconfigure",
    tool: "terraform",
    category: "state",
    name: "terraform init -reconfigure",
    title: "Reconfigure Terraform Backend",
    slug: "init-reconfigure",
    description:
      "Reinitialize Terraform while ignoring the existing backend configuration and without attempting state migration.",
    syntax: ["terraform init -reconfigure"],
    examples: [
      {
        command: "terraform init -reconfigure",
        description: "Reconfigure the backend when the previous backend settings should not be migrated.",
      },
    ],
    flags: [
      { flag: "-reconfigure", meaning: "Ignore previous backend configuration and reinitialize the backend." },
    ],
    tags: ["backend", "state", "init", "reconfigure"],
    difficulty: "intermediate",
    common: false,
    dangerous: true,
  },

  {
    id: "terraform-sensitive",
    tool: "terraform",
    category: "security",
    name: "sensitive",
    title: "Mark Terraform Values Sensitive",
    slug: "sensitive",
    description:
      "Mark variables or outputs as sensitive so Terraform hides their values in normal CLI output.",
    syntax: [
      'variable "db_password" {\n  type      = string\n  sensitive = true\n}',
      'output "db_password" {\n  value     = var.db_password\n  sensitive = true\n}',
    ],
    examples: [
      {
        command: 'variable "db_password" {\n  type      = string\n  sensitive = true\n}',
        description: "Mark a database password variable as sensitive.",
      },
    ],
    flags: [],
    tags: ["security", "secrets", "sensitive", "variables"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-terraform-block",
    tool: "terraform",
    category: "configuration",
    name: "terraform",
    title: "Terraform Configuration Block",
    slug: "terraform-block",
    description:
      "Configure Terraform settings such as required providers, Terraform version constraints, and backend configuration.",
    syntax: [
      'terraform {\n  required_version = ">= 1.6.0"\n}',
    ],
    examples: [
      {
        command: 'terraform {\n  required_version = ">= 1.6.0"\n}',
        description: "Require a minimum Terraform CLI version.",
      },
    ],
    flags: [],
    tags: ["terraform", "configuration", "version", "provider"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-terraform-lock",
    tool: "terraform",
    category: "providers",
    name: ".terraform.lock.hcl",
    title: "Terraform Dependency Lock File",
    slug: "lock-file",
    description:
      "Track selected provider versions and checksums to make provider installation reproducible.",
    syntax: ["terraform init"],
    examples: [
      {
        command: "terraform init",
        description: "Generate or update .terraform.lock.hcl based on provider selections.",
      },
    ],
    flags: [
      { flag: "-upgrade", meaning: "Allow Terraform to select newer provider versions within configured constraints." },
    ],
    tags: ["lock-file", "provider", "dependencies", "reproducibility"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-env-vars",
    tool: "terraform",
    category: "variables",
    name: "TF_VAR_*",
    title: "Set Terraform Variables with Environment Variables",
    slug: "env-vars",
    description:
      "Provide Terraform input variables through environment variables named with the TF_VAR_ prefix.",
    syntax: ["export TF_VAR_environment=staging"],
    examples: [
      {
        command: "export TF_VAR_environment=staging",
        description: "Set the Terraform environment variable without placing the value directly in the command arguments.",
      },
    ],
    flags: [],
    tags: ["variables", "environment", "ci-cd", "automation"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "terraform-ci-workflow",
    tool: "terraform",
    category: "automation",
    name: "Terraform CI Workflow",
    title: "Typical Terraform CI/CD Workflow",
    slug: "ci-workflow",
    description:
      "A practical sequence for validating and planning Terraform changes in CI/CD.",
    syntax: [
      "terraform fmt -check",
      "terraform init",
      "terraform validate",
      "terraform plan -out=tfplan",
    ],
    examples: [
      {
        command: "terraform fmt -check && terraform init && terraform validate && terraform plan -out=tfplan",
        description: "Run formatting checks, initialize Terraform, validate configuration, and generate a saved plan.",
      },
    ],
    flags: [],
    tags: ["ci-cd", "automation", "workflow", "plan", "validate"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },
];

export default terraformCommands;