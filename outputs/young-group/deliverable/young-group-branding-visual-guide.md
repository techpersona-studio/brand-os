# Branding Visual Guide

**Young Group — Trần Thủy Tiên**
Trusted Vietnamese Coaching Authority
Version 1.0 — June 25, 2026
Prepared by: TechPersona Studio / Thao Phuong

> **Visual thesis:** Warm espresso and ivory authority. Proof is the design system.

**Status:** Generation-ready. Two tentative items pending client confirmation: exact hex values (confirm from original brand kit) and script font name (Great Vibes vs. Dancing Script). Neither blocks use for website design or development.

---

## 1. Cover

**Brand name:** Young Group — Trần Thủy Tiên
**Category:** Vietnamese weight loss coaching
**Guide:** Branding Visual Guide
**Version:** 1.0
**Date:** June 25, 2026
**Prepared by:** TechPersona Studio / Thao Phuong

**Visual thesis:**
Warm espresso and ivory authority. Proof is the design system.

**Readiness note:**
Two tentative items: exact brand hex values (confirm from original brand kit) and final script font name. Both are flagged in Sections 4, 5, and the Appendix. All other decisions are locked.

---

## 2. Visual North Star

**North star statement:**
Trusted Vietnamese coaching authority — warm, proof-first, and nothing like a wellness ad.

**Anchor adjectives:**
- Trusted
- Specific
- Warm

**Anti-adjectives:**
- Generic
- Clinical
- Aspirational

**Visual thesis:**
Warm espresso and ivory authority. Proof is the design system.

**Why this direction fits:**
Young Group's trust burden is high. The primary audience has tried and failed at multiple weight loss programs. Every visual choice must signal: this is real, this is specific, this is for you. The warm espresso-and-ivory system reads as established, human, and credible without requiring expensive visual complexity. It creates immediate tonal distance from blue-and-white clinical wellness and from aspirational green lifestyle brands. The founder's face is central — this is a personal authority brand, not an institution. The visual system supports that.

---

## 3. Direction Mix

**Primary direction:** Enterprise / Stable — 65%
**Secondary influence:** Editorial / Human — 35%

**What this mix means in practice:**
Structure comes from the enterprise register: consistent grid, restrained palette, controlled type hierarchy, no decorative noise. Warmth comes from the editorial register: the founder's voice in italic, human photography, warm neutrals that breathe, proof chips that feel personal not institutional. The result is a site that reads like a trusted professional practice — not a generic coaching brand or MLM wellness ad.

**What to avoid:**
- Do not tip into full editorial warmth — this brand needs authority, not softness
- Do not tip into full enterprise formality — this is a personal brand with real faces and real stories
- Do not chase startup or SaaS visual patterns — wrong audience

---

## 4. Color System

### Palette overview

| Role | Name | Hex |
|------|------|-----|
| Base | Warm Ivory | `#F5EFE4` |
| Surface | Light Ivory | `#FDFAF5` |
| Neutral | Warm Stone | `#D9CDBF` |
| Anchor | Deep Espresso | `#3B2314` |
| Section Dark | Near-Black Warm | `#2A2520` |
| Text Primary | Near-Black Warm | `#2C1A0E` |
| Text Muted | Warm Taupe | `#8A7060` |
| Accent | Bronze-Gold | `#B8903A` |
| Border | Stone | `#D9CDBF` |
| Border Strong | Espresso | `#3B2314` |

> **Tentative:** Hex values approximated from visual asset inspection. Confirm from original brand kit before final delivery. These values are directionally accurate and sufficient for design generation.

### Neutral system
- `#F5EFE4` — page base background (warm ivory)
- `#FDFAF5` — card and surface background (slightly lighter ivory)
- `#D9CDBF` — alternating section background (warm stone), borders, dividers
- `#8A7060` — muted body text, metadata, timestamps, secondary labels

### Primary anchor system
- `#3B2314` — headings, borders, authority elements, button fill, credential bar background, proof chip name labels
- `#2A2520` — dark section backgrounds (pain section, CTA band, urgency band, nav on scroll); near-black warm, not pure black
- `#2C1A0E` — body text (near-black warm); not pure black — maintains warmth

### Accent system
- `#B8903A` — bronze-gold; logo mark, CTA highlights, proof emphasis only
- **Usage limit:** 5% of total visual area
- **Never use as a large section background**
- **Never introduce a second accent color**

### State colors

| State | Hex | Use |
|-------|-----|-----|
| CTA button fill | `#3B2314` | Primary action button |
| CTA button hover | `#2A1A0A` | Darker espresso on hover |
| CTA button text | `#F5EFE4` | Label on dark fill |
| Link / emphasis | `#B8903A` | Inline links, highlighted spans |
| Border default | `#D9CDBF` | All standard borders |
| Border focus | `#3B2314` | Form focus states |
| Input background | `#FDFAF5` | Form field backgrounds |

### Color roles

| Token | Role |
|-------|------|
| `--color-base` | Page background |
| `--color-surface` | Cards, panels, form fields |
| `--color-neutral` | Alternating sections, borders, dividers |
| `--color-anchor` | Headings, CTA buttons, authority elements |
| `--color-text-primary` | Body copy |
| `--color-text-muted` | Secondary info, metadata |
| `--color-accent` | Bronze-gold; logo mark, proof chips highlight, CTA emphasis |
| `--color-border` | Standard borders |
| `--color-border-strong` | Section separators, active states |

