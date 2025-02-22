import { ToolArgs } from "./types"

export function getSearchFilesDescription(args: ToolArgs): string {
	return `## search_files
Description: Regex search across files in a directory (context-rich results). Find code patterns, function usages, configs, etc. Helpful for codebase understanding and locating modification points.
When to Use: (Codebase Insight - CRITICAL) Find info across multiple files (patterns, usages, configs). Understand codebase, locate modification areas.
Parameters:
- path: (required) Directory path to search (recursive).
- regex: (required) Regex pattern (Rust syntax). (CRITICAL: Use Rust regex syntax!).
- file_pattern: (optional) Glob pattern to filter files (e.g., '*.ts'). Default: all files (*).
Usage:
<search_files>
<path>Directory path</path>
<regex>Regex pattern</regex>
<file_pattern>File pattern (optional)</file_pattern>
</search_files>

Example: Search for all .ts files in current directory
<search_files>
<path>.</path>
<regex>.*</regex>
<file_pattern>*.ts</file_pattern>
</search_files>`
}
