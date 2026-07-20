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
Write marketing copy from the *contract*, not from the previous draft. A 2026-07-19
review caught four drifts that all crept in during tone passes:

| Was | Reality |
|---|---|
| "Burned liquidity" | LP is **locked 2 years** (`LP_LOCK_DURATION`), then `unlock_lp` returns it. Not burned. |
| "Below $1 the vault buys back" | `sell_to_vault` needs `floor_active`, set only by `arm_floor` — **authority-only, and only once TOBE reaches $1**. No floor before that. |
| "upgrade authority sits with 2-of-3" | Only true **after Step 5.5**. Before it, upgrade authority is the single deploy wallet. |
| "findings, fixes and scope" | Compressed away the actual scope-gap disclosure. ~200 lines landed after the last full audit round. |

Supersedes the earlier build-in-public runway (teaser → Posts 1–6) — all prior
tweets deleted, this is the full replacement.

**Posting plan (decided 2026-07-19):**

1. **At launch, post tweets 1–7 and 9–11.** Send after Steps 1–2 are done and the
   mint actually exists — tweets **1** and **11** say "live" / "Round 1 is open".
2. **Hold tweet 8 back.** Send it on its own once **Step 5.5** (upgrade-authority
   handoff to the DAO) has completed and is confirmed on-chain.

🔴 **Why 8 is held:** it claims program **and** upgrade authority both sit with the
2-of-3 multisig. Until Step 5.5 lands, upgrade authority is still the single deploy
wallet `BzvTL4PY…` — so posting it at launch would be a false claim about the exact
thing it is reassuring people about. Necdet chose to hold it rather than soften it to
future tense: the governance point is the strongest in the thread and lands harder as
a true statement than a promised one.

Posting 8 late is also a good moment in its own right — "upgrade authority is now
with the DAO, here is the transaction" is a stronger post than a launch-day promise.

Account: **@tobe_stable**
Website: **tobestable.com**
Telegram: **t.me/+cqCtGkXO7gA0Yjc0**

---

## 1/ Hook
> $TOBE is live on Solana. 🟢
>
> A hard $1 ceiling, enforced on-chain. 1,024 mint rounds at one fixed price. No presale, no VC round, no private sale.
>
> Fixed supply. Liquidity locked 2 years. All of it verifiable.
>
> tobestable.com

*(Changed: "no private allocation" → "no private sale" — there was no private
sale, and this no longer collides with the disclosed 8-round team allocation in
tweet 6. "Burned liquidity" → "Liquidity locked 2 years" — the contract locks,
it does not burn.)*

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

## 8/ Governance — ⏸️ HELD BACK, post after Step 5.5
> No single key can mint extra tokens, drain the vault, change the supply curve, or swap the program bytecode. Program authority **and** upgrade authority both sit with a 2-of-3 Realms multisig.
>
> The 3 council keys are held by 3 different people on separate machines, each with their recovery phrase backed up offline. I hold one — I cannot reach the 2-of-3 threshold on my own. Someone else has to agree.

*(Text unchanged — it is accurate once the handoff is done, and false before it.
**Decision: hold this tweet back and post it alone after Step 5.5.** Before that,
upgrade authority is the single deploy wallet `BzvTL4PY…`. This is the one tweet
whose truth depends on when you send it — so it is sequenced rather than reworded,
keeping the strong present-tense claim intact.)*

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
