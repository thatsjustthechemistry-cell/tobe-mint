# Frontend Phase D — Alive Design

**Status:** Approved
**Date:** 2026-07-10
**Repo:** tobe-mint
**Scope:** Make the whole site feel alive: ambient motion + live on-chain pulse + cursor reactivity on every section, coordinated by one small "LifeEngine" that absorbs the page's existing life systems instead of duplicating them. No new libraries, no build step, no fabricated data.

## Goal

The site already has the *mechanics* of life (particles, tilt cards, a tx feed, an onLogs listener, animated counters) but still reads as static: effects are too subtle, scattered across independent init functions, and chain activity is buried in one dashboard widget instead of pulsing through the page. Phase D turns the existing systems up and wires them together: the page breathes on its own (motion), shows real chain activity everywhere (pulse), and responds to the visitor (reactivity).

User-approved direction (2026-07-10, visual companion session):
1. All three flavors: **A** cinematic motion, **B** live pulse, **C** reactive.
2. Scope: **everything, everywhere** — every section gets the treatment.
3. Live data source pre-mainnet: **real devnet feed, visibly labeled** — no simulation, no fabricated activity.
4. Architecture: **one LifeEngine** (single ticker, section wake/sleep, one data bus).

## Non-goals

- WebGL / three.js / shader backgrounds (rejected for weight + mobile risk)
- The mainnet flip itself (stays in held PR #13; Phase D must be compatible with it)
- Simulated/demo activity feeds of any kind
- Restructuring lang.js (only additive keys)
- New network calls beyond what exists (feed + websocket are absorbed, not duplicated)

## Existing systems absorbed or extended (the inventory)

All line refs are to root `index.html` (mirror gets identical changes).

| Existing system | Phase D decision |
|---|---|
| `initChainListener()` — `onLogs(programId)` websocket (~3691) | **Absorbed.** Its callback now publishes to `dataBus` (`bus.emit('mint', …)`); stays the page's ONLY subscription. Gains reconnect-with-backoff. |
| `loadTxFeed()` — `getSignaturesForAddress(20)` + per-tx parse (~2421) | **Absorbed.** Becomes the bus's history source on load; existing dashboard feed UI re-renders from bus data; hero ticker + footer heartbeat subscribe to the same events. One fetch pipeline, N consumers. |
| `initHeroParticles()` — infinite rAF, 12 particles on hero canvas (~2530) | **Folded into the engine ticker.** Its `animate()` body becomes a ticker callback (same canvas, one draw path). Particle count raised to ≤24 desktop / 12 mobile. This is the one existing animation refactored — everything else is untouched. |
| `initTiltCards()` — ±4° tilt + glow on `[data-tilt]` (~2473) | **Extended, not re-implemented.** It stays the only tilt code; Phase D adds `data-tilt` to more cards (tokenomics tiles, FAQ container cards) and gates the handler through engine wake/sleep + kill-switches. Existing ±4° kept. |
| `initMagneticButton()` — magnetic pull on mint button (~2516) | **Extended.** Same function applied to the other primary CTAs (connect wallet, nav CTA). Existing pull parameters kept. |
| Curve canvas tooltip — already scrubbable with Round/Tokens/You-get/Cost tooltip (~3447, HTML ~1086) | **Extended.** Existing tooltip content kept verbatim; Phase D adds only a glowing dot that rides the curve at the scrub position. |
| `initCounters()` + `counterObserver` — count-up on scroll (~2329) | **Coexists untouched.** Already observer-gated. Phase D only adds a one-shot digit shimmer when a *live* value changes post-count-up (bus-driven). |
| `revealObserver`, scroll-progress bar, orbs, confetti, `fetchSolPrice()` 5-min loop (~1839) | **Coexist untouched.** `fetchSolPrice` result is re-broadcast on the bus (`bus.emit('sol-price', v)`); the bus's SOL/USD source is THIS fetch, not the Pyth/Hermes one (~2043), which stays mint-flow-only. |
| `timeSince()` — English-hardcoded relative time (~2465) | **Replaced by one i18n formatter** `formatAgo(ts)` using new lang keys (seconds→"just now", m/h/d). Existing feed UI switches to it; no second formatter. |

## What changes

### LifeEngine (~250 lines, one `<script>` block in index.html)

| Part | Responsibility |
|---|---|
| `ticker` | THE single persistent `requestAnimationFrame` loop page-wide. Callbacks register with a section key; loop skips callbacks of sleeping sections. `initHeroParticles`' loop folds in here. Existing one-shot animations (count-ups, confetti, curve-draw) keep their own short-lived rAFs. |
| `sections` | One additional `IntersectionObserver` over all `<section>` elements; entering view → `wake(key)` (ticker callbacks resume; one-shot sheen fires once per page load), leaving → `sleep(key)` |
| `dataBus` | Tiny pub/sub: `bus.on/emit` for `mint`, `sol-price`, `round-state`. Sources: absorbed `loadTxFeed` (history), absorbed `initChainListener` (live), existing `fetchSolPrice` + `refreshFromChain` (re-broadcast). |

Kill-switches (checked at init and on change):
- `prefers-reduced-motion: reduce` → no motion (particles, orb-boost, shimmer, float, tilt, magnetic, glow off); live numbers update instantly without animation
- `document.hidden` → ticker paused; websocket stays alive
- **Touch device OR viewport < 768px** (one condition, stated once) → cursor glow, tilt, magnetic off; particle count halved; all else on

### Flavor A — ambient motion

- **Hero:** orb opacity 0.04/0.035/0.025 → ~0.10/0.09/0.07; particle field ≤24 (via absorbed hero-canvas callback); one-time shimmer sweep on the `<h1>` on load
- **All sections:** title gets a one-time gradient sheen on first wake; **non-interactive** tiles get slow idle micro-float (CSS animation, ±4px, 5s, staggered). Float and tilt are mutually exclusive per element: `[data-tilt]` elements never get the float class (tilt owns their `transform`); float goes only on elements without tilt. Stat digits shimmer once when a live value changes.

### Flavor B — live pulse (all real data, one pipeline)

UI consumers of the bus:
- **Hero:** one-line activity ticker cycling recent events: `8aVT…9vwH2 minted Round 2 · 2d ago` + `DEVNET` badge. Badge keyed off existing `NETWORK` constant — PR #13's mainnet flip removes it with zero extra work.
- **Dashboard:** existing counters + feed UI now fed from the bus; round progress bar fills to real round fraction
- **Roadmap:** "Devnet Launch" phase gets a pulsing live dot (true statement — it is live)
- **Footer:** chain heartbeat — pulsing dot + `last on-chain event {formatAgo}` + SOL price (from the 5-min CoinGecko fetch via bus)

Feed states (honesty-complete):
- History confirmed empty → `awaiting first mint · devnet`
- History fetch FAILED → `chain feed unavailable · retrying` (never "awaiting first mint" on error), retry with backoff (5s → 30s → 60s cap)
- Websocket drop → auto-resubscribe with same backoff; no UI flash
- Event list capped at 50 in memory; ticker shows newest 10

### Flavor C — reactive

- **Cursor glow:** one fixed-position radial element (~240px, accent ~0.12 alpha), lerped toward pointer inside the ticker; off on touch/<768px/reduced-motion
- **Curve:** glow dot riding the existing scrub position (existing tooltip untouched)
- **Cards:** existing tilt extended to more cards via `data-tilt` (see inventory)
- **Buttons:** existing magnetic behavior applied to remaining primary CTAs
- **FAQ rows:** accent left-glow on hover (CSS only)

### i18n (additive keys, all 10 languages, both lang.js copies)

`alive_just_now`, `alive_ago_m`, `alive_ago_h`, `alive_ago_d`, `alive_minted`, `alive_round`, `alive_awaiting_mint`, `alive_feed_error`, `alive_last_event`, `alive_referral_event`, `alive_devnet_badge`. Ticker/heartbeat strings composed from keys — no hardcoded English. `formatAgo()` consumes the ago-keys.

## Honesty constraints

- Every displayed number is real chain data or a real protocol constant
- Devnet events always badged; badge auto-drops only when `NETWORK === 'mainnet'`
- Real relative timestamps even when unflattering ("14d ago" beats fake-busy)
- Error states never masquerade as empty states (failed fetch ≠ "awaiting first mint")
- No fabricated addresses, counts, or activity

## Performance budget

- Exactly ONE persistent rAF loop page-wide (the ticker, absorbing the hero-particle loop). One-shot animations excluded.
- Tab hidden → ticker paused, ~0% CPU from Phase D code
- Off-screen sections → zero JS work (observer-gated)
- Network: unchanged call count (absorbed pipeline; no new endpoints)
- Added code ≤ ~350 lines JS + ~150 lines CSS per file; no new deps

## Files touched

- `index.html` (root) + `tobestable/index.html` (mirror, identical)
- `lang.js` + `tobestable/lang.js` (additive keys, 10 languages)

## Definition of done

- [ ] Hero ticker cycles real devnet history with DEVNET badge (test mints from PR #25/#27 sessions visible)
- [ ] Feed error state appears when RPC blocked (devtools offline test), recovers on retry
- [ ] Counters, tilt, magnetic, curve tooltip behave exactly as before where they already existed
- [ ] New: sheen on section wake, micro-float on non-tilt tiles, cursor glow, curve dot, roadmap pulse, footer heartbeat
- [ ] `prefers-reduced-motion` → static-but-live; hidden tab 60s → CPU near zero; 375px width clean in both themes
- [ ] Curve scrub math: R1 → 1,048,576; R1024 → 1,024 (`1024×(1025−N)`)
- [ ] All 11 new lang keys present in all 10 languages, both copies; no hardcoded English in new UI
- [ ] Mirrors byte-identical to root files
- [ ] Wallet connect, mint, language switch, theme toggle regression-checked

## Verification

Local serve via `python -m http.server`; both themes; desktop + 375px; reduced-motion emulation; Performance-panel CPU check with tab hidden; devnet feed live check.
