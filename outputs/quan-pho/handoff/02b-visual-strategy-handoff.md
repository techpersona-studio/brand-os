# Branding Visual Guide — Generator Handoff
**Client:** Quán Phở (Quan Pho)
**Version:** v2
**Date:** 2026-06-27

---

## North star

Street-born Vietnamese energy — warm, moody, and built for a night out.

---

## Direction mix

* Primary direction: Editorial / Human — 70%
* Secondary influence: Cutting-edge / Innovative — 30%

---

## Locked color system

* Base (page background): Very dark warm near-black — `#181008`
* Surface (cards, section fills): Dark warm brown — `#241810`
* Neutral (text secondary, dividers): Warm mid-tone brown — `#5C4232`
* Text primary: Warm cream off-white — `#F0E8D0`
* Text muted: Warm tan — `#A08060`
* Anchor (primary brand color): Warm golden-yellow — `#F2B928`; hover `#E0A820`; wash `#F2B92812`
* Secondary: Deep Vietnamese crimson — `#C23528`; hover `#A82E22`
* Neon signature (logo / brand mark only): `#52E074`
* Usage ratio: Neutrals 65% / Gold anchor 20% / Crimson secondary 10% / Neon signature logo only

---

## Locked typography system

* Primary reading font: **Be Vietnam Pro** — body, UI, navigation, labels ~90%
* Accent / display font: **Cormorant Garamond** — hero taglines, pull quotes, display moments ~10%
* Script font: None
* Tone: Editorial / Human with warm contemporary edge
* Hierarchy: Strong — high weight contrast required on dark backgrounds
* Heading behavior: Sentence case, tight tracking on display sizes (`letter-spacing: -0.02em`), Bold weight
* Body behavior: Plain and clear; Regular (400) for body, Medium (500) for labels and nav; warm direct present-tense tone

---

## Locked layout rhythm

* Layout mode: Flow-based — immersive narrative sections, not modular app-style grid
* Rhythm: Alternating — dark full-bleed and slightly lighter card sections
* Density: Balanced — generous space around photography
* Hero structure: Editorial stack — full-bleed dark interior image, Cormorant Garamond Italic gold tagline overlay, gold filled "Order Now" primary CTA, gold outline "Book a Party" secondary CTA — both above the fold
* Section patterns:
  1. Full-width narrative (hero, atmosphere sections)
  2. Card grid (menu items, 3-column desktop)
  3. Proof band (review strip with stars + quote)
  4. CTA band (Book a Party — full width, gold button)
  5. Quote section (featured 5-star review, large Cormorant Garamond quote mark)

---

## Locked component language

* Overall feel: Soft / Rounded — approachable and warm
* Card language: Flat with subtle warm border `#5C4232` at low opacity; no drop shadows on dark base
* Button language:
  * Primary: Filled, Rounded rectangle, Assertive — gold `#F2B928` on dark, Be Vietnam Pro Bold, uppercase
  * Secondary: Outline, Rounded rectangle, Quiet — gold border + gold text `#F2B928` (used for "Book a Party")
  * Tertiary: Ghost / text-link — cream underline
* Proof modules:
  1. Review strip (Google stars + short quote on gold band)
  2. Quote block (featured 5-star review at large scale with Cormorant Garamond quote mark)
  3. Trust banner ("formerly Long's Noodle House — same family, same address")
  4. Credential bar (Yelp 4.0★, Google rating, karaoke night promo)
  5. Testimonial cards (horizontal scroll on mobile)
* Signature component: Bar promo strip — full-width section, crimson `#C23528` background, gold text: "1 free spring roll with any bar drink. Sit at the bar." Be Vietnam Pro Bold, gold CTA "See the menu." Appears above the footer. This is the only red-dominant section on the page.

---

## Locked imagery direction

* Photography direction: Environment-led + Product-led + People-led
* Subject priority: Place (bar, interior atmosphere) first; Product (food close-ups) second; People (group bar energy) third
* Mood: Warm, Intimate, Energetic — evening atmosphere
* Lighting: Moody — existing dark high-quality interior shots are the reference standard; warm overhead pendants, not studio white
* Composition: Close-up for food; medium-wide for interior/bar; candid-to-documentary for people at the bar
* Illustration / icon direction: None — photo-only; full photo library confirmed

---

## Locked motion level

* Level: Restrained
* Role: Reveal + Hover
* Scroll behavior: Fade-up — sections fade in from 12px below, 300ms ease; not staggered; not dramatic
* Button hover: Gold `#F2B928` dims to `#E0A820`, 150ms ease transition; no scale transform, no glow
* Reduced motion: Required — all scroll animations must respect `prefers-reduced-motion`

---

## Signature move

