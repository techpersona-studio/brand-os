# Website Blueprint Handoff
**Client:** TechPersona Studio
**Date:** 2026-06-24

---

## 1. Build summary

- **Website goal:** Convert cold service-business owners into free audit submissions
- **Primary audience:** Small service business owners (restaurants, nail salons, realtors, plumbers) who are significantly behind on tech and lose leads to slow response times
- **Primary conversion action:** Free website audit form submission (`#audit`)
- **Trust burden:** High — solo operator, June 2026 launch, zero external reviews; only proof is one named before/after case study (Quán Phở)
- **Recommended intervention level:** Keep and tune (not a redesign — the structure is sound; gaps are evidence-based, not architectural)
- **Build style:** Flow-based narrative scroll, Editorial/Human 65% + Enterprise/Stable 35%, warm stone-pine-terracotta palette
- **Notes:** Single-page site at launch per SEO brief. No new pages until case studies and reviews accumulate. Current site has dual CTA in hero, abstract Quiet Systems copy, and missing FAQ-to-CTA bridge — these three fixes are the priority.

---

## 2. Final page architecture

### Pages

**Page:** Homepage
- **URL:** `https://www.techpersonastudio.com/`
- **Exists because:** Primary and only conversion surface at launch; concentrates all SEO signal on one URL
- **Primary intent:** Get visitor to submit a free audit request
- **Primary CTA:** "Get my free website audit" → `#audit`
- **Required now / later:** Required now
- **Notes:** Single-page site with anchor navigation. All sections are on this page. Section IDs structured for future expansion to sub-pages without restructuring.

---

### Topics kept as sections, not pages

- **Topic:** FAQ
  **Lives on:** Homepage `#faq`
  **Why not standalone:** Objection-handling content; 6 questions only; no distinct search intent; exists on current site and performs well

- **Topic:** Consultation / contact
  **Lives on:** Homepage `#audit`
  **Why not standalone:** The audit form is the CTA endpoint; visitor must never leave the page; no SEO benefit to a separate contact page at launch

- **Topic:** Testimonials / results
  **Lives on:** Homepage `#work` proof section
  **Why not standalone:** Zero reviews currently; a testimonials page with no testimonials adds pages without value; revisit when 3+ named reviews exist

- **Topic:** Services (both)
  **Lives on:** Homepage `#services`
  **Why not standalone:** Secondary service (Quiet Systems) is not yet a primary revenue driver; `/quiet-systems` deferred until automation becomes a primary revenue line

- **Topic:** About / founder
  **Lives on:** Homepage `#about`
  **Why not standalone:** Founder trust is critical but not deep enough to justify a page click; section is sufficient for the volume of information

---

## 3. Homepage handoff

### Homepage goal

- Win the visitor's trust as a solo operator within the first scroll
- Name the problem (missed leads) before presenting the solution
- Drive a single action: free audit form submission
- Do not add any page, section, or element not justified below

---

### Homepage section order

**1. Navigation**
- **Role:** Supporting information
- **Purpose:** Access to all anchors; pine island button CTA; sticky on scroll
- **Key message direction:** Logo left, nav links center (`#services`, `#work`, `#about`, `#faq`), single CTA right
- **Trust/proof needed:** None
- **CTA behavior:** "Get my free website audit" → `#audit` — pine island button, small variant
- **Builder note:** Flat, no dropdown. Sticky with `--paper` bg + `--hair` border-bottom on scroll. CTA hidden behind hamburger on smallest breakpoints.

**2. Hero**
- **Role:** Primary conversion driver
- **Purpose:** State who this is for, name the problem, establish founder identity, drive first CTA
- **Key message direction:** H1 with location + outcome; problem statement in body; founder portrait right with floating proof chip
- **Trust/proof needed:** Founder portrait (above fold, required); one floating proof chip (illustrative, labeled if not real data); credential micro-line below CTA ("Free · no commitment · yours to keep")
- **CTA behavior:** One primary CTA only — "Get my free website audit →" as pine island button. "See what I build" demoted to ghost link / text below it. No competing equal-weight CTAs.
- **Builder note:** Text left, portrait right (desktop). Portrait stacks below text (mobile). H1 must include "Worcester, MA" or "Worcester, MA and beyond." One Cormorant Garamond italic terracotta fragment in H1. No pure white background — use `--paper`.

