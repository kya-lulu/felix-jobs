import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X, MapPin, Calendar, DollarSign, ExternalLink, Mail, Copy, Check,
  Sparkles, AlertCircle, ListChecks, Quote,
} from 'lucide-react'
import type { JobCard as JobCardType, CardStatus } from '../types'
import { useCardStatus, useCardNotes } from '../lib/storage'
import { FitScore } from './FitScore'
import { StatusPill } from './StatusPill'
import {
  ROLE_TYPE_LABELS, INDUSTRY_LABELS, deadlineMeta,
} from '../lib/format'
import { gmailComposeUrl, copyEmailToClipboard, mailtoUrl } from '../lib/gmail'

interface Props {
  card: JobCardType | null
  onClose: () => void
}

const STATUS_OPTIONS: CardStatus[] = [
  'new', 'interested', 'applied', 'interviewing', 'offer', 'passed',
]

const STATUS_LABEL: Record<CardStatus, string> = {
  new: 'New',
  interested: 'Interested',
  applied: 'Applied',
  interviewing: 'Interviewing',
  offer: 'Offer',
  passed: 'Pass',
}

export function JobDetail({ card, onClose }: Props) {
  return (
    <AnimatePresence>
      {card && <JobDetailInner key={card.id} card={card} onClose={onClose} />}
    </AnimatePresence>
  )
}

