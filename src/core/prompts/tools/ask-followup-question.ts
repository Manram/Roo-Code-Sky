export function getAskFollowupQuestionDescription(): string {
	return `## ask_followup_question
Description: Ask the user a specific question to gather necessary information for completing the task. Use this when facing ambiguities, needing clarification, or requiring more details. This enables interactive problem-solving. Be concise and avoid excessive questioning.
Parameters:
- question: (required) The question to ask the user. This should be a clear, specific question that addresses the information you need.
Usage:
<ask_followup_question>
<question>Your question here</question>
</ask_followup_question>

Example: Requesting to ask the user for the path to the frontend-config.json file
<ask_followup_question>
<question>What is the path to the frontend-config.json file?</question>
</ask_followup_question>`
}
