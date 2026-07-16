# TOBESTABLE — Launch Tweet Sequence

Build-in-public runway from the "coming soon" teaser to the mainnet launch tweet.
Each post is self-contained (works standalone or as a thread) and stays inside what
the audited contract actually enforces — **no "guaranteed $1" overclaims** (reserve-backed /
bounded floor, asymmetric peg). Keep that discipline: a launch-window overclaim is
screenshot-able and quotable.

**Cadence:** teaser → wait 2–3 days → Post 1 (superseded, see below), then one post every
2–3 days (Posts 2–5), landing the Post 6 go-live thread on launch day **only once the
operational gates are green** (deploy + council wallets funded, council keys isolated,
devnet governance rehearsed, day-one minter lined up). Post 6 now includes disclosure of
the team allocation and founder revenue split (6b/6c) — post the full thread, not just 6a.
See `docs/MAINNET_LAUNCH.md` pre-launch checklist.

Account: **@tobe_stable**

---

## Post 0 — Teaser ✅ POSTED
> $TOBE — TOBESTABLE is coming to Solana mainnet. 🟢
>
> A hard $1 ceiling. A reserve-backed floor.
> Fair-launch · no presale · no team allocation · multisig-governed.
>
> 1,024 mint rounds. Math, not marketing.
>
> Launching soon. ⏳

---

## Post 1 — Fair launch (superseded, never posted)
Original draft claimed "0 team allocation" — deleted before posting once the disclosed
8-free-mint team allocation was added to the contract. Do not resurrect this copy; the
team-allocation disclosure now lives in the Post 6 launch-day thread below (6b).

---

## Post 2 — Anti-inflationary curve
> Every $TOBE mint round costs the same: 10 SOL.
>
> What changes is what you get.
> Round 1 → 524,288 tokens.
> Round 1024 → 512 tokens.
>
> Same price, fewer tokens each round. Supply is capped, issuance only slows. Early ≠ guaranteed, but early is scarcer. 📉

---

## Post 3 — Peg mechanics (the honest version) ✅ POSTED
> $TOBE's peg isn't magic — it's an on-chain vault, and we're upfront that it's asymmetric:
>
> ▲ Above $1: vault sells TOBE for SOL. Unlimited. A hard ceiling.
> ▼ Below $1: vault buys with a finite SOL reserve. A real floor — but bounded, not infinite.
>
> No UST-style infinite mint. 🧵

---

## Post 3.5 — Launch timing (out-of-sequence, added 2026-07-12)
> $TOBE is launching on Solana mainnet by the end of July. 🟢
>
> Fair launch, no presale, multisig-governed. All 1,024 public mint rounds open to everyone, same rules as the founder.
>
> Final ops checks in progress. Mint goes live the moment they're green.

⚠️ This is a public date commitment. Before posting, confirm the operational gates in `docs/MAINNET_LAUNCH.md` (deploy wallet funded, council wallets funded, upgrade-authority handoff executed on mainnet) are realistically closeable within the month — see also the launch-gates memory note.

---

## Post 4 — Governance & trust
> "Can the team rug?"
>
> The authority can't mint extra tokens and can't change the supply curve — it all runs through PDAs, verifiable on-chain. At launch, control passes to a 2-of-3 multisig DAO.
>
> Don't trust — verify. The contract is open source. 🔍

---

## Post 5 — Audit / credibility
> Before $TOBE touches mainnet, we self-audited it across all 8 vulnerability classes + a focused CPI/token re-audit. Every confirmed finding: fixed.
>
> It's an AI-assisted self-audit — not a paid pro audit, and we say so. Read it yourself → [SELF_AUDIT.md]
>
> 🟢

---

## Post 6 — Go-live thread (LAUNCH DAY ONLY, gates green)

### 6a — Go-live
> It's live. 🟢
>
> $TOBE is on Solana mainnet. 1,024 public mint rounds, 10 SOL each, decreasing supply. A hard $1 ceiling, a reserve-backed floor.
>
> Mint: tobestable.com
> Contract: `Eekx6ftd…`
>
> Everything below is verifiable on-chain. 🧵

### 6b — Team allocation, disclosed
> The team wallet gets 8 free mint rounds (of 1,024 — under 1%), same 50/50 split as every other mint, hard-capped in code, no setter to raise it. Round 9 onward, the team pays the same 10 SOL as everyone.
>
> It's in the contract, the repo, and here — before you send a transaction.

### 6c — Founder revenue, disclosed
> When TOBE trades ≥$1, arbitrage buyers purchase from the protocol vault at $1. That proceeds 50/50 — half to the DAO treasury, half to a founder wallet. It only exists when TOBE is trading above peg.
>
> No fee on minting. No fee on regular trading.

### 6d — Governance
> Program authority is a 2-of-3 Realms multisig — no single key can mint extra, drain reserves, or change the curve. Program *upgrade* authority sits with the same DAO, not a personal wallet — no bytecode-swap backdoor either.
>
> Don't trust — verify: github.com/thatsjustthechemistry-cell/tobestable-protocol

### 6e — CTA
> 1,024 rounds. Round 1 is open now — 524,288 TOBE for 10 SOL, 50% to you, 50% to the protocol vault.
>
> Mint: tobestable.com
