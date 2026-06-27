# Brand OS — domain glossary

Terms used in this codebase. Machine-to-machine concepts only. Not a spec.

---

## Handoff

A markdown file written by one pipeline agent, read by the next.
- Purpose: pass locked decisions only. Not for human reading.
- Format: enforced by `skills/handoff-writer/SKILL.md`.
- Max 80 lines. Key-value pairs and short bullets. No rationale, no source URLs, no confidence tags.
- Contains `## Inputs to use` — authoritative list of file paths the next agent must read.

Contrast with **Brief** (human-readable, verbose, for client review or HITL).

## Brief

The verbose, human-readable version of a step's output. Contains rationale, source citations, confidence levels.
- `01c-ba-brief.md` — Business Persona full brief. Read by report generator and HITL skill only.
- Never fed to downstream AI agents — too verbose, high token cost.

## Slim handoff

A handoff trimmed to ~35–40 lines of key-value facts. No confidence tags, no sources, no prose.
- `01c-ba-handoff.md` — slim Business Persona handoff. Read by visual strategist, SEO, analyzer, blueprint, builder.

## Skill

A `SKILL.md` file under `skills/{step-name}/` that an agent reads and follows.
- Replaces `prompts/*.md`.
- Contains full agent instructions + ends with a call to `handoff-writer/SKILL.md`.
- Static — no runtime values. Runtime values injected by workflow JS as `## Runtime context`.

## Runtime context

A small block injected by workflow JS at the top of each agent call:
```
## Runtime context
- clientName: [value]
- slug: [value]
- today: [value]
- clientDir: [path]
```
Agent reads this first, then reads its SKILL.md.

## Pipeline

Sequential chain of agents. Each reads its handoff from disk, executes, writes its handoff to disk.
No data passes through workflow context between steps — all state lives in files.

## Token stacking

Anti-pattern: one agent loading multiple large files (full branding guide + verbose persona + analysis + SEO brief) in a single call. Main token burn source. Fixed by slim handoffs and restricting each step to only its required inputs.

## Pilot

Phase 1 of the migration: `01c` + `05` + `06a` skills only. Validates the new format before full migration.
Pass criteria: blueprint ≤100 lines; persona handoff ≤40 lines; website output quality equivalent to v1.
