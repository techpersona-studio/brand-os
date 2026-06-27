# Pipeline — inputs and outputs

Each prompt in the Brand OS pipeline reads from and writes to specific files. No data passes through workflow context — every agent reads its inputs directly from disk.

---

## Step 0 — Client Input Prep

**Skill:** `generate-prompt`

| | |
|---|---|
| **Skill** | `generate-prompt` |
| **Inputs** | Raw client notes, brain dump, copied LinkedIn/website text, or any unstructured input |
| **Output** | Structured args ready to pass into the `generate-business-persona` workflow |

Cleans up unstructured client input into a well-formed set of workflow args (`clientName`, `clientWebsite`, `clientNotes`, `location`, `industry`, `services`, etc.). Run this before Step 1 when raw input is messy or incomplete.

---

## Step 1 — Business Persona

**Workflow:** `generate-business-persona`

### 01a — Researcher A

| | |
|---|---|
| **Prompt** | `prompts/01a-BP-researcher-a.md` |
| **Inputs** | `clientName`, `clientWebsite`, `clientNotes`, `location`, `industry`, `services`, `assets`, `socialMediaLinks` (all from workflow args) |
| **Output** | `{slug}/handoff/01a-researcherA-handoff.md` |

Extracts facts from client-owned sources only (website, social, provided notes).

---

### 01b — Researcher B

| | |
|---|---|
| **Prompt** | `prompts/01b-BP-researcher-b.md` |
| **Inputs** | same workflow args + reads `{slug}/handoff/01a-researcherA-handoff.md` |
| **Outputs** | `{slug}/handoff/01b-researcherB-handoff.md` — main validation report |
| | `{slug}/handoff/01b-competitors-handoff.md` — competitor analysis |

Validates and expands via public external sources. Uses Researcher A's output to focus on gaps only.

---

### 01c — Synthesizer

| | |
|---|---|
| **Prompt** | `prompts/01c-BP-synthesizer.md` |
| **Inputs** | reads `{slug}/handoff/01a-researcherA-handoff.md` |
| | reads `{slug}/handoff/01b-researcherB-handoff.md` |
| **Output** | `{slug}/handoff/01c-ba-handoff.md` — the Business Persona (source of truth for all downstream steps) |

Reconciles both researcher reports into a single structured Business Persona.

---

### 01d — Report Generator

| | |
|---|---|
| **Prompt** | `prompts/01d-BP-report-generator.md` |
| **Inputs** | reads `{slug}/handoff/01c-ba-handoff.md` |
| | metadata: `clientName`, `prepared_by`, `date`, `report_mode` (from workflow) |
| | TechPersona Studio Pine brand guide (hardcoded in workflow) |
| **Output** | `{slug}/deliverble/{slug}-business-persona.html` |

Produces a self-contained HTML report. Converted to PDF via `script/html-to-pdf.js` (Puppeteer).

---

## Step 2 — Branding Visual Guide

**Workflow:** `brand-vision`

### 02a — Visual Strategist

| | |
|---|---|
| **Prompt** | `prompts/02a-visual-strategist.md` |
| **Inputs** | reads `{slug}/handoff/01c-ba-handoff.md` (required) |
| | `logoOrBrandAssets` — optional, path or URL to logo/brand images |
| | `hitlAnswers` — optional, pre-answered HITL questions |
| **Output A** | `{slug}/details/02a-visual-strategist-brief.md` — full human-reviewable decision brief |
| **Output B** | `{slug}/handoff/02b-visual-strategy-handoff.md` — slim generator handoff (locked decisions only) |

Converts the Business Persona into a locked visual system. All decisions traceable to Business Persona signals. HITL questions included at the end of Output A — they do not block output generation.

---

### 02b — Branding Visual Guide Generator

