# Website Blueprint Handoff
**Client:** Young Group / Trần Thủy Tiên
**Date:** June 2026
**Version:** 1.0

---

## 1. Build summary

- **Website goal:** Drive free consultation bookings through a trust-first, founder-led site that overcomes high buyer skepticism before the call
- **Primary audience:** Vietnamese-speaking women, ages 30–55, USA / Vietnam / Australia / Canada — chronic weight-loss failure history, seeking root-cause fix
- **Primary conversion action:** Book a free consultation call — "TƯ VẤN CHO TÔI"
- **Trust burden:** High — premium private-pricing health service, credentials unconfirmed, no third-party ratings
- **Recommended intervention level:** Full redesign — 6-page site built from scratch per locked Branding Visual Guide
- **Build style:** Warm luxury wellness, editorial/human, founder-led; cream/gold/charcoal system; spacious alternating rhythm
- **Notes:** Remove all fake-urgency mechanics (countdown timer, perpetual "50% off"). Resolve tranthuytien.store brand conflict before launch. Credential strip module included but deactivated by default — activate after client confirms credentials.

---

## 2. Final page architecture

| Page | URL | Exists because | Primary intent | Primary CTA | Required now |
|---|---|---|---|---|---|
| Homepage | `/` | Brand authority, consultation bookings, primary SEO target | Service + branded intent | TƯ VẤN CHO TÔI | Yes |
| Service page | `/chuong-trinh-giam-can` | Commercial investigation queries; homepage stays conversion-focused not explanation-heavy | Service + commercial investigation | TƯ VẤN CHO TÔI | Yes |
| About / founder | `/tran-thuy-tien` | Branded trust queries; E-E-A-T signals for health content; founder is primary trust signal | Trust + branded intent | Xem chương trình | Yes |
| Results / testimonials | `/ket-qua` | Trust burden too high for homepage proof band alone; dedicated hub for review and outcome queries | Trust intent | TƯ VẤN CHO TÔI | Yes |
| FAQ | `/cau-hoi-thuong-gap` | Distinct search intent — problem-aware, comparison, pricing, process queries not served by other pages | Problem/symptom + commercial investigation | TƯ VẤN CHO TÔI | Yes |
| Consultation | `/tu-van` | Conversion endpoint; dedicated booking page sets call expectations; SEO action intent | Service intent (action) | Booking form submit | Yes |

### Topics kept as sections, not pages

- **Topic:** Guarantee statement
  **Lives on:** Homepage (CTA band, hero subline), service page (CTA band), FAQ (guarantee terms Q&A)
  **Why not standalone:** Single-statement proof unit, 2–3 sentences. No distinct search intent. Belongs as a high-visibility section within conversion flow, not a destination.

- **Topic:** How-it-works / process steps
  **Lives on:** Service page (dedicated process section)
  **Why not standalone:** Fully contained within service page. No distinct search intent separate from the service page theme.

- **Topic:** Contact details
  **Lives on:** Footer (all pages), consultation page (as alternative methods below form)
  **Why not standalone:** Contact is an endpoint action, not a standalone destination. The consultation page `/tu-van` serves this role with added booking context.

- **Topic:** Founder quote / authority statement
  **Lives on:** Homepage (founder quote slab component), about page
  **Why not standalone:** No distinct search intent. Serves as a trust anchor inside the page flow.

---

## 3. Homepage handoff

### Homepage goal

- Establish founder authority above the fold
- Communicate the core differentiator (runs until goal reached — no fixed end date)
- Present the four "không" pillars as trust architecture
- Show named proof early enough for cold visitors
- State the guarantee clearly
- Drive to consultation CTA — no competing urgency signals

---

### Homepage section order

**1. Hero**
- **Purpose:** Establish founder identity, state core promise, drive primary CTA
- **Key message direction:** "Chương trình chạy đến khi bạn đạt mục tiêu — không phải đến khi hết hạn hợp đồng." Founder portrait prominent above fold.
- **Trust/proof needed:** Founder name and face; core promise phrase; placeholder for confirmed client count
- **CTA behavior:** Primary CTA button — TƯ VẤN CHO TÔI. One CTA only. No countdown. No discount banner.
- **Builder note:** Founder portrait is likely LCP element — WebP, eager-load, `srcset`, preload. Reserve image dimensions. Founder name as H1 context or hero subline. Do not crop portrait on mobile.

---

**2. Problem reframe**
- **Purpose:** Validate the buyer's failure history; reframe cause from willpower to method
- **Key message direction:** "Bạn không có lỗi. Phương pháp có lỗi." 80/20 framing (eating drives 80% of result, exercise 20%). Address the #1 objection — "I've tried everything before."
- **Trust/proof needed:** None at this stage — purely empathetic framing
- **CTA behavior:** No CTA in this section
- **Builder note:** Narrative text section, full-width. One calligraphic script accent phrase for emotional emphasis. No icon grid here.

