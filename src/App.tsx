import React, { useMemo, useState } from 'react'
import { Header } from './components/Header'
import { FilterBar, type Filters } from './components/FilterBar'
import { JobBoard } from './components/JobBoard'
import { JobDetail } from './components/JobDetail'
import { SEED_JOBS } from './data/jobs'
import type { JobCard as JobCardType, CardStatus } from './types'
import { readAllStatuses, useStorageVersion } from './lib/storage'
import { deadlineMeta } from './lib/format'

const INITIAL_FILTERS: Filters = {
  search: '',
  roleType: 'all',
  status: 'all-active',
  sort: 'fit',
}

export function App() {
  const [filters, setFilters] = useState<Filters>(INITIAL_FILTERS)
  const [openCard, setOpenCard] = useState<JobCardType | null>(null)

  // Re-render when localStorage changes (multi-tab + within-tab via key swap)
  const storageVersion = useStorageVersion()
  const statuses = useMemo(() => readAllStatuses(), [storageVersion, openCard])

  const allCards = SEED_JOBS
  const lastScrape = allCards
    .map((c) => c.source.discoveredAt)
    .sort()
    .reverse()[0]

  const filtered = useMemo(
    () => applyFilters(allCards, filters, statuses),
    [allCards, filters, statuses],
  )

  return (
    <div className="min-h-screen bg-bg text-text">
      <Header jobCount={allCards.length} lastScrapeIso={lastScrape} />
      <FilterBar
        filters={filters}
        onChange={setFilters}
        totalCount={allCards.length}
        visibleCount={filtered.length}
      />
      <main>
        <JobBoard cards={filtered} onOpen={setOpenCard} />
      </main>
      <JobDetail card={openCard} onClose={() => setOpenCard(null)} />

      <footer className="border-t border-border bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 font-mono text-[11px] uppercase tracking-wider text-text-muted flex flex-wrap items-center justify-between gap-2">
          <span>Field Notes · curated for Felix Lin</span>
          <span>Agent definition: AGENT.md</span>
        </div>
      </footer>
    </div>
  )
}

// ---------------------------------------------------------------
// Filtering + sorting
// ---------------------------------------------------------------

function applyFilters(
  cards: JobCardType[],
  filters: Filters,
  statuses: Record<string, CardStatus>,
): JobCardType[] {
  const effectiveStatus = (c: JobCardType): CardStatus =>
    statuses[c.id] || c.status

  const result = cards.filter((c) => {
    const s = effectiveStatus(c)

    // Status filter
    if (filters.status === 'all-active' && s === 'passed') return false
    if (filters.status === 'all') {
      // pass
    } else if (filters.status !== 'all-active' && s !== filters.status) {
      return false
    }

    // Role type
    if (filters.roleType !== 'all' && c.roleType !== filters.roleType) return false

    // Search
    if (filters.search.trim() !== '') {
      const q = filters.search.toLowerCase()
      const haystack = [
        c.org, c.role, c.summary, c.location,
        c.industries.join(' '),
        c.fitRationale,
      ].join(' ').toLowerCase()
      if (!haystack.includes(q)) return false
    }

    return true
  })

  // Sort
  result.sort((a, b) => {
    if (filters.sort === 'fit') return b.fitScore - a.fitScore
    if (filters.sort === 'newest') {
      return b.source.discoveredAt.localeCompare(a.source.discoveredAt)
    }
    // deadline — closest first; null deadlines (rolling) sort to bottom
    const aDays = daysToDeadline(a.deadline)
    const bDays = daysToDeadline(b.deadline)
    return aDays - bDays
  })

  return result
}

function daysToDeadline(deadline: string | null): number {
  if (deadline === null) return Number.POSITIVE_INFINITY
  const target = new Date(deadline + 'T23:59:59Z').getTime()
  const days = (target - Date.now()) / (1000 * 60 * 60 * 24)
  // Passed deadlines sort to the very bottom
  return days < 0 ? Number.POSITIVE_INFINITY - 1 : days
}
