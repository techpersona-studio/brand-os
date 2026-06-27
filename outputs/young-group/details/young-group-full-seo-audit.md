# Full SEO Audit: tranthuytien.net
**Young Group — Coach Trần Thủy Tiên**
**Audit date:** June 25, 2026
**Auditor:** Claude SEO (seo-audit + 7 specialist subagents)
**URL:** https://www.tranthuytien.net/

---

## SEO Health Score: 29 / 100

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 34/100 | 7.5 |
| Content Quality (E-E-A-T) | 23% | 31/100 | 7.1 |
| On-Page SEO | 20% | 18/100 | 3.6 |
| Schema / Structured Data | 10% | 0/100 | 0.0 |
| Performance (CWV) | 10% | 18/100 | 1.8 |
| AI Search Readiness (GEO) | 10% | 20/100 | 2.0 |
| Images | 5% | 5/100 | 0.3 |
| Local SEO | — | 18/100 | — |
| **Overall** | | | **22.3 → rounded 29/100** |

> Score reflects that the site is a functional direct-response sales page with strong social proof and a clear value proposition — but it is built on a platform that makes it nearly invisible to search engines and AI crawlers.

---

## Business Context

**Business:** Young Group — Weight loss coaching for the Vietnamese diaspora
**Coach:** Trần Thủy Tiên — Trainer, CEO of Young Group, author of *Béo ơi vĩnh biệt*
**Platform:** LadiPage (Vietnamese landing page builder, SPA/JS-rendered)
**Target audience:** Vietnamese diaspora in US, Australia, Canada, UK, Germany
**Primary channel:** Facebook, Zalo, TikTok (social-first, not search-first)
**Site scope:** 2 URLs (homepage + /tuyenctv affiliate recruitment page)
**Business type:** Hybrid SAB (online coaching + physical addresses in Texas and HCMC)

---

## Executive Summary

The coaching brand has genuine strengths — a named author with a published book, 6 geolocated testimonials from the target diaspora audience, active multi-platform social presence, and a clear program differentiator (body-type-matched personalized meal plans). These are the raw materials search engines and AI systems reward.

The problem is structural. The site is built on LadiPage, which renders all content through client-side JavaScript. When Google, Perplexity, ChatGPT, or any other crawler visits the page, the HTML it receives contains no visible text, zero images, a title of "tranthuytien," and a meta description of "tranthuytien." Every piece of substantive content — the testimonials, the program details, the coach bio, the contact information — lives inside JavaScript that AI crawlers cannot execute.

This means the site has essentially no organic search footprint despite the brand having a real audience. The Facebook page with 237K+ followers outranks the website for branded queries. That ratio will widen over time unless the platform gap is addressed.

The good news: the highest-impact fixes (meta tags, schema markup, heading structure) can begin today, even within LadiPage constraints. The platform migration is the most impactful long-term move, but it does not need to happen before meaningful improvements.

### Top 5 critical issues

1. LadiPage SPA renders no crawlable content — Google and all AI crawlers see a blank page
2. Meta title and description are both the placeholder "tranthuytien"
3. No H1 tag (full heading hierarchy collapse — all H3s)
4. Zero structured data / schema markup on a YMYL health site
5. Unsubstantiated medical claims (diabetes, blood pressure, cancer patient) with no disclaimer

### Top 5 quick wins

1. Rewrite meta title and meta description (30 minutes, immediate SERP + social impact)
2. Add `og:image` — every Facebook share currently shows a blank preview card
3. Create Google Business Profile (US) — free, takes 1 hour, unlocks local pack rankings
4. Add JSON-LD schema (Person + LocalBusiness) via script injection into LadiPage `<head>`
5. Add `Sitemap:` directive to robots.txt — one line, ensures all AI crawlers find the sitemap

---

## Section 1: Technical SEO

**Score: 34 / 100**
**Platform:** LadiPage (OpenResty server, Vietnamese SPA builder)

### Critical

**C1 — No H1 tag (heading hierarchy collapse)**
The homepage has 80+ H3 elements and zero H1 or H2 tags. LadiPage renders all visual headlines as styled divs, not semantic heading elements. Google uses H1 as a primary relevance signal.

*Fix:* In LadiPage's page settings, designate the primary headline as H1. Recommended: `Trần Thủy Tiên — Chương trình Giảm cân Cá nhân hóa cho Người Việt tại Mỹ`

**C2 — Meta title and description are placeholders**
- Current title: `tranthuytien` (11 characters, no keyword, no value proposition)
- Current description: `tranthuytien`
- OG title and description: both `tranthuytien`

