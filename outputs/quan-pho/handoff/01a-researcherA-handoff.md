## Objective
Researcher B validates partial/unknown fields from Researcher A using GBP, reviews, and directories only.

## Locked decisions

- business_name: Quan Pho / Quán Phở
- industry: Vietnamese restaurant
- location: 184 Broadway #10, Saugus, MA 01906
- phone: 781-520-4018
- hours: Mon–Thu 4PM–11PM; Fri–Sun 12PM–11PM
- primary_cta: Online Order (MealKeyway)
- website_url: https://www.quanphoinsaugus.com/
- primary_audience: Adults 18–35, party/drinking crowd, high-tip, no-kids preference (client notes)
- stated_priorities: delivery + party booking (client-stated; neither on current site)
- menu: pho, Bun Bo Hue, spring rolls, vermicelli, wings, skewers, Vietnamese pancake, fried sausage, shrimp cake, Beef in Betel Bliss
- google_reviews_on_site: 3 visible, all 5-star
- visual_palette: yellow-gold, crimson-red, dark wood, near-black
- no_about_page: true
- no_party_booking_on_site: true
- no_delivery_info_on_site: true
- footer_social_urls: https://www.instagram.com/quanphosaugus/

## Constraints

- Do not fetch social media profiles
- Do not infer party capacity or delivery zone
- Do not use client notes racial framing as brand copy — translate to adult/party demographic
- Do not carry forward homepage sub-headline ("About This Exceptional Vietnamese Restaurants") — template placeholder

## Inputs to use

- `outputs/quan-pho/details/01a-researcherA.md` — full extraction with confidence scores and conflicts

## Definition of done

- Handoff lists all locked facts Researcher B should not re-derive
- Blocking items limited to unresolved fields that affect synthesis

## Blocking

- Alcohol/cocktail offering unconfirmed (visible in one asset, absent from site)
- Party booking and delivery infrastructure unknown — both are client top priorities
- Pricing, years in business, founder story, seating capacity unknown