### Usage ratios
- Neutrals (ivory + stone): 65–70% of visual area
- Espresso (anchor + text): 20–25% of visual area
- Bronze-gold (accent): 5% maximum

### Contrast rules
- Body text `#2C1A0E` on ivory `#F5EFE4`: passes WCAG AA
- Ivory `#F5EFE4` on espresso `#3B2314`: passes WCAG AA
- Bronze-gold `#B8903A` on ivory: sufficient for large text and decorative elements; do not use for body copy below 24px without contrast check

### Accessibility notes
- All body text meets WCAG AA contrast at minimum
- Bronze-gold is not sufficient contrast for small body copy on ivory — use espresso or near-black for all running text
- Vietnamese diacritics must render clearly: test all type at 16px minimum on ivory background
- Do not rely on color alone to communicate state — reinforce with border or icon

### Light/dark behavior
Light-mode-only system. Dark mode is not in scope for this brand stage.

### Correct use
- Warm ivory page background with deep espresso headings and near-black body text
- Warm stone alternating section with espresso proof chip name labels
- Bronze-gold used on guarantee callout icon, CTA button hover ring, and logo mark — nowhere else

### Incorrect use
- Bronze-gold as a section background
- A second accent color added (teal, sage, dusty pink)
- Pure white `#FFFFFF` as the page background — too cold, breaks warmth
- Pure black `#000000` as text — too harsh, breaks the warm register

---

## 5. Typography System

### Font stack

| Role | Font | Fallback |
|------|------|---------|
| Display / Headline | Lora | Georgia, 'Times New Roman', serif |
| Body / UI | Be Vietnam Pro | 'Helvetica Neue', Arial, sans-serif |
| Script (founder signature only) | Great Vibes | Dancing Script, cursive |

**Google Fonts import:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Be+Vietnam+Pro:wght@400;500;600;700&family=Great+Vibes&display=swap" rel="stylesheet">
```

> **Tentative:** Great Vibes vs. Dancing Script — confirm on Vietnamese diacritic rendering at founder signature scale before final delivery.

### Hierarchy

| Level | Font | Size | Weight | Case | Tracking |
|-------|------|------|--------|------|---------|
| H1 / Hero | Lora | 52–64px | 600 | Sentence | Normal |
| H2 / Section | Lora | 36–42px | 500 | Sentence | Normal |
| H3 / Subhead | Lora | 24–28px | 500 | Sentence | Normal |
| Kicker / Label | Be Vietnam Pro | 13px | 600 | ALL CAPS | +0.12em |
| Body | Be Vietnam Pro | 16–18px | 400 | Normal | Normal |
| Body Strong | Be Vietnam Pro | 16–18px | 600 | Normal | Normal |
| Small / Metadata | Be Vietnam Pro | 13px | 400 | Normal | Normal |
| Proof Chip Name | Be Vietnam Pro | 15px | 600 | Normal | Normal |
| Proof Chip Result | Lora | 22px | 500 | Normal | Normal |
| Proof Chip Body | Be Vietnam Pro | 14px | 400 | Normal | Normal |
| Founder Signature | Great Vibes | 34–40px | 400 | Normal | Normal |
| Guarantee Callout | Lora | 22–24px | 400 italic | Sentence | Normal |

### Weight rules
- Be Vietnam Pro: minimum 400 for all Vietnamese body text — never below 400; light/thin weights break Vietnamese diacritics
- Lora: 400–700 available; prefer 500–600 for headings; 400 italic for founder-voice moments
- Script: 400 only; one instance per layout context

### Casing rules
- Headings: Sentence case — capitalize only first word and proper nouns
- Kickers / labels: ALL CAPS with +0.12em tracking
- Body: Normal sentence case
- Never use title case or all-caps for headings — too aggressive for this brand register

### Signature typographic move
**Lora italic for founder-voice moments.** Quote leads, guarantee callouts, one personal kicker per section maximum.

Example: *"Nếu không hiệu quả, tôi sẽ hoàn lại toàn bộ tiền cho bạn."* — Lora 400 italic, 22–24px, espresso.

### Usage ratios
- 65% Be Vietnam Pro (body, UI, forms, navigation, proof chip body, CTA labels)
- 30% Lora (headlines, section leads, guarantee callouts, proof kickers, H1–H3)
- 5% Great Vibes (founder name signature only)

### Specimen examples

**H1 — Hero:**
Giảm cân Đơn giản — Dễ dàng — Hiệu quả.
*(Lora 600, 56px, sentence case, espresso)*

**H2 — Section lead:**
Hàng nghìn phụ nữ Việt đã thay đổi — cùng Thủy Tiên.
*(Lora 500, 38px, sentence case, espresso)*

**Kicker:**
KẾT QUẢ THỰC TẾ
*(Be Vietnam Pro 600, 13px, ALL CAPS, bronze-gold, +0.12em tracking)*

**Body:**
Thực đơn được cá nhân hóa theo thể trạng của bạn. Bữa ăn sơ chế sẵn, chỉ mất 15 phút để hoàn thiện. Không nhịn ăn. Không đói.
*(Be Vietnam Pro 400, 17px, near-black warm)*

**Founder-voice italic:**
*"Tôi cam kết: nếu bạn không giảm được cân, tôi sẽ hoàn lại toàn bộ tiền."*
*(Lora 400 italic, 22px, espresso)*

### Misuse examples
- Lora at 18px for body copy — too decorative for long reading
- Be Vietnam Pro at 300 weight for Vietnamese text — breaks diacritics
- Script font for section headings or CTA labels — wrong register
- ALL CAPS headings — too aggressive
- Mixing two display fonts — never introduce a second display typeface

---

## 6. Layout Rhythm

### Layout mode
Flow-based — single-scroll page as the primary layout. Sections stack vertically in a clear, readable sequence. No complex grid jumping.

### Grid
- Content max-width: 1120px centered
- Narrow column (prose, forms, founder voice): 720px centered
- Wide column (proof band, full-width images): 1280px max or full bleed
- Padding-x mobile: 24px
- Padding-x desktop: 48–64px

### Spacing scale

| Token | Value | Use |
|-------|-------|-----|
| `--space-1` | 4px | Micro gap |
| `--space-2` | 8px | Icon + label gap |
| `--space-3` | 12px | Form label + input |
| `--space-4` | 16px | Card internal padding unit |
| `--space-6` | 24px | Between proof chips |
| `--space-8` | 32px | Between card rows |
| `--space-10` | 40px | Between body paragraphs |
| `--space-12` | 48px | Section subcomponent spacing |
| `--space-16` | 64px | Between major sections (mobile) |
| `--space-20` | 80px | Section padding-y (standard) |
| `--space-24` | 96px | Section padding-y (hero) |
| `--space-32` | 128px | Hero padding (desktop) |

### Density
Balanced. Not spacious/airy (reads as lifestyle editorial, not authority) and not dense (too much visual noise). Sections breathe but stay purposeful.

### Section rhythm
Alternating background: warm ivory `#F5EFE4` → warm stone `#D9CDBF` → warm ivory → warm stone.

