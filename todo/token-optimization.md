# Token optimization — Brand OS pipeline

**Goal:** Cut per-run token cost without sacrificing output quality.
**Root cause:** Agents load large files (full branding guide, verbose handoffs) when they only need key decisions.
**Approach:** Convert prompts → skills; enforce compact machine-to-machine handoff format; split human-readable brief from AI-fuel handoff.

---

## Decisions locked

| # | Decision |
|---|---|
| D1 | Handoffs = machine-to-machine only. Key locked decisions. No rationale, no source URLs, no confidence tags. |
| D2 | `prompts/` replaced by `skills/`. Each step is a `SKILL.md` containing the full agent instructions. |
| D3 | Each SKILL.md ends with: "Read `skills/handoff-writer/SKILL.md` and follow it to write your handoff." Single source of truth for handoff format. |
| D4 | Handoff format: 6 sections — Objective, Locked decisions, Constraints, Inputs to use, Definition of done, Blocking. Max ~80 lines. |
| D5 | `## Inputs to use` in the handoff is the single source of input deps. Workflow JS no longer hardcodes file paths per step — reads the handoff to get the input list. |
| D6 | Workflow JS injects a small `## Runtime context` block (clientName, slug, today, paths) at the top of each agent call. SKILL.md stays static. |
| D7 | Pilot first: build `handoff-writer` + migrate `01c` + `05` + `06a`. Validate before full migration. |
| D8 | `01c-BP-synthesizer` writes TWO files: `01c-ba-handoff.md` (slim, AI fuel) + `01c-ba-brief.md` (full verbose, for report generator + HITL). |
| D9 | `prompts/` → renamed to `prompts-archive/` after pilot validation. Not deleted — kept as reference. |

---

## Expected token savings

Notes:
- Step 05 already reads `02b-visual-strategy-handoff.md` (8KB slim) in practice — NOT the full branding guide. `pipeline-io.md` is wrong on this; needs updating.
- Step 06a MUST read full branding guide (41KB) — CSS tokens, typography, color system, components all required to build the website. This is correct and stays.
- Step 06a savings come entirely from slimming the blueprint handoff (550 lines → ~100 lines).

| Step | Before | After | Delta |
|------|--------|-------|-------|
| 01c synthesizer | reads ~30KB researcher outputs | unchanged — full research still needed | 0% input |
| 01c outputs | writes 22KB handoff | writes 4KB slim handoff + 22KB brief (brief only for report gen) | −80% for downstream |
| 02a visual strategist | reads 22KB persona | reads 4KB slim persona | −80% persona input |
| 03 SEO brief | reads 22KB persona + 8KB visual handoff | reads 4KB slim persona + 8KB visual handoff | −60% persona input |
| 04a web analyzer | reads 22KB persona + 8KB visual handoff | reads 4KB slim persona + 8KB visual handoff | −60% persona input |
| 05 blueprint | reads 22KB persona + 8KB visual handoff + 12KB analysis | reads 4KB slim persona + 8KB visual handoff + 6KB slim analysis | −70% persona input |
| 05 output | writes 35KB blueprint | writes ~8KB slim blueprint | −77% blueprint |
| 06a builder | reads 35KB blueprint + 41KB branding guide | reads 8KB slim blueprint + 41KB branding guide | −55% total input |
| **Total per full run** | **~230K tokens input** | **~100K tokens input** | **~−57%** |

---

## New file structure

```
skills/
  handoff-writer/
    SKILL.md                      ← shared handoff format rules
  01a-researcher-a/
    SKILL.md
  01b-researcher-b/
    SKILL.md
  01c-BP-synthesizer/
    SKILL.md                      ← writes BOTH slim handoff + full brief
  01d-BP-report-generator/
    SKILL.md                      ← reads 01c-ba-brief.md (not slim handoff)
  02a-visual-strategist/
    SKILL.md
  02b-branding-guide-generator/
    SKILL.md
  03-seo-brief/
    SKILL.md
  04a-web-analyzer/
    SKILL.md
  04b-web-report-generator/
    SKILL.md
  05-web-blueprint-builder/
    SKILL.md
  06a-web-builder/
    SKILL.md
  util-vi-voice-adapter/
    SKILL.md
  util-vi-translator/
    SKILL.md

outputs/{slug}/handoff/
  01c-ba-handoff.md               ← NEW: slim (~35 lines), AI fuel only
  01c-ba-brief.md                 ← NEW: verbose (current format), for report gen + HITL
  02b-visual-strategy-handoff.md  ← keep, already slim enough (~8KB)
  seo-brief-handoff.md            ← slim during full migration
  web-analysis-handoff.md         ← slim during full migration (~60 lines target)
  web-blueprint-handoff.md        ← slim (~100 lines target, down from 550)
```