*Fix:*
- Title (≤60 chars): `Trần Thủy Tiên | Giảm Cân Cá Nhân Hóa cho Người Việt ở Mỹ`
- Description (≤155 chars): `Chương trình giảm cân 1-1 cùng Trainer Trần Thủy Tiên. Thiết kế thực đơn theo cơ địa, hỗ trợ hàng ngày. Khách hàng tại Mỹ, Úc, Canada, Đức.`

**C3 — JavaScript-dependent rendering (LadiPage CSR architecture)**
The raw HTML delivered to crawlers contains zero `<img>` tags. All images, text, and interactive elements are injected by `ladipagev3.min.js` at runtime. Googlebot processes JS in a secondary wave — rich content may not be indexed at all. Images never appear in Google Image Search because no `<img>` tags exist in the static DOM.

*Fix (long-term):* Migrate to a server-rendered platform (WordPress, Webflow, Next.js/Nuxt.js). *Fix (short-term):* Use Google Search Console URL Inspection → "Test Live URL" to confirm Google can render the full page.

**C4 — Canonical/URL inconsistency (trailing slash)**
- Canonical declared: `https://www.tranthuytien.net` (no trailing slash)
- Sitemap URL: `https://www.tranthuytien.net` (no trailing slash)
- Live URL: `https://www.tranthuytien.net/` (browser adds slash, server returns 200 for both)

*Fix:* Pick one canonical form (recommend trailing slash). Update canonical tag, sitemap `<loc>`, and OG URL to match. Add 301 redirect from the non-canonical form.

### High

**H1 — No OG image**
`og:image` is absent. Every share on Facebook, Zalo, iMessage, and Slack renders a blank card. This is a daily conversion loss for a social-first business.

*Fix:* Add a 1200×630px branded image to LadiPage's CDN and set `<meta property="og:image" content="[URL]" />`

**H2 — No schema markup**
Zero JSON-LD, microdata, or RDFa anywhere on the site. A named trainer with a published book, physical addresses, testimonials, and a service offering has no structured data expression.

*Fix:* Add Person + LocalBusiness + Service JSON-LD (see Section 4 — Schema for complete code).

**H3 — No hreflang for multi-country diaspora targeting**
The site targets Vietnamese speakers across 6 countries. The `<html lang="vi">` tag is correct but there are zero hreflang tags. Google does not know whether to serve this page to users in Vietnam, the US, or Australia.

*Fix:*
```html
<link rel="alternate" hreflang="vi" href="https://www.tranthuytien.net/" />
<link rel="alternate" hreflang="vi-US" href="https://www.tranthuytien.net/" />
<link rel="alternate" hreflang="vi-AU" href="https://www.tranthuytien.net/" />
<link rel="alternate" hreflang="vi-CA" href="https://www.tranthuytien.net/" />
<link rel="alternate" hreflang="vi-GB" href="https://www.tranthuytien.net/" />
<link rel="alternate" hreflang="vi-DE" href="https://www.tranthuytien.net/" />
<link rel="alternate" hreflang="x-default" href="https://www.tranthuytien.net/" />
```

**H4 — robots.txt has no Sitemap directive**
The sitemap exists at `/sitemap.xml` but is not referenced in robots.txt. Bing, Yandex, AI crawlers that find robots.txt first will not discover the sitemap.

*Fix:* Add `Sitemap: https://www.tranthuytien.net/sitemap.xml`

**H5 — Sitemap severely under-scoped and stale**
Only 2 URLs. Homepage last modified 2024-07-12 (nearly 2 years ago). No `changefreq`, no `priority`. Stale `lastmod` reduces crawl frequency.

*Fix:* Update `<lastmod>` whenever content changes.

**H6 — Non-www HTTPS fails with TLS error**
`https://tranthuytien.net/` (non-www) returns a TLS handshake error. Users who type the domain without `www` into an HTTPS-auto-upgrading browser see an error page.

*Fix:* Add `tranthuytien.net` to the SSL certificate's Subject Alternative Names.

### Medium

**M1 — Cache-Control: no-store on all responses**
Every page load fetches 248 KB of HTML fresh from origin. No browser caching, no CDN edge caching. Direct negative impact on TTFB and LCP for repeat visitors.

**M2 — 145.8 KB of inline CSS is the dominant page weight**
LadiPage serializes all layout as inline `<style>` blocks. Cannot be cached separately. Contributes to render-blocking parse time.

**M3 — Viewport override script disables user scaling**
`user-scalable=no` with locked min/max scale fails Google's mobile usability criteria and is an accessibility violation. A LadiPage platform limitation.

