# Frontend Phase B — Protocol Actions Design

**Status:** Approved
**Date:** 2026-05-05
**Repo:** tobe-mint
**Scope:** Surface the on-chain Phase 1 + Phase 2 capabilities (peg arbitrage, flush LP, vault stats, personal wallet view) as user-facing UI.

---

## Goal

The on-chain program supports four user-callable actions that currently have no UI:
- `buy_from_vault(sol_in)` — permissionless arbitrage, vault sells TOBE at $1
- `sell_to_vault(tobe_in)` — permissionless arbitrage, vault buys TOBE at $1
- `flush_lp_to_raydium()` — permissionless deposit of accumulated SOL+TOBE into Raydium, burns LP
- (read-only) Vault stats and personal wallet stats

Phase B adds UI for all four within a single PR, while keeping the project's "vanilla JS, no build step" architecture.

## Non-goals

- Live Raydium pool depth / spot-price reads (Phase C)
- Visual redesign — pure additive content
- Native translation review for Asian languages (separate cleanup pass)
- Server-side anything — site stays static

---

## Page layout decisions

### Existing Dashboard section — extended

The Dashboard already shows live stats (round, total minted, vault balance, current price, etc.). Phase B adds 4 new cards to the same grid, sourced from polling on-chain PDAs:

- `pool_sol_reserve` lamport balance ("LP-pending SOL")
- `vault_sol_reserve` lamport balance ("Floor reserve SOL")
- `raydium_pool_state` pubkey from MintState (linked to explorer if set, else "Not configured")
- "Time since last flush" — derived by checking `pool_sol_balance` deltas (best-effort, may be omitted if too noisy)

### New "Protocol Actions" section — inserted after Mint section

A new `<section id="protocol-actions">` containing four cards in a responsive grid:

1. **Buy from Vault** — sell SOL, get TOBE at $1 (mainnet-only)
2. **Sell to Vault** — sell TOBE, get SOL at $1 (mainnet-only)
3. **Flush LP** — anyone can call when ≥1 SOL pending
4. **My Wallet** — appears only when wallet connected; renders TOBE balance + value at $1 + share

Section header explains "These actions are permissionless — anyone can call them."

---

## Component contracts

### Buy from Vault card

