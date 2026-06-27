# Branding Visual Guide — Generator Handoff
## Quan Pho
**Version:** v2
**Date:** 2026-06-27

---

## North star

Vietnamese nightlife with warmth and edge — moody, alive, specific, and always worth telling someone about.

---

## Direction mix

* Primary direction: Editorial / Human — 65%
* Secondary influence: Cutting-edge / Innovative — 35%

---

## Locked color system

Logo confirmed as gold circle badge with crimson type. Physical neon green is in-store signage only — not carried into digital system. Palette is fully locked with no accent color.

* Base (primary surface): Near-black, warm brown undertone — `#0E0B09`
* Surface (raised): Warm dark card surface — `#1C1510`
* Surface (elevated): Warm elevated component surface — `#261C14`
* Anchor (primary): Deep Vietnamese crimson — `#B5202B`; hover `#C92535`; wash `#2A1015`
* Secondary: Warm amber-gold (echoes logo badge) — `#D4A030`; warm variant `#E5B843`
* Accent: None
* Text primary: Warm off-white — `#F2EBE0`
* Text secondary: Warm mid-tone — `#A89880`
* Usage ratio: Neutrals 60% / Anchor red 20% / Secondary gold 20%

---

## Locked typography system

* Primary reading font: **Be Vietnam Pro** — body copy, UI labels, navigation, button text ~85%
* Accent / display font: **Fraunces** — hero phrases, large section headers, editorial signature moments ~15%
* Script font: None
* Tone: Human / Editorial
* Hierarchy: Strong — high contrast between Fraunces display and Be Vietnam Pro body
* Heading behavior: Sentence case; tight tracking at display sizes; Fraunces bold for hero, Be Vietnam Pro medium-regular for subheads
* Body behavior: Regular (400) default weight, medium (500) for emphasis; plain readable tone; short direct sentences
* Signature typographic move: Fraunces italic at large display size on near-black — warm off-white, used once per section maximum

---

## Locked layout rhythm

* Layout mode: Flow-based
* Rhythm: Alternating (image-dominant / text-dominant sections)
* Density: Spacious
* Section pacing: Energetic/Narrative — nightlife pace, not fine dining pace
* Hero structure: text + product — bar/food atmosphere photography with large Fraunces headline + dual CTA (Order online + Book your party) above fold
* Section patterns:
  1. Full-width narrative (hero, karaoke event slab)
  2. Card grid — 3-column max desktop, collapses to 1 column mobile (menu highlights, cocktails)
  3. Proof band (Google review strip — star rating + named short quotes)
  4. CTA band (party booking — full-width, high contrast, direct)
  5. Event block (Saturday Karaoke — specific 8PM time, weekly recurrence, crimson CTA)

---

## Locked component language

* Overall feel: Soft / Rounded
* Card language: Shadow-led on dark surfaces; subtle warm border on hover; cards should glow slightly against the near-black background
* Button language:
  * Primary: Filled, rounded rectangle, deep crimson `#B5202B` — assertive
  * Secondary: Outline, rounded rectangle, warm off-white `#F2EBE0` — quiet alternate
  * Never: Pill shape, sharp square corners, ghost-only for primary actions
* Form language: Warm / High-trust — personal, not widget-like
* Navigation feel: Quiet — dark slim bar, logo + 2–3 key links visible above fold
* Proof modules:
  1. Review strip (Google 5★ short named quotes)
  2. Credential bar (Yelp 4.0★, Google rating, review count)
  3. Quote blocks (dish or experience call-outs)
  4. Founder note — chef photo + credential line ("Family-owned. Chef trained in Vietnam for X years.") — photo confirmed, years pending client follow-up
  5. Service proof row (bar photo, food photo, karaoke — side by side with short labels)
* Signature component: **Event announcement slab** — full-width dark-surface block, Fraunces italic large heading ("Saturday Karaoke Nights"), Be Vietnam Pro bold time and date, single crimson CTA. Appears once on home page.

---

## Locked imagery direction

* Photography direction: Environment-led + Product-led
* Subject priority: Place first (bar interior, lanterns, street mural, atmosphere), Product second (food and cocktail close-up)
* Mood: Warm, Intimate, Moody
* Lighting: Available ambient — pendant lights, neon sign glow, red lanterns, warm natural shadows
* Composition: Close (food/cocktail detail) + Wide (interior atmosphere); no medium-formal posed portraits
* Illustration / icon direction: Minimal — functional icons only (navigation, UI affordances); no decorative illustration