This creates scroll guidance without border lines.

### Hero composition
- Left / center: Outcome-first headline (Lora H1), one-sentence proof line, primary CTA button
- Right: Founder portrait — real photography, natural lighting, warm composition
- Below fold cue: Trust anchor row (226K followers, guarantee badge, service area) visible on first scroll

### Section patterns

1. **Full-width narrative** — hero section, problem acknowledgment + outcome promise; warm ivory base
2. **Proof band** — testimonial cluster; warm stone background; named, numbered, located
3. **2-column benefit + evidence** — benefit claim left, evidence right; warm ivory
4. **Founder block** — personal voice, guarantee statement; warm stone
5. **CTA band** — consultation booking; espresso fill; repeated at 2–3 strategic points

### Section banding rules
- Never two espresso-fill sections in a row
- Never three same-background sections in a row
- CTA bands can use espresso fill to break rhythm at conversion moments
- Proof band always on warm stone

### Content width rules
- Running prose: 720px max
- Proof chip grid: up to 1120px
- Full-bleed hero image: no max
- Founder portrait: 400–500px, right column

### Component spacing rules
- Card internal padding: 24–32px
- Between proof chips: 24px gap
- Button padding: 14px vertical, 28px horizontal
- Form field height: 48–52px
- Label to field gap: 8px
- Section bottom edge to next section: 80px minimum

### Mobile simplification rules
- Stack all 2-column layouts to single column
- Reduce hero padding: 64px top, 40px bottom
- Proof chips: single column
- Founder portrait: full-width above text on mobile
- Keep trust anchor row visible on first scroll on mobile
- Navigation: minimal header; sticky CTA bar on mobile

---

## 7. Component Language

### Overall feel
Soft / Rounded. Warm depth. Premium without ornamentation. Every component should feel settled and trustworthy — not playful, not clinical.

### Radius system

| Token | Value | Use |
|-------|-------|-----|
| `--radius-sm` | 4px | Badges, chips, tight containers |
| `--radius-md` | 8px | Form inputs, small cards, buttons |
| `--radius-lg` | 16px | Standard cards, proof chips |
| `--radius-xl` | 24px | Large panels, feature cards |
| `--radius-full` | 9999px | Pills, circular avatars |

### Shadow system

| Token | Value | Use |
|-------|-------|-----|
| `--shadow-sm` | `0 1px 3px rgba(43,26,14,0.08)` | Subtle card lift |
| `--shadow-md` | `0 4px 12px rgba(43,26,14,0.12)` | Standard card depth |
| `--shadow-lg` | `0 8px 24px rgba(43,26,14,0.16)` | Featured cards, hover state |

Shadows use the espresso brown base — warm-tinted shadow, not cold grey.

### Card rules
- Background: `#FDFAF5` (light ivory) or `#F5EFE4` (warm ivory)
- Border: 1px solid `#D9CDBF` (stone) — always present
- Radius: `--radius-lg` (16px) for standard cards
- Shadow: `--shadow-md` always present — no flat cards
- Internal padding: 24–32px
- Hover: shadow deepens to `--shadow-lg`; no scale transform

### Button rules

