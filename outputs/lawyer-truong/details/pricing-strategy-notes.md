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

### Correction — the site is already bilingual

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

- **Brand OS doc set is in BOTH packages.** It runs before design — it is how each
  site gets tailored to the target customer rather than templated. Presented once as a
  shared band above the two cards, not duplicated inside each.
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
