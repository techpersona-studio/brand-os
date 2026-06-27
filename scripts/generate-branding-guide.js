#!/usr/bin/env node
/**
 * generate-branding-guide.js
 *
 * Reads  outputs/{slug}/handoff/02b-visual-strategy-handoff.md  (or --handoff path)
 * Injects parsed data into scripts/template-branding-guide.html
 * Writes:
 *   outputs/{slug}/deliverable/{slug}-branding-visual-guide.scaffold.html
 *   outputs/{slug}/deliverable/{slug}-branding-visual-guide.fill-manifest.json
 *   outputs/{slug}/deliverable/{slug}-branding-visual-guide.fills.json  (empty template)
 *
 * Usage:
 *   node scripts/generate-branding-guide.js <slug> [--brand "Brand Name"] [--lang en|vi] [--date YYYY-MM-DD] [--handoff path/to/handoff.md]
 *
 * Next: LLM fills {slug}-branding-visual-guide.fills.json from manifest + handoff + persona
 * Then: node scripts/merge-branding-fills.js <slug>
 */

'use strict';
const fs   = require('fs');
const path = require('path');
const { FILL_SLOTS, HTML_PATTERNS } = require('./branding-guide-fill-slots');

// ── Lookup tables (must be at top — functions reference these at call time) ───

const FONT_PRESETS = {
  'Hanken Grotesk':     'family=Hanken+Grotesk:wght@400;500;600;700;800',
  'Be Vietnam Pro':     'family=Be+Vietnam+Pro:wght@400;500;600;700;800',
  'Inter':              'family=Inter:wght@400;500;600;700;800',
  'Fraunces':           'family=Fraunces:ital,opsz,wght@1,9..144,400;1,9..144,500;1,9..144,600',
  'Cormorant Garamond': 'family=Cormorant+Garamond:ital,wght@1,400;1,500;1,600',
  'Lora':               'family=Lora:ital,wght@0,500;0,600;0,700;1,400;1,500;1,600',
  'Great Vibes':        'family=Great+Vibes',
  'Dancing Script':     'family=Dancing+Script:wght@400;600',
  'Playfair Display':   'family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600',
  'DM Serif Display':   'family=DM+Serif+Display:ital@0;1',
  'Libre Baskerville':  'family=Libre+Baskerville:ital,wght@0,400;0,700;1,400',
};

const TOKEN_NAMES = {
  'base-0':        '--base',
  'base-1':        '--base-deep',
  'base-2':        '--core',
  'surface-0':     '--core',
  'neutral-0':     '--base-deep',
  'neutral-1':     '--base-wash',
  'anchor-0':      '--anchor',
  'anchor-1':      '--anchor-hover',
  'anchor-2':      '--base-wash',
  'accent-0':      '--accent',
  'accent-1':      '--accent-deep',
  'accent-2':      '--accent-light',
  'text-0':        '--ink',
  'text-muted-0':  '--ink-soft',
  'secondary-0':   '--secondary',
};

const ROLE_LABELS = {
  'base-0':      'Page background',
  'base-1':      'Alt section band',
  'base-2':      'Card interior',
  'neutral-0':   'Alt section band',
  'neutral-1':   'Third band',
  'anchor-0':    'Brand anchor, CTA, dark sections',
  'anchor-1':    'Anchor hover',
  'anchor-2':    'Anchor-tinted band',
  'accent-0':    'Primary accent',
  'accent-1':    'Accent hover / pressed',
  'accent-2':    'Accent on dark',
  'text-0':      'Primary text',
  'secondary-0': 'Secondary accent',
};

// ── CLI ───────────────────────────────────────────────────────────────────────
const argv = process.argv.slice(2);
if (!argv[0] || argv[0].startsWith('--')) {
  console.error('Usage: node scripts/generate-branding-guide.js <slug> [--brand "Name"] [--lang en] [--date YYYY-MM-DD] [--handoff path/to/handoff.md]');
  process.exit(1);
}

const slug = argv[0];
const flags = {};
for (let i = 1; i < argv.length; i += 2) {
  if (argv[i].startsWith('--')) flags[argv[i].slice(2)] = argv[i + 1] || '';
}

const brandName = flags.brand || slugToTitle(slug);
const lang      = flags.lang  || 'en';
const dateStr   = flags.date  || new Date().toISOString().slice(0, 10);

