import type { FelixProfile } from '../types'

/**
 * Felix's profile snapshot.
 *
 * Last verified: 2026-05-25 by Terry [source: cowork/laptop]
 * Open items: experience summary + skills pending fill-in from Felix.
 */
export const FELIX_PROFILE: FelixProfile = {
  fullName: 'Felix Lin',
  preferredName: 'Felix',
  email: 'linfelix26@gmail.com',
  phone: '713-459-8357',
  location: 'San Francisco, CA (University of San Francisco)',
  school: 'University of San Francisco',
  major: 'Environmental Science',
  graduation: 'May 2026',
  gpa: '3.8',
  honors: ['Graduated with honors'],
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
  experienceSummary: '[TBD — Felix to fill in: prior internships, research, field work, clubs, projects]',
  skills: ['[TBD — Felix to fill in]'],
}
