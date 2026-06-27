# Branding Visual Guide — Generator Handoff

## North star

A solo craftsperson's studio — warm stone and pine, editorial presence, and the specific quiet confidence of someone who signs their own work.

---

## Direction mix

- Primary direction: Editorial / Human — 65%
- Secondary influence: Enterprise / Stable — 35%

---

## Locked color system

- Base: Light
- Neutral: Warm stone-paper — #F6F3EE default, #EFEAE1 alternate band, #FBFAF7 card interior; never pure #FFF
- Anchor: Deep pine #1E3A34; hover #2E5148; pine-wash band #E8EFEC
- Secondary: None
- Accent: Terracotta #C06A45; hover #9F4F33; on dark pine #E7A282
- Usage ratio: ~60% stone neutrals / ~30% pine + ink / ~8–10% terracotta

---

## Locked typography system

- Primary reading font direction: Hanken Grotesk 400–800 — body, UI, labels, and most headings (~90%)
- Accent / display font direction: Fraunces italic — hero headlines and one emphasis phrase per section (~10%); never body or UI text
- Tone: Human-operational
- Hierarchy: Strong (clear visual distance between display, heading, body, label)
- Heading behavior: Sentence case always; tight tracking `letter-spacing: -.045em` at display; weight 700–800
- Body behavior: Plain, direct; weight 400; one idea per sentence

---

## Locked layout rhythm

- Layout mode: Flow-based (narrative scroll; not modular card grid or dashboard)
- Rhythm: Alternating section bands — stone / deep stone / pine-wash / dark pine; no two adjacent bands share a shade
- Density: Spacious
- Hero structure: Text + founder portrait (founder photo confirmed; no dashboard, product UI, or abstract graphic in hero)
- Section patterns: full-width narrative, 2-column service split, proof band, process steps, CTA band

---

## Locked component language

- Overall feel: Soft / Rounded (squircle corners throughout; ~2rem outer, concentric inner, pill buttons)
- Card language: Double-shell — pine-tinted outer shell (`rgba(30,58,52,.045)`, hairline border, ~2rem radius) wrapping inner core (#FBFAF7, concentric radius, faint inset highlight `inset 0 1px 1px rgba(255,255,255,.7)`)
- Button language: Island button — filled pill (pine primary; terracotta for single most important CTA per page); ghost (ink underline → terracotta hover) for secondary actions; magnetic hover with diagonal icon drift
- Proof modules: Founder note (first-person text + portrait), floating proof chips (illustrative outcomes), credential bar (6-year engineering background), testimonial card structure (placeholder until real reviews exist)
- Signature component: Island button with nested circular `→` icon wrapper, magnetic hover, diagonal icon drift

---

## Locked imagery direction

- Photography direction: Founder-led (Thao's portrait is the primary trust signal)
- Subject priority: People (Thao) first, Proof moments second
- Mood: Warm / Intimate
- Lighting: Natural / Soft; never studio-cold or moody
- Composition: Close to medium; polished-candid (not posed corporate headshot)
- Illustration / icon direction: Minimal outline icons only — service and process sections; no decorative icons

---

## Locked motion level

- Level: Restrained
- Role: Reveal (scroll-triggered fade-up, once on enter) + Hover (island button magnetic drift)
- Scroll behavior: Fade-up — elements fade and rise on viewport enter; no parallax; no repeat on re-scroll
- Performance rule: `transform` and `opacity` only; all animations guarded by `prefers-reduced-motion`

---

## Signature move

Italic Fraunces phrase in terracotta (#C06A45), once per section, fragment or proper noun only — never a full sentence. Set at display size. Overuse destroys the effect.

---

## Do / Don't rules

### Do

- Lead every section with the problem or cost of inaction; solution second
- Use first-person singular voice throughout all copy blocks
- Keep Thao's founder portrait visible in the hero above the fold on all viewports
- Use pine as the trust anchor; never add a second brand color
- Alternate section backgrounds (stone / deep stone / pine-wash / dark pine) so no two adjacent bands match
- Limit terracotta to one primary CTA per page
- Use sentence case for all headings — no exceptions
- Place the free audit CTA in the hero and the final closing section at minimum

### Don't

- Use stock photography of laptops, code, handshakes, or "team at work" scenes
- Add any second accent color for any reason
- Show workflow diagrams, node maps, automation flows, or dashboard screenshots anywhere
- Write in plural voice ("our team," "we build") anywhere
- Display testimonials or star ratings without a real name and real photo
- Use pure #FFF — warm stone #F6F3EE only
- Use Fraunces for body or UI text
- Fabricate metrics, star counts, or "AI transformation" results
- Place more than one CTA in a single section
- Use Title Case for any heading

---

## Tentative decisions

None. All decisions locked following client confirmation on 2026-06-24:
- Color system: Pine Editorial palette locked as-is (#1E3A34 anchor, stone-paper base, terracotta accent)
- Hero structure: Founder portrait (primary) + floating proof chip overlay — combined treatment
- Proof section: Build structure now with honest "first reviews in progress" framing; before/after portfolio as centerpiece

---

## Required output sections

The Branding Visual Guide must include:
- Real palette swatches with hex values and usage rules
- Actual font recommendations (Hanken Grotesk + Fraunces — Google Fonts links)
- Section rhythm and band alternation diagram
- Component rules (card, button, form, nav)
- Imagery rules and anti-patterns
- Do / don't list
- Mockup directions (hero, proof section, CTA band)
- Design tokens (CSS custom properties)

---

## Generator constraints

The generator must not:
- Invent business facts or claim metrics not in the Business Persona
- Introduce any accent color beyond terracotta
- Use generic SaaS defaults (blue palette, Inter/Roboto fonts, gradient heroes)
- Contradict the solo craftsperson trust model with agency-style layouts or plural voice
- Ignore the anti-pattern list (no stock photos, no dashboards, no workflow diagrams)
- Over-stylize beyond the Editorial / Human direction
- Use Title Case headings or Fraunces for body text
- Produce a brand guide that reads as "another AI vendor" or tech startup

---

## Readiness

**Ready.** All decisions locked. Generation can proceed.