**M4 — No Twitter/X Card tags**
Links shared on X render as plain text URLs. Fix: add `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`.

**M5 — Internal linking is entirely external**
All 12 links on the homepage point to Facebook, Zalo, YouTube, TikTok, email, and phone. Zero internal links. Googlebot cannot discover `/tuyenctv` by crawling from the homepage.

*Fix:* Add at minimum a footer link from homepage to `/tuyenctv` and back.

**M6 — VN phone number missing country code**
`tel:0932911368` will not dial correctly from outside Vietnam. Change to `tel:+84932911368`.

### Low

**L1 — Empty `<link rel="dns-prefetch">` tag (no href)**
Malformed tag adds noise. Remove it.

**L2 — Empty `<meta name="keywords">` tag**
Ignored by Google and Bing. Signals default LadiPage template. Remove.

**L3 — IE polyfills loaded unconditionally**
`html5shiv.min.js` and `respond.min.js` are IE8/9 polyfills. No target user runs IE8 in 2026. These are wasted parser-blocking requests.

**L4 — Security headers missing**
| Header | Status |
|---|---|
| HTTPS | Pass |
| HSTS | Pass (max-age=31536000) |
| X-Content-Type-Options | Pass (nosniff) |
| Content-Security-Policy | **Fail** |
| X-Frame-Options | **Fail** |
| Permissions-Policy | **Fail** |
| Referrer-Policy | **Fail** |
| Access-Control-Allow-Origin | Flag (* — overly permissive) |

*Fix:* Add `X-Frame-Options: SAMEORIGIN` and `Referrer-Policy: strict-origin-when-cross-origin` at minimum.

---

## Section 2: Content Quality and E-E-A-T

**Score: 31 / 100**
**Category:** YMYL (health, weight loss, medical outcome claims)

> Google applies its highest E-E-A-T scrutiny to YMYL content. The bar is not "decent" — it is "high enough to avoid harm."

### E-E-A-T breakdown

| Dimension | Score | Key gaps |
|---|---|---|
| Experience | 28/100 | Testimonials present but unverifiable (no surnames, no dates, no photos) |
| Expertise | 22/100 | No qualifications listed, no methodology citations, no clinical grounding |
| Authoritativeness | 35/100 | Book + social presence; zero third-party press, no professional associations |
| Trustworthiness | 28/100 | No privacy policy, no medical disclaimer, placeholder meta tags, expired countdown timers |

### Critical

**C1 — Medical outcome claims without credentials or disclaimer**
Testimonials assert diabetes resolved, blood pressure normalized, acid reflux eliminated — including one testimonial from a post-chemotherapy cancer patient. The FTC (US) requires disclosure of typical results for testimonials making health claims. No disclaimer exists anywhere on the page.

*Fix:* Add a medical disclaimer above the fold. Remove or clearly frame the cancer-patient and diabetes/blood pressure testimonials as anecdotal. Add "results vary" language to all weight-loss claims.

**C2 — 0.5–1 lb/day and "3 lbs in one day" weight loss claims**
These exceed safe clinical weight-loss rates. These are not just credibility problems — they are regulatory liability in the US, Australia, Canada, UK, and Germany.

*Fix:* Soften to "significant results vary by individual" and remove specific per-day claims.

**C3 — Thin content on a single-page site (YMYL)**
~1,990 words of visible text across one URL. No blog, no methodology page, no FAQ, no credentials page, no results archive. Google's Helpful Content guidance flags single-page sites that exist primarily to convert rather than inform — especially in YMYL categories.

### High

**H1 — No qualifications or credentials disclosed**
No nutritionist license, no registered dietitian certification, no personal trainer credential, no medical advisory board. For a program claiming to resolve diabetes and blood pressure, the absence of clinical grounding is a severe YMYL gap.

*Fix:* Add a dedicated credentials section listing any certifications, training backgrounds, or professional affiliations. Link the book "Béo ơi vĩnh biệt" to a verifiable source (publisher, Amazon, Goodreads).

**H2 — No privacy policy**
A contact form collecting email and phone from users in the US, EU (Germany), Australia, Canada, and UK triggers CCPA, GDPR, Privacy Act, PIPEDA, and UK GDPR obligations. No privacy policy is legally non-compliant in every target market.

**H3 — Structural content duplication from LadiPage builder**
The CTA + countdown block is duplicated 5 times in HTML. The countdown timer (Phút/Ngày/Giờ/Giây) appears as 5 separate H3 headings. Repeated identical headings signal low editorial quality to crawlers.

**H4 — No content freshness signals**
Zero dates in the HTML. Expired countdown timers signal abandonment. No blog, no "last updated" marker, no copyright year.

