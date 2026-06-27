---
name: update-business-persona
description: HITL follow-up skill — reads open questions from the synthesized Business Persona brief, asks them one at a time, collects answers, then updates the brief, slim handoff, and HTML report.
---

# Update Business Persona

HITL follow-up after a Business Persona run. Surfaces unanswered questions from the full brief, collects client answers conversationally, then updates both markdown files and re-runs the report script.

## On trigger

1. Get the client slug from `$ARGUMENTS` if provided (e.g. `/update-business-persona quan-pho`). If not provided, list the folders under `outputs/` and ask the user to pick one.
2. Read `outputs/{slug}/handoff/01c-ba-brief.md` (full brief — source of truth for questions and field detail).
3. Read `outputs/{slug}/handoff/01c-ba-handoff.md` (slim key-value — update blocking fields here too).
4. Extract numbered questions from `## Client questions` in the **brief**.
5. Ask them one at a time in plain language. Wait for each answer before moving to the next.
6. After all questions are answered (or the user says "skip" / "don't know"), confirm: "Got all your answers — updating the report now."

## After collecting answers

Update both files, then re-run the report script:

1. **`01c-ba-brief.md`** — promote fields where answers provide evidence; update `## Readiness`; remove answered questions from `## Client questions`; refresh `## Executive summary` if readiness changed materially.
2. **`01c-ba-handoff.md`** — sync key-value fields (`blocking`, `price`, `cta`, etc.) with brief changes. Keep key-value format only — no Executive summary here.
3. **Re-render HTML:**
   `node script/generate-bp-report.js {slug} "{clientName}"`

Do not re-run Researcher A, B, or Synthesizer unless the user explicitly asks.

## Rules

- Never skip the HITL loop — always ask questions before updating files
- If the user skips a question, record it as "No answer — leave as-is"
- Client questions live in the **brief**, not the slim handoff
- Executive summary and Key points stay in the **brief** only
- If the brief has no `## Client questions` section, tell the user there are no open questions and stop