**Primary CTA button:**
- Fill: `#3B2314` (espresso)
- Text: `#F5EFE4` (ivory), Be Vietnam Pro 600, 16px
- Padding: 14px vertical, 28px horizontal
- Radius: `--radius-md` (8px)
- Hover: background darkens to `#2A1A0A`; bronze-gold ring: `outline: 2px solid #B8903A`
- Active: slight opacity reduction (0.9)

**Secondary / ghost button:**
- Fill: transparent
- Border: 1.5px solid `#3B2314`
- Text: `#3B2314`
- Hover: fill `#3B2314`, text switches to ivory
- Use: secondary actions only

No tertiary variants. Hierarchy is primary / secondary only.

### Form rules
- Field background: `#FDFAF5`
- Field border: 1px `#D9CDBF`
- Field border (focus): 2px `#3B2314`
- Field radius: `--radius-md`
- Field height: 48–52px
- Label: Be Vietnam Pro 600, 14px, near-black
- Placeholder: Be Vietnam Pro 400, 14px, `#8A7060`
- Required marker: bronze-gold asterisk
- Error: border `#C0392B`, small error text below field
- Vietnamese labels clearly legible — Be Vietnam Pro 400 minimum

### Navigation rules
- Quiet and direct — must not compete with conversion flow
- Minimal: logo mark + 2–4 nav links + primary CTA button
- Background: ivory base; thin espresso border appears on scroll
- Mobile: slide-out or hamburger; CTA always visible

### Proof module rules

**Testimonial card:**
- Background: `#FDFAF5`
- Border: 1px `#D9CDBF`
- Radius: `--radius-lg`
- Shadow: `--shadow-md`
- Name: Be Vietnam Pro 600, 15px, espresso
- Location: Be Vietnam Pro 400, 13px, muted taupe
- Body: Be Vietnam Pro 400, 15px, near-black
- Opening italic kicker (optional): Lora 400 italic, 17px

**Trust banner:**
- Background: `#3B2314` (espresso full-width band)
- Text: `#F5EFE4` (ivory)
- Three columns: 226K followers | Double money-back guarantee | 6 countries
- Numbers: Lora 600, ivory; labels: Be Vietnam Pro 400
- This is a trust anchor — not a footer element

**Founder note:**
- Warm stone background
- Lora italic quote in espresso
- Founder portrait inset
- Guarantee restatement below

**Credential bar:**
- Horizontal row, low-key
- Items: book authorship, platform reach, six-country reach
- Be Vietnam Pro 400, 14px, muted taupe
- Bronze-gold bullet or divider between items

### CTA section rules
- One primary CTA per viewport-height section
- Above CTA: one proof micro-copy line
- Never two primary CTAs side by side
- CTA label placeholder: "Đặt lịch tư vấn miễn phí" (pending client confirmation)

### Badge/chip rules
- Use for: short trust claims, guarantee badges, social proof metrics
- Style: `--radius-full`, 1px espresso border, ivory fill, Be Vietnam Pro 600, 13px
- Bronze-gold icon: check, star, or shield — minimal weight
- Never use for navigation or functional elements

### Signature component: Proof chip cluster

**Format:**
```
[Name], [US State] — [X lbs in Y weeks]
```

**Visual spec:**
- Container: `#FDFAF5`, `--shadow-md`, `--radius-lg`
- Name + state: Be Vietnam Pro 600, 15px, espresso `#3B2314`
- Result number: Lora 500, 22px, bronze-gold `#B8903A` — visual anchor
- Timeframe: Be Vietnam Pro 400, 14px, muted taupe
- Groups of 3–4 chips in a row
- Mobile: single column

This component must appear on the homepage. It is the single most important proof mechanism in the design.

### Component hierarchy (within a section)
1. Proof chip cluster — primary visual weight
2. Guarantee statement — secondary authority element
3. Body copy — supporting
4. Secondary CTA — supporting action

---

## 8. Proof Presentation

Proof is not a section — it is the design system's primary function. Every proof element must be specific, named, and located.

### Testimonials
- Named (no "Anonymous")
- Located (US state, or country if outside US)
- Numbered (exact weight lost + timeframe — never rounded)
- Format: "[X lbs in Y weeks] — [Name], [State]"
- Rendered as proof chip cluster (Section 7)
- Minimum 3 visible on the proof band section
- No stock imagery alongside testimonials — if no real client photo available, omit photo entirely

### Credentials
- Book authorship ("Tác giả sách Béo ơi vĩnh biệt") — **Tentative:** publication type pending client confirmation
- Facebook: "226.000 người theo dõi" — use exact figure; do not round
- Six-country reach — list explicitly: Vietnam, USA, Australia, Canada, Germany, UK
- Client count: use "Hàng nghìn khách hàng" until exact figure confirmed; do not fabricate

### Guarantee
- Double money-back guarantee — present in at least two distinct locations:
  1. Above first CTA (hero section or just below)
  2. Founder block section
- Language: use exact client-confirmed guarantee language — do not soften
- Visual: bronze-gold badge or seal icon; Lora italic; prominent placement — not in footer

### Founder proof
- Founder's face and name prominent throughout — personal authority brand
- Founder section: portrait + direct voice quote in Lora italic
- Guarantee restatement in founder's voice — more personal than the copy block version
- Any confirmed credentials displayed in credential bar once confirmed

