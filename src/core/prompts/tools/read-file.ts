import { ToolArgs } from "./types"

export function getReadFileDescription(args: ToolArgs): string {
	return `## read_file
Description: (Proactive Analysis - CRITICAL) Read file content for analysis (code, text, configs). Line numbers aid diffs/discussion. Extracts text from PDF/DOCX. (CRITICAL: May not be suitable for binary files).
Parameters:
- path: (required) File path to read (relative to current directory).
Usage:
<read_file>
<path>File path</path>
</read_file>

Example: Read frontend config to understand API endpoints
<read_file>
<path>frontend-config.json</path>
</read_file>`
}
