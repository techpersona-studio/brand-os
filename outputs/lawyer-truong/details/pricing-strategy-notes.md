# Truong Law — internal pricing & positioning notes

**Prospect:** Law Offices of Vy H. Truong, P.C. — 985 Dorchester Ave, Dorchester MA 02125
**Site:** lawyertruong.com · **Phone:** 617-265-1767 · **Hours:** M–F 9–6
**Date:** 2026-08-26 · **Prepared by:** TechPersona Studio / Thao Phuong

---

## Research constraint

The live site cannot be loaded from this session. `lawyertruong.com` and
`www.lawyertruong.com` both return a 403 at the proxy CONNECT. This is the
environment's network policy, not a site-specific denial — the environment runs at
**Trusted** network access, which allowlists package registries and GitHub only.
Every general website is blocked, including `example.com` and Wikipedia. Headless
Chromium fails identically (`ERR_TUNNEL_CONNECTION_FAILED`), so no crawler or
browser tool gets around it.

**Fix:** set the environment's Network access to **Custom** (add `lawyertruong.com`,
`*.lawyertruong.com`, plus `*.frame.claudeusercontent.com` for artifacts) or **Full**,
at claude.ai environment settings, then start a **new** session — the policy is fixed
at session start. Brand OS steps `01a` and `04a` cannot run against any client site
until this changes.

**Evidence used instead:** a screenshot of the live Vietnamese homepage supplied by
the client team, Google's index of the site (title tags, URL slugs, page inventory),
and Massachusetts legal directory listings.

### Correction 2 — he already has a contact form

The Liên hệ page carries a working form: full name, phone, address, email, subject,
message, plus a send button. The finding is not "no form" but "nothing on the
homepage points to it", and the form itself asks for six fields including a home
address before any conversation has happened. Retitled accordingly, and a separate
moderate finding added on form friction.

**Vietnamese form label: confirmed but deliberately left out of the document.** The
form field labelled **"Chủ thể"** reads as the client themselves rather than the topic
of the message; it should be **"Chủ đề"**. Confirmed by Thao, then pulled at her call.

Keep it for the call instead. Correcting a native speaker's own language in writing,
in a first proposal, costs more than the point is worth. Said out loud between two
Vietnamese speakers it lands as care rather than correction.

### Correction 1 — the site is already bilingual

An earlier draft of this analysis claimed there was no Vietnamese version. That was
wrong. The homepage carries a Tiếng Anh / Tiếng Việt toggle in the navigation and a
full Vietnamese edition. The real gap is that the bilingual content is almost
certainly not set up to *rank* — indexable per-language URLs, hreflang pairing and
Vietnamese keyword targeting. Confirm in the technical audit before asserting it to
the client.

**Still unverified — needs site access:** page speed, mobile rendering, form delivery,
analytics, accessibility, hreflang implementation, English-side page content.

---

## PRE-SEND CHECKS — three claims not fully verified

Technical and structural review passed clean. These three findings are **inferred, not
confirmed**, because the site was never reachable from the session. Each takes about
two minutes to check, and each is the kind of thing a lawyer will check.

1. **"Old copies of pages are still live."** Inferred purely from the `-1` / `-2`
   slugs on `/auto-accident-1` and `/real-estate-2`. If those are the only versions
   and no `/auto-accident` or `/real-estate` exists, the claim is wrong. Load both
   unsuffixed URLs. **Highest risk: easily disproved in one click.**
2. **Vietnamese: CONFIRMED.** Both languages share one URL, so Google only ever
   indexes one of them. The finding now says exactly that.
3. **Reviews: CONFIRMED and better than assumed.** **4.4 stars from 29 Google
   reviews.** The finding now leads with that number, and Package B sells showing
   the 4.4 rather than a vague "your reviews". This is one of the strongest lines in
   the document: he earned it and is wasting it. The lone Avvo 1.0 is noise against
   29 at 4.4 and is not worth raising.

**Structural note, not a defect:** the reviews finding is the one item Package A does
not answer, since displaying reviews sits in B. That is deliberate and gives B a job,
but expect him to notice.