function JobDetailInner({ card, onClose }: { card: JobCardType; onClose: () => void }) {
  const [status, setStatus] = useCardStatus(card.id, card.status)
  const [notes, setNotes] = useCardNotes(card.id)
  const [copied, setCopied] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  const deadline = deadlineMeta(card.deadline)

  // Lock body scroll while modal is open
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  // Esc to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Focus the panel on mount
  useEffect(() => {
    panelRef.current?.focus()
  }, [])

  const handleApply = () => {
    if (card.applyUrl) window.open(card.applyUrl, '_blank', 'noopener,noreferrer')
  }

  const handleDraftEmail = () => {
    if (!card.draftEmail || !card.contactEmail) return
    const payload = {
      to: card.contactEmail,
      subject: card.draftEmail.subject,
      body: card.draftEmail.body,
    }
    window.open(gmailComposeUrl(payload), '_blank', 'noopener,noreferrer')
  }

  const handleCopyEmail = async () => {
    if (!card.draftEmail || !card.contactEmail) return
    const ok = await copyEmailToClipboard({
      to: card.contactEmail,
      subject: card.draftEmail.subject,
      body: card.draftEmail.body,
    })
    if (ok) {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    }
  }

  const handleMailto = () => {
    if (!card.draftEmail || !card.contactEmail) return
    window.location.href = mailtoUrl({
      to: card.contactEmail,
      subject: card.draftEmail.subject,
      body: card.draftEmail.body,
    })
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-0 sm:p-4 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-text/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <motion.div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`detail-${card.id}-title`}
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-surface-elevated w-full max-w-3xl rounded-none sm:rounded-xl shadow-2xl my-0 sm:my-8 outline-none"
      >
        {/* Close button — top right */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-11 h-11 flex items-center justify-center rounded-full text-text-muted hover:bg-bg hover:text-text transition-colors z-10"
          aria-label="Close detail"
        >
          <X size={20} strokeWidth={1.75} />
        </button>

        <div className="p-6 sm:p-10">
          {/* Header */}
          <header className="mb-6 pr-12">
            <div className="flex items-start gap-4 mb-4">
              <FitScore score={card.fitScore} />
              <div className="flex-1 min-w-0">
                <p className="font-mono text-xs uppercase tracking-wider text-text-muted mb-1">
                  {card.org}
                </p>
                <h2
                  id={`detail-${card.id}-title`}
                  className="font-display text-2xl sm:text-3xl leading-tight text-text"
                >
                  {card.role}
                </h2>
              </div>
            </div>

            <p className="text-base text-text-muted leading-relaxed">
              {card.summary}
            </p>
          </header>

          <div className="field-rule mb-6" />

          {/* Meta grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 font-mono text-xs">
            <MetaItem icon={<MapPin size={14} strokeWidth={1.75} />} label="Location" value={card.location} />
            <MetaItem
              icon={<Calendar size={14} strokeWidth={1.75} />}
              label="Deadline"
              value={deadline.text}
              valueColor={
                deadline.urgency === 'imminent' ? 'text-urgent' :
                deadline.urgency === 'soon'     ? 'text-warning' :
                                                  undefined
              }
            />
            <MetaItem icon={<DollarSign size={14} strokeWidth={1.75} />} label="Comp" value={card.comp} />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 bg-primary/10 text-primary rounded">
              {ROLE_TYPE_LABELS[card.roleType]}
            </span>
            {card.industries.map((ind) => (
              <span
                key={ind}
                className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 bg-bg text-text-muted rounded border border-border"
              >
                {INDUSTRY_LABELS[ind]}
              </span>
            ))}
          </div>

          {/* Fit rationale */}
          <section className="mb-8">
            <SectionHeading icon={<Sparkles size={14} strokeWidth={1.75} />}>
              Why this fits Felix
            </SectionHeading>
            <p className="text-sm text-text leading-relaxed bg-accent/10 border-l-2 border-accent-strong pl-4 py-2">
              {card.fitRationale}
            </p>
          </section>

          {/* Responsibilities */}
          <section className="mb-8">
            <SectionHeading icon={<ListChecks size={14} strokeWidth={1.75} />}>
              What you'd do
            </SectionHeading>
            <ul className="space-y-2 text-sm text-text leading-relaxed">
              {card.responsibilities.map((r, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent-strong mt-1.5 leading-none">·</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Requirements */}
          <section className="mb-8">
            <SectionHeading icon={<AlertCircle size={14} strokeWidth={1.75} />}>
              What they want
            </SectionHeading>
            <ul className="space-y-2 text-sm text-text leading-relaxed">
              {card.requirements.map((r, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-text-muted mt-1.5 leading-none">·</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Extras (caveats, flags) */}
          {card.extras && (
            <section className="mb-8">
              <SectionHeading icon={<Quote size={14} strokeWidth={1.75} />}>
                Notes
              </SectionHeading>
              <p className="text-sm text-text-muted leading-relaxed whitespace-pre-line">
                {card.extras}
              </p>
            </section>
          )}

          <div className="field-rule mb-6" />

          {/* Actions */}
          <section className="mb-8">
            <SectionHeading>Take action</SectionHeading>

            <div className="flex flex-col sm:flex-row gap-3">
              {card.applyUrl && (
                <button
                  onClick={handleApply}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-bg rounded-md font-mono text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors min-h-[44px]"
                >
                  <ExternalLink size={14} strokeWidth={2} />
                  Apply on site
                </button>
              )}

              {card.draftEmail && card.contactEmail && (
                <>
                  <button
                    onClick={handleDraftEmail}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent-strong text-bg rounded-md font-mono text-xs uppercase tracking-wider hover:bg-accent transition-colors min-h-[44px]"
                  >
                    <Mail size={14} strokeWidth={2} />
                    Open Gmail draft
                  </button>

                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-bg text-text rounded-md font-mono text-xs uppercase tracking-wider hover:bg-border/60 transition-colors min-h-[44px] border border-border"
                  >
                    {copied ? <Check size={14} strokeWidth={2} /> : <Copy size={14} strokeWidth={2} />}
                    {copied ? 'Copied' : 'Copy email'}
                  </button>
                </>
              )}
            </div>

            {card.draftEmail && card.contactEmail && (
              <p className="mt-3 text-[11px] font-mono text-text-muted">
                Gmail open requires Felix is signed in on this device.
                {' '}
                <button onClick={handleMailto} className="underline hover:text-text">
                  Use system mail client instead
                </button>.
              </p>
            )}
          </section>

          {/* Pre-drafted email preview */}
          {card.draftEmail && card.contactEmail && (
            <section className="mb-8">
              <SectionHeading>Draft email preview</SectionHeading>
              <div className="bg-bg rounded-md border border-border p-4 font-mono text-xs leading-relaxed">
                <p className="text-text-muted mb-1">
                  <span className="text-text">To:</span> {card.contactEmail}
                  {card.contactName && <span className="text-text-muted"> · {card.contactName}</span>}
                </p>
                <p className="text-text-muted mb-3">
                  <span className="text-text">Subject:</span> {card.draftEmail.subject}
                </p>
                <pre className="whitespace-pre-wrap font-mono text-xs text-text">
                  {card.draftEmail.body}
                </pre>
              </div>
            </section>
          )}

          {/* Status switcher */}
          <section className="mb-8">
            <SectionHeading>Status</SectionHeading>
            <div className="flex flex-wrap gap-2">
              {STATUS_OPTIONS.map((opt) => {
                const active = status === opt
                return (
                  <button
                    key={opt}
                    onClick={() => setStatus(opt)}
                    className={`px-3 py-2 rounded-md font-mono text-[11px] uppercase tracking-wider min-h-[44px] border transition-colors ${
                      active
                        ? 'bg-primary text-bg border-primary'
                        : 'bg-surface text-text border-border hover:border-primary/40'
                    }`}
                  >
                    {STATUS_LABEL[opt]}
                  </button>
                )
              })}
            </div>
            <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-text-muted">
              <span>Current:</span>
              <StatusPill status={status} />
            </div>
          </section>

          {/* Notes */}
          <section>
            <SectionHeading>Felix's notes</SectionHeading>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Why this caught your eye, recruiter contact, follow-up dates..."
              rows={4}
              className="w-full bg-bg border border-border rounded-md p-3 text-sm text-text placeholder:text-text-muted/60 focus:outline-none focus:border-accent-strong resize-y font-sans leading-relaxed"
            />
            <p className="mt-2 text-[11px] font-mono text-text-muted">
              Notes save automatically to this device.
            </p>
          </section>

          {/* Source footer */}
          <div className="field-rule my-8" />
          <footer className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-mono text-text-muted">
            <span>Source: {card.source.channel}</span>
            <a
              href={card.source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-text inline-flex items-center gap-1"
            >
              source URL <ExternalLink size={11} strokeWidth={1.75} />
            </a>
            <span>Discovered {new Date(card.source.discoveredAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </footer>
        </div>
      </motion.div>
    </motion.div>
  )
}

function MetaItem({
  icon, label, value, valueColor,
}: {
  icon: React.ReactNode
  label: string
  value: string
  valueColor?: string
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-text-muted uppercase tracking-wider mb-1">
        {icon}
        <span>{label}</span>
      </div>
      <div className={`text-sm font-sans text-text leading-snug ${valueColor ?? ''}`}>
        {value}
      </div>
    </div>
  )
}

function SectionHeading({
  icon, children,
}: {
  icon?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <h3 className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted mb-3">
      {icon}
      {children}
    </h3>
  )
}
