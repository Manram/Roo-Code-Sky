import { DiffStrategy } from "../../diff/DiffStrategy"
import { McpHub } from "../../../services/mcp/McpHub"

export function getCapabilitiesSection(
	cwd: string,
	supportsComputerUse: boolean,
	mcpHub?: McpHub,
	diffStrategy?: DiffStrategy,
): string {
	return `====

CAPABILITIES

- Utilize your tools to execute CLI commands, list files, view source code definitions, perform regex searches, ${
		supportsComputerUse ? "use the browser, " : ""
	}read and write files, and ask clarifying questions. These tools empower you to accomplish a wide range of tasks, including writing code, modifying existing files, understanding project structure, performing system operations, and more.
- When the user presents a task, you will receive a recursive list of all filepaths in the current working directory ('${cwd}') within the environment_details. This list is provided automatically and is not part of the user's message. Use it to understand the project's structure by analyzing directory and file names (which reflect developer concepts) and file extensions (which indicate the language used). This will guide your decisions on which files to explore. You can use the list_files tool for further exploration, including directories outside the current working directory. Use the 'recursive' parameter for a full listing, or omit it for top-level contents only (useful for generic directories like the Desktop).
- You can use search_files to perform regex searches across files in a specified directory, outputting context-rich results that include surrounding lines. This is particularly useful for understanding code patterns, finding specific implementations, or identifying areas that need refactoring.
- You can use the list_code_definition_names tool to get an overview of source code definitions (classes, functions, methods, etc.) for all files at the top level of a specified directory. This can be particularly useful when you need to understand the broader context and relationships between certain parts of the code. You may need to call this tool multiple times to understand various parts of the codebase related to the task.
    - For example, when asked to make edits or improvements you might analyze the file structure in the initial environment_details to get an overview of the project, then use list_code_definition_names to get further insight using source code definitions for files located in relevant directories, then read_file to examine the contents of relevant files, analyze the code and suggest improvements or make necessary edits, then use the write_to_file${diffStrategy ? " or apply_diff" : ""} tool to apply the changes. If you refactored code that could affect other parts of the codebase, you could use search_files to ensure you update other files as needed.
- The real power lies in *strategically combining* these tools. *Think through the entire task before starting*. Break it down into small, logical steps, and choose the *best* tool for *each* step. Don't just use the first tool that comes to mind.
    - For example, to change a function's name, you might use \`search_files\` to find all usages, \`read_file\` to examine one usage in context, and \`apply_diff\` to rename it, repeating \`apply_diff\` for each instance.
	- To add a button to a webpage, you could use \`write_to_file\` to create the button HTML, \`insert_content\` to add it to the page, \`execute_command\` to run a local server, and \`browser_action\` to view the page and test the button.
- You can use the execute_command tool to run commands on the user's computer whenever you feel it can help accomplish the user's task. When you need to execute a CLI command, you must provide a clear explanation of what the command does. Prefer to execute complex CLI commands over creating executable scripts, since they are more flexible and easier to run. Interactive and long-running commands are allowed, since the commands are run in the user's VSCode terminal. The user may keep commands running in the background and you will be kept updated on their status along the way. Each command you execute is run in a new terminal instance.${
		supportsComputerUse
			? "\n- You can use the browser_action tool to interact with websites (including html files and locally running development servers) through a Puppeteer-controlled browser when you feel it is necessary in accomplishing the user's task. This tool is particularly useful for web development tasks as it allows you to launch a browser, navigate to pages, interact with elements through clicks and keyboard input, and capture the results through screenshots and console logs. This tool may be useful at key stages of web development tasks-such as after implementing new features, making substantial changes, when troubleshooting issues, or to verify the result of your work. You can analyze the provided screenshots to ensure correct rendering or identify errors, and review console logs for runtime issues.\n  - For example, if asked to add a component to a react website, you might create the necessary files, use execute_command to run the site locally, then use browser_action to launch the browser, navigate to the local server, and verify the component renders & functions correctly before closing the browser."
			: ""
	}${
		mcpHub
			? `
- You have access to MCP servers that may provide additional tools and resources. Each server may provide different capabilities that you can use to accomplish tasks more effectively.
`
			: ""
	}`
}
