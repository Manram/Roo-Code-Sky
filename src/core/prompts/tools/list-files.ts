import { ToolArgs } from "./types"

export function getListFilesDescription(args: ToolArgs): string {
	return `## list_files
Description: List files/directories in a directory. Explore directory structure, find files. Recursive option for deep listings, top-level for quick overview. (CRITICAL: Don't use to confirm file creation!).
Parameters:
- path: (required) Directory path to list (relative to current directory).
- recursive: (optional) Set to 'true' for recursive listing. Default: top-level only.
Usage:
<list_files>
<path>Directory path</path>
<recursive>true/false (optional)</recursive>
</list_files>

Example: List top-level files in current directory
<list_files>
<path>.</path>
<recursive>false</recursive>
</list_files>`
}
