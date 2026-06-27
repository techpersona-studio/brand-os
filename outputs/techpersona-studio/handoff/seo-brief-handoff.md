# SEO Foundation Brief — Generator Handoff
**Client:** TechPersona Studio
**Date:** 2026-06-24

---

## Primary SEO goal

Drive discovery for service business owners in Worcester, MA searching for a website redesign. Website redesign is the SEO entry point; automation is a long-term secondary upsell. Single-page site at launch is correct — concentrate SEO signal on one URL, use clean section IDs as future URL slugs.

---

## Homepage target theme

Website redesign for service businesses in Worcester, MA. Location term belongs in the H1 or subtitle and in footer NAP. Opening framing: "Worcester, MA and beyond" keeps the door open nationally without burying the local signal.

---

## Site architecture at launch

**Single-page site.** Required sections with their anchor IDs:

| Section | Anchor ID | SEO purpose |
|---|---|---|
| Hero | `#hero` | H1 + location + primary CTA |
| Services | `#services` | Both services named explicitly in body text |
| Proof / case study | `#work` | Named client (Quán Phở) with before/after |
| About / founder | `#about` | Thao Phuong named + credential + portrait |
| FAQ | `#faq` | Objection-stage queries; FAQPage schema |
| Audit / contact | `#audit` | Conversion section; Formspree form on-page |

Section IDs must match future URL slugs so multi-page expansion requires no restructuring.

---

## Keyword clusters → sections

| Cluster | Target section | Business impact |
|---|---|---|
| Website redesign Worcester MA | Hero + services | HIGH |
| Website redesign for service businesses (national) | Hero + services body copy | HIGH |
| Website not getting leads / missing calls | Hero problem framing | HIGH |
| Free website audit | Hero CTA + audit section | HIGH |
| Automation / missed call text back | Services (Quiet Systems subsection) | MEDIUM |
| Solo / affordable web designer Worcester | About section | MEDIUM |

---

## Content each section must include for SEO

**Hero:** H1 naming service + location. Problem statement in visible text. Primary CTA to `#audit`. Founder name (Thao Phuong) in body text.

**Services:** H2 per service named explicitly ("Website Redesign" and "Quiet Systems" — not metaphors alone). One-sentence deliverable per service. Anchor link to `#audit` from each.

**Proof:** "Quán Phở" named in crawlable text (confirmed attribution). Before/after images with descriptive alt text per image. Honest framing: new site under development — "rebuilt — new site live soon."

**About:** Founder name (Thao Phuong) in H2 or prominent text. "6 years of software engineering" in body text. Founder portrait with alt: "Thao Phuong, founder of TechPersona Studio, Worcester MA." Worcester MA mentioned. Direct-access promise in text.

**FAQ:** Structured Q&A (not flowing prose). Minimum 6 questions. Covers: process, pricing (one-time vs monthly), trust, timeline, audit offer, Squarespace comparison.

**Audit:** H2 naming the free audit explicitly. What happens after submission: audit within 2 days → discovery call. Formspree form embedded — visitor stays on page. Email + phone in crawlable text. No competing CTAs.

---

## Schema — launch requirements

| Schema type | Placement |
|---|---|
| LocalBusiness | `<head>` — homepage |
| Person | About section |
| FAQPage | FAQ section |

**LocalBusiness required fields:** `name`, `address` (Worcester MA), `telephone`, `email`, `url`, `serviceArea`, `foundingDate`
**`sameAs` array:** Add LinkedIn, Facebook, Instagram, GBP URLs as each profile goes live this week.
**Person required fields:** `name`, `jobTitle`, `worksFor`, `url`, `image`
**Do not add:** Review / AggregateRating — no real reviews exist yet.

---

## Technical SEO requirements

- Canonical domain: `www.techpersonastudio.com` — confirmed. Non-www 301 redirect already in place. No action needed.
- One H1 on the page (hero). Each section gets an H2. Sub-points use H3. Never skip levels.
- `<title>`: `Website Redesign for Service Businesses in Worcester, MA | TechPersona Studio`
- Meta description: Name the offer, audience, location, soft CTA. Unique; no duplicate of H1.
- XML sitemap at `/sitemap.xml`. Submit to Search Console now — don't wait until launch.
- robots.txt: Allow-all. Reference sitemap.
- Founder portrait: WebP, responsive `srcset`, `loading="eager"` (never lazy in hero). Descriptive alt with name.
- All below-fold images: `loading="lazy"`.
- Animations: `transform` + `opacity` only. Guarded by `prefers-reduced-motion: reduce`.
- NAP in footer (set now). Must match GBP exactly when created this weekend. Never abbreviate business name.
- Formspree: Form embedded on-page. Visitor never redirects off domain.

---

## Internal anchor linking rules

- Hero CTA → `#audit` (primary; above the fold)
- Each service description → `#audit`
- Each FAQ answer that resolves an objection → `#audit` (no dead ends)
- Proof section → `#audit` ("want this for your business?")
- About section → `#services`
- Site nav: anchors to `#services`, `#work`, `#about`, `#faq`, `#audit`

---

## Deferred pages (later, only if justified)

| Page | When to add |
|---|---|
| `/website-redesign` | After 2–3 named case studies; Search Console shows homepage ranking 8–20 for redesign queries |
| `/quiet-systems` | After automation becomes a primary revenue line; 2+ automation clients |
| `/restaurant-website-redesign` (+ other verticals) | After 2–3 named testimonials in that vertical |
| `/results` testimonials page | After 3+ named testimonials with real photos |
| Location pages | After GBP live with 5+ reviews + local impressions in Search Console |
| Blog / resources | After homepage indexed and ranking; Search Console shows page-2 impressions |

---

## All open questions resolved

| Question | Decision |
|---|---|
| SEO priority | Local (Worcester MA) — primary |
| GBP timing | Site first; GBP this weekend. NAP must match exactly at creation. |
| Architecture | Single-page at launch. Confirmed. |
| Canonical domain | `www.techpersonastudio.com`. Confirmed. 301 already in place. |
| Audit form | Formspree, embedded on-page. |
| Social media | LinkedIn, Facebook, Instagram, GBP — setup this week. Add to schema `sameAs` + footer as each goes live. |
| Quán Phở attribution | Named. Confirmed with permission. Real work. New site under development — honest framing confirmed. |
