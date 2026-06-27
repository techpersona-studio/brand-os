# Brand OS

A full client-to-website pipeline that turns raw client notes into a production-ready website. Each step runs as an agent skill that produces client-facing deliverables and slim machine-to-machine handoffs for the next step.

See `docs/pipeline-io.md` for every step's exact inputs, outputs, and file paths.

---

## Pipeline overview

```
Client notes + website URL
        │
        ▼
  [Step 0]  Setup
            Cleans unstructured input into skill args
            → HITL checkpoint
        │
        ▼
  [Step 1]  Business Persona
            Researcher A → Researcher B → Synthesizer → Report Generator
            → HITL checkpoint after each step
            Deliverable: Business Persona Brief (HTML)
            Handoffs: 01c-ba-handoff.md (slim) + 01c-ba-brief.md (full)
        │
        ▼
  [Step 2]  Branding Visual Guide
            Visual Strategist → Branding Guide Generator
            → HITL checkpoint after each step
            Deliverable: Branding Visual Guide (MD + HTML)
            Handoff: 02b-visual-strategy-handoff.md (slim)
        │
        ▼
  [Step 3]  SEO Foundation Brief
            Skill: .claude/skills/03-seo-brief/SKILL.md
            → HITL checkpoint
            Deliverable: SEO Foundation Brief (page architecture + search intents)
            Handoff: seo-brief-handoff.md (slim)
        │
        ▼
  [Step 4]  Website Analysis
            Skills: .claude/skills/04a-web-analyzer/SKILL.md → 04b-web-report-generator
            → HITL checkpoint after each step
            Deliverable: Website Analysis Report (HTML)
            Handoff: web-analysis-handoff.md (slim, ≤80 lines)
        │
        ▼
  [Step 5]  Website Blueprint
            Skill: .claude/skills/05-web-blueprint-builder/SKILL.md
            → HITL checkpoint
            Deliverable: builder-ready Website Blueprint (≤150 lines)
            Handoff: web-blueprint-handoff.md
        │
        ▼
  [Step 6]  Website Build
            Skill: .claude/skills/06a-web-builder/SKILL.md
            → HITL checkpoint
            Deliverable: production website (HTML)
        │
        ▼
  [Optional]  Vietnamese translation
              Skills: util-vi-voice-adapter → util-vi-translator
              Adapts all deliverables for Vietnamese-speaking clients
```

---

## How to run

Each step is a skill call. Pass runtime context inline. Human reviews output before proceeding.

## Client identification and inputs

Each step reads the previous step's files from disk once `{slug}` is known. Skills do not auto-detect which client to use unless you say it in chat or @ a file.

Only `update-business-persona` explicitly asks you to pick a client: it uses `$ARGUMENTS` slug, or lists `outputs/` and asks you to choose.


| Step                     | You provide                      | Auto-reads from prev step                |
| ------------------------ | -------------------------------- | ---------------------------------------- |
| `00-setup`               | `clientName` (→ slug)            | —                                        |
| `01a` / `01b`            | website, notes (runtime)         | —                                        |
| `01c` synthesizer        | slug implied                     | `01b` output                             |
| BP report script         | slug + clientName                | `01c` handoff                            |
| `02a` visual strategist  | slug implied; optional logo/HITL | `01c-ba-handoff.md`                      |
| branding guide script    | **slug + brand name** (CLI)      | `02b-visual-strategy-handoff.md`         |
| `02b` branding guide gen | slug implied                     | scaffold + `01c` + `02b`                 |
| `03` SEO brief           | slug; optional website URL       | `01c`, competitors handoff               |
| `04a` web analyzer       | slug; **website URL**            | `01c`, `02b`, SEO handoff                |
| `05` blueprint           | slug implied                     | `01c`, `02b`, SEO, web analysis handoffs |
| `06a` web builder        | slug implied                     | blueprint, branding guide, `01c`         |


**Practical rules**

