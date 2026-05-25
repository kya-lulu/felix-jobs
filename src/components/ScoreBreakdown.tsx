import React from 'react'
import type { FitBreakdown } from '../types'
import { RUBRIC } from '../data/rubric'

interface Props {
  breakdown: FitBreakdown
  total: number
}

/**
 * Component-level fit-score decomposition. Shows each rubric category, the
 * card's score for it, the max possible, and a mini bar.
 */
export function ScoreBreakdown({ breakdown, total }: Props) {
  return (
    <div className="bg-bg border border-border rounded-md p-4 font-mono text-xs">
      <div className="space-y-2.5">
        {RUBRIC.map((row) => {
          const value = breakdown[row.key]
          const pct = Math.max(0, Math.min(100, (value / row.max) * 100))
          return (
            <div key={row.key} className="grid grid-cols-[1fr_auto_50px] gap-3 items-center">
              <div className="min-w-0">
                <div className="text-text">{row.label}</div>
                <div className="h-1 mt-1 bg-border/60 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary"
                    style={{ width: `${pct}%` }}
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="text-text-muted tabular-nums whitespace-nowrap">
                {value}
                <span className="text-text-muted/60"> /{row.max}</span>
              </div>
              <div className="text-text-muted text-right tabular-nums">
                {Math.round(pct)}%
              </div>
            </div>
          )
        })}
      </div>
      <div className="field-rule my-3" />
      <div className="flex items-center justify-between text-text">
        <span className="uppercase tracking-wider">Agent total (capped 100)</span>
        <span className="font-display text-lg leading-none not-italic">{total}</span>
      </div>
    </div>
  )
}