| | |
|---|---|
| **Prompt** | `prompts/02b-branding-guide-generator.md` |
| **Inputs** | reads `{slug}/handoff/01c-ba-handoff.md` (required) |
| | reads `{slug}/handoff/02b-visual-strategy-handoff.md` (required) |
| | `clientReferences` — optional, reference URLs or notes |
| | `clientWebsite` — optional, existing website URL |
| **Outputs** | `{slug}/deliverble/{slug}-branding-visual-guide.md` |
| | `{slug}/deliverble/{slug}-branding-visual-guide.html` |
| | PDF — direct export if supported, otherwise print-ready HTML for browser export |

Produces the final client-facing Branding Visual Guide: color system, typography, layout rhythm, components, imagery direction, proof presentation, design tokens, and homepage application.

---

---

## Step 3 — SEO Foundation Brief

**Prompt:** `prompts/03-seo-brief.md`

| | |
|---|---|
| **Prompt** | `prompts/03-seo-brief.md` |
| **Inputs** | reads `{slug}/handoff/01c-ba-handoff.md` (required) |
| | reads `{slug}/handoff/02b-visual-strategy-handoff.md` (Branding Visual Guide, required) |
| | reads `{slug}/handoff/01b-competitors-handoff.md` (optional — treated as primary SERP signal if present) |
| | `targetLocations`, `currentWebsite`, `currentSeoNotes` (optional, from workflow args) |
| **Outputs** | `{slug}/details/seo-brief.md` — full SEO Foundation Brief |
| | `{slug}/handoff/seo-brief-handoff.md` — slim handoff used by downstream agents |

Produces a lean, page-architecture-focused SEO brief grounded in the Business Persona and competitor analysis. Not an SEO audit — structure and search intent only.

---

## Step 4 — Website Analysis

### 04a — Web Analyzer

| | |
|---|---|
| **Prompt** | `prompts/04a-web-analyzer.md` |
| **Inputs** | `currentWebsiteUrl` (required) |
| | reads `{slug}/handoff/01c-ba-handoff.md` (optional) |
| | reads `{slug}/deliverble/{slug}-branding-visual-guide.md` (optional) |
| | reads `{slug}/handoff/seo-brief-handoff.md` (optional — used as structural benchmark) |
| | `clientNotes` (optional, from workflow args) |
| **Outputs** | `{slug}/details/web-analysis-report.md` — Output A: client-facing analysis |
| | `{slug}/handoff/web-analysis-handoff.md` — Output B: internal Blueprint handoff |

Analyzes the current site for trust, conversion, CTA, proof, and structural issues. Distinguishes observed issues from reasoned risks. Recommends one of: Keep and tune / Partial redesign / Full redesign.

---

### 04b — Web Report Generator

| | |
|---|---|
| **Prompt** | `prompts/04b-web-report-generator.md` |
| **Inputs** | reads `{slug}/details/web-analysis-report.md` |
| | reads `{slug}/deliverble/{slug}-branding-visual-guide.md` |
| | metadata: `clientName`, `reportTitle`, `preparedBy`, `date`, `reportMode` (from workflow) |
| **Output** | `{slug}/deliverble/{slug}-web-analysis.html` |

Transforms the MD analysis into a styled, client-ready HTML report using the Branding Visual Guide. Converted to PDF via `script/html-to-pdf.js`.

---

### 04c — Web Report Translator

| | |
|---|---|
| **Prompt** | `prompts/04c-web-report-translator.md` |
| **Inputs** | reads `{slug}/deliverble/{slug}-web-analysis.html` |
| | metadata: `clientName`, `tone` (optional) |
| **Outputs** | `{slug}/deliverble/{slug}-web-analysis-vi.md` — Vietnamese Markdown version |
| | `{slug}/deliverble/{slug}-web-analysis-vi.html` — Vietnamese HTML version |

Rewrites the English report into natural Vietnamese for Vietnamese-speaking clients. Preserves all findings, priorities, and the intervention verdict exactly.

---

## Step 5 — Website Blueprint

**Prompt:** `prompts/05-web-blueprint-builder.md`