### Before/after proof
- Do not use before/after collage format — reads as MLM or transformation ad
- Use named proof chips instead
- Real client transformation photography may be used in testimonial context only — not in a before/after grid

### Above-the-fold proof
- At least one trust element above the fold: guarantee badge, follower count, or one proof line
- Trust anchor row (226K | guarantee | 6 countries) — visible on first scroll or just below hero

### What proof must never be fabricated
- Client count — do not invent a number
- Certifications — do not state unconfirmed credentials
- Testimonial weight numbers — exact figures from real testimonials only
- Book publication status — do not claim commercial publication until confirmed

### Visual feel of proof
Specific, not vague. Warm, not clinical. Named, not anonymous. Measured, not approximate. Proof sections should feel like evidence, not a pitch.

---

## 9. Imagery and Art Direction

### Photography direction
Founder-led — real photography from confirmed assets. The founder's face is the primary visual anchor. No stock photography.

### Subject priority
1. Founder (hero, founder block, social tiles, personal voice sections)
2. Proof (result numbers, client quotes, guarantee elements)
3. Place (not a priority for this brand)

### Mood
Warm, Intimate, Clean.

### Lighting
Natural, Soft — no harsh studio flash, no dramatic shadows, no overexposed lifestyle brightness.

### Composition
Medium framing. Polished but with documentary warmth. Founder should look approachable and confident, not over-styled.

### Cropping
- Portrait: crop at shoulders or chest
- Avoid tight face crops — too intense for this trust register
- Allow breathing room on both sides

### Retouching philosophy
Natural, light retouching. Skin tone preserved. No heavy smoothing or over-brightening. The audience is real women who want to see a real person.

### Icon style
- Minimal outline icons for process section only
- Espresso stroke — `#3B2314`, 1.5px stroke weight
- No decorative illustration
- No color-filled icons
- Subjects: check, star/rating, shield/guarantee, clock/time, location pin — functional only

### Illustration
None. This brand relies on real photography and typography.

### Proof imagery rules
- Named testimonials: if no real photo, use text-only proof chip — never use stock photo for a named person
- Guarantee: use badge/seal icon, not stock imagery
- Facebook count: use Facebook icon + exact number

### Image treatment rules
- Warm tone: photos sit within the warm ivory + espresso register
- No blue-cast or cool-toned images
- Subtle warm overlay permitted on hero image if needed
- No heavy vintage filters, no high-contrast editorial treatment

### Anti-cues — what to avoid absolutely
- Women on scales
- Green smoothies, kale, measuring tape
- Workout gear, gym equipment
- Before/after collage grid
- Stock photos of "happy diverse friends"
- Cool-toned blue/white photography
- Overly polished Korean beauty-style photography

---

## 10. Motion and Interaction

### Motion level
Restrained. Motion should be barely noticeable — its job is to confirm actions and guide attention, not entertain.

### Motion role
Reveal / Hover. Two purposes:
1. Reveal: fade-up on scroll, confirming page presence
2. Hover: tactile confirmation of interactive state

### Hover behavior
- Cards: shadow deepens from `--shadow-md` to `--shadow-lg`; 250ms ease
- CTA buttons: background darkens to `#2A1A0A`; bronze-gold ring appears; 150ms ease
- Links: color shift near-black to bronze-gold; 150ms ease
- Navigation items: underline from left; 200ms ease

### Reveal behavior
- Sections: `opacity: 0; transform: translateY(16px)` → `opacity: 1; translateY(0)` on scroll entry
- Duration: 400ms
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- Stagger for proof chip clusters: 80ms between chips

### Button interaction
Tactile — subtle espresso-darken + bronze-gold ring on hover. No scale jumps, no bounce, no pop.

### Performance rule
Motion cannot block or delay content. CSS-only preferred; JavaScript intersection observer for scroll reveals only.

### Reduced-motion rule — required
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
  }
}
```

### What must never animate
- Proof numbers (weight lost, follower count, guarantee amounts) — animating reads as fabricated
- Testimonial metric text
- Trust banner content

---

## 11. Homepage Application

### Hero section
- **Layout:** Two-column (text left, founder portrait right) on desktop; single column (portrait above text) on mobile
- **Headline:** Lora 600, H1 — outcome-first
- **Sub-headline:** Be Vietnam Pro 400, 18px — one sentence on method or guarantee
- **CTA:** Primary espresso button
- **Trust anchor row:** Three trust marks: guarantee badge | 226K followers | 6 countries
- **Background:** Warm ivory

### Section rhythm (homepage)

| # | Section | Background | Purpose |
|---|---------|------------|---------|
| 1 | Hero | Ivory `#F5EFE4` | Outcome promise + founder face + CTA |
| 2 | Trust anchor band | Espresso `#3B2314` | Guarantee + followers + service area |
| 3 | Proof band | Stone `#D9CDBF` | Named proof chip cluster (3–6 chips) |
| 4 | Method / Benefits | Ivory `#F5EFE4` | 2-column: benefit left, evidence right |
| 5 | Founder block | Stone `#D9CDBF` | Personal voice quote + guarantee restatement |
| 6 | CTA band | Espresso `#3B2314` | Booking CTA + one proof line |
| 7 | FAQ / Objection | Ivory `#F5EFE4` | Counter main objection (complexity + hunger) |
| 8 | Final CTA | Stone `#D9CDBF` | Repeat CTA + guarantee |

