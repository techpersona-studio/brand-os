#!/usr/bin/env node
/**
 * generate-bp-report.js
 * Usage: node script/generate-bp-report.js <slug> "<clientName>"
 * Reads:  outputs/{slug}/handoff/01c-ba-brief.md  (preferred; includes Executive summary)
 *         outputs/{slug}/handoff/01c-ba-handoff.md  (fallback only)
 * Writes: outputs/{slug}/deliverble/{slug}-business-persona.html
 */

'use strict';

const fs   = require('fs');
const path = require('path');

// ─── CLI ───────────────────────────────────────────────────────────────────────

const [slug, clientName] = process.argv.slice(2);

if (!slug || !clientName) {
  console.error('Usage: node script/generate-bp-report.js <slug> "<clientName>"');
  process.exit(1);
}

// ─── Paths ─────────────────────────────────────────────────────────────────────

const ROOT      = path.resolve(__dirname, '..');
const TMPL_PATH = path.join(__dirname, 'templates', 'bp-report.html');
const OUT_DIR   = path.join(ROOT, 'outputs', slug, 'deliverble');
const OUT_FILE  = path.join(OUT_DIR, `${slug}-business-persona.html`);

const BRIEF_CANDIDATES = [
  path.join(ROOT, 'outputs', slug, 'handoff', '01c-ba-brief.md'),
  path.join(ROOT, 'outputs', slug, 'handoff', '01c-ba-handoff.md'),
];

const briefPath = BRIEF_CANDIDATES.find(p => fs.existsSync(p));
if (!briefPath) {
  console.error(`Brief not found. Looked in:\n${BRIEF_CANDIDATES.join('\n')}`);
  process.exit(1);
}

// ─── Load ──────────────────────────────────────────────────────────────────────

const brief    = fs.readFileSync(briefPath, 'utf8');
const template = fs.readFileSync(TMPL_PATH, 'utf8');

console.log(`Brief: ${path.relative(ROOT, briefPath)}`);

// ─── Parse brief ───────────────────────────────────────────────────────────────

const sections = parseSections(brief);

// Meta from preamble (text before first ## header)
const preamble   = brief.split(/^## /m)[0];
const date           = ((preamble.match(/\*\*Date:\*\*\s*(.+)/) || [])[1] || '').trim();
const preparedByRaw  = ((preamble.match(/\*\*Prepared by:\*\*\s*(.+)/) || [])[1] || '').trim();
// Ensure "/ Thao Phuong" is always included
const preparedBy = preparedByRaw && preparedByRaw.toLowerCase().includes('thao')
  ? preparedByRaw
  : 'TechPersona Studio / Thao Phuong';

// ─── Build slots ───────────────────────────────────────────────────────────────

const snapFields     = parseFields(sections['1. Business Snapshot'] || '');
const industryField  = snapFields.find(f => /industry/i.test(f.label));
const clientDescriptor = industryField
  ? industryField.valueLines.join(' ').replace(/\s*\/\s*/g, ' · ')
  : '';

const execSummary = parseExecutiveSummary(brief);

const slots = {
  client_name:                clientName,
  client_descriptor:          clientDescriptor,
  prepared_by:                preparedBy,
  date,
  report_title:               'Business Persona Brief',
  readiness_status:           renderReadinessStatus(sections['Readiness']),
  readiness_note:             renderReadinessNote(sections['Readiness']),
  executive_summary_para:     execSummary.para,
  executive_summary_bullets:  execSummary.bullets.map(b =>
    `<li>${escHtml(b)}</li>`
  ).join('\n          '),
  business_snapshot_rows:     renderBusinessSnapshotRows(snapFields),
  brand_strategy_content:     renderBrandStrategy(sections['2. Brand Strategy']),
  conversion_context_content: renderConversionContext(sections['3. Conversion Context']),
  brand_voice_content:        renderBrandVoice(sections['4. Brand Personality & Voice']),
  visual_cues_content:        '', // not shown in client report — feeds visual strategist handoff only
  sources_list:               renderSourcesList(sections['Evidence Summary']),
  client_questions_section:   renderClientQuestions(sections['Client questions']),
};

// ─── Fill template ─────────────────────────────────────────────────────────────

let html = template;
for (const [key, value] of Object.entries(slots)) {
  html = html.split(`{{${key}}}`).join(value || '');
}

// Warn on any unfilled slots
const remaining = [...html.matchAll(/\{\{[^}]+\}\}/g)].map(m => m[0]);
if (remaining.length) {
  console.warn('Warning — unfilled slots:', [...new Set(remaining)].join(', '));
}

