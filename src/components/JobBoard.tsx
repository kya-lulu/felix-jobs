import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SearchX } from 'lucide-react'
import type { JobCard as JobCardType } from '../types'
import { JobCard } from './JobCard'

interface Props {
  cards: JobCardType[]
  onOpen: (card: JobCardType) => void
}

export function JobBoard({ cards, onOpen }: Props) {
  if (cards.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-20 text-center">
        <SearchX size={32} strokeWidth={1.5} className="mx-auto text-text-muted mb-4" />
        <p className="font-display text-xl text-text mb-2">Nothing matches those filters.</p>
        <p className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
          Try clearing filters or wait for the Sunday scrape.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {cards.map((card, i) => (
            <JobCard
              key={card.id}
              card={card}
              index={i}
              onOpen={() => onOpen(card)}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