// ── Paths ─────────────────────────────────────────────────────────────────────
const root        = path.join(__dirname, '..');
const defaultHandoff = path.join(root, 'outputs', slug, 'handoff', '02b-visual-strategy-handoff.md');
const handoffPath = flags.handoff
  ? (path.isAbsolute(flags.handoff) ? flags.handoff : path.join(root, flags.handoff))
  : defaultHandoff;
const tmplPath    = path.join(__dirname, 'template-branding-guide.html');
const outDir      = path.join(root, 'outputs', slug, 'deliverable');
const scaffoldPath = path.join(outDir, `${slug}-branding-visual-guide.scaffold.html`);
const manifestPath = path.join(outDir, `${slug}-branding-visual-guide.fill-manifest.json`);
const fillsPath    = path.join(outDir, `${slug}-branding-visual-guide.fills.json`);

if (!fs.existsSync(handoffPath)) { console.error(`Handoff not found:\n  ${handoffPath}`); process.exit(1); }
if (!fs.existsSync(tmplPath))    { console.error(`Template not found:\n  ${tmplPath}`);   process.exit(1); }

const handoffText = fs.readFileSync(handoffPath, 'utf8');
const template    = fs.readFileSync(tmplPath, 'utf8');

// ── Parse ─────────────────────────────────────────────────────────────────────
const p = parseHandoff(handoffText);

// ── Build fragments ───────────────────────────────────────────────────────────
const cssRoot      = buildCssRoot(p.colors, p.fonts);
const fontImport   = buildFontImport(p.fonts);
const paletteHtml  = buildPalette(p.colors);
const doHtml       = buildRules(p.doRules);
const dontHtml     = buildRules(p.dontRules);
const tentativeHtml = buildTentative(p.tentative);
const mixGradient  = `linear-gradient(to right, var(--anchor) ${p.primaryPct}%, var(--base-wash) ${p.primaryPct}%)`;

// ── Inject ────────────────────────────────────────────────────────────────────
const tokens = {
  '{{BRAND_NAME}}':          brandName,
  '{{LANG}}':                lang,
  '{{VERSION_DATE}}':        dateStr,
  '{{FONT_IMPORT_URL}}':     fontImport,
  '{{CSS_ROOT_BLOCK}}':      cssRoot,
  '{{NORTH_STAR}}':          p.northStar,
  '{{PRIMARY_DIRECTION}}':   p.primaryDirection,
  '{{PRIMARY_PCT}}':         String(p.primaryPct),
  '{{SECONDARY_DIRECTION}}': p.secondaryDirection,
  '{{SECONDARY_PCT}}':       String(p.secondaryPct),
  '{{MIX_BAR_GRADIENT}}':    mixGradient,
  '{{PALETTE_HTML}}':        paletteHtml,
  '{{DO_RULES_HTML}}':       doHtml,
  '{{DONT_RULES_HTML}}':     dontHtml,
  '{{SIGNATURE_MOVE}}':      p.signatureMove,
  '{{TENTATIVE_HTML}}':      tentativeHtml,
  '{{READINESS}}':           p.readiness,
  '{{TOKENS_PRE}}':          cssRoot,
  '{{FOOTER_CONTACT}}':      `<div style="text-align:right;"><div style="font-size:.8125rem;color:var(--ink);font-weight:600;">TechPersona Studio</div><div style="font-size:.75rem;color:var(--ink-faint);">Prepared by Thao Phuong</div></div>`,
};

let html = template;
for (const [k, v] of Object.entries(tokens)) {
  html = html.replaceAll(k, v);
}
html = normalizeFillMarkers(html);

const personaPath = path.join(root, 'outputs', slug, 'handoff', '01c-ba-handoff.md');
const handoffRel  = path.relative(root, handoffPath);
const personaRel  = fs.existsSync(personaPath) ? path.relative(root, personaPath) : null;

// ── Script pre-fills (derived directly from handoff — no LLM needed) ─────────
const scriptPrefills = {
  cover_thesis:    p.northStar,
  s02_h2:          `${p.primaryDirection} leads`,
  s05_band_diagram: buildBandDiagram(handoffText, p.colors),
  s05_band_note:   parseLayoutBandNote(handoffText),
  s06_radius:      buildRadiusDemo(),
  s08_photo_table: parsePhotoTable(handoffText),
  s09_motion_table: parseMotionTable(handoffText),
};

