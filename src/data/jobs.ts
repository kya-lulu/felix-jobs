import type { JobCard } from '../types'

/**
 * Seed cards — illustrative environmental roles matching Felix's profile.
 *
 * These are sourced from the research pass on 2026-05-25 (see AGENT.md
 * "Update log"). URLs were verified to exist at write-time but listings may
 * have closed — Felix should reconfirm in each posting. The first real
 * weekly scrape (Sun 2026-05-31) will append fresh cards and these will
 * gradually rotate out.
 *
 * To add a new card by hand: copy any block, change the id, fill in fields.
 * Keep newest-first.
 */
export const SEED_JOBS: JobCard[] = [
  // ==================================================================
  // MARINE + INTERNATIONAL SET — added 2026-05-25 per Terry's flagged sources
  // ==================================================================

  // ------------------------------------------------------------------
  // Card M1 — Bimini Shark Lab (Bahamas + FL Keys)
  // ------------------------------------------------------------------
  {
    id: 'bimini-sharklab-intern-2605',
    org: 'Bimini Biological Field Station Foundation (Shark Lab)',
    role: 'Marine Research Internship — Bahamas + Florida Keys',
    summary:
      'Live and work at a legendary shark research station in South Bimini. 2–4 month immersive program: field operations, snorkel/freedive with lemon sharks and great hammerheads, assist with FL Keys research expeditions, learn shark workup methodology.',
    roleType: 'internship',
    industries: ['marine', 'conservation', 'wildlife', 'nonprofit', 'international'],
    location: 'South Bimini, Bahamas + Florida Keys research trips',
    usEligible: true,
    deadline: '2027-03-15',
    comp: '$1,250/mo room & board (Felix pays) · meals + housing + training included · scholarships available',
    responsibilities: [
      'Deckhand duties: bait prep, gear setup, knots, fueling, vessel cleanup',
      'Assist visiting university courses; lead Shark Lab tours',
      'Participate in FL Keys longline + BRUVS shark surveys when scheduled',
      'Shared station chores (cooking, cleaning) — communal living required',
    ],
    requirements: [
      'Over 18, valid passport book, eligible to enter USA + Bahamas for 30+ days',
      'Comfortable with hot weather, mosquitos, communal living, power outages',
      'Able to lift/carry 50lbs; comfortable around large dogs',
      'Willing to apply WITHOUT AI assistance (lab explicitly disqualifies AI-assisted apps)',
    ],
    fitScore: 88,
    fitRationale:
      'Marine + shark research is a perfect match for Felix. Pay-to-intern is the friction — but Doc Gruber Memorial Scholarship (via McPZ Foundation) can cover full cost. Apply for scholarship in same application form.',
    applyUrl: 'https://form.jotform.com/260405175921251',
    contactEmail: null,
    contactName: null,
    draftEmail: null,
    source: {
      channel: 'company-careers-page',
      url: 'https://www.biminisharklab.com/internships',
      discoveredAt: '2026-05-25T00:00:00Z',
    },
    status: 'new',
    extras:
      '**Cost:** $1,250/mo room & board + Fort Lauderdale ↔ Bimini flights (not included). Scholarships: [Doc Gruber Memorial Scholarship](https://www.biminisharklab.com/scholarships) covers partial or full fees. **Watch:** All 2026 cycles closed. Next intake applications are open with deadline March 15, 2027. Follow [@biminisharklab on Instagram](https://www.instagram.com/biminisharklab) for cycle announcements.',
  },

  // ------------------------------------------------------------------
  // Card M2 — GVI Costa Rica Conservation
  // ------------------------------------------------------------------
  {
    id: 'gvi-costarica-conservation-2605',
    org: 'GVI (Global Vision International)',
    role: 'Costa Rica Conservation Internship — Kekoldi Rainforest',
    summary:
      'Live in the Kekoldi Indigenous Reserve on Costa Rica\'s Caribbean coast. 2–24 week structured internship: wildlife monitoring, biodiversity surveys, fieldwork in tropical rainforest. 40 hrs/week field time, 1:6 staff-to-participant ratio.',
    roleType: 'internship',
    industries: ['conservation', 'wildlife', 'international', 'nonprofit'],
    location: 'Kekoldi Indigenous Reserve, Caribbean Costa Rica',
    usEligible: true,
    deadline: '2026-05-31',
    comp: 'Pay-to-volunteer (program fee varies by duration) · GVI Foundation Grants up to 80% / £10,000 available · 31 May grant deadline',
    responsibilities: [
      'Conduct wildlife and biodiversity field surveys',
      'Support habitat monitoring and citizen science data collection',
      'Participate in GVI Experiences: Spanish class, waterfall hikes, wildlife photography workshops',
      'Live communally with international participants in jungle base camp',
    ],
    requirements: [
      'Over 18, valid passport',
      'Willing to live in remote rainforest with limited amenities',
      'No prior experience required — structured program',
    ],
    fitScore: 70,
    fitRationale:
      'International immersive conservation experience aligns with Felix\'s interest. Pay-to-volunteer is a real friction — but GVI Foundation Grant deadline 31 May 2026 could fund up to 80%. Worth a separate pass on whether the grant rounds work for Felix.',
    applyUrl: 'https://www.gvi.co.uk/programs/costa-rica-conservation-internship/',
    contactEmail: null,
    contactName: null,
    draftEmail: null,
    source: {
      channel: 'company-careers-page',
      url: 'https://www.gvi.co.uk/internships/',
      discoveredAt: '2026-05-25T00:00:00Z',
    },
    status: 'new',
    extras:
      '**Cost:** Pay-to-volunteer. Program fees increase with duration; expect £2-8k for 2-12 weeks. **Scholarship:** [GVI Foundation Grant](https://www.gvi.co.uk/gvi-foundation-volunteering-grants/) covers up to 80% / £10k, deadline 31 May 2026 for 2026 cycle. **Caveat:** GVI is a for-profit "voluntour" operator — quality varies by program. Costa Rica Kekoldi is one of their better-reviewed sites. Check alumni reviews on independent sites before committing.',
  },

  // ------------------------------------------------------------------
  // Card M3 — Mote Marine Lab (FL)
  // ------------------------------------------------------------------
  {
    id: 'mote-marine-intern-2605',
    org: 'Mote Marine Laboratory & Aquarium',
    role: 'Research Internship — Multiple Tracks',
    summary:
      'Sarasota-based marine research institution offers ~30 internship categories from shark research to coral reef restoration to stranding response. 10-16 week placements, multiple seasonal intakes.',
    roleType: 'internship',
    industries: ['marine', 'wildlife', 'conservation', 'nonprofit'],
    location: 'Sarasota, FL (some field sites in FL Keys)',
    usEligible: true,
    deadline: null,
    comp: 'Mix of paid + unpaid (varies by track) · housing assistance available for some positions',
    responsibilities: [
      'Track-specific: shark biology, coral reef restoration, manatee research, marine mammal pathology, or aquaculture',
      'Daily research operations under PI mentorship',
      'Co-author papers / present at end-of-program symposium when applicable',
    ],
    requirements: [
      'Currently enrolled or recent grad in marine bio, env sci, or related',
      'Apply 4-6 months in advance for popular tracks',
      'Self-funded for unpaid tracks (housing + living)',
    ],
    fitScore: 80,
    fitRationale:
      'Mote is one of the most respected marine research institutions in the US — strong career signal. Multiple paid tracks exist; Felix should apply to several to maximize chances. Listed in both SOSF and OSU meta-lists, double-confirmed.',
    applyUrl: 'https://mote.org/research/internships',
    contactEmail: null,
    contactName: null,
    draftEmail: null,
    source: {
      channel: 'other',
      url: 'https://saveourseas.com/foundation/careers/internships-volunteering/',
      discoveredAt: '2026-05-25T00:00:00Z',
    },
    status: 'new',
    extras:
      '**Track selection matters.** Browse all categories at https://mote.org/research/internships and apply to 2-3 that fit Felix\'s interests. Paid tracks (e.g. NSF-funded coral) close fastest.',
  },

  // ------------------------------------------------------------------
  // Card M4 — Cape Eleuthera Institute (Bahamas)
  // ------------------------------------------------------------------
  {
    id: 'cei-research-intern-2605',
    org: 'Cape Eleuthera Institute',
    role: 'Research Internship — Marine + Sustainability',
    summary:
      'Bahamas research station tied to The Island School. Semester + summer placements across sustainable aquaculture, shark conservation, sea turtle research, reef ecology. Structured mentorship + housing on-site.',
    roleType: 'internship',
    industries: ['marine', 'conservation', 'wildlife', 'sustainable-ag', 'international'],
    location: 'Eleuthera, Bahamas',
    usEligible: true,
    deadline: null,
    comp: 'Modest stipend OR program fee depending on track · housing + meals on-site',
    responsibilities: [
      'Project-specific: shark tagging, sea turtle monitoring, aquaponics research, reef surveys, climate research',
      'Co-host visiting Island School students for outreach',
      'Live in island research community',
    ],
    requirements: [
      'Bachelor\'s in marine/env sci or related (or in-progress)',
      'Comfort with island/remote living',
      'Strong written communication for research reports',
    ],
    fitScore: 78,
    fitRationale:
      'Premier Bahamas-based research station, structured mentorship, multiple tracks. Tied to a respected school network — alumni go on to grad programs and conservation careers. SOSF partner.',
    applyUrl: 'https://islandschool.org/cape-eleuthera-institute/conduct-research-at-cei/',
    contactEmail: null,
    contactName: null,
    draftEmail: null,
    source: {
      channel: 'other',
      url: 'https://saveourseas.com/foundation/careers/internships-volunteering/',
      discoveredAt: '2026-05-25T00:00:00Z',
    },
    status: 'new',
  },

  // ------------------------------------------------------------------
  // Card M5 — Hatfield Marine Science Center (OSU, OR)
  // ------------------------------------------------------------------
  {
    id: 'hatfield-summer-intern-2605',
    org: 'Hatfield Marine Science Center (Oregon State University)',
    role: 'Summer Marine Research Internship',
    summary:
      'Newport, OR — major US marine research station on the Oregon coast. Sea Grant Summer Scholars + REU + NOAA-affiliated internships. Paid, structured, with academic credit pathway.',
    roleType: 'research',
    industries: ['marine', 'water', 'conservation', 'nonprofit'],
    location: 'Newport, OR',
    usEligible: true,
    deadline: '2027-02-01',
    comp: '$5,000–7,000 summer stipend · housing assistance · 10-12 week duration',
    responsibilities: [
      'Track-specific: ocean acidification, fisheries oceanography, marine mammal acoustics, coastal ecology',
      'Mentored research under HMSC faculty PI',
      'Cohort seminars + final research presentation',
    ],
    requirements: [
      'Currently enrolled undergrad (US citizen / permanent resident) — REU eligibility',
      'Coursework in marine bio, oceanography, env sci, or related',
      'Strong fit if Felix takes a gap year or applies before May 2026 grad',
    ],
    fitScore: 73,
    fitRationale:
      'Paid + structured + marine + on Felix\'s preferred West Coast. ⚠️ Requires current undergrad enrollment — Felix may have aged out by 2027 cycle since he graduated May 2026. Confirm with program coordinator.',
    applyUrl: 'https://hmsc.oregonstate.edu/academics/internships',
    contactEmail: null,
    contactName: null,
    draftEmail: null,
    source: {
      channel: 'other',
      url: 'https://ib.oregonstate.edu/undergraduate/integrative-biology-careers/biology-internship-volunteering/marine-internships',
      discoveredAt: '2026-05-25T00:00:00Z',
    },
    status: 'new',
    extras:
      '**Eligibility flag:** REU/Sea Grant Summer Scholars typically require currently-enrolled undergrad. Felix graduated May 2026 — likely ineligible for 2027 unless they have a post-bacc category. **Backup:** HMSC also hosts staff research-tech roles via OSU Jobs — those are open to grads.',
  },

  // ==================================================================
  // END MARINE + INTERNATIONAL SET
  // ==================================================================

  // ------------------------------------------------------------------
  // Card 1 — Conservation corps (CO) · summer 2026
  // ------------------------------------------------------------------
  {
    id: 'scc-summer-crew-2605',
    org: 'Southwest Conservation Corps (Conservation Legacy)',
    role: '2026 Short-Term Summer Conservation Crew Member — AmeriCorps',
    summary:
      '10-week trail, forestry, and invasives crew across CO public lands. 8-on/6-off hitch schedule, front- and backcountry work.',
    roleType: 'temp',
    industries: ['conservation', 'land-trust', 'wildlife', 'nonprofit'],
    location: 'Salida, CO (Los Valles office) — statewide field sites',
    usEligible: true,
    deadline: '2026-06-02',
    comp: '$480/wk living + $120/wk additional · $1,565 Segal Ed Award · food + gear provided',
    responsibilities: [
      'Build and maintain trails on USFS / BLM / NPS lands',
      'Conduct invasive species removal and forest thinning',
      'Live and work in remote crews on rotating 8-day hitches',
    ],
    requirements: [
      'US citizen or permanent resident (AmeriCorps)',
      'Physical stamina for 10+ hour field days',
      'Driver’s license; clean MVR',
    ],
    fitScore: 89,
    fitRationale:
      'Pure outdoor conservation, no degree gatekeeping, immediate paid + Ed Award. Resume-grade entry into the conservation corps network.',
    applyUrl:
      'https://www.conservation-careers.com/job/2026-short-term-summer-conservation-crew-member-americorps-3/',
    contactEmail: null,
    contactName: null,
    draftEmail: null,
    source: {
      channel: 'conservation-job-board',
      url: 'https://corpsnetwork.org/job-openings/',
      discoveredAt: '2026-05-25T00:00:00Z',
    },
    status: 'new',
  },

  // ------------------------------------------------------------------
  // Card 2 — ACE-EPIC Individual Placement (UT)
  // ------------------------------------------------------------------
  {
    id: 'ace-epic-wildlife-blm-cedar-2605',
    org: 'American Conservation Experience — EPIC',
    role: 'Wildlife Biology Individual Placement — BLM Cedar City Field Office',
    summary:
      'Mentored placement with BLM doing wildlife surveys, habitat assessments, and field data collection in southern Utah.',
    roleType: 'fellowship',
    industries: ['wildlife', 'conservation', 'land-trust'],
    location: 'Cedar City, UT',
    usEligible: true,
    deadline: null,
    comp: '~$600/wk living allowance + housing + Segal Ed Award',
    responsibilities: [
      'Conduct wildlife surveys (large mammals, raptors, herps)',
      'Support habitat assessments and restoration planning',
      'Embed with BLM staff for direct mentorship',
    ],
    requirements: [
      "Bachelor's in wildlife, ecology, env sci or related",
      'Comfort with remote field work and primitive camping',
      'Valid driver’s license',
    ],
    fitScore: 87,
    fitRationale:
      'Marquee federal-adjacent wildlife bio work; ACE-EPIC alumni convert to USAJOBS direct hire frequently. Strong springboard.',
    applyUrl: 'https://usaconservation.applicantpool.com/jobs/625826.html',
    contactEmail: null,
    contactName: null,
    draftEmail: null,
    source: {
      channel: 'company-careers-page',
      url: 'https://usaconservation.applicantpool.com/jobs/',
      discoveredAt: '2026-05-25T00:00:00Z',
    },
    status: 'new',
  },

  // ------------------------------------------------------------------
  // Card 3 — Federal seasonal (CA, Yosemite)
  // ------------------------------------------------------------------
  {
    id: 'usfs-bears-yosemite-2605',
    org: 'National Park Service — Yosemite NP',
    role: 'Seasonal Biological Science Technician (Wildlife) — Bear Team',
    summary:
      'Seasonal wildlife tech on Yosemite’s bear management crew. Tracking, conflict response, visitor outreach.',
    roleType: 'temp',
    industries: ['wildlife', 'conservation'],
    location: 'Yosemite National Park, CA',
    usEligible: true,
    deadline: null,
    comp: 'GS-5/6 hourly (~$22–25/hr) · park housing typically provided',
    responsibilities: [
      'Track and document black bear activity park-wide',
      'Respond to human-wildlife conflict incidents',
      'Public outreach + data entry',
    ],
    requirements: [
      'Coursework or experience in wildlife biology / env sci',
      'Comfort with night work and remote backcountry travel',
      'US citizen (federal hire)',
    ],
    fitScore: 86,
    fitRationale:
      'Iconic park, marquee resume line, exact env-sci match. Federal seasonal opens pathway to permanent fed roles.',
    applyUrl: 'https://www.usajobs.gov/job/851046100',
    contactEmail: null,
    contactName: null,
    draftEmail: null,
    source: {
      channel: 'company-careers-page',
      url: 'https://www.usajobs.gov',
      discoveredAt: '2026-05-25T00:00:00Z',
    },
    status: 'new',
  },

  // ------------------------------------------------------------------
  // Card 4 — Pathways Internship (Federal, conversion-eligible)
  // ------------------------------------------------------------------
  {
    id: 'usfs-pathways-fisheries-2605',
    org: 'USDA Forest Service',
    role: 'Pathways Intern — Biological Science Technician (Fisheries)',
    summary:
      'Pathways internship in fisheries — competitive non-comp federal track that converts to permanent on graduation.',
    roleType: 'internship',
    industries: ['wildlife', 'water', 'conservation'],
    location: 'USFS field unit — varies',
    usEligible: true,
    deadline: '2026-01-20',
    comp: 'GS-4/5 hourly',
    responsibilities: [
      'Assist with fish population surveys and habitat monitoring',
      'Support stream restoration projects',
      'Federal-mandated learning agreement with mentor',
    ],
    requirements: [
      'Currently enrolled OR within graduation window per posting',
      'US citizen',
      'GPA ≥ 2.5',
    ],
    fitScore: 82,
    fitRationale:
      'Best route to a permanent federal env-science job — Pathways converts. Felix’s May 2026 grad date is on the edge; confirm eligibility window. ⚠️ Deadline already passed; track for next cycle.',
    applyUrl: 'https://www.usajobs.gov/job/852950800',
    contactEmail: null,
    contactName: null,
    draftEmail: null,
    source: {
      channel: 'company-careers-page',
      url: 'https://www.usajobs.gov',
      discoveredAt: '2026-05-25T00:00:00Z',
    },
    status: 'new',
  },

  // ------------------------------------------------------------------
  // Card 5 — NGO forester (MD, Terry's example)
  // ------------------------------------------------------------------
  {
    id: 'esrcd-forester-md-2605',
    org: 'Eastern Shore RC&D (NRCS partner)',
    role: 'Forester — Eastern Shore Maryland',
    summary:
      'Forestry technical assistance to private landowners under a USDA NRCS cooperative agreement. Stand assessments, management plans, cost-share program support.',
    roleType: 'full-time',
    industries: ['conservation', 'land-trust', 'nonprofit', 'sustainable-ag'],
    location: 'Easton or Salisbury, MD',
    usEligible: true,
    deadline: null,
    comp: '$50–60k (typical NRCS partner forester range)',
    responsibilities: [
      'Conduct forest stand assessments on private lands',
      'Write forest management plans aligned with NRCS practices',
      'Help landowners enroll in cost-share programs (CRP, EQIP)',
    ],
    requirements: [
      "Bachelor's in forestry, env sci, or related",
      'Driver’s license; rural landowner outreach is core to the role',
      'Comfort with technical writing for landowner audiences',
    ],
    fitScore: 81,
    fitRationale:
      'Bachelor’s-only requirement, salaried, NGO/USDA partnership — exactly the conservation-on-the-ground role Felix is targeting. Terry already flagged this as on-target.',
    applyUrl:
      'https://www.conservationjobboard.com/job-listing-forester-eastern-shore-maryland/2622122313',
    contactEmail: null,
    contactName: null,
    draftEmail: null,
    source: {
      channel: 'conservation-job-board',
      url: 'https://www.conservationjobboard.com',
      discoveredAt: '2026-05-25T00:00:00Z',
    },
    status: 'new',
  },

  // ------------------------------------------------------------------
  // Card 6 — Coastkeeper (RI, Terry's other example)
  // ------------------------------------------------------------------
  {
    id: 'savethebay-coastkeeper-ri-2605',
    org: 'Save The Bay (Narragansett)',
    role: 'South County Coastkeeper',
    summary:
      'On-water advocacy + water-quality monitoring across Little Narragansett Bay watershed. Coastkeeper Alliance member role.',
    roleType: 'full-time',
    industries: ['water', 'conservation', 'climate-policy', 'nonprofit'],
    location: 'Providence, RI (watershed = Little Narragansett Bay)',
    usEligible: true,
    deadline: null,
    comp: 'Salaried (not posted) + full benefits',
    responsibilities: [
      'Run on-water patrols + water-quality sampling',
      'Engage with municipalities and regulators on coastal issues',
      'Coordinate with the broader Coastkeeper / Waterkeeper Alliance network',
    ],
    requirements: [
      "Bachelor's in env sci, marine sci, or related",
      'Boat / on-water comfort',
      'Strong public communication',
    ],
    fitScore: 80,
    fitRationale:
      'Coastal ecology + water quality + advocacy — directly matches Felix’s stated interests. Coastkeeper network has strong career trajectory.',
    applyUrl: 'https://greenjobs.greenjobsearch.org/jobs/south-coastkeeper/',
    contactEmail: null,
    contactName: null,
    draftEmail: null,
    source: {
      channel: 'company-careers-page',
      url: 'https://greenjobs.greenjobsearch.org',
      discoveredAt: '2026-05-25T00:00:00Z',
    },
    status: 'new',
  },

  // ------------------------------------------------------------------
  // Card 7 — Consulting firm entry (Tetra Tech)
  // ------------------------------------------------------------------
  {
    id: 'tetratech-entry-sci-2605',
    org: 'Tetra Tech',
    role: 'Entry-Level Scientist — Environmental (May/June 2026 grad)',
    summary:
      'Generalist scientist on remediation and environmental investigation projects. Common springboard for env-sci grads.',
    roleType: 'full-time',
    industries: ['environmental-consulting', 'water'],
    location: 'Multiple — NJ / NY / MA listed',
    usEligible: true,
    deadline: null,
    comp: '$51–76k (Staff Scientist range, Westford MA reference)',
    responsibilities: [
      'Field sampling for remediation projects',
      'Data analysis + report writing under senior scientist supervision',
      'Site investigations and Phase I/II ESA support',
    ],
    requirements: [
      "Bachelor's in env sci, geology, chem, or related (May/June 2026 grad)",
      'Willing to relocate to NJ / NY / MA',
      'Driver’s license + ability to do field work',
    ],
    fitScore: 74,
    fitRationale:
      'Real salary + benefits, broad exposure to env consulting work. Less "field-immersive" than corps roles but pays meaningfully better and is permanent.',
    applyUrl: 'https://tetratech.referrals.selectminds.com/page/environmental-516',
    contactEmail: null,
    contactName: null,
    draftEmail: null,
    source: {
      channel: 'company-careers-page',
      url: 'https://tetratech.referrals.selectminds.com',
      discoveredAt: '2026-05-25T00:00:00Z',
    },
    status: 'new',
  },

  // ------------------------------------------------------------------
  // Card 8 — Bay Area water utility trainee
  // ------------------------------------------------------------------
  {
    id: 'ebmud-operator-trainee-2605',
    org: 'East Bay Municipal Utility District (EBMUD)',
    role: 'Water Treatment / Distribution Operator Trainee',
    summary:
      '12–36 month paid training program to T2 operator certification, then promotes into permanent Operator role. Unionized.',
    roleType: 'full-time',
    industries: ['water', 'cleantech'],
    location: 'Oakland / East Bay, CA',
    usEligible: true,
    deadline: '2027-01-15',
    comp: '~$50–55k trainee → $105k+ as Wastewater Operator I',
    responsibilities: [
      'Rotational training across treatment and distribution facilities',
      'Earn California T2 Water Treatment Operator certification',
      'Promote to permanent Operator I on certification',
    ],
    requirements: [
      'High school + valid driver’s license',
      'Mechanical aptitude',
      'Willing to work rotating shifts during training',
    ],
    fitScore: 78,
    fitRationale:
      'Stable, unionized, Bay-Area-local (no relocation needed), water sector — checks every utility-track box. ⚠️ Application window opens ~Jan each year and caps at first 300 apps — set an alert.',
    applyUrl: 'https://www.ebmud.com/jobs/job-opportunities',
    contactEmail: null,
    contactName: null,
    draftEmail: null,
    source: {
      channel: 'company-careers-page',
      url: 'https://bayworkjobs.org',
      discoveredAt: '2026-05-25T00:00:00Z',
    },
    status: 'new',
  },

  // ------------------------------------------------------------------
  // Card 9 — REU (must apply before grad)
  // ------------------------------------------------------------------
  {
    id: 'biosphere2-reu-2605',
    org: 'University of Arizona — Biosphere 2',
    role: 'NSF REU — Environmental & Earth Systems Science',
    summary:
      '10-week guided undergrad research at Biosphere 2 — earth systems, ecohydrology, rainforest/desert ecology. Cohort of ~10.',
    roleType: 'research',
    industries: ['conservation', 'climate-tech', 'water'],
    location: 'Tucson / Oracle, AZ',
    usEligible: true,
    deadline: '2027-02-15',
    comp: '$6,000 stipend + food allowance + on-site housing + travel',
    responsibilities: [
      'Conduct mentored research on assigned earth-systems topic',
      'Cohort seminars and field excursions',
      'Present research at end-of-summer symposium',
    ],
    requirements: [
      'Currently enrolled undergrad (US citizen / permanent resident)',
      'Coursework in biology, geo, env sci, or earth sci',
      'Strong written communication',
    ],
    fitScore: 65,
    fitRationale:
      'Marquee earth-systems research site — strong grad-school launchpad. ⚠️ REUs require currently-enrolled undergrad — Felix’s May 2026 grad makes him ineligible for 2027 cycle. Keep on the board as a reference for cousins / network referrals.',
    applyUrl:
      'https://biosphere2.org/education/university-programs/research-experiences-undergrads-reu',
    contactEmail: null,
    contactName: null,
    draftEmail: null,
    source: {
      channel: 'other',
      url: 'https://www.nsf.gov/crssprgm/reu/list_result.jsp?unitid=5047',
      discoveredAt: '2026-05-25T00:00:00Z',
    },
    status: 'new',
    extras:
      '**Eligibility flag:** Most REUs require currently-enrolled undergrad status. Felix’s May 2026 graduation likely disqualifies him from the 2027 cycle. Confirm with program director if applying.',
  },

  // ------------------------------------------------------------------
  // Card 10 — Working-holiday-style (US analog to WWOOF)
  // ------------------------------------------------------------------
  {
    id: 'spi-wildlife-aide-norcal-2605',
    org: 'Sierra Pacific Industries (via CoolWorks)',
    role: 'Seasonal Wildlife Aide — 2026',
    summary:
      'Seasonal field aide doing wildlife monitoring on managed forestlands in coastal Northern California. Closest paid US analog to WWOOF/Workaway-style immersion.',
    roleType: 'temp',
    industries: ['wildlife', 'conservation', 'sustainable-ag'],
    location: 'Fortuna, CA',
    usEligible: true,
    deadline: null,
    comp: '$18–22/hr · housing sometimes provided',
    responsibilities: [
      'Conduct wildlife surveys on private timberland',
      'Support spotted owl / marbled murrelet monitoring',
      'Field data entry and habitat assessments',
    ],
    requirements: [
      "Bachelor's or in-progress in wildlife / env sci",
      'Driver’s license; comfortable in remote forest terrain',
      'Willing to start summer 2026',
    ],
    fitScore: 73,
    fitRationale:
      'Outdoor + immersive + paid + NorCal — better US alternative to WWOOF. SPI hires bachelor’s-level aides every season.',
    applyUrl: 'https://www.coolworks.com',
    contactEmail: null,
    contactName: null,
    draftEmail: null,
    source: {
      channel: 'other',
      url: 'https://www.coolworks.com',
      discoveredAt: '2026-05-25T00:00:00Z',
    },
    status: 'new',
    extras:
      'Search "Sierra Pacific Wildlife Aide 2026" on CoolWorks. If listing not currently live, set alert — they re-post each season.',
  },
]