- Full pipeline in one thread: say the client once; each step infers slug from context and reads files.
- One skill in isolation: tell it the slug or @ a file under that client's folder.
- Scripts always need an explicit slug (and sometimes `--brand`, `--lang`, `--date`).

### Step 0 — Setup (once per client)

Run `.claude/skills/00-setup/SKILL.md`

- clientName: [name]
- slug: [slug] (optional — derived from clientName if not provided)

### Step 1a — Researcher A

Run `.claude/skills/01a-BP-researcher-a/SKILL.md`

- clientName: [name]
- clientWebsite: [URL]
- clientNotes: [optional]
- location: [optional]
- industry: [optional]
- services: [optional]
- assets: [optional]

→ REVIEW: outputs/{slug}/handoff/01a-researcherA-handoff.md

### Step 1b — Researcher B

Run `.claude/skills/01b-BP-researcher-b/SKILL.md`

- clientName: [name]
- clientWebsite: [URL]
(reads 01a handoff automatically)

→ REVIEW: outputs/{slug}/handoff/01b-researcherB-handoff.md + 01b-competitors-handoff.md

### Step 1c — Synthesizer

Run `.claude/skills/01c-BP-synthesizer/SKILL.md`

- clientName: [name]
- slug: [slug]
(reads 01b handoff automatically)

→ REVIEW: outputs/{slug}/handoff/01c-ba-handoff.md (slim) — check open questions
→ If open questions: run update-business-persona skill to collect client answers

### Step 1d — Report Generator (script, no AI)

`node script/generate-bp-report.js {slug} "{clientName}"`
→ OUTPUT: outputs/{slug}/deliverble/{slug}-business-persona.html

### Step 2a — Visual Strategist

Run `.claude/skills/02a-visual-strategist/SKILL.md`

- clientName: [name]
- slug: [slug]
- logoOrBrandAssets: [path or URL, optional]

→ REVIEW: outputs/{slug}/details/02a-visual-strategist-brief.md
→ HITL: check color direction, typography, layout decisions. Note any adjustments.

### Step 2b — Branding guide (hybrid: script + JSON fill + merge)

**2b-1 — Scaffold (script):**

```bash
node scripts/generate-branding-guide.js {slug} --brand "{clientName}" --lang en --date YYYY-MM-DD
# For versioned handoffs:
node scripts/generate-branding-guide.js {slug} --brand "{clientName}" --handoff outputs/{slug}/handoff/02b-visual-strategy-handoff-v2.md
```

**2b-2 — Fill JSON (skill):**

Run `.claude/skills/02b-branding-guide-generator/SKILL.md`

- Reads: fill-manifest.json + 02b handoff + 01c-ba-handoff.md
- Writes: `{slug}-branding-visual-guide.fills.json` only (do not edit HTML)

**2b-3 — Merge (script):**

```bash
node scripts/merge-branding-fills.js {slug}
```

→ REVIEW: `outputs/{slug}/deliverable/{slug}-branding-visual-guide.html`

### Step 3 — SEO Foundation Brief

Run `.claude/skills/03-seo-brief/SKILL.md`

- clientName: [name]
- slug: [slug]
- currentWebsite: [URL, optional]
- targetLocations: [optional]

→ REVIEW: outputs/{slug}/details/seo-brief.md + outputs/{slug}/handoff/seo-brief-handoff.md

### Step 4a — Web Analyzer

Run `.claude/skills/04a-web-analyzer/SKILL.md`

- clientName: [name]
- slug: [slug]
- currentWebsiteUrl: [URL]

→ REVIEW: outputs/{slug}/details/web-analysis-report.md — check intervention verdict

### Step 4b — Web Report Generator

Run `.claude/skills/04b-web-report-generator/SKILL.md`

- clientName: [name]
- slug: [slug]
- reportTitle: Website Analysis Report
- preparedBy: TechPersona Studio / Thao Phuong
- date: [today]
- reportMode: client

→ REVIEW: outputs/{slug}/deliverble/{slug}-web-analysis.html

