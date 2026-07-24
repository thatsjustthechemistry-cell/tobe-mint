# TOBESTABLE — Launch Tweet Blast (11 tweets)

Eleven-tweet launch blast, posted individually or as a thread. Each tweet is
self-contained and stays inside what the contract actually enforces — **no
"guaranteed $1" overclaims**. Keep that discipline: a launch-window overclaim is
screenshot-able and quotable.

**Tone rule:** lead with strength, and let the disclosures land as evidence of
rigour rather than as apologies. Every material fact a buyer would want is still
here — team allocation, founder revenue, multisig custody, audit status — but
framed as things worth checking, not things being confessed.

**⚠️ Accuracy rule (added 2026-07-19, after a copy audit against the contract).**
Write marketing copy from the *contract* **and from the launch runbook** — not from
the previous draft. A 2026-07-19 review caught five drifts, all introduced during
tone passes:

| Was | Reality |
|---|---|
| "Below $1 the vault buys back" | `sell_to_vault` needs `floor_active`, set only by `arm_floor` — **authority-only, and only once TOBE reaches $1**. No floor before that. |
| "upgrade authority sits with 2-of-3" | Only true **after Step 5.5**. Before it, upgrade authority is the single deploy wallet. |
| "findings, fixes and scope" | Compressed away the actual scope-gap disclosure. ~200 lines landed after the last full audit round. |
| "no private allocation" | Collided with the disclosed 8-round team allocation in tweet 6. Now "no private sale" — true and non-contradictory. |
| ~~"Burned liquidity"~~ | **FALSE ALARM — the original was correct.** See below. |

🔑 **The "burned liquidity" episode — the most useful lesson in this file.** Two
consecutive review passes "corrected" a claim that was **true**, and the second one
deleted it outright. The program has **two unrelated LP mechanisms**, and both passes
found only the wrong one:

| Mechanism | In the runbook? | What it does |
|---|---|---|
| `lock_lp` / `unlock_lp` | ❌ **never called** | 2-year timelock, then returns the LP |
| `flush_lp_to_raydium` | ✅ **Step 10** | deposits SOL+TOBE into Raydium, then **burns the LP receipt** (`token::burn`, lib.rs:908) |

Pass 1 found `lock_lp`, concluded "it locks, doesn't burn", and weakened the claim.
Pass 2 found `lock_lp` isn't in the runbook and deleted the claim. Neither pass
grepped for `burn`. **Searching for the mechanism you already have in mind will
confirm it and miss the real one — grep for the claim's own keyword before rewriting
it.**

Standing rule, still valid: a claim needs a matching **step in the runbook**, not just
a matching **function in the program**. `lock_lp` proves it — it exists in `lib.rs`
and never runs.

Supersedes the earlier build-in-public runway (teaser → Posts 1–6) — all prior
tweets deleted, this is the full replacement.

**Posting plan (decided 2026-07-19): send all 11 at once, as one thread.**

⏰ **Post after Step 5.5 completes.** That is the only timing constraint, and the
launch sequence satisfies it naturally:

```
Step 5.5  Transfer PROGRAM UPGRADE authority to the DAO   ← tweet 8 becomes true here
Step 6    🟢 Fully fair-launched                          ← post the thread from here on
Step 7    Community mints
```

