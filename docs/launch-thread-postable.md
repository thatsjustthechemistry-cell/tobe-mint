# TOBESTABLE — Launch Thread (copy-paste)

**Clean postable copy. Nothing but the 11 tweets.**

For the reasoning behind every line — what was changed, what was verified against the
contract, and which claims have bitten before — see
[`launch-tweets.md`](launch-tweets.md). **Edit that file, not this one**, then copy the
result here. This file exists so launch day is copy → paste → repeat, with no prose to
scroll past.

⏰ **Post after Step 5.5** (see [`LAUNCH_PHASES.md`](../../tobestable-protocol/docs/LAUNCH_PHASES.md) Phase 3).
Send all 11 as one thread.

🔴 **Never post between Step 2 and Step 5.5** — tweet 8 is false in that window.

Account: **@tobe_stable** · Website: **tobestable.com** · Telegram: **t.me/+cqCtGkXO7gA0Yjc0**

---

**1/**

$TOBE is live on Solana. 🟢

A hard $1 ceiling, enforced on-chain. 1,024 mint rounds at one fixed price. No presale, no VC round, no private sale.

Fixed supply, hard-capped in code. Protocol liquidity is permanent — its LP tokens are burned on deposit.

All of it verifiable.

tobestable.com

---

**2/**

The name is "TO BE stable" — not "stable already."

It's a direction, not a claim. $TOBE isn't a fiat-backed stablecoin and won't pretend to be one. It's an anti-inflationary token with an on-chain mechanism that drives price toward $1.

Here's exactly how 👇

---

**3/**

The ceiling is hard.

Above $1, anyone can buy TOBE from the protocol vault at exactly $1 and sell into the market. That arbitrage caps the price.

The vault holds 50% of every single mint — so this side is deep, and it's permissionless. No keeper. No trust required.

---

**4/**

The floor cannot death-spiral.

Supply is fixed at 1,024 rounds and can NEVER expand — so the UST failure mode is mechanically impossible here. No infinite mint. No LUNA.

The floor is not live on day one, by design: it arms only once TOBE genuinely reaches $1, on a 2-of-3 council vote. From then on the vault buys back from a real SOL reserve that grows every round — bounded by honest reserves, not by printing.

---

**5/**

The entire supply schedule, fixed and public:

1,024 rounds × 10 SOL. Round 1 mints 524,288 TOBE; every round after mints fewer, down to 512.

50% to the minter, 50% to the protocol vault.

Same price for me as for you. No early round, no discount.

---

**6/**

Team allocation: 8 free mint rounds out of 1,024. Under 1%.

Hard-capped in the contract with no setter — I cannot raise it, ever. Same 50/50 split as every other mint. From round 9 I pay the full 10 SOL like anybody else.

Most launches take 15–20%. Go read the constant.

---

**7/**

Founder revenue, in full:

No fee on minting. No fee on trading. Zero SOL from mints reaches me — it all goes to liquidity and the vault reserve.

The only revenue: when TOBE trades ≥$1 and someone buys from the vault, proceeds split 50/50 DAO/founder. Enforced in code.

---

**8/**

No single key can mint extra tokens, drain the vault, change the supply curve, or swap the program bytecode. Program authority and upgrade authority both sit with a 2-of-3 Realms multisig.

The 3 council keys are held by 3 different people on separate machines, each with their recovery phrase backed up offline. I hold one — I cannot reach the 2-of-3 threshold on my own. Someone else has to agree.

---

**9/**

Every instruction in the program has integration test coverage running in CI. Most launches cannot say that.

Self-audited across 8 vulnerability classes and published in full — findings, fixes, and an explicit scope boundary naming the ~200 lines that landed after the last full round and have not been re-audited. It's an AI-assisted audit, not a paid firm, and the report says so plainly.

github.com/thatsjustthechemistry-cell/tobestable-protocol

---

**10/**

Watch the mint rounds land in real time, ask anything, or tell me I'm wrong:

t.me/+cqCtGkXO7gA0Yjc0

---

**11/**

1,024 rounds. Round 1 is open.

524,288 TOBE for 10 SOL — half to you, half to the vault that defends the peg.

Mint: tobestable.com

Don't trust. Verify.

---

## Likely replies, and the honest answers

**"Is the liquidity locked?"** — Burned, which is stronger than locked. Two separate
sources, both permanent: `flush_lp_to_raydium` burns the LP receipt for every deposit
the protocol makes, and the **initial seed LP was burned by hand right after the pool
was created**. No LP tokens for this pool exist in anyone's wallet, including mine.

> ⚠️ **This answer depends on you actually burning the seed LP.** The team creates the
> pool (funded via Eis6's free mint), so the initial LP lands in *your* wallet —
> `flush_lp_to_raydium` only burns the protocol's own deposits, never yours. Burn it
> with `spl-token burn <LP_ACCOUNT> <AMOUNT>` immediately after Step 8 and keep the
> tx signature. **If you skip the burn, delete the second sentence above** — you would
> be holding a withdrawable liquidity position while claiming none exists.

**"Why isn't the floor live?"** — Arming it early was a real High-severity finding (H1)
found in audit round 4: anyone could flash-skew the pool across $1, latch the floor, and
drain the reserve below peg. It now arms only when TOBE genuinely reaches $1, on a
council vote. Tweet 4 says so up front rather than hiding it.

**"AI-assisted audit = not audited."** — Fair challenge. The honest answer: 5 adversarial
rounds, every instruction covered by integration tests against cloned mainnet Raydium and
Pyth, `cargo-audit` clean, Sec3 X-Ray clean, and a public report that documents its own
gaps including a Medium finding (F1) that is disclosed rather than fixed. It is not a
paid firm audit and the report says so.

**"You take 50% of vault buys."** — Yes, and it is in tweet 7 and the FAQ. It only fires
when TOBE trades at or above $1, it is enforced in code, and minting pays the team
nothing.