### Step 5 — Website Blueprint

Run `.claude/skills/05-web-blueprint-builder/SKILL.md`

- clientName: [name]
- slug: [slug]
- currentWebsiteUrl: [URL, optional]

→ REVIEW: outputs/{slug}/handoff/web-blueprint-handoff.md — check page architecture and section order

### Step 6 — Website Build

Run `.claude/skills/06a-web-builder/SKILL.md`

- clientName: [name]
- slug: [slug]
- currentWebsiteUrl: [URL, optional — asset recovery only]

→ REVIEW: outputs/{slug}/website/{slug}-website.html

---

## How handoffs work

Every step writes a **slim handoff** — a compact machine-to-machine file (≤80–150 lines) with locked decisions only. No rationale, no source URLs, no confidence tags.

Steps that also produce human-readable output write a separate **brief** or **deliverable**:


| File                             | Purpose                                | Reads by                         |
| -------------------------------- | -------------------------------------- | -------------------------------- |
| `01c-ba-handoff.md`              | Slim persona — AI fuel                 | All downstream steps             |
| `01c-ba-brief.md`                | Full persona with rationale            | Report generator + HITL only     |
| `02b-visual-strategy-handoff.md` | Locked visual decisions                | Blueprint builder, SEO, analyzer |
| `seo-brief-handoff.md`           | Page architecture + schema rules       | Blueprint builder only           |
| `web-analysis-handoff.md`        | Intervention verdict + keep/remove/fix | Blueprint builder only           |
| `web-blueprint-handoff.md`       | Page architecture + section order      | Website builder only             |


The builder (`06a`) reads only: blueprint handoff + full branding guide. Nothing else.

---

## Step-by-step reference

### Step 0 — Generate Prompt

**Skill:** `.claude/skills/generate-prompt/SKILL.md`

**Inputs**

- Raw client notes, brain dump, or copied text — pasted inline, no file

**Output**

- Structured workflow args printed to chat (`clientName`, `clientWebsite`, `clientNotes`, `location`, `industry`, `services`) — no file written

---

### Step 1a — Researcher A

**Skill:** `.claude/skills/01a-BP-researcher-a/SKILL.md`

**Inputs**

- workflow args: `clientName`, `clientWebsite`, `clientNotes`, `location`, `industry`, `services`, `assets`

**Output**

- `outputs/{slug}/handoff/01a-researcherA-handoff.md` — slim: confirmed facts from client-owned sources

---

### Step 1b — Researcher B

**Skill:** `.claude/skills/01b-BP-researcher-b/SKILL.md`

**Inputs**

- workflow args (same as 1a)
- `outputs/{slug}/handoff/01a-researcherA-handoff.md` (required)

**Outputs**

- `outputs/{slug}/handoff/01b-researcherB-handoff.md` — slim validation report
- `outputs/{slug}/handoff/01b-competitors-handoff.md` — slim competitor analysis (≤80 lines)

---

### Step 1c — Synthesizer

**Skill:** `.claude/skills/01c-BP-synthesizer/SKILL.md`

**Inputs**

- `outputs/{slug}/handoff/01b-researcherB-handoff.md` (required)

**Outputs**

- `outputs/{slug}/handoff/01c-ba-handoff.md` — SLIM (~35–40 lines, key-value, no rationale) — read by all downstream steps
- `outputs/{slug}/handoff/01c-ba-brief.md` — FULL (verbose, with rationale + evidence) — read by report generator and HITL only

---

### Step 1d — Report Generator (script, no AI)

`node script/generate-bp-report.js {slug} "{clientName}"`

**Inputs**

- `outputs/{slug}/handoff/01c-ba-handoff.md` (or `01c-ba-brief.md`)
- `clientName` CLI arg

**Output**

- `outputs/{slug}/deliverble/{slug}-business-persona.html` — client-facing HTML report

---

### Step 2a — Visual Strategist

**Skill:** `.claude/skills/02a-visual-strategist/SKILL.md`

**Inputs**

