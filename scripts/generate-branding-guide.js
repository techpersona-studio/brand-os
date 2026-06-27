#!/usr/bin/env node
/**
 * generate-branding-guide.js
 *
 * Reads  outputs/{slug}/handoff/02b-visual-strategy-handoff.md
 * Injects parsed data into scripts/template-branding-guide.html
 * Writes  outputs/{slug}/deliverable/{slug}-branding-visual-guide.html
 *
 * Usage:
 *   node scripts/generate-branding-guide.js <slug> [--brand "Brand Name"] [--lang en|vi] [--date YYYY-MM-DD]
 *
 * All {{TOKEN}} placeholders are filled automatically.
 * <!-- FILL:* --> slots are left for LLM completion.
 */

'use strict';
const fs   = require('fs');
const path = require('path');

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
  'base-0':      '--base',
  'base-1':      '--base-deep',
  'base-2':      '--core',
  'neutral-0':   '--base-deep',
  'neutral-1':   '--base-wash',
  'anchor-0':    '--anchor',
  'anchor-1':    '--anchor-hover',
  'anchor-2':    '--base-wash',
  'accent-0':    '--accent',
  'accent-1':    '--accent-deep',
  'accent-2':    '--accent-light',
  'text-0':      '--ink',
  'secondary-0': '--secondary',
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
  console.error('Usage: node scripts/generate-branding-guide.js <slug> [--brand "Name"] [--lang en] [--date YYYY-MM-DD]');
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
const handoffPath = path.join(root, 'outputs', slug, 'handoff', '02b-visual-strategy-handoff.md');
const tmplPath    = path.join(__dirname, 'template-branding-guide.html');
const outDir      = path.join(root, 'outputs', slug, 'deliverable');
const outPath     = path.join(outDir, `${slug}-branding-visual-guide.html`);

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
};

let html = template;
for (const [k, v] of Object.entries(tokens)) {
  html = html.replaceAll(k, v);
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outPath, html, 'utf8');

console.log(`✓ Written: ${outPath}`);
console.log(`  Brand   : ${brandName}`);
console.log(`  Lang    : ${lang}`);
console.log(`  Date    : ${dateStr}`);
console.log(`\n  FILL slots still need LLM completion — search "<!-- FILL" in the output.`);

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

  // Do / Don't subsections
  const doRules   = parseRuleLines(extractSub(text, 'Do'));
  const dontRules = parseRuleLines(extractSub(text, "Don't"));

  // Tentative
  const tentative = parseRuleLines(section('Tentative decisions'));

  // Readiness
  const readinessRaw = (section('Readiness') || '').split('\n').find(l => l.trim());
  const readiness = (readinessRaw || '').replace(/^\*+\s*/, '').replace(/\*+$/, '').trim();

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
    const hexes = line.match(/#[0-9A-Fa-f]{6}/g) || [];
    if (!hexes.length) continue;

    const lc = line.toLowerCase();
    let role = 'base';
    if      (lc.match(/\bbase\b/))       role = 'base';
    else if (lc.match(/\bneutral\b/))    role = 'neutral';
    else if (lc.match(/\banchor\b/))     role = 'anchor';
    else if (lc.match(/\baccent\b/))     role = 'accent';
    else if (lc.match(/\btext\b/))       role = 'text';
    else if (lc.match(/\bsecondary\b/))  role = 'secondary';

    // Strip the label prefix for description
    const desc = line.replace(/^[\s\*\-]+/, '').replace(/#[0-9A-Fa-f]{6}/g, '').replace(/[`~,;]/g, '').trim();

    hexes.forEach((hex, i) => out.push({ role, index: i, hex, desc }));
  }

  return out;
}

function parseFonts(text) {
  const fonts = { primary: null, accent: null, script: null };

  // Extract **Bold** names (the handoff uses **Font Name** to call out font families)
  const bold = [...text.matchAll(/\*\*([^*]+)\*\*/g)].map(m => m[1].trim());

  // Assign by order and context clues
  for (const name of bold) {
    const idx    = text.indexOf(`**${name}**`);
    const nearby = text.substring(Math.max(0, idx - 80), idx + 120).toLowerCase();

    if (!fonts.script && (nearby.includes('script') || nearby.includes('signature') || nearby.includes('cursive') || nearby.includes('great vibes') || nearby.includes('dancing'))) {
      fonts.script = name;
    } else if (!fonts.accent && (nearby.includes('display') || nearby.includes('headline') || nearby.includes('accent') || nearby.includes('lora') || nearby.includes('fraunces') || nearby.includes('cormorant') || nearby.includes('playfair') || nearby.includes('serif'))) {
      fonts.accent = name;
    } else if (!fonts.primary && (nearby.includes('body') || nearby.includes('primary') || nearby.includes('sans') || nearby.includes('reading') || nearby.includes('ui'))) {
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

  // Primary semantic colors
  // If no "Base" role exists, treat first "Neutral" color as the page background
  const hasBase  = !!get('base', 0);
  const base     = get('base', 0) || get('neutral', 0) || '#F5F2EC';
  const baseDeep = hasBase
    ? (get('neutral', 0) || get('base', 1) || darken(base, 0.04))
    : (get('neutral', 1) || get('base', 1) || darken(base, 0.04));
  const anchor      = get('anchor', 0)  || '#1E3A34';
  const baseWash    = get('anchor', 2)  || lighten(anchor, 0.82);
  const core        = get('base', 2)    || get('neutral', 1) || lighten(base, 0.04);
  const ink         = get('text', 0)    || darken(anchor, 0.2);
  const inkSoft     = lighten(ink, 0.35);
  const inkFaint    = lighten(ink, 0.52);
  const anchorHover = get('anchor', 1)  || darken(anchor, 0.12);
  const anchorDark  = darken(anchor, 0.18);
  const accent      = get('accent', 0)  || '#C06A45';
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
