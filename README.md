# Independence Day Giveaway

Static landing page for OMG Rentals' Independence Day Giveaway — one independent
venue wins the $13,997 Booking Engine, built and run for them, free.

## Structure
- `index.html` — entry shell. Loads React 18 + Babel standalone from CDN and the JSX below (transpiled in-browser).
- `styles.css` / `giveaway.css` — base brand styles + giveaway-specific additions.
- `tweaks-panel.jsx` — shared form-control / edit-mode utilities.
- `sections-mid.jsx` — Mechanism, Differentiators, and the proof-receipts carousel (`ProofGallery`).
- `giveaway-sections.jsx` — hero, prize/value stack, how-to-enter, embedded entry survey, urgency, FAQ, footer.
- `giveaway-app.jsx` — composition + mount.
- `assets/` — proof images, logo, and `colors_and_type.css` (design tokens).

Imported byte-exact from the "Giveaway Page" Claude Design project.

## Deploy
Auto-deploys to Vercel on push to `main` (project `independence-day-giveaway`).
Served statically (`vercel.json`: no build, output `.`).

Production: https://giveaway.omg-rentals.com
