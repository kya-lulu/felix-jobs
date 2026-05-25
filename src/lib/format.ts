import type { RoleType, Industry } from '../types'

/** Pretty display labels */

export const ROLE_TYPE_LABELS: Record<RoleType, string> = {
  'full-time': 'Full-time',
  internship: 'Internship',
  fellowship: 'Fellowship',
  contract: 'Contract',
  temp: 'Seasonal / temp',
  research: 'Research / REU',
  volunteer: 'Volunteer',
}

export const INDUSTRY_LABELS: Record<Industry, string> = {
  conservation: 'Conservation',
  marine: 'Marine',
  cleantech: 'Cleantech',
  'climate-policy': 'Climate policy',
  geothermal: 'Geothermal',
  renewables: 'Renewables',
  water: 'Water',
  'land-trust': 'Land trust',
  wildlife: 'Wildlife',
  'sustainable-ag': 'Sustainable ag',
  'environmental-consulting': 'Env consulting',
  'climate-tech': 'Climate tech',
  nonprofit: 'Nonprofit',
  startup: 'Startup',
  international: 'International',
  other: 'Other',
}

/** Deadline urgency — null is rolling, else compute days remaining */
export interface DeadlineMeta {
  text: string
  urgency: 'rolling' | 'far' | 'soon' | 'imminent' | 'passed'
}

export function deadlineMeta(deadline: string | null): DeadlineMeta {
  if (!deadline) return { text: 'Rolling', urgency: 'rolling' }
  const target = new Date(deadline + 'T23:59:59Z').getTime()
  const now = Date.now()
  const days = Math.floor((target - now) / (1000 * 60 * 60 * 24))

  if (days < 0) return { text: `Closed ${Math.abs(days)}d ago`, urgency: 'passed' }
  if (days === 0) return { text: 'Closes today', urgency: 'imminent' }
  if (days <= 14) return { text: `${days}d left`, urgency: 'imminent' }
  if (days <= 45) return { text: `${days}d left`, urgency: 'soon' }
  return { text: formatDate(deadline), urgency: 'far' }
}

function formatDate(iso: string): string {
  const d = new Date(iso + 'T00:00:00Z')
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' })
}

/** Fit-score buckets used for visual treatment */
export function fitBucket(score: number): 'top' | 'strong' | 'fair' | 'weak' {
  if (score >= 85) return 'top'
  if (score >= 75) return 'strong'
  if (score >= 60) return 'fair'
  return 'weak'
}
