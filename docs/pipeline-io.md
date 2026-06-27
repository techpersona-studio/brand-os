# Pipeline — inputs and outputs

All steps are manual skill calls. Run each skill, review output, proceed to next step. No automated sequencing.

Each skill in the Brand OS pipeline reads from and writes to specific files. Every agent reads its inputs directly from disk.

---

## Step 0 — Client Input Prep

**Skill:** `.claude/skills/generate-prompt/SKILL.md`

| | |
|---|---|
| **Skill** | `.claude/skills/generate-prompt/SKILL.md` |
| **Inputs** | Raw client notes, brain dump, copied LinkedIn/website text, or any unstructured input |
| **Output** | Structured args ready to pass into the next skill call |

Cleans up unstructured client input into a well-formed set of workflow args (`clientName`, `clientWebsite`, `clientNotes`, `location`, `industry`, `services`, etc.). Run this before Step 1 when raw input is messy or incomplete.

---

## Step 1 — Business Persona

### 01a — Researcher A

| | |
|---|---|
| **Skill** | `.claude/skills/01a-BP-researcher-a/SKILL.md` |
| **Inputs** | `clientName`, `clientWebsite`, `clientNotes`, `location`, `industry`, `services`, `assets` |
| **Output** | `{slug}/handoff/01a-researcherA-handoff.md` |

Extracts facts from client-owned sources only (website, provided notes, assets). Does not fetch social media profiles.

---

### 01b — Researcher B

| | |
|---|---|
| **Skill** | `.claude/skills/01b-BP-researcher-b/SKILL.md` |
| **Inputs** | `clientName`, `clientWebsite` + reads `{slug}/handoff/01a-researcherA-handoff.md` |
| **Outputs** | `{slug}/handoff/01b-researcherB-handoff.md` — main validation report |
| | `{slug}/handoff/01b-competitors-handoff.md` — competitor analysis |

Validates and expands via public external sources. Uses Researcher A's output to focus on gaps only.

---

### 01c — Synthesizer

| | |
|---|---|
| **Skill** | `.claude/skills/01c-BP-synthesizer/SKILL.md` |
| **Inputs** | reads `{slug}/handoff/01a-researcherA-handoff.md` |
| | reads `{slug}/handoff/01b-researcherB-handoff.md` |
| **Output A** | `{slug}/handoff/01c-ba-handoff.md` — slim Business Persona (~35–40 lines, key-value only, no rationale) — read by steps 2a, 3, 4a, 5, 6 (optional) |
| **Output B** | `{slug}/handoff/01c-ba-brief.md` — full Business Persona (verbose, with rationale, confidence tags, evidence tables) — read by step 1d and HITL skill only |

Reconciles both researcher reports into a single structured Business Persona. Writes two files: a slim handoff for downstream agents and a full brief for the report generator and human review.

---

### 01d — Report Generator

| | |
|---|---|
| **Skill** | `.claude/skills/01d-BP-report-generator/SKILL.md` |
| **Inputs** | reads `{slug}/handoff/01c-ba-brief.md` (full Business Persona — not the slim handoff) |
| | metadata: `clientName`, `preparedBy`, `date`, `reportMode` (runtime args) |
| **Output** | `{slug}/deliverble/{slug}-business-persona.html` |

Produces a self-contained HTML report. Converted to PDF via `script/html-to-pdf.js` (Puppeteer).

---

## Step 2 — Branding Visual Guide

### 02a — Visual Strategist

| | |
|---|---|
| **Skill** | `.claude/skills/02a-visual-strategist/SKILL.md` |
| **Inputs** | reads `{slug}/handoff/01c-ba-handoff.md` (slim Business Persona — required) |
| | `logoOrBrandAssets` — optional, path or URL to logo/brand images |
| | `hitlAnswers` — optional, pre-answered HITL questions |
| **Output A** | `{slug}/details/02a-visual-strategist-brief.md` — full human-reviewable decision brief |
| **Output B** | `{slug}/handoff/02b-visual-strategy-handoff.md` — slim visual decisions (locked color, type, layout) — read by steps 2b, 4a, 5 |

