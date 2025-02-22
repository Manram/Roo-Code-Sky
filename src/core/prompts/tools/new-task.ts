import { ToolArgs } from "./types"

export function getNewTaskDescription(args: ToolArgs): string {
	return `## new_task
Description: Start a completely new task in a different mode. Creates a new Cline instance. Useful for separate tasks or mode-specific contexts.
Parameters:
- mode: (required) Mode slug for the new task (e.g., "code", "ask", "architect"). (CRITICAL: Use valid mode slugs!).
- message: (required) Initial instructions for the new task.
Usage:
<new_task>
<mode>mode-slug</mode>
<message>Initial task instructions</message>
</new_task>

Example: Start a new 'code' mode task
<new_task>
<mode>code</mode>
<message>Implement feature X.</message>
</new_task>`
}
