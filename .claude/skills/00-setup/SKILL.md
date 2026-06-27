# Brand OS — Client Setup

Creates the folder structure for a new client before any research step runs.

## What to do

Run this shell command exactly (replace {slug} with the actual client slug):

```bash
mkdir -p "outputs/{slug}/details" "outputs/{slug}/handoff" "outputs/{slug}/deliverable" "outputs/{slug}/website"
```

Derive the slug from clientName: lowercase, spaces and special chars replaced with hyphens.

Examples:
- "Young Group" → `young-group`
- "TechPersona Studio" → `techpersona-studio`
- "Quán Phở" → `quan-pho`

Confirm the folders were created. Return nothing else.

## Runtime context

You need:
- `clientName` — required, used to derive slug
- `slug` — optional override if you want a custom slug
