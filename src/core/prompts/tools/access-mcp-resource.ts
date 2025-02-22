import { ToolArgs } from "./types"

export function getAccessMcpResourceDescription(args: ToolArgs): string | undefined {
	if (!args.mcpHub) {
		return undefined
	}
	return `## access_mcp_resource
Description: Use this tool to **proactively retrieve data** from connected MCP servers to gain context and solve problems. Resources are data sources like files, API responses, or system info. Ensure accurate server and URI for successful access. (CRITICAL: Verify server_name and uri are correct!)
Parameters:
- server_name: (required) The name of the MCP server providing the resource
- uri: (required) The URI identifying the specific resource to access
Usage:
<access_mcp_resource>
<server_name>server name here</server_name>
<uri>resource URI here</uri>
</access_mcp_resource>

Example: Accessing weather data from weather-server
<access_mcp_resource>
<server_name>weather-server</server_name>
<uri>weather://san-francisco/current</uri>
</access_mcp_resource>`
}
