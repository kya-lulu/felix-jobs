import React from 'react'
import { motion } from 'framer-motion'
import { Leaf, GraduationCap, MapPin, ShieldCheck, Scale } from 'lucide-react'
import { FELIX_PROFILE } from '../data/profile'

interface Props {
  jobCount: number
  lastScrapeIso?: string
  onOpenRubric: () => void
}

export function Header({ jobCount, lastScrapeIso, onOpenRubric }: Props) {
  const lastScrape = lastScrapeIso
    ? new Date(lastScrapeIso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    : null

  return (
    <header className="bg-bg border-b border-border paper">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-10 pb-12 sm:pt-16 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent-strong mb-3 flex items-center gap-2">
            <Leaf size={12} strokeWidth={1.75} />
            Field Notes · for Felix
          </p>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-6xl leading-[1.05] tracking-tight text-text mb-4">
            A working board of
            <br />
            <span className="italic text-primary">conservation, cleantech,</span>
            <br />
            and field roles.
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-base sm:text-lg text-text-muted max-w-2xl leading-relaxed mb-8">
            Curated weekly by the Field Notes agent. Each card is scored for fit,
            pre-drafted for outreach, and tracked from interest through offer.
            Cards refresh every Sunday evening.
          </p>

          {/* Felix snapshot */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-wider text-text-muted mb-6">
            <span className="flex items-center gap-1.5">
              <GraduationCap size={13} strokeWidth={1.75} />
              {FELIX_PROFILE.school} · {FELIX_PROFILE.major} · {FELIX_PROFILE.graduation}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={13} strokeWidth={1.75} />
              {FELIX_PROFILE.location}
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={13} strokeWidth={1.75} />
              {FELIX_PROFILE.workAuth}
            </span>
          </div>

          {/* Stats line */}
          <div className="field-rule mb-4" />
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-wider text-text-muted">
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
              <span>
                <span className="font-display text-2xl text-text not-italic">{jobCount}</span>
                {' '}roles on the board
              </span>
              {lastScrape && (
                <span>Last scrape · {lastScrape}</span>
              )}
              <span>Next scrape · Sun evening</span>
            </div>
            <button
              onClick={onOpenRubric}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-transparent text-text-muted hover:text-text border border-border hover:border-accent-strong rounded transition-colors min-h-[36px]"
            >
              <Scale size={12} strokeWidth={1.75} />
              How scoring works
            </button>
          </div>
        </motion.div>
      </div>
    </header>
  )
}
