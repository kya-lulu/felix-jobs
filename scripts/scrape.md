# Weekly Field Notes Scrape

**Trigger:** Sunday evenings, ~7pm PT (via Claude scheduled task)
**Owner agent:** Claude (general-purpose research agent — see `AGENT.md` for the rubric)
**Deliverable:** A pull request (or direct commit) to `src/data/jobs.ts` with new cards appended at the top.

---

## What this script is

This isn't an executable file — it's the prompt body the scheduled task fires at Claude every Sunday. Claude reads it, reads `AGENT.md` for the methodology, and produces updated `src/data/jobs.ts` content.

---

## Prompt body (the scheduled task fires this verbatim)

> You are running the weekly Field Notes scrape for Felix Lin's job board.
>
> **Step 1.** Read `/Users/terrylin/Library/CloudStorage/GoogleDrive-terrylin921@gmail.com/My Drive/AI/Sites/felix-jobs/AGENT.md` end-to-end. The mission, source list, scoring rubric, and email template are all defined there. Treat AGENT.md as load-bearing — do not skip sections.
>
> **Step 2.** Read the current `src/data/jobs.ts` to learn which card IDs already exist. You will dedupe against these.
>
> **Step 3.** Scrape the source list in priority order (A → C → D → E → F → B → G → H). For each source:
> - Use WebFetch / WebSearch to pull the current listings page.
> - Extract only roles posted in the last 14 days.
> - Filter through the scoring rubric in AGENT.md. Auto-skip any role with industry score 0 (defense/crypto/pharma/tax/big-co generic).
> - Generate a candidate card following `src/types.ts` shape.
>
> **Step 4.** Dedupe — drop any candidate whose ID already exists in `jobs.ts`. ID format: `{org-slug}-{role-slug}-{yymm}`.
>
> **Step 5.** Score each survivor. Drop anything <55. Keep the top 8–12 new cards.
>
> **Step 6.** For roles with a `contactEmail`, draft the `draftEmail` field using the template in AGENT.md. Personalize the one-sentence hook based on the posting content. Reference Felix's profile from `src/data/profile.ts` for any qualifier lines.
>
> **Step 7.** Append the new cards to `src/data/jobs.ts` at the **top** of the `SEED_JOBS` array (newest-first). Do not remove existing cards — Felix may still be acting on them. The dataset grows; old cards rotate out when their deadlines pass and Felix marks them `passed`.
>
> **Step 8.** Run `cd "/Users/terrylin/Library/CloudStorage/GoogleDrive-terrylin921@gmail.com/My Drive/AI/Sites/felix-jobs" && npx tsc --noEmit && npx vite build` to confirm the data file still type-checks and the site builds. If anything fails, fix it before continuing.
>
> **Step 9.** Append an entry to AGENT.md's "Update log" table with today's date, the number of new cards, and the sources that yielded them.
>
> **Step 10.** If the project is connected to git: `cd ... && git add . && git commit -m "Weekly scrape — {N} new cards · {date}" && git push`. Vercel will auto-deploy. If not connected, surface the diff in the response so Terry can review.
>
> **Step 11.** Reply with a short summary: total new cards added, top fit pick with one-line reason, and any source that yielded zero (which may need maintenance).
>
> **Time budget:** ~30 minutes. If a source is slow or hanging, skip it and note it in the summary.
>
> **Safety:** Don't invent listings. Every card must trace to a real posting URL you fetched. If you can't verify, drop the card.

---

## Manual run (if needed)

To trigger the scrape outside of the schedule, in a new Claude session paste:

> Run the weekly Field Notes scrape — read `/Users/terrylin/Library/CloudStorage/GoogleDrive-terrylin921@gmail.com/My Drive/AI/Sites/felix-jobs/scripts/scrape.md` and follow the prompt body.

---

## When to revise this script

- A source gets too noisy / changes structure → update the methodology line for that source.
- The scoring rubric in AGENT.md changes → no edit needed here, Claude reads AGENT.md fresh each run.
- Felix's profile changes (e.g. relocates, narrows preferences) → edit `src/data/profile.ts`, no edit to this script.
- The card schema changes → edit `src/types.ts` and update AGENT.md's "Card schema" reference.

---

*Last updated: 2026-05-25 · [source: cowork/laptop]*
