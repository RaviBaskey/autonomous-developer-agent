#!/usr/bin/env bun

import { Command } from "commander";
import { runWakeup } from "./tui/wakeup";

import { config } from "dotenv";
import path from "node:path";
config({ path: path.join(__dirname, ".env") });


const program = new Command();
program
    .name("myclaw")
    .description("myclaw-cli")
    .version('0.0.1');

program
    .command("wakeup")
    .description("show the banner and pick cli or telegram mode")
    .action(
        async () => {
            await runWakeup()
        }
    );

await program.parseAsync(process.argv)