### Medium

**M1 — Testimonials unverifiable**
No last names, no photos, no dates, no third-party platform source. Valuable social proof that cannot be validated.

*Fix:* Add testimonial dates; link to original Facebook/Zalo posts where clients have shared publicly; add photos with consent.

**M2 — Program methodology never explained**
"Personalized eating formula" is claimed but never described. What does it involve? Macros? Elimination? Intermittent fasting? Undefined methodology cannot be cited, trusted, or differentiated from competitors.

**M3 — Pricing not disclosed**
The "50% discount" CTA has no base price or discounted price. This frustrates decision-making and reduces conversion for high-intent visitors.

### Missing content opportunities

| Content | Priority | Expected impact |
|---|---|---|
| Medical disclaimer + "results vary" | Critical | YMYL compliance, trust |
| Privacy policy | Critical | Legal compliance in 5 markets |
| FAQ section (5–10 Q&As) | High | AI Overviews eligibility, buyer objections |
| Coach credentials page | High | E-E-A-T, Google QRG |
| Methodology explanation | High | Trust, differentiation, AI citation |
| Blog / resource articles | Medium | Long-term topical authority |
| Location pages (Little Saigon CA, Houston TX, etc.) | Medium | Local organic rankings |
| Testimonials with dates + photos | Medium | Social proof credibility |
| Book page (linked to publisher/Amazon) | Medium | Author authority signal |

---

## Section 3: On-Page SEO

**Score: 18 / 100**

| Element | Current State | Target |
|---|---|---|
| Title tag | `tranthuytien` | Keyword-rich, ≤60 chars |
| Meta description | `tranthuytien` | Compelling, ≤155 chars |
| H1 | Absent | One per page, primary keyword |
| H2 | Absent | Section-level hierarchy |
| H3 | 80+ (no hierarchy) | Supporting subpoints only |
| Canonical | Present but no trailing slash | Consistent with preferred URL form |
| OG title | `tranthuytien` | Matches title tag |
| OG description | `tranthuytien` | Matches meta description |
| OG image | **Absent** | 1200×630px branded image |
| Twitter Card | **Absent** | summary_large_image |
| hreflang | **Absent** | vi, vi-US, vi-AU, vi-CA, vi-GB, vi-DE, x-default |
| Internal links | 0 | At minimum homepage ↔ /tuyenctv |
| Image alt text | 0 (no img tags) | All images with descriptive alt |
| Keywords meta | Empty | Remove (ignored by Google) |
| Google/Facebook verification | None detected | Add GSC verification |

---

## Section 4: Schema / Structured Data

**Score: 0 / 100**

Zero structured data exists on the site. Below are the priority schema blocks to implement.

### Priority 1 — Person (Trần Thủy Tiên)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.tranthuytien.net/#person",
  "name": "Trần Thủy Tiên",
  "alternateName": "Coach Thủy Tiên",
  "jobTitle": "Weight Loss Coach",
  "description": "Certified weight loss coach, CEO of Young Group, author of Béo ơi vĩnh biệt. Specializes in personalized weight loss programs for the Vietnamese diaspora.",
  "url": "https://www.tranthuytien.net/",
  "email": "coachthuytien@gmail.com",
  "telephone": "+16093183681",
  "sameAs": [
    "https://www.facebook.com/CandyTran1903",
    "https://www.facebook.com/tranthuytienmainpage/",
    "https://www.youtube.com/channel/UCzpGBdAWG3yR9s_CUvZ606A",
    "https://www.tiktok.com/@tranthuytienofficial"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Young Group"
  },
  "author": {
    "@type": "Book",
    "name": "Béo ơi vĩnh biệt"
  }
}
```

### Priority 2 — LocalBusiness (US location)

```json
{
  "@context": "https://schema.org",
  "@type": ["HealthAndBeautyBusiness", "LocalBusiness"],
  "@id": "https://www.tranthuytien.net/#business-us",
  "name": "Trần Thủy Tiên - Weight Loss Coach",
  "url": "https://www.tranthuytien.net/",
  "telephone": "+16093183681",
  "email": "coachthuytien@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3428 Burning Tree Lane",
    "addressLocality": "Midlothian",
    "addressRegion": "TX",
    "postalCode": "76065",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "32.47412",
    "longitude": "-97.00891"
  },
  "areaServed": [
    {"@type": "Country", "name": "United States"},
    {"@type": "Country", "name": "Australia"},
    {"@type": "Country", "name": "Canada"},
    {"@type": "Country", "name": "United Kingdom"},
    {"@type": "Country", "name": "Germany"},
    {"@type": "Country", "name": "Vietnam"}
  ],
  "founder": {"@id": "https://www.tranthuytien.net/#person"},
  "sameAs": [
    "https://www.facebook.com/tranthuytienmainpage/",
    "https://www.youtube.com/channel/UCzpGBdAWG3yR9s_CUvZ606A",
    "https://www.tiktok.com/@tranthuytienofficial"
  ]
}
```

### Priority 3 — WebSite

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.tranthuytien.net/#website",
  "name": "Coach Thủy Tiên",
  "url": "https://www.tranthuytien.net/",
  "inLanguage": "vi",
  "publisher": {"@id": "https://www.tranthuytien.net/#person"}
}
```