---

**3. Four-pillar trust banner**
- **Purpose:** Deliver the four "không" differentiators as a visual trust anchor
- **Key message direction:** Không thực phẩm bổ sung · Không tập thể dục · Không ăn kiêng cực đoan · Không tái tăng cân
- **Trust/proof needed:** The four pillars themselves — no additional proof needed
- **CTA behavior:** No CTA
- **Builder note:** Full-width banner component. Thin warm-toned outline icons only — one per pillar. No generic benefit-list format. Horizontal row on desktop, 2×2 grid on mobile. Gold anchor color for icon strokes.

---

**4. Offer overview**
- **Purpose:** Communicate what's included at a headline level — drive to service page for depth
- **Key message direction:** Weekly personalized meal plan · 42-meal food combo shipped to you · Daily weight monitoring by a specialist · Weekly Zoom health education sessions · Lifetime weight-maintenance formula on completion
- **Trust/proof needed:** Program inclusions stated clearly; "runs until goal reached" guarantee in subline
- **CTA behavior:** Secondary text link — "Xem chi tiết chương trình →" links to `/chuong-trinh-giam-can`
- **Builder note:** 2-column layout or process band. Do not repeat the full service page. Headline offer + inclusions list + one link. Guarantee subline beneath inclusions.

---

**5. Testimonial proof band**
- **Purpose:** Named client outcomes with specific results — primary social proof module
- **Key message direction:** 3–4 best testimonials. Each: name · location · pounds/kg lost · timeframe · quote excerpt.
- **Trust/proof needed:** Named attributions, result chips (e.g., "-18kg · 60 ngày · California"), client photos where approved — text-only cards where not
- **CTA behavior:** "Xem thêm câu chuyện thành công →" links to `/ket-qua`. No inline CTA competing with proof reading.
- **Builder note:** Card grid with result chips. Bordered soft warm shadow cards. No stock photos — real client photos or text-only. Build both variants. Testimonials must be high enough in the scroll to reach cold visitors within 2 screens from hero.

---

**6. Founder quote slab**
- **Purpose:** Deliver founder's authority and voice as the highest-trust layout element
- **Key message direction:** Founder's personal statement on methodology and commitment — in her voice. Book "Béo ơi vĩnh biệt" referenced. Signature treatment below.
- **Trust/proof needed:** Founder's own words; book reference; founder name + title as attribution
- **CTA behavior:** No CTA inside the slab. Slab creates trust; the next section converts.
- **Builder note:** Near-full-bleed section, warm cream background. Founder's quote in large editorial or calligraphic script type. Founder signature below. This is the brand's highest-trust layout element per visual guide — do not simplify or shrink. Include activatable credential strip beneath founder block (deactivated by default — activate when credentials confirmed).

---

**7. Guarantee + CTA band**
- **Purpose:** State money-back guarantee plainly, remove final purchase hesitation, drive consultation
- **Key message direction:** "CAM KẾT KHÔNG HIỆU QUẢ SẼ HOÀN TIỀN." Full refund if program followed with no results. "TƯ VẤN CHO TÔI" as primary action.
- **Trust/proof needed:** Guarantee statement verbatim
- **CTA behavior:** Primary CTA — TƯ VẤN CHO TÔI. This is the mid-to-late page conversion beat. One CTA only.
- **Builder note:** Full-width CTA band. Warm gold or charcoal fill. Guarantee text above CTA button. Do not add countdown or urgency mechanics here.

---

**8. Footer**
- **Purpose:** NAP, navigation, contact methods, multi-market signals
- **Key message direction:** Full contact details (Zalo · hotline · email). Both physical addresses (USA + Vietnam). Social links (Facebook · YouTube · TikTok). Navigation links to all 5 inner pages.
- **Trust/proof needed:** Both addresses for NAP consistency
- **CTA behavior:** TƯ VẤN CHO TÔI appears in footer navigation or as a footer CTA element
- **Builder note:** USA address and Vietnam address must appear character-for-character matching Google Business Profile. Include geographic market reference (Mỹ · Úc · Việt Nam · Canada) for geographic relevance signal.

---

## 4. Core page handoffs

---

### Service page — `/chuong-trinh-giam-can`

- **Goal:** Convert commercial investigators — buyers researching the program before committing to a consultation
- **Intent:** Service + commercial investigation
- **Primary CTA:** TƯ VẤN CHO TÔI
- **SEO role:** Targets "giảm cân cá nhân hóa," "chương trình giảm cân 1-1," "kế hoạch ăn uống cá nhân hóa," "42 bữa ăn giao tận nhà," "theo dõi cân nặng hàng ngày"
- **Notes:** Full program depth lives here. Homepage refers to this page. FAQPage schema required on FAQ block.

