import type { JobCard } from '../types'

/**
 * Seed cards — verified-live as of 2026-05-25 scrape pass.
 *
 * Replacement pass: the prior stale-shaped seed cards were retired after
 * Terry flagged that many were expired. Every card below was confirmed
 * via WebSearch to have a working listing URL with 2026 dates present.
 * Some are "rolling" deadlines — those still carry standard staleness
 * risk; the weekly Sunday scrape re-verifies and rotates them out.
 *
 * To add a card by hand: copy any block, change the id, fill in fields.
 * Keep newest-first.
 */
export const SEED_JOBS: JobCard[] = [
  // ------------------------------------------------------------------
  // 1 — Cascades Carnivore Project (WA) · top fit, housing + truck included
  // ------------------------------------------------------------------
  {
    id: 'cascades-carnivore-packwood-2605',
    org: 'Cascades Carnivore Project',
    role: 'Summer Field Technician — Carnivore Surveys',
    summary:
      'June–December 2026 field tech: camera surveys, meadow/prey assessments, then fall fox trapping and snow tracking in the Washington Cascades.',
    roleType: 'temp',
    industries: ['conservation', 'wildlife'],
    location: 'Packwood, WA',
    usEligible: true,
    deadline: null,
    comp: '$4,000/mo · housing + work truck provided',
    responsibilities: [
      'Conduct summer camera surveys and meadow/prey assessments across the Cascades',
      'Lead fall fox trapping operations and snow tracking Nov–Dec',
      'Maintain field cameras, GPS units, and trapping equipment',
      'Enter and QA wildlife observation data',
    ],
    requirements: [
      'Field experience with wildlife surveys preferred',
      'Comfortable with extended remote fieldwork and winter conditions',
      'Able to drive provided work truck in mountain terrain',
    ],
    fitScore: 90,
    fitBreakdown: { industry: 25, roleType: 20, accessibility: 20, pay: 15, application: 10, urgency: 7, bonus: 10 },
    fitRationale:
      "Felix's NPS Marin Headlands field-survey + GIS habitat-mapping work maps cleanly onto camera surveys and habitat data. One of the strongest single-card fits — housing, truck, real pay.",
    applyUrl: 'https://www.conservationjobboard.com/job-listing-seasonal-field-technician-packwood-washington/9783872000',
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
  // 2 — Yosemite NPS wildlife biotech · NPS-to-NPS continuity
  // ------------------------------------------------------------------
  {
    id: 'usajobs-yose-biotech-wildlife-2605',
    org: 'National Park Service — Yosemite National Park',
    role: 'Seasonal Biological Science Technician (Wildlife)',
    summary:
      'Four seasonal wildlife biotech positions at Yosemite supporting wilderness wildlife monitoring, extensive backcountry hiking, and remote camera work.',
    roleType: 'temp',
    industries: ['conservation', 'wildlife'],
    location: 'Yosemite National Park, CA',
    usEligible: true,
    deadline: '2026-05-21',
    comp: '$19.62–$25.50/hr · season April–October, up to 1560 hours',
    responsibilities: [
      'Conduct wildlife monitoring surveys in backcountry wilderness settings',
      'Hike and backpack up to 16 miles per day carrying heavy field gear; camp for extended periods',
      'Install and maintain remote cameras and collect biological field data',
      'Support resource-management science division priorities and report to NPS staff',
    ],
    requirements: [
      'Physically capable of strenuous backcountry fieldwork in extreme weather',
      'Experience working in remote wilderness settings preferred',
      'US citizenship and OPM 0404 qualification standards required by closing date',
    ],
    fitScore: 87,
    fitBreakdown: { industry: 25, roleType: 20, accessibility: 20, pay: 15, application: 10, urgency: 0, bonus: 10 },
    fitRationale:
      "Same agency as Felix's prior NPS Marin Headlands internship — direct continuity. ⚠️ Closing date already passed (2026-05-21); leaving on board as a reference target for next-cycle scrape and as a network warm-intro.",
    applyUrl: 'https://www.usajobs.gov/job/868428300',
    contactEmail: null,
    contactName: null,
    draftEmail: null,
    source: {
      channel: 'company-careers-page',
      url: 'https://www.usajobs.gov',
      discoveredAt: '2026-05-25T00:00:00Z',
    },
    status: 'new',
    extras:
      '**Deadline already passed (May 21, 2026).** Use this card as a template for the next Yosemite biotech posting — set a USAJOBS alert for Series 0404, Park = Yosemite. Felix\'s NPS Marin Headlands experience would make him a strong candidate.',
  },

  // ------------------------------------------------------------------
  // 3 — California Climate Action Corps Fellow (CA statewide)
  // ------------------------------------------------------------------
  {
    id: 'caclimateactioncorps-fellow-2627-2605',
    org: 'California Volunteers (Office of the Governor) · CA Climate Action Corps',
    role: '2026–27 Climate Action Corps Fellow',
    summary:
      '11-month AmeriCorps fellowship mobilizing California communities around urban greening, edible food recovery, and wildfire resiliency.',
    roleType: 'fellowship',
    industries: ['climate-policy', 'nonprofit', 'sustainable-ag'],
    location: 'Multiple — across California',
    usEligible: true,
    deadline: null,
    comp: 'Up to $35,250 living allowance (pre-tax) over 11 mo + $10k combined Segal + CA For All Education Awards',
    responsibilities: [
      'Lead climate volunteer engagement projects (urban greening / food recovery / wildfire resiliency)',
      'Coordinate community education events and outreach',
      'Build relationships with local government and nonprofit partners',
      'Track project outcomes and report on community impact',
    ],
    requirements: [
      'Age 18+, California resident, HS diploma or equivalent',
      'US citizen, national, or lawful permanent resident',
      'Commit to 1,700 hours over Sep 21, 2026 – Aug 13, 2027',
    ],
    fitScore: 84,
    fitBreakdown: { industry: 22, roleType: 18, accessibility: 20, pay: 10, application: 10, urgency: 7, bonus: 5 },
    fitRationale:
      "Felix's Refuse Refuse community organizing + Sustainable Development Club presidency map directly onto climate-mobilization fellowship work. CA-resident-eligible via USF. Real income through 2027.",
    applyUrl: 'https://www.caclimateactioncorps.org/apply',
    contactEmail: null,
    contactName: null,
    draftEmail: null,
    source: {
      channel: 'workforclimate',
      url: 'https://www.californiavolunteers.ca.gov/california-climate-action-corps-fellowship/',
      discoveredAt: '2026-05-25T00:00:00Z',
    },
    status: 'new',
  },

  // ------------------------------------------------------------------
  // 4 — SCA Western Conservation Corps (CA/AZ/NM/UT/CO)
  // ------------------------------------------------------------------
  {
    id: 'sca-western-corps-crew-2605',
    org: 'Student Conservation Association',
    role: 'Summer 2026 Western Conservation Corps Crew Member',
    summary:
      'Crew-based AmeriCorps trail work across CA/AZ/NM/UT/CO national forests. Travel allowance and gear provided.',
    roleType: 'temp',
    industries: ['conservation', 'nonprofit'],
    location: 'Multiple — CA, AZ, NM, UT, CO national forests',
    usEligible: true,
    deadline: null,
    comp: '$300–$450/wk + $650 travel allowance (some sessions $850/wk + $1,000 travel)',
    responsibilities: [
      'Trail construction, maintenance, and restoration with a 6-8 person crew',
      'Camp in backcountry settings on 8-day hitches with 6 days off',
      'Hand tools, crosscut saws, and (where certified) chainsaws',
      'Support National Forest staff on priority trail and habitat projects',
    ],
    requirements: [
      'Age 18+, strenuous backcountry physical labor',
      'Comfort living and working in remote crew settings for the full season',
      'Sessions run April 5 – August 29, 2026',
    ],
    fitScore: 82,
    fitBreakdown: { industry: 22, roleType: 20, accessibility: 20, pay: 7, application: 10, urgency: 7, bonus: 5 },
    fitRationale:
      'SCA is a recognized launchpad into NPS/USFS careers. Felix\'s NPS field-survey + groundskeeper background + general comfort with outdoor work fits strongly.',
    applyUrl: 'https://thesca.org/serve/positions/',
    contactEmail: null,
    contactName: null,
    draftEmail: null,
    source: {
      channel: 'company-careers-page',
      url: 'https://thesca.org/program/western-conservation-corps',
      discoveredAt: '2026-05-25T00:00:00Z',
    },
    status: 'new',
  },

  // ------------------------------------------------------------------
  // 5 — ACE-EPIC Interpretation Member (Great Smoky Mountains)
  // ------------------------------------------------------------------
  {
    id: 'ace-epic-grsm-interp-2605',
    org: 'American Conservation Experience — EPIC',
    role: 'Interpretation Member — Great Smoky Mountains National Park',
    summary:
      'ACE-EPIC individual placement delivering interpretive programs alongside NPS staff. Housing provided. 35-week term.',
    roleType: 'fellowship',
    industries: ['conservation', 'nonprofit'],
    location: 'Gatlinburg, TN',
    usEligible: true,
    deadline: null,
    comp: '$300/wk living allowance + free park housing · 35-wk term (May 4, 2026 – Jan 2, 2027)',
    responsibilities: [
      'Develop and deliver interpretive programs and visitor-contact talks alongside NPS interpretation staff',
      'Staff visitor centers and contact stations',
      'Support outreach events and education programming',
      'Document program impact and contribute to interpretive media projects',
    ],
    requirements: [
      'US citizen or legal permanent resident, age 18+',
      'Comfortable with public speaking and visitor interaction',
      'Commit to full 35-week term and live in shared park housing',
    ],
    fitScore: 80,
    fitBreakdown: { industry: 22, roleType: 18, accessibility: 20, pay: 5, application: 10, urgency: 7, bonus: 10 },
    fitRationale:
      "Felix's Refuse Refuse community-organizing + Sustainable Development Club leadership map cleanly onto public-facing interpretive work. Housing + path-to-permanent NPS network.",
    applyUrl: 'https://usaconservation.applicantpool.com/jobs/',
    contactEmail: null,
    contactName: null,
    draftEmail: null,
    source: {
      channel: 'other',
      url: 'https://environmentalcareer.com/job/82017/interpretation-member-sugarlands-great-smoky-mountains-national-park/',
      discoveredAt: '2026-05-25T00:00:00Z',
    },
    status: 'new',
  },

  // ------------------------------------------------------------------
  // 6 — Montana State University seasonal field tech
  // ------------------------------------------------------------------
  {
    id: 'msu-mtcfru-bozeman-2605',
    org: 'Montana State University — Montana Cooperative Fishery Research Unit (USGS)',
    role: 'Summer 2026 Seasonal Field Technician — SW Montana Trout Rivers',
    summary:
      'Full-time summer tech on a USGS/MSU research project quantifying recreational use of blue-ribbon trout streams in SW Montana.',
    roleType: 'research',
    industries: ['conservation', 'water', 'wildlife'],
    location: 'Bozeman, MT',
    usEligible: true,
    deadline: null,
    comp: 'Hourly (university seasonal scale) · substantial daily driving across the region',
    responsibilities: [
      'Install and maintain remote cameras along blue-ribbon trout streams',
      'Conduct creel surveys with anglers',
      'Collect and QA recreation-use data',
      'Drive substantial daily routes across SW Montana field sites',
    ],
    requirements: [
      "Valid driver's license, comfort with extensive solo driving on rural roads",
      'Coursework or experience in fisheries, ecology, or env sci',
      'Comfortable interacting with the public for creel surveys',
    ],
    fitScore: 80,
    fitBreakdown: { industry: 22, roleType: 15, accessibility: 20, pay: 10, application: 10, urgency: 7, bonus: 5 },
    fitRationale:
      "USGS/USU research network — strong reference for grad school later. Felix's NPS coastal-watershed-data + GIS work transfer cleanly to remote-camera monitoring and creel-survey data collection.",
    applyUrl: 'https://www.conservationjobboard.com/job-listing-seasonal-field-technician---montana-state-university-bozeman-montana/4993419097',
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
  // 7 — SFPUC Watershed Worker (Bay Area, no relocation)
  // ------------------------------------------------------------------
  {
    id: 'sfpuc-watershed-worker-su26-2605',
    org: 'San Francisco Public Utilities Commission',
    role: 'Watershed Worker (Summer 2026)',
    summary:
      'Seasonal watershed-maintenance protecting SFPUC reservoir lands: vegetation management, erosion control, fire-break work.',
    roleType: 'temp',
    industries: ['water', 'conservation'],
    location: 'Multiple — SFPUC watersheds (Peninsula, Alameda, Sunol)',
    usEligible: true,
    deadline: null,
    comp: 'Class 7542 city pay scale (hourly seasonal) + full benefits',
    responsibilities: [
      'Clear brush and maintain fire breaks on SFPUC reservoir lands',
      'Re-establish roadside ditches and perform soil-erosion control',
      'Operate chainsaws, weed whips, chippers, hand and power tools',
      'Build and repair property boundary fences; assist with debris removal',
    ],
    requirements: [
      'Strenuous outdoor manual labor in all weather',
      "Valid CA driver's license generally required",
      'Apply via City and County of SF Careers portal',
    ],
    fitScore: 79,
    fitBreakdown: { industry: 22, roleType: 15, accessibility: 20, pay: 13, application: 10, urgency: 7, bonus: 5 },
    fitRationale:
      "Felix's City Grazing sustainable-vegetation work + groundskeeper experience map perfectly. Bay Area location — no relocation friction from USF.",
    applyUrl: 'https://careers.sf.gov/role/?id=3743990011799806',
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
  // 8 — ACE-EPIC Hot Springs Landscape Stewardship (AR)
  // ------------------------------------------------------------------
  {
    id: 'ace-epic-hosp-landscape-2605',
    org: 'American Conservation Experience — EPIC',
    role: 'Landscape Stewardship Corps Member — Hot Springs National Park',
    summary:
      '26-week ACE-EPIC placement rehabilitating historic flowerbeds, trees, and irrigation at Hot Springs National Park.',
    roleType: 'fellowship',
    industries: ['conservation', 'nonprofit'],
    location: 'Hot Springs, AR',
    usEligible: true,
    deadline: null,
    comp: 'AmeriCorps living allowance + $125/wk housing allowance + $1,000 professional development funds · 26-wk term starting May/June 2026',
    responsibilities: [
      'Rehabilitate historic flowerbeds, plantings, and turf across the park',
      'Manage irrigation systems and assist with water-conservation upgrades',
      'Prune historic and specimen trees and shrubs under NPS supervision',
      'Document landscape work and contribute to long-term stewardship plans',
    ],
    requirements: [
      'US citizen or legal permanent resident, age 18+',
      'Comfortable with manual outdoor work in heat and humidity',
      'Commit to full 26-week term',
    ],
    fitScore: 78,
    fitBreakdown: { industry: 22, roleType: 18, accessibility: 20, pay: 7, application: 10, urgency: 7, bonus: 5 },
    fitRationale:
      "Felix's City Grazing sustainable-vegetation work + groundskeeper experience map directly onto landscape stewardship. NPS network for future federal hiring.",
    applyUrl: 'https://usaconservation.applicantpool.com/jobs/1287910.html',
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
  // 9 — Great Smoky Mountains NPS fisheries biotech
  // ------------------------------------------------------------------
  {
    id: 'usajobs-grsm-biotech-fisheries-2605',
    org: 'National Park Service — Great Smoky Mountains National Park',
    role: 'Seasonal Biological Science Technician (Fisheries) — Field Unit Local Hiring',
    summary:
      'Seasonal fisheries biotech supporting aquatic resource monitoring across one of the most biodiverse parks in the system.',
    roleType: 'temp',
    industries: ['conservation', 'wildlife', 'water'],
    location: 'Gatlinburg, TN',
    usEligible: true,
    deadline: '2026-05-15',
    comp: 'GS-05 federal seasonal pay scale · entry June 14, 2026, season Mar–Nov',
    responsibilities: [
      'Assist with fisheries monitoring and aquatic-species data collection across park watersheds',
      'Conduct electrofishing, snorkel surveys, and stream habitat assessments',
      'Maintain field equipment and process samples and data',
      'Support Resource Management and Science Division on long-term monitoring projects',
    ],
    requirements: [
      'Must reside within 50 miles of Sugarlands Headquarters (FUL local-hiring rule) OR relocate',
      'US citizenship and OPM 0404 qualifications',
      'Comfortable wading and working in cold water for extended periods',
    ],
    fitScore: 78,
    fitBreakdown: { industry: 25, roleType: 20, accessibility: 15, pay: 13, application: 10, urgency: 0, bonus: 5 },
    fitRationale:
      "Felix's NPS Marin Headlands coastal-watershed-data work maps cleanly. ⚠️ Deadline passed May 15 + local-hiring rule reduces accessibility — kept on board as a template for the next cycle.",
    applyUrl: 'https://www.usajobs.gov/job/867460700',
    contactEmail: null,
    contactName: null,
    draftEmail: null,
    source: {
      channel: 'company-careers-page',
      url: 'https://www.usajobs.gov',
      discoveredAt: '2026-05-25T00:00:00Z',
    },
    status: 'new',
    extras: '**Deadline passed (May 15, 2026).** Local-hiring rule requires residence within 50 mi of Sugarlands HQ. Track for next cycle and pre-position if Felix wants to go that route.',
  },

  // ------------------------------------------------------------------
  // 10 — Stillwater Sciences botanical field tech (Portland)
  // ------------------------------------------------------------------
  {
    id: 'stillwater-botanical-portland-2605',
    org: 'Stillwater Sciences',
    role: 'Seasonal Botanical Field Technician',
    summary:
      'On-call botanical fieldwork in the Tualatin Basin (Portland metro) supporting riparian restoration monitoring through September 2026.',
    roleType: 'temp',
    industries: ['environmental-consulting', 'conservation'],
    location: 'Portland, OR',
    usEligible: true,
    deadline: null,
    comp: '$24–$29/hr · variable hours, up to 40/wk May–September 2026',
    responsibilities: [
      'Plant identification and vegetation data collection at riparian project sites',
      'Photographic monitoring and canopy-closure (shade) measurements',
      'General field data on restoration plots',
      'Report findings to project leads; support QA of field datasets',
    ],
    requirements: [
      'Strong PNW plant ID skills (junior to mid-level botanist)',
      'Variable on-call hours, field conditions',
      'Reliable transportation in Portland metro',
    ],
    fitScore: 70,
    fitBreakdown: { industry: 20, roleType: 12, accessibility: 18, pay: 15, application: 10, urgency: 7, bonus: 0 },
    fitRationale:
      "Felix's GIS Certificate + env-sci training fit; lighter on PNW-specific plant ID — he'd need to demonstrate transferable botanical skills from coursework.",
    applyUrl: 'https://www.conservationjobboard.com/job-listing-seasonal-botanical-field-technician-portland-oregon/8431460888',
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
]
