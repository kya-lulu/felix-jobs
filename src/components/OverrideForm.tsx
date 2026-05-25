import React, { useState } from 'react'
import { Pencil, RotateCcw, Check } from 'lucide-react'
import type { FitOverride } from '../types'

interface Props {
  override: FitOverride | null
  agentScore: number
  onSave: (next: FitOverride) => void
  onClear: () => void
}

/**
 * Felix's manual score override.
 * When present, both scores show on the card. The override doesn't change
 * the underlying agent score — it sits beside it as Felix's judgment.
 */
export function OverrideForm({ override, agentScore, onSave, onClear }: Props) {
  const [editing, setEditing] = useState(false)
  const [draftScore, setDraftScore] = useState(override?.score ?? agentScore)
  const [draftReason, setDraftReason] = useState(override?.reason ?? '')

  const handleSave = () => {
    if (draftReason.trim() === '') return
    onSave({
      score: Math.max(0, Math.min(100, Math.round(draftScore))),
      reason: draftReason.trim(),
      timestamp: new Date().toISOString(),
    })
    setEditing(false)
  }

  const handleEdit = () => {
    setDraftScore(override?.score ?? agentScore)
    setDraftReason(override?.reason ?? '')
    setEditing(true)
  }

  // ── Display state — override exists, not editing ────────────────────
  if (override && !editing) {
    return (
      <div className="bg-accent/10 border-l-2 border-accent-strong pl-4 py-3 pr-4 rounded-r">
        <div className="flex items-center justify-between mb-1">
          <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
            Felix's score
          </span>
          <span className="font-display text-xl text-accent-strong not-italic leading-none tabular-nums">
            {override.score}
          </span>
        </div>
        <p className="text-sm text-text leading-snug mb-2">{override.reason}</p>
        <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted/70 mb-3">
          {new Date(override.timestamp).toLocaleDateString('en-US', {
            month: 'short', day: 'numeric', year: 'numeric',
          })}
          {' · '}agent had it at {agentScore}
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleEdit}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface border border-border rounded text-[11px] font-mono uppercase tracking-wider hover:border-accent-strong transition-colors"
          >
            <Pencil size={11} strokeWidth={1.75} /> Edit
          </button>
          <button
            onClick={onClear}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface border border-border rounded text-[11px] font-mono uppercase tracking-wider hover:border-accent-strong transition-colors"
          >
            <RotateCcw size={11} strokeWidth={1.75} /> Use agent score
          </button>
        </div>
      </div>
    )
  }

  // ── Editing state ───────────────────────────────────────────────────
  if (editing) {
    return (
      <div className="bg-bg border border-border rounded-md p-4 space-y-3">
        <div>
          <label className="block font-mono text-[10px] uppercase tracking-wider text-text-muted mb-2">
            Your score (0–100)
          </label>
          <div className="flex gap-3 items-center">
            <input
              type="range"
              min="0"
              max="100"
              value={draftScore}
              onChange={(e) => setDraftScore(Number(e.target.value))}
              className="flex-1"
              aria-label="Score"
            />
            <input
              type="number"
              min="0"
              max="100"
              value={draftScore}
              onChange={(e) => setDraftScore(Number(e.target.value))}
              className="w-16 px-2 py-1.5 bg-surface border border-border rounded text-sm font-mono text-text text-center"
            />
          </div>
        </div>
        <div>
          <label className="block font-mono text-[10px] uppercase tracking-wider text-text-muted mb-2">
            Why? (required — your gut reasoning helps the agent learn)
          </label>
          <textarea
            value={draftReason}
            onChange={(e) => setDraftReason(e.target.value)}
            placeholder="e.g. 'Comp is too low for relocation' or 'Better fit than agent rated — I already know someone there'"
            rows={2}
            className="w-full bg-surface border border-border rounded p-2.5 text-sm text-text placeholder:text-text-muted/60 focus:outline-none focus:border-accent-strong resize-y font-sans leading-relaxed"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleSave}
            disabled={draftReason.trim() === ''}
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-primary text-bg rounded text-[11px] font-mono uppercase tracking-wider hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed min-h-[36px]"
          >
            <Check size={12} strokeWidth={2} /> Save
          </button>
          <button
            onClick={() => setEditing(false)}
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-surface text-text border border-border rounded text-[11px] font-mono uppercase tracking-wider hover:border-text-muted transition-colors min-h-[36px]"
          >
            Cancel
          </button>
        </div>
      </div>
    )
  }

  // ── Empty state — show "Override" button ────────────────────────────
  return (
    <button
      onClick={handleEdit}
      className="inline-flex items-center gap-1.5 px-3 py-2 bg-surface border border-border rounded text-[11px] font-mono uppercase tracking-wider text-text-muted hover:text-text hover:border-accent-strong transition-colors min-h-[36px]"
    >
      <Pencil size={11} strokeWidth={1.75} />
      Override this score
    </button>
  )
}