**3. Problem / The Leak**
- **Role:** Primary conversion driver (urgency)
- **Purpose:** Name the invisible cost of missed leads; anchor with the 21× stat
- **Key message direction:** "Most owners lose the customer before anyone ever talks to them." Lead with cost of inaction, not the solution.
- **Trust/proof needed:** 21× stat citation (InsideSales); specific scenarios ("A call comes in while you're slammed")
- **CTA behavior:** No CTA in this section
- **Builder note:** Full-width narrative column, max 680px. Background `--paper-deep`. No sidebar. Let copy land.

**4. How it works / Customer journey**
- **Role:** Supporting information
- **Purpose:** Bridge the problem to both services; show the full visitor-to-loyal-customer path
- **Key message direction:** "They find you. They reach out. They hear back fast. They book again."
- **Trust/proof needed:** None — this is structural explanation
- **CTA behavior:** No CTA
- **Builder note:** 3-step horizontal row (desktop), vertical stack (mobile). Background `--pine-wash`. Step number in `--pine`, short label in Hanken 600, one-line description in Hanken 400.

**5. Services**
- **Role:** Trust reinforcement + objection handling
- **Purpose:** Name both services explicitly; make Quiet Systems concrete with one scenario; link each to audit
- **Key message direction:** Service 01 — Websites (gets found, converts); Service 02 — Quiet Systems (add one concrete scenario: "A new inquiry comes in at 11pm. Your system texts back in under 2 minutes with a booking link. You wake up to a scheduled call.")
- **Trust/proof needed:** Services named explicitly in crawlable text (not metaphors only): "Website Redesign" and "Quiet Systems." One-sentence deliverable per service.
- **CTA behavior:** Each service card has a ghost link → `#audit`. Not a second full CTA — subordinate link only.
- **Builder note:** 2-column split (6+6 grid). Background `--paper`. Double-shell card treatment for each service card. H2 per service for SEO.

**6. Proof**
- **Role:** Trust reinforcement
- **Purpose:** Quán Phở before/after; founder note; credential bar; placeholder testimonial structure
- **Key message direction:** Named case study with honest framing; first-person founder note; "6 years of software engineering · One person on your project · Audit in 2 days"
- **Trust/proof needed:** Quán Phở before/after (two-column attribute comparison, named); founder note with portrait thumbnail + pine hairline left border; credential bar; placeholder testimonial card with honest copy ("First client reviews in progress — see the before/after below"). When real reviews arrive: replace with name + photo + verbatim quote.
- **CTA behavior:** One ghost link at section end → `#audit`: "Want this for your business?"
- **Builder note:** Background `--paper-deep`. No star ratings until earned on GBP/Google. No fabricated metrics. No headshot placeholder icons. Before/after uses weight and color distinction only — not color-coded badges.

**7. Process**
- **Role:** Objection handling
- **Purpose:** Reduce commitment fear; show the 3-step path; emphasize that steps 1 and 2 are free
- **Key message direction:** "Step 1: Free audit. Step 2: Scope + price. Step 3: Build." Short, reassuring. "You see the full scope and price before you commit."
- **Trust/proof needed:** Explicit "free" and "no commitment" language; step numbers anchor safety
- **CTA behavior:** Ghost link at end: "See what the audit covers" → `#audit`
- **Builder note:** Background `--pine` (dark). One dark pine section in mid-page. Horizontal 3-step row (desktop), vertical stack (mobile).

