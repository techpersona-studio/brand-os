#!/usr/bin/env node
/**
 * merge-branding-fills.js
 *
 * Merges LLM-authored fill JSON into the branding guide scaffold.
 *
 * Usage:
 *   node scripts/merge-branding-fills.js <slug> [--fills path] [--scaffold path] [--out path]
 *
 * Defaults:
 *   scaffold → outputs/{slug}/deliverable/{slug}-branding-visual-guide.scaffold.html
 *   fills    → outputs/{slug}/deliverable/{slug}-branding-visual-guide.fills.json
 *   out      → outputs/{slug}/deliverable/{slug}-branding-visual-guide.html
 */

'use strict';
const fs   = require('fs');
const path = require('path');
const { FILL_SLOTS } = require('./branding-guide-fill-slots');

const argv = process.argv.slice(2);
if (!argv[0] || argv[0].startsWith('--')) {
  console.error('Usage: node scripts/merge-branding-fills.js <slug> [--fills path] [--scaffold path] [--out path]');
  process.exit(1);
}

const slug = argv[0];
const flags = {};
for (let i = 1; i < argv.length; i += 2) {
  if (argv[i]?.startsWith('--')) flags[argv[i].slice(2)] = argv[i + 1] || '';
}

const root = path.join(__dirname, '..');
const outDir = path.join(root, 'outputs', slug, 'deliverable');

const scaffoldPath = flags.scaffold
  ? (path.isAbsolute(flags.scaffold) ? flags.scaffold : path.join(root, flags.scaffold))
  : path.join(outDir, `${slug}-branding-visual-guide.scaffold.html`);

const fillsPath = flags.fills
  ? (path.isAbsolute(flags.fills) ? flags.fills : path.join(root, flags.fills))
  : path.join(outDir, `${slug}-branding-visual-guide.fills.json`);

const outPath = flags.out
  ? (path.isAbsolute(flags.out) ? flags.out : path.join(root, flags.out))
  : path.join(outDir, `${slug}-branding-visual-guide.html`);

for (const [label, p] of [['Scaffold', scaffoldPath], ['Fills', fillsPath]]) {
  if (!fs.existsSync(p)) {
    console.error(`${label} not found:\n  ${p}`);
    process.exit(1);
  }
}

const scaffold = fs.readFileSync(scaffoldPath, 'utf8');
const rawFills = JSON.parse(fs.readFileSync(fillsPath, 'utf8'));
const fills = normalizeFills(rawFills);

const expectedIds = new Set(FILL_SLOTS.map(s => s.id));
const missing = [];
const extra = Object.keys(fills).filter(k => !expectedIds.has(k));

let html = scaffold.replace(/<!-- FILL:([a-z0-9_]+) -->/g, (_, id) => {
  const val = fills[id];
  if (val == null || String(val).trim() === '') {
    missing.push(id);
    return `<!-- MISSING FILL:${id} -->`;
  }
  return String(val).trim();
});

const remaining = (html.match(/<!-- FILL:[a-z0-9_]+ -->/g) || []).length;
const missingMarkers = (html.match(/<!-- MISSING FILL:[a-z0-9_]+ -->/g) || []).length;

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, html, 'utf8');

console.log(`✓ Written: ${outPath}`);
console.log(`  Filled  : ${expectedIds.size - missing.length} / ${expectedIds.size} slots`);

if (missing.length) {
  console.log(`  Missing : ${missing.length} — ${missing.join(', ')}`);
}
if (extra.length) {
  console.log(`  Warning : ${extra.length} extra keys in fills.json (ignored): ${extra.join(', ')}`);
}
if (remaining > 0) {
  console.log(`  Warning : ${remaining} unreplaced FILL markers remain in scaffold`);
}
if (missingMarkers > 0) {
  process.exitCode = 1;
}

function normalizeFills(raw) {
  if (raw && typeof raw === 'object' && raw.fills && typeof raw.fills === 'object') {
    return raw.fills;
  }
  return raw;
}