#### Section order

1. Page hero — program identity + primary CTA
2. What's included — full program inclusions with detail
3. How it works — numbered process steps
4. 2–3 focused testimonials (program experience, not just outcomes)
5. Guarantee with specific terms
6. FAQ block (5–8 questions)
7. CTA band

#### Section logic

**Section: Page hero**
- **Purpose:** State program identity clearly; confirm visitor is in the right place
- **Key message direction:** Program name, core promise, brief tagline. "Chạy đến khi bạn đạt mục tiêu — không giới hạn thời gian."
- **Proof needed:** None — set context only
- **CTA behavior:** TƯ VẤN CHO TÔI — primary
- **Builder note:** Not a duplicate of the homepage hero. Simpler, more informational. Founder portrait optional here — not required.

**Section: What's included**
- **Purpose:** Detail all inclusions — weekly menu, 42-meal combo, daily tracking, Zoom sessions, lifetime formula
- **Key message direction:** What the buyer receives, concretely. Each inclusion named and briefly described.
- **Proof needed:** Completeness of offer is proof — state all inclusions clearly
- **CTA behavior:** No inline CTA
- **Builder note:** 2-column or process band format. Each inclusion as a discrete item. Link to FAQ for shipping details.

**Section: How it works**
- **Purpose:** Remove process uncertainty; show the path from consultation to goal
- **Key message direction:** Numbered steps — consult → personalized plan → food combo shipped → daily tracking → weekly Zoom → goal reached → lifetime formula
- **Proof needed:** Clarity and specificity — numbered steps with brief descriptions
- **CTA behavior:** "Bắt đầu ngay" link or TƯ VẤN CHO TÔI after the last step
- **Builder note:** Sequential numbered layout. Thin outline icons per visual guide — one per step. Not a generic checklist.

**Section: 2–3 testimonials (program experience)**
- **Purpose:** Demonstrate the lived experience of the program, not just the outcome
- **Key message direction:** Quotes that speak to the 1-on-1 support, daily check-ins, or the "runs until goal" reality. Include result chips.
- **Proof needed:** Named attribution, result chip, quote — build for both photo and text-only variants
- **CTA behavior:** "Xem thêm câu chuyện →" links to `/ket-qua`
- **Builder note:** Smaller proof module than homepage — 2–3 cards only. Same card style as homepage.

**Section: Guarantee**
- **Purpose:** Remove final objection — money-back commitment stated plainly
- **Key message direction:** "Nếu bạn tuân thủ chương trình và không thấy kết quả — chúng tôi hoàn tiền toàn bộ."
- **Proof needed:** Verbatim guarantee language
- **CTA behavior:** TƯ VẤN CHO TÔI immediately after
- **Builder note:** Same guarantee band component as homepage. Consistent treatment across all pages.

**Section: FAQ block**
- **Purpose:** Handle the top 5–8 questions before they stop the consultation booking
- **Key message direction:** Pricing model (consultation-first, not evasive) · shipping · time commitment · personalization process · what happens if you miss a session · how the lifetime formula works
- **Proof needed:** Plain honest answers — no marketing language
- **CTA behavior:** "Câu hỏi khác? Tư vấn trực tiếp →" links to `/tu-van`
- **Builder note:** Accordion component. FAQPage schema required on all Q&As. Link contextually to `/cau-hoi-thuong-gap` for full FAQ.

**Section: CTA band**
- **Purpose:** Final conversion beat
- **Key message direction:** "Đặt lịch tư vấn miễn phí hôm nay."
- **Proof needed:** None needed here — trust is already built
- **CTA behavior:** TƯ VẤN CHO TÔI — primary button
- **Builder note:** Same CTA band component as homepage.

---

### About / founder page — `/tran-thuy-tien`

- **Goal:** Establish founder credibility as the brand's primary trust signal; capture branded and trust queries
- **Intent:** Trust + branded intent
- **Primary CTA:** Xem chương trình → (links to `/chuong-trinh-giam-can`)
- **SEO role:** Targets "Trần Thủy Tiên review," "Young Group giảm cân có uy tín không," "Béo ơi vĩnh biệt." Person schema + ProfessionalService schema required. E-E-A-T signals for health content.
- **Notes:** Credential strip included as activatable module — deactivated until credentials confirmed. Book schema activatable when ISBN confirmed.

#### Section order