**Justification — every section traces to a buyer need:**
- Hero: outcome promise counters "will it work?" objection
- Trust anchor band: immediately addresses high trust burden (226K + guarantee)
- Proof band: named results counter skepticism from prior failures
- Method section: counters "will it be complicated / will I go hungry?" objection
- Founder block: personal authority brand — founder voice is required
- CTA band 1: captures high-urgency buyers at peak evidence moment
- FAQ: counters main objection in plain language
- Final CTA: captures remaining buyers before exit

### Proof placement
- One proof element visible above first scroll (hero trust anchor row)
- Proof band: prominent in first scroll on mobile
- Guarantee: visible in hero and founder block — two distinct placements

### CTA pattern
- First CTA: hero section, primary button
- Second CTA: espresso CTA band (Section 6)
- Third CTA: final section
- All use the same label — consistent primary action

### Founder / authority placement
- Hero section: portrait right column
- Founder block: Section 5 — full personal voice
- Credential bar: below founder block

### Mobile notes
- Founder portrait: full-width above headline in hero
- Trust anchor row: three items stack to one per line on small screens — keep all three visible
- Proof chips: single column; above-fold proof must remain visible
- Sticky bottom CTA bar recommended on mobile

---

## 12. Mockups / Application Examples

All specimens strictly reuse defined system tokens. No new visual patterns introduced here. HTML specimens are fully rendered in the HTML version of this guide.

### Homepage hero
```
[Warm ivory background — #F5EFE4]

[Kicker: KẾT QUẢ THỰC TẾ — Be Vietnam Pro 600, 13px, bronze-gold, ALL CAPS, +0.12em tracking]
[H1: "Giảm cân Đơn giản. Dễ dàng. Hiệu quả." — Lora 600, 56px, espresso]
[Body: Be Vietnam Pro 400, 18px, near-black — "Hàng nghìn phụ nữ Việt tại Mỹ đã đạt được kết quả thực sự — không nhịn ăn, không phức tạp."]
[CTA button: espresso fill #3B2314, ivory text #F5EFE4, 16px Be Vietnam Pro 600, radius-md]
[Trust row: ✦ Bảo đảm hoàn tiền 100% | ✦ 226.000 người theo dõi | ✦ Phục vụ 6 quốc gia]

[RIGHT: Founder portrait — natural lighting, warm tone, polished documentary]
```

### Proof band
```
[Warm stone background — #D9CDBF]

[Section kicker: KHÁCH HÀNG THỰC TẾ — bronze-gold, ALL CAPS]
[H2: "Họ đã thay đổi — số liệu thực, tên thật." — Lora 500, 38px, espresso]

[Proof chip cluster — 3 cards in row, each:]
  Container: #FDFAF5, shadow-md, radius-lg, 24px padding
  Result: Lora 500, 22px, bronze-gold — "[X lbs in Y weeks]"
  Name + State: Be Vietnam Pro 600, 15px, espresso
  Short note: Be Vietnam Pro 400, 14px, muted taupe
```

### CTA band
```
[Espresso background fill — #3B2314]

[Kicker: ĐẶT LỊCH HÔM NAY — Be Vietnam Pro 600, ivory, ALL CAPS]
[H2: "Buổi tư vấn miễn phí — không ràng buộc." — Lora 500, 36px, ivory]
[Proof line: "Đã có hơn 226.000 người tin tưởng." — Be Vietnam Pro 400, 16px, ivory/70%]
[CTA button: ivory fill, espresso text — reversed; radius-md]
```

### Founder block
```
[Warm stone background — #D9CDBF]

[LEFT: Founder portrait — 380px, warm photography]
[RIGHT:]
  [Quote: "Tôi không chỉ dạy bạn giảm cân — tôi dạy bạn cách ăn, cách sống, và cách duy trì kết quả mãi mãi."]
  — Lora 400 italic, 22px, espresso
  
  [Name: Trần Thủy Tiên — Be Vietnam Pro 600, 16px]
  [Script signature: Great Vibes, 36px, espresso]
  [Guarantee restatement: Be Vietnam Pro 400, 15px, near-black]
```

### Mobile example
```
[Mobile viewport — 390px]
[Founder portrait: full-width, top of hero]
[H1: 56px → 34px on mobile]
[Body: 18px → 16px on mobile]
[Trust row: stacked single column, all three items]
[CTA button: full-width, 52px height]
[Proof chips: single column, full-width cards]
[Sticky bottom bar: "Đặt lịch tư vấn" — espresso fill, always visible]
```

### Social proof tile (1080×1080)
```
[Espresso background — #3B2314]
[Bronze-gold rule — 1px, centered, 60px wide]
[Result: "[X lbs] giảm trong [Y tuần]" — Lora 600, 40px, ivory]
[Name + State: Be Vietnam Pro 600, 18px, ivory/80%]
[Founder name + logo: bottom row, bronze-gold]
```

### Service card
```
[#FDFAF5 fill, shadow-md, radius-lg]
[Service name: Be Vietnam Pro 600, 18px, espresso — top]
[One-sentence description: Be Vietnam Pro 400, 15px, near-black]
[One key proof point: Lora 400 italic, 17px, espresso]
[CTA or learn-more link: bronze-gold, 14px]
```