---

## Locked motion level

* Level: Restrained
* Role: Reveal + Hover
* Scroll behavior: Fade-up (300–400ms, section entrance); no parallax; no complex band sequences
* Button interaction: Tactile — subtle scale (1.02) or color shift on hover/press
* Performance rule: Animate section entrances and hover states only. Never animate photography, body text, background elements, or navigation.
* Reduced motion: Required — honor `prefers-reduced-motion`, disable all entrance animations when set

---

## Signature move

Fraunces italic at large display size (hero or section intro), warm off-white `#F2EBE0` on near-black `#0E0B09`. Used once per section maximum.

---

## Do / Don't rules

### Do

* Lead every section with atmosphere — show the space before the menu
* Name the Spicy Pho Ti-Ni and Saturday Karaoke 8PM in or immediately below the hero
* Use Fraunces italic for single hero phrases: "Come out tonight." "Pho and cocktails on Route 1 North."
* Keep the dark base dark — never soften near-black to gray
* Show dual CTA (Order online + Book your party) above fold on every screen size
* Use real named Google review quotes — short, specific, tied to the experience
* Show the physical bar section — at minimum one full-width photo of the actual bar
* Let food photography breathe — featured dishes get full-width or near-full-width treatment
* Treat "Saturday karaoke 8PM" as a recurring event announcement, not sidebar copy

### Don't

* Don't use white or near-white backgrounds in any primary section
* Don't show a menu list without photography
* Don't use stock photography of any kind
* Don't apply fine dining fonts, pacing, or minimalism to sections that serve bar customers
* Don't make party booking a secondary CTA buried below the fold
* Don't embed a generic reservation widget that doesn't match the visual system
* Don't repeat "authentic" without a specific dish, cocktail, or cultural reference
* Don't apply anchor red to body text or as a large background wash
* Don't design desktop-first — this audience browses mobile before deciding to go out

---

## CSS tokens

```css
:root {
  /* Base surfaces */
  --color-base:           #0E0B09;
  --color-surface:        #1C1510;
  --color-surface-raised: #261C14;

  /* Anchor */
  --color-anchor:         #B5202B;
  --color-anchor-hover:   #C92535;
  --color-anchor-wash:    #2A1015;

  /* Secondary */
  --color-secondary:      #D4A030;
  --color-secondary-warm: #E5B843;

  /* Text */
  --color-text-primary:   #F2EBE0;
  --color-text-secondary: #A89880;

  /* Typography */
  --font-display:  'Fraunces', Georgia, serif;
  --font-body:     'Be Vietnam Pro', system-ui, sans-serif;

  /* Usage ratio: neutrals 60% / anchor 20% / secondary 20% */
}
```

---

## Tentative decisions

* **Founder note:** Chef photo confirmed available. Story line: "Family-owned. Chef trained in Vietnam for X years." — specific years pending client follow-up. Layout slot and module design locked; copy placeholder only until years confirmed.

---

## Required output sections

The Branding Visual Guide must include:

* Real palette swatches (5 colors minimum: base, surface, anchor, secondary, text-primary)
* Actual font recommendations: **Be Vietnam Pro** + **Fraunces** — Google Fonts URLs
* Section rhythm (flow-based, alternating image/text, spacious density)
* Component rules (card, button, navigation, form)
* Imagery rules (environment-led, no stock, ambient lighting)
* Do / Don't list (see above)
* Mockup directions for: hero, karaoke event slab, proof band, party CTA band
* Design tokens (:root CSS block above)

---

## Generator constraints

The generator must not:

* Invent business facts (party capacity, delivery radius, pricing, founder details)
* Introduce random accent colors beyond the defined palette
* Use generic SaaS UI defaults (card metrics, icon feature rows, dashboard chrome)
* Contradict the dark base with white section backgrounds
* Ignore the proof module requirement — Google reviews and bar evidence are critical to trust
* Over-stylize with decorative illustration or cultural imagery not provided by the client
* Apply motion beyond restrained fade-up and hover states
* Break the Fraunces / Be Vietnam Pro pairing with additional typefaces

---

## Readiness

Ready with tentative assumptions.

One tentative item: founder note copy (chef years of experience pending). Does not block generation.
