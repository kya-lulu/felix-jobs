import type { FelixProfile } from '../types'

/**
 * Felix's profile snapshot.
 *
 * Last verified: 2026-05-25 by Terry, populated from "Felix Lin Resume 2025.pdf"
 * [source: cowork/laptop]
 */
export const FELIX_PROFILE: FelixProfile = {
  fullName: 'Felix Lin',
  preferredName: 'Felix',
  email: 'linfelix26@gmail.com',
  phone: '713-459-8357',
  location: 'San Francisco, CA (USF) · home base The Woodlands, TX',
  school: 'University of San Francisco',
  major: 'B.S. Environmental Science · Minor in Computer Science',
  graduation: 'May 2026',
  gpa: '3.8',
  honors: ['Graduated with honors', 'GIS (Geographic Information System) Certificate', "President's Volunteer Service Award (Gold)", 'National Merit Commended'],
  workAuth: 'US Citizen — no sponsorship needed',
  targetRoleTypes: [
    'full-time',
    'fellowship',
    'contract',
    'temp',
    'internship',
    'research',
  ],
  targetIndustries: [
    'conservation',
    'marine',
    'cleantech',
    'climate-policy',
    'geothermal',
    'renewables',
    'water',
    'land-trust',
    'wildlife',
    'sustainable-ag',
    'environmental-consulting',
    'climate-tech',
    'nonprofit',
    'startup',
    'international',
  ],
  avoidIndustries: ['defense', 'crypto', 'pharma', 'tax', 'big-co SWE/PM/data'],
  willRelocate: true,
  remoteOk: true,
  excitedAbout: ['nonprofits', 'startups', 'cleantech', 'green tech', 'geothermal'],
  experienceSummary: `**Field & conservation experience**

- **National Park Service — Intern · Marin Headlands, CA** (Oct–Dec 2023)
  Led visitor education programs and maintained trail systems. Conducted field surveys of native fauna/flora and assisted with **GIS mapping of sensitive habitat zones**. Collected and analyzed coastal watershed data to monitor saltwater intrusion patterns.
- **City Grazing — Intern · San Francisco, CA** (May–Jul 2023)
  Implemented sustainable vegetation management using targeted goat grazing for wildfire prevention. Monitored herd health, grazing patterns, and vegetation impact through field data collection.
- **Refuse Refuse — Intern · San Francisco, CA** (Oct–Dec 2022)
  Planned and led neighborhood cleanups. Designed and assembled a portable cigarette-disposal tray solution for local distribution. Ran comms channels + marketing materials in Excel and Canva.

**Service & work-ethic roots**

- Tide — Counter (The Woodlands, TX, Nov 2021–Apr 2022) — trained 7 new hires.
- Raising Cane's — Bird Specialist (Summer 2021) — set new service-time records, 200+ customers/shift.
- Carlton Woods Turf & Plant Care — Assistant Groundskeeper (Summer 2020) — plant care, landscape maintenance; this is what first pulled Felix toward environmental work.
- Churrascos Steakhouse — Busser (Summer 2019).

**Leadership & service**

- **President & Founder** — Sustainable Development Club, USF
- Member — Environmental Engineering & Science Club, SEEDS (Strategies for Ecology Education, Diversity, and Sustainability), Food Recovery Network
- Member (external) — The Woodlands GREEN, Stem4Free, Animal Rescue Club`,
  skills: [
    'GIS (Geographic Information System) — certificated',
    'Field surveys (native fauna/flora identification)',
    'Coastal watershed data collection & analysis',
    'Habitat zone mapping',
    'Sustainable vegetation management',
    'Microsoft Excel · Word · Google Workspace (Docs, Sheets, Slides)',
    'Canva — marketing materials',
    'Mandarin (fluent)',
    'CS minor coursework (USF)',
  ],
}