**Inputs:** SOL amount (number input, min 0.001, max wallet balance)
**Reads:** Pyth SOL/USD price → projected TOBE out = `sol * pyth_price`
**On click:**
  1. Check network — if devnet, show "Mainnet only" toast (button shouldn't be clickable but defensive)
  2. Use `window.PythReceiver` to build a versioned transaction:
     - `addPostPriceUpdates([priceUpdateBase64])`
     - `addPriceConsumerInstructions(getPrice => buyFromVaultIx)`
  3. Send + confirm
  4. Toast success with TOBE amount received + tx link

### Sell to Vault card

Mirror of Buy. Inputs: TOBE amount. Reads: Pyth → projected SOL out. Calls `sell_to_vault`.

### Flush LP card

**Reads:** `pool_sol_reserve` PDA balance (poll every 30s)
**State:**
  - If balance < 1 SOL: button disabled, tooltip "Need ≥1 SOL pending"
  - If pool not configured (raydium_pool_state == default): button disabled, tooltip "Pool not yet configured by authority"
  - Otherwise: button enabled, label "Flush X.XX SOL to Raydium"
**On click:**
  1. Build flush_lp_to_raydium tx with all 18 accounts
  2. Send + confirm
  3. Toast success with deposit summary

### My Wallet card

**Reads:** connected wallet's TOBE ATA balance + state.totalMinted
**Renders:**
  - TOBE balance (raw + formatted with decimals)
  - Value at $1 peg = TOBE balance × $1
  - Share of total minted = balance / total_minted as percent
**Empty state:** if no wallet connected, card is hidden entirely (no awkward "connect to see")

---

## Pyth integration

### CDN strategy

Add to `<head>` or top of `<body>`:

```html
<script type="module">
  import { PythSolanaReceiver } from "https://esm.sh/@pythnetwork/pyth-solana-receiver@0.14.0";
  window.PythReceiver = PythSolanaReceiver;
  window.dispatchEvent(new Event('pyth-receiver-ready'));
</script>
```

Non-module code waits for the `pyth-receiver-ready` event before enabling Buy/Sell buttons. Buttons start in "Loading..." state until ready.

### Hermes price update fetch

Browser-side fetch to:
```
https://hermes.pyth.network/v2/updates/price/latest?ids[]=ef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d&encoding=base64
```

Returns base64-encoded price update bytes. Pass to `addPostPriceUpdates([base64])`.

### Network detection

Existing code defines `NETWORK` constant from URL/config. Phase B adds:
```javascript
const PYTH_OK = NETWORK === 'mainnet';
```
Used to disable peg arbitrage UI on devnet.

---

## State refresh model

The page already has `refreshFromChain()` that polls `mint_state` every N seconds. Phase B extends this:

```javascript
async function refreshFromChain() {
  // existing: state account fetch
  // new: poll pool_sol_reserve and vault_sol_reserve PDA balances in parallel
  // new: if wallet connected, refresh user TOBE ATA balance
  // new: update all dashboard cards + Flush button enabled state + My Wallet stats
}
```

---

## i18n additions

~10 new keys, each translated to all 10 languages:

- `pa_section_label`, `pa_section_title`, `pa_section_desc` — Protocol Actions section
- `pa_buy_title`, `pa_buy_button`, `pa_buy_input_label`
- `pa_sell_title`, `pa_sell_button`, `pa_sell_input_label`
- `pa_flush_title`, `pa_flush_button`, `pa_flush_below_threshold`
- `pa_my_wallet_title`, `pa_my_wallet_balance`, `pa_my_wallet_share`
- `pa_mainnet_only_notice`
- Vault stats labels: `vs_lp_pending`, `vs_floor_reserve`, `vs_raydium_pool`

Translation strategy: native translations for all 10 languages (consistent with existing site i18n investment).

---

## Error handling matrix

| Scenario | UX |
|---|---|
| Wallet not connected, action button clicked | Open wallet connect modal (existing flow) |
| Pyth CDN load failure | Buy/Sell cards show "Pyth oracle unavailable. Try again later." |
| Below flush threshold | Flush button disabled, tooltip explains threshold |
| Pool not configured | Flush button disabled, tooltip "Awaiting authority config" |
| Tx simulation fails | Toast: friendly error message with tx link |
| User rejects in wallet | Toast: "Transaction cancelled" |
| Network is devnet + peg arb attempt | Toast: "Peg arbitrage requires mainnet" |
| Invalid input (e.g., 0 SOL) | Inline form error, button disabled |

---

## Test plan

- Browser preview against devnet RPC
- Verify Vault Stats cards populate with on-chain numbers
- Verify Flush button enabled state matches `pool_sol_balance` (currently 0 on devnet, so should show disabled)
- Connect Phantom wallet; verify My Wallet card appears with correct balances
- Click Flush button while disabled → tooltip shows
- Pyth integration: confirm `window.PythReceiver` loads from CDN; Buy/Sell buttons render but disabled with mainnet-only notice
- Switch language to TR + DE; verify new copy translated
- No console errors throughout

## Definition of done

- [ ] All 4 panel components render correctly on devnet
- [ ] Pyth SDK loads via CDN; Buy/Sell render the disabled-mainnet-only state
- [ ] Flush button correctly enables/disables based on pool_sol_balance threshold
- [ ] My Wallet card hides when wallet disconnected, appears with correct stats when connected
- [ ] Vault Stats cards in extended Dashboard show live PDA balances
- [ ] All new i18n keys translated to 10 languages
- [ ] tobestable/index.html and tobestable/lang.js synced from root
- [ ] Browser preview: zero console errors
- [ ] PR opened against master

## Risks

1. **Pyth CDN ESM import** — if `esm.sh` doesn't cleanly transpile the package, fall back to (B) build step or (C) hand-rolled serialization. Implementation plan includes a verification step early.
2. **Bundle size** — esm.sh may serve a large bundle (200KB+). Acceptable for a marketing site; can optimize later with versioned imports if needed.
3. **MintState read for new fields** — the parser already correctly reads all 23 fields per PR #1; Phase B just needs to surface them.
