# jalandharservices.in

Static site for **Jalandhar Services** — painting, cleaning, deep cleaning and
waterproofing across Jalandhar and roughly 40 km around it.

## Commands

```bash
npm run build     # site/data + site/lib + site/styles  →  dist/
npm run check     # audit dist/ — links, canonicals, schema, titles, alt text
npm run serve     # preview dist/ at http://127.0.0.1:8787
npm run deploy    # build, then push dist/ to Cloudflare Pages
```

`npm run check` **fails the build on purpose**. Anything it catches — a broken
internal link, a duplicate title, malformed JSON-LD, an `<img>` without `alt` —
is something that has actually shipped broken on a live site. Do not deploy
past a failure; fix it.

## Where things live

```
site/data/business.mjs    ← NAP, phone, coverage. Single source of truth.
site/data/services.mjs    ← 4 service hubs + 8 sub-service pages
site/data/areas.mjs       ← 6 area pages
site/data/posts.mjs       ← journal articles
site/lib/layout.mjs       ← <head>, schema.org, header, footer
site/lib/ui.mjs           ← hero, cards, rate tables, FAQ, CTA
site/styles/site.css      ← the whole design system
assets/site.js            ← ~4 KB of vanilla JS, no dependencies
functions/api/inquiry.js  ← POST /api/inquiry — the quote form endpoint
scripts/build.mjs         ← generator (36 pages)
scripts/check.mjs         ← post-build audit
scripts/og-card.html      ← source for the 1200×630 social image
```

Everything is generated. **Never hand-edit a file in `dist/`** — it is deleted on
every build. To change a page, change the data or component that produces it.

## The two things that most need your input

1. **`site/data/business.mjs`** — `email`, `social`, `stats`, `reviews` and
   `warranty` are all `null`, and every component that would render them is
   hidden while they are null. Fill one in and it appears everywhere at once
   (footer, schema, contact page). Nothing was invented here: self-published
   star ratings are a structured-data policy violation, and made-up project
   counts are the fastest way to lose a Google spam update.

2. **Photographs.** There are none yet. `our-work.html` says so plainly and
   invites people to call for pictures instead. Real before/after images are the
   single biggest conversion improvement available on this site.

## Lead delivery

`functions/api/inquiry.js` has **no delivery credentials by default and returns
503 on purpose.** The quote form treats any non-2xx as a failure and falls back
to opening WhatsApp with the details pre-filled — so a lead is never silently
dropped. A function that returned 200 while doing nothing would lose real
customers.

To turn delivery on, set these on the Pages project (Settings → Environment
variables, or `npx wrangler pages secret put <NAME>`):

| Variable | Value |
|---|---|
| `TELEGRAM_BOT_TOKEN` | from @BotFather |
| `TELEGRAM_CHAT_ID` | the chat leads should land in |

Optional `ALLOWED_ORIGIN` defaults to `https://jalandharservices.in`.

## Content rules worth keeping

- **Rates are ranges with a "confirmed after a free site visit" caveat.** A flat
  per-sq-ft number quoted without seeing the wall is how contractors eat a loss.
- **`aggregateRating` and `Review` schema are banned** — `check.mjs` actively
  fails any page carrying them. Google treats self-published review markup as
  "self-serving" and it costs rich results outright.
- **Area pages must say something true about that place.** A page that swaps the
  city name into a shared paragraph is a doorway page. If you add an area, add a
  real reason it is different.
- **`robots.txt` carries `Content-Signal: ai-input=yes, ai-train=no`.** That is a
  deliberate choice: be found and cited by AI answer engines, but do not donate
  the content to training. Do not "correct" it to the more restrictive example
  some scanners suggest.
