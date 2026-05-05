# Frontend Phase A — Truth-in-Advertising Design

**Status:** Approved
**Date:** 2026-05-03
**Repo:** tobe-mint
**Scope:** Content-only updates to bring the public-facing site in sync with the deployed Phase 1 + Phase 2 program. No new code paths, no new instruction wiring.

---

## Goal

The site currently makes **materially misleading claims** about where mint payments go, how the peg works, and how liquidity is locked. Phase A fixes the four worst ones so the narrative matches the on-chain reality before any new UI is built on top of it.

## Non-goals

- New on-chain instruction UI (peg arbitrage buttons, flush button) — Phase B
- Live data widgets (Raydium pool depth, peg health) — Phase C
- Visual redesign — leave the glassmorphic dark theme alone
- New languages — keep the 10 existing

---

## What's wrong now

| # | Where | Current claim (wrong) | Reality |
|---|---|---|---|
| 1 | `step1_desc` (How section) | "Payment goes to the project treasury" | None of the 10 SOL goes to the authority. 5 SOL → `pool_sol_reserve`, 5 SOL → `vault_sol_reserve`. |
| 2 | `step3_desc` (How section) | "Vault sells at $1.00 — a hard price ceiling" | Two-way peg via Pyth oracle. Sells above $1, buys below $1. |
| 3 | `faq_a2` (After 1024 rounds) | "Selling only at the SOL ceiling" | Pyth-driven $1 USD peg, both directions. |
| 4 | `faq_a5` (Where SOL goes) | "50% to protocol treasury... fund development" | Zero from mints to authority. Both halves stay in protocol PDAs. |
| 5 | `faq_a8` (What is the vault) | "Releases tokens when market price hits the SOL ceiling" | Pyth peg at $1 USD, two-way (buy + sell), permissionless. |
| 6 | Raydium section, all 5 steps | `seed_pool` + `lock_lp` 2-year timelock narrative | `flush_lp_to_raydium` permissionless + permanent LP burn. |
| 7 | `token-metadata.json` description | "Vault sells only at $1" | Two-way peg + permanent LP burn. |

---

## What gets changed

### 1. `index.html` + `tobestable/index.html` (verbatim copy)

**How section (3 steps near line 904-919):**

- `step1_desc`: rewrite — explain the 5/5 SOL split into PDAs, emphasize zero to team
- `step3_desc`: rewrite — both-way peg via Pyth, permissionless

**FAQ section (around line 1264-1361):**

Update existing answers in place (preserving question text and `data-i18n` keys):

- `faq_a2`: rewrite to mention Pyth + two-way peg
- `faq_a5`: rewrite to make it crystal clear no mint SOL goes to team
- `faq_a8`: rewrite for two-way peg + permissionless arbitrage

Add 3 new FAQ items (after existing q13, English-only with `<!-- TODO: translate after Phase A approval -->` comment):

- `faq_q14`: "What is Pyth and how does the $1 peg work?"
- `faq_q15`: "Who can call flush_lp_to_raydium?"
- `faq_q16`: "What backs the floor when price drops below $1?"

**Raydium section (around line 1408-1463):**

Replace all 5 steps with new narrative:

1. Mint splits SOL into protocol PDAs (none to authority)
2. Authority creates the Raydium pool externally — one-time setup
3. Anyone can call `flush_lp_to_raydium` when ≥1 SOL has accumulated
4. CPI deposit + immediate LP burn — liquidity locked **forever** (not 2 years)
5. Floor protection (vault never drains below 30%) keeps the peg defendable

Update bottom stats (line 1449-1462):
- "2 yr LP Lock Period" → "∞ LP Lock Period (Burned)"
- "$1.00 Vault Floor Price" → "$1.00 Pyth-Anchored Peg" (already accurate, just clarify)

### 2. `lang.js` (translations)

For each of the 7 priority fixes (items 1-7 in the table above), update the corresponding `data-i18n` key's English string AND translations in all 10 languages.

For new FAQ items added to index.html (q14-q16), add new keys with English-only entries plus a comment marker `// TODO i18n` so a future pass can fill in the other 9 languages.

**Translation quality note:** Latin-script languages (de, es, fr, pt, tr) and Russian will get high-quality translations. Japanese, Chinese, Korean translations will be functional but a native review pass would be nice as a follow-up.

### 3. `token-metadata.json`

Update `description` field. Update the `Vault Mechanism` attribute value.

```json
{
  "description": "Anti-inflationary Solana token with 1024 decreasing mint rounds. 50% to minter, 50% to vault. The vault enforces a two-way $1 peg via on-chain Pyth oracle — selling TOBE above $1, buying TOBE below $1. Permanent locked liquidity on Raydium (LP tokens burned). No team tokens, no pre-mine, no insiders, no SOL to the team from mints. Built to be stable.",
  "attributes": [
    ...,
    {
      "trait_type": "Vault Mechanism",
      "value": "Two-way Pyth peg at $1 (sells above, buys below)"
    },
    ...
  ]
}
```

---

## Out of scope (future phases)

| Phase | Scope |
|---|---|
| **B** | New UI: peg arbitrage panel, flush LP button, vault stats widget, connected-wallet personal panel |
| **C** | Live market widgets: Raydium pool reserve reads, spot price vs peg, depth sparkline, time-since-last-flush |
| **future** | Native-speaker review pass for ja/zh/ko translations |
| **future** | Backfill translations for the 3 new FAQs (q14-q16) |

---

## Risks

1. **Translation quality** — machine-quality translations may have awkward phrasing. Mitigated by sticking to factual claims (less idiom-dependent) and limiting scope to 7 items.
2. **Word count growth** — new FAQ adds ~3 items + longer rewrites, slightly lengthening the page. Acceptable.
3. **`tobestable/index.html` divergence** — must remember to sync. (Both files are currently identical; we'll keep them so.)

## Test plan

- Diff the rendered English content against the deployed program's behavior on devnet — every claim should be verifiable on-chain
- Switch language to each of the 10 in browser preview, confirm the 7 priority fixes show translated text (not English fallback)
- Confirm the 3 new FAQ items render in English in all language modes (acceptable per i18n strategy C)
- Validate `token-metadata.json` parses as valid JSON

## Definition of done

- [ ] All 7 priority fixes updated in index.html + tobestable/index.html
- [ ] All 7 priority fixes translated in lang.js for all 10 languages
- [ ] 3 new FAQ items added in English with TODO comments in lang.js
- [ ] `token-metadata.json` description + Vault Mechanism attribute refreshed
- [ ] Browser preview verified in en + 2 other languages (TR + DE recommended)
- [ ] PR opened against `master`