Hero tagline in **Cormorant Garamond Italic** at display scale (64px+) in warm gold `#F2B928` on dark near-black base — used once in the hero and once as a section separator. Paired with a full-width **Bar promo strip** in crimson `#C23528` as the page's single bold red moment.

---

## CSS tokens

```css
:root {
  /* Color — Base */
  --color-base:            #181008;
  --color-surface:         #241810;
  --color-neutral:         #5C4232;
  --color-text-primary:    #F0E8D0;
  --color-text-muted:      #A08060;

  /* Color — Brand */
  --color-anchor:          #F2B928;
  --color-anchor-hover:    #E0A820;
  --color-anchor-wash:     #F2B92812;
  --color-secondary:       #C23528;
  --color-secondary-hover: #A82E22;
  --color-neon-signature:  #52E074; /* logo/brand mark only */

  /* Typography */
  --font-primary:          'Be Vietnam Pro', sans-serif;
  --font-display:          'Cormorant Garamond', serif;
  --font-weight-body:      400;
  --font-weight-label:     500;
  --font-weight-heading:   700;
  --font-tracking-display: -0.02em;
  --font-tracking-body:    0em;
  --line-height-body:      1.7;
  --line-height-heading:   1.1;

  /* Layout */
  --spacing-section:        80px;
  --spacing-section-mobile: 48px;
  --grid-max-width:         1200px;
  --grid-gutter:            24px;
  --border-radius-card:     8px;
  --border-radius-btn:      6px;

  /* Motion */
  --transition-btn:         150ms ease;
  --transition-reveal:      300ms ease;
  --reveal-offset:          12px;

  /* Components */
  --border-card:            1px solid rgba(92, 66, 50, 0.4);
  --btn-primary-bg:         var(--color-anchor);
  --btn-primary-text:       var(--color-base);
  --btn-secondary-border:   var(--color-anchor);
  --btn-secondary-text:     var(--color-anchor);
  --btn-tertiary-text:      var(--color-text-primary);
}
```

---

## Do / Don't rules

### Do

* Use existing dark moody interior photography as the visual anchor for every atmospheric section
* Name the cocktail and dishes specifically in callouts — "Spicy Pho Ti-Ni," not "signature cocktail"
* Put the gold CTA button above the fold on every major section
* Show both CTAs (Order Now + Book a Party) in the hero — both are live
* Use Be Vietnam Pro Bold for all short-sentence copy
* Keep the bar promo strip (free spring roll) visible early in the page flow
* Signal Saturday karaoke night with its own dedicated section or callout
* Use warm gold `#F2B928` for all interactive emphasis — one accent color, consistently applied
* Allow photography to breathe — generous padding on the dark base
* Use "formerly Long's Noodle House" lineage as trust copy

### Don't

* Don't use red as the dominant color on any page — crimson belongs to accent and bar promo strip only
* Don't add delivery copy until confirmed by client
* Don't use any stock photography — the existing photo library is the asset
* Don't use a light or white background on any full-page section
* Don't introduce a third typeface — Be Vietnam Pro + Cormorant Garamond is the complete system
* Don't use emojis, fire icons, or "hot items" callouts in the UI
* Don't use the neon green `#52E074` outside the logo mark
* Don't use "authentic" as a standalone descriptor — replace with the specific dish or tradition
* Don't apply parallax effects to the hero image
* Don't add language switcher without confirmed bilingual content need

---

## Tentative decisions

None. All decisions are fully locked.

---

## Required output sections

The Branding Visual Guide must include:
* Real palette swatches with hex values for all 8 color tokens
* Actual font recommendation with Google Fonts links for Be Vietnam Pro and Cormorant Garamond
* Section rhythm diagram showing alternating dark / surface / dark pattern
* Component rules: card, button (3 variants), nav, bar promo strip
* Imagery rules: mood reference, composition notes, what to avoid
* Do / Don't list (verbatim from this handoff)
* Mockup directions: hero (with dual CTAs), menu card section, proof band, bar promo strip, footer
* Design tokens: CSS :root block (verbatim from this handoff)

---

## Generator constraints

The generator must not:
* Invent business facts (capacity, pricing, delivery, booking process detail)
* Introduce random accent colors outside the locked palette
* Use generic SaaS defaults (blue links, grey buttons, white backgrounds)
* Contradict the trust-building requirements of a medium-trust-burden new brand
* Ignore the anti-patterns defined in this handoff
* Over-stylize beyond the 70% Editorial / Human direction
* Use the crimson as a primary brand color — it is secondary and accent only
* Apply neon green (`#52E074`) outside the logo mark
* Replace Cormorant Garamond with any other display serif

---

## Readiness

**Ready** — all decisions locked. No tentative assumptions. No blockers.
