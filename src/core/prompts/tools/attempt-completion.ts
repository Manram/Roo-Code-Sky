export function getAttemptCompletionDescription(): string {
	return `## attempt_completion
Description: After each tool use, the user will respond with the result (success/failure, reasons). Once you've confirmed task completion based on these results, use this tool to present your work. You can optionally provide a CLI command for a live demo. The user might provide feedback for improvements.
IMPORTANT NOTE (CRITICAL): This tool CANNOT be used until you've confirmed from the user that any previous tool uses were successful. Failure to do so will result in code corruption and system failure. Before using this tool, you must ask yourself in <thinking></thinking> tags if you've confirmed from the user that any previous tool uses were successful. If not, then DO NOT use this tool.
Parameters:
- result: (required) The result of the task. This should be a conclusive statement, not a question or offer for further assistance.
- command: (optional) A CLI command to execute to show a live demo of the result (e.g., \`open index.html\`, \`open localhost:3000\`). DO NOT use \`echo\` or \`cat\`. Ensure the command is valid and safe.
Usage:
<attempt_completion>
<result>
Your final result description here
</result>
<command>Command to demonstrate result (optional)</command>
</attempt_completion>

Example: Requesting to attempt completion with a result and command
<attempt_completion>
<result>
I've updated the CSS
</result>
<command>open index.html</command>
</attempt_completion>`
}
