# Website Blueprint Handoff

**Client:** Young Group / Trần Thủy Tiên
**Date:** 2026-06-25
**Source:** Web analysis of https://www.tranthuytien.net/

---

## 1. Current site verdict

- **Overall status:** Functional single-page sales page — right offer, right audience, partially broken trust system
- **Core conversion problem:** Countdown timer reads 00:00:00:00 on load (fabricated urgency signal) — destroys credibility at first impression; no recovery further down the page
- **Core trust problem:** 226,000 Facebook followers not displayed as a trust signal; social bar links to personal profile (CandyTran1903) instead of fanpage; specific client count missing ("thousands" is not credible)
- **Core style problem:** Hero copy leads with aspirational wellness framing ("Lấy lại vóc dáng — Trẻ hóa cơ thể") instead of the buyer's frustration history — emotional hook is misplaced
- **Core structural problem:** Single-page site with scroll-anchor navigation — no dedicated pages; zero organic search surface; 100% traffic dependency on social and referral

---

## 2. Recommended intervention level

**Partial redesign**

- **Why:** Core proof (testimonials, guarantee, offer specifics) is solid and should be preserved. What's broken is structural: single-page architecture limits SEO entirely; trust signals are misfired or missing; hero section misses the emotional hook; countdown timer actively damages first impressions. These require architectural changes, not just copy edits.
- **Scope implication:** Expand to multi-page structure (6 pages per SEO brief). Rebuild hero and trust sections. Reset urgency mechanism. Preserve testimonials, guarantee language, offer specifics, and CTA pattern. Do not rebuild what is working.

---

## 3. What to keep

- Six named testimonials with exact weight numbers, US state locations, and specific health outcomes — keep verbatim; format as proof chips
- Double money-back guarantee — two instances with distinct language; preserve both; move one above the fold
- "TƯ VẤN CHO TÔI" CTA pattern — clear, low-friction, culturally appropriate
- Pre-sale qualifier ("survey first, program only if results achievable") — strong commitment-anxiety reducer; keep in CTA context
- Program specifics: 42-meal combo, daily monitoring via scale photo, personalized weekly menu, lifetime formula post-goal — all strong differentiators
- Pain-point section addressing supplements / injections / liposuction / diet fatigue — directionally correct; refine copy but keep the structure
- Value pills: "Chỉ với 5-15 phút," "Giảm tới 0.5–1 pound mỗi ngày," "Thực đơn đa dạng, cá nhân hóa" — keep; move to hero
- Specific result range (0.5–1 lb/day; max 50–60 lbs) — keep with named proof
- Vietnamese-language delivery throughout — do not introduce English framing

---

## 4. What to remove

- Countdown timer showing 00:00:00:00 — replace entirely with real urgency mechanism or remove
- Social bar link to personal Facebook (CandyTran1903) — replace with fanpage link
- Generic tagline "Đồng hành cùng bạn xây dựng phiên bản đẹp nhất" — too aspirational; replace
- 8-item benefits list in current form — trim to 3–4 weight-specific outcomes; move secondary benefits (anti-aging, skin, family health) to program detail section only
- "50% / 50% / 50%" triple-banner repetition — consolidate into one clean offer section
- YouTube video section on homepage (current selection — lifestyle/relationship topics) — replace with weight loss authority content or remove from homepage; lifestyle videos dilute the conversion focus
- Vague social proof language "hàng nghìn khách hàng" — replace with specific client count once confirmed

---

## 5. What to fix

1. **Broken urgency mechanism** — replace zeroed countdown with date-anchored timer or honest scarcity copy ("limited consultation slots this month"). Priority: critical.
2. **Facebook follower count placement** — surface 226,000+ as a visible proof number in the hero or above-the-fold trust band; fix social link to canonical fanpage. Priority: high.
3. **Hero emotional hook** — rewrite hero headline to open with the buyer's frustration ("Đã thử mọi cách mà vẫn chưa giảm được?") before delivering the program promise. Priority: high.
4. **Specific client count** — confirm number with client; replace "hàng nghìn" everywhere with a specific figure ("500+" or actual). Priority: high.
5. **Proof anchor above the fold** — place 226K + client count + guarantee visibility in the first viewport so skeptical visitors see scale before testimonials. Priority: high.
6. **CTA context** — add one line explaining what the consultation looks like ("10 phút với Tiên — không cần thanh toán trừ khi bạn đủ điều kiện"). Priority: medium.
7. **NAP consistency** — US address (Midlothian TX) and phone (NJ area code 609) are inconsistent; verify and align for Google Business Profile. Priority: medium.
8. **Expand to multi-page structure** — single-page site blocks all organic search; add 6 pages per SEO brief. Priority: high (redesign scope).

---

## 6. Page / structure implications

**Current pages (all scroll anchors, not real pages):**
- Giới thiệu về chương trình
- Thành công của khách hàng
- Sự khác biệt vượt trội
- Thông tin chương trình