1. Founder identity — name, portrait, brief authority statement
2. Personal story — connection to the weight loss problem and methodology origin
3. Methodology — what "root cause" means in practice; why it works
4. Book — "Béo ơi vĩnh biệt" reference + authority signal
5. Credential strip (deactivated by default)
6. Aggregate outcomes — client count when confirmed; multi-market reach
7. CTA — link to service page

#### Section logic

**Section: Founder identity**
- **Purpose:** Establish who Trần Thủy Tiên is — immediately
- **Key message direction:** Name, title, founding context, one-sentence authority claim
- **Proof needed:** Founder portrait (high quality required for hero use)
- **CTA behavior:** None — context-setting section
- **Builder note:** Full-width editorial layout. Founder portrait left or right column. H1 = Trần Thủy Tiên.

**Section: Personal story**
- **Purpose:** Build empathy and authenticity — the "why" behind the method
- **Key message direction:** Founder's connection to the weight loss problem; how the methodology was developed; why she started Young Group
- **Proof needed:** Founder's own narrative — specificity over vagueness
- **CTA behavior:** None
- **Builder note:** Long-form narrative text section. One calligraphic script accent phrase for emotional emphasis. No icon grids.

**Section: Methodology**
- **Purpose:** Position the root-cause approach as distinct from competitors — intellectual authority
- **Key message direction:** Why willpower and extreme dieting fail. What root cause actually means. How the 1-on-1 model addresses it.
- **Proof needed:** 80/20 framing, the four pillars restated in narrative form
- **CTA behavior:** "Xem chương trình của tôi →" links to `/chuong-trinh-giam-can`
- **Builder note:** 2-column or editorial text with section divider. Not a sales section — intellectual and empathetic in tone.

**Section: Book**
- **Purpose:** Credibility signal — published author in the weight loss domain
- **Key message direction:** "Béo ơi vĩnh biệt" — book title, brief context, purchase link when available
- **Proof needed:** Book cover image, title, brief description of what it covers
- **CTA behavior:** Purchase link if available — conditional. If not yet available, present as an authority signal without a link.
- **Builder note:** Book schema activatable when ISBN and publisher confirmed. Placeholder component required. Warm card treatment — not an e-commerce widget.

**Section: Credential strip** *(deactivated by default)*
- **Purpose:** Display formal credentials if confirmed — activates after client meeting
- **Key message direction:** [Credential name] · [Issuing body] · [Year] — one line per credential
- **Proof needed:** Confirmed credential details only — do not fabricate
- **CTA behavior:** None
- **Builder note:** Module OFF by default. Simple horizontal strip or badge row component. Activate and populate post-client meeting if credentials confirmed. If no credentials: section is hidden, trust leads via testimonials + book + guarantee.

**Section: Aggregate outcomes**
- **Purpose:** Scale proof — "this has worked for [number] people across [markets]"
- **Key message direction:** Client count when confirmed (placeholder now). Named markets: Mỹ · Úc · Việt Nam · Canada · Đức · UK.
- **Proof needed:** Confirmed client count — use placeholder until confirmed
- **CTA behavior:** None
- **Builder note:** Stat band or compact proof module. Numbers only — no vague claims.

**Section: CTA**
- **Purpose:** Route founder trust to the next step
- **Key message direction:** "Xem chương trình đầy đủ →"
- **Proof needed:** None
- **CTA behavior:** Primary link to `/chuong-trinh-giam-can`. Secondary TƯ VẤN CHO TÔI button.
- **Builder note:** Simpler CTA section than homepage. No guarantee restatement needed here — focus is routing.

---

### Results / testimonials page — `/ket-qua`

- **Goal:** Act as the full proof hub for buyers doing final due diligence before booking
- **Intent:** Trust intent
- **Primary CTA:** TƯ VẤN CHO TÔI
- **SEO role:** Targets "Trần Thủy Tiên review," "chương trình Young Group có tốt không," proof and outcome queries. Review/AggregateRating schema conditional — only if explicit star ratings exist.
- **Notes:** All approved named testimonials live here. Page ends with service page link + consultation CTA. Build card for both photo and text-only variants.

#### Section order

1. Page header — brief context statement
2. Full testimonial grid — all approved named testimonials
3. Aggregate outcomes (client count + market reach when confirmed)
4. Guarantee restatement
5. CTA band → service page + consultation

#### Section logic

**Section: Page header**
- **Purpose:** Orient visitor — confirm they're in the right place for proof
- **Key message direction:** "Câu chuyện khách hàng — kết quả thực tế, tên thật, con số cụ thể."
- **Proof needed:** None — context only
- **CTA behavior:** None
- **Builder note:** Short. One heading + one subline. No hero photography needed.

