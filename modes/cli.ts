import chalk from "chalk";
import { select, isCancel } from "@clack/prompts";
import { runAgentMode } from "./agent/orchestrator";
export async function runCliMode() {
    while (true) {
        const mode = await select({
            message: "Choose CLI sub-mode",
            options: [
                { value: "agent", label: "Agent Mode" },
                { value: "plan", label: "Plan Mode" },
                { value: "ask", label: "Ask Mode" },
                { value: "back", label: "Back to Main Menu" }
            ]
        });

        if (isCancel(mode)) {
            process.exit(0);
        }

        if (mode === "back") return;

        switch (mode) {
            case "agent":
                await runAgentMode()
                break;
            case "plan":
                console.log(chalk.green("-> Starting Plan Mode..."));
                break;
            case "ask":
                console.log(chalk.green("-> Starting Ask Mode..."));
                break;
            default:
                console.log(chalk.yellow("\n That Mode is not implemeted yet.\n"));
        }
    }
}