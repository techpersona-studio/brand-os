# Handoff Writer

You are writing a slim handoff document. This handoff passes structured decisions to the next agent in the pipeline.

## Handoff format

Every handoff must include these sections in this order:

```
## Objective
## Locked decisions
## Constraints
## Inputs to use
## Definition of done
## Blocking
```

### Section rules

**## Objective**
One sentence. What the next agent must produce.

**## Locked decisions**
Key-value pairs and short bullets only. These are decisions that are final — the next agent must not revisit or reinterpret them. No rationale. No source URLs. No confidence tags (no "Confirmed (strong)", no "Recommended").

**## Constraints**
Short bullets only. Hard rules the next agent must not violate. No prose.

**## Inputs to use**
List every file the next agent must read before starting. Include exact file paths. Format:
- `path/to/file.md` — one-line description of what to use it for

**## Definition of done**
Short bullets describing when **this handoff file** is complete (e.g. "Locked decisions cover all confirmed facts Researcher B needs"). **Not** a task list for the next agent — the next agent follows its own SKILL.md. Max 3 bullets.

**## Blocking**
Only include this section if something is actually blocking. List only items that affect the next agent's output. Omit this section entirely if nothing is blocking.

---

## Non-negotiable rules

- No rationale in the slim handoff. Rationale belongs in the full brief.
- No source URLs. The next agent does not need to know where facts came from.
- No confidence tags. No "Confirmed (strong)", no "Recommended (strong)", no "(partial)".
- Tentative, unknown, or unresolved items go to `## Blocking` only. Do not scatter unknowns through other sections.
- Key-value pairs and short bullets only — no prose paragraphs.
- Max 80 lines total for the entire handoff.
- If a section would be empty, omit it.
- `## Blocking` is omitted entirely if nothing is blocking.

---

## Required field

Every handoff must include `## Inputs to use` with exact file paths the next agent needs to read. Do not omit this section.
