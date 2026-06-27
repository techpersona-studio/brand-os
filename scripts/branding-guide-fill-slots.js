/**
 * Fill slot definitions for branding visual guide scaffold.
 * Used by generate-branding-guide.js (manifest) and merge-branding-fills.js (validation).
 */

'use strict';

const { HTML_PATTERNS } = require('./branding-guide-html-patterns');

const FILL_SLOTS = [
  { id: 'cover_title', section: 'Cover', format: 'html', instruction: '3–4 line headline with <br>. Last line: <span class="serif-accent">word.</span>' },
  { id: 'cover_thesis', section: 'Cover', format: 'text', instruction: 'North star sentence. Max 20 words. (Script pre-filled when possible.)' },

  { id: 's01_feel', section: '01 — Visual north star', format: 'html', instruction: '<strong>The brand should feel like:</strong> prose, then <strong>Not like:</strong> prose.' },
  { id: 's01_positive_adjs', section: '01 — Visual north star', format: 'html', instruction: '3 × <div class="adj-item">Adjective</div>' },
  { id: 's01_negative_adjs', section: '01 — Visual north star', format: 'html', instruction: '3 × <div class="adj-item">Adjective</div>' },

  { id: 's02_h2', section: '02 — Direction mix', format: 'text', instruction: 'Leading direction headline. (Script pre-filled when possible.)' },
  { id: 's02_rationale', section: '02 — Direction mix', format: 'text', instruction: '2–3 sentences on primary vs secondary direction mix.' },
  { id: 's02_prevents', section: '02 — Direction mix', format: 'html', instruction: '3–4 × <li> only for dont-list.' },

  { id: 's03_h2', section: '03 — Color system', format: 'text', instruction: 'Short palette headline.' },
  { id: 's03_intro', section: '03 — Color system', format: 'text', instruction: '2 sentences: neutrals, anchor, accent usage.' },
  { id: 's03_ratio_note', section: '03 — Color system', format: 'html', instruction: '1–2 sentences + flex ratio bar (var(--base-deep), var(--anchor), var(--accent)).' },
  { id: 's03_never', section: '03 — Color system', format: 'html', instruction: '4–5 × <li> color anti-patterns.' },

  { id: 's04_h2', section: '04 — Typography system', format: 'text', instruction: 'Font pairing headline from handoff.' },
  { id: 's04_intro', section: '04 — Typography system', format: 'text', instruction: '2–3 sentences on primary/accent font roles and %.' },
  { id: 's04_specimens', section: '04 — Typography system', format: 'html', instruction: 'Use htmlPattern. Replace [PLACEHOLDER] text only.' },
  { id: 's04_scale_table', section: '04 — Typography system', format: 'html', instruction: '<tr> rows: Display, H1, H2, H3, Body, Label, Caption.' },

  { id: 's05_h2', section: '05 — Layout rhythm', format: 'text', instruction: 'Layout mode headline.' },
  { id: 's05_intro', section: '05 — Layout rhythm', format: 'text', instruction: '1–2 sentences on page narrative arc.' },
  { id: 's05_band_diagram', section: '05 — Layout rhythm', format: 'html', instruction: 'Script pre-filled: hex backgrounds from handoff palette. Do not fill manually.' },
  { id: 's05_band_note', section: '05 — Layout rhythm', format: 'text', instruction: 'Adjacent band rule. (Script pre-filled when possible.)' },
  { id: 's05_grid_table', section: '05 — Layout rhythm', format: 'html', instruction: '<tr> rows for grid/spacing specs.' },
  { id: 's05_patterns', section: '05 — Layout rhythm', format: 'html', instruction: '4–5 × <li> section patterns.' },

  { id: 's06_h2', section: '06 — Component language', format: 'text', instruction: 'Component feel headline from handoff.' },
  { id: 's06_card_and_buttons', section: '06 — Component language', format: 'html', instruction: 'Use htmlPattern. Replace [PLACEHOLDER] text only.' },
  { id: 's06_chips_and_cred', section: '06 — Component language', format: 'html', instruction: 'Use htmlPattern. Replace [PLACEHOLDER] text only.' },
  { id: 's06_radius', section: '06 — Component language', format: 'html', instruction: 'Script pre-filled from design tokens.' },

  { id: 's07_h2', section: '07 — Proof presentation', format: 'text', instruction: 'Proof strategy headline.' },
  { id: 's07_intro', section: '07 — Proof presentation', format: 'text', instruction: '1–2 sentences on trust burden + strategy.' },
  { id: 's07_phases', section: '07 — Proof presentation', format: 'html', instruction: 'Use htmlPattern. Replace [PLACEHOLDER] text only.' },
  { id: 's07_no_fabricate', section: '07 — Proof presentation', format: 'html', instruction: '4–5 × <li> fabrication prohibitions.' },

  { id: 's08_h2', section: '08 — Imagery', format: 'text', instruction: 'Imagery headline.' },
  { id: 's08_photo_table', section: '08 — Imagery', format: 'html', instruction: '<tr> rows from handoff. (Script pre-filled when possible.)' },
  { id: 's08_never', section: '08 — Imagery', format: 'html', instruction: '6–7 × <li> imagery anti-patterns.' },

  { id: 's09_motion_table', section: '09 — Motion', format: 'html', instruction: '<tr> rows from handoff. (Script pre-filled when possible.)' },
  { id: 's09_no_animate', section: '09 — Motion', format: 'html', instruction: '5–6 × <li> motion prohibitions.' },

  { id: 's10_section_table', section: '10 — Homepage application', format: 'html', instruction: '<tr> rows: #, Section, Background token, Purpose.' },
  { id: 's10_hero_mockup', section: '10 — Homepage application', format: 'html', instruction: 'Use htmlPattern. Replace [PLACEHOLDER] text only.' },
  { id: 's10_proof_mockup', section: '10 — Homepage application', format: 'html', instruction: 'Use htmlPattern. Replace [PLACEHOLDER] text only.' },
  { id: 's10_cta_mockup', section: '10 — Homepage application', format: 'html', instruction: 'Use htmlPattern. Replace [PLACEHOLDER] text only.' },

  { id: 's13_preserve', section: '13 — Implementation notes', format: 'html', instruction: '6–7 × <li> for .impl-list must-preserve rules.' },
  { id: 's13_a11y', section: '13 — Implementation notes', format: 'html', instruction: '6–7 × <li> accessibility rules.' },
  { id: 's13_no_improvise', section: '13 — Implementation notes', format: 'html', instruction: '4–5 × <li> hard locks for future agents.' },
];

module.exports = { FILL_SLOTS, HTML_PATTERNS };
