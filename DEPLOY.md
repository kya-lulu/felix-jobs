# Deploy — Field Notes (Felix Jobs)

Step-by-step to ship `Sites/felix-jobs/` to Vercel. Mirrors the convention from `skills/website-deploy.md` — Google Drive source + GitHub repo + Vercel hosting.

**Pre-flight check** (already done by Claude during scaffold):
- ✓ TypeScript clean: `npx tsc --noEmit`
- ✓ Vite build clean: `npx vite build` (96 kB gzipped JS)
- ✓ Tailwind compiles
- ✓ `.gitignore` excludes `node_modules/`, `dist/`, `.vercel/`

---

## One-time deploy (first machine — your Mac)

Run these in **your Mac Terminal** (not Cowork — Vercel/git auth lives on your machine).

```bash
cd "/Users/terrylin/Library/CloudStorage/GoogleDrive-terrylin921@gmail.com/My Drive/AI/Sites/felix-jobs"

# 1. Initialize git + push to GitHub
git init
git add .
git commit -m "init: Field Notes v1 — Felix's environmental jobs board"
gh repo create kya-lulu/felix-jobs --public --source=. --push

# 2. Deploy to Vercel
vercel --prod
# Prompts:
#   Set up and deploy? Y
#   Which scope?      terrylin921
#   Link to existing? N
#   Project name:     felix-jobs
#   Directory:        ./  (just press enter)
#   Build override?   N  (Vercel auto-detects Vite)
```

Vercel will return a URL like `https://felix-jobs-<hash>.vercel.app`. That's the live site.

---

## Custom domain — `felixlin.one`

Terry owns `felixlin.one`. Pick one of:

| Option | URL | When to use |
|---|---|---|
| **Apex** (recommended) | `felixlin.one` | If this site IS Felix's primary online presence. Simplest URL, most memorable. |
| **Subdomain** | `jobs.felixlin.one` | If the apex is reserved for a future portfolio/landing page. Keeps the job board clearly scoped. |
| **Thematic subdomain** | `fieldnotes.felixlin.one` | Matches the in-app branding ("Field Notes"). Distinctive but harder to remember verbally. |

**Apex setup** (for `felixlin.one`):
- At your registrar's DNS panel, add: **A record** `@` → `76.76.21.21`
- And: **CNAME** `www` → `cname.vercel-dns.com` (so `www.felixlin.one` also works)

**Subdomain setup** (for `jobs.felixlin.one` or `fieldnotes.felixlin.one`):
- Just one record: **CNAME** `jobs` (or `fieldnotes`) → `cname.vercel-dns.com`
- Don't touch the apex `A` record if you want to keep the root open for something else later.

Then in Vercel dashboard → Project `felix-jobs` → Settings → Domains → **Add** → type the full domain → Vercel verifies the DNS automatically.

Propagation: 5–30 minutes. SSL cert provisions automatically once DNS resolves.

---

## Auto-deploy on push

After the first manual deploy, enable in Vercel dashboard:

`Project Settings → Git → Connect Git Repository → kya-lulu/felix-jobs`

Once connected, every `git push` triggers a Vercel rebuild. The weekly Sunday scrape commits + pushes automatically, so the live site refreshes weekly without manual intervention.

---

## When the weekly scrape commits

The scheduled task (`felix-jobs-weekly-scrape`, fires Sun 7pm PT) runs the prompt in `scripts/scrape.md`. If git auto-deploy is wired up, fresh cards appear on the live site within 1-2 minutes of the scrape finishing. If not, run `git push` manually from this folder.

---

## Picking up on another machine

```bash
gh repo clone kya-lulu/felix-jobs
cd felix-jobs
npm install
npm run dev     # local preview on http://localhost:5173
```

---

## Quick troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| Build fails on Vercel | Missing env var, wrong Node version | Check Vercel build log; pin Node 20 in Settings → General → Node Version |
| Gmail draft button does nothing | Felix not signed into Gmail | Tell Felix to sign in; the "Use system mail client" link below the button always works |
| Cards don't update after scrape | Auto-deploy not connected | Connect repo in Vercel Project Settings → Git |
| LocalStorage status lost | Browser cleared / different device | Status is per-device; intentional (see `lib/storage.ts`) |

---

*Created 2026-05-25 · [source: cowork/laptop]*