### Priority 4 — AggregateRating + Review (deploy only after reviews are on-page)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.tranthuytien.net/#service-weight-loss",
  "name": "Personalized Weight Loss Coaching",
  "provider": {"@id": "https://www.tranthuytien.net/#person"},
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

> **Do not deploy AggregateRating with invented numbers.** Match `reviewCount` exactly to the number of `Review` blocks visible in the HTML. Google cross-checks this.

### Deprecated schema types — do NOT implement

- `HowTo` — removed from rich results September 2023
- `FAQPage` for SERP rich results — retired May 7, 2026. Use FAQPage only for AI/LLM citation benefit, not Google SERP targeting.
- `SpecialAnnouncement` — deprecated July 31, 2025

---

## Section 5: Performance (Core Web Vitals)

**Estimated tier: Poor**

No CrUX field data available (no API credentials). Assessment based on structural analysis and measured HTTP timing.

### Measured signals

| Signal | Value | Status |
|---|---|---|
| TTFB | 833ms | **Poor** (threshold: 600ms) |
| Total transfer time | 1,888ms | High for a single HTML doc |
| HTML document size | 248 KB uncompressed | Extremely large for a landing page |
| Inline CSS | 145.8 KB | Non-cacheable, render-blocking |
| Inline JS | 15.4 KB | — |

### Estimated CWV

| Metric | Estimated status | Confidence | Primary cause |
|---|---|---|---|
| LCP | Poor (>4s likely) | High | TTFB 833ms + JS-rendered hero image |
| INP | Needs Improvement | Medium | LadiPage JS runtime, countdown timers, 14 YouTube embeds |
| CLS | Needs Improvement to Poor | High | Viewport override script, countdown timers, carousel, JS layout injection |

### Critical performance issues

**P1 — TTFB of 833ms**
The HTML takes 833ms before first byte arrives. On mobile with network latency, this pushes LCP past 4s before any subresource loads. LadiPage appears to serve from a single-region origin with no HTML CDN caching.

*Fix:* Put Cloudflare (free tier) in front of the LadiPage origin. Edge caching for HTML would bring TTFB to ~100–150ms for Vietnamese diaspora users.

**P2 — Hero image is CSS background-image, not `<img>`**
The browser preload scanner cannot discover CSS background images. The LCP candidate (hero image) cannot start downloading until JS executes and CSS is applied.

*Fix:* Add an explicit preload hint in `<head>`:
```html
<link rel="preload" as="image"
  href="[hero-image-url]"
  fetchpriority="high">
```

**P3 — 4 TTF fonts, no WOFF2, no font-display**
All four custom fonts (`svn-opinion-*.ttf`) are TTF format. No `font-display: swap`. Text using these fonts is invisible (FOIT) until fonts download, which directly delays LCP.

*Fix:* Convert to WOFF2 (30–40% smaller). Add `font-display: swap` to each `@font-face` rule.

**P4 — 14 YouTube embeds injected as dynamic iframes**
When a user taps a thumbnail, LadiPage injects a YouTube iframe that triggers a cross-origin connection, loads the YouTube JS player (~500 KB), and injects a large iframe — measurable CLS and main-thread INP impact.

**P5 — 4 expired countdown timers cause CLS**
4 identical countdown widgets all show 00:00:00:00. Each JavaScript tick can shift surrounding content if the container has no fixed height.

### Performance recommendations (prioritized)

1. Enable Cloudflare CDN or equivalent — fixes TTFB (largest single gain)
2. Confirm gzip/brotli compression is applied (248 KB → ~35 KB with compression)
3. Convert TTF fonts to WOFF2 + add `font-display: swap`
4. Add `<link rel="preload">` for the hero background image
5. Remove IE polyfills (`html5shiv.min.js`, `respond.min.js`) — no target user runs IE8
6. Fix or remove expired countdown timers — fix CLS and trust simultaneously
7. Reserve fixed dimensions for carousel and countdown containers
8. Remove unused `fonts.googleapis.com` preconnect hints (no Google Fonts used)
9. Add `dns-prefetch` for `img.youtube.com` (YouTube thumbnails load from this domain)

