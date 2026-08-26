# Truong Law — internal pricing & positioning notes

**Prospect:** Law Offices of Vy H. Truong, P.C. — 985 Dorchester Ave, Dorchester MA 02125
**Site:** lawyertruong.com · **Phone:** 617-265-1767 · **Hours:** M–F 9–6
**Date:** 2026-08-26 · **Prepared by:** TechPersona Studio / Thao Phuong

---

## Research constraint

The live site could **not** be loaded from the Brand OS session — `lawyertruong.com`
and `www.lawyertruong.com` are both blocked by this environment's network egress
policy. Every finding below is derived from Google's index of the site (title tags,
live URL slugs, indexed page set) and from Massachusetts legal directory listings.

**Verified from the index:** title tags, URL structure, page inventory, both hostnames
indexed, firm name rendering, review footprint across platforms.

**Not yet verified — requires site access:** page speed, mobile rendering, form
delivery and destination, analytics/tracking, accessibility, actual design quality,
whether a Vietnamese version exists but is unindexed.

To run the full Brand OS pipeline against this client, the domain must be added to
the environment's allowed egress hosts, or the pipeline must be run locally.

---

## Firm profile

| Field | Value |
| --- | --- |
| Principal | Vy H. Truong |
| Years in practice | 22+ |
| Background | Former Assistant District Attorney, Suffolk County — first Vietnamese-born appointee at the time |
| Press | WCVB Channel 5 *Chronicle*; Boston Globe |
| Practice areas | Criminal defense, immigration, real estate conveyancing, family, personal injury, business, civil litigation, bankruptcy |
| Languages | English, Vietnamese |
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

**Commercial anchor for the pitch:** any single retained matter in any of the firm's
practice areas exceeds the cost of the entire build. This is the argument that makes
a $2,000 project trivially justifiable and should lead the conversation.

---

## Pricing structure

Interpretation of the brief: two tiers, second at ~$2k, both shown at 50% off list.

| | Package A — Foundation | Package B — Bilingual Practice System |
| --- | --- | --- |
| List | $2,400 | $4,000 |
| Offered | **$1,200** | **$2,000** |
| Build | 2 weeks | 3–4 weeks |
| Support | 30 days | 60 days + 30-day review |
| Revisions | 1 round | 2 rounds |

**Add-on:** Care Plan $180/mo — hosting, backups, updates, one content page per
month, monthly performance snapshot. Month to month. First month free with B.

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

### Margin guardrails — B at $2,000 is only viable if scope holds

- Fixed page count (12 pages = 6 practice areas × 2 languages), stated in writing
- Fixed revision rounds (2), further rounds quoted separately
- Client supplies content and photography; copy adapted from existing site + one interview
- Vietnamese produced via `util-vi-voice-adapter` → `util-vi-translator`, attorney reviews
- Intake automation limited to form → auto-reply → SMS → log. No case management integration
- No custom development beyond the listed scope

Without these, B loses money. They are in the proposal's terms section for that reason.

---

## Highest-leverage recommendations, ranked

1. **Vietnamese edition** — the only defensible moat; no local competitor can copy it
2. **Title tags and canonical domain** — cheapest fix, immediate search visibility gain
3. **Press and record on the homepage** — converts hesitant visitors on authority, not price
4. **Google review engine** — the dominant local ranking and conversion factor, currently unaddressed
5. **After-hours intake** — criminal, immigration and PI leads arrive outside office hours

---

## Deliverable produced

`outputs/lawyer-truong/deliverable/truong-law-website-proposal.html` — client-ready
outside-in audit plus both packages, in the Brand OS house style (paper/pine/terra,
Fraunces + Hanken Grotesk). Doubles as the studio work sample for the pitch.