**Section: Testimonial grid**
- **Purpose:** Full collection of approved named client outcomes
- **Key message direction:** Each card: name · location · kg/lbs lost · timeframe · quote. No vague claims — specificity only.
- **Proof needed:** All 6 confirmed testimonials (Wisconsin, California, Michigan, Texas, New York, USA) + any additional approved assets. Result chips required on every card.
- **CTA behavior:** None within the grid
- **Builder note:** Grid layout, warm bordered cards with result chips. Build photo-variant and text-only-variant. No stock photos ever. Filterable by market if client count justifies it later.

**Section: Aggregate outcomes**
- **Purpose:** Reinforce scale — "not just six stories"
- **Key message direction:** Total clients served (placeholder until confirmed) · markets served
- **Proof needed:** Confirmed client count or approved range — placeholder required
- **CTA behavior:** None
- **Builder note:** Stat module. Compact. Do not fabricate numbers.

**Section: Guarantee restatement**
- **Purpose:** Reassure final hesitants — trust → commitment
- **Key message direction:** Money-back guarantee verbatim
- **Proof needed:** Guarantee statement only
- **CTA behavior:** TƯ VẤN CHO TÔI immediately below
- **Builder note:** Same guarantee band component. Consistent across all pages.

**Section: CTA band**
- **Purpose:** Convert trust into action
- **Key message direction:** "Sẵn sàng bắt đầu? Đặt lịch tư vấn miễn phí."
- **Proof needed:** None
- **CTA behavior:** TƯ VẤN CHO TÔI — primary. "Xem chương trình →" — secondary link to `/chuong-trinh-giam-can`
- **Builder note:** Standard CTA band. Two actions — primary button + secondary text link.

---

### FAQ — `/cau-hoi-thuong-gap`

- **Goal:** Intercept problem-aware, comparison, process, and pricing queries before they exit without booking
- **Intent:** Problem/symptom + commercial investigation
- **Primary CTA:** TƯ VẤN CHO TÔI
- **SEO role:** Targets "tại sao giảm cân xong lại tăng lại," "chương trình này khác gì," "giá chương trình là bao nhiêu," comparison queries. FAQPage schema on all Q&As.
- **Notes:** Dead-end answers route to consultation. Contextual links to service page and about page throughout.

#### Section order

1. Page header
2. FAQ accordion — grouped by theme
3. Dead-end CTA band

#### Section logic

**Section: Page header**
- **Purpose:** Orient and reassure — this page answers the hard questions
- **Key message direction:** Brief intro. "Bạn có câu hỏi — chúng tôi có câu trả lời thật sự."
- **Proof needed:** None
- **CTA behavior:** None
- **Builder note:** Short header. No hero needed.

**Section: FAQ accordion — grouped by theme**
- **Purpose:** Answer all major question clusters before the consultation call
- **Key message direction:**
  - **Group 1 — Why programs fail / why this is different:** "Tôi đã thử nhiều chương trình nhưng không có kết quả — tại sao chương trình này lại khác?" · "Tại sao giảm cân xong lại tăng lại?" · "Tại sao ý chí không đủ?"
  - **Group 2 — Program process:** "Chương trình hoạt động từng bước như thế nào?" · "42 bữa ăn gồm những gì? Giao đến đâu?" · "Tôi có cần gặp mặt trực tiếp không?" · "Công thức giữ cân trọn đời là gì?"
  - **Group 3 — Pricing and guarantee:** "Giá chương trình là bao nhiêu?" · "Tại sao phải tư vấn trước khi biết giá?" · "Cam kết hoàn tiền hoạt động như thế nào?"
  - **Group 4 — Comparison:** "Chương trình này khác gì so với AIH hay các chương trình khác?" · "Tại sao không dùng thực phẩm bổ sung?" · "So với tự giảm cân tại nhà thì khác gì?"
  - **Group 5 — Trust and credentials:** "Trần Thủy Tiên có bằng cấp gì không?" · "Chương trình đã giúp bao nhiêu người?" · "Có bằng chứng thực tế không?"
- **Proof needed:** Specific, honest answers — link to `/ket-qua` for proof queries; link to `/chuong-trinh-giam-can` for process queries; link to `/tran-thuy-tien` for credentials queries
- **CTA behavior:** Each answer group ends with a contextual link to the relevant page. Never a dead end.
- **Builder note:** Accordion component per group. FAQPage schema on all questions. Do not reveal pricing — explain the consultation-first model with honest framing.

**Section: Dead-end CTA band**
- **Purpose:** Catch visitors whose question wasn't answered
- **Key message direction:** "Câu hỏi chưa được trả lời? Tư vấn trực tiếp với chúng tôi."
- **Proof needed:** None
- **CTA behavior:** TƯ VẤN CHO TÔI → `/tu-van`
- **Builder note:** Simple CTA band. Warm tone — not aggressive.

