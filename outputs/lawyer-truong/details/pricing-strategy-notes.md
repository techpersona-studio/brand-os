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
| Build | 3 weeks | 3–4 weeks |
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
