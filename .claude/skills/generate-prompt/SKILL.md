---
name: generate-prompt
description: Use when the user pastes rough client notes, a brain dump, copied LinkedIn text, or any unstructured input and wants it cleaned up into a structured prompt ready to feed into generate-business-persona.
---

# Generate Prompt

Takes messy free-text client input and outputs a clean, structured prompt ready to hand to the `generate-business-persona` skill.

## When to use

- Rough notes: "my client does landscaping in boston, her name is maria, website is greenthumb.com she does lawns and also like hardscaping and snow"
- Copy-pasted LinkedIn bio or About page text
- Voice-to-text or quick brain dump
- Any input where clientName or clientWebsite might be buried or unclear

## What to do

1. Read the user's raw input carefully
2. Extract and infer the following fields:
   - `clientName` — the business name (required; ask if truly missing)
   - `clientWebsite` — the URL (required; ask if truly missing)
   - `location` — city/region + whether they serve locally or online
   - `industry` — category in plain language
   - `services` — what they actually do for clients, specific over generic
   - `clientNotes` — founder details, brand personality, target clients, anything that doesn't fit the above fields
3. Output a clean structured block in this exact format:

```
Client name: [value]
Website: [value]
Location: [value]
Industry: [value]
Services: [value]
Notes: [value]
```

4. Below the block, add one line:

> Ready to run? Say "yes" and I'll kick off the Business Persona pipeline.

## On confirmation

When the user says "yes" (or any affirmative), call the workflow directly — do NOT invoke the `generate-business-persona` skill:

```js
Workflow({ name: "generate-business-persona", args: {
  clientName: "...",
  clientWebsite: "...",
  clientNotes: "...",
  location: "...",
  industry: "...",
  services: "..."
}})
```

Map the structured block fields to args exactly. Omit any field that was marked "unknown" or left blank.

## Rules

- Always show the structured block first — never run the workflow without confirmation
- If clientName or clientWebsite are missing and cannot be inferred, ask before outputting anything
- Keep services specific: "custom wedding cakes and corporate catering" beats "food services"
- Keep notes honest: capture what's distinctive about the founder or brand, not generic filler
- Do not invent details — if something is unclear, mark it as "unknown" rather than guess
- Sentence case throughout, no jargon