// ─── Write ─────────────────────────────────────────────────────────────────────

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT_FILE, html, 'utf8');
console.log(`Written: ${path.relative(ROOT, OUT_FILE)}`);


// =============================================================================
// PARSING
// =============================================================================

/**
 * Parse executive summary and key points from the brief.
 */
function parseExecutiveSummary(md) {
  const summaryMatch = md.match(/## Executive summary\s*\n([\s\S]*?)(?=\n## |\n# |$)/i);
  const keyPointsMatch = md.match(/## Key points\s*\n([\s\S]*?)(?=\n## |\n# |$)/i);
  const para = summaryMatch ? summaryMatch[1].trim() : '';
  const bullets = keyPointsMatch
    ? keyPointsMatch[1].split('\n').filter(l => l.trim().startsWith('- ')).map(l => l.trim().slice(2).trim())
    : [];
  return { para, bullets };
}

function parseSections(md) {
  const result = {};
  const parts  = md.split(/^## /m);
  for (const part of parts.slice(1)) {
    const nl      = part.indexOf('\n');
    const header  = part.slice(0, nl).trim();
    const content = part.slice(nl + 1).trim();
    result[header] = content;
  }
  return result;
}

/**
 * Parse **Label:** value blocks within a section.
 * Each field gets: { label, valueLines[], confidence }
 */
function parseFields(content) {
  const fields = [];
  if (!content) return fields;

  const lines = content.split('\n');
  let cur = null;

  const push = () => { if (cur) fields.push(cur); cur = null; };

  for (const line of lines) {
    // New field starts with **Label:**
    const fm = line.match(/^\*\*([^*]+):\*\*\s*(.*)/);
    if (fm) {
      push();
      const firstVal = cleanValue(fm[2]);
      cur = {
        label:      fm[1].trim(),
        valueLines: firstVal ? [firstVal] : [],
        confidence: null,
      };
      continue;
    }

    if (!cur) continue;

    const trimmed = line.trim();

    // Confidence/annotation line starts with em-dash or en-dash
    if (/^[—–]/.test(trimmed)) {
      const conf = trimmed.replace(/^[—–]\s*/, '');
      cur.confidence = extractConfidenceCategory(conf);
      continue;
    }

    // Skip source/metadata lines
    if (/^(Source:|Drawn from:|Signals cited:|Note:)/i.test(trimmed)) continue;
    if (/^---+$/.test(trimmed)) { push(); continue; }

    // List items and continuation text
    if (trimmed) cur.valueLines.push(trimmed);
  }

  push();
  return fields;
}

/**
 * Strip inline confidence annotations from a value string.
 * Example: "Vietnam, USA — Confirmed (strong). Note..." → "Vietnam, USA"
 */
function cleanValue(v) {
  if (!v) return '';
  return v
    .replace(/\s*[—–]\s*(Confirmed|Recommended|Unknown)(\s*\([^)]*\))?[^—–\n]*$/g, '')
    .trim();
}

/**
 * Extract the confidence category from a confidence annotation string.
 */
function extractConfidenceCategory(str) {
  const m = str.match(
    /^(Confirmed\s*\(strong\)|Confirmed\s*\(partial\)|Recommended\s*\(strong\)|Recommended|Unknown|To confirm)/i
  );
  if (m) return m[1].trim();
  // Fall back: first sentence
  return str.split(/\.\s+/)[0].replace(/\.\s*$/, '').trim();
}

/**
 * Parse a Markdown pipe table, returning rows as string arrays (skipping header + separator).
 */
function parseMarkdownTable(text) {
  const lines = text.split('\n').filter(l => /^\s*\|/.test(l));
  if (lines.length < 3) return [];
  return lines
    .slice(2)
    .map(l => l.split('|').slice(1, -1).map(c => c.trim()))
    .filter(r => r.length >= 2 && r[0]);
}


// =============================================================================
// RENDER UTILITIES
// =============================================================================

function escHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Render a confidence chip for light backgrounds.
 */
function renderChip(confidence) {
  const c = (confidence || '').toLowerCase();
  let cls, text, style = '';

  if (c.includes('partial') || c === 'partial') {
    cls   = 'chip chip-confirmed';
    text  = 'Confirmed (partial)';
    style = ' style="background:rgba(30,58,52,.07);color:var(--pine-soft);border-color:rgba(30,58,52,.15);"';
  } else if (c.includes('confirmed') || c === 'strong') {
    cls  = 'chip chip-confirmed';
    text = c.includes('strong') ? 'Confirmed (strong)' : 'Confirmed';
  } else if (c.includes('recommended')) {
    cls  = 'chip chip-recommended';
    text = 'Recommended';
  } else if (c.includes('to confirm') || c === 'to confirm') {
    cls  = 'chip chip-toconfirm';
    text = 'To confirm';
  } else {
    cls  = 'chip chip-unknown';
    text = 'Unknown';
  }

  return `<span class="${cls}"${style}>${text}</span>`;
}

/**
 * Render a confidence chip for dark (pine) backgrounds.
 */
function renderChipDark(confidence) {
  const c = (confidence || '').toLowerCase();
  const dimStyle = 'background:rgba(255,255,255,.07);color:rgba(232,239,236,.55);border-color:rgba(255,255,255,.12)';

  if (c.includes('confirmed') && !c.includes('partial')) {
    return `<span class="chip chip-confirmed" style="background:rgba(46,81,72,.5);color:rgba(232,239,236,.85);border:1px solid rgba(232,239,236,.2);">Confirmed</span>`;
  }
  if (c.includes('to confirm')) {
    return `<span class="chip chip-toconfirm" style="background:rgba(192,106,69,.15);color:var(--terra-light);border-color:rgba(192,106,69,.3);">To confirm</span>`;
  }
  return `<span class="chip chip-recommended" style="${dimStyle}">Recommended</span>`;
}

/**
 * Render a chip for confirmed evidence tables (confidence is "strong" or "partial").
 */
function renderChipConfirmed(conf) {
  const c = (conf || '').toLowerCase();
  if (c.includes('partial') || c === 'partial') {
    return `<span class="chip chip-confirmed" style="background:rgba(30,58,52,.07);color:var(--pine-soft);border-color:rgba(30,58,52,.15);">Confirmed (partial)</span>`;
  }
  return `<span class="chip chip-confirmed">Confirmed (strong)</span>`;
}

/**
 * Extract backtick-wrapped words from a string.
 */
function extractBacktickWords(text) {
  const words = [];
  const re = /`([^`]+)`/g;
  let m;
  while ((m = re.exec(text)) !== null) words.push(m[1]);
  return words;
}

/**
 * Extract a short chip label from a trait/anti-trait list item.
 * "- Not clinical or medical in tone — despite..." → "Clinical or medical in tone"
 * "- Direct and specific — uses exact numbers..." → "Direct and specific"
 */
function extractChipLabel(traitLine) {
  let t = traitLine.replace(/^-\s*/, '').replace(/^Not\s+/i, '').trim();
  const dashIdx = t.indexOf(' — ');
  if (dashIdx >= 0) t = t.slice(0, dashIdx);
  return t.trim();
}

/**
 * Render a bullet list from an array of strings (with or without "- " prefix).
 */
function renderBulletList(items) {
  if (!items.length) return '';
  const lis = items
    .map(i => `<li>${escHtml(i.replace(/^-\s*/, ''))}</li>`)
    .join('\n          ');
  return `<ul class="bullet-list">\n          ${lis}\n        </ul>`;
}


// =============================================================================
// SECTION RENDERERS
// =============================================================================

function renderReadinessStatus(content) {
  if (!content) return '';
  const statusMatch = content.match(/Status:\s*\*\*([^*]+)\*\*/);
  if (!statusMatch) return '';
  const status = statusMatch[1].trim();

  if (/ready/i.test(status) && !/draft/i.test(status)) {
    return `<span class="badge badge-ready"><span class="badge-dot"></span>Ready</span>`;
  }
  // Draft status — banner removed per spec
  return '';
}

function renderReadinessNote(content) {
  // Per spec: draft banner is removed entirely; no note shown
  return '';
}

function renderBusinessSnapshotRows(fields) {
  if (!fields.length) return '';
  return fields.map(f => {
    const listItems = f.valueLines.filter(l => l.startsWith('- '));
    const textLines = f.valueLines.filter(l => !l.startsWith('- '));

    let valueHtml = textLines.map(t => escHtml(t)).join('<br>');
    if (listItems.length) {
      const lis = listItems.map(l => `<li>${escHtml(l.slice(2))}</li>`).join('');
      valueHtml += `<ul>${lis}</ul>`;
    }

    return `            <tr>
              <td class="ft-label">${escHtml(f.label)}</td>
              <td class="ft-value">${valueHtml}</td>
              <td class="ft-chip">${renderChip(f.confidence)}</td>
            </tr>`;
  }).join('\n');
}

function renderBrandStrategy(content) {
  if (!content) return '';
  const fields = parseFields(content);
  const get    = label => fields.find(f => f.label.toLowerCase().includes(label.toLowerCase()));

  const pos    = get('positioning statement');
  const prob   = get('core problem');
  const feel   = get('desired feeling');
  const mktPos = get('market position');
  const diff   = get('differentiator');

  let html = '';

  // Positioning statement (dark band)
  if (pos) {
    const posText = pos.valueLines.join(' ');
    html += `
    <div class="pos-band mb-md">
      <div class="kicker kicker-terra mb-sm">Positioning statement</div>
      <p class="pos-statement">${escHtml(posText)}</p>
      <div class="pos-chip-row">
        <span class="chip chip-recommended" style="background:rgba(255,255,255,.07);color:rgba(232,239,236,.55);border-color:rgba(255,255,255,.12);">Recommended</span>
      </div>
    </div>`;
  }

  // Core problem + Desired feeling (2-column grid)
  if (prob || feel) {
    html += '\n    <div class="g2 mb-md">';

    if (prob) {
      html += `
      <div class="card-flat">
        <div class="field-label mb-sm">Core problem</div>
        <p style="font-size:.9rem;color:var(--ink-soft);line-height:1.65;">${escHtml(prob.valueLines.join(' '))}</p>
        <div style="margin-top:1rem;">${renderChip(prob.confidence)}</div>
      </div>`;
    }

    if (feel) {
      const feelText = feel.valueLines.join(' ');
      const chips    = extractBacktickWords(feelText);
      const chipsHtml = chips.length
        ? chips.map(w => `<span class="chip chip-trait" style="font-size:.8rem;">${escHtml(w)}</span>`).join('\n          ')
        : escHtml(feelText);
      html += `
      <div class="card-flat">
        <div class="field-label mb-sm">Desired feeling</div>
        <div class="chip-cluster">${chipsHtml}</div>
        <div style="margin-top:1rem;">${renderChip(feel.confidence)}</div>
      </div>`;
    }

    html += '\n    </div>';
  }

  // Market position
  if (mktPos) {
    html += `
    <div class="card-flat mb-md">
      <div class="field-label mb-sm">Market position</div>
      <p style="font-size:.9rem;color:var(--ink-soft);line-height:1.65;margin-bottom:.75rem;">${escHtml(mktPos.valueLines.join(' '))}</p>
      ${renderChip(mktPos.confidence)}
    </div>`;
  }

  // Differentiators
  if (diff) {
    const listItems = diff.valueLines.filter(l => l.startsWith('- '));
    const fallback  = diff.valueLines.filter(l => !l.startsWith('- '));
    const listHtml  = listItems.length ? renderBulletList(listItems) : renderBulletList(fallback);
    html += `
    <div class="card-flat">
      <div class="field-label mb-sm">Differentiators</div>
      ${listHtml}
      <div style="margin-top:1rem;">${renderChip(diff.confidence)}</div>
    </div>`;
  }

  return html;
}

function renderConversionContext(content) {
  if (!content) return '';
  const fields = parseFields(content);
  const get    = label => fields.find(f => f.label.toLowerCase().includes(label.toLowerCase()));

  const urgency   = get('buyer urgency');
  const trust     = get('trust burden');
  const objection = get('main objection');
  const proof     = get('proof needed');
  const cta       = get('primary action') || get('primary cta') || get('cta');

  const dimChip = `<span class="chip chip-recommended" style="background:rgba(255,255,255,.07);color:rgba(232,239,236,.55);border-color:rgba(255,255,255,.12);">Recommended</span>`;

  const simpleField = (field, fullWidth = false) => {
    if (!field) return '';
    const spanStyle = fullWidth ? ' style="grid-column:1/-1;"' : '';
    const fullText  = field.valueLines.join(' ');
    // Split "High — description" into level + note
    const dashIdx   = fullText.indexOf(' — ');
    const level     = dashIdx > -1 ? fullText.slice(0, dashIdx) : fullText;
    const note      = dashIdx > -1 ? fullText.slice(dashIdx + 3) : '';
    const chip      = renderChipDark(field.confidence);
    return `
      <div class="conv-field"${spanStyle}>
        <div class="conv-heading">${escHtml(field.label)}</div>
        <div class="conv-value conv-value-terra">${escHtml(level)}</div>
        ${note ? `<p class="conv-note">${escHtml(note)}</p>` : ''}
        <div style="margin-top:.75rem;">${chip}</div>
      </div>`;
  };

  let html = '<div class="conv-grid">';

  if (urgency) html += simpleField(urgency);
  if (trust)   html += simpleField(trust);

  // Main objection — use quote style
  if (objection) {
    const qt   = objection.valueLines[0] || '';
    const rest = objection.valueLines.slice(1).join(' ');
    html += `
      <div class="conv-field" style="grid-column:1/-1;">
        <div class="conv-heading">${escHtml(objection.label)}</div>
        <p class="conv-quote">${escHtml(qt)}</p>
        ${rest ? `<p class="conv-note" style="margin-top:.75rem;">${escHtml(rest)}</p>` : ''}
        <div style="margin-top:.75rem;">${dimChip}</div>
      </div>`;
  }

  // Proof needed — chip-cluster
  if (proof) {
    const items = proof.valueLines.filter(l => l.startsWith('- ')).map(l => l.slice(2).trim());
    const bulletsHtml = items.map(item =>
      `<li style="font-size:.85rem;color:rgba(232,239,236,.75);line-height:1.6;">${escHtml(item)}</li>`
    ).join('\n          ');
    html += `
      <div class="conv-field" style="grid-column:1/-1;">
        <div class="conv-heading">${escHtml(proof.label)}</div>
        <ul style="margin:.5rem 0 0 1rem;padding:0;list-style:disc;">${bulletsHtml}</ul>
        <div style="margin-top:.75rem;">${dimChip}</div>
      </div>`;
  }

  // Primary CTA
  if (cta) {
    const ctaText = cta.valueLines.join(' ');
    html += `
      <div class="conv-field" style="grid-column:1/-1;">
        <div class="conv-heading">${escHtml(cta.label)}</div>
        <div class="conv-value">${escHtml(ctaText)}</div>
        <div style="margin-top:.75rem;">${renderChipDark(cta.confidence)}</div>
      </div>`;
  }

  html += '\n    </div>';
  return html;
}

function renderBrandVoice(content) {
  if (!content) return '';
  const fields = parseFields(content);
  const get    = label => fields.find(f => f.label.toLowerCase().includes(label.toLowerCase()));

  const traits     = get('core traits');
  const antiTraits = get('anti-traits') || get('anti traits');
  const archetype  = get('brand archetype') || get('archetype');
  const voiceRules = get('voice rules');
  const msgPat     = get('messaging patterns');
  const avoidWords = get('words to avoid');

  let html = '';

  // Core traits + Anti-traits (2-column grid)
  if (traits || antiTraits) {
    html += '\n    <div class="g2 mb-md">';
    if (traits) {
      const items     = traits.valueLines.filter(l => l.startsWith('- ')).map(extractChipLabel);
      const chipsHtml = items.map(t => `<span class="chip chip-trait">${escHtml(t)}</span>`).join('\n          ');
      html += `
      <div class="card-flat">
        <div class="field-label mb-sm">Core traits</div>
        <div class="chip-cluster">${chipsHtml}</div>
        <div style="margin-top:1rem;">${renderChip(traits.confidence)}</div>
      </div>`;
    }
    if (antiTraits) {
      const items     = antiTraits.valueLines.filter(l => l.startsWith('- ')).map(extractChipLabel);
      const chipsHtml = items.map(t => `<span class="chip chip-anti">${escHtml(t)}</span>`).join('\n          ');
      html += `
      <div class="card-flat">
        <div class="field-label mb-sm">Anti-traits</div>
        <div class="chip-cluster">${chipsHtml}</div>
        <div style="margin-top:1rem;">${renderChip(antiTraits.confidence)}</div>
      </div>`;
    }
    html += '\n    </div>';
  }

  // Brand archetype
  if (archetype) {
    const fullText   = archetype.valueLines.join(' ').replace(/^\(optional\):\s*/i, '');
    const dashIdx    = fullText.indexOf(' — ');
    const arcTitle   = dashIdx > -1 ? fullText.slice(0, dashIdx) : fullText;
    const arcNote    = dashIdx > -1 ? fullText.slice(dashIdx + 3) : '';
    html += `
    <div class="pine-card mb-md">
      <div class="field-label mb-sm">Brand archetype</div>
      <div class="arch-label mb-sm">${escHtml(arcTitle)}</div>
      ${arcNote ? `<p style="font-size:.9rem;color:var(--ink-soft);line-height:1.65;">${escHtml(arcNote)}</p>` : ''}
      <div style="margin-top:1rem;">${renderChip(archetype.confidence)}</div>
    </div>`;
  }

  // Voice rules
  if (voiceRules) {
    const rules     = voiceRules.valueLines.filter(l => l.startsWith('- ')).map(l => l.slice(2).trim());
    const rulesHtml = rules.map((r, i) =>
      `<li><span class="rule-num">${String(i + 1).padStart(2, '0')}</span>${escHtml(r)}</li>`
    ).join('\n            ');
    html += `
    <div class="card mb-md">
      <div class="card-inner">
        <div class="field-label mb-sm">Voice rules</div>
        <ol class="rule-list">
            ${rulesHtml}
        </ol>
        <div style="margin-top:1rem;">${renderChip(voiceRules.confidence)}</div>
      </div>
    </div>`;
  }

  // Messaging patterns + Words to avoid (2-column grid)
  if (msgPat || avoidWords) {
    html += '\n    <div class="g2">';
    if (msgPat) {
      const patterns  = msgPat.valueLines.filter(l => l.startsWith('- ')).map(l => l.slice(2).trim());
      const codesHtml = patterns.map(p => `<code>${escHtml(p)}</code>`).join('\n          ');
      html += `
      <div class="card-flat">
        <div class="field-label mb-sm">Messaging patterns</div>
        <div class="pattern-block">${codesHtml}</div>
        <div style="margin-top:1rem;">${renderChip(msgPat.confidence)}</div>
      </div>`;
    }
    if (avoidWords) {
      const words = avoidWords.valueLines.filter(l => l.startsWith('- ')).map(l => {
        // Extract quoted word/phrase first, fall back to chip label
        const m = l.match(/"([^"]+)"|"([^"]+)"|`([^`]+)`/);
        return m ? (m[1] || m[2] || m[3]) : extractChipLabel(l);
      });
      const chipsHtml = words.map(w => `<span class="chip chip-avoid">${escHtml(w)}</span>`).join('\n          ');
      html += `
      <div class="card-flat">
        <div class="field-label mb-sm">Words to avoid</div>
        <div class="chip-cluster">${chipsHtml}</div>
        <div style="margin-top:1rem;">${renderChip(avoidWords.confidence)}</div>
      </div>`;
    }
    html += '\n    </div>';
  }

  return html;
}