const fills = {};
for (const slot of FILL_SLOTS) {
  fills[slot.id] = scriptPrefills[slot.id] || '';
}

const llmSlotCount = FILL_SLOTS.length - Object.keys(scriptPrefills).length;

const manifest = {
  version: 1,
  slug,
  brand: brandName,
  lang,
  date: dateStr,
  handoff: handoffRel,
  persona: personaRel,
  scaffold: path.relative(root, scaffoldPath),
  fillsOutput: path.relative(root, fillsPath),
  mergeCommand: `node scripts/merge-branding-fills.js ${slug}`,
  script_prefilled: Object.keys(scriptPrefills),
  prefilled: {
    northStar: p.northStar,
    primaryDirection: p.primaryDirection,
    primaryPct: p.primaryPct,
    secondaryDirection: p.secondaryDirection,
    secondaryPct: p.secondaryPct,
    signatureMove: p.signatureMove,
    readiness: p.readiness,
  },
  slots: FILL_SLOTS
    .filter(s => !scriptPrefills[s.id])
    .map(s => {
      const entry = { id: s.id, section: s.section, format: s.format, instruction: s.instruction };
      if (HTML_PATTERNS[s.id]) {
        entry.htmlPattern = HTML_PATTERNS[s.id];
        entry.fillRule = 'Copy htmlPattern exactly. Replace [PLACEHOLDER] tokens with brand copy only. Do not change tags, classes, or structure.';
      }
      return entry;
    }),
};

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(scaffoldPath, html, 'utf8');
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
fs.writeFileSync(fillsPath, JSON.stringify(fills, null, 2), 'utf8');

console.log(`✓ Scaffold : ${scaffoldPath}`);
console.log(`✓ Manifest : ${manifestPath}`);
console.log(`✓ Fills    : ${fillsPath}`);
console.log(`  Script pre-filled: ${Object.keys(scriptPrefills).length} slots — ${Object.keys(scriptPrefills).join(', ')}`);
console.log(`  LLM to fill: ${llmSlotCount} slots`);
console.log(`  Brand    : ${brandName}`);
console.log(`  Handoff  : ${handoffRel}`);
console.log(`\nNext steps:`);
console.log(`  1. LLM fills ${path.basename(fillsPath)} using manifest + handoff + persona`);
console.log(`  2. node scripts/merge-branding-fills.js ${slug}`);

function buildRadiusDemo() {
  const items = [
    { token: '--r-card',  label: 'Card shell',     value: '1.75rem',                 sub: 'outer shell' },
    { token: '--r-inner', label: 'Card inner',     value: 'calc(1.75rem - 10px)',    sub: 'card core' },
    { token: '--r-pill',  label: 'Buttons & chips', value: '999px',                  sub: 'pill elements' },
    { token: '--r-input', label: 'Input fields',   value: '0.625rem',                sub: 'form inputs' },
  ];
  return items.map(({ token, label, value, sub }) =>
    `<div><div class="radius-demo" style="border-radius:var(${token});">${label}<br>${value}</div><p class="small" style="margin-top:.5rem;text-align:center;">${token} · ${sub}</p></div>`
  ).join('');
}

// ── Script pre-fill parsers ───────────────────────────────────────────────────

