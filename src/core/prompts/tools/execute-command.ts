import { ToolArgs } from "./types"

export function getExecuteCommandDescription(args: ToolArgs): string | undefined {
	return `## execute_command
Description: Execute a CLI command. Use for system operations or running commands to complete task steps. (CRITICAL) Tailor commands to the user's system and explain their purpose. Use appropriate chaining for the user's shell. Prefer complex CLI commands over scripts. Commands run in: **${args.cwd}**. (CRITICAL) Ensure commands are valid and NOT harmful.
Parameters:
- command: (required) The CLI command. Must be valid for the OS.
Usage:
<execute_command>
<command>Your command here</command>
</execute_command>

Example: Execute npm run dev
<execute_command>
<command>npm run dev</command>
</execute_command>`
}
