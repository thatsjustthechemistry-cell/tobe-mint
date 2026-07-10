# Frontend Phase D — Alive Design

**Status:** Approved
**Date:** 2026-07-10
**Repo:** tobe-mint
**Scope:** Make the whole site feel alive: ambient motion + live on-chain pulse + cursor reactivity on every section, coordinated by one small "LifeEngine". No new libraries, no build step, no fabricated data.

## Goal

The site is technically animated (orbs, reveals, counters) but reads as static — motion is too subtle and nothing on the page visibly *happens*. Phase D makes the protocol's liveness visible: the page breathes on its own (motion), shows real chain activity (pulse), and responds to the visitor (reactivity) — everywhere, not just the hero.

User-approved direction (2026-07-10, visual companion session):
1. All three flavors: **A** cinematic motion, **B** live pulse, **C** reactive.
2. Scope: **everything, everywhere** — every section gets the treatment.
3. Live data source pre-mainnet: **real devnet feed, visibly labeled** — no simulation, no fabricated activity.
4. Architecture: **one LifeEngine** (single ticker, section wake/sleep, one data bus).

## Non-goals

- WebGL / three.js / shader backgrounds (rejected for weight + mobile risk)
- The mainnet flip itself (stays in held PR #13; Phase D must be compatible with it)
- Refactoring the four existing IntersectionObservers or existing animations — the engine runs alongside them
- Simulated/demo activity feeds of any kind
- Restructuring lang.js (only additive keys)

## What changes

### LifeEngine (~300 lines, one `<script>` block in index.html)

| Part | Responsibility |
|---|---|
| `ticker` | Single `requestAnimationFrame` loop; every JS-driven effect registers a callback with a target FPS budget; loop skips callbacks of sleeping sections |
| `sections` | One `IntersectionObserver` over all `<section>` elements; entering view → `wake(section)` (CSS class + JS effects resume, one-shot effects fire once), leaving → `sleep(section)` |
| `dataBus` | Tiny pub/sub: `bus.on('mint', fn)`, `bus.emit('sol-price', v)`. Sources publish; UI elements subscribe |

Kill-switches (checked at engine init and on change):
- `prefers-reduced-motion: reduce` → no motion (particles, orbs-boost, shimmer, float, tilt, glow all off); live numbers still update instantly without count-up animation
- `document.hidden` → ticker fully paused, websocket kept alive
- Viewport < 768px → particle count halved, cursor glow + tilt disabled (no cursor on touch), everything else on

### Flavor A — ambient motion (per section)

- **Hero:** orb opacity raised 0.04/0.035/0.025 → ~0.10/0.09/0.07; particle field (≤24 desktop / 12 mobile, 2–3px, slow rise) drawn on the existing hero canvas; one-time shimmer sweep across the `<h1>` gradient on load and on section wake
- **All other sections:** section title gets a one-time gradient sheen on first wake; cards (`.card`, tokenomics tiles, FAQ items) get slow idle micro-float (staggered delays, ±4px, 5s); stat digits get a single shimmer when their value changes

### Flavor B — live pulse (per section, all real data)

Data sources (all already-configured constants: `PROGRAM_ID = CfdXZe…`, Helius devnet RPC):
- **History on load:** `getSignaturesForAddress(PROGRAM_ID, {limit: 25})` → `getParsedTransactions` → extract mint events (minter, round, amount, referral if present in logs) with real block times
- **Live:** `connection.onLogs(PROGRAM_ID)` → parse and prepend new events
- **Reused:** existing 5-min SOL price fetch and existing `refreshFromChain()` round/vault state — re-broadcast through `dataBus` instead of duplicated fetches

UI consumers:
- **Hero:** one-line activity ticker cycling the most recent events: `8aVT…9vwH2 minted Round 2 · 2d ago` + `DEVNET` badge. Badge text/visibility keyed off the existing `NETWORK` constant, so PR #13's mainnet flip removes it with zero extra work. Empty devnet history → honest fallback: `awaiting first mint · devnet`
- **Dashboard:** existing stat numbers count up on section wake (once), then live-update via bus; round progress bar fills to real round fraction
- **Roadmap:** "Devnet Launch" phase gets a pulsing live dot (real — it is live)
- **Footer:** chain heartbeat — pulsing dot + `last on-chain event N ago` + SOL price, from real feed timestamps

### Flavor C — reactive (page-wide)

- **Cursor glow:** one fixed-position radial-gradient element (~240px, accent at ~0.12 alpha) following the pointer across the entire page via the ticker (lerped, cheap); hidden on touch/reduced-motion
- **Curve section:** existing curve canvas becomes scrubbable — pointermove maps x → round 1..1024, moves a glow dot along the curve, tooltip shows `R{n} → {1024×(1025−n)} TOBE`; touch: tap-drag works the same
- **Cards:** ≤2° perspective tilt toward cursor on hover (CSS transform, JS-set custom properties), accent border glow on hover
- **Primary buttons:** magnetic pull ≤3px toward cursor within 40px proximity
- **FAQ rows:** accent left-glow on hover

### i18n (additive keys, all 10 languages in lang.js)

`alive_minted` ("minted"), `alive_round` ("Round"), `alive_ago_m/h/d` ("m/h/d ago" forms), `alive_awaiting_mint` ("awaiting first mint"), `alive_last_event` ("last on-chain event"), `alive_devnet_badge` ("DEVNET" — likely untranslated but keyed), `alive_referral_event` ("referred a minter"). Ticker strings are composed from keys, never hardcoded English.

## Honesty constraints

- Every displayed number is real chain data or a real protocol constant
- Devnet events always carry the badge; badge auto-drops only when `NETWORK === 'mainnet'`
- Real relative timestamps even when unflattering ("14d ago" is fine; sparse honest beats busy fake)
- No fabricated addresses, counts, or activity of any kind

## Performance budget

- Exactly one `requestAnimationFrame` loop page-wide (existing one-shot anims may run their own short rAFs as today)
- Idle CPU with tab hidden: ~0% from Phase D code (ticker paused)
- Off-screen sections: zero JS work (observer-gated)
- No new network calls beyond the two feed calls on load + one websocket subscription
- Added code target: ≤ ~350 lines JS + ~150 lines CSS per file; no external requests, no new deps

## Files touched

- `index.html` (root) — engine, CSS, section hooks
- `tobestable/index.html` — mirrored copy (existing sync pattern)
- `lang.js` + `tobestable/lang.js` — additive keys, 10 languages

## Verification

1. Local serve (`serve.ps1` / `python -m http.server`), check hero ticker shows the real devnet mint history (test mints from PR #25/#27 sessions exist on devnet)
2. Both themes (dark/light), desktop + 375px mobile width
3. `prefers-reduced-motion` emulation → static-but-live behavior
4. Tab hidden 60s → CPU near zero (Performance monitor)
5. Curve scrub: R1 → 1,048,576; R1024 → 1,024; matches contract math `1024×(1025−N)`
6. Mirror copies byte-identical to root versions
7. Existing flows untouched: wallet connect, mint, language switch, theme toggle