| | |
|---|---|
| **Prompt** | `prompts/05-web-blueprint-builder.md` |
| **Inputs** | reads `{slug}/handoff/web-analysis-handoff.md` (primary — build direction) |
| | reads `{slug}/handoff/01c-ba-handoff.md` (audience, trust burden, CTA model) |
| | reads `{slug}/deliverble/{slug}-branding-visual-guide.md` (layout constraints) |
| | reads `{slug}/handoff/seo-brief-handoff.md` (page/search structure) |
| | `currentWebsiteUrl` (optional — migration context only) |
| **Output** | `{slug}/handoff/web-blueprint-handoff.md` |

Produces a compact, builder-ready handoff: final page architecture, section order per page, trust/proof system, CTA system, SEO page rules, and builder constraints. Favors minimal pages over page sprawl.

---

## Step 6 — Website Build

> `old_06b-web-translator.md` and `old_04c-web-report-translator.md` are archived — replaced by the Vietnamese utility prompts in Step 7.

### 06a — Web Builder

| | |
|---|---|
| **Prompt** | `prompts/06a-web-builder.md` |
| **Inputs** | reads `{slug}/handoff/web-blueprint-handoff.md` (required) |
| | reads `{slug}/deliverble/{slug}-branding-visual-guide.md` (required) |
| | reads `{slug}/handoff/01c-ba-handoff.md` (optional — messaging nuance) |
| | reads `{slug}/handoff/seo-brief-handoff.md` (optional — if not embedded in blueprint) |
| | `currentWebsiteUrl` (optional — asset recovery only) |
| **Output** | `{slug}/deliverble/{slug}-website.html` |

Builds the actual website from the blueprint. Production-quality frontend — custom design, no AI-default patterns, full responsive and SEO discipline.

---

---

## Step 7 — Vietnamese translation (optional)

For Vietnamese-speaking clients. Run after any deliverable that needs translation. Two-agent chain — Voice Adapter runs first, Translator uses its output.

### util — Vietnamese Voice Adapter

| | |
|---|---|
| **Prompt** | `prompts/util-vi-voice-adapter.md` |
| **Inputs** | English business content (any deliverable) |
| | `industry`, `clientName`, `targetAudience` (optional context) |
| | `client_preferences` — optional client-supplied voice constraints (messaging priorities, preferred terms, phrases to avoid) |
| **Output** | Vietnamese Voice Guide — tone, terminology, trust patterns, CTA language for this brand |

Defines how the brand should sound in Vietnamese. Does not translate — output is consumed by the Translator below.

---

### util — Vietnamese Business Translator

| | |
|---|---|
| **Prompt** | `prompts/util-vi-translator.md` |
| **Inputs** | English source content |
| | Vietnamese Voice Guide from Voice Adapter (required) |
| **Output** | Vietnamese version of the source content (MD or HTML depending on input) |

Voice-aware adaptation — not literal translation. Preserves business meaning, conversion intent, and all findings exactly.

---

## Full folder structure after all steps

```
outputs/
  {slug}/
    details/
      02a-visual-strategist-brief.md
      seo-brief.md
      web-analysis-report.md
    handoff/
      01a-researcherA-handoff.md
      01b-researcherB-handoff.md
      01b-competitors-handoff.md
      01c-ba-handoff.md              ← Business Persona — used by all downstream agents
      02b-visual-strategy-handoff.md       ← Visual Strategist handoff — used by 02b
      seo-brief-handoff.md           ← SEO brief slim handoff — used by 04a, 05, 06a
      web-analysis-handoff.md        ← Web Analyzer Output B — primary input for step 5
      web-blueprint-handoff.md       ← Website Blueprint — primary input for step 6
    deliverble/
      {slug}-business-persona.html
      {slug}-branding-visual-guide.md
      {slug}-branding-visual-guide.html
      {slug}-web-analysis.html
      {slug}-web-analysis-vi.md
      {slug}-web-analysis-vi.html
      {slug}-website.html
      {slug}-website-vi.html
```
