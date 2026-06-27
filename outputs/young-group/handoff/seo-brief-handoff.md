# SEO Foundation Brief — Handoff

**Client:** Young Group / Trần Thủy Tiên
**Date:** 2026-06-25

---

## Primary SEO goal

Capture Vietnamese diaspora search intent for weight loss coaching — Vietnamese-speaking women in the USA (primary) and Australia, Canada, Germany, UK (secondary). Build bilingual presence for Vietnamese-language and English-Vietnamese queries. Every page supports the consultation booking path.

---

## Homepage target theme

Vietnamese online weight loss coaching (giảm cân cho người Việt tại Mỹ / weight loss coaching Vietnamese online). Include USA as market signal in structured data and testimonials — do not use a city in the title tag or H1. No location page for the homepage.

---

## Core keyword/theme clusters

| Cluster | Primary intent | Page | Impact |
|---|---|---|---|
| Vietnamese weight loss coaching — core service | Informational + transactional | Homepage + Program page | High |
| Weight loss program with food / meal plan | Transactional | Program page | High |
| 1-on-1 personal coaching / accountability | Transactional | Program page / About | High |
| Founder authority — Trần Thủy Tiên / Young Group | Navigational | About / Founder page | Medium |
| Money-back guarantee / risk-free weight loss | Consideration | Program page + FAQ | High |
| Results / client testimonials | Trust verification | Results page | Medium |
| Objection-based FAQ queries | Informational | FAQ page | Medium |

---

## Required pages at launch

| Page | Slug | Primary intent |
|---|---|---|
| Homepage | `/` | Vietnamese weight loss coaching — category-defining |
| Program page | `/chuong-trinh-giam-can` | Transactional — meal plan + 1-on-1 coaching |
| About / Founder page | `/ve-coach-thuy-tien` | Navigational — Trần Thủy Tiên founder authority |
| Results / Testimonials page | `/ket-qua-khach-hang` | Trust verification — real client results |
| Contact / Consultation booking | `/lien-he` | Navigational — conversion endpoint |
| FAQ page | `/cau-hoi-thuong-gap` | Informational — objection resolution |

---

## Homepage SEO role

- Target theme: Vietnamese online weight loss coaching
- Must-have trust signals: 226K Facebook follower count; named testimonials with weight + US state; money-back guarantee; six-country service area; founder name and face
- Location targeting: Do not target a single city. Include USA as market context. US state mentions in testimonials serve as implicit geo-relevance.
- Breadth: Category-wide entry point; proof-specific enough to convert

---

## Service page rules

- One core service page at launch: the weight loss program
- Meal plan + food combo + 1-on-1 coaching stay on one Program page — do not split
- Add skincare page only when confirmed as distinct, separately priced offer with its own buyer intent
- Required content on Program page: H1 with primary keyword; program description (42-meal combo, ~15 min prep, personalized by body type, no hunger); guarantee terms; FAQ section (5+ objection answers); named testimonials; primary CTA to consultation

---

## Location strategy

No location pages at launch. Business is online-only; audience searches by language/cultural identity, not city. Defer location pages until analytics confirm city-specific organic impressions from Vietnamese diaspora metros (Houston, San Jose, Westminster CA, Dallas TX).

NAP (Name, Phone, Email) must be consistent on the Contact page and match any Google Business Profile entry exactly.

---

## FAQ themes by category

**Trust/credibility**
- "Trần Thủy Tiên là ai — có uy tín không?" → About page
- "Đây có phải chương trình thật hay chỉ là quảng cáo?" → Homepage + Results page
- "Hàng nghìn khách hàng là bao nhiêu cụ thể?" → Homepage + Results page
- "Có nhận xét từ khách hàng thật không?" → Results page

**Process**
- "Chương trình này hoạt động như thế nào?" → Program page
- "Combo thức ăn 42 bữa là gì?" → Program page
- "Tôi có phải nấu ăn nhiều không?" → Program page + FAQ
- "Thực đơn có được cá nhân hóa theo cơ thể tôi không?" → Program page

**Comparison**
- "So với Noom hoặc WeightWatchers thì khác gì?" → Program page + FAQ
- "Tại sao không thử app thay vì coaching?" → FAQ
- "Tại sao chương trình này khác với những chương trình tôi đã thử?" → Homepage + Program page

**Pricing/value**
- "Chương trình giá bao nhiêu?" → FAQ (acknowledge + redirect to consultation)
- "Nếu không hiệu quả thì sao?" → Program page + FAQ
- "Có hoàn tiền không nếu không giảm được cân?" → Program page + FAQ

**Problem/symptom**
- "Tôi đã thử nhiều cách mà không giảm được — có hy vọng không?" → Homepage + Program page
- "Tôi có thể giảm cân mà không cần nhịn ăn không?" → Homepage + Program page
- "Chương trình có phù hợp với người bận rộn không?" → Program page

---

## Internal linking priorities

- Homepage → Program page: hero CTA + secondary CTA lower in page
- Program page → Contact: primary CTA — do not compete with any other link
- Results page → Program page: after each testimonial cluster
- FAQ → Program page: each resolved objection links to relevant program section
- FAQ → Contact: objections not resolved by content link to consultation booking
- About/Founder page → Program page: authority section transitions into program description

---

## Schema recommendations

| Schema type | Page | Why |
|---|---|---|
| Person | About/Founder | Founder-brand queries; links founder identity to business |
| FAQPage | FAQ page + Program page FAQ section | Rich results for objection queries |
| Organization | Homepage | Business identity, social profiles, service area |
| BreadcrumbList | All non-homepage pages | Clean SERP presentation |
| AggregateRating | Deferred — add only after third-party review platform is active | |

---

## Technical SEO must-haves

- Flat hierarchy: homepage to all pages in one hop
- URL convention: Vietnamese romanization slugs OR English slugs — pick one, do not mix
- Unique title tag + meta description per page; title pattern: "[Primary keyword] — Trần Thủy Tiên / Young Group"
- No hreflang at launch (Vietnamese-language site, uniform audience)
- XML sitemap submitted to Google Search Console on launch
- robots.txt: allow all six pages; block admin/checkout paths
- Image alt: founder photos use named alt text; no generic wellness alt text
- One H1 per page with primary keyword; no skipped heading levels
- Core Web Vitals: preload hero LCP image (WebP/AVIF); use `font-display: swap` for both fonts; consultation form must respond within 200ms
- NAP: match Contact page and Google Business Profile exactly

---

## Optional later pages

- Blog/educational content — when organic FAQ traffic signals demand
- Location pages (Houston, San Jose, Westminster CA, Dallas TX) — when city-specific organic impressions confirmed by analytics
- Skincare program page — when offer confirmed with distinct buyer intent and testimonials
- Country-specific pages (Australia, Canada, Germany, UK) — when per-country traffic warrants dedicated entry points

---

## Open SEO questions

1. Specific client count — "thousands" is not rankable; a number like "500+" is required for proof credibility
2. Consultation language — fully Vietnamese, or bilingual? Determines whether any English-language page variants make sense
3. US physical address — needed to verify Google Business Profile
4. Skincare program — standalone offer at launch or later?
5. CMS/platform — determines URL and schema implementation approach
6. Video testimonials available for Results page embed?
7. Vietnam-market targeting — separate .vn domain or geo-targeting needed?
8. Third-party review platform — Google Reviews or Vietnamese-language equivalent to enable AggregateRating schema?
