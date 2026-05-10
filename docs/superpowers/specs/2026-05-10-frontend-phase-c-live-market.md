# Frontend Phase C — Live Market Design

**Status:** Approved
**Date:** 2026-05-10
**Repo:** tobe-mint
**Scope:** Add a "Live Market" section that displays real-time Raydium TOBE/wSOL pool depth, spot price, and peg deviation. Read-only, no new on-chain instructions.

## Goal

Phase A and B made the on-chain capabilities visible and interactive. Phase C closes the last informational gap: **what's actually happening on Raydium right now?** Pool depth, spot price, and how far the price is from the $1 USD peg.

## Non-goals

- Sparklines / time-series (would require event indexing infrastructure)
- Multi-pool support (only one pool by design)
- Any new transactions or wallet interactions
- A separate "Phase C2" for advanced charts

## What changes

### Page layout
New `<section id="live-market" class="section reveal">` inserted **between** Dashboard and Tokenomics. Self-contained card grid following established pattern.

### 4 cards in the new section
| Card | Source | Computation |
|---|---|---|
| Pool TOBE Depth | Token account at `raydium_token_X_vault` (where X = 0 if `tobe_is_token_0`, else 1) | amount / 1e9 |
| Pool SOL Depth | Token account at the other vault | amount / 1e9 |
| Spot Price (TOBE/SOL) | Both vaults | reserve_sol / reserve_tobe |
| Peg Deviation | Spot × Hermes SOL/USD | (spot_usd / 1.0 - 1) × 100% |

Plus: a small footer link to the pool on Solana Explorer + an empty state ("Pool not yet configured by authority") when `raydium_pool_state == default Pubkey`.

### New JS functions
- `pollRaydiumPoolReserves(state)` — `getMultipleAccountsInfo` of the two pool vaults, decodes amounts at byte offset 64
- `cachedFetchSolUsdPrice()` — wraps existing `fetchSolUsdPriceUpdate()` with 30-second cache
- `updateLiveMarketCards(state, reserves, solUsd)` — renders all 4 cards
- Wire into existing `refreshFromChain()` after vault stats update

### i18n
~8 new keys × 10 languages: `lm_section_label`, `lm_section_title`, `lm_section_desc`, `lm_pool_tobe`, `lm_pool_sol`, `lm_spot_price`, `lm_peg_deviation`, `lm_pool_not_configured`

### Files
| File | Change |
|---|---|
| `index.html` | New section + 3 new functions + wiring |
| `tobestable/index.html` | Sync |
| `lang.js` | ~8 new keys |
| `tobestable/lang.js` | Sync |

## Edge cases

- Pool not configured → render only the empty state, hide the 4 cards
- Hermes fetch fails → spot price still rendered in SOL terms; peg deviation shows "—"
- Vault token amount = 0 (impossible in practice) → show "—" for spot price
- SOL/USD cache expired but Hermes blocked by network → use last-known cached value, mark "(stale)"

## Definition of done

- [ ] Live Market section renders on devnet with real pool reserves from `4LCqPFitkqpRCQRr5Z7pBixrRkZRNbrW4zqud8zEbEdE`
- [ ] Spot price shown in SOL/TOBE format
- [ ] Peg deviation computed using Hermes SOL/USD
- [ ] Empty state shows when pool unconfigured
- [ ] All 8 i18n keys translated to 10 languages
- [ ] Browser preview: zero console errors
- [ ] PR opened against master

## Risks

1. **Hermes rate limits** — mitigated by 30s cache. If hit, fall back to "—" gracefully.
2. **Token account layout** — wSOL is a regular SPL token, same offset 64 for amount. Verified.
3. **Pool reserves include trading fees** — the displayed depth is the raw vault amount, which includes accumulated fees. Acceptable for a "live market" display; not used for any economic calculation.