---

## 13. Do / Don't Rules

### Do

1. Lead every section with an outcome or a proof element — never with a feature list
2. Use the founder's face prominently in the hero and personal-voice sections
3. Show exact numbers — weight lost, client count, follower count; round numbers read as invented
4. Repeat the guarantee in at least two distinct locations in the page flow
5. Render testimonials as named proof chips: [Name], [State], [X lbs in Y weeks]
6. Use warm ivory and deep espresso as the primary visual system; bronze-gold for mark-level accents only
7. Keep one primary action per viewport section — never stack two CTAs
8. Render Vietnamese text at Be Vietnam Pro 400 minimum at all sizes
9. Treat the 226K Facebook follower count as a trust anchor — prominent placement, never in footer
10. Ensure CTA, guarantee, and one proof element are above the fold on mobile
11. Use Lora italic for founder-voice moments — this is the brand's signature typographic move
12. Use shadow-led cards for all proof modules — no flat cards
13. Alternate warm ivory and warm stone sections to guide scroll rhythm

### Don't

1. Use generic wellness stock photography — no women on scales, green smoothies, measuring tape, or workout gear
2. Use blue-and-white or green-and-white as anchor palette
3. Show before/after collages in transformation or MLM format
4. Lead with program features before proof and outcomes
5. Use condensed or aggressive headings — Lora is the authority signal
6. Animate proof numbers, testimonial metrics, or guarantee amounts
7. Use the script font for anything other than the founder name signature
8. Use English-first layout conventions, imagery, or cultural cues
9. Add any second accent color — bronze-gold is the only accent
10. Introduce more than one signature typographic gesture per section
11. Use Be Vietnam Pro below 400 weight for Vietnamese text
12. Put the guarantee in fine print or footer — it is a headline-level trust element
13. Use pure white `#FFFFFF` as the page background — breaks warmth
14. Use pure black `#000000` as body text — breaks the warm register

---

## 14. Design Tokens

### CSS custom properties (primary format, required)

```css
/* =====================
   COLOR TOKENS
   ===================== */
:root {
  --color-base: #F5EFE4;
  --color-surface: #FDFAF5;
  --color-neutral: #D9CDBF;
  --color-anchor: #3B2314;
  --color-anchor-dark: #2A1A0A;
  --color-text-primary: #2C1A0E;
  --color-text-muted: #8A7060;
  --color-accent: #B8903A;
  --color-border: #D9CDBF;
  --color-border-strong: #3B2314;
  --color-cta-text: #F5EFE4;
}

/* =====================
   TYPOGRAPHY TOKENS
   ===================== */
:root {
  --font-display: 'Lora', Georgia, 'Times New Roman', serif;
  --font-body: 'Be Vietnam Pro', 'Helvetica Neue', Arial, sans-serif;
  --font-script: 'Great Vibes', 'Dancing Script', cursive;

  --text-xs:   0.75rem;    /* 12px */
  --text-sm:   0.8125rem;  /* 13px */
  --text-base: 1rem;       /* 16px */
  --text-md:   1.0625rem;  /* 17px */
  --text-lg:   1.125rem;   /* 18px */
  --text-xl:   1.25rem;    /* 20px */
  --text-2xl:  1.5rem;     /* 24px */
  --text-3xl:  1.875rem;   /* 30px */
  --text-4xl:  2.25rem;    /* 36px */
  --text-5xl:  3rem;       /* 48px */
  --text-6xl:  3.5rem;     /* 56px */

  --weight-normal:   400;
  --weight-medium:   500;
  --weight-semibold: 600;
  --weight-bold:     700;

  --leading-tight:   1.2;
  --leading-snug:    1.4;
  --leading-normal:  1.6;
  --leading-relaxed: 1.8;

  --tracking-tight:   -0.02em;
  --tracking-normal:  0;
  --tracking-wide:    0.06em;
  --tracking-widest:  0.12em;
}

/* =====================
   SPACING TOKENS
   ===================== */
:root {
  --space-1:  0.25rem;  /* 4px  */
  --space-2:  0.5rem;   /* 8px  */
  --space-3:  0.75rem;  /* 12px */
  --space-4:  1rem;     /* 16px */
  --space-6:  1.5rem;   /* 24px */
  --space-8:  2rem;     /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
}

/* =====================
   LAYOUT TOKENS
   ===================== */
:root {
  --content-max:            1120px;
  --content-narrow:         720px;
  --content-wide:           1280px;
  --section-padding-y:      var(--space-20);
  --section-padding-y-hero: var(--space-32);
  --section-padding-x:      var(--space-6);
}

/* =====================
   BORDER TOKENS
   ===================== */
:root {
  --border-width:       1px;
  --border-width-strong: 2px;
  --border-color:       var(--color-border);
  --border-color-strong: var(--color-border-strong);
}

/* =====================
   RADIUS TOKENS
   ===================== */
:root {
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   16px;
  --radius-xl:   24px;
  --radius-full: 9999px;
}

/* =====================
   SHADOW TOKENS
   ===================== */
:root {
  --shadow-sm: 0 1px 3px rgba(43, 26, 14, 0.08);
  --shadow-md: 0 4px 12px rgba(43, 26, 14, 0.12);
  --shadow-lg: 0 8px 24px rgba(43, 26, 14, 0.16);
}

/* =====================
   MOTION TOKENS
   ===================== */
:root {
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 400ms;
  --easing-default: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### JSON token block (secondary format)

```json
{
  "color": {
    "base": "#F5EFE4",
    "surface": "#FDFAF5",
    "neutral": "#D9CDBF",
    "anchor": "#3B2314",
    "anchorDark": "#2A1A0A",
    "textPrimary": "#2C1A0E",
    "textMuted": "#8A7060",
    "accent": "#B8903A",
    "border": "#D9CDBF",
    "borderStrong": "#3B2314",
    "ctaText": "#F5EFE4"
  },
  "font": {
    "display": "Lora, Georgia, serif",
    "body": "Be Vietnam Pro, Helvetica Neue, Arial, sans-serif",
    "script": "Great Vibes, Dancing Script, cursive"
  },
  "radius": {
    "sm": "4px",
    "md": "8px",
    "lg": "16px",
    "xl": "24px",
    "full": "9999px"
  },
  "shadow": {
    "sm": "0 1px 3px rgba(43,26,14,0.08)",
    "md": "0 4px 12px rgba(43,26,14,0.12)",
    "lg": "0 8px 24px rgba(43,26,14,0.16)"
  },
  "motion": {
    "fast": "150ms",
    "base": "250ms",
    "slow": "400ms",
    "easing": "cubic-bezier(0.4,0,0.2,1)"
  }
}
```

---

## 15. Implementation Notes

### What developers must preserve exactly
- All color tokens — no substitutions; if a hex value needs updating post brand kit confirmation, update the token definition only
- Be Vietnam Pro 400 minimum for all Vietnamese text — no exceptions
- Shadow presence on all cards — no flat cards
- Warm ivory `#F5EFE4` as page background — not pure white
- Bronze-gold used at 5% maximum — audit before adding new uses

