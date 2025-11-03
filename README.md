# AI Writer Tools — Ready-to-Deploy

Paraphraser, Summarizer, and Word Counter built with **Next.js (App Router)** + **Tailwind**.  
Monetize with AdSense and writing-tool affiliates.

## Quick Start

```bash
# 1) Install deps
npm i

# 2) Configure env
cp .env.example .env.local
# edit .env.local and set OPENAI_API_KEY

# 3) Run locally
npm run dev

# 4) Deploy to Vercel (recommended)
# - Push to GitHub
# - Import into Vercel
# - Set env vars OPENAI_API_KEY, OPENAI_MODEL (optional), MAX_INPUT_CHARS (optional)
# - Add custom domain in Vercel dashboard
```

## Pages

- `/` — Home/landing
- `/paraphrase` — Paraphraser tool (API powered)
- `/summarize` — Summarizer tool (API powered)
- `/word-counter` — Client-side word & character counter
- `/blog` — Stub index for SEO content

## API

- `POST /api/paraphrase` → { text: string, tone?: "neutral"|"formal"|"simpler"|"creative" }
- `POST /api/summarize` → { text: string }

Both call the OpenAI Chat Completions endpoint using `OPENAI_API_KEY`.  
**Never** expose your key on the client; all calls happen server-side.

## Monetization

- Replace `<AdSlot/>` with your AdSense (or other) ad snippets after approval.
- Add affiliate CTAs below outputs (e.g., Grammarly, ProWritingAid, Copyleaks).
- Publish SEO articles in `/blog` to capture long-tail traffic.

## Notes

- Free tools do not persist user input. If you later add accounts/quotas, update privacy policy.
- Consider rate-limiting and abuse protection if you open it publicly at scale.
- For a Pro tier, add NextAuth + Stripe subscriptions and per-user quotas.

## Blog
10 SEO-focused posts were added in `/app/blog/*` with internal links to the tools. You can edit or expand them freely.
