import React from 'react'
import type { CardStatus } from '../types'

const LABEL: Record<CardStatus, string> = {
  new: 'New',
  interested: 'Interested',
  applied: 'Applied',
  interviewing: 'Interviewing',
  offer: 'Offer',
  passed: 'Passed',
}

const STYLES: Record<CardStatus, string> = {
  new:           'bg-accent/20 text-primary border-accent/40',
  interested:    'bg-primary/15 text-primary border-primary/30',
  applied:       'bg-success/20 text-success border-success/40',
  interviewing:  'bg-warning/25 text-text border-warning/50',
  offer:         'bg-success text-bg border-success',
  passed:        'bg-transparent text-text-muted border-border line-through',
}

interface Props {
  status: CardStatus
  className?: string
}

export function StatusPill({ status, className = '' }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[11px] font-mono uppercase tracking-wider ${STYLES[status]} ${className}`}
    >
      {LABEL[status]}
    </span>
  )
}