function renderVisualCues(content) {
  if (!content) return '';
  const fields = parseFields(content);
  if (!fields.length) return '';

  const rows = fields.map(f => {
    const valHtml = escHtml(f.valueLines.join(' '));
    return `            <tr>
              <td class="ft-label">${escHtml(f.label)}</td>
              <td class="ft-value">${valHtml}</td>
              <td class="ft-chip">${renderChip(f.confidence)}</td>
            </tr>`;
  }).join('\n');

  return `
    <div class="card">
      <div class="card-inner" style="padding:0 1.75rem;">
        <table class="ft">
          <tbody>
${rows}
          </tbody>
        </table>
      </div>
    </div>`;
}

function renderSourcesList(content) {
  if (!content) return '';
  const lines = content.split('\n');
  const items = [];

  // Parse confirmed facts and recommended table rows
  // Table format: | Fact | Confidence | Source |
  // Skip header rows (| --- |) and empty lines
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed.startsWith('|')) continue;
    if (trimmed.includes('---')) continue; // separator row
    if (trimmed.toLowerCase().includes('fact') && trimmed.toLowerCase().includes('source')) continue; // header row
    if (trimmed.toLowerCase().includes('inference') && trimmed.toLowerCase().includes('signal')) continue; // header row

    // Parse table cells
    const cells = trimmed.split('|').map(c => c.trim()).filter(Boolean);
    if (cells.length < 2) continue;

    const fact   = cells[0] || '';
    const source = cells[cells.length - 1] || ''; // last cell is source
    const chip   = cells[1] || ''; // confidence / status

    if (!fact || fact.toLowerCase() === 'fact' || fact.toLowerCase() === 'inference') continue;

    // Build "To confirm" chip if needed
    const toConfirmHtml = chip.toLowerCase().includes('to confirm')
      ? ' <span class="chip chip-toconfirm" style="margin-left:.4rem;font-size:.65rem;">To confirm</span>'
      : '';

    // Build "Recommended" chip if the chip cell says recommended
    const recommendedHtml = chip.toLowerCase().includes('recommended')
      ? ' <span class="chip chip-recommended" style="margin-left:.4rem;font-size:.65rem;">Recommended</span>'
      : '';

    const chipHtml = toConfirmHtml || recommendedHtml;
    items.push(`<li>${escHtml(fact)}${chipHtml}${source ? ` <em>${escHtml(source)}</em>` : ''}</li>`);
  }

  // Also parse unknowns (bullet list under **Unknowns:** or ## Unknowns)
  const unknownsMatch = content.match(/(?:\*\*Unknowns[^*]*\*\*|##\s*Unknowns?)([\s\S]*?)(?=\n\*\*[A-Z]|\n##|\n---+|$)/i);
  if (unknownsMatch) {
    const unknownLines = unknownsMatch[1].split('\n').filter(l => l.trim().startsWith('- '));
    for (const ul of unknownLines) {
      const text = ul.trim().slice(2).trim();
      if (text) items.push(`<li>${escHtml(text)} <span class="chip chip-unknown" style="font-size:.65rem;margin-left:.4rem;">Unknown</span></li>`);
    }
  }

  return items.join('\n      ');
}

function renderClientQuestions(content) {
  if (!content || !content.trim()) return '';

  const questions = content
    .split('\n')
    .map(l => l.match(/^(\d+)\.\s+(.+)/))
    .filter(Boolean)
    .map((m, i) => {
      const text = m[2].trim();
      const qi   = text.indexOf('?');
      const q    = qi >= 0 ? text.slice(0, qi + 1).trim() : text;
      const note = qi >= 0 && qi < text.length - 1 ? text.slice(qi + 1).trim() : '';
      return { num: String(i + 1).padStart(2, '0'), q, note };
    });

  if (!questions.length) return '';

  const cards = questions.map(({ num, q, note }) => `
    <div class="qcard">
      <div class="qcard-num">${num}</div>
      <p class="qcard-q">${escHtml(q)}</p>
      ${note ? `<p class="qcard-note">${escHtml(note)}</p>` : ''}
    </div>`).join('');

  return `
<section class="bg-pine">
  <div class="section-inner">
    <div class="section-label section-label-dark">
      <span class="kicker kicker-pine">A few questions</span>
    </div>
    <h2 class="sh sh-light" style="margin-bottom:.5rem;">Let's confirm a few things together</h2>
    <p style="font-size:.9rem;color:rgba(255,255,255,.45);margin-bottom:2.5rem;line-height:1.6;">These items remain open. Nothing blocks planning, but they should be resolved before copy is finalized.</p>
    ${cards}
  </div>
</section>`;
}
