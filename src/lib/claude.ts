import type { JobCard } from '../types'
import { FELIX_PROFILE } from '../data/profile'
import { ROLE_TYPE_LABELS, INDUSTRY_LABELS } from './format'

/**
 * "Ask Claude" — opens claude.ai in a new tab with a pre-loaded prompt
 * containing the card context + Felix's profile + an open invitation for
 * Felix to ask whatever he wants. Zero infra; no API key.
 *
 * claude.ai accepts a `q` query param on /new that becomes the first user
 * message.
 */
export function askClaudeUrl(card: JobCard): string {
  const prompt = buildPrompt(card)
  // claude.ai/new?q=... is the documented way to seed a fresh conversation
  return `https://claude.ai/new?q=${encodeURIComponent(prompt)}`
}

function buildPrompt(card: JobCard): string {
  const lines: string[] = []

  lines.push(
    `I'm Felix Lin and I'm reviewing this role on my job board. Help me think through it — answer questions I ask, push back on weak fits, and surface things I might miss.`,
    ``,
    `# About me`,
    `- ${FELIX_PROFILE.major}, ${FELIX_PROFILE.school}, graduated ${FELIX_PROFILE.graduation}, GPA ${FELIX_PROFILE.gpa}`,
    `- ${FELIX_PROFILE.workAuth}`,
    `- Based: ${FELIX_PROFILE.location}. Willing to relocate.`,
    `- Excited about: ${FELIX_PROFILE.excitedAbout.join(', ')}`,
    `- Avoiding: ${FELIX_PROFILE.avoidIndustries.join(', ')}`,
    `- Honors: ${FELIX_PROFILE.honors.join('; ')}`,
    ``,
    `# Relevant experience`,
    FELIX_PROFILE.experienceSummary,
    ``,
    `# The role I'm looking at`,
    `**${card.role}** at **${card.org}**`,
    `- Type: ${ROLE_TYPE_LABELS[card.roleType]}`,
    `- Industries: ${card.industries.map((i) => INDUSTRY_LABELS[i]).join(', ')}`,
    `- Location: ${card.location}`,
    `- Deadline: ${card.deadline ?? 'Rolling'}`,
    `- Comp: ${card.comp}`,
    ``,
    `**Summary:** ${card.summary}`,
    ``,
    `**What I'd do:**`,
    ...card.responsibilities.map((r) => `- ${r}`),
    ``,
    `**What they want:**`,
    ...card.requirements.map((r) => `- ${r}`),
    ``,
    `**Agent fit rationale (${card.fitScore}/100):** ${card.fitRationale}`,
  )

  if (card.extras) {
    lines.push(``, `**Notes / flags:** ${card.extras}`)
  }

  if (card.applyUrl) {
    lines.push(``, `**Application URL:** ${card.applyUrl}`)
  }

  lines.push(
    ``,
    `---`,
    ``,
    `My first question:`,
  )

  return lines.join('\n')
}
