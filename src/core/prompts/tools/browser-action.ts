import { ToolArgs } from "./types"

export function getBrowserActionDescription(args: ToolArgs): string | undefined {
	if (!args.supportsComputerUse) {
		return undefined
	}
	return `## browser_action
Description: Interact with a Puppeteer-controlled browser. You'll receive a screenshot and console logs after each action (except \`close\`). Perform only one action per message, and wait for the response before the next.
- (CRITICAL) Actions MUST start with \`launch\` and end with \`close\`. For new URLs, close then re-launch.
- (CRITICAL) While the browser is active, ONLY use \`browser_action\`. Use other tools AFTER closing.
- Browser resolution: **${args.browserViewportSize}** pixels. Click coordinates MUST be within this.
- (CRITICAL) Before clicking, use the screenshot to find the element's center coordinates.
Parameters:
- action: (required) Action:
    * launch: Start browser at URL. (CRITICAL: MUST be the first action).
        - Use \`url\`: Provide the URL (e.g., http://localhost:3000/page).
    * click: Click x,y coordinates.
        - Use \`coordinate\`: Specify location.
        - (CRITICAL) Click the element's CENTER based on screenshot coordinates.
    * type: Type text. Use after clicking a text field.
        - Use \`text\`: Provide string.
    * scroll_down: Scroll down one page height.
    * scroll_up: Scroll up one page height.
    * close: Close browser. (CRITICAL: MUST be the final action).
        - Example: \`<action>close</action>\`
- url: (optional) URL for \`launch\`.
    * Example: <url>https://example.com</url>
- coordinate: (optional) X, Y for \`click\`. MUST be within **${args.browserViewportSize}**.
    * Example: <coordinate>450,300</coordinate>
- text: (optional) Text for \`type\`.
    * Example: <text>Hello, world!</text>
Usage:
<browser_action>
<action>Action (launch, click, type, scroll_down, scroll_up, close)</action>
<url>URL (optional)</url>
<coordinate>x,y (optional)</coordinate>
<text>Text (optional)</text>
</browser_action>

Example: Requesting to launch a browser at https://example.com
<browser_action>
<action>launch</action>
<url>https://example.com</url>
</browser_action>

Example: Requesting to click on the element at coordinates 450,300
<browser_action>
<action>click</action>
<coordinate>450,300</coordinate>
</browser_action>`
}