function parseBulletKV(text) {
  // Parse "* Key: Value" lines → [{key, value}]
  return text.split('\n')
    .filter(l => /^\s*\*\s+\w/.test(l) && l.includes(':'))
    .map(l => {
      const clean = l.replace(/^\s*\*\s+/, '').replace(/`([^`]+)`/g, '$1');
      const colonIdx = clean.indexOf(':');
      return { key: clean.slice(0, colonIdx).trim(), value: clean.slice(colonIdx + 1).trim() };
    })
    .filter(r => r.key && r.value);
}

function getSectionText(text, heading) {
  const parts = ('\n' + text).split(/\n(?=## )/);
  const match = parts.find(p => p.toLowerCase().startsWith(`## ${heading.toLowerCase()}`));
  if (!match) return '';
  return match.split('\n').slice(1).join('\n').trim();
}

function parsePhotoTable(text) {
  const rows = parseBulletKV(getSectionText(text, 'Locked imagery direction'));
  if (!rows.length) return '';
  return rows.map(r => `<tr><td>${r.key}</td><td>${r.value}</td></tr>`).join('');
}

function parseMotionTable(text) {
  const rows = parseBulletKV(getSectionText(text, 'Locked motion level'));
  if (!rows.length) return '';
  return rows.map(r => `<tr><td>${r.key}</td><td>${r.value}</td></tr>`).join('');
}

function parseLayoutBandNote(text) {
  const sec = getSectionText(text, 'Locked layout rhythm');
  const rhythmLine = sec.split('\n').find(l => /rhythm/i.test(l));
  if (rhythmLine) {
    const val = rhythmLine.replace(/^\s*\*\s+Rhythm:\s*/i, '').replace(/`/g, '').trim();
    return val || 'No two adjacent sections may share the same background token — alternate bands to maintain visual rhythm.';
  }
  return 'No two adjacent sections may share the same background token — alternate bands to maintain visual rhythm.';
}

function semanticColors(colors) {
  const byRole = {};
  for (const c of colors) {
    if (!byRole[c.role]) byRole[c.role] = [];
    byRole[c.role].push(c.hex);
  }
  const get = (role, i = 0) => (byRole[role] && byRole[role][i]) || null;
  const hasBase = !!get('base', 0);
  const base     = get('base', 0) || get('neutral', 0) || '#F5F2EC';
  const baseDeep = hasBase
    ? (get('neutral', 0) || get('base', 1) || darken(base, 0.04))
    : (get('neutral', 1) || get('base', 1) || darken(base, 0.04));
  const anchor     = get('anchor', 0)  || '#1E3A34';
  const core       = get('surface', 0) || get('base', 2) || get('neutral', 1) || lighten(base, 0.04);
  const accent     = get('accent', 0)  || '#C06A45';
  const anchorDark = darken(anchor, 0.18);
  return { base, baseDeep, core, accent, anchorDark };
}

function bandBgToken(name, t) {
  const n = name.toLowerCase();
  if (/bar promo|promo strip/.test(n)) return { hex: t.accent, token: '--accent' };
  if (/menu|card grid|card section/.test(n)) return { hex: t.core, token: '--core' };
  if (/karaoke/.test(n)) return { hex: t.base, token: '--base' };
  if (/proof|featured review|quote section/.test(n) && !/preview/.test(n)) return { hex: t.baseDeep, token: '--base-deep' };
  if (/cta|book|party/.test(n)) return { hex: t.anchorDark, token: '--anchor-dark' };
  if (/footer/.test(n)) return { hex: t.baseDeep, token: '--base-deep' };
  if (/hero|nav/.test(n)) return { hex: t.base, token: '--base' };
  return { hex: t.base, token: '--base' };
}

function buildBandRow(name, label, t) {
  const { hex, token } = bandBgToken(name, t);
  return `<div class="band-row"><div class="band-swatch" style="background:${hex};"></div><div class="band-name">${name}</div><div class="band-label">${token} · ${label}</div></div>`;
}

function buildBandDiagram(text, colors) {
  const t = semanticColors(colors);
  const rows = [];

  const heroLine = getSectionText(text, 'Locked layout rhythm')
    .split('\n')
    .find(l => /hero structure/i.test(l));
  const heroLabel = heroLine
    ? heroLine.replace(/^\s*\*\s+Hero structure:\s*/i, '').replace(/`/g, '').trim().slice(0, 90).replace(/\s+\S*$/, '')
    : 'Full-bleed dark interior photography with display tagline and dual CTAs';

  rows.push({ name: 'Hero', label: heroLabel });

  const mockup = text.match(/Mockup directions:\s*([^\n]+)/i);
  if (mockup) {
    for (const raw of mockup[1].split(',')) {
      const name = raw.trim().replace(/\([^)]*\)/g, '').trim();
      if (!name || /^hero/i.test(name)) continue;
      const title = name.replace(/\b\w+/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
      if (/menu/i.test(name)) rows.push({ name: 'Menu preview', label: '3-column card grid on surface background' });
      else if (/proof/i.test(name)) rows.push({ name: 'Proof band', label: 'Star reviews, quotes, and credential bar' });
      else if (/bar promo|promo strip/i.test(name)) rows.push({ name: 'Bar promo strip', label: 'Crimson — the page\'s only red moment' });
      else if (/footer/i.test(name)) rows.push({ name: 'Footer', label: 'Address, hours, and order link' });
      else rows.push({ name: title, label: title });
    }
  }

  if (/karaoke/i.test(text) && !rows.some(r => /karaoke/i.test(r.name))) {
    const footerIdx = rows.findIndex(r => /footer/i.test(r.name));
    const karaoke = { name: 'Saturday karaoke', label: 'Dedicated callout with bar atmosphere photography' };
    if (footerIdx >= 0) rows.splice(footerIdx, 0, karaoke);
    else rows.push(karaoke);
  }

  if (/quote section|5-star review|featured review/i.test(text) && !rows.some(r => /^featured review$/i.test(r.name))) {
    const barIdx = rows.findIndex(r => /bar promo/i.test(r.name));
    const review = { name: 'Featured review', label: 'Large Cormorant Garamond quote at display scale' };
    if (barIdx >= 0) rows.splice(barIdx, 0, review);
    else rows.push(review);
  }

  if (/book a party|party inquiry|cta band/i.test(text) && !rows.some(r => /book|party/i.test(r.name))) {
    const footerIdx = rows.findIndex(r => /footer/i.test(r.name));
    const cta = { name: 'Book a party CTA', label: 'Party inquiry with gold primary button' };
    if (footerIdx >= 0) rows.splice(footerIdx, 0, cta);
    else rows.push(cta);
  }

  if (!rows.some(r => /footer/i.test(r.name))) {
    rows.push({ name: 'Footer', label: 'Address, hours, and order link' });
  }

  const ORDER = ['hero', 'menu', 'karaoke', 'proof', 'review', 'quote', 'bar', 'promo', 'book', 'party', 'cta', 'footer'];
  const rank = (name) => {
    const n = name.toLowerCase();
    for (let i = 0; i < ORDER.length; i++) {
      if (n.includes(ORDER[i])) return i;
    }
    return ORDER.length;
  };
  rows.sort((a, b) => rank(a.name) - rank(b.name));

  return rows.map(r => buildBandRow(r.name, r.label, t)).join('');
}

// ── Parsers ───────────────────────────────────────────────────────────────────

function parseHandoff(text) {
  // Extract a top-level section body by splitting on ## headings
  const section = (heading) => {
    const parts = ('\n' + text).split(/\n(?=## )/);
    const match = parts.find(p => p.toLowerCase().startsWith(`## ${heading.toLowerCase()}`));
    if (!match) return '';
    return match.split('\n').slice(1).join('\n').trim();
  };

  // North star — first non-empty line
  const northStar = (section('North star') || '').split('\n').map(l => l.trim()).find(l => l) || '';

  // Direction mix
  const mixText = section('Direction mix');
  const priM = mixText.match(/Primary[^:]*:\s*(.+?)\s*[—–\-]+\s*(\d+)%/i);
  const secM = mixText.match(/Secondary[^:]*:\s*(.+?)\s*[—–\-]+\s*(\d+)%/i);

  // Colors
  const colors = parseColors(section('Locked color system'));

  // Fonts
  const fonts = parseFonts(section('Locked typography system'));

  // Signature move — first non-empty line
  const sigSection = section('Signature move');
  const signatureMove = sigSection.split('\n').map(l => l.trim()).find(l => l) || '';

  // Do / Don't subsections — scope to the ## section first so ## headings below don't leak in
  const doSection = section("Do / Don't rules") || section('Do') || '';
  const doRules   = parseRuleLines(extractSub(doSection, 'Do'));
  const dontRules = parseRuleLines(extractSub(doSection, "Don't"));

  // Tentative
  const tentative = parseRuleLines(section('Tentative decisions'));

  // Readiness
  const readinessRaw = (section('Readiness') || '').split('\n').find(l => l.trim());
  const readiness = (readinessRaw || '').replace(/^\*+\s*/, '').replace(/\*\*/g, '').replace(/\*+$/, '').trim();

  return {
    northStar,
    primaryDirection:   priM ? priM[1].trim() : 'Editorial / Human',
    primaryPct:         priM ? parseInt(priM[2], 10) : 65,
    secondaryDirection: secM ? secM[1].trim() : 'Enterprise / Stable',
    secondaryPct:       secM ? parseInt(secM[2], 10) : 35,
    colors, fonts, signatureMove, doRules, dontRules, tentative, readiness,
  };
}

function parseColors(text) {
  const lines = text.split('\n').filter(l => l.trim() && !l.trim().startsWith('Note'));
  const out = [];

  for (const line of lines) {
    const hexes = [...line.matchAll(/#([0-9A-Fa-f]{6})(?![0-9A-Fa-f])/gi)].map(m => '#' + m[1]);
    const hex8  = [...line.matchAll(/#([0-9A-Fa-f]{8})\b/gi)].map(m => '#' + m[1]);
    if (!hexes.length && !hex8.length) continue;

    const lc = line.toLowerCase();
    let role = 'base';
    if      (lc.match(/\bbase\b/))                          role = 'base';
    else if (lc.match(/\bsurface\b/))                       role = 'surface';
    else if (lc.match(/\bneutral\b/))                      role = 'neutral';
    else if (lc.match(/\banchor\b/))                        role = 'anchor';
    else if (lc.match(/\btext primary\b/))                   role = 'text';
    else if (lc.match(/\btext muted\b/))                    role = 'text-muted';
    else if (lc.match(/\bneon\b/))                          role = 'neon';
    else if (lc.match(/\baccent\b/))                        role = 'accent';
    else if (lc.match(/\bsecondary\b/) && lc.match(/#/))     role = 'accent';
    else if (lc.match(/\btext\b/))                           role = 'text';

    const desc = line.replace(/^[\s\*\-]+/, '').replace(/#[0-9A-Fa-f]{6,8}/g, '').replace(/[`~,;]/g, '').trim();
    hexes.forEach((hex, i) => out.push({ role, index: i, hex, desc }));
    if (hex8.length && lc.includes('wash')) {
      hex8.forEach(hex => out.push({ role: 'anchor', index: 2, hex, desc: 'Anchor wash' }));
    } else if (hex8.length) {
      hex8.forEach((hex, i) => out.push({ role, index: hexes.length + i, hex, desc }));
    }
  }

  return out;
}

function parseFonts(text) {
  const fonts = { primary: null, accent: null, script: null };
  const noScript = /script\s+font\s*:\s*none/i.test(text);

  // Extract **Bold** names (the handoff uses **Font Name** to call out font families)
  const bold = [...text.matchAll(/\*\*([^*]+)\*\*/g)].map(m => m[1].trim());

  // Assign by line context only (avoid bleeding into adjacent lines)
  for (const name of bold) {
    const idx  = text.indexOf(`**${name}**`);
    const ls   = text.lastIndexOf('\n', idx);
    const le   = text.indexOf('\n', idx);
    const line = text.slice(ls < 0 ? 0 : ls, le < 0 ? text.length : le).toLowerCase();
    const lname = name.toLowerCase();

    if (!fonts.script && (line.includes('script') || line.includes('signature') || lname.includes('vibes') || lname.includes('dancing'))) {
      fonts.script = name;
    } else if (!fonts.accent && (line.includes('display') || line.includes('headline') || line.includes('accent') || line.includes('serif') || lname.includes('lora') || lname.includes('fraunces') || lname.includes('cormorant') || lname.includes('playfair'))) {
      fonts.accent = name;
    } else if (!fonts.primary && (line.includes('primary') || line.includes('body') || line.includes('reading') || line.includes('sans') || line.includes('ui'))) {
      fonts.primary = name;
    } else if (!fonts.primary) {
      fonts.primary = name;
    } else if (!fonts.accent) {
      fonts.accent = name;
    } else if (!fonts.script) {
      fonts.script = name;
    }
  }

  // Fallback: scan for known font names in plain text (no bold markers)
  // Use line-level context to avoid bleeding into adjacent lines
  if (!fonts.primary || !fonts.accent) {
    const knownFonts = Object.keys(FONT_PRESETS);
    for (const name of knownFonts) {
      if (!text.includes(name)) continue;
      const idx   = text.indexOf(name);
      const ls    = text.lastIndexOf('\n', idx);
      const le    = text.indexOf('\n', idx);
      const line  = text.slice(ls < 0 ? 0 : ls, le < 0 ? text.length : le).toLowerCase();
      const lname = name.toLowerCase();

      if (!fonts.script && (lname.includes('vibes') || lname.includes('dancing') || line.includes('script') || line.includes('signature'))) {
        fonts.script = name;
      } else if (!fonts.accent && (line.includes('display') || line.includes('headline') || line.includes('accent') || line.includes('serif') || lname.includes('lora') || lname.includes('fraunces') || lname.includes('cormorant') || lname.includes('playfair'))) {
        fonts.accent = name;
      } else if (!fonts.primary && (line.includes('primary') || line.includes('body') || line.includes('reading') || line.includes('sans') || line.includes('ui'))) {
        fonts.primary = name;
      }
    }
  }

  if (noScript) fonts.script = null;

  return fonts;
}

function extractSub(text, heading) {
  const parts = ('\n' + text).split(/\n(?=### )/);
  const match = parts.find(p => p.toLowerCase().startsWith(`### ${heading.toLowerCase()}`));
  if (!match) return '';
  return match.split('\n').slice(1).join('\n').trim();
}

function parseRuleLines(text) {
  return text.split('\n')
    .map(l => l.replace(/^[\d\.\-\*\+]+\s+/, '').trim())
    .filter(l => l.length > 2);
}

// ── CSS builders ──────────────────────────────────────────────────────────────

function buildCssRoot(colors, fonts) {
  const byRole = {};
  for (const c of colors) {
    if (!byRole[c.role]) byRole[c.role] = [];
    byRole[c.role].push(c.hex);
  }
  const get = (role, i = 0) => (byRole[role] && byRole[role][i]) || null;

  const { base, baseDeep, core, accent, anchorDark } = semanticColors(colors);
  const anchor      = get('anchor', 0)  || '#1E3A34';
  const baseWash    = get('anchor', 2)  || lighten(anchor, 0.82);
  const ink         = get('text', 0)    || darken(anchor, 0.2);
  const inkSoft     = get('text-muted', 0) || lighten(ink, 0.35);
  const inkFaint    = lighten(inkSoft, 0.25);
  const anchorHover = get('anchor', 1)  || darken(anchor, 0.12);
  const accentDeep  = get('accent', 1)  || darken(accent, 0.15);
  const accentLight = get('accent', 2)  || lighten(accent, 0.32);
  const hair        = hexToRgba(ink, 0.10);

  // Shadows tinted with anchor
  const s1 = hexToRgba(anchor, 0.04);
  const s2 = hexToRgba(anchor, 0.30);
  const s3 = hexToRgba(anchor, 0.05);
  const s4 = hexToRgba(anchor, 0.40);

  const fontSans   = fonts.primary ? `'${fonts.primary}', system-ui, -apple-system, sans-serif` : `'Inter', system-ui, sans-serif`;
  const fontSerif  = fonts.accent  ? `'${fonts.accent}', Georgia, serif`   : `Georgia, serif`;
  const scriptLine = fonts.script  ? `\n  --font-script: '${fonts.script}', cursive;` : '';

  return `:root {
  /* Color */
  --base:         ${base};
  --base-deep:    ${baseDeep};
  --base-wash:    ${baseWash};
  --core:         ${core};
  --ink:          ${ink};
  --ink-soft:     ${inkSoft};
  --ink-faint:    ${inkFaint};
  --anchor:       ${anchor};
  --anchor-hover: ${anchorHover};
  --anchor-dark:  ${anchorDark};
  --accent:       ${accent};
  --accent-deep:  ${accentDeep};
  --accent-light: ${accentLight};
  --surface:      ${core};
  --secondary:    ${accent};
  --hair:         ${hair};

  /* Shadows */
  --lift:    0 1px 2px ${s1}, 0 18px 40px -22px ${s2};
  --lift-lg: 0 2px 4px ${s3}, 0 44px 80px -36px ${s4};
  --inner-hi: inset 0 1px 1px rgba(255,255,255,.70);

  /* Radius */
  --r-card:  1.75rem;
  --r-inner: calc(1.75rem - 10px);
  --r-pill:  999px;
  --r-input: 0.625rem;

  /* Motion */
  --ease:      cubic-bezier(.32,.72,0,1);
  --ease-soft: cubic-bezier(.22,1,.36,1);
  --dur-fast:  150ms;
  --dur-base:  300ms;
  --dur-slow:  600ms;

  /* Typography */
  --font-sans:  ${fontSans};
  --font-serif: ${fontSerif};${scriptLine}

  /* Layout */
  --max-w:    1160px;
  --text-col: 680px;
}`;
}

// FONT_PRESETS defined at top of file

function buildFontImport(fonts) {
  const parts = [];
  if (fonts.primary) parts.push(FONT_PRESETS[fonts.primary] || `family=${fonts.primary.replace(/\s+/g, '+')}`);
  if (fonts.accent)  parts.push(FONT_PRESETS[fonts.accent]  || `family=${fonts.accent.replace(/\s+/g, '+')}`);
  if (fonts.script)  parts.push(FONT_PRESETS[fonts.script]  || `family=${fonts.script.replace(/\s+/g, '+')}`);
  if (!parts.length) return 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap';
  return `https://fonts.googleapis.com/css2?${parts.join('&')}&display=swap`;
}

// ── HTML builders ─────────────────────────────────────────────────────────────

function buildPalette(colors) {
  // Deduplicate by hex
  const seen = new Set();
  const out  = [];

  for (const c of colors) {
    const key = c.hex.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);

    const dark     = isColorDark(c.hex);
    const nearWt   = isNearWhite(c.hex);
    const infoStyle = dark ? ` style="background:${c.hex}"` : '';
    const ns        = dark ? ` style="color:rgba(255,255,255,.85)"` : '';
    const hs        = dark ? ` style="color:rgba(255,255,255,.55)"` : '';
    const rs        = dark ? ` style="color:rgba(255,255,255,.45)"` : '';
    const border    = !dark && nearWt ? ';border:1px solid rgba(0,0,0,.08) inset' : '';

    out.push(
`      <div class="swatch">
        <div class="swatch-color" style="background:${c.hex}${border}"></div>
        <div class="swatch-info"${infoStyle}>
          <span class="swatch-name"${ns}>${esc(tokenName(c))}</span>
          <span class="swatch-hex"${hs}>${c.hex}</span>
          <span class="swatch-role"${rs}>${roleLabel(c)}</span>
        </div>
      </div>`
    );
  }

  return out.join('\n');
}

function buildRules(rules) {
  return rules.map(r => `          <li>${esc(r)}</li>`).join('\n');
}

function buildTentative(items) {
  const meaningful = items.filter(i => i.length > 5 && !i.toLowerCase().startsWith('none'));
  if (!meaningful.length) return '<p>None. All decisions locked.</p>';
  return `<ul class="impl-list">\n${meaningful.map(i => `        <li>${esc(i)}</li>`).join('\n')}\n      </ul>`;
}

// ── Color utilities ───────────────────────────────────────────────────────────

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return { r: parseInt(h.slice(0,2),16), g: parseInt(h.slice(2,4),16), b: parseInt(h.slice(4,6),16) };
}

function rgbToHex(r, g, b) {
  return '#' + [r,g,b].map(v => Math.min(255, Math.max(0, Math.round(v))).toString(16).padStart(2,'0')).join('');
}

function hexToRgba(hex, a) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r},${g},${b},${a})`;
}

function darken(hex, pct) {
  const { r, g, b } = hexToRgb(hex);
  return rgbToHex(r*(1-pct), g*(1-pct), b*(1-pct));
}

function lighten(hex, pct) {
  const { r, g, b } = hexToRgb(hex);
  return rgbToHex(r+(255-r)*pct, g+(255-g)*pct, b+(255-b)*pct);
}

function isColorDark(hex) {
  const { r, g, b } = hexToRgb(hex);
  return (0.299*r + 0.587*g + 0.114*b) < 130;
}

function isNearWhite(hex) {
  const { r, g, b } = hexToRgb(hex);
  return r > 225 && g > 215 && b > 205;
}

// ── String utilities ──────────────────────────────────────────────────────────

function slugToTitle(s) {
  return s.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function esc(s)   { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// TOKEN_NAMES and ROLE_LABELS defined at top of file

function tokenName(c) { return TOKEN_NAMES[`${c.role}-${c.index}`] || `--${c.role}-${c.index}`; }
function roleLabel(c)  { return ROLE_LABELS[`${c.role}-${c.index}`] || c.desc || c.role; }

function normalizeFillMarkers(html) {
  html = html.replace(/<!-- FILL:([a-z0-9_]+)[\s\S]*?-->/gi, '<!-- FILL:$1 -->');
  // Drop standalone marker when the next element already contains the same marker
  html = html.replace(
    /[ \t]*<!-- FILL:([a-z0-9_]+) -->[ \t]*\r?\n[ \t]*(<[^>]+>)[ \t]*<!-- FILL:\1 -->/gi,
    '$2<!-- FILL:$1 -->'
  );
  return html;
}