---

## Handoff format (enforced by handoff-writer skill)

```markdown
# [Step name] Handoff

## Objective
- [what the next agent must do — one line]

## Locked decisions
- key: value
- key: value

## Constraints
- [must-have / hard no / technical constraint]

## Inputs to use
- [file path or URL the next agent must read]

## Definition of done
- [what acceptable output looks like — 2–3 bullets max]

## Blocking
- [only if missing info prevents execution — omit section if nothing is blocking]
```

Rules:
- No rationale. No `Confirmed (strong)`. No source URLs.
- No full sentences — key: value pairs or short bullets only.
- Max 80 lines total.
- Tentative items go to `## Blocking`, not inline in locked decisions.
- Every handoff must have `## Inputs to use` listing exact file paths the next agent needs.

---

## Slim 01c-ba-handoff format

The Business Persona handoff is read by 5 downstream agents. Slim format target: ~35–40 lines.

```
client: [name]
industry: [one-line]
service_area: [list]
primary_offer: [one-line, key program facts only]
price: [if known]
audience: [one-line]
buyer_trigger: [one-line]
trust_burden: [level + key proof available]
main_objection: [one-line]
cta: [label + destination]
proof_available: [list]
voice: [3–5 rules, fragments ok]
anti_voice: [3–5 banned patterns]
messaging_patterns:
  - [pattern 1]
  - [pattern 2]
visual_cues: [3–5 bullets]
blocking:
  - [missing item that affects downstream copy]
```

---

## Phase 1 — Pilot (implement first)

### P1.1 — Create `handoff-writer` skill
- File: `skills/handoff-writer/SKILL.md`
- Content: handoff format rules (6-section template above), size limits, what to include/exclude
- No client-specific content — pure format enforcement

### P1.2 — Migrate `01c-BP-synthesizer` → skill
- File: `skills/01c-BP-synthesizer/SKILL.md`
- Port full prompt content from `prompts/01c-BP-synthesizer.md`
- Add: write two outputs — `01c-ba-handoff.md` (slim key-value format) + `01c-ba-brief.md` (current verbose format)
- End with: "Read `skills/handoff-writer/SKILL.md` to write your handoff."
- Update `generate-business-persona.js`: synthesizer agent call points to new skill; report generator reads `01c-ba-brief.md` not handoff

### P1.3 — Migrate `05-web-blueprint-builder` → skill
- File: `skills/05-web-blueprint-builder/SKILL.md`
- Port full prompt content from `prompts/05-web-blueprint-builder.md`
- Inputs: `01c-ba-handoff.md` (slim) + `02b-visual-strategy-handoff.md` (already slim, already used in practice) + `seo-brief-handoff.md` + `web-analysis-handoff.md`
- Fix: update `pipeline-io.md` to correctly document that step 05 reads `02b` handoff, NOT full branding guide
- Output target: `web-blueprint-handoff.md` max 150 lines
- Format: page header (url, intent, cta, hard constraints) + ordered section list (name + one-line role only)
- Builder figures out design execution from branding guide — blueprint does NOT repeat font names, colors, component styles
- Only include section constraints the builder cannot derive elsewhere (proof placement, schema requirements, content accuracy flags, CTA destinations)
- End with: "Read `skills/handoff-writer/SKILL.md` to write your handoff."

