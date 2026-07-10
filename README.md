<div align="center">

```
███╗   ███╗██╗   ██╗ ██████╗██╗      █████╗ ██╗    ██╗
████╗ ████║╚██╗ ██╔╝██╔════╝██║     ██╔══██╗██║    ██║
██╔████╔██║ ╚████╔╝ ██║     ██║     ███████║██║ █╗ ██║
██║╚██╔╝██║  ╚██╔╝  ██║     ██║     ██╔══██║██║███╗██║
██║ ╚═╝ ██║   ██║   ╚██████╗███████╗██║  ██║╚███╔███╔╝
╚═╝     ╚═╝   ╚═╝    ╚═════╝╚══════╝╚═╝  ╚═╝ ╚══╝╚══╝
```

**An open-source, blazing-fast AI Agent CLI and Telegram Bot built with Bun.**

[![Bun](https://img.shields.io/badge/Runtime-Bun-black?style=flat-square&logo=bun)](https://bun.sh/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vercel AI SDK](https://img.shields.io/badge/AI-Vercel%20AI%20SDK-black?style=flat-square&logo=vercel)](https://sdk.vercel.ai/)
[![OpenRouter](https://img.shields.io/badge/LLM-OpenRouter-6366f1?style=flat-square)](https://openrouter.ai/)

</div>

---

## What is myclaw?

**myclaw** is a powerful AI agent CLI that lives in your terminal — and in your pocket. Give it a task — like *"Add authentication to this Express app"* — and it autonomously reads your codebase, writes code, and organizes files. The key difference from other AI coding tools: **every change is staged in memory first**, and you review a full diff before anything touches your disk.

Control your local agent from anywhere using the **Telegram Bot integration**: review diffs, approve file changes, and assign tasks right from your phone.

Built on [Bun](https://bun.sh/) for maximum speed and [Vercel AI SDK](https://sdk.vercel.ai/) for a provider-agnostic AI layer via [OpenRouter](https://openrouter.ai/).

---

## ✨ Features

### 💻 Interactive CLI (TUI)
Beautiful terminal user interface powered by `Commander.js` and `@clack/prompts` — featuring an ANSI Shadow ASCII banner, interactive selection menus, and `chalk`-styled color output. Renders full Markdown responses directly in your terminal via `marked-terminal`.

### 🤖 Agent Mode
The core of myclaw. Describe a coding task in plain English and the agent autonomously:
- Reads files and analyzes your codebase structure
- Creates new files, modifies existing ones, and organizes folders
- Searches across your project with glob patterns and content filters
- Queues shell commands for post-approval execution
- **Stages all changes in-memory** — nothing is written until *you* approve the diff

### 📝 Plan Mode
Generates a detailed, step-by-step architectural plan for complex tasks. Each step is assigned a complexity score. You can cherry-pick specific steps to execute rather than running the full plan.

### ❓ Ask Mode
A context-aware Q&A mode for your workspace. The agent reads your actual files to understand context before answering. Responses are formatted in Markdown, and you can optionally save any answer directly to a `.md` file.

### 📱 Telegram Bot Integration
Control your local AI agent from anywhere using Telegram. Features:
- Full **inline keyboard** support for reviewing diffs on your phone
- Accept or reject individual file changes remotely
- Assign coding tasks and trigger planning sessions from Telegram
- `/start`, `/ask`, `/agent`, and `/plan` commands
- **Owner-only security** — only your Telegram user ID can control the bot

### 🌐 Web Search & Scraping
Integrated with [Firecrawl](https://www.firecrawl.dev/) to allow the AI agent to search the web and scrape website content — gathering up-to-date context for any task that needs live information.

### 🛡️ Safety-First Staging Workflow
Every mutation — file creation, modification, deletion, or shell command — goes through a mandatory approval flow:
1. The agent stages all changes in memory
2. You review a color-coded **unified diff** in the terminal (or inline keyboard on Telegram)
3. You approve or reject each change individually
4. Only approved changes are written to disk

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Runtime** | [Bun](https://bun.sh/) |
| **Language** | TypeScript |
| **AI SDK** | [Vercel AI SDK](https://sdk.vercel.ai/) (`ai`) |
| **LLM Provider** | [OpenRouter](https://openrouter.ai/) (`@openrouter/ai-sdk-provider`) |
| **CLI Framework** | `commander` |
| **TUI / Prompts** | `@clack/prompts`, `@clack/core` |
| **Styling** | `chalk`, `figlet` |
| **Markdown** | `marked`, `marked-terminal` |
| **Diff Engine** | `diff` |
| **Telegram Bot** | `telegraf` |
| **Web Tools** | `@mendable/firecrawl-js` |
| **Validation** | `zod` |
| **Config** | `dotenv` |

---

## 🚀 Getting Started

### Prerequisites

1. **Install Bun** on your system:
   ```bash
   # macOS / Linux
   curl -fsSL https://bun.sh/install | bash

   # Windows (PowerShell)
   powershell -c "irm bun.sh/install.ps1 | iex"
   ```

2. **Get your API Keys:**
   - **OpenRouter API Key** — Generate one at [openrouter.ai](https://openrouter.ai/). Gives you access to hundreds of models (including free ones).
   - **Telegram Bot Token** — Create a new bot via [@BotFather](https://t.me/BotFather) on Telegram.
   - **Telegram Owner ID** — Use a [GetID bot](https://t.me/getidsbot) on Telegram to find your personal User ID (ensures only you can control the bot).
   - **Firecrawl API Key** *(Optional but recommended)* — Get it from [firecrawl.dev](https://www.firecrawl.dev/).

### Installation

**1. Clone the repository:**
```bash
git clone https://github.com/RaviBaskey/autonomous-developer-agent.git
cd autonomous-developer-agent
```

**2. Install dependencies:**
```bash
bun install
```

**3. Configure environment variables:**

Create a `.env` file in the project root:
```env
# Required
OPENROUTER_API_KEY=your_openrouter_api_key_here

# The model ID to use. Free models available.
# Examples: "openai/gpt-4o", "anthropic/claude-3.5-sonnet", "openrouter/free"
OPENROUTER_DEFAULT_MODEL=openrouter/free

# Telegram Bot (required for Telegram mode)
TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here
TELEGRAM_OWNER_ID=your_telegram_user_id_here

# Firecrawl (optional — enables web search in Ask/Plan modes)
FIRECRAWL_API_KEY=your_firecrawl_api_key_here
```

**4. Link the CLI globally:**
```bash
bun link
```

This registers the `myclaw` command globally on your system using the `bin` entry in `package.json`. You can now run it from any project directory.

---

## 💻 Usage

Navigate to any project folder and wake up the agent:

```bash
myclaw wakeup
```

You'll see the MYCLAW ASCII banner and an interactive menu:

```
  Which mode you want to proceed with?
  ● CLI
  ○ Telegram
  ○ Exit
```

### CLI Mode

Select **CLI** to enter the sub-mode selector:

```
  Choose CLI sub-mode
  ● Agent Mode     — Autonomous coding agent with diff approval
  ○ Ask Mode       — Q&A about your workspace
  ○ Plan Mode      — Step-by-step architectural planning
  ○ Back to Main Menu
```

#### Agent Mode Walkthrough

```bash
# 1. Select "Agent Mode"
# 2. Describe your task:
?  What would you like the agent to do?
>  Add a basic Express.js server with a /health endpoint to this project

# 3. Watch the agent work (tool calls stream in real time):
  ✓ list_files        {"path":".","recursive":false}
  ✓ read_file         {"path":"package.json"}
  ✓ create_file       {"path":"server.ts","content":"..."}

# 4. Review the staged diff and approve/reject each change
# 5. Changes are written to disk only after your approval
```

#### Ask Mode Walkthrough

```bash
# 1. Select "Ask Mode"
# 2. Ask a question:
?  What do you want to ask?
>  How does the agent staging system work?

# The agent reads your codebase for context, then answers in formatted Markdown.
# You can optionally save the answer to a .md file when prompted.
```

### Telegram Mode

Select **Telegram** at the main menu to start the Telegraf server locally. Then open your bot on Telegram and use:

| Command | Description |
|---|---|
| `/start` | Wake up the bot and view available commands |
| `/ask <question>` | Ask a question about the workspace (e.g. `/ask What does index.ts do?`) |
| `/agent <task>` | Assign a coding task (e.g. `/agent Add a Hello World into readme.md`) |
| `/plan <goal>` | Generate a step-by-step structural plan for a new feature |

All file changes triggered via Telegram go through the same staging and inline-keyboard diff-review flow before being written to disk.

---

## 🗂️ Project Architecture

```
myclaw/
├── index.ts                  # CLI entry point (Commander.js)
│
├── ai/
│   ├── ai.config.ts          # OpenRouter model factory
│   └── index.ts              # AI module exports
│
├── modes/
│   ├── cli.ts                # CLI sub-mode router
│   │
│   ├── agent/                # Agent Mode
│   │   ├── orchestrator.ts   # Main agent loop & user prompts
│   │   ├── agent-tools.ts    # AI tool definitions (read, write, shell…)
│   │   ├── tool-executor.ts  # Tool implementation & staging logic
│   │   ├── action-tracker.ts # In-memory staging store
│   │   ├── approval.ts       # Diff-review approval flow
│   │   ├── diff-view.ts      # Unified diff renderer
│   │   └── types.ts          # ActionLog, AgentConfig interfaces
│   │
│   ├── ask/
│   │   └── orchestrator.ts   # Ask Mode agent loop with web tools
│   │
│   └── plan/
│       ├── orchestrator.ts   # Plan Mode agent loop
│       └── web-tools.ts      # Firecrawl web search & scraping tools
│
├── telegram/
│   ├── bot.ts                # Telegraf bot initialization
│   ├── handlers.ts           # Command handlers (/ask, /agent, /plan)
│   ├── auth.ts               # isOwner security check
│   └── keyboard.ts           # Inline keyboard diff review UI
│
└── tui/
    ├── wakeup.ts             # Banner, mode selector entry point
    └── terminal-md.ts        # Markdown → terminal renderer
```

### Key Design Concepts

**`ActionTracker`** — An in-memory log of every staged mutation (create, modify, delete, shell). No I/O happens at this stage.

**`ToolExecutor`** — Implements each AI tool. Read operations execute immediately; write operations are recorded in the `ActionTracker` as pending.

**`ApprovalFlow`** — After the agent finishes, presents a color-coded diff for every pending action. User approves or rejects per-file. `applyApprovedFromTracker()` then commits only the approved changes.

**`ToolLoopAgent`** (Vercel AI SDK) — Runs the agentic loop, calling tools until the task is complete or the step limit (40 for Agent, 20 for Ask) is reached.

---

## 🤖 Available Agent Tools

The agent has access to the following tools during task execution:

| Tool | Type | Description |
|---|---|---|
| `read_file` | Read | Read any text file in the workspace |
| `list_files` | Read | List files and directories at a path |
| `search_files` | Read | Glob search with optional content filter |
| `analyze_codebase` | Read | Summarize file counts, sizes, extensions |
| `list_skills` | Read | List SKILL.md files (Cursor/Claude rules) |
| `read_skill` | Read | Read a specific SKILL.md file |
| `create_file` | **Staged** | Stage creation of a new file |
| `modify_file` | **Staged** | Stage a full-file replacement |
| `delete_file` | **Staged** | Stage deletion of a file |
| `create_folder` | **Staged** | Stage creation of a directory tree |
| `execute_shell` | **Staged** | Queue a shell command for post-approval run |
| `web_search` | Web | Search the web via Firecrawl |
| `scrape_url` | Web | Scrape and extract content from a URL |

All **Staged** tools require user approval before changes reach the filesystem.

---

## ⚙️ Configuration

The agent behavior can be tuned via the `AgentConfig` (defaults applied automatically):

```typescript
{
  codebasePath: process.cwd(),       // Root of the project being worked on
  maxFileSizeToRead: 1_048_576,      // 1 MB max per file read
  excludePatterns: [                 // Paths skipped by all file tools
    'node_modules', '.git', 'dist',
    'build', '.next', '*.log', '.env*'
  ],
  tools: {
    allowShellExecution: true,
    allowFileModification: true,
    allowFileCreation: true,
    allowFolderCreation: true,
  }
}
```

In **Ask Mode**, file modification, folder creation, and shell execution are disabled by default — the agent is read-only except for optionally saving its answer.

---

## 🗺️ Roadmap

- [x] Agent Mode — autonomous file creation, modification, deletion, shell queuing
- [x] Ask Mode — context-aware Q&A with optional markdown save
- [x] Safety-first staging and diff-review approval flow
- [ ] Plan Mode — step-by-step architectural planner with complexity scores and selective step execution
- [ ] Telegram Bot — remote agent control with inline keyboard diff reviews
- [ ] Web Search & Scraping — Firecrawl integration for live web context
- [ ] Per-file approval — approve/reject individual files in multi-file agent runs
- [ ] Session history — persist and replay past agent sessions
- [ ] Plugin system — custom tool definitions per project

---

