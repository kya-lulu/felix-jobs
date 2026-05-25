# Field Notes — Felix Jobs Agent

**Purpose:** Drive the weekly scrape that populates `src/data/jobs.ts`. Every Sunday evening, Claude reads this file, executes the scrape methodology against the source list, scores each candidate role against Felix's profile, and writes new cards into the data file.

**Owner:** Terry Lin (terrylin921@gmail.com) on Felix's behalf
**Subject:** Felix Lin (linfelix26@gmail.com)
**Created:** 2026-05-25 · [source: cowork/laptop]
**Cadence:** Weekly digest — Sunday evenings, ~7pm PT
**Authority:** This file overrides any prior heuristics about job scoring. Edit this file rather than the scraping script.

---

## Mission

Surface **non-traditional, seasonal, field-based, and immersive environmental roles** that match Felix's profile and would not show up on Indeed / LinkedIn front-page searches. The site is a curated board, not a job aggregator — quality and fit over volume. Each card must be one Felix would seriously consider applying to.

---

## Felix profile snapshot

Mirrors `src/data/profile.ts`. Update both when anything changes.

- **Education:** B.S. Environmental Science, University of San Francisco, May 2026, GPA 3.8, honors
- **Citizenship / auth:** US citizen — no sponsorship required
- **Location:** San Francisco currently, will relocate anywhere in the US
- **Remote:** OK with remote, but prefers field / on-site work
- **Excited about:** nonprofits · startups · cleantech · green tech · geothermal · conservation · wildlife · water
- **Open role types:** full-time, internship, fellowship, contract, temp, research, AmeriCorps / conservation corps
- **Avoid:** defense · crypto · pharma · tax · big-co SWE/PM/data/ML
- **Experience / skills:** [TBD — Felix to provide]

---

## Scoring rubric (0–100)

The agent assigns a `fitScore` to each card. Sum the components, cap at 100.

| Component | Max | Notes |
|---|---|---|
| **Industry alignment** | 25 | 25 = conservation/cleantech/wildlife/geothermal/water · 15 = adjacent (env consulting, parks) · 5 = tangential · 0 = on avoid-list (skip card entirely) |
| **Role-type fit** | 20 | 20 = seasonal field tech, conservation corps, AmeriCorps · 15 = NGO entry · 12 = consulting entry-tech · 10 = utility trainee · 5 = research/REU · 0 = SWE/PM/ESG-comms |
| **Realistic accessibility** | 20 | 20 = bachelor's-only, no certs · 15 = bachelor's + soft pref · 10 = needs cert Felix doesn't have (GIS, HAZWOPER) · 5 = needs years of experience |
| **Pay honesty** | 15 | 15 = >$20/hr or full salary · 10 = stipend ≥ $400/wk + housing · 5 = stipend ≥ $200/wk · 0 = unpaid |
| **Application clarity** | 10 | 10 = direct apply URL works · 5 = email-only · 0 = "contact us" |
| **Urgency / timeliness** | 10 | 10 = deadline 1-4 weeks out · 7 = rolling · 5 = >2 months · 3 = already filling fast |

**Bonus (+5 each, max +15):** known-good employer (Conservation Legacy, ACE, USFWS, EBMUD, Tetra Tech) · housing provided · path to permanent (Pathways, EBMUD trainee, ACE-EPIC).

**Auto-skip:** any role with industry score 0 (defense/crypto/pharma/tax/generic big-co tech). Don't even create the card.

---

## Source list (weekly scrape targets)

Last verified 2026-05-25 via research agent. Reliability scores: 5 = always-fresh, well-categorized, low-noise · 3 = useful but mixed · 1 = noisy.

### A · Big aggregators (specialty boards)

