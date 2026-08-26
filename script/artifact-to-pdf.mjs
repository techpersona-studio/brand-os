#!/usr/bin/env node
/**
 * artifact-to-pdf.mjs — render an Artifact-style HTML fragment to a print-ready PDF.
 *
 *   node script/artifact-to-pdf.mjs <input.html> [output.pdf]
 *
 * Artifact fragments have no <!doctype>/<html>/<head>/<body> and are styled for a
 * screen, so printing them raw gives edge-to-edge text and split cards. This wraps
 * the fragment in a real document, forces the light palette, gives the page real
 * margins, and stops cards breaking across sheets.
 *
 * Uses the preinstalled Chromium via playwright-core (puppeteer is not installed).
 */
import { chromium } from 'playwright-core';
import fs from 'fs';
import path from 'path';

const SRC = process.argv[2];
if (!SRC || !fs.existsSync(SRC)) {
  console.error('Usage: node script/artifact-to-pdf.mjs <input.html> [output.pdf]');
  process.exit(1);
}
const OUT = process.argv[3] || SRC.replace(/\.html$/, '.pdf');

const frag = fs.readFileSync(SRC, 'utf8');
const [head, body] = [frag.split('</style>')[0], frag.split('</style>').slice(1).join('</style>')];

const PRINT_CSS = `
  @page { size: Letter; margin: 0; }
  :root { color-scheme: light; }
  html { font-size: 15px; }
  body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }

  /* a Letter sheet is 816px, narrower than a screen wrap, so give it real margins */
  .wrap { max-width: none; padding: 0 0.85in; }

  /* screen spacing is far too loose on paper */
  .hero { padding: 2.4rem 0 2rem; }
  .hero h1 { font-size: 30px; }
  .hero-lede { font-size: 1rem; }
  section { padding: 1.7rem 0; }
  .sec-head { margin-bottom: 1.1rem; }
  .groups, .pkgs, .ongoing { gap: .7rem; }
  .ongoing { margin-top: 1.4rem; }
  .group { padding: 1.1rem 1.3rem 1.2rem; }
  .pkg { padding: 1.4rem 1.4rem 1.5rem; }
  .price { font-size: 2rem; }
  .close { padding: 1.8rem 1.6rem; }

  /* shadows print as grey mush and bloat the file; borders carry the shape */
  .group, .pkg, .scroller, .care { box-shadow: none; }

  /* never split a card across a sheet */
  .group, .pkg, .side, .term, .shared, .scroller, .close { break-inside: avoid; }
  .sec-head { break-after: avoid; }
  footer { break-before: avoid; }
`;

const doc = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${head}</style>
<style>${PRINT_CSS}</style>
</head><body data-theme="light">${body}</body></html>`;

const tmp = path.join('/tmp', `print-${Date.now()}.html`);
fs.writeFileSync(tmp, doc);

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage();
await page.goto(`file://${tmp}`, { waitUntil: 'load' });
try { await page.evaluate(() => document.fonts.ready); } catch {}
await page.emulateMedia({ media: 'print' });
await page.pdf({ path: OUT, format: 'Letter', printBackground: true,
  margin: { top: '0', right: '0', bottom: '0', left: '0' } });
await browser.close();
fs.unlinkSync(tmp);

console.log(`Saved ${OUT} (${Math.round(fs.statSync(OUT).size / 1024)}KB)`);