---

### Consultation / contact page — `/tu-van`

- **Goal:** Convert decision-ready visitors; set expectations for the consultation call
- **Intent:** Service intent (action)
- **Primary CTA:** Form submit — "Đặt lịch tư vấn"
- **SEO role:** Targets consultation intent. LocalBusiness schema + NAP required here.
- **Notes:** Form is primary. Zalo, hotline, email as alternative contact methods below the form. Confirmation message required with response timeline.

#### Section order

1. Page header — brief expectation-setting
2. Consultation booking form
3. Alternative contact methods
4. What to expect (short)

#### Section logic

**Section: Page header**
- **Purpose:** Reduce form abandonment by setting expectations before the form
- **Key message direction:** "Cuộc tư vấn miễn phí — không cam kết, không áp lực. Chúng tôi sẽ lắng nghe và tư vấn phù hợp với bạn."
- **Proof needed:** None
- **CTA behavior:** None — header only
- **Builder note:** Short. Two to three sentences maximum. Warm, not clinical.

**Section: Booking form**
- **Purpose:** Capture contact details and basic context for the specialist team
- **Key message direction:** Fields: name · contact method (Zalo / email / phone) · country · brief goal statement. Submit button: "Đặt lịch tư vấn"
- **Proof needed:** None
- **CTA behavior:** Form submit → confirmation message with response timeline
- **Builder note:** Simple form. Minimum required fields — do not over-ask. Confirmation message on submit: response within 24 hours. INP priority — keep form lightweight, no heavy JS.

**Section: Alternative contact methods**
- **Purpose:** Provide direct contact for visitors who won't complete a form
- **Key message direction:** Zalo 0765 480 529 · Hotline (609) 318-3681 · coachthuytien@gmail.com
- **Proof needed:** None
- **CTA behavior:** Tap-to-contact on mobile for Zalo and phone
- **Builder note:** Below the form. Clean list. NAP must be character-for-character consistent with footer and Google Business Profile.

**Section: What to expect**
- **Purpose:** Remove the last anxiety about booking — what happens after I submit?
- **Key message direction:** Brief numbered: 1. Submit → 2. Specialist contacts within 24 hrs → 3. Free consultation call to understand your situation → 4. No pressure, no immediate commitment
- **Proof needed:** None
- **CTA behavior:** None — reassurance section
- **Builder note:** Short. 3–4 steps. Outline icons per visual guide.

---

## 5. Trust and proof system

