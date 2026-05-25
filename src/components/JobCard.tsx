import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, DollarSign } from 'lucide-react'
import type { JobCard as JobCardType } from '../types'
import { FitScore } from './FitScore'
import { StatusPill } from './StatusPill'
import { ROLE_TYPE_LABELS, INDUSTRY_LABELS, deadlineMeta } from '../lib/format'
import { useCardStatus } from '../lib/storage'

interface Props {
  card: JobCardType
  onOpen: () => void
  index: number
}

export function JobCard({ card, onOpen, index }: Props) {
  const [status] = useCardStatus(card.id, card.status)
  const deadline = deadlineMeta(card.deadline)

  const deadlineColor =
    deadline.urgency === 'imminent' ? 'text-urgent' :
    deadline.urgency === 'soon'     ? 'text-warning' :
    deadline.urgency === 'passed'   ? 'text-text-muted line-through' :
                                      'text-text-muted'

  const isPassed = status === 'passed'

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: isPassed ? 0.45 : 1, y: 0 }}
      transition={{ duration: 0.32, delay: Math.min(index * 0.04, 0.4), ease: [0.22, 1, 0.36, 1] }}
      className={`group relative bg-surface border border-border rounded-lg p-5 cursor-pointer transition-shadow duration-200 hover:shadow-[0_4px_24px_-8px_rgba(45,74,53,0.18)] focus-within:shadow-[0_4px_24px_-8px_rgba(45,74,53,0.18)]`}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen()
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${card.role} at ${card.org}, fit score ${card.fitScore}`}
    >
      {/* Top row — fit score + status */}
      <div className="flex items-start justify-between mb-3 gap-3">
        <FitScore score={card.fitScore} />
        <StatusPill status={status} />
      </div>

      {/* Org + role */}
      <div className="mb-3">
        <p className="font-mono text-[11px] uppercase tracking-wider text-text-muted mb-1">
          {card.org}
        </p>
        <h3 className="font-display text-lg leading-tight text-text">
          {card.role}
        </h3>
      </div>

      {/* Summary */}
      <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-3">
        {card.summary}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-primary/10 text-primary rounded">
          {ROLE_TYPE_LABELS[card.roleType]}
        </span>
        {card.industries.slice(0, 2).map((ind) => (
          <span
            key={ind}
            className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-bg text-text-muted rounded border border-border"
          >
            {INDUSTRY_LABELS[ind]}
          </span>
        ))}
      </div>

      {/* Meta row */}
      <div className="flex flex-col gap-1.5 text-xs text-text-muted font-mono">
        <div className="flex items-center gap-1.5">
          <MapPin size={12} strokeWidth={1.75} aria-hidden="true" />
          <span className="truncate">{card.location}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar size={12} strokeWidth={1.75} aria-hidden="true" />
          <span className={deadlineColor}>{deadline.text}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <DollarSign size={12} strokeWidth={1.75} aria-hidden="true" />
          <span>{card.comp}</span>
        </div>
      </div>
    </motion.article>
  )
}
