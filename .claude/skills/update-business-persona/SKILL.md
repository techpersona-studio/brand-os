---
name: update-business-persona
description: HITL follow-up skill — reads open questions from the synthesized Business Persona, asks them one at a time, collects answers, then updates the handoff md and HTML report.
---

# Update Business Persona

HITL follow-up after a Business Persona run. Surfaces unanswered questions from the synthesized handoff, collects client answers conversationally, then rewrites both the handoff and the HTML report.

## On trigger

1. Get the client slug from `$ARGUMENTS` if provided (e.g. `/update-business-persona techpersona-studio`). If not provided, list the folders under `outputs/` and ask the user to pick one.
2. Read `outputs/{slug}/handoff/01c-ba-handoff.md`.
3. Extract the numbered questions from the `## Client questions` section.
4. Ask them one at a time in plain language. Wait for each answer before moving to the next. Keep the phrasing natural — do not paste the question verbatim if it reads too formal.
5. After all questions are answered (or the user says "skip" / "don't know" for any), confirm: "Got all your answers — updating the report now."

## After collecting answers

Spawn a single agent with this instruction:

```
You are updating a Business Persona report with new client answers.

Read the current handoff at: outputs/{slug}/handoff/01c-ba-handoff.md
Read the current HTML report at: outputs/{slug}/deliverble/{slug}-business-persona.html
Read the report generator prompt at: prompts/01d-BP-report-generator.md

Client answers:
{answers collected above, formatted as Q: / A: pairs}

Steps:
1. Update the handoff md:
   - Promote any Recommended or Unknown fields to Confirmed where the answers provide evidence.
   - Add the answer as a new Source line under the relevant field.
   - Remove answered questions from the ## Client questions section. If all questions are answered, remove the section entirely.
   - Update the ## Readiness status if the gaps are now resolved.
   - Save the updated handoff back to outputs/{slug}/handoff/01c-ba-handoff.md using the Write tool.

2. Re-render the HTML report:
   - Follow the report generator prompt exactly.
   - Use the updated handoff as the source of truth.
   - Keep all existing metadata (client_name, prepared_by, date, report_mode).
   - Apply the same branding guide already embedded in the existing HTML.
   - Save the updated HTML to outputs/{slug}/deliverble/{slug}-business-persona.html using the Write tool.

Return: a one-sentence summary of what changed (e.g. "Promoted 3 fields to Confirmed, removed 5 client questions, re-rendered HTML.").
```

## Rules

- Never skip the HITL loop — always ask questions before running the agent
- If the user skips a question, record it as "No answer — leave as-is"
- Do not re-run Researcher A or B — this skill only touches the handoff and the HTML
- If the handoff has no `## Client questions` section, tell the user there are no open questions and stop
