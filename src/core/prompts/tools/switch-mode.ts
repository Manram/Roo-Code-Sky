export function getSwitchModeDescription(): string {
	return `## switch_mode
Description: Switch to a different mode (e.g., code, ask, architect). Modes can request switches when needed. (CRITICAL: User must approve switch!).
Parameters:
- mode_slug: (required) Mode slug to switch to (e.g., "code"). (CRITICAL: Use valid mode slugs!).
- reason: (optional) Why switch modes?
Usage:
<switch_mode>
<mode_slug>Mode slug</mode_slug>
<reason>Switch reason</reason>
</switch_mode>

Example: Switch to 'code' mode for code changes
<switch_mode>
<mode_slug>code</mode_slug>
<reason>Need code changes</reason>
</switch_mode>`
}
