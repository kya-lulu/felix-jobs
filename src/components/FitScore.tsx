import React from 'react'
import { fitBucket } from '../lib/format'

interface Props {
  score: number
  size?: 'sm' | 'md'
}

/**
 * Fit score — a small ring + number. Visual treatment shifts with bucket so
 * Felix can scan the board and see top picks at a glance.
 */
export function FitScore({ score, size = 'md' }: Props) {
  const bucket = fitBucket(score)
  const dim = size === 'sm' ? 36 : 52
  const stroke = size === 'sm' ? 3 : 4
  const r = (dim - stroke) / 2
  const c = 2 * Math.PI * r
  const offset = c - (score / 100) * c

  const colorClass =
    bucket === 'top'    ? 'text-accent-strong'
    : bucket === 'strong' ? 'text-primary'
    : bucket === 'fair'   ? 'text-text-muted'
    :                       'text-text-muted opacity-60'

  const label =
    bucket === 'top'    ? 'Top pick'
    : bucket === 'strong' ? 'Strong'
    : bucket === 'fair'   ? 'Fair'
    :                       'Weak'

  return (
    <div
      className={`flex items-center gap-2 ${colorClass}`}
      role="img"
      aria-label={`Fit score ${score} out of 100 — ${label}`}
    >
      <svg width={dim} height={dim} viewBox={`0 0 ${dim} ${dim}`} aria-hidden="true">
        <circle
          cx={dim / 2}
          cy={dim / 2}
          r={r}
          fill="none"
          stroke="currentColor"
          strokeOpacity={0.18}
          strokeWidth={stroke}
        />
        <circle
          cx={dim / 2}
          cy={dim / 2}
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${dim / 2} ${dim / 2})`}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="central"
          textAnchor="middle"
          className="font-mono"
          style={{ fontSize: size === 'sm' ? 11 : 14, fontWeight: 500, fill: 'currentColor' }}
        >
          {score}
        </text>
      </svg>
      {size === 'md' && (
        <span className="text-[11px] font-mono uppercase tracking-wider">{label}</span>
      )}
    </div>
  )
}
