import { useCallback, useEffect, useState } from 'react'
import type { CardStatus } from '../types'

/**
 * Persistence layer — localStorage. Status + notes per card, also the
 * "dismissed" set so cards stay hidden once Felix passes on them.
 *
 * Keys:
 *   felix-jobs.status.{id} → CardStatus
 *   felix-jobs.notes.{id}  → string (markdown)
 */

const STATUS_PREFIX = 'felix-jobs.status.'
const NOTES_PREFIX = 'felix-jobs.notes.'

function safeGet(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function safeSet(key: string, value: string): void {
  try {
    localStorage.setItem(key, value)
  } catch {
    // localStorage may be disabled (private mode, embedded, etc.) — degrade silently
  }
}

export function useCardStatus(
  cardId: string,
  initial: CardStatus,
): [CardStatus, (next: CardStatus) => void] {
  const [status, setStatus] = useState<CardStatus>(() => {
    const stored = safeGet(STATUS_PREFIX + cardId)
    return (stored as CardStatus) || initial
  })

  const updateStatus = useCallback(
    (next: CardStatus) => {
      setStatus(next)
      safeSet(STATUS_PREFIX + cardId, next)
    },
    [cardId],
  )

  return [status, updateStatus]
}

export function useCardNotes(cardId: string): [string, (next: string) => void] {
  const [notes, setNotes] = useState<string>(() => safeGet(NOTES_PREFIX + cardId) || '')

  const updateNotes = useCallback(
    (next: string) => {
      setNotes(next)
      safeSet(NOTES_PREFIX + cardId, next)
    },
    [cardId],
  )

  return [notes, updateNotes]
}

/** Read all status keys at once — used to compute counts in the header */
export function readAllStatuses(): Record<string, CardStatus> {
  const out: Record<string, CardStatus> = {}
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key && key.startsWith(STATUS_PREFIX)) {
        const value = localStorage.getItem(key)
        if (value) out[key.slice(STATUS_PREFIX.length)] = value as CardStatus
      }
    }
  } catch {
    // ignore
  }
  return out
}

/** Subscribe to localStorage changes so multi-tab updates flow through */
export function useStorageVersion(): number {
  const [version, setVersion] = useState(0)
  useEffect(() => {
    const handler = () => setVersion((v) => v + 1)
    window.addEventListener('storage', handler)
    return () => window.removeEventListener('storage', handler)
  }, [])
  return version
}