Tweet **8** claims program **and** upgrade authority both sit with the 2-of-3
multisig — false until Step 5.5, true from then on. Since Step 5.5 lands *before*
Step 6 ("Fully fair-launched"), there is no hold-back needed: announce at Step 6 or
later and every one of the 11 is accurate. Tweets **1** and **11** ("live", "Round 1
is open") are also satisfied by then.

🔴 **Do not post the thread between Step 2 and Step 5.5** — that window is the one
place where tweet 8 would be a false claim about the exact thing it is reassuring
people about.

Account: **@tobe_stable**
Website: **tobestable.com**
Telegram: **t.me/+cqCtGkXO7gA0Yjc0**

---

## 1/ Hook
> $TOBE is live on Solana. 🟢
>
> A hard $1 ceiling, enforced on-chain. 1,024 mint rounds at one fixed price. No presale, no VC round, no private sale.
>
> Fixed supply, hard-capped in code. Protocol liquidity is permanent — its LP tokens are burned on deposit.
>
> All of it verifiable.
>
> tobestable.com

*("no private allocation" → "no private sale": there was no private sale, and this
no longer collides with the disclosed 8-round team allocation in tweet 6.*

*⚠️ **The liquidity claim was removed and then restored — read this before editing it
again.** The original "Burned liquidity" was **correct**. A 2026-07-19 pass found
`lock_lp`/`unlock_lp` (a 2-year timelock) and "corrected" it to "Liquidity locked 2
years"; a second pass found `lock_lp` is never called in `MAINNET_LAUNCH.md` and
dropped the claim entirely. **Both passes were wrong.** There are TWO separate LP
mechanisms in this program:*

*• `lock_lp` / `unlock_lp` — a 2-year timelock. **Never called in the runbook.** This
is the one both bad passes found.*
*• `flush_lp_to_raydium` (Step 10, permissionless) — deposits `pool_sol_reserve` SOL +
matching vault TOBE into Raydium, then **burns the LP receipt** (`token::burn`,
lib.rs:908, "locks liquidity forever"). This is the real mechanism, and it IS in the
runbook.*

*Precision note: this burns the LP for liquidity **the protocol adds** (5 SOL/round
accumulates in `pool_sol_reserve`). The Step 8 community pool creator keeps their own
initial LP — so say "protocol liquidity", not a blanket "all liquidity". Also note
that at announce time (Step 6) no flush has run yet, so this is a mechanism claim like
tweets 3–5, not a statement about current pool state.)*

---

## 2/ What it is
> The name is "TO BE stable" — not "stable already."
>
> It's a direction, not a claim. $TOBE isn't a fiat-backed stablecoin and won't pretend to be one. It's an anti-inflationary token with an on-chain mechanism that drives price toward $1.
>
> Here's exactly how 👇

*(Unchanged — accurate.)*

---

## 3/ The ceiling
> The ceiling is hard.
>
> Above $1, anyone can buy TOBE from the protocol vault at exactly $1 and sell into the market. That arbitrage caps the price.
>
> The vault holds 50% of every single mint — so this side is deep, and it's permissionless. No keeper. No trust required.

*(Unchanged — accurate. The vault genuinely holds 50% of every mint and
`buy_from_vault` is permissionless. It is bounded by a 30% vault floor, which
does not contradict "deep".)*

---

## 4/ The floor
> The floor cannot death-spiral.
>
> Supply is fixed at 1,024 rounds and can NEVER expand — so the UST failure mode is mechanically impossible here. No infinite mint. No LUNA.
>
> The floor is not live on day one, by design: it arms only once TOBE genuinely reaches $1, on a 2-of-3 council vote. From then on the vault buys back from a real SOL reserve that grows every round — bounded by honest reserves, not by printing.

*(Changed: the original read as though the floor were automatically active below
$1. It is not. `sell_to_vault` requires `floor_active`, which only `arm_floor`
sets — authority-only, and gated on TOBE actually reaching $1. Arming early was
the H1 vulnerability, so this delay is deliberate; the copy now says so instead
of implying protection that is not yet switched on.)*

---

## 5/ The numbers
> The entire supply schedule, fixed and public:
>
> 1,024 rounds × 10 SOL. Round 1 mints 524,288 TOBE; every round after mints fewer, down to 512.
>
> 50% to the minter, 50% to the protocol vault.
>
> Same price for me as for you. No early round, no discount.

*(Unchanged — accurate. "Same price for me as for you" holds from round 9; the 8
free team rounds are disclosed explicitly in tweet 6.)*

---

## 6/ Team allocation
> Team allocation: **8 free mint rounds out of 1,024. Under 1%.**
>
> Hard-capped in the contract with no setter — I cannot raise it, ever. Same 50/50 split as every other mint. From round 9 I pay the full 10 SOL like anybody else.
>
> Most launches take 15–20%. Go read the constant.

*(Unchanged — accurate. `TEAM_FREE_MINT_CAP = 8`, immutable, no setter exists.)*

---

## 7/ Founder revenue
> Founder revenue, in full:
>
> No fee on minting. No fee on trading. Zero SOL from mints reaches me — it all goes to liquidity and the vault reserve.
>
> The only revenue: when TOBE trades ≥$1 and someone buys from the vault, proceeds split 50/50 DAO/founder. Enforced in code.

*(Unchanged — accurate. The ≥$1 gate is real: the F2 fix added
`tobe_at_or_above_one_usd` to `buy_from_vault`, so the code now enforces what
this tweet says.)*

---

## 8/ Governance
> No single key can mint extra tokens, drain the vault, change the supply curve, or swap the program bytecode. Program authority **and** upgrade authority both sit with a 2-of-3 Realms multisig.
>
> The 3 council keys are held by 3 different people on separate machines, each with their recovery phrase backed up offline. I hold one — I cannot reach the 2-of-3 threshold on my own. Someone else has to agree.

*(Text unchanged — accurate once the handoff is done, false before it. **No hold-back
needed:** Step 5.5 lands before Step 6 ("Fully fair-launched"), so posting the thread
at Step 6 or later makes this true along with everything else. This is the one tweet
that sets the earliest safe posting time for the whole thread — see the posting plan
above. Before Step 5.5, upgrade authority is still the single deploy wallet
`BzvTL4PY…`.)*

---

## 9/ Audited & tested
> Every instruction in the program has integration test coverage running in CI. Most launches cannot say that.
>
> Self-audited across 8 vulnerability classes and published in full — findings, fixes, and an explicit scope boundary naming the ~200 lines that landed after the last full round and have not been re-audited. It's an AI-assisted audit, not a paid firm, and the report says so plainly.
>
> github.com/thatsjustthechemistry-cell/tobestable-protocol

*(Changed: restored the scope-gap disclosure that commit `5d6c4f2` compressed
into the single word "scope". The report's own headline caveat is that ~201
lines — including two paths that move real SOL — landed after the last full
audit round. Naming it is stronger than hiding it: it is the detail that makes
the rest of the sentence credible.)*

---

## 10/ Community
> Watch the mint rounds land in real time, ask anything, or tell me I'm wrong:
>
> t.me/+cqCtGkXO7gA0Yjc0

*(Unchanged.)*

---

## 11/ CTA
> 1,024 rounds. Round 1 is open.
>
> 524,288 TOBE for 10 SOL — half to you, half to the vault that defends the peg.
>
> Mint: tobestable.com
>
> Don't trust. Verify.

*(Unchanged — accurate.)*
