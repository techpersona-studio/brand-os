## Objective
The Synthesizer must reconcile Researcher A and Researcher B findings into a complete, confident Business Persona for Quán Phở.

## Locked decisions

**Validated and upgraded from Researcher A:**
- business_name: Quán Phở / Quan Pho — confirmed Yelp, Yahoo Local, Roadtrippers
- address: 184 Broadway #10, Saugus, MA 01906 (Godfried's Plaza, Route 1 North) — confirmed Yelp
- phone: 781-520-4018 — confirmed Yelp
- hours: Mon–Thu 4PM–11PM; Fri–Sun 12PM–11PM — confirmed Yelp
- cocktails: Confirmed — physical bar on premises; signature cocktail "Spicy Pho Ti-Ni"; active bar promotion ("1 free spring roll order with each bill when you sit at the bar and order any alcoholic drink") — FindGlocal, Roadtrippers, Yahoo Local
- venue_type: "Vietnamese restaurant & bar" — Roadtrippers, Yahoo Local/Yelp
- primary_audience: Adult party/drinking crowd corroborated — bar, karaoke night, and alcohol promotions all point to 18–35 positioning
- delivery_method: Own platform only (MealKeyway); no DoorDash, Uber Eats, or Grubhub found

**Net-new from external sources:**
- business_history: Incorporated as Quan Pho Inc. on March 10, 2025 (MA Secretary of State, file #001873907); formerly Long's Noodle House (same family, same address, late 2023–mid 2025); first Quan Pho reviews appeared November 2025
- saturday_karaoke_night: Weekly, 8PM — FindGlocal
- new_menu_item: Special Broken Rice (grilled pork chop + crispy shredded pork skin) — not on current website — FindGlocal
- bar_promo: Free spring roll order per bill when ordering alcoholic drink at bar — FindGlocal
- yelp_rating: 4.0 / 5 (9 reviews) — https://www.yelp.com/biz/quan-pho-saugus-2
- no_tripadvisor_listing: true
- yelp_review_themes: Long wait times with no acknowledgment (Anna C.); price sensitivity — one reviewer cited $40 for two soups as too high (Mike D.); food quality polarized (5★ praise vs 1★ "flavorless broth")

## Constraints
- MapQuest lists "delivery" but no delivery platform or zone was confirmed — do not treat as confirmed; leave as Unknown until client confirms
- RestaurantJump shows 198 "aggregated reviews" — platform-aggregated across sources, not independently verifiable; do not use as a review count
- No party booking system found anywhere externally — treat as Unknown
- Racial framing in client notes must not appear in brand copy
- Early review (Feb 2026) says "only Thai tea available" — conflicts with confirmed bar; likely reflects early-stage operations before bar was activated; Synthesizer should treat bar as confirmed but flag the early gap

## Inputs to use
- `outputs/quan-pho/details/01b-researcherB.md` — full validation (if missing, use this handoff only)

## Definition of done
- All externally confirmed upgrades captured in Locked decisions
- All unresolved items in Blocking
- Synthesizer can build the Business Persona without returning to raw sources

## Blocking
- drinks_timeline: One Yelp review (Feb 2026) says only Thai tea was available; FindGlocal posts (June 2026) confirm full bar with cocktails. Synthesizer should treat bar/cocktails as confirmed but note the bar appears to have been added or activated after the initial opening period.
- delivery: MapQuest lists delivery but no platform or zone confirmed. Client must confirm before delivery copy is written.
- party_booking: No external confirmation found. Client must confirm capacity, booking process, and deposit requirements before party flow is designed.
- pricing: One review cites $40 for two soups as expensive. No pricing confirmed from site (menu lives on MealKeyway). Client must confirm pricing tier and positioning intent.
- seating_capacity: Unknown — needed to determine what party booking can promise.
- founder_story: Unknown — no About page, no external mentions of owner name or background.
