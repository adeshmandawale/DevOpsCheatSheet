const jenkinsCommands = [
  {
    id: "jenkins-pipeline-agent",
    tool: "jenkins",
    category: "pipeline",
    name: "agent",
    title: "Jenkins Pipeline Agent",
    slug: "agent",
    description:
      "Defines where a Jenkins Pipeline or stage should execute.",
    syntax: [
      "agent any",
      "agent none",
      "agent { label 'linux' }",
      "agent { docker 'maven:3.9.9-eclipse-temurin-21' }",
    ],
    examples: [
      {
        command: "agent { label 'linux' }",
        description: "Run the Pipeline or stage on an agent labeled linux.",
      },
    ],
    flags: [],
    tags: ["pipeline", "agent", "executor"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-api-authentication",
    tool: "jenkins",
    category: "rest-api",
    name: "api-authentication",
    title: "Jenkins REST API Authentication",
    slug: "api-authentication",
    description:
      "Authenticate Jenkins REST API requests using a username and API token.",
    syntax: [
      "curl --user <username>:<api-token> <jenkins-url>/api/json",
    ],
    examples: [
      {
        command:
          "curl --user $JENKINS_USER:$JENKINS_API_TOKEN https://jenkins.example.com/api/json",
        description:
          "Authenticate to Jenkins using environment variables containing the username and API token.",
      },
    ],
    flags: [
      {
        flag: "--user",
        meaning: "Provide the username and API token for authentication.",
      },
    ],
    tags: ["rest-api", "authentication", "api-token", "curl"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-api-build-with-parameters",
    tool: "jenkins",
    category: "rest-api",
    name: "api-build-with-parameters",
    title: "Trigger Parameterized Build via REST API",
    slug: "api-build-with-parameters",
    description:
      "Trigger a Jenkins job with build parameters through the REST API. Authentication and CSRF protection may be required depending on Jenkins security configuration.",
    syntax: [
      "curl -X POST <jenkins-url>/job/<job>/buildWithParameters --data KEY=value",
    ],
    examples: [
      {
        command:
          "curl -X POST https://jenkins.example.com/job/deploy/buildWithParameters --data ENV=staging",
        description:
          "Trigger the deploy job with the ENV parameter set to staging.",
      },
    ],
    flags: [
      {
        flag: "--data",
        meaning: "Send build parameters in the request body.",
      },
    ],
    tags: ["rest-api", "build", "parameters", "curl"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-api-build",
    tool: "jenkins",
    category: "rest-api",
    name: "api-build",
    title: "Trigger Jenkins Build via REST API",
    slug: "api-build",
    description:
      "Trigger a Jenkins job through the REST API. Authentication and CSRF protection may be required depending on Jenkins security configuration.",
    syntax: [
      "curl -X POST <jenkins-url>/job/<job>/build",
    ],
    examples: [
      {
        command:
          "curl -X POST https://jenkins.example.com/job/my-app/build",
        description: "Trigger a Jenkins build using the REST API.",
      },
    ],
    flags: [
      {
        flag: "-X POST",
        meaning: "Send the request using the HTTP POST method.",
      },
    ],
    tags: ["rest-api", "build", "curl"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-api-json",
    tool: "jenkins",
    category: "rest-api",
    name: "api-json",
    title: "Jenkins JSON API",
    slug: "api-json",
    description:
      "Retrieve Jenkins information in JSON format through the REST API.",
    syntax: [
      "curl <jenkins-url>/api/json",
    ],
    examples: [
      {
        command:
          "curl https://jenkins.example.com/api/json",
        description: "Retrieve Jenkins information as JSON.",
      },
    ],
    flags: [],
    tags: ["rest-api", "json", "api"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-bat",
    tool: "jenkins",
    category: "pipeline",
    name: "bat",
    title: "Jenkins bat Step",
    slug: "bat",
    description:
      "Run a Windows batch command from a Jenkins Pipeline.",
    syntax: [
      "bat 'command'",
      "bat '''\ncommand 1\ncommand 2\n'''",
    ],
    examples: [
      {
        command: "bat 'dir'",
        description: "Run the Windows dir command on a Windows agent.",
      },
    ],
    flags: [],
    tags: ["pipeline", "windows", "batch"],
    difficulty: "beginner",
    common: false,
    dangerous: false,
  },

  {
    id: "jenkins-build-parameters",
    tool: "jenkins",
    category: "cli",
    name: "build-parameters",
    title: "Build Jenkins Job with Parameters",
    slug: "build-parameters",
    description:
      "Trigger a Jenkins job from the CLI while passing build parameters.",
    syntax: [
      "java -jar jenkins-cli.jar -s <jenkins-url> build <job> -p KEY=value",
    ],
    examples: [
      {
        command:
          "java -jar jenkins-cli.jar -s https://jenkins.example.com build deploy -p ENV=staging",
        description:
          "Trigger the deploy job with ENV set to staging.",
      },
    ],
    flags: [
      {
        flag: "-p",
        meaning: "Pass a build parameter as KEY=value.",
      },
    ],
    tags: ["cli", "build", "parameters"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-build",
    tool: "jenkins",
    category: "cli",
    name: "build",
    title: "Build Jenkins Job",
    slug: "build",
    description:
      "Trigger a Jenkins job from the Jenkins CLI.",
    syntax: [
      "java -jar jenkins-cli.jar -s <jenkins-url> build <job>",
    ],
    examples: [
      {
        command:
          "java -jar jenkins-cli.jar -s https://jenkins.example.com build my-app",
        description: "Trigger the my-app Jenkins job.",
      },
    ],
    flags: [
      {
        flag: "-p",
        meaning: "Pass build parameters.",
      },
      {
        flag: "-s",
        meaning: "Wait for the build to finish.",
      },
      {
        flag: "-v",
        meaning: "Print console output while waiting.",
      },
      {
        flag: "-w",
        meaning: "Wait until the build starts.",
      },
      {
        flag: "-f",
        meaning: "Follow build progress without passing interrupts.",
      },
      {
        flag: "-c",
        meaning: "Build only when SCM changes are detected.",
      },
    ],
    tags: ["cli", "build", "job"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-cli-client",
    tool: "jenkins",
    category: "cli",
    name: "cli-client",
    title: "Jenkins CLI Client",
    slug: "cli-client",
    description:
      "Use the Jenkins CLI client to execute commands against a Jenkins server.",
    syntax: [
      "java -jar jenkins-cli.jar -s <jenkins-url> <command>",
    ],
    examples: [
      {
        command:
          "java -jar jenkins-cli.jar -s https://jenkins.example.com help",
        description: "Display Jenkins CLI help.",
      },
    ],
    flags: [
      {
        flag: "-s <url>",
        meaning: "Specify the Jenkins server URL.",
      },
      {
        flag: "-auth <user:api-token>",
        meaning: "Authenticate using a username and API token.",
      },
      {
        flag: "-webSocket",
        meaning: "Use WebSocket transport.",
      },
      {
        flag: "-http",
        meaning: "Use HTTP transport.",
      },
      {
        flag: "-ssh",
        meaning: "Use SSH transport.",
      },
    ],
    tags: ["cli", "client", "authentication"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-computer-api",
    tool: "jenkins",
    category: "rest-api",
    name: "computer-api",
    title: "Jenkins Computer API",
    slug: "computer-api",
    description:
      "Retrieve Jenkins computer and executor information through the REST API.",
    syntax: [
      "curl <jenkins-url>/computer/api/json",
    ],
    examples: [
      {
        command:
          "curl https://jenkins.example.com/computer/api/json",
        description:
          "Retrieve information about Jenkins computers and executors.",
      },
    ],
    flags: [],
    tags: ["rest-api", "nodes", "executors"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-console-text-api",
    tool: "jenkins",
    category: "rest-api",
    name: "console-text-api",
    title: "Jenkins Console Text API",
    slug: "console-text-api",
    description:
      "Retrieve the plain-text console output of a Jenkins build through the REST API.",
    syntax: [
      "curl <jenkins-url>/job/<job>/<build>/consoleText",
    ],
    examples: [
      {
        command:
          "curl https://jenkins.example.com/job/my-app/42/consoleText",
        description:
          "Retrieve console output for build 42.",
      },
    ],
    flags: [],
    tags: ["rest-api", "console", "logs", "build"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-console",
    tool: "jenkins",
    category: "cli",
    name: "console",
    title: "View Jenkins Build Console",
    slug: "console",
    description:
      "Display Jenkins build console output from the Jenkins CLI.",
    syntax: [
      "java -jar jenkins-cli.jar -s <jenkins-url> console <job>",
      "java -jar jenkins-cli.jar -s <jenkins-url> console <job> <build>",
    ],
    examples: [
      {
        command:
          "java -jar jenkins-cli.jar -s https://jenkins.example.com console my-app 42",
        description:
          "Display console output for build 42.",
      },
    ],
    flags: [
      {
        flag: "-f",
        meaning: "Follow console output.",
      },
      {
        flag: "-n <N>",
        meaning: "Show the last N lines of console output.",
      },
    ],
    tags: ["cli", "console", "logs", "build"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-copy-job",
    tool: "jenkins",
    category: "cli",
    name: "copy-job",
    title: "Copy Jenkins Job",
    slug: "copy-job",
    description:
      "Create a new Jenkins job by copying an existing job.",
    syntax: [
      "java -jar jenkins-cli.jar -s <jenkins-url> copy-job <from> <to>",
    ],
    examples: [
      {
        command:
          "java -jar jenkins-cli.jar -s https://jenkins.example.com copy-job app-template app-staging",
        description:
          "Create app-staging by copying app-template.",
      },
    ],
    flags: [],
    tags: ["cli", "job", "copy"],
    difficulty: "intermediate",
    common: false,
    dangerous: false,
  },

  {
    id: "jenkins-create-job",
    tool: "jenkins",
    category: "cli",
    name: "create-job",
    title: "Create Jenkins Job",
    slug: "create-job",
    description:
      "Create a Jenkins job using an XML configuration file.",
    syntax: [
      "java -jar jenkins-cli.jar -s <jenkins-url> create-job <job> < config.xml",
    ],
    examples: [
      {
        command:
          "java -jar jenkins-cli.jar -s https://jenkins.example.com create-job my-app < config.xml",
        description:
          "Create the my-app job from config.xml.",
      },
    ],
    flags: [],
    tags: ["cli", "job", "configuration"],
    difficulty: "intermediate",
    common: false,
    dangerous: true,
  },

  {
    id: "jenkins-credentials",
    tool: "jenkins",
    category: "pipeline",
    name: "credentials",
    title: "Jenkins Credentials",
    slug: "credentials",
    description:
      "Access Jenkins-managed credentials securely from a Pipeline.",
    syntax: [
      "environment { SECRET = credentials('credential-id') }",
    ],
    examples: [
      {
        command:
          "environment { REGISTRY_CREDS = credentials('docker-registry') }",
        description:
          "Expose a Jenkins credential to a Pipeline environment.",
      },
    ],
    flags: [],
    tags: ["pipeline", "credentials", "secrets", "security"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-crumb-issuer",
    tool: "jenkins",
    category: "rest-api",
    name: "crumb-issuer",
    title: "Jenkins CSRF Crumb API",
    slug: "crumb-issuer",
    description:
      "Retrieve a Jenkins CSRF crumb for requests that require CSRF protection. API tokens are preferred where supported.",
    syntax: [
      "curl <jenkins-url>/crumbIssuer/api/json",
    ],
    examples: [
      {
        command:
          "curl https://jenkins.example.com/crumbIssuer/api/json",
        description:
          "Retrieve the Jenkins CSRF crumb and its field name.",
      },
    ],
    flags: [],
    tags: ["rest-api", "csrf", "security", "crumb"],
    difficulty: "intermediate",
    common: false,
    dangerous: false,
  },

  {
    id: "jenkins-delete-job",
    tool: "jenkins",
    category: "cli",
    name: "delete-job",
    title: "Delete Jenkins Job",
    slug: "delete-job",
    description:
      "Permanently delete a Jenkins job using the Jenkins CLI.",
    syntax: [
      "java -jar jenkins-cli.jar -s <jenkins-url> delete-job <job>",
    ],
    examples: [
      {
        command:
          "java -jar jenkins-cli.jar -s https://jenkins.example.com delete-job old-app",
        description:
          "Delete the old-app Jenkins job.",
      },
    ],
    flags: [],
    tags: ["cli", "job", "delete"],
    difficulty: "intermediate",
    common: false,
    dangerous: true,
  },

  {
    id: "jenkins-disable-job",
    tool: "jenkins",
    category: "cli",
    name: "disable-job",
    title: "Disable Jenkins Job",
    slug: "disable-job",
    description:
      "Disable a Jenkins job so it cannot be triggered normally.",
    syntax: [
      "java -jar jenkins-cli.jar -s <jenkins-url> disable-job <job>",
    ],
    examples: [
      {
        command:
          "java -jar jenkins-cli.jar -s https://jenkins.example.com disable-job my-app",
        description:
          "Disable the my-app Jenkins job.",
      },
    ],
    flags: [],
    tags: ["cli", "job", "disable"],
    difficulty: "beginner",
    common: false,
    dangerous: true,
  },

  {
    id: "jenkins-docker-agent",
    tool: "jenkins",
    category: "pipeline",
    name: "docker-agent",
    title: "Jenkins Docker Agent",
    slug: "docker-agent",
    description:
      "Run Jenkins Pipeline stages inside Docker containers. Docker-based agents require the Jenkins Docker Pipeline plugin.",
    syntax: [
      "agent { docker 'image:tag' }",
      "agent { dockerfile true }",
    ],
    examples: [
      {
        command:
          "agent { docker 'maven:3.9.9-eclipse-temurin-21' }",
        description:
          "Run the Pipeline using a Maven Docker image.",
      },
    ],
    flags: [],
    tags: ["pipeline", "docker", "agent", "container"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-enable-job",
    tool: "jenkins",
    category: "cli",
    name: "enable-job",
    title: "Enable Jenkins Job",
    slug: "enable-job",
    description:
      "Enable a previously disabled Jenkins job.",
    syntax: [
      "java -jar jenkins-cli.jar -s <jenkins-url> enable-job <job>",
    ],
    examples: [
      {
        command:
          "java -jar jenkins-cli.jar -s https://jenkins.example.com enable-job my-app",
        description:
          "Enable the my-app Jenkins job.",
      },
    ],
    flags: [],
    tags: ["cli", "job", "enable"],
    difficulty: "beginner",
    common: false,
    dangerous: false,
  },

  {
    id: "jenkins-environment",
    tool: "jenkins",
    category: "pipeline",
    name: "environment",
    title: "Jenkins Pipeline Environment",
    slug: "environment",
    description:
      "Define environment variables that are available to Jenkins Pipeline steps.",
    syntax: [
      "environment { KEY = 'value' }",
    ],
    examples: [
      {
        command:
          "environment { APP_ENV = 'staging' }",
        description:
          "Set APP_ENV for the Pipeline.",
      },
    ],
    flags: [],
    tags: ["pipeline", "environment", "variables"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-get-job",
    tool: "jenkins",
    category: "cli",
    name: "get-job",
    title: "Get Jenkins Job Configuration",
    slug: "get-job",
    description:
      "Retrieve the XML configuration of a Jenkins job using the CLI.",
    syntax: [
      "java -jar jenkins-cli.jar -s <jenkins-url> get-job <job>",
    ],
    examples: [
      {
        command:
          "java -jar jenkins-cli.jar -s https://jenkins.example.com get-job my-app",
        description:
          "Print the configuration of the my-app job.",
      },
    ],
    flags: [],
    tags: ["cli", "job", "configuration"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-get-node",
    tool: "jenkins",
    category: "cli",
    name: "get-node",
    title: "Get Jenkins Node Configuration",
    slug: "get-node",
    description:
      "Retrieve the XML configuration of a Jenkins node.",
    syntax: [
      "java -jar jenkins-cli.jar -s <jenkins-url> get-node <node>",
    ],
    examples: [
      {
        command:
          "java -jar jenkins-cli.jar -s https://jenkins.example.com get-node linux-agent",
        description:
          "Print the configuration of the linux-agent node.",
      },
    ],
    flags: [],
    tags: ["cli", "node", "agent", "configuration"],
    difficulty: "intermediate",
    common: false,
    dangerous: false,
  },

  {
    id: "jenkins-groovy",
    tool: "jenkins",
    category: "administration",
    name: "groovy",
    title: "Run Jenkins Groovy Script",
    slug: "groovy",
    description:
      "Execute a Groovy script through the Jenkins CLI. This can perform powerful administrative operations.",
    syntax: [
      "java -jar jenkins-cli.jar -s <jenkins-url> groovy < script.groovy",
    ],
    examples: [
      {
        command:
          "java -jar jenkins-cli.jar -s https://jenkins.example.com groovy < script.groovy",
        description:
          "Execute a Groovy script on Jenkins.",
      },
    ],
    flags: [],
    tags: ["cli", "groovy", "administration", "script"],
    difficulty: "advanced",
    common: false,
    dangerous: true,
  },

  {
    id: "jenkins-help",
    tool: "jenkins",
    category: "cli",
    name: "help",
    title: "Jenkins CLI Help",
    slug: "help",
    description:
      "Display Jenkins CLI help and information about available commands.",
    syntax: [
      "java -jar jenkins-cli.jar -s <jenkins-url> help",
      "java -jar jenkins-cli.jar -s <jenkins-url> help <command>",
    ],
    examples: [
      {
        command:
          "java -jar jenkins-cli.jar -s https://jenkins.example.com help",
        description:
          "Display available Jenkins CLI commands.",
      },
    ],
    flags: [],
    tags: ["cli", "help", "reference"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-input",
    tool: "jenkins",
    category: "pipeline",
    name: "input",
    title: "Jenkins Pipeline Input",
    slug: "input",
    description:
      "Pause a Pipeline and request manual input or approval before continuing. The input step is commonly used for deployment approvals.",
    syntax: [
      "input message: 'Deploy to production?'",
    ],
    examples: [
      {
        command:
          "input message: 'Deploy to production?'",
        description:
          "Pause the Pipeline and wait for a user to approve the deployment.",
      },
    ],
    flags: [],
    tags: ["pipeline", "approval", "input", "deployment"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-job-api-json",
    tool: "jenkins",
    category: "rest-api",
    name: "job-api-json",
    title: "Jenkins Job JSON API",
    slug: "job-api-json",
    description:
      "Retrieve information about a Jenkins job through its JSON API endpoint.",
    syntax: [
      "curl <jenkins-url>/job/<job>/api/json",
    ],
    examples: [
      {
        command:
          "curl https://jenkins.example.com/job/my-app/api/json",
        description:
          "Retrieve metadata and build information for my-app.",
      },
    ],
    flags: [],
    tags: ["rest-api", "job", "json"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-last-build",
    tool: "jenkins",
    category: "rest-api",
    name: "last-build",
    title: "Jenkins Last Build API",
    slug: "last-build",
    description:
      "Retrieve information about the most recent build of a Jenkins job.",
    syntax: [
      "curl <jenkins-url>/job/<job>/lastBuild/api/json",
    ],
    examples: [
      {
        command:
          "curl https://jenkins.example.com/job/my-app/lastBuild/api/json",
        description:
          "Retrieve information about the latest build.",
      },
    ],
    flags: [],
    tags: ["rest-api", "build", "json"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-last-failed-build",
    tool: "jenkins",
    category: "rest-api",
    name: "last-failed-build",
    title: "Jenkins Last Failed Build API",
    slug: "last-failed-build",
    description:
      "Retrieve information about the most recent failed build of a Jenkins job.",
    syntax: [
      "curl <jenkins-url>/job/<job>/lastFailedBuild/api/json",
    ],
    examples: [
      {
        command:
          "curl https://jenkins.example.com/job/my-app/lastFailedBuild/api/json",
        description:
          "Retrieve information about the latest failed build.",
      },
    ],
    flags: [],
    tags: ["rest-api", "build", "failure", "json"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-last-successful-build",
    tool: "jenkins",
    category: "rest-api",
    name: "last-successful-build",
    title: "Jenkins Last Successful Build API",
    slug: "last-successful-build",
    description:
      "Retrieve information about the most recent successful build of a Jenkins job.",
    syntax: [
      "curl <jenkins-url>/job/<job>/lastSuccessfulBuild/api/json",
    ],
    examples: [
      {
        command:
          "curl https://jenkins.example.com/job/my-app/lastSuccessfulBuild/api/json",
        description:
          "Retrieve information about the latest successful build.",
      },
    ],
    flags: [],
    tags: ["rest-api", "build", "success", "json"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-list-jobs",
    tool: "jenkins",
    category: "cli",
    name: "list-jobs",
    title: "List Jenkins Jobs",
    slug: "list-jobs",
    description:
      "List Jenkins jobs accessible to the current CLI user.",
    syntax: [
      "java -jar jenkins-cli.jar -s <jenkins-url> list-jobs",
    ],
    examples: [
      {
        command:
          "java -jar jenkins-cli.jar -s https://jenkins.example.com list-jobs",
        description:
          "List Jenkins jobs.",
      },
    ],
    flags: [],
    tags: ["cli", "jobs", "list"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-list-nodes",
    tool: "jenkins",
    category: "cli",
    name: "list-nodes",
    title: "List Jenkins Nodes",
    slug: "list-nodes",
    description:
      "List Jenkins nodes and agents available to the controller.",
    syntax: [
      "java -jar jenkins-cli.jar -s <jenkins-url> list-nodes",
    ],
    examples: [
      {
        command:
          "java -jar jenkins-cli.jar -s https://jenkins.example.com list-nodes",
        description:
          "List Jenkins nodes and agents.",
      },
    ],
    flags: [],
    tags: ["cli", "nodes", "agents"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-list-plugins",
    tool: "jenkins",
    category: "administration",
    name: "list-plugins",
    title: "List Jenkins Plugins",
    slug: "list-plugins",
    description:
      "List installed Jenkins plugins and their versions.",
    syntax: [
      "java -jar jenkins-cli.jar -s <jenkins-url> list-plugins",
    ],
    examples: [
      {
        command:
          "java -jar jenkins-cli.jar -s https://jenkins.example.com list-plugins",
        description:
          "Display installed Jenkins plugins.",
      },
    ],
    flags: [],
    tags: ["cli", "plugins", "administration"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-options",
    tool: "jenkins",
    category: "pipeline",
    name: "options",
    title: "Jenkins Pipeline Options",
    slug: "options",
    description:
      "Configure Pipeline-level execution options such as timeouts and build timestamps.",
    syntax: [
      "options { ... }",
    ],
    examples: [
      {
        command:
          "options {\n    timeout(time: 30, unit: 'MINUTES')\n    timestamps()\n}",
        description:
          "Set a Pipeline timeout and enable timestamps in console output.",
      },
    ],
    flags: [],
    tags: ["pipeline", "options", "timeout"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-parallel",
    tool: "jenkins",
    category: "pipeline",
    name: "parallel",
    title: "Jenkins Parallel Stages",
    slug: "parallel",
    description:
      "Run multiple Jenkins Pipeline stages concurrently to reduce overall execution time.",
    syntax: [
      "stage('Tests') {\n    parallel {\n        stage('Linux') {\n            steps {\n                sh './test-linux.sh'\n            }\n        }\n        stage('Windows') {\n            steps {\n                bat 'test-windows.bat'\n            }\n        }\n    }\n}",
    ],
    examples: [
      {
        command:
          "stage('Tests') {\n    parallel {\n        stage('Linux') {\n            steps {\n                sh './test-linux.sh'\n            }\n        }\n        stage('Windows') {\n            steps {\n                bat 'test-windows.bat'\n            }\n        }\n    }\n}",
        description:
          "Run Linux and Windows tests concurrently inside the Tests stage.",
      },
    ],
    flags: [],
    tags: ["pipeline", "parallel", "stages", "concurrency"],
    difficulty: "advanced",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-parameters",
    tool: "jenkins",
    category: "pipeline",
    name: "parameters",
    title: "Jenkins Pipeline Parameters",
    slug: "parameters",
    description:
      "Define parameters that users can provide when starting a Jenkins Pipeline.",
    syntax: [
      "parameters { string(name: 'ENV', defaultValue: 'staging') }",
    ],
    examples: [
      {
        command:
          "parameters {\n    choice(name: 'ENV', choices: ['dev', 'staging', 'prod'])\n}",
        description:
          "Allow users to select the deployment environment.",
      },
    ],
    flags: [],
    tags: ["pipeline", "parameters", "input"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-pipeline",
    tool: "jenkins",
    category: "pipeline",
    name: "pipeline",
    title: "Jenkins Declarative Pipeline",
    slug: "pipeline",
    description:
      "Define a Jenkins Declarative Pipeline using the pipeline block.",
    syntax: [
      "pipeline {\n    agent any\n    stages {\n        stage('Build') {\n            steps {\n                sh 'make build'\n            }\n        }\n    }\n}",
    ],
    
    examples: [
      {
        command:
          "pipeline {\n    agent any\n    stages {\n        stage('Build') {\n            steps {\n                sh 'make build'\n            }\n        }\n    }\n}",
        description:
          "Define a basic Declarative Pipeline with a Build stage.",
      },
    ],
    flags: [],
    tags: ["pipeline", "jenkinsfile", "declarative"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-post",
    tool: "jenkins",
    category: "pipeline",
    name: "post",
    title: "Jenkins Pipeline Post Actions",
    slug: "post",
    description:
      "Define actions that run after a Pipeline or stage based on its execution result.",
    syntax: [
      "post {\n    always {\n        ...\n    }\n}",
      "post {\n    success {\n        ...\n    }\n    failure {\n        ...\n    }\n}",
    ],
    examples: [
      {
        command:
          "post {\n    always {\n        echo 'Pipeline finished'\n    }\n}",
        description:
          "Run an action after the Pipeline completes regardless of the result.",
      },
    ],
    flags: [],
    tags: ["pipeline", "post", "cleanup", "notifications"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-queue-api",
    tool: "jenkins",
    category: "rest-api",
    name: "queue-api",
    title: "Jenkins Queue API",
    slug: "queue-api",
    description:
      "Retrieve Jenkins build queue information through the REST API.",
    syntax: [
      "curl <jenkins-url>/queue/api/json",
    ],
    examples: [
      {
        command:
          "curl https://jenkins.example.com/queue/api/json",
        description:
          "Retrieve queued Jenkins builds.",
      },
    ],
    flags: [],
    tags: ["rest-api", "queue", "build"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-reload-configuration",
    tool: "jenkins",
    category: "administration",
    name: "reload-configuration",
    title: "Reload Jenkins Configuration",
    slug: "reload-configuration",
    description:
      "Reload Jenkins configuration from disk without restarting the Jenkins controller.",
    syntax: [
      "java -jar jenkins-cli.jar -s <jenkins-url> reload-configuration",
    ],
    examples: [
      {
        command:
          "java -jar jenkins-cli.jar -s https://jenkins.example.com reload-configuration",
        description:
          "Reload Jenkins configuration from disk.",
      },
    ],
    flags: [],
    tags: ["cli", "administration", "configuration"],
    difficulty: "intermediate",
    common: false,
    dangerous: true,
  },

  {
    id: "jenkins-retry",
    tool: "jenkins",
    category: "pipeline",
    name: "retry",
    title: "Jenkins Pipeline Retry",
    slug: "retry",
    description:
      "Retry Pipeline execution or a block of steps when failures occur.",
    syntax: [
      "options { retry(3) }",
      "retry(3) { ... }",
    ],
    examples: [
      {
        command:
          "retry(3) {\n    sh 'curl https://example.com'\n}",
        description:
          "Retry the block up to three times if it fails.",
      },
    ],
    flags: [],
    tags: ["pipeline", "retry", "resilience"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-safe-restart",
    tool: "jenkins",
    category: "administration",
    name: "safe-restart",
    title: "Safely Restart Jenkins",
    slug: "safe-restart",
    description:
      "Restart Jenkins after running builds have completed.",
    syntax: [
      "java -jar jenkins-cli.jar -s <jenkins-url> safe-restart",
    ],
    examples: [
      {
        command:
          "java -jar jenkins-cli.jar -s https://jenkins.example.com safe-restart",
        description:
          "Request a safe Jenkins restart.",
      },
    ],
    flags: [],
    tags: ["cli", "administration", "restart"],
    difficulty: "intermediate",
    common: false,
    dangerous: true,
  },

  {
    id: "jenkins-safe-shutdown",
    tool: "jenkins",
    category: "administration",
    name: "safe-shutdown",
    title: "Safely Shut Down Jenkins",
    slug: "safe-shutdown",
    description:
      "Stop accepting new builds and shut down Jenkins after running builds have completed.",
    syntax: [
      "java -jar jenkins-cli.jar -s <jenkins-url> safe-shutdown",
    ],
    examples: [
      {
        command:
          "java -jar jenkins-cli.jar -s https://jenkins.example.com safe-shutdown",
        description:
          "Request a safe Jenkins shutdown.",
      },
    ],
    flags: [],
    tags: ["cli", "administration", "shutdown"],
    difficulty: "intermediate",
    common: false,
    dangerous: true,
  },

  {
    id: "jenkins-sh",
    tool: "jenkins",
    category: "pipeline",
    name: "sh",
    title: "Jenkins sh Step",
    slug: "sh",
    description:
      "Run a Unix shell command from a Jenkins Pipeline.",
    syntax: [
      "sh 'command'",
      "sh '''\ncommand 1\ncommand 2\n'''",
    ],
    examples: [
      {
        command:
          "sh 'docker build -t my-app .'",
        description:
          "Build a Docker image from a Jenkins Pipeline.",
      },
    ],
    flags: [],
    tags: ["pipeline", "shell", "linux", "unix"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-shared-library",
    tool: "jenkins",
    category: "pipeline",
    name: "shared-library",
    title: "Jenkins Shared Library",
    slug: "shared-library",
    description:
      "Load reusable Pipeline code from a Jenkins Shared Library.",
    syntax: [
      "@Library('my-shared-library') _",
      "@Library('my-shared-library@main') _",
    ],
    examples: [
      {
        command:
          "@Library('my-shared-library@main') _",
        description:
          "Load the main branch of a Jenkins Shared Library.",
      },
    ],
    flags: [],
    tags: ["pipeline", "shared-library", "reusability"],
    difficulty: "advanced",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-stage",
    tool: "jenkins",
    category: "pipeline",
    name: "stage",
    title: "Jenkins Pipeline Stage",
    slug: "stage",
    description:
      "Group related Pipeline steps into a named stage.",
    syntax: [
      "stage('Build') {\n    steps {\n        ...\n    }\n}",
    ],
    examples: [
      {
        command:
          "stage('Build') {\n    steps {\n        sh 'make build'\n    }\n}",
        description:
          "Create a Build stage containing a shell command.",
      },
    ],
    flags: [],
    tags: ["pipeline", "stage", "jenkinsfile"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-stages",
    tool: "jenkins",
    category: "pipeline",
    name: "stages",
    title: "Jenkins Pipeline Stages",
    slug: "stages",
    description:
      "Define the collection of stages that make up a Jenkins Declarative Pipeline.",
    syntax: [
      "stages {\n    stage('Build') {\n        steps {\n            ...\n        }\n    }\n}",
    ],
    examples: [
      {
        command:
          "stages {\n    stage('Build') {\n        steps {\n            sh 'make build'\n        }\n    }\n}",
        description:
          "Define the stages section of a Declarative Pipeline.",
      },
    ],
    flags: [],
    tags: ["pipeline", "stages", "jenkinsfile"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-steps",
    tool: "jenkins",
    category: "pipeline",
    name: "steps",
    title: "Jenkins Pipeline Steps",
    slug: "steps",
    description:
      "Define the executable steps inside a Jenkins Declarative Pipeline stage.",
    syntax: [
      "steps {\n    ...\n}",
    ],
    examples: [
      {
        command:
          "steps {\n    sh 'echo Hello Jenkins'\n}",
        description:
          "Run a shell command inside a stage.",
      },
    ],
    flags: [],
    tags: ["pipeline", "steps", "jenkinsfile"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-stop-builds",
    tool: "jenkins",
    category: "cli",
    name: "stop-builds",
    title: "Stop Jenkins Builds",
    slug: "stop-builds",
    description:
      "Stop all currently running builds of a Jenkins job.",
    syntax: [
      "java -jar jenkins-cli.jar -s <jenkins-url> stop-builds <job>",
    ],
    examples: [
      {
        command:
          "java -jar jenkins-cli.jar -s https://jenkins.example.com stop-builds my-app",
        description:
          "Stop running builds for my-app.",
      },
    ],
    flags: [],
    tags: ["cli", "build", "stop"],
    difficulty: "intermediate",
    common: false,
    dangerous: true,
  },

  {
    id: "jenkins-timeout",
    tool: "jenkins",
    category: "pipeline",
    name: "timeout",
    title: "Jenkins Pipeline Timeout",
    slug: "timeout",
    description:
      "Limit how long a Jenkins Pipeline or a block of Pipeline steps can run.",
    syntax: [
      "options { timeout(time: 30, unit: 'MINUTES') }",
      "timeout(time: 10, unit: 'MINUTES') { ... }",
    ],
    examples: [
      {
        command:
          "options {\n    timeout(time: 30, unit: 'MINUTES')\n}",
        description:
          "Limit the entire Pipeline to 30 minutes.",
      },
    ],
    flags: [],
    tags: ["pipeline", "timeout", "reliability"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-update-job",
    tool: "jenkins",
    category: "cli",
    name: "update-job",
    title: "Update Jenkins Job",
    slug: "update-job",
    description:
      "Replace the XML configuration of an existing Jenkins job.",
    syntax: [
      "java -jar jenkins-cli.jar -s <jenkins-url> update-job <job> < config.xml",
    ],
    examples: [
      {
        command:
          "java -jar jenkins-cli.jar -s https://jenkins.example.com update-job my-app < config.xml",
        description:
          "Update the my-app job using config.xml.",
      },
    ],
    flags: [],
    tags: ["cli", "job", "configuration"],
    difficulty: "intermediate",
    common: false,
    dangerous: true,
  },

  {
    id: "jenkins-when",
    tool: "jenkins",
    category: "pipeline",
    name: "when",
    title: "Jenkins Pipeline Conditions",
    slug: "when",
    description:
      "Conditionally execute a Declarative Pipeline stage based on branch, environment, or other conditions.",
    syntax: [
      "when { branch 'main' }",
      "when { environment name: 'DEPLOY', value: 'true' }",
    ],
    examples: [
      {
        command:
          "when {\n    branch 'main'\n}",
        description:
          "Run a stage only when the current branch is main.",
      },
    ],
    flags: [],
    tags: ["pipeline", "when", "conditions", "branch"],
    difficulty: "intermediate",
    common: true,
    dangerous: false,
  },

  {
    id: "jenkins-who-am-i",
    tool: "jenkins",
    category: "cli",
    name: "who-am-i",
    title: "Jenkins CLI Who Am I",
    slug: "who-am-i",
    description:
      "Display the Jenkins user associated with the current CLI authentication.",
    syntax: [
      "java -jar jenkins-cli.jar -s <jenkins-url> who-am-i",
    ],
    examples: [
      {
        command:
          "java -jar jenkins-cli.jar -s https://jenkins.example.com who-am-i",
        description:
          "Display the currently authenticated Jenkins user.",
      },
    ],
    flags: [],
    tags: ["cli", "authentication", "user"],
    difficulty: "beginner",
    common: true,
    dangerous: false,
  },
];

export default jenkinsCommands;