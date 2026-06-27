# Business Persona — project notes

## What this project does

Generates a client-ready Business Persona report (HTML + PDF) as step 1 of a website Brand OS workflow.

## Workflow

Run the `generate-business-persona` workflow to execute the full pipeline:

```
Workflow({ name: "generate-business-persona", args: {
  clientName: "...",
  clientWebsite: "https://...",
  clientNotes: "...",   // optional
  location: "...",      // optional
  industry: "...",      // optional
  services: "..."       // optional
}})
```

## Pipeline

1. **Researcher A** (`01a-BP-researcher-a.md`) — extracts facts from client-owned sources only
2. **Researcher B** (`01b-BP-researcher-b.md`) — validates and expands via public external sources (runs in parallel with A)
3. **Synthesizer** (`01c-BP-synthesizer.md`) — reconciles both reports into a structured Business Persona
4. **Report Generator** (`01d-BP-report-generator.md`) — produces a self-contained HTML report

The HTML output is converted to PDF via `script/html-to-pdf.js` (Puppeteer).

## Output folder structure

Each run creates a slug folder under `outputs/` derived from the client name:

```
outputs/
  young-group/
    details/
      01a-ba-researcherA.md   ← Researcher A output
      01b-ba-researcherB.md   ← Researcher B output
    handoff/
      01c-ba-handoff.md       ← Synthesizer output (Business Persona)
    deliverble/
      young-group-business-persona.html
```

Each agent reads from the previous agent's saved file directly — no output is passed through the workflow context.

## Hardcoded report metadata

- `prepared_by`: TechPersona Studio / Thao Phuong
- `report_title`: Business Persona Brief
- `report_mode`: client
- `date`: injected at runtime