## Firm profile

| Field | Value |
| --- | --- |
| Principal | Vy H. Truong |
| Years in practice | 22+ |
| Background | Former Assistant District Attorney, Suffolk County — first Vietnamese-born appointee at the time |
| Press | WCVB Channel 5 *Chronicle*; Boston Globe |
| Practice areas | Criminal defense, immigration, real estate conveyancing, family, personal injury, business, civil litigation, bankruptcy |
| Languages | English + Vietnamese — full bilingual site with a nav toggle (confirmed from homepage) |
| Market | Boston metro; Vietnamese community concentrated in Dorchester / Fields Corner |
| Review footprint | FB 4 reviews unrated · Lawyers.com none · BBB A+ unaccredited · Yelp few positive · Avvo one negative (2017) |

---

## Indexed page inventory and what it reveals

| URL | Indexed title | Read |
| --- | --- | --- |
| `/` | Law Offices of Vy H.Truong | Missing space after initial |
| `/service` | Service | Generic, no keyword, no location |
| `/attorney-h-truong` | Chronicle | Title is unrelated to page content |
| `/biographys` | Biographys | Misspelling in a live URL and title |
| `/criminal-law` | Lawyertruong | Highest-value practice page, zero keyword value |
| `/auto-accident-1` | Traffic accident | `-1` suffix = builder duplicate |
| `/real-estate-2` | Real Estate | `-2` suffix = builder duplicate |
| `/contact` | Contact | Fine |

Slug patterns (`-1`, `-2`), the `biographys` typo, and mismatched titles are
consistent with an aging drag-and-drop site builder where pages were duplicated
and the originals never removed.

---

## Positioning thesis

The differentiator is **not** "22 years of experience" — every established firm
claims that. It is the intersection nobody else in Boston occupies:

> Vietnamese-language trial practice, run by a former Suffolk County prosecutor,
> with mainstream press credentials.

Two of those three are currently invisible online: the Vietnamese audience cannot
read the site, and the press is on an interior page titled "Chronicle".

**Commercial anchor:** any single retained matter exceeds the cost of the build. Use
this **on the call if price comes up**, not in the document. It was cut from the
proposal: explaining his own unit economics to a 22-year attorney reads as
condescending, it assumes fees we do not know, and at $1,250 to $2,000 price is not
the real objection. The objections are "will this be a hassle" and "is this person any
good", and the findings answer both faster than an ROI argument does.

---

## RATE CARD ALIGNMENT — resolved

Source: `services-and-pricing-rate-card.html` in Drive (Draft v3, 24 Aug 2026).
Care tiers and the after-hours price in the proposal now come from it. **The package
prices do not.**

The rate card says:

- **Tiering is by page count, no overlap:** 1 page Launch · 2–5 Growth · **6+ Custom**.
- **Custom + Systems: $2,500 standard, $1,250 founding.** "$2,500 is the floor, not a
  formula." Custom already includes multi-language, owner-editable content, custom
  forms and integrations.
- It already names this client: *"Founding client · claimed — 50% off any service,
  once — taken by Vy H. Truong."* Logged as **Custom, 14 pages, bilingual, scoped,
  founding 50% off**, and it is the last founding slot.

**Resolved:** Package A moved from $1,200 to **$1,250, list $2,500**, which is exactly
the Custom + Systems founding price. A six-page bilingual build is Custom, not Growth,
so the tier and the number now agree with the rate card.

Package B stays at **$2,000, list $4,000**. Custom is "a floor, not a formula", and B
is a larger scoped Custom job, so pricing above the floor is consistent.

Package A and B are now $750 apart rather than $800. The gap still reads as good value
for roughly double the scope, so no change needed there.

**Lead Catcher: settled.** It is Package B's "form that answers for you", and it is
included, priced in. The bullet now describes it the way the rate card does (instant
reply, email and text notification, spam filtered, monthly summary) and states
**"On its own this is $899, and it is already in the price above"** so the value is
visible rather than assumed.

