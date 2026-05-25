import React from 'react'
import { Search, X } from 'lucide-react'
import type { CardStatus, RoleType } from '../types'
import { ROLE_TYPE_LABELS } from '../lib/format'

export interface Filters {
  search: string
  roleType: RoleType | 'all'
  status: CardStatus | 'all-active' | 'all'
  sort: 'fit' | 'deadline' | 'newest'
}

interface Props {
  filters: Filters
  onChange: (next: Filters) => void
  totalCount: number
  visibleCount: number
}

export function FilterBar({ filters, onChange, totalCount, visibleCount }: Props) {
  const set = <K extends keyof Filters>(key: K, value: Filters[K]) =>
    onChange({ ...filters, [key]: value })

  const hasActiveFilters =
    filters.search !== '' ||
    filters.roleType !== 'all' ||
    filters.status !== 'all-active'

  const clearAll = () =>
    onChange({ search: '', roleType: 'all', status: 'all-active', sort: 'fit' })

  return (
    <div className="sticky top-0 z-30 bg-bg/95 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4 flex flex-col sm:flex-row gap-3 sm:items-center">
        {/* Search */}
        <div className="relative flex-1 min-w-0">
          <Search
            size={14}
            strokeWidth={1.75}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
            aria-hidden="true"
          />
          <input
            type="search"
            value={filters.search}
            onChange={(e) => set('search', e.target.value)}
            placeholder="Search org, role, location..."
            aria-label="Search jobs"
            className="w-full pl-9 pr-3 py-2.5 bg-surface border border-border rounded-md text-sm font-sans text-text placeholder:text-text-muted/70 focus:outline-none focus:border-accent-strong"
          />
        </div>

        {/* Role type */}
        <FilterSelect
          label="Type"
          value={filters.roleType}
          onChange={(v) => set('roleType', v as Filters['roleType'])}
          options={[
            { value: 'all', label: 'All types' },
            ...Object.entries(ROLE_TYPE_LABELS).map(([value, label]) => ({ value, label })),
          ]}
        />

        {/* Status */}
        <FilterSelect
          label="Status"
          value={filters.status}
          onChange={(v) => set('status', v as Filters['status'])}
          options={[
            { value: 'all-active', label: 'Active (no passed)' },
            { value: 'all', label: 'All including passed' },
            { value: 'new', label: 'New only' },
            { value: 'interested', label: 'Interested' },
            { value: 'applied', label: 'Applied' },
            { value: 'interviewing', label: 'Interviewing' },
            { value: 'offer', label: 'Offer' },
            { value: 'passed', label: 'Passed only' },
          ]}
        />

        {/* Sort */}
        <FilterSelect
          label="Sort"
          value={filters.sort}
          onChange={(v) => set('sort', v as Filters['sort'])}
          options={[
            { value: 'fit',      label: 'By fit score' },
            { value: 'deadline', label: 'By deadline' },
            { value: 'newest',   label: 'Newest first' },
          ]}
        />
      </div>

      {/* Count + clear */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pb-3 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-text-muted">
        <span>
          {visibleCount} of {totalCount} {visibleCount === 1 ? 'role' : 'roles'}
        </span>
        {hasActiveFilters && (
          <button
            onClick={clearAll}
            className="inline-flex items-center gap-1 hover:text-text transition-colors"
          >
            <X size={11} strokeWidth={1.75} />
            Clear filters
          </button>
        )}
      </div>
    </div>
  )
}

function FilterSelect({
  label, value, onChange, options,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  options: { value: string; label: string }[]
}) {
  return (
    <label className="relative flex-shrink-0">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
        className="appearance-none bg-surface border border-border rounded-md text-sm font-sans text-text pl-3 pr-8 py-2.5 cursor-pointer focus:outline-none focus:border-accent-strong"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {label} · {opt.label}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted"
        width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"
      >
        <path d="M1 3.5l4 4 4-4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </label>
  )
}
