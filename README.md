# Brand OS

A full client-to-website pipeline that turns raw client notes into a production-ready website. Each step produces client-facing deliverables and internal handoff files that feed the next step.

See `docs/pipeline-io.md` for every agent's exact inputs, outputs, and file paths.

---

## Pipeline overview

```
Client notes + website URL
        │
        ▼
  [Step 0]  generate-prompt skill
            Cleans unstructured input into workflow args
        │
        ▼
  [Step 1]  generate-business-persona workflow
            Researcher A + B (parallel) → Synthesizer → Report Generator
            Deliverable: Business Persona Brief (HTML + PDF)
        │
        ▼
  [Step 2]  brand-vision workflow
            Visual Strategist → Branding Guide Generator
            Deliverable: Branding Visual Guide (MD + HTML + PDF)
        │
        ▼
  [Step 3]  SEO Foundation Brief
            Prompt: 03-seo-brief.md
            Deliverable: SEO Foundation Brief (page architecture + search intents)
        │
        ▼
  [Step 4]  Website Analysis
            Web Analyzer → Web Report Generator
            Deliverable: Website Analysis Report (HTML + PDF)
        │
        ▼
  [Step 5]  Website Blueprint
            Prompt: 05-web-blueprint-builder.md
            Deliverable: builder-ready Website Blueprint
        │
        ▼
  [Step 6]  Website Build
            Prompt: 06a-web-builder.md
            Deliverable: production website (HTML)
        │
        ▼
  [Optional]  Vietnamese translation
              Voice Adapter → Translator
              Adapts all deliverables for Vietnamese-speaking clients
```

---

## Step 1 — Business Persona (automated workflow)

The only fully automated step. Run with a single command.

### Empty template

```
Workflow({
  scriptPath: "/Users/thao.phuong/.claude/workflows/generate-business-persona.js",
  args: {
    clientName: "",
    clientWebsite: "",
    industry: "",
    location: "",
    services: "",
    clientNotes: ""
  }
})
```

`clientName` and `clientWebsite` are required. Everything else is optional but improves research quality.

### Example

```
Workflow({
  scriptPath: "/Users/thao.phuong/.claude/workflows/generate-business-persona.js",
  args: {
    clientName: "TechPersona Studio",
    clientWebsite: "https://www.techpersonastudio.com/",
    industry: "Automation consulting + website redesign services",
    location: "Worcester, MA — serves clients online everywhere",
    services: "Business automation consulting, website redesign, AI-powered workflows for small businesses",
    clientNotes: "Founder-led solo studio. Owner is Thao Phuong, a software engineer with 6 years of experience. Brand: warm stone-paper neutrals, deep pine anchor (#1E3A34), rare terracotta accent (#C06A45), Hanken Grotesk + Fraunces italic fonts."
  }
})
```

---

## Output folder structure

All outputs live under `agent-output/` in a slug folder derived from the client name.

```
agent-output/
  {slug}/
    details/
      02a-visual-strategist-brief.md
      seo-brief.md
      web-analysis-report.md
    handoff/
      01a-researcherA-handoff.md
      01b-researcherB-handoff.md
      01b-competitors-handoff.md
      01c-ba-handoff.md              ← Business Persona — used by all downstream steps
      02b-visual-strategy-handoff.md
      seo-brief-handoff.md
      web-analysis-handoff.md
      web-blueprint-handoff.md
    deliverble/
      {slug}-business-persona.html
      {slug}-business-persona.pdf
      {slug}-branding-visual-guide.md
      {slug}-branding-visual-guide.html
      {slug}-branding-visual-guide.pdf
      {slug}-web-analysis.html
      {slug}-web-analysis.pdf
      {slug}-website.html
      {slug}-website-vi.html          ← optional, Vietnamese version
```

---

## Report metadata (hardcoded)

- `prepared_by`: TechPersona Studio / Thao Phuong
- `report_title`: Business Persona Brief
- `report_mode`: client
- `date`: injected at runtime

PDF conversion uses `script/html-to-pdf.js` (Puppeteer).