The rate card's **$149/mo is deliberately not carried across.** The Google Sheets path
genuinely costs nothing to run, so no monthly is owed there; the n8n path is where a
monthly would live and is described as "a small monthly cost" without a number.
Naming $149 would put his recurring stack at $79 + $129 + $485 + $149 = **$842/mo**,
which turns the monthly column into the objection. Quote n8n separately later if he
wants it.

**Never Miss a Call** now shows $499 struck through beside the $249 founding setup,
matching how the packages display their discount.

## Pricing structure

Interpretation of the brief: two tiers, second at ~$2k, both shown at 50% off list.

| | Package A — Foundation | Package B — Growth |
| --- | --- | --- |
| List | $2,500 | $4,000 |
| Offered | **$1,250** | **$2,000** |
| Build | 4 weeks | 4–5 weeks |
| Scope (est.) | ~6 core pages × 2 languages | + ~6 practice-area pages × 2 languages |
| Support | 30 days | 60 days + 30-day review |
| Revisions | 1 round | 2 rounds |

**Ongoing:** the three real tiers from the rate card, 3-month minimum —
Technical Care $39/mo · Website Care $129/mo · Growth Care $269/mo · no plan $125/hr.
Unused time does not roll over; plan time works out to $90/hr against $125 on demand.
One month of Website Care with Package A, two months with Package B.

**After-hours calls** is the rate card's *Never Miss a Call*: $499 setup + $79/mo,
founding setup $249. Carrier costs are the client's, $10–25/mo, never marked up.

**Review requests** has no rate-card equivalent; closest is Lead Catcher's follow-up
sequence. Left as "quoted with the intake work".

### Monthly SEO retainer — NOW IN, as an add-on

Reversed at the client's direction. Sits in the after-launch section as
**Ongoing SEO, $485/mo for the first year, then $969, 3-month minimum** — the rate
card's Service 02 Growth tier at the founding rate, time-boxed to 12 months.

Two things to check before sending:

1. **Resolved:** the founding rate runs for the **first year**, then reverts to $969.
   That settles the rate card's "50% off any service, once" ambiguity for this client
   by bounding it in time rather than by service. Worth writing the same rule into the
   rate card so the next founding client is not argued case by case.
2. The card opens with *"the setup is already in your build, so this is not the same
   thing twice"* — that is the rate card's own instruction, since Package A and B both
   ship the SEO and AI-search setup. Do not drop that line.

The earlier reasoning for holding it back is below and still worth knowing:

### Why it was held back originally

Not in this proposal, and it should stay out:

- The document already asks for one decision plus two optional yeses. A fifth line
  item dilutes the close.
- Package B already sells the SEO *foundation*. Offering a retainer beside it invites
  "wait, isn't SEO already in the price?"
- Sold now it is a promise; sold at the **30-day performance review** it is a number
  against a baseline. That review is the pitch moment.
- The Care Plan is already the wedge — one new page a month plus a performance
  snapshot is entry-level SEO under another name. Let it run, then upgrade.

### Why the gap is only $800

Deliberate. A sits close enough to B that B reads as obviously better value —
roughly triple the surface area for 67% more money. A exists to make B the
default choice, and to give a price-sensitive prospect somewhere to land rather
than walking.

### Own the AI use, do not hide it

The proposal says plainly that AI is used, and frames it as the reason the prices
are what they are. Then it draws the line: AI does not decide who he is speaking to,
what each page has to prove, or how it reads in Vietnamese. "Four weeks is that
thinking. The building is the fast part."

This does three jobs at once: it justifies a four-week timeline against "can't AI do
this in a day", it explains the low price without devaluing the work, and it
pre-empts the question he will otherwise ask on the call. Do not walk this back into
an anti-AI pitch; the studio runs on Brand OS and the honesty is the advantage.

### Discount framing

Do **not** frame as a limited-time sale — that invites haggling and anchors future
clients low. Frame as a **foundation-client rate**: the studio is building its
Boston legal-vertical case study, and the half rate buys a testimonial plus
permission to show the work. Honest, verifiable, and it protects list pricing.

