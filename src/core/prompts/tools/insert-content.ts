import { ToolArgs } from "./types"

export function getInsertContentDescription(args: ToolArgs): string {
	return `## insert_content
Description: (Preferred) Insert new content (code, text) at specific lines without overwriting. Ideal for adding functions, imports, etc. Uses line-based insertion, maintaining file integrity and order. (CRITICAL: Use proper indentation!). Efficient for multiple insertions.
Parameters:
- path: (required) File path to insert content into.
- operations: (required) JSON array of insertion operations. Each operation:
    * start_line: (required) Line number to insert at (current line's content moves down).
    * content: (required) Content to insert. Single-line string or multi-line string with '\\n'.
Usage:
<insert_content>
<path>File path</path>
<operations>[
  {
    "start_line": 10,
    "content": "Your content"
  }
]</operations>
</insert_content>

Example: Insert function and import
<insert_content>
<path>File path</path>
<operations>[
  {
    "start_line": 1,
    "content": "import { sum } from './utils';"
  },
  {
    "start_line": 10,
    "content": "function calculateTotal(items: number[]): number {\n    return items.reduce((sum, item) => sum + item, 0);\n}"
  }
]</operations>
</insert_content>`
}
