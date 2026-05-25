/**
 * Scoring rubric — the same one defined in AGENT.md, made readable.
 * Source of truth for the Rubric modal and ScoreBreakdown component.
 *
 * Keep this in sync with AGENT.md when the rubric changes.
 */

export interface RubricComponent {
  key:
    | 'industry'
    | 'roleType'
    | 'accessibility'
    | 'pay'
    | 'application'
    | 'urgency'
    | 'bonus'
  label: string
  max: number
  description: string
  scale: { score: number; meaning: string }[]
}

export const RUBRIC: RubricComponent[] = [
  {
    key: 'industry',
    label: 'Industry alignment',
    max: 25,
    description:
      'How squarely the org sits in conservation, cleantech, wildlife, water, geothermal, or marine — Felix\'s stated targets.',
    scale: [
      { score: 25, meaning: 'Conservation / cleantech / wildlife / geothermal / water / marine' },
      { score: 15, meaning: 'Adjacent — env consulting, parks, sustainable ag' },
      { score: 5,  meaning: 'Tangential' },
      { score: 0,  meaning: 'On the avoid-list (defense / crypto / pharma / tax / big-co generic) — auto-skip' },
    ],
  },
  {
    key: 'roleType',
    label: 'Role-type fit',
    max: 20,
    description:
      'Whether the role format matches what Felix is open to — field, immersive, structured corps over desk-only positions.',
    scale: [
      { score: 20, meaning: 'Seasonal field tech / conservation corps / AmeriCorps' },
      { score: 15, meaning: 'NGO entry, on-water, hands-on research' },
      { score: 12, meaning: 'Env consulting entry-tech' },
      { score: 10, meaning: 'Utility trainee track' },
      { score: 5,  meaning: 'REU / academic research' },
      { score: 0,  meaning: 'SWE / PM / ESG-comms' },
    ],
  },
  {
    key: 'accessibility',
    label: 'Realistic accessibility',
    max: 20,
    description:
      'How realistic it is for Felix to actually land — degree level, certs, years required.',
    scale: [
      { score: 20, meaning: 'Bachelor\'s-only, no certs needed' },
      { score: 15, meaning: 'Bachelor\'s + soft preference for cert or experience' },
      { score: 10, meaning: 'Needs cert Felix doesn\'t have (HAZWOPER, advanced GIS, dive cert)' },
      { score: 5,  meaning: 'Wants 1-3 years of professional experience' },
    ],
  },
  {
    key: 'pay',
    label: 'Pay honesty',
    max: 15,
    description:
      'Will the role actually support Felix financially. Pay-to-volunteer roles score low unless paired with scholarship.',
    scale: [
      { score: 15, meaning: '>$20/hr or full salary' },
      { score: 10, meaning: 'Stipend ≥ $400/wk + housing' },
      { score: 5,  meaning: 'Stipend ≥ $200/wk' },
      { score: 0,  meaning: 'Unpaid OR Felix pays room & board (without scholarship route)' },
    ],
  },
  {
    key: 'application',
    label: 'Application clarity',
    max: 10,
    description:
      'How easy it is to actually submit. Clear URLs beat vague "contact us" pages.',
    scale: [
      { score: 10, meaning: 'Direct apply URL works' },
      { score: 5,  meaning: 'Email-only application' },
      { score: 0,  meaning: 'Vague "contact us" form' },
    ],
  },
  {
    key: 'urgency',
    label: 'Urgency / timeliness',
    max: 10,
    description: 'How time-pressured the application is — sweet spot is 1-4 weeks out.',
    scale: [
      { score: 10, meaning: 'Deadline 1-4 weeks out' },
      { score: 7,  meaning: 'Rolling' },
      { score: 5,  meaning: 'Deadline >2 months out' },
      { score: 3,  meaning: 'Already filling fast / nearly closed' },
    ],
  },
  {
    key: 'bonus',
    label: 'Bonus (capped +15)',
    max: 15,
    description: 'Stackable bonuses — known-good employer, housing provided, path to permanent.',
    scale: [
      { score: 5, meaning: '+5 known-good employer (TNC, ACE, USFWS, EBMUD, Mote, Tetra Tech)' },
      { score: 5, meaning: '+5 housing provided' },
      { score: 5, meaning: '+5 path to permanent (Pathways, ACE-EPIC, EBMUD trainee)' },
    ],
  },
]

/** Total possible (cap): 25+20+20+15+10+10+15 = 115, capped at 100 */
export const RUBRIC_TOTAL_CAP = 100