Converts the Business Persona into a locked visual system. All decisions traceable to Business Persona signals. HITL questions included at the end of Output A — they do not block output generation.

---

### 02b — Branding Visual Guide Generator

| | |
|---|---|
| **Skill** | `.claude/skills/02b-branding-guide-generator/SKILL.md` |
| **Inputs** | reads `{slug}/handoff/01c-ba-handoff.md` (slim Business Persona — required) |
| | reads `{slug}/handoff/02b-visual-strategy-handoff.md` (slim visual decisions — required) |
| | `clientReferences` — optional, reference URLs or notes |
| | `clientWebsite` — optional, existing website URL |
| **Outputs** | `{slug}/deliverble/{slug}-branding-visual-guide.md` |
| | `{slug}/deliverble/{slug}-branding-visual-guide.html` |
| | PDF — direct export if supported, otherwise print-ready HTML for browser export |

Produces the final client-facing Branding Visual Guide: color system, typography, layout rhythm, components, imagery direction, proof presentation, design tokens, and homepage application.

---

## Step 3 — SEO Foundation Brief

| | |
|---|---|
| **Skill** | `.claude/skills/03-seo-brief/SKILL.md` |
| **Inputs** | reads `{slug}/handoff/01c-ba-handoff.md` (slim Business Persona — required) |
| | reads `{slug}/handoff/01b-competitors-handoff.md` (optional — treated as primary SERP signal if present) |
| | `targetLocations`, `currentWebsite`, `currentSeoNotes` (optional) |
| **Outputs** | `{slug}/details/seo-brief.md` — full SEO Foundation Brief |
| | `{slug}/handoff/seo-brief-handoff.md` — slim SEO rules (pages, schemas, keywords, linking) — read by step 5 only |

Produces a lean, page-architecture-focused SEO brief grounded in the Business Persona and competitor analysis. Not an SEO audit — structure and search intent only.

---

## Step 4 — Website Analysis

### 04a — Web Analyzer

| | |
|---|---|
| **Skill** | `.claude/skills/04a-web-analyzer/SKILL.md` |
| **Inputs** | `currentWebsiteUrl` (required) |
| | reads `{slug}/handoff/01c-ba-handoff.md` (slim Business Persona — optional) |
| | reads `{slug}/handoff/02b-visual-strategy-handoff.md` (slim visual handoff — optional) |
| | reads `{slug}/handoff/seo-brief-handoff.md` (optional — used as structural benchmark) |
| | `clientNotes` (optional) |
| **Outputs** | `{slug}/details/web-analysis-report.md` — Output A: client-facing analysis |
| | `{slug}/handoff/web-analysis-handoff.md` — slim analysis verdict (≤80 lines: verdict, intervention, keep/remove/fix) — read by step 5 only |

Analyzes the current site for trust, conversion, CTA, proof, and structural issues. Distinguishes observed issues from reasoned risks. Recommends one of: Keep and tune / Partial redesign / Full redesign.

---

### 04b — Web Report Generator

| | |
|---|---|
| **Skill** | `.claude/skills/04b-web-report-generator/SKILL.md` |
| **Inputs** | reads `{slug}/details/web-analysis-report.md` |
| | reads `{slug}/deliverble/{slug}-branding-visual-guide.md` |
| | metadata: `clientName`, `reportTitle`, `preparedBy`, `date`, `reportMode` (runtime args) |
| **Output** | `{slug}/deliverble/{slug}-web-analysis.html` |

Transforms the MD analysis into a styled, client-ready HTML report using the Branding Visual Guide. Converted to PDF via `script/html-to-pdf.js`.

---

### 04c — Web Report Translator

| | |
|---|---|
| **Skill** | `.claude/skills/04c-web-report-translator/SKILL.md` |
| **Inputs** | reads `{slug}/deliverble/{slug}-web-analysis.html` |
| | metadata: `clientName`, `tone` (optional) |
| **Outputs** | `{slug}/deliverble/{slug}-web-analysis-vi.md` — Vietnamese Markdown version |
| | `{slug}/deliverble/{slug}-web-analysis-vi.html` — Vietnamese HTML version |

