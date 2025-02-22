import { ToolArgs } from "./types"

export function getListCodeDefinitionNamesDescription(args: ToolArgs): string {
	return `## list_code_definition_names
Description: (Invaluable) List top-level code definitions (classes, functions, etc.) in a directory. (CRITICAL) Proactively gain codebase insights *before* changes. Understand high-level structure and relationships.
When to Use: (Proactive Insight - CRITICAL) Use *before* coding to grasp codebase structure, components, and relationships.
Parameters:
- path: (required) Directory path to list top-level definitions (relative to current directory).
Usage:
<list_code_definition_names>
<path>Directory path</path>
</list_code_definition_names>

Example: List definitions in current directory
<list_code_definition_names>
<path>.</path>
</list_code_definition_names>`
}