### What can flex
- Section order adjustments within the locked pattern
- Exact testimonial chip count per section (3 preferred; 2 or 4 acceptable)
- Hero portrait aspect ratio and framing
- Exact CTA button label (pending client confirmation)

### What must remain consistent across future pages
- The alternating warm ivory + warm stone section rhythm
- The proof chip cluster format and styling
- The typography hierarchy
- Bronze-gold restriction to mark-level and accent use only
- The shadow system — warm-tinted, never cold grey

### What future agents must never improvise
- New colors outside the locked system
- New fonts
- Blue or green accent colors
- Flat card variants
- Transformation / before-after imagery
- English-first visual conventions
- New typographic gestures beyond the Playfair italic founder-voice move

### Accessibility notes
- All text meets WCAG AA contrast
- Bronze-gold not used for small body text on ivory
- Form focus states use espresso border (2px)
- `prefers-reduced-motion` respected — all animations stripped
- Vietnamese diacritics: test Be Vietnam Pro at 16px on ivory before shipping
- Icon-only buttons require `aria-label`
- Proof chip clusters readable as plain text lists for screen readers

### Bilingual / localization notes
- Primary language: Vietnamese
- All type decisions made for Vietnamese first
- Be Vietnam Pro supports Vietnamese, English, and Latin scripts
- If English is used (e.g., navigation items), it follows the same type hierarchy

### Print / PDF notes
- HTML guide includes full print CSS
- `@page` rules: A4 size, 20mm margins
- Background colors preserved via `-webkit-print-color-adjust: exact`
- Section page breaks at H2 level
- Cards and proof chips avoid `page-break-inside`

---

## 16. Appendix

### Tentative decisions

| Item | Status | Resolution |
|------|--------|-----------|
| Exact hex values | Tentative | Approximated from visual assets. Confirm from original brand kit. Directional values sufficient for generation. |
| Script font: Great Vibes vs. Dancing Script | Tentative | Confirm on Vietnamese diacritic rendering at signature scale. Either is acceptable. |
| Book credential type | Pending client | Is "Béo ơi vĩnh biệt" commercially published with a publisher and ISBN, or self-published? Determines credential bar display. |
| Exact client count | Pending client | Use "hàng nghìn khách hàng" until exact figure confirmed. Do not fabricate. |
| Primary CTA label | Pending client | Placeholder: "Đặt lịch tư vấn miễn phí". |
| Certifications / credentials | Pending client | What credentials does Trần Thủy Tiên hold beyond book authorship? |

### Swappable modules

**Credential bar (book credential variant):**
- If commercially published: "Tác giả sách xuất bản — Béo ơi vĩnh biệt"
- If self-published: remove explicit book-type reference; use confirmed alternative
- Do not use until publication type is confirmed

**Client count badge:**
- If exact figure confirmed: "[N]+ khách hàng đã đạt mục tiêu"
- Until confirmed: "Hàng nghìn khách hàng" — in-prose only, no badge

### Notes for website blueprint stage
- The proof chip cluster is the load-bearing design element — blueprint must account for dynamic testimonial data rendering
- Sticky mobile CTA bar is optional but recommended for conversion
- FAQ section should pull from client-confirmed answers on the complexity + hunger objection
- Credential bar is a swappable module until credential confirmation is complete — blueprint should design a fallback state
