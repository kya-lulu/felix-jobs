/**
 * Gmail compose URL builder.
 *
 * The deployed site is static, so it can't call the Gmail API directly without
 * an OAuth round-trip. Instead, we use Gmail's web compose URL — Felix is
 * presumed logged into Gmail on whatever device he's using; the URL opens a
 * new compose window with to/subject/body pre-filled. Works on desktop and
 * mobile Gmail web.
 *
 * If Gmail isn't available or the user is signed out, the link falls back to
 * the standard `mailto:` URL via the second helper.
 */

interface DraftPayload {
  to: string
  subject: string
  body: string
}

/** Build the Gmail web compose URL */
export function gmailComposeUrl({ to, subject, body }: DraftPayload): string {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to,
    su: subject,
    body,
  })
  return `https://mail.google.com/mail/?${params.toString()}`
}

/** Fallback — open user's default mail client */
export function mailtoUrl({ to, subject, body }: DraftPayload): string {
  const params = new URLSearchParams({ subject, body })
  return `mailto:${to}?${params.toString()}`
}

/** Copy email contents to clipboard. Returns true on success. */
export async function copyEmailToClipboard(payload: DraftPayload): Promise<boolean> {
  const formatted = `To: ${payload.to}\nSubject: ${payload.subject}\n\n${payload.body}`
  try {
    await navigator.clipboard.writeText(formatted)
    return true
  } catch {
    return false
  }
}