### Voice and copy

- **First person singular.** Zero instances of "we", "our" or "us". Solo operator,
  and the proposal reads that way.
- **No em-dashes.** Label bullets use a bold label plus colon; prose rewritten rather
  than character-swapped. En-dashes kept in numeric ranges (3–4 weeks).
- **Cut 42%**, from 2,177 to ~1,270 words. Owner skims, does not read: findings are a
  headline, one or two short sentences, and a one-line cost.

### Structural decisions (client-directed)

- **Brand OS doc set is in BOTH packages,** presented as a **Discovery phase** band
  above the two cards. Framed by what it does, not by what it produces: understand the
  business goals and direction, understand the customers, then design each page to do
  a job rather than list services. The five document names are **not** listed: he does not care what the
  process outputs are called. The footer line sells the one deliverable with life
  beyond the project instead, the brand guide, framed as something he can hand to a
  printer, a designer or an AI tool so his flyers, ads and posts match the site.
- **After-hours phone handling is NOT a website finding.** Pulled out of the audit and
  listed as a separately quoted service alongside the site. *Still needs a price — decide
  before sending.*
- **Review requests moved OUT of Package B** and into the add-ons, same logic as the
  phone automation: it runs after a matter closes, outside the site, so it is not
  website work. Displaying reviews on the site stays in B. Audit finding 8 still
  raises the review problem, which now makes the add-on the obvious next yes.
- **Intake engine folded into the case-intake line**, not a separate bullet: Google
  Sheets (free, no ongoing cost) or n8n (small maintenance fee, correct base if they
  expand automation later). Chosen with the client before build.
- **Add-ons now number two:** after-hours calls and review requests. Both priced
  separately. **Neither has a number yet — decide before sending.**
- **Page counts are estimates, not commitments.** Locked at the Website Blueprint step.
  Package A ≈ 6 core pages × 2 languages; Package B adds ≈ 6 practice-area pages × 2.
  Five pages was rejected — the existing nav already carries six items
  (Trang Chủ · Dịch Vụ · Tiểu Sử · Tin Tức · Video · Liên Hệ), so a five-page rebuild
  would have silently dropped News and Video.

### What carries the $800 gap

Package B now stands on three things a client can repeat back:
1. **A page per service**, both languages, each written for that service's searches.
2. **A form that answers**, instant bilingual reply plus a notification to him.
3. **A bilingual FAQ** built from what Boston clients actually search, which is how
   people find a lawyer before they know they want one, and how the firm gets named
   in ChatGPT and Google AI answers. That second point is the freshest angle in the
   whole proposal; lead with it on the call.
Plus testimonials brought across, a second revision round, and the first month of
Care.

**AI posting moved to Package A**, nested under the news bullet, because that is
where it belongs logically: it is a way to publish, alongside WordPress. It is real
setup work at the $1,250 tier, so watch it. If margin gets tight this is the item to
pull out as a paid add-on, not the FAQ.

The FAQ's AI-visibility angle (getting named when someone asks ChatGPT or Google's
AI for a Vietnamese lawyer in Boston) is the freshest thing in the proposal. Lead
with it on the call.

### The writing line: what is yours, what is his

Stated in the proposal so it cannot be argued later:

- **Included:** copy for every page built at launch, both languages. That covers the
  six core pages, and in Package B the six service pages and the FAQ.
- **Not included:** blog posts he publishes after launch. The build gives him two ways
  to publish (WordPress, or describing a post to Claude/ChatGPT); it does not commit
  us to writing them.

**Do not add a content or SEO writing line to this proposal.** Ongoing writing help
already has a home in the Care Plan hours (1/mo on Website, 2/mo on Growth), and the
monthly SEO retainer stays held back for the 30-day review, per the reasoning above.
Selling four things at once loses the close.

### News / CMS is in both packages, not an upsell

He already has News and Video sections. Shipping a rebuild without a way to post
would take away a capability he has today, which is a defect, not an upsell
opportunity. So the editor sits in Package A and B inherits it.