**8. About**
- **Role:** Trust reinforcement
- **Purpose:** Founder identity; 6-year engineering credential; direct-access promise; Worcester MA
- **Key message direction:** "I'm Thao. One person on your project, start to finish. You reach me directly, every time." First-person only. Hanken 400 body. Engineering credential as proof, not biography.
- **Trust/proof needed:** Founder portrait (if different crop from hero, not required to repeat); "6 years of software engineering" in body text; name (Thao Phuong) in H2 or prominent text for SEO
- **CTA behavior:** Ghost link → `#services` (not audit — this is mid-page; visitor hasn't seen proof of pricing yet)
- **Builder note:** Background `--paper`. "Thao Phuong" in H2 for SEO Person schema. "Worcester MA" mentioned. Alt text: "Thao Phuong, founder of TechPersona Studio, Worcester MA."

**9. FAQ**
- **Role:** Objection handling
- **Purpose:** Pre-empt the 6 most common objections before the final ask
- **Key message direction:** Structured Q&A. Cover: process, pricing (one-time vs monthly), trust, timeline, audit offer, Squarespace comparison.
- **Trust/proof needed:** Answers must be in crawlable structured text (not accordion-only) for FAQPage schema
- **CTA behavior:** Short transition CTA at section end (this is the fix from the analysis report): "Still unsure? Send me your URL. The audit is free and there's no commitment." → `#audit`
- **Builder note:** Background `--paper-deep`. Minimum 6 questions. FAQPage schema required. No accordion that hides content from crawlers — text must be visible in DOM.

**10. CTA closing**
- **Role:** Primary conversion driver (final)
- **Purpose:** Final conversion moment; single terracotta CTA; repeat the audit offer
- **Key message direction:** "Stop losing customers you'll never know you lost." One heading, one CTA, one micro-reassurance line.
- **Trust/proof needed:** Micro-reassurance line only: "Free · No commitment · Audit in 2 days"
- **CTA behavior:** Terracotta island button — "Send me your URL →". This is the one terracotta CTA per page. Links to `#audit` form.
- **Builder note:** Background `--pine` (dark). No competing elements. Single heading + single button + one trust line. Full-width on mobile.

**11. Footer**
- **Role:** Supporting information
- **Purpose:** NAP (name, address, phone, email); copyright; no noise
- **Key message direction:** Email + phone in crawlable text. No social icons until profiles are active and maintained.
- **Trust/proof needed:** NAP must match GBP exactly when created. "TechPersona Studio" never abbreviated.
- **CTA behavior:** None
- **Builder note:** Background `--paper-deep`. No decorative elements. Add social links only after profiles are live.

---

## 4. Core page handoffs

No additional pages at launch. All content is on homepage. See deferred pages in SEO section below.

---

## 5. Trust and proof system

- **Primary trust signal:** Founder portrait above the fold + first-person voice throughout
- **Proof types to use:** Named case study (Quán Phở) with before/after comparison; founder note with portrait; credential bar (6 years engineering + one-person promise + audit in 2 days); floating proof chip (illustrative, labeled); honest placeholder testimonial card
- **Proof types to avoid:** Star ratings without real third-party source; fabricated metrics or revenue numbers; anonymous testimonials; stock headshots; award badges without verifiable credentials
- **Proof that appears early:** Founder portrait + floating proof chip (hero, above fold); credential line below CTA
- **Proof that appears later:** Quán Phở before/after (section 6); founder note (section 6); credential bar (section 6); placeholder testimonial (section 6)
- **Site-wide proof modules:** Floating proof chip (hero only); credential bar (proof section); founder note (proof section); before/after comparison (proof section); placeholder testimonial card (proof section, swappable)
- **Proof blockers / missing assets:** No third-party reviews (GBP setup in progress); no outcome metrics on Quán Phở case study (ask client to confirm one specific result); no named testimonials (2–3 expected within 1 month)

**Proof swap plan (from visual guide):**
- Phase 1 now: illustrative proof chip + placeholder testimonial card
- Phase 2 (first reviews): real testimonial card (name + photo + quote); remove placeholder framing
- Phase 3 (case study data): add one real metric to before/after

---

## 6. CTA system

- **Primary CTA label:** "Get my free website audit →"
- **Secondary CTA:** "Send me your URL →" (same audit destination, used in closing band with terracotta button)
- **Ghost/subordinate links:** "See what I build" (hero, demoted); "See what the audit covers" (process section); "Want this for your business?" (proof section); "Still unsure? Send me your URL." (FAQ section end)
- **CTA destination:** `#audit` form (Formspree, embedded on-page; visitor never leaves domain)
- **CTA placement rules:** Primary pine island button in hero; terracotta island button in closing section only; ghost links in services, proof, process, and FAQ-end; no CTA in problem section or how-it-works section
- **CTA repetition rules:** Audit CTA appears in hero, nav, proof (ghost), process (ghost), FAQ-end (ghost), closing band (terracotta). Not in every section — only at natural decision points.
- **CTA anti-patterns:** Two equal-weight CTAs in the same section; CTA in the problem section (too early); multiple CTAs in the closing band; any CTA competing with the closing terracotta button
- **Booking/contact handling:** Formspree form on-page at `#audit`. Three fields: name, website URL, email. Phone optional. No multi-step wizard. Email + phone in footer and `#audit` as crawlable text.

**CTA hierarchy:**
1. "Get my free website audit" — pine island button (hero, nav)
2. "Send me your URL" — terracotta island button (closing band, once per page)
3. All others — ghost links only

---

## 7. SEO page rules

- **Homepage target:** "Website redesign for service businesses in Worcester, MA" — H1 must include service + location
- **Required search-driven pages at launch:** Homepage only
- **Deferred pages (add only when justified):**
  - `/website-redesign` — after 2–3 named case studies + Search Console ranking 8–20 for redesign queries
  - `/quiet-systems` — after automation becomes primary revenue line with 2+ clients
  - `/restaurant-website-redesign` (+ other verticals) — after 2–3 named testimonials per vertical
  - `/results` — after 3+ named testimonials with real photos
  - Location pages — after GBP live with 5+ reviews
  - Blog — after homepage indexed and ranking
- **Topics that stay on-page despite SEO:** FAQ (FAQPage schema on-page); contact/audit (Formspree on-page); testimonials (proof section on-page until volume justifies a page); about/founder (section on-page)
- **Internal linking priorities:** Hero CTA → `#audit`; each service → `#audit`; FAQ objection-resolution answers → `#audit`; proof section → `#audit`; about → `#services`; nav anchors → `#services`, `#work`, `#about`, `#faq`, `#audit`
- **Schema requirements:**
  - `LocalBusiness` in `<head>`: name, address (Worcester MA), telephone, email, url, serviceArea, foundingDate; `sameAs` array (add social URLs as each goes live)
  - `Person` in about section: name, jobTitle, worksFor, url, image
  - `FAQPage` in FAQ section
  - Do NOT add `AggregateRating` until real reviews exist
- **Technical SEO must-haves:**
  - `<title>`: `Website Redesign for Service Businesses in Worcester, MA | TechPersona Studio`
  - One H1 (hero); H2 per section; H3 for sub-points; no skipped levels
  - Canonical: `www.techpersonastudio.com` (301 already in place)
  - XML sitemap at `/sitemap.xml`; submit to Search Console
  - `robots.txt`: allow-all; reference sitemap
  - Founder portrait: WebP, responsive `srcset`, `loading="eager"` in hero
  - All below-fold images: `loading="lazy"`
  - NAP in footer; must match GBP exactly
  - Formspree form embedded on-page (visitor never redirects)
- **Multilingual rule:** None at launch

---

## 8. Builder constraints

- **Visual constraints to preserve:** Stone-paper-pine-terracotta palette only (CSS tokens); no pure `#FFF`; no blue/purple/teal; no gradients; no second accent color; section banding rhythm (no two adjacent sections same background)
- **Structural rules to preserve:** Flow-based narrative scroll (not card grid or dashboard); max content width 1200px; text column max 680px for body-led sections; section padding 120px desktop / 72px tablet / 48px mobile
- **Mobile priorities:** Hero portrait drops below text; process steps stack vertically; 2-column service sections go single column; closing CTA full-width centered; navigation hamburger with CTA behind menu
- **Sections/modules that must not be dropped:** Founder portrait in hero (above fold on all viewports); floating proof chip; credential bar; Quán Phở before/after (named, never anonymous); FAQ with minimum 6 questions; `#audit` form on-page; NAP in footer
- **Things the builder must not improvise:** Second accent color; new typeface; gradient or glassmorphism surface; plural voice in any copy; hard offset block shadows; dashboard/workflow imagery; any CTA with `href` redirecting off-domain; star ratings without real third-party source
- **Things that can stay flexible:** Section padding (can use `clamp()` for fluid scaling); typography sizes (can use `clamp()`); proof chip content (will update as reviews arrive); testimonial placeholder (replace with real reviews when available)

---

## 9. Open blockers

- **Blocker:** No third-party reviews
  **Affects:** Trust architecture; testimonial section
  **Temporary fallback:** Honest placeholder card ("First client reviews in progress — see the before/after below"); structured now for easy swap

- **Blocker:** No outcome metrics on Quán Phở case study
  **Affects:** Proof quality; the single strongest trust surface shows descriptions, not results
  **Temporary fallback:** Before/after attribute comparison only; request one metric from client (bookings, inquiries, load time) to add when available

- **Blocker:** GBP listing not yet created
  **Affects:** LocalBusiness schema `sameAs`; local SEO trust signal
  **Temporary fallback:** Omit GBP URL from `sameAs` array; add immediately when live; NAP in footer must be set now to match GBP at creation

- **Blocker:** Social profiles not yet active (LinkedIn, Facebook, Instagram)
  **Affects:** Footer social icons; `sameAs` schema array
  **Temporary fallback:** No social icons in footer until profiles are active and maintained; `sameAs` array populated as each goes live

- **Blocker:** Hero has dual competing CTAs in current build
  **Affects:** Conversion in highest-traffic surface
  **Immediate fix:** Demote "See what I build" to ghost/text link; make audit CTA the sole primary button

- **Blocker:** No CTA after FAQ in current build
  **Affects:** Conversion at high-intent exit point
  **Immediate fix:** Add ghost CTA transition line at FAQ end → `#audit`

---

## 10. Final builder payload

- **Required pages:** Homepage only (`/`)
- **Topics kept on-page:** FAQ, audit/contact form, testimonials/proof, about/founder, services (both)
- **Homepage section order:** Nav → Hero → Problem → How it works → Services → Proof → Process → About → FAQ → CTA closing → Footer
- **Critical trust modules:** Founder portrait (hero, above fold); floating proof chip (hero, labeled if illustrative); credential bar (proof section); Quán Phở before/after named (proof section); honest placeholder testimonial (proof section, swappable); founder note with portrait (proof section)
- **Critical CTA placements:** Pine island button in hero (primary); terracotta island button in closing band (once per page); ghost link in services, proof, process, and FAQ-end; CTA in nav
- **Critical SEO requirements:** H1 with service + Worcester MA; H2 per section; `LocalBusiness` + `Person` + `FAQPage` schema; title tag exact; Formspree on-page; NAP in footer matching GBP
- **Known missing assets:** No reviews (placeholders ready); no Quán Phở outcome metric (request from client); no GBP/social URLs for `sameAs` (add as each goes live)
- **Build priority:** (1) Hero CTA fix — demote secondary CTA; (2) FAQ-end CTA — add ghost link; (3) Quiet Systems concrete scenario — add one example sentence; (4) Schema + technical SEO; (5) Proof section placeholder structure for testimonials
- **Do not do:** Create any new pages; add star ratings or review counts; fabricate metrics or client outcomes; introduce a second accent color; use plural voice; add a second font; show dashboard/workflow screenshots; redirect the audit form off-domain; use pure `#FFF` as any background