| # | Source | Filter / query | Score |
|---|---|---|---|
| A1 | [Conservation Job Board](https://www.conservationjobboard.com) | Categories: wildlife, forestry, ecology, env-ed, conservation-corps; job-type = seasonal | 5 |
| A2 | [Texas A&M Natural Resources Job Board](https://jobs.rwfm.tamu.edu) | Keywords: technician, seasonal, intern | 5 |
| A3 | [ECOLOG-L listserv](https://listserv.umd.edu/archives/ecolog-l.html) | Subscribe to digest; filter for "tech", "REU", "seasonal", "MS" | 5 |
| A4 | [EcoJobs.com](https://ecojobs.com) | Browse categories: Wildlife, Marine, Education | 4 |
| A5 | [ESA Career Central](https://esa.org/career-central) | Tag: Early Career | 3 |
| A6 | [Climatebase](https://climatebase.org/jobs) | Function = Science/Engineering; Experience = Entry-level | 3 |
| A7 | [ClimateTechList](https://www.climatetechlist.com/jobs) | Sector: Geothermal, Hardware, Carbon Removal | 4 |
| A8 | [Green Jobs Search](https://greenjobs.greenjobsearch.org) | Browse all (low volume) | 3 |
| A9 | [The Watershed Org Jobs Board](https://thewatershed.org/environmental-jobs-board/) | Browse | 3 |

### B · Working-holiday / immersive

| # | Source | Notes | Score |
|---|---|---|---|
| B1 | [CoolWorks](https://www.coolworks.com) | Categories: Conservation, Nature/Ranch — best US analog to working-holiday, pays cash + housing | **4** |
| B2 | [WWOOF USA](https://wwoofusa.org) | Farm room-and-board; sidebar option only, not core | 2 |
| B3 | [Workaway](https://www.workaway.info) | Heavy on EU; thin for US env work | 2 |

### C · Conservation corps / service programs

| # | Source | Notes | Score |
|---|---|---|---|
| C1 | [The Corps Network — meta-board](https://corpsnetwork.org/job-openings/) | One-stop scrape for all member corps | 5 |
| C2 | [Student Conservation Association](https://thesca.org/serve/) | SCA AmeriCorps placements + crews | 4 |
| C3 | [Conservation Legacy / SCC / AZCC](https://sccorps.org/crew-positions) + [AZCC IPs](https://azcorps.org/ip-positions) | Crew + IP | 5 |
| C4 | [American Conservation Experience — EPIC](https://usaconservation.applicantpool.com/jobs/) | IPs w/ BLM, USFWS, NPS, USFS | 5 |
| C5 | [AmeriCorps.gov listings](https://my.americorps.gov/mp/listing/search.do) | Service Category = Environment | 4 |
| C6 | [Conservation Corps MN & Iowa](https://conservationcorps.org/applications/) | IP positions | 4 |
| C7 | [Northwest Youth Corps](https://www.nwyouthcorps.org) + [Mt Adams Institute](https://mtadamsinstitute.org/land-stewards/) | PNW; ⚠️ Mt Adams winding down 12/31/2026 | 3 |

### D · Federal & state seasonal techs

| # | Source | Notes | Score |
|---|---|---|---|
| D1 | [USAJOBS](https://www.usajobs.gov) | **Series 0404 (Bio Sci Tech), 0462 (Forestry Tech), 0455 (Range Tech)** · Agency = BLM/USFS/NPS/USFWS · Appointment = Temporary | 5 |
| D2 | [USFWS jobs (direct)](https://www.fws.gov/job-openings) | Faster than USAJOBS | 4 |
| D3 | [CalCareers](https://www.calcareers.ca.gov) + [CDFW jobs](https://wildlife.ca.gov/About/Jobs) | Scientific Aid, Env Scientist | 5 |
| D4 | [Oregon State Jobs](https://oregonstatejobs.gov) | Natural Resource Specialist, Fish & Wildlife Tech | 4 |
| D5 | [WDFW jobs](https://wdfw.wa.gov/about/jobs) + [WA DNR](https://dnr.wa.gov/jobs) | Strong seasonal pipeline | 4 |
| D6 | [Colorado DNR](https://dnr.colorado.gov/careers) | Seasonal wildlife techs, water resource roles | 4 |
| D7 | [Minnesota DNR](https://www.dnr.state.mn.us/careers) | Deep state DNR seasonal pipeline | 4 |
| D8 | [NY DEC employment](https://dec.ny.gov/about/employment) | East-coast seasonal + permanent | 3 |

### E · Environmental consulting (entry-level techs / staff scientists)

| # | Source | Notes | Score |
|---|---|---|---|
| E1 | [Tetra Tech — environmental](https://tetratech.referrals.selectminds.com/page/environmental-516) | Search: entry level scientist, environmental technician | 4 |
| E2 | [Stantec — entry-level Env Sci](https://stantec.jobs/job-titles/entry-level-environmental-scientistgeologist/jobs/) | Dedicated entry URL | 4 |
| E3 | [AECOM](https://aecom.jobs) | Search: environmental + entry | 3 |
| E4 | [WSP USA](https://www.wsp.com/en-us/careers/job-opportunities) | Early Career Env Scientist | 3 |
| E5 | [ICF](https://careers.icf.com/us/en/c/sciences-jobs) | Env planning + biology; summer intern program | 3 |
| E6 | [ERM](https://www.erm.com/careers) + [Ramboll](https://ramboll.com/career) | "Consultant – Environment" entry | 3 |
| E7 | [Jacobs](https://careers.jacobs.com) | Filter Env + Entry Level | 3 |

### F · Water / utilities / municipal

| # | Source | Notes | Score |
|---|---|---|---|
| F1 | [AWWA Career Center](https://careercenter.awwa.org/jobs/) | Operator Trainee, Water Quality Tech | 4 |
| F2 | [BayWork](https://bayworkjobs.org) | Bay Area utility consortium (EBMUD, SFPUC, Valley Water) | **5** (Bay Area focus) |
| F3 | [EBMUD jobs](https://www.ebmud.com/jobs/job-opportunities) | Operator Trainee opens ~Jan annually, capped first 300 apps | 4 |
| F4 | [SF Careers](https://careers.sf.gov) | SFPUC water/wastewater roles | 4 |
| F5 | [CalOpps](https://www.calopps.org/job-search/wastewater) | All CA municipal utility/parks postings | 4 |
| F6 | [WEF Career Center](https://careers.wef.org) | Wastewater complement to AWWA | 3 |

### G · REUs & university research

| # | Source | Notes | Score |
|---|---|---|---|
| G1 | [NSF REU Search](https://www.nsf.gov/crssprgm/reu/list_result.jsp?unitid=5047) | Filter: Biological Sciences, Environmental | 4 |
| G2 | [REUFinder](https://reufinder.com) | Deadline-sorted UI on NSF data | 4 |
| G3 | ECOLOG-L (see A3) | Single best source for one-off field-tech/REU posts | 5 |
| G4 | [Pathways to Science](https://www.pathwaystoscience.org) | REUs + post-bacc + fellowships | 4 |

> ⚠️ **REU eligibility:** typically requires currently-enrolled undergrad. Felix graduates May 2026 — most REUs become inaccessible after that. Flag urgency on any REU surfaced.

### I · Marine + international conservation (added 2026-05-25 per Terry)

Felix is leaning toward marine and immersive global placements. These sources skew **pay-to-intern** (room/board fees) — flag cost clearly in `comp` and surface scholarship paths where they exist.

| # | Source | Notes | Score |
|---|---|---|---|
| I1 | [Save Our Seas Foundation — partner directory](https://saveourseas.com/foundation/careers/internships-volunteering/) | Curated worldwide network of marine conservation orgs (Manta Trust, Charles Darwin Foundation, Cape Eleuthera, Dyer Island Conservation Trust, Blue Ventures, OrcaLab, AMMCO Cameroon, more). Best meta-source for marine. | **5** |
| I2 | [OSU Integrative Biology — Marine Internships list](https://ib.oregonstate.edu/undergraduate/integrative-biology-careers/biology-internship-volunteering/marine-internships) | University-curated meta-list of ~30 marine internships: Hatfield, Mote, Friday Harbor, Loggerhead Marine Life Center, Cascadia Research, Pacific Whale Foundation, REEF, etc. Mostly US, mostly paid. | 5 |
| I3 | [Bimini Shark Lab](https://www.biminisharklab.com/internships) | 2-4 mo shark research internships in Bahamas + FL Keys. $1,250/mo room & board (pay-to-intern). Doc Gruber Memorial Scholarship can cover. Up to 5 interns/cycle. Watch IG @biminisharklab for next intake. | 4 |
| I4 | [GVI](https://www.gvi.co.uk/internships/) | Pay-to-volunteer programs across Costa Rica, Mexico, Seychelles, Fiji, etc. GVI Foundation Grant covers up to 80% (~£10k). Marine + wildlife internships. Programs structured as 2-24 week packages. | 3 |
| I5 | [Mote Marine Lab internships](https://mote.org/research/internships) | Sarasota FL — well-funded marine research station, many internship categories, paid + unpaid mix. Apply ~6 mo in advance. | 4 |
| I6 | [Cape Eleuthera Institute](https://islandschool.org/cape-eleuthera-institute/conduct-research-at-cei/) | Bahamas research station, semester + summer internships, structured mentorship. | 4 |
| I7 | [Hatfield Marine Science Center (OSU)](https://hmsc.oregonstate.edu/academics/internships) | Newport OR — paid summer internships through Sea Grant, REUs, undergrad programs. Major US marine station. | 4 |
| I8 | [Manta Trust](http://www.mantatrust.org) (via SOSF) | Maldives + global manta ray conservation; intern + research assistant slots. | 3 |
| I9 | [Charles Darwin Foundation](https://www.darwinfoundation.org/en/) | Galápagos — terrestrial + marine research; volunteer + intern + structured programs. | 3 |

> ⚠️ **Pay-to-intern flag.** When a card costs Felix money out of pocket (Bimini, GVI, Cape Eleuthera, sometimes Mote), state the monthly room/board fee in `comp` and link to scholarships in `extras`. Don't bury the cost.

### H · Newsletters & social signals (manual, not scraped)

| # | Source | Notes |
|---|---|---|
| H1 | [CTVC newsletter](https://www.ctvc.co) | Weekly climate-tech digest with jobs section |
| H2 | [ClimateTechList Substack](https://newsletter.climatetechlist.com) | Weekly job alerts |
| H3 | LinkedIn voices: Sophia Li · Kim Pham (Climatebase) · Steven Zhang (ClimateTechList) · Erin Holmes (Climate People) · Jonathan Foley (Drawdown) | Manual weekly search: `#hiring + environmental` |
| H4 | Reddit: r/Environmental_Careers · r/ecology · r/environmental_science · r/wildlifebiology | Community sanity-check on employers + stipend reality |

---

## Source anti-list (do NOT scrape)

1. **Indeed / LinkedIn generic env searches** — too noisy, adjacent-role spam (HVAC, EHS warehouse)
2. **ZipRecruiter / SimplyHired / Glassdoor** — republished aggregator junk
3. **Climatebase Fellowship** — $2k bootcamp, not a job
4. **Workaway / HelpX / Worldpackers as primary** — EU-heavy, US env-sci offerings thin
5. **Handshake generic** — siloed to USF's portal; Felix should log in directly
6. **Idealist without env filter** — ~70% non-env nonprofit ops
7. **EnvironmentalCareer.com / Environmentaljobs.com** — domain-squat, stale, ad-heavy
8. **Jooble / Adzuna / Lensa** — aggregator-of-aggregators
9. **Big-firm "Sustainability" / "ESG Analyst" roles at FAANG/banks** — doesn't match Felix's field/wildlife interest

---

## Weekly scrape methodology

Every Sunday ~7pm PT, Claude:

1. **Pull from each source** in priority order: A (aggregators) → C (corps) → D (federal/state) → E (consulting) → F (water) → I (marine/intl) → B (CoolWorks) → G (REUs, only if Felix is still REU-eligible) → H (manual social, lower priority).
2. **Dedupe** against existing card IDs in `src/data/jobs.ts`. ID format: `{org-slug}-{role-slug}-{yymm}`.
3. **VERIFY freshness** — for every candidate card, **fetch the `applyUrl`**. If it returns a non-200 status, redirects to a generic careers page, or the page shows "this job is no longer available" / "applications closed" → **DROP THE CARD**. Don't include it.
4. **VERIFY deadline** — if a posting shows a deadline that has already passed, drop the card. If deadline is unspecified, treat as rolling but only keep cards where the source page was modified within the last 30 days.
5. **Score** each candidate using the rubric above. Drop anything <55. Drop anything in industry-score-0 immediately. Always populate `fitBreakdown` with the per-component numbers — the UI shows the decomposition.
6. **Generate the card** following `src/types.ts` shape. For roles with a `contactEmail`, draft the email body using the template below using Felix's actual experience from `src/data/profile.ts` (don't invent).
7. **Append to data file** (don't overwrite existing cards Felix may still be acting on). Maintain newest-first sort by `source.discoveredAt`.
8. **Sweep existing cards for staleness** — for any card already on the board whose deadline has passed in the last week, set `extras` to "**Deadline passed.** Track for next cycle." and lower its `fitScore` to reflect closed status. Don't delete (Felix may want to review what he missed).
9. **Update this file's "Update log"** at the bottom with date, number added, number swept, sources that yielded zero.

The actual execution lives in `scripts/scrape.md` — that file is what Claude opens during the weekly run.

### URL verification rules (hard requirements)

- **Every `applyUrl` must be fetched and confirmed 200** before the card is included. No exceptions.
- If a URL returns a 200 but the page content shows "position filled," "applications closed," or "we are no longer accepting applications," **drop the card.**
- If WebFetch is restricted from a domain, use WebSearch to confirm the listing appears in current results with a recent date. Note the verification method in the agent reply ("WebFetch-verified" vs "WebSearch-verified") so Terry knows the confidence level.
- For postings on job boards (Conservation Job Board, USAJOBS, etc.), the URL must contain a posting ID — never link to a generic search page.

---

## Gmail draft template (per-card)

When `contactEmail` is set, generate `draftEmail` using:

```
Subject: {role} — Felix Lin (USF Env Sci, May 2026)

Hi {contactName | "team"},

I'm Felix Lin, a recent University of San Francisco Environmental Science graduate (May 2026, GPA 3.8, honors). The {role} role caught my eye — {one-sentence specific reason this org / role hooks me, drawn from posting content}.

A few quick things:
- US citizen, no sponsorship needed
- {role-specific qualifier: "willing to relocate", "Bay Area-local", "ready to start {date}", etc.}
- {1–2 lines from Felix's experience that map to the role's stated requirements — pull from profile.experienceSummary}

Resume attached. Happy to share writing samples or coursework details if useful.

Thanks for considering,
Felix Lin
linfelix26@gmail.com · 713-459-8357
```

Personalization rules:
- Reference the specific posting (project name, location, program — not generic "your mission").
- Match Felix's experience bullets to the role's requirements. Don't invent experience he doesn't have.
- Keep it under 180 words. Recruiters skim.

---

## Update log

| Date | Change | Author |
|---|---|---|
| 2026-05-25 | Initial scaffold + source list from research pass. Seed cards illustrative — first real scrape pending. | Claude + Terry [source: cowork/laptop] |
| 2026-05-25 | Added marine + international section (I) with 9 sources after Terry flagged Bimini Shark Lab, OSU marine list, Save Our Seas, GVI. New `marine` + `international` industry tags. 5 new seed cards prepended. | Claude + Terry [source: cowork/laptop] |
| 2026-05-25 | Stale-card sweep: Terry flagged that many seed cards had expired listings. Retired the original 15 illustrative cards and replaced with 10 verified-live postings (Cascades Carnivore, Yosemite NPS, CA Climate Action Corps, SCA Western, ACE-EPIC GRSM + Hot Springs, MSU Bozeman, SFPUC Watershed, GRSM NPS, Stillwater Sciences). Added hard URL-verification rules to scrape methodology. Added `fitBreakdown` to every card. | Claude + Terry [source: cowork/laptop] |
