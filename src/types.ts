/**
 * Field Notes — type contracts
 *
 * The Card schema is the canonical interface between the agent (scraper) and
 * the UI. Any field added here must also be added to AGENT.md and to the
 * seed data file. Keep `JobCard` lean — anything role-specific that doesn't
 * fit goes in `extras` as freeform markdown.
 */

export type RoleType =
  | 'full-time'
  | 'internship'
  | 'fellowship'
  | 'contract'
  | 'temp'
  | 'research'
  | 'volunteer'

export type Industry =
  | 'conservation'
  | 'marine'
  | 'cleantech'
  | 'climate-policy'
  | 'geothermal'
  | 'renewables'
  | 'water'
  | 'land-trust'
  | 'wildlife'
  | 'sustainable-ag'
  | 'environmental-consulting'
  | 'climate-tech'
  | 'nonprofit'
  | 'startup'
  | 'international'
  | 'other'

export type CardStatus =
  | 'new'           // just scraped, Felix hasn't seen it
  | 'interested'    // saved
  | 'applied'       // application submitted
  | 'interviewing'  // in conversation
  | 'offer'         // received offer
  | 'passed'        // dismissed (with reason)

/**
 * Component-level scoring breakdown. Caps match AGENT.md's rubric.
 * Sum should equal `fitScore` (with bonus capped at 15, total capped at 100).
 */
export interface FitBreakdown {
  industry: number       // 0-25 · industry alignment
  roleType: number       // 0-20 · type of engagement fit
  accessibility: number  // 0-20 · realistic to get
  pay: number            // 0-15 · pay honesty
  application: number    // 0-10 · how to apply
  urgency: number        // 0-10 · deadline timeliness
  bonus: number          // 0-15 · known-good employer / housing / path-to-permanent
}

/**
 * Felix's manual score override. When present, the UI shows BOTH the agent
 * score and Felix's score side-by-side. Persisted to localStorage; the
 * weekly scrape can read it (export endpoint not yet built) to recalibrate.
 */
export interface FitOverride {
  score: number       // Felix's 0-100 score
  reason: string      // why he overrode
  timestamp: string   // ISO datetime
}

export type SourceChannel =
  | 'idealist'
  | 'conservation-job-board'
  | 'climatebase'
  | 'workforclimate'
  | 'terra-do'
  | 'green-jobs-network'
  | 'company-careers-page'
  | 'linkedin'
  | 'handshake'
  | 'usf-career-services'
  | 'word-of-mouth'
  | 'other'

export interface JobCard {
  /** Stable ID. Use kebab-case slug: `{org}-{role}-{yymm}` */
  id: string

  /** Organization name */
  org: string

  /** Job title */
  role: string

  /** One-line summary — what the role actually does, not a copy of the title */
  summary: string

  /** Type of engagement */
  roleType: RoleType

  /** Tags — pick up to 3 */
  industries: Industry[]

  /** Location string. "Remote" | "Hybrid - Oakland, CA" | "Boulder, CO" */
  location: string

  /** Is the org US-based and able to hire a US citizen with no special clearance? */
  usEligible: boolean

  /** Application deadline (ISO date) or null if rolling */
  deadline: string | null

  /** Approximate comp. Use "—" if unlisted. e.g. "$22/hr", "$58-72k", "Stipend $6,000" */
  comp: string

  /** What Felix would actually be doing — 2-4 bullet strings */
  responsibilities: string[]

  /** Hard requirements that matter for fit assessment */
  requirements: string[]

  /** 0-100 fit score from the agent. See AGENT.md for rubric. */
  fitScore: number

  /**
   * Per-component score decomposition. Optional — older cards don't have it.
   * Components sum to fitScore (cap 100). See AGENT.md "Scoring rubric".
   */
  fitBreakdown?: FitBreakdown

  /** One-sentence fit rationale — why the agent rated this score */
  fitRationale: string

  /** Direct application URL (preferred) */
  applyUrl: string | null

  /** Contact email if the role wants email applications */
  contactEmail: string | null

  /** Contact name to address the email to */
  contactName: string | null

  /** Pre-drafted email body — markdown, Felix-personalized */
  draftEmail: {
    subject: string
    body: string
  } | null

  /** Where the agent found this */
  source: {
    channel: SourceChannel
    url: string
    discoveredAt: string  // ISO datetime
  }

  /** Current pipeline status. Defaults to 'new'. Persisted to localStorage. */
  status: CardStatus

  /** Felix's private notes (markdown). Persisted to localStorage. */
  notes?: string

  /** Anything that doesn't fit a structured field — markdown */
  extras?: string
}

/** Felix's profile snapshot — shown in the header, also fed to the agent */
export interface FelixProfile {
  fullName: string
  preferredName: string
  email: string
  phone: string
  location: string
  school: string
  major: string
  graduation: string
  gpa: string
  honors: string[]
  workAuth: string
  targetRoleTypes: RoleType[]
  targetIndustries: Industry[]
  avoidIndustries: string[]
  willRelocate: boolean
  remoteOk: boolean
  excitedAbout: string[]
  experienceSummary: string  // freeform markdown; Felix can fill in later
  skills: string[]
}
