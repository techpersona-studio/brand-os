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

**Vietnamese check needed before sending:** the form's subject field is labelled
**"Chủ thể"**. For a message topic that reads wrong to me — "Chủ đề" or "Tiêu đề"
looks correct, and "Chủ thể" means subject in the legal or grammatical sense. I have
deliberately kept this out of the client document because a language claim aimed at a
native speaker is not worth being wrong about. Confirm, then decide whether to raise
it on the call as evidence the Vietnamese needs a proper pass.

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
condescending, it assumes fees we do not know, and at $1,200 to $2,000 price is not
the real objection. The objections are "will this be a hassle" and "is this person any
good", and the findings answer both faster than an ROI argument does.

---

## Pricing structure

Interpretation of the brief: two tiers, second at ~$2k, both shown at 50% off list.

| | Package A — Foundation | Package B — Bilingual Practice System |
| --- | --- | --- |
| List | $2,400 | $4,000 |
| Offered | **$1,200** | **$2,000** |
| Build | 3 weeks | 3–4 weeks |
| Scope (est.) | ~6 core pages × 2 languages | + ~6 practice-area pages × 2 languages |
| Support | 30 days | 60 days + 30-day review |
| Revisions | 1 round | 2 rounds |

**Ongoing (own section at the foot of the proposal):** Web Care Plan $180/mo —
hosting, backups, updates, bilingual content changes, one new page per month,
monthly performance snapshot, priority response. Month to month. First month free
with B.

**Separate service:** after-hours bilingual call handling. Explicitly *not* priced into
either package and flagged as not a website problem. **Still needs a number — decide
before sending.**

### Monthly SEO retainer — deliberately held back

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
setup work at the $1,200 tier, so watch it. If margin gets tight this is the item to
pull out as a paid add-on, not the FAQ.

The FAQ's AI-visibility angle (getting named when someone asks ChatGPT or Google's
AI for a Vietnamese lawyer in Boston) is the freshest thing in the proposal. Lead
with it on the call.

### News / CMS is in both packages, not an upsell

He already has News and Video sections. Shipping a rebuild without a way to post
would take away a capability he has today, which is a defect, not an upsell
opportunity. So the editor sits in Package A and B inherits it.

**Open cost question:** migration volume. Count his existing posts before quoting.
A handful is nothing; fifty bilingual posts is real work and the $1,200 does not
carry it. If the archive is large, either cap the migration ("most recent N posts,
the rest on request") or move the overflow to the Care Plan. Decide before sending.

Ongoing posting is already covered by the Care Plan at one new page a month, so
neither package needs a content-production line.

### Margin guardrails — B at $2,000 is only viable if scope holds

- Page list fixed at the Blueprint step and not reopened
- Fixed revision rounds (2), further rounds quoted separately
- Practice-area pages are template instances with distinct copy, not bespoke layouts
- Client effort is deliberately minimal: a short intake form, no interview. Research is
  ours. His only other task is reviewing the Vietnamese copy before launch.
- Process shown to the client as **five steps**, not six — blueprint and build are
  combined. He does not need the internal pipeline detail.
- Vietnamese produced via `util-vi-voice-adapter` → `util-vi-translator`, attorney reviews
- Intake automation limited to form → auto-reply → SMS → log. No case management integration
- No custom development beyond the listed scope

Without these, B loses money. They are in the proposal's terms section for that reason.

---

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
