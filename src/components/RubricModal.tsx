import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Scale } from 'lucide-react'
import { RUBRIC } from '../data/rubric'

interface Props {
  open: boolean
  onClose: () => void
}

/**
 * Global rubric reference. Shows what each scoring component means and how
 * the agent assigns numbers. Triggered from the Header.
 */
export function RubricModal({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && <RubricModalInner onClose={onClose} />}
    </AnimatePresence>
  )
}

function RubricModalInner({ onClose }: { onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  useEffect(() => {
    panelRef.current?.focus()
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-0 sm:p-4 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
    >
      <div
        className="fixed inset-0 bg-text/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <motion.div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="rubric-title"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-surface-elevated w-full max-w-2xl rounded-none sm:rounded-xl shadow-2xl my-0 sm:my-8 outline-none"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-11 h-11 flex items-center justify-center rounded-full text-text-muted hover:bg-bg hover:text-text transition-colors z-10"
          aria-label="Close rubric"
        >
          <X size={20} strokeWidth={1.75} />
        </button>

        <div className="p-6 sm:p-10">
          <header className="mb-6 pr-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent-strong mb-3 flex items-center gap-2">
              <Scale size={12} strokeWidth={1.75} />
              How cards get scored
            </p>
            <h2 id="rubric-title" className="font-display text-2xl sm:text-3xl leading-tight text-text mb-3">
              The fit-score rubric
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">
              The agent reads each posting and assigns a number 0-100. Components
              sum (with the bonus capped at +15, total capped at 100). When the
              agent gets it wrong, override the score on the card — your reasons
              feed back into the next scrape.
            </p>
          </header>

          <div className="field-rule mb-6" />

          <div className="space-y-6">
            {RUBRIC.map((row) => (
              <section key={row.key}>
                <div className="flex items-baseline justify-between mb-1.5">
                  <h3 className="font-display text-lg text-text">{row.label}</h3>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                    max {row.max}
                  </span>
                </div>
                <p className="text-sm text-text-muted leading-relaxed mb-3">
                  {row.description}
                </p>
                <dl className="space-y-1 text-xs font-mono">
                  {row.scale.map((step) => (
                    <div key={step.score} className="grid grid-cols-[40px_1fr] gap-3">
                      <dt className="text-accent-strong text-right tabular-nums">
                        {step.score}
                      </dt>
                      <dd className="text-text leading-relaxed">{step.meaning}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            ))}
          </div>

          <div className="field-rule my-6" />

          <footer className="font-mono text-[11px] uppercase tracking-wider text-text-muted leading-relaxed">
            <p>
              Source of truth: <span className="text-text">AGENT.md</span>{' '}
              · Edit there to change the agent's behavior on the next scrape.
            </p>
          </footer>
        </div>
      </motion.div>
    </motion.div>
  )
}