- `outputs/{slug}/handoff/01c-ba-handoff.md` (required)
- logo/brand assets path or URL (optional)
- HITL answers (optional)

**Outputs**

- `outputs/{slug}/details/02a-visual-strategist-brief.md` — full decision brief (human review)
- `outputs/{slug}/handoff/02b-visual-strategy-handoff.md` — SLIM: locked visual decisions (CSS tokens, type, layout, components)

---

### Step 2b — Branding Guide Generator

**Skill:** `.claude/skills/02b-branding-guide-generator/SKILL.md`

**Inputs**

- `outputs/{slug}/handoff/01c-ba-handoff.md` (required)
- `outputs/{slug}/handoff/02b-visual-strategy-handoff.md` (required)
- client references (optional)
- existing website URL (optional)

**Outputs**

- `outputs/{slug}/deliverble/{slug}-branding-visual-guide.md`
- `outputs/{slug}/deliverble/{slug}-branding-visual-guide.html`

---

### Step 3 — SEO Foundation Brief

**Skill:** `.claude/skills/03-seo-brief/SKILL.md`

**Inputs**

- `outputs/{slug}/handoff/01c-ba-handoff.md` (required)
- `outputs/{slug}/handoff/01b-competitors-handoff.md` (optional)
- `currentWebsite`, `targetLocations` (optional)

**Outputs**

- `outputs/{slug}/details/seo-brief.md` — full brief (human review)
- `outputs/{slug}/handoff/seo-brief-handoff.md` — SLIM: required pages, schemas, keyword clusters, technical rules

---

### Step 4a — Web Analyzer

**Skill:** `.claude/skills/04a-web-analyzer/SKILL.md`

**Inputs**

- current website URL — crawled live (required)
- `outputs/{slug}/handoff/01c-ba-handoff.md` (optional)
- `outputs/{slug}/handoff/02b-visual-strategy-handoff.md` (optional)
- `outputs/{slug}/handoff/seo-brief-handoff.md` (optional)

**Outputs**

- `outputs/{slug}/details/web-analysis-report.md` — full analysis (human review)
- `outputs/{slug}/handoff/web-analysis-handoff.md` — SLIM ≤80 lines: verdict, intervention, keep/remove/fix list

---

### Step 4b — Web Report Generator

**Skill:** `.claude/skills/04b-web-report-generator/SKILL.md`

**Inputs**

- `outputs/{slug}/details/web-analysis-report.md` (required)
- `outputs/{slug}/deliverble/{slug}-branding-visual-guide.md` full guide (required)
- runtime metadata: `clientName`, `reportTitle`, `preparedBy`, `date`

**Output**

- `outputs/{slug}/deliverble/{slug}-web-analysis.html` — client-facing HTML

---

### Step 5 — Website Blueprint

**Skill:** `.claude/skills/05-web-blueprint-builder/SKILL.md`

**Inputs**

- `outputs/{slug}/handoff/web-analysis-handoff.md` (required)
- `outputs/{slug}/handoff/01c-ba-handoff.md` (required)
- `outputs/{slug}/handoff/02b-visual-strategy-handoff.md` (required)
- `outputs/{slug}/handoff/seo-brief-handoff.md` (required)
- current website URL (optional)

**Output**

- `outputs/{slug}/handoff/web-blueprint-handoff.md` — SLIM ≤150 lines: page architecture, section order, constraints per page

---

### Step 6 — Website Build

**Skill:** `.claude/skills/06a-web-builder/SKILL.md`

**Inputs**

- `outputs/{slug}/handoff/web-blueprint-handoff.md` (required)
- `outputs/{slug}/deliverble/{slug}-branding-visual-guide.md` full guide (required)
- `outputs/{slug}/handoff/01c-ba-handoff.md` (optional — messaging nuance only)

**Output**

- `outputs/{slug}/website/{slug}-website.html` — production HTML

---

### Step 7 (optional) — Vietnamese Voice Adapter