**Weak:** All sections — none have their own URL, meta, or search intent
**Missing (required at launch per SEO brief):**
- `/` — Homepage (redesigned; currently exists but needs hero/trust overhaul)
- `/chuong-trinh-giam-can` — Program page (dedicate the 42-meal combo, daily monitoring, personalized plan, guarantee, FAQ, CTA)
- `/ve-coach-thuy-tien` — About / Founder page (Trần Thủy Tiên authority; book credential; coaching background; founder story)
- `/ket-qua-khach-hang` — Results / Testimonials page (all named testimonials expanded; video testimonials when available)
- `/lien-he` — Contact / Consultation booking (Zalo, email, phone, booking form or Zalo widget)
- `/cau-hoi-thuong-gap` — FAQ page (objection resolution for trust, process, pricing, comparison queries)

**Pages to defer:**
- Blog/educational content — until organic FAQ traffic signals demand
- Location pages (Houston, San Jose, Westminster CA, Dallas TX) — until city-level analytics confirmed
- Skincare page — until offer is confirmed as distinct and separately priced
- Country-specific pages (AU, CA, DE, UK) — when per-country traffic warrants

---

## 7. Conversion implications

- **Homepage must:** Lead with the buyer's frustration history, not with aspirational body goals; establish 226K+ followers and client count above the fold; show one testimonial above the fold; place CTA and guarantee visible on first scroll
- **Trust must appear:** In the hero (follower count + guarantee callout); in the proof band (named testimonials); in the founder block (personal voice, guarantee restatement); above the fold on mobile
- **CTA must:** Appear at minimum at hero, after first testimonial cluster, after program description, after guarantee — each with a brief process note ("10-minute consultation, no payment unless qualified")
- **Proof must:** Include 226K follower count as a visual number (not a social icon); named testimonial chips with weight, location, timeframe; specific client count; two guarantee instances in distinct language
- **Booking flow must:** Land on a clean contact or booking page (currently no /lien-he page); Zalo integration as primary channel; phone and email as fallback; no friction from competing links or navigation
- **Mobile must:** Show CTA, guarantee callout, and one proof element (follower count or top testimonial) above the fold; Zalo CTA touchpoint easy to tap; text at Be Vietnam Pro 400 minimum for Vietnamese diacritics

---

## 8. SEO / architecture implications

- **Homepage target issue:** Currently a single-page site — the homepage carries all intent but has no supporting architecture; no title tag, meta description, or H1 structure confirmed as optimized
- **Missing service / FAQ / trust pages:** All six required pages are absent; none of the transactional, informational, or navigational intents are captured organically
- **Internal linking issue:** No internal links possible with current single-page structure; full internal link plan (Homepage → Program → Contact; Results → Program; FAQ → Program + Contact; About → Program) requires multi-page expansion
- **Page architecture issue:** No URL-based page hierarchy; all navigation is scroll-anchor; no page is indexable independently beyond the homepage
- **Technical / structural concern:** NAP inconsistency (TX address + NJ area code) must be resolved before any Google Business Profile setup; URL convention (Vietnamese romanization vs. English slugs) must be decided before build; no sitemap or robots.txt confirmed

---

## 9. Final blueprint notes

**Redesign priorities:**
- Fix broken countdown timer (trust-critical, day-one)
- Surface 226K follower count in hero (fastest trust gain available)
- Rebuild hero headline around buyer frustration history
- Expand to 6-page structure (required for any organic search presence)
- Build dedicated Program page with full offer detail, FAQ section, and primary CTA
- Build Results page to house and expand testimonial proof
- Build About/Founder page for navigational and E-E-A-T purposes

**Modules required:**
- Hero (frustration-hook headline + value pills + CTA + proof anchor)
- Trust band / proof bar (226K followers + client count + guarantee callout + service area)
- Testimonial proof chip cluster (named, located, weighted — groups of 3–4)
- Program detail block (42-meal combo, personalized plan, daily monitoring, lifetime formula)
- Founder block (personal voice + guarantee restatement + Lora italic signature)
- CTA band (repeating — min. 3 placements per page)
- FAQ accordion (objection resolution — 5+ questions per SEO brief)
- Contact / booking module (Zalo widget primary; phone + email fallback)

**Sections likely needed (Homepage):**
1. Hero — frustration hook + promise + CTA + proof anchor
2. Trust bar — 226K / client count / guarantee / service area
3. Pain-point / belief busting — keep current structure, tighten copy
4. Program overview — 4 core components + value pills
5. Testimonial cluster — 3 proof chips + link to Results page
6. Founder block — personal voice + guarantee
7. CTA band — consultation booking with process note
8. Footer — NAP, links, social (fanpage, not personal)

**Major blockers:**
- Specific client count not confirmed — blocks "500+" claim across site
- Countdown timer must be replaced before any trust system functions
- Facebook social link must be corrected to fanpage before launch
- NAP consistency must be resolved before Google Business Profile setup

**Known assets available:**
- Six named testimonials with weight, location, health outcomes
- Real photography of founder (confirmed from visual assets)
- 226,000 confirmed Facebook followers (canonical fanpage)
- Double money-back guarantee in two distinct forms of language
- Program specifics (42-meal combo, daily monitoring, personalized menu, lifetime formula)
- YouTube channel with existing content

**Known missing proof / assets:**
- Specific client count (number, not "thousands")
- Founder credentials beyond book authorship (certifications, training)
- Book publication details ("Béo ơi vĩnh biệt" — publisher, ISBN — or self-published confirmation)
- Video testimonials for Results page embed
- Founding year / years in business
- Visual brand kit (confirmed hex values, original font files)
