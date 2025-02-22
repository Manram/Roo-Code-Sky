import { ToolArgs } from "./types"

export function getUseMcpToolDescription(args: ToolArgs): string | undefined {
	if (!args.mcpHub) {
		return undefined
	}
	return `## use_mcp_tool
Description: Use a tool from a connected MCP server. Servers offer tools with schemas for input parameters.
Parameters:
- server_name: (required) MCP server name providing the tool.
- tool_name: (required) Tool name to execute.
- arguments: (required) JSON object of tool input parameters. (CRITICAL: MUST follow tool's input schema!).
Usage:
<use_mcp_tool>
<server_name>Server name</server_name>
<tool_name>Tool name</tool_name>
<arguments>
{
  "param1": "value1",
  "param2": "value2"
}
</arguments>
</use_mcp_tool>

Example: Use 'get_forecast' tool from 'weather-server'
<use_mcp_tool>
<server_name>weather-server</server_name>
<tool_name>get_forecast</tool_name>
<arguments>
{
  "city": "San Francisco",
  "days": 5
}
</arguments>
</use_mcp_tool>`
}