- **Primary trust signal:** Founder identity — Trần Thủy Tiên's face, name, and voice above the fold on every entry point
- **Proof types to use:** Named testimonials (name · location · kg/lbs · timeframe · quote) · Result chips on every testimonial card · Four "không" pillars as structural trust banner · Money-back guarantee stated verbatim · Founder book ("Béo ơi vĩnh biệt") as authority signal · Client count aggregate (confirmed figure only — placeholder until confirmed) · Founder quote slab (full-bleed, editorial scale, founder's voice + signature)
- **Proof types to avoid:** Stock photos for testimonials · Vague superlatives ("thousands of clients") without a confirmed number · Before/after gym-culture imagery · Star ratings or review badges unless explicit ratings exist · Credentials until confirmed at client meeting
- **Proof that appears early:** Founder portrait + name in hero · Four-pillar trust banner in first 2 sections · 3–4 testimonials with result chips within first 2 screens from hero
- **Proof that appears later:** Founder quote slab · Book reference · Guarantee band · Full testimonials page
- **Site-wide proof modules:** Four-pillar trust banner (homepage, service page) · Guarantee band (homepage, service page, results page) · Named testimonial cards (homepage, service page, results page) · Founder presence signal (portrait or name) on every page
- **Proof blockers / missing assets:**
  - Credentials — unconfirmed; credential strip deactivated until client meeting
  - Client count — unconfirmed; placeholder required in hero subline and outcomes section
  - Client photos — approvals pending; build both photo-variant and text-only-variant for every testimonial card
  - Book availability / ISBN — unconfirmed; placeholder component required on about page

---

## 6. CTA system

- **Primary CTA label:** TƯ VẤN CHO TÔI (established, tested — do not change)
- **Secondary CTA, if any:** Outline variant — "Xem chương trình →" (text link or outline button for low-stakes routing sections only)
- **CTA destination:** Primary → `/tu-van` · Service page link → `/chuong-trinh-giam-can`
- **CTA placement rules:** Primary CTA appears in: hero · mid-page proof section (after testimonials) · guarantee band · footer. Minimum 3 placements per page. Maximum one CTA per viewport.
- **CTA repetition rules:** Same label (TƯ VẤN CHO TÔI) every time — no variation in label text. Outline secondary variant used only when the section is not a conversion beat (e.g., after methodology section on about page).
- **CTA anti-patterns:** No countdown timers near CTAs · No "giảm ngay trong 2 ngày" or perpetual discount framing · No competing CTAs in the same viewport · No CTA buried more than one click from the consultation page · No dashboard-widget-style urgency mechanics
- **Booking/contact handling:** Consultation booking lives on a dedicated page `/tu-van` — not a modal, not a footer form only. Alternative contact methods (Zalo, hotline, email) appear below the form on the consultation page and in the footer on all pages.

---

## 7. SEO page rules

- **Homepage target:** "giảm cân cá nhân hóa" · "chương trình giảm cân 1-1" · "giảm cân từ gốc rễ" · branded terms (Trần Thủy Tiên, Young Group giảm cân). Do not compete for broad "giảm cân" or English "weight loss" terms.
- **Required search-driven pages:** All 6 pages required at launch (see page architecture). No page is optional.
- **Which topics stay on-page despite SEO:** Guarantee (section on homepage + service page) · Process/how-it-works (section on service page) · Founder quote (section on homepage + about page)
- **Internal linking priorities:**
  - Homepage → `/chuong-trinh-giam-can`: from offer section and four-pillar section
  - Homepage → `/ket-qua`: from testimonial proof band ("Xem thêm")
  - Homepage → `/tran-thuy-tien`: from founder quote slab
  - Service page → `/cau-hoi-thuong-gap`: from guarantee and FAQ block
  - Service page → `/ket-qua`: from testimonial block
  - About page → `/chuong-trinh-giam-can`: from methodology section
  - Results page → `/chuong-trinh-giam-can`: page ends with service page link + consultation CTA
  - FAQ → service page + about page: contextual links per answer cluster
  - FAQ → `/tu-van`: dead-end CTA band
- **Schema requirements by page:**
  - Homepage: LocalBusiness (HealthAndBeautyBusiness) · ProfessionalService
  - Service page: FAQPage (on FAQ block)
  - About page: Person · ProfessionalService · Book (conditional — activate when ISBN confirmed)
  - Results page: AggregateRating / Review (conditional — only if explicit star ratings exist)
  - FAQ page: FAQPage (all questions)
  - Consultation page: LocalBusiness · NAP
  - All inner pages: BreadcrumbList
- **Technical SEO must-haves:**
  - Server-rendered or statically generated HTML for all primary pages — no JS-dependent rendering for above-fold content
  - ASCII URL slugs — transliterated Vietnamese, no diacritics in path
  - Unique title tag + meta description per page. Format: `[Primary keyword] — Trần Thủy Tiên | Young Group`
  - Self-referencing canonicals on all pages
  - XML sitemap submitted to Google Search Console — exclude booking confirmation page
  - One H1 per page containing the primary keyword theme for that page
  - Founder portrait LCP element: WebP · eager-load · `srcset` · `<link rel="preload">`
  - NAP: USA and Vietnam addresses character-for-character consistent across footer, contact page, and Google Business Profile
- **Multilingual rule:** Primary site is Vietnamese. If English variants are added later — human-translated only, `hreflang="vi"` / `hreflang="en"`. Do not launch English pages at launch.

---

## 8. Builder constraints

- **Visual constraints to preserve:** Warm cream/ivory background only — no pure white, no cold whites · Warm gold anchor for CTAs, decorative marks, section dividers · Deep warm charcoal for headings and text — not pure black · Soft blush/dusty rose for proof section backgrounds and secondary card fills · No clinical blues, sterile grids, or SaaS defaults anywhere
- **Structural rules to preserve:** Founder portrait above the fold on homepage — never below · One CTA per viewport — never competing CTAs in the same screen · Testimonials visible within first 2 screens from hero on homepage · Calligraphic script accent maximum twice per section — emotional phrases only · Founder quote slab must be near-full-bleed, not a small quote card
- **Mobile priorities:** Founder portrait above fold on mobile without cropping · Thumb-accessible CTA button on scroll — consider sticky CTA for mobile · Testimonial cards render full content at mobile width without truncation · Zalo and phone numbers tap-to-contact · No dead countdown blocks anywhere
- **Sections/modules that must not be dropped:** Founder hero block · Four-pillar trust banner · Testimonial card grid with result chips · Founder quote slab · Guarantee band · Consultation CTA band · Footer with full NAP + contact methods
- **Things the builder must not improvise:** CTA label — always "TƯ VẤN CHO TÔI" · Guarantee language — use verbatim "CAM KẾT KHÔNG HIỆU QUẢ SẼ HOÀN TIỀN" · Credential strip — must be deactivated by default, not removed · Countdown timers — removed permanently · Testimonial attribution — use confirmed names, locations, and figures only · NAP details — exact character-for-character match required
- **Things that can stay flexible:** Section background color variation within the warm cream/blush/charcoal family · Icon set selection (within thin warm-toned outline style) · Exact font pairing (humanist sans + calligraphic script — specific typefaces to be selected by builder within locked direction) · Card border radius within the "soft/rounded" constraint · Animation timing within "restrained reveal/hover" constraint

---

## 9. Open blockers

- **Blocker:** Formal credentials unconfirmed
  **Affects:** About page · Credential strip module · E-E-A-T for health content SEO
  **Temporary fallback:** Credential strip deactivated. Trust builds via testimonials + founder story + book reference + guarantee. Placeholder component built and ready to activate.

- **Blocker:** Client count unconfirmed ("thousands" claimed — no specific number)
  **Affects:** Homepage hero subline · About page outcomes section · Aggregate proof module
  **Temporary fallback:** Placeholder text: "[số lượng] khách hàng tại Mỹ · Úc · Việt Nam · Canada" — populate on confirmation.

- **Blocker:** Testimonial photo approvals pending
  **Affects:** All testimonial cards across homepage, service page, results page
  **Temporary fallback:** Build all testimonial cards in text-only variant by default. Photo variant drops in when approvals confirmed. Both variants must be designed.

- **Blocker:** Book ("Béo ơi vĩnh biệt") availability unconfirmed — no ISBN or purchase URL
  **Affects:** About page book section · Book schema · E-E-A-T authority signal
  **Temporary fallback:** Book referenced as authority signal without purchase link. Placeholder component activatable when ISBN and purchase destination confirmed.

- **Blocker:** tranthuytien.store brand conflict unresolved
  **Affects:** Brand coherence · SEO signals for "no exercise required" positioning · Google's understanding of what the brand does
  **Temporary fallback:** Builder cannot resolve this — requires client decision. Flag before launch. Recommend: redirect .store to .net, or noindex .store, or fully rebrand the .store outside the Trần Thủy Tiên identity.

- **Blocker:** Google Business Profile status and NAP match unconfirmed
  **Affects:** LocalBusiness schema consistency · Local SEO signals
  **Temporary fallback:** Use confirmed physical addresses in footer and contact page. Client to verify GBP NAP matches site addresses before launch.

- **Blocker:** Food combo shipping destinations and timelines unconfirmed
  **Affects:** Service page inclusions section · FAQ shipping answer
  **Temporary fallback:** State "giao hàng quốc tế — liên hệ tư vấn để biết thêm chi tiết vận chuyển đến khu vực của bạn." Update when shipping specs confirmed.

---

## 10. Final builder payload

- **Required pages:** `/` · `/chuong-trinh-giam-can` · `/tran-thuy-tien` · `/ket-qua` · `/cau-hoi-thuong-gap` · `/tu-van`
- **Topics kept on-page:** Guarantee (homepage + service page sections) · How-it-works process (service page section) · Founder quote (homepage founder quote slab + about page) · Contact (footer all pages + consultation page)
- **Homepage section order:** Hero → Problem reframe → Four-pillar trust banner → Offer overview → Testimonial proof band → Founder quote slab → Guarantee + CTA band → Footer
- **Critical trust modules:** Founder portrait above fold · Four-pillar trust banner · Named testimonial cards with result chips · Founder quote slab (near-full-bleed) · Guarantee band verbatim · Credential strip (built, deactivated by default)
- **Critical CTA placements:** Hero (primary) · After testimonials (primary) · Guarantee band (primary) · Footer (primary) · After methodology on about page (secondary routing link)
- **Critical SEO requirements:** Server-rendered HTML · ASCII slugs · FAQPage schema on FAQ page + service page FAQ block · LocalBusiness + ProfessionalService schema on homepage + contact page · Person schema on about page · Unique H1 per page · NAP character-for-character consistent across footer, contact page, GBP · Self-referencing canonicals · LCP preload on founder portrait
- **Known missing assets:** Confirmed credentials · Confirmed client count · Approved client photos · Book ISBN + purchase URL · GBP NAP confirmation · Food combo shipping specs · Founding year
- **Build priority:** 1. Homepage rebuild · 2. Service page · 3. About/founder page · 4. Results page · 5. FAQ page · 6. Consultation page · Pre-launch: resolve .store conflict
- **Do not do:** Add countdown timers anywhere · Use perpetual discount framing · Place competing CTAs in the same viewport · Use stock photos for testimonials · Use pure white or cold blues anywhere · Invent credentials, client counts, or testimonial details · Launch English-language pages now · Add a blog before core pages are indexed