### P1.4 — Migrate `06a-web-builder` → skill
- File: `skills/06a-web-builder/SKILL.md`
- Port full prompt content from `prompts/06a-web-builder.md`
- Inputs: blueprint handoff (required, slim) + full branding guide (required — CSS tokens, typography, color system, components all needed for actual build) + slim persona (optional, messaging only)
- Full branding guide stays — 06a cannot build the website without it. Savings come from slim blueprint only.
- Note: 06a token savings are entirely from blueprint size reduction (35KB → ~8KB)

### P1.5 — Validate pilot
- Rerun steps 01c → 05 → 06a on young-group data
- Compare output quality to v1 outputs
- Measure: handoff line counts, estimated token counts
- Pass criteria: blueprint ≤100 lines; persona handoff ≤40 lines; website output quality equivalent

### P1.6 — Archive prompts
- Rename `prompts/` → `prompts-archive/` after pilot passes
- Update `docs/pipeline-io.md` and `README.md` to reference `skills/`

---

## Phase 2 — Full migration (after pilot validated)

Convert remaining prompts. Order: highest token burn first.

| Priority | Prompt | Why |
|----------|--------|-----|
| 1 | `02a-visual-strategist` | reads 22KB persona; writes 41KB guide |
| 2 | `02b-branding-guide-generator` | reads persona + handoff; writes 41KB guide |
| 3 | `04a-web-analyzer` | reads persona + branding guide + SEO handoff |
| 4 | `03-seo-brief` | reads persona + visual handoff + competitors |
| 5 | `04b-web-report-generator` | reads analysis + branding guide |
| 6 | `01a-researcher-a` | standalone, lowest coupling |
| 7 | `01b-researcher-b` | reads researcher A output |
| 8 | `01d-BP-report-generator` | reads brief (verbose fine here) |
| 9 | `util-vi-*` | low frequency, defer last |

Each migration: port prompt → SKILL.md, add handoff-writer reference at end, verify input list matches `## Inputs to use`.

---

## Workflow JS changes

### `generate-business-persona.js`
- Researcher A, B calls: point to skills (no content change, just path)
- Synthesizer call: agent reads skill, writes TWO files
- Report generator call: reads `01c-ba-brief.md` (not handoff)

### `brand-vision.js`
- Visual strategist: point to skill
- Branding guide generator: point to skill; input = slim persona + visual handoff (not full guide as input to generator)

---

## Testing approach

For each migrated skill, run on one of:
- `young-group` — most complete outputs, good baseline
- `techpersona-studio` — smaller, faster to validate

Compare:
- Line count of handoff (target vs. actual)
- Presence of required fields in slim handoff
- Quality of downstream output (does builder produce equivalent website?)

---

## Additional optimizations (add to Phase 2 skills)

### O1 — Remove web-analysis-handoff from 06a inputs
Blueprint distills analysis → builder reading analysis separately is redundant.
- 06a required inputs: blueprint handoff (required) + branding guide (required) only
- Optional fallback: slim persona for messaging nuance only
- Remove: web-analysis-handoff, SEO handoff as default 06a reads

### O2 — Remove `02b` visual strategy handoff from step 03 (SEO brief) inputs
SEO brief = search intent + page architecture. Does not need color system, typography, layout rhythm.
- Step 03 reads: slim persona (01c-ba-handoff) + competitors handoff (optional)
- Remove: 02b-visual-strategy-handoff from step 03 inputs

### O3 — Slim web-analysis-handoff to ~60 lines
Currently 164 lines, 12KB. Only read by step 05.
- Slim format: current site verdict (1 line), intervention level (1 line), keep list (bullets), remove list (bullets), fix list (bullets), page architecture signal (1 line)
- No rationale, no "Priority: critical" labels — those go in the blueprint
- Add to 04a skill in Phase 2

### O4 — Blueprint must embed SEO rules so 06a never reads SEO handoff
Page-level SEO requirements (slug, schema type, H1 theme, internal links) must be in the blueprint per-page block.
- Blueprint format: each page block includes `schema:` and `seo-note:` fields
- If embedded correctly, 06a drops SEO handoff entirely

---

## Non-goals (explicitly out of scope)

- Reducing prompt size — `06a-web-builder.md` is 23KB; prompt trimming is a separate pass
- Changing output quality — website HTML, branding guide quality must stay equivalent
- Automating the pilot validation — manual review of outputs is required