**Resolved: four items, no cap needed.** The News page holds a 2003 Boston Globe
clipping, a 2012 Pell Grants event, a 2003 WCVB *Chronicle* segment, and a 2025 real
estate item. Migration is trivial. It is a press archive, not a blog, and he does not
intend to blog, so the bullet reads "News and press you can add to yourself."

**The find worth acting on:** the Globe piece is a *scan of a newspaper page* headlined
"Journey to freedom from Vietnam shaped new prosecutor's life". His single best story
is currently an image. Unreadable on a phone, invisible to Google and to AI answers.
Typing it out as real text is close to free and is probably the highest-value single
change in the whole project. It is now an audit finding and a Package A line.

Ongoing posting is already covered by the Care Plan at one new page a month, so
neither package needs a content-production line.

### Margin guardrails — B at $2,000 is only viable if scope holds

- Page list fixed at the Blueprint step and not reopened
- **No revision-round cap.** Removed at the client's direction: the support window
  (30 days on A, 60 on B) is the guardrail instead. Worth knowing the exposure —
  "support" is undefined in both the proposal and the rate card, so nothing on paper
  stops a redesign request on day 55. If it bites, define support on the next
  proposal as bug fixes and small copy changes, with anything larger quoted.
- Practice-area pages are template instances with distinct copy, not bespoke layouts
- Client effort is deliberately minimal: a short intake form, no interview. Research is
  ours. His only other task is reviewing the Vietnamese copy before launch.
- **The step-by-step process section is gone entirely.** He does not need the pipeline
  explained; the Discovery band covers the principle and the Terms cover his effort.
  Keep the five steps for internal planning only, and walk them verbally if he asks.
- Vietnamese produced via `util-vi-voice-adapter` → `util-vi-translator`, attorney reviews
- Intake automation limited to form → auto-reply → SMS → log. No case management integration
- No custom development beyond the listed scope

Without these, B loses money. They are in the proposal's terms section for that reason.

---

### Package names: Foundation and Growth

"Bilingual Practice System" was dropped because it claimed a difference that does not
exist. Package A is bilingual too, and he would have spotted that in a second.

**Growth** matches the naming already running through the rate card (Growth Website,
Growth Care, Growth SEO tier), so the two packages now pair as Foundation and Growth
and the word carries the same meaning everywhere the studio uses it.

### Audit is grouped, not ranked

Findings are presented in three named groups rather than a severity list:
**Search optimization (5), Design (3), Conversion (4)**, each point one sentence.
Severity chips dropped, count per group shown instead so the concentration reads at
a glance. Strength kept as a single band underneath.

**Every design point states a customer cost, not a craft observation.** He does not
care about colour theory. "Three colour stories above the fold" became "the colours do
not match, so a visitor reads the firm as smaller and newer than it is." Same shape
for the rest: what is there, then what it costs in clients. Hold this line for any
future edits to the audit.

Testimonials are now called out explicitly: he has strong reviews on Yelp and Google
and none of them appear on the site. Package B's review line was broadened to bring
the existing ones across, not just display new ones.

## Highest-leverage recommendations, ranked

1. **A call-to-action** — there is currently no consultation button in the nav or hero;
   this is the cheapest change with the largest immediate effect
2. **Bilingual SEO architecture** — the moat is already built and is not being indexed;
   hreflang, per-language URLs, Vietnamese keyword targeting
3. **Title tags and canonical domain** — cheap fix, immediate search visibility gain
4. **Press as visual proof** — Globe and Chronicle are currently an inline text link in
   the fourth hero paragraph
5. **Google review engine** — dominant local ranking and conversion factor, unaddressed
6. **After-hours intake** — criminal, immigration and PI leads arrive outside office hours

---

## Deliverable produced

`outputs/lawyer-truong/deliverable/truong-law-website-proposal.html` — client-ready
outside-in audit plus both packages, in the Brand OS house style (paper/pine/terra,
Fraunces + Hanken Grotesk). Doubles as the studio work sample for the pitch.