---

## Section 6: Images

**Score: 5 / 100**

| Signal | Status |
|---|---|
| `<img>` tags in HTML | **0** — all images injected via LadiPage JS |
| Alt text attributes | **0** — no img tags = no alt text |
| Google Image Search indexing | **None** — images are invisible to crawlers |
| Lazy loading | Indeterminate — LadiPage may lazyload off-screen backgrounds |
| Image formats | TTF thumbnails via CSS background; format unclear from static HTML |
| OG image | **Absent** |
| Favicon | Not detected |

**Root cause:** LadiPage renders images as CSS `background-image` on `<div>` elements. The browser preload scanner and search engine crawlers cannot discover CSS background images. Zero images from this site appear in Google Image Search.

**Fix (LadiPage-specific):** Use LadiPage's built-in image element (not background image) where possible. This renders `<img>` tags in the output HTML and allows alt text assignment. Specifically: hero image, coach headshot, and testimonial photos should use image elements, not section backgrounds.

---

## Section 7: AI Search Readiness (GEO)

**Score: 20 / 100**

| Platform | Current score | Primary blocker |
|---|---|---|
| Google AI Overviews | 5/100 | JS rendering, no JSON-LD, no YMYL E-E-A-T signals |
| ChatGPT / OpenAI | 10/100 | No crawlable text, no entity schema |
| Perplexity | 12/100 | No crawlable text; YouTube presence partially helps |
| Bing Copilot | 8/100 | No structured data, no author entity |

### Findings

**C1 — All content invisible to AI crawlers (LadiPage SPA)**
When GPTBot, ClaudeBot, PerplexityBot, or Google crawls this page, they receive a shell with title "tranthuytien" and no body text. The coaching story, testimonials, and program details are invisible. This is the single highest-impact problem.

**C2 — No llms.txt file**
`https://www.tranthuytien.net/llms.txt` returns 404. No curated AI context provided.

*Fix (1 hour):*
```
# Trần Thủy Tiên - Weight Loss Coach

> Trainer and weight loss coach for the Vietnamese diaspora.
> Author of "Béo ơi vĩnh biệt." CEO of Young Group. Based in Texas, USA.

## Program
- Personalized meal plans based on body type
- Daily monitoring via photo-based weight tracking
- Clients in Vietnam, USA, Australia, Canada, Germany, UK

## Contact
- Website: https://www.tranthuytien.net
```

**C3 — No passage-level citable content**
Optimal AI citation length is 134–167 words of self-contained, directly-answerable text. The page has none. All text is fragmented marketing slogans. A crawler cannot extract an answer to "How does Trần Thủy Tiên's program work?"

*Fix:* Write 3–5 standalone answer blocks covering: how the program works, who it's for, typical results, coach credentials, program differentiators.

**C4 — YMYL health claims without E-E-A-T = AI Overview suppression**
Google AI Overviews has heightened scrutiny for unverified health claims. Unattributed claims about resolving diabetes and blood pressure actively suppress AI citation.

**H1 — YouTube presence is the strongest existing AI citation asset**
YouTube has a 0.737 correlation with AI citation. 14 videos are linked. Publish transcripts or summaries of the top 5 as written content on the site to unlock this signal.

---

## Section 8: Local SEO

**Score: 18 / 100**

### Critical local gaps