**Skill:** `.claude/skills/util-vi-voice-adapter/SKILL.md`

**Inputs**

- any English deliverable
- `clientName`, `industry`, `targetAudience` (optional context)

**Output**

- `outputs/{slug}/handoff/vi-voice-guide.md` — Vietnamese voice and tone guide

---

### Step 7b (optional) — Vietnamese Translator

**Skill:** `.claude/skills/util-vi-translator/SKILL.md`

**Inputs**

- English source content
- `outputs/{slug}/handoff/vi-voice-guide.md` (required)

**Output**

- Vietnamese version of source (MD or HTML depending on input)

---

### Update Business Persona (HITL)

**Skill:** `.claude/skills/update-business-persona/SKILL.md`

**Inputs**

- `outputs/{slug}/handoff/01c-ba-handoff.md` — reads open client questions, collects answers

**Outputs**

- updated `outputs/{slug}/handoff/01c-ba-handoff.md`
- updated `outputs/{slug}/deliverble/{slug}-business-persona.html`

---

## Output folder structure

All outputs live under `outputs/` in a slug folder derived from the client name.

```
outputs/
  {slug}/
    details/
      02a-visual-strategist-brief.md    ← human review only
      seo-brief.md                      ← full SEO brief, human review
      web-analysis-report.md            ← full analysis, human review
    handoff/
      01a-researcherA-handoff.md        ← researcher A → researcher B
      01b-researcherB-handoff.md        ← researcher B → synthesizer
      01b-competitors-handoff.md        ← competitor analysis → SEO brief
      01c-ba-handoff.md                 ← slim persona (AI fuel) — read by steps 2–6
      01c-ba-brief.md                   ← full persona (human + report gen only)
      02b-visual-strategy-handoff.md    ← slim visual decisions — read by steps 3, 4, 5
      seo-brief-handoff.md              ← slim SEO rules — read by step 5 only
      web-analysis-handoff.md           ← slim analysis — read by step 5 only
      web-blueprint-handoff.md          ← slim blueprint (≤150 lines) — read by step 6 only
    deliverble/
      {slug}-business-persona.html
      {slug}-business-persona.pdf
      {slug}-branding-visual-guide.md
      {slug}-branding-visual-guide.html
      {slug}-branding-visual-guide.pdf
      {slug}-web-analysis.html
      {slug}-web-analysis.pdf
      {slug}-website.html
      {slug}-website-vi.html            ← optional, Vietnamese version
```

---

## Skills

All agent instructions live in `.claude/skills/`. Each step is a `SKILL.md` file.

```
.claude/skills/
  handoff-writer/         ← shared handoff format enforcer (called by all skills)
  generate-prompt/        ← step 0: clean raw client input into workflow args
  01a-BP-researcher-a/    ← step 1a: extract facts from client-owned sources
  01b-BP-researcher-b/    ← step 1b: validate + expand via external sources
  01c-BP-synthesizer/     ← step 1c: reconcile into slim handoff + full brief
  01d-BP-report-generator/ ← step 1d: generate client-facing HTML from full brief
  02a-visual-strategist/  ← step 2a: locked visual system from persona
  02b-branding-guide-generator/ ← step 2b: full branding guide (MD + HTML)
  03-seo-brief/           ← step 3: page architecture + keyword clusters
  04a-web-analyzer/       ← step 4a: audit current site; verdict + fix list
  04b-web-report-generator/ ← step 4b: format analysis as client HTML
  05-web-blueprint-builder/ ← step 5: compact builder-ready blueprint
  06a-web-builder/        ← step 6: production website HTML
  update-business-persona/ ← HITL: update handoff + HTML from client answers
```

The `prompts/` folder is archived (`prompts-archive/` after pilot validation).

---

## Report metadata (hardcoded)

- `prepared_by`: TechPersona Studio / Thao Phuong
- `report_title`: Business Persona Brief
- `report_mode`: client
- `date`: injected at runtime

PDF conversion uses `script/html-to-pdf.js` (Puppeteer).