Rewrites the English report into natural Vietnamese for Vietnamese-speaking clients. Preserves all findings, priorities, and the intervention verdict exactly.

---

## Step 5 — Website Blueprint

| | |
|---|---|
| **Skill** | `.claude/skills/05-web-blueprint-builder/SKILL.md` |
| **Inputs** | reads `{slug}/handoff/web-analysis-handoff.md` (slim analysis verdict — primary build direction) |
| | reads `{slug}/handoff/01c-ba-handoff.md` (slim Business Persona — audience, trust burden, CTA model) |
| | reads `{slug}/handoff/02b-visual-strategy-handoff.md` (slim visual decisions — layout constraints, NOT full branding guide) |
| | reads `{slug}/handoff/seo-brief-handoff.md` (slim SEO rules — page/search structure) |
| | `currentWebsiteUrl` (optional — migration context only) |
| **Output** | `{slug}/handoff/web-blueprint-handoff.md` — slim blueprint (≤150 lines: page architecture, section order, constraints) — read by step 6 only |

Produces a compact, builder-ready handoff: final page architecture, section order per page, trust/proof system, CTA system, SEO page rules, and builder constraints. Favors minimal pages over page sprawl.

---

## Step 6 — Website Build

> `old_06b-web-translator.md` and `old_04c-web-report-translator.md` are archived — replaced by the Vietnamese utility skills in Step 7.

### 06a — Web Builder

| | |
|---|---|
| **Skill** | `.claude/skills/06a-web-builder/SKILL.md` |
| **Inputs** | reads `{slug}/handoff/web-blueprint-handoff.md` (slim blueprint — required) |
| | reads `{slug}/deliverble/{slug}-branding-visual-guide.md` (full branding guide — required) |
| | reads `{slug}/handoff/01c-ba-handoff.md` (slim Business Persona — optional, messaging nuance only) |
| | `currentWebsiteUrl` (optional — asset recovery only) |
| **Output** | `{slug}/deliverble/{slug}-website.html` |

Builds the actual website from the blueprint. Production-quality frontend — custom design, no AI-default patterns, full responsive and SEO discipline.

---

## Step 7 — Vietnamese translation (optional)

For Vietnamese-speaking clients. Run after any deliverable that needs translation. Two-agent chain — Voice Adapter runs first, Translator uses its output.

### util — Vietnamese Voice Adapter

| | |
|---|---|
| **Skill** | `.claude/skills/util-vi-voice-adapter/SKILL.md` |
| **Inputs** | English business content (any deliverable) |
| | `industry`, `clientName`, `targetAudience` (optional context) |
| | `client_preferences` — optional client-supplied voice constraints (messaging priorities, preferred terms, phrases to avoid) |
| **Output** | Vietnamese Voice Guide — tone, terminology, trust patterns, CTA language for this brand |

Defines how the brand should sound in Vietnamese. Does not translate — output is consumed by the Translator below.

---

### util — Vietnamese Business Translator

| | |
|---|---|
| **Skill** | `.claude/skills/util-vi-translator/SKILL.md` |
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
      01c-ba-handoff.md              ← slim Business Persona (~35–40 lines, key-value) — read by steps 2a, 3, 4a, 5, 6 (optional)
      01c-ba-brief.md                ← full Business Persona (with rationale, confidence tags, evidence) — read by step 1d and HITL only
      02b-visual-strategy-handoff.md ← slim visual decisions (locked color, type, layout) — read by steps 2b, 4a, 5
      seo-brief-handoff.md           ← slim SEO rules (pages, schemas, keywords, linking) — read by step 5 only
      web-analysis-handoff.md        ← slim analysis verdict (≤80 lines: verdict, intervention, keep/remove/fix) — read by step 5 only
      web-blueprint-handoff.md       ← slim blueprint (≤150 lines: page architecture, section order, constraints) — read by step 6 only
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