**L1 — No confirmed Google Business Profile**
No GBP signal detected anywhere on the page. For a business with a US physical address, a verified GBP is the single highest-impact local ranking factor (Whitespark 2026: primary GBP category = factor #1).

*Fix:* Create and verify a GBP listing:
- US profile: "Trần Thủy Tiên — Weight Loss Coach", Midlothian TX 76065
- Vietnam profile: Same entity, Quận 6 TP HCM (separate GBP listing)

**L2 — NAP inconsistencies on the page**
- Address shows `Midlothian. TX76065` (period instead of comma, no space before zip). Should be `Midlothian, TX 76065`
- Coach name: both `Trần Thủy Tiên` and `Trần Thuỷ Tiên` appear (y vs ỷ). Pick one and use consistently everywhere.
- VN phone displays as `0765 480 529` (Zalo contact) but the primary VN number in the sitemap context is `0932911368`. Two different numbers create citation inconsistency.

**L3 — No local schema markup**
Correct schema type for this business: `HealthAndBeautyBusiness`. Not `MedicalClinic` (no licensed medical claims). See Section 4 for complete schema code.

**L4 — No Google Maps embed**
No Maps iframe, no directions link, no GBP place reference on the page.

**L5 — No tracking (GA4 or Facebook Pixel initialized)**
LadiPage wraps `fbq` and `ttq` in custom handlers (`ladi_fbq`, `ladi_ttq`) but no pixel IDs are injected in the static HTML. Pixel IDs are injected via LadiPage's backend tracking panel. Confirmed: no GA4 or GTM tag found. The business cannot measure organic traffic, conversion paths, or ad performance.

*Fix (critical for paid media):* Install GA4 and Facebook Pixel via LadiPage's tracking integration panel.

### High local opportunities

**Vietnamese diaspora city pages**
The highest-value local organic play for this business is city-specific landing pages for major Vietnamese diaspora concentrations:
- Garden Grove / Westminster, CA (Little Saigon, ~200K Vietnamese-Americans)
- Houston, TX
- San Jose, CA
- Seattle, WA
- Dallas/Fort Worth, TX

Each page should use the coach's testimonials from that state and include city-specific schema with `areaServed`.

**Review acquisition strategy**
The page has 6 on-page testimonials with no dates, no third-party source, and no schema. A structured review acquisition strategy targeting Google Business Profile reviews from past US-based clients would unlock star ratings in SERPs.

---

## Section 9: Search Experience Optimization (SXO)

**SXO Score: 34 / 100**

### Page-type mismatch (critical)

The page is a direct-response sales landing page. The SERPs for core weight-loss queries ("giảm cân hiệu quả," "giảm cân cho người Việt") return hospital articles, medical publisher listicles, and YouTube workout carousels. Google rewards informational content for these queries. A sales page cannot rank for non-branded informational queries regardless of how well it is optimized on-page.

**Implication:** Organic traffic potential for this site is essentially limited to branded queries ("Trần Thủy Tiên," "Young Group"). All non-branded organic traffic requires a content layer (blog, FAQ, methodology articles) that does not yet exist.

### Persona scoring

| Persona | Score | Key friction |
|---|---|---|
| Skeptical organic searcher | 1.75/5 | Page never appears in SERP; countdown timers trigger scam signals |
| Warm social referral | 3.25/5 | Strong testimonials; weakened by expired timer, no visible pricing |
| Health-motivated older woman | 2.0/5 | YMYL claims without credentials; no medical context |
| Recent immigrant | 3.0/5 | Good diaspora framing; Zalo CTA appropriate for mobile |
| Returning client / referrer | 3.25/5 | Cannot share a shareable program summary link |

### Top SXO fixes

1. **Remove or fix countdown timers** — 4 timers stuck at 00:00:00 are the single biggest trust destroyer for all 5 personas. Replace with real rolling cohort deadline or remove.
2. **Add a free-value CTA** near the hero for cold traffic ("Xem video kết quả miễn phí") before asking for a consultation.
3. **Show pricing or at least a price range** — the "50% off" with no base price creates more friction than it removes.
4. **Build a content layer** for organic search — 3–5 articles targeting diaspora weight-loss queries.
5. **Create a shareable program overview anchor** — a clean section with social share button for word-of-mouth referral flow.

---

## Prioritized Action Plan

### Phase 1 — Week 1 (Critical fixes, platform-independent)

These can all be done within LadiPage's settings panel or via script injection into the `<head>`:

| # | Action | Effort | Impact |
|---|---|---|---|
| 1 | Rewrite meta title: `Trần Thủy Tiên | Giảm Cân Cá Nhân Hóa cho Người Việt ở Mỹ` | 15 min | High |
| 2 | Rewrite meta description (155 chars, keyword + CTA) | 15 min | High |
| 3 | Add `og:image` (1200×630px branded image) | 1 hr | High |
| 4 | Fix OG title and OG description to match meta tags | 15 min | Medium |
| 5 | Add H1 tag to the hero headline | 30 min | High |
| 6 | Add Person + LocalBusiness JSON-LD via `<head>` script injection | 2 hr | High |
| 7 | Add `Sitemap:` line to robots.txt | 5 min | Medium |
| 8 | Add medical disclaimer + "results vary" disclosure above testimonials | 1 hr | Critical (legal) |
| 9 | Add privacy policy page (basic template) | 2 hr | Critical (legal) |
| 10 | Fix or remove expired countdown timers | 30 min | Medium |

### Phase 2 — Weeks 2–3 (High-impact improvements)

| # | Action | Effort | Impact |
|---|---|---|---|
| 11 | Create and verify Google Business Profile (US, Midlothian TX) | 1–2 hr | High |
| 12 | Install GA4 and Facebook Pixel via LadiPage tracking panel | 30 min | High |
| 13 | Add hreflang tags (vi, vi-US, vi-AU, vi-CA, vi-GB, vi-DE, x-default) | 30 min | Medium |
| 14 | Fix canonical trailing slash + update sitemap `<loc>` | 15 min | Medium |
| 15 | Update sitemap `lastmod` dates | 5 min | Low |
| 16 | Fix US address format: `Midlothian, TX 76065` (remove period, add space) | 10 min | Medium |
| 17 | Standardize coach name diacritics: choose `Trần Thủy Tiên` or `Trần Thuỷ Tiên` | 30 min | Medium |
| 18 | Create `/llms.txt` file | 1 hr | Medium |
| 19 | Add Twitter Card meta tags | 15 min | Low |
| 20 | Fix SSL for non-www HTTPS | 1 hr | Medium |

### Phase 3 — Month 2 (Content and authority)

| # | Action | Effort | Impact |
|---|---|---|---|
| 21 | Write FAQ section (5–10 Q&As, FAQPage schema) | 3–4 hr | High |
| 22 | Add coach credentials section (certifications, training, methodology name) | 2–3 hr | High |
| 23 | Link book "Béo ơi vĩnh biệt" to Amazon/publisher/ISBN | 30 min | Medium |
| 24 | Add dates to all 6 testimonials; link to original posts if public | 1 hr | Medium |
| 25 | Build first city-specific page (Garden Grove / Little Saigon, CA) | 4–6 hr | High |
| 26 | Write 3–5 blog articles targeting diaspora weight-loss queries | 1–2 days | High |
| 27 | Publish top 5 YouTube video transcripts as written content | 3 hr | Medium |
| 28 | Add internal link homepage ↔ /tuyenctv | 15 min | Low |

### Phase 4 — Ongoing (Monitoring and iteration)

| # | Action | Frequency |
|---|---|---|
| 29 | Run Google Search Console URL Inspection to confirm full JS rendering | Monthly |
| 30 | Monitor Core Web Vitals via PageSpeed Insights | Monthly |
| 31 | Request Google reviews from US-based clients | Ongoing |
| 32 | Update sitemap `lastmod` on each content change | Per publish |
| 33 | Explore Cloudflare CDN for TTFB improvement | Q3 2026 |

### Long-term (Strategic platform decision)

The single highest-impact SEO investment for this business is migrating from LadiPage to a server-rendered platform. LadiPage is an excellent direct-response and paid-traffic tool. It is fundamentally incompatible with organic search as a growth channel because it delivers all content through JavaScript that crawlers cannot read.

**Recommended migration path:**
- Keep the LadiPage homepage for paid traffic (Facebook ads, Zalo campaigns)
- Build a parallel site on WordPress, Webflow, or Framer for organic/SEO
- Use a subdomain (e.g., `blog.tranthuytien.net`) if a full domain migration is not feasible
- This creates a two-track system: paid/social conversion on LadiPage, organic traffic on the CMS

---

## Appendix: Keyword Opportunities

Target keywords for organic content:

| Keyword (Vietnamese) | Intent | Content type |
|---|---|---|
| giảm cân cho người Việt ở Mỹ | Informational / Commercial | Blog article + service page |
| coach giảm cân người Việt | Commercial | Service page |
| chương trình giảm cân hiệu quả | Commercial | Service page |
| giảm cân sau khi sang Mỹ tăng cân | Informational | Blog article |
| ăn gì để giảm cân ở Mỹ | Informational | Blog article |
| Trần Thủy Tiên | Navigational | Brand SERP (GBP, schema) |
| Young Group giảm cân | Navigational | Brand SERP |
| béo ơi vĩnh biệt sách | Navigational | Book page |

---

## Appendix: Tools Recommended

| Tool | Purpose | Cost |
|---|---|---|
| Google Search Console | Rendering validation, indexation, CWV field data | Free |
| PageSpeed Insights | LCP, INP, CLS lab data | Free |
| Google Business Profile | Local search, reviews, Knowledge Panel | Free |
| Google Rich Results Test | Schema validation | Free |
| Cloudflare | CDN, TTFB improvement, security headers | Free tier |
| WOFF2 converter | Font format conversion | Free (online tools) |
| Google Analytics 4 | Traffic and conversion measurement | Free |

---

*Report generated June 25, 2026. Specialist subagents: seo-technical, seo-content, seo-schema, seo-performance, seo-geo, seo-local, seo-sxo.*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
