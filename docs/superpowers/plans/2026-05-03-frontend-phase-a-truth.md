# Frontend Phase A — Truth-in-Advertising Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring the public-facing tobe-mint site in sync with the deployed Phase 1 + Phase 2 program by fixing 7 misleading content claims and adding 3 new FAQ items, with full i18n for the priority fixes.

**Architecture:** Content-only edits across 4 files. No new code paths, no new instruction wiring, no build step. The site is vanilla HTML + JS with `data-i18n="key"` attributes resolved against a `TRANSLATIONS` map in `lang.js` covering 10 languages.

**Tech Stack:** HTML, vanilla JS, JSON. Lives at `C:/Users/NeCDeT/Desktop/tobe-mint`. Already on branch `phase-a-truth-content`.

---

## Spec reference

[`docs/superpowers/specs/2026-05-03-frontend-phase-a-truth-design.md`](../specs/2026-05-03-frontend-phase-a-truth-design.md)

## File structure

| File | Responsibility | Touched by |
|---|---|---|
| `index.html` | Root HTML, copy + structure | Tasks 1-4 |
| `tobestable/index.html` | Verbatim duplicate of root index | Task 5 (sync only) |
| `lang.js` | Translation map: `TRANSLATIONS[key][lang]` | Task 6 (priority fixes), Task 7 (new key stubs) |
| `token-metadata.json` | Off-chain Metaplex metadata | Task 8 |

## i18n key inventory (priority fixes)

| New/edit | Key | Section |
|---|---|---|
| edit | `step1_desc` | How |
| edit | `step3_desc` | How |
| edit | `faq_a2` | FAQ |
| edit | `faq_a5` | FAQ |
| edit | `faq_a8` | FAQ |
| edit | `ray_step1_title` + `ray_step1_desc` | Raydium |
| edit | `ray_step2_title` + `ray_step2_desc` | Raydium |
| edit | `ray_step3_title` + `ray_step3_desc` | Raydium |
| edit | `ray_step4_title` + `ray_step4_desc` | Raydium |
| edit | `ray_step5_title` + `ray_step5_desc` | Raydium |
| edit | `lp_lock_period` (label) | Raydium summary |
| edit | (no key — number-only) "2 yr" → "∞" | Raydium summary |
| new | `faq_q14`, `faq_a14` | FAQ (Pyth peg) |
| new | `faq_q15`, `faq_a15` | FAQ (flush permissionless) |
| new | `faq_q16`, `faq_a16` | FAQ (floor backing) |

---

## Chunk 1: index.html English copy edits

### Task 1: Fix How section (steps 1 + 3)

**Files:**
- Modify: `index.html` (line ~908: `step1_desc`, line ~918: `step3_desc`)

- [ ] **Step 1: Update step1_desc**

```html
<!-- BEFORE (line 908) -->
<div class="step-desc" data-i18n="step1_desc">Every mint round costs exactly 10 SOL. Payment goes to the project treasury. Same price, every round, forever.</div>

<!-- AFTER -->
<div class="step-desc" data-i18n="step1_desc">Every mint round costs exactly 10 SOL. The protocol splits it 5/5: half accumulates for Raydium liquidity, half backs the vault SOL reserve. Zero goes to the team. Same price, every round, forever.</div>
```

- [ ] **Step 2: Update step3_desc**

```html
<!-- BEFORE (line 918) -->
<div class="step-desc" data-i18n="step3_desc">When market price exceeds $1, the vault sells at exactly $1.00 — a hard price ceiling. The floor rises with each round.</div>

<!-- AFTER -->
<div class="step-desc" data-i18n="step3_desc">Two-way $1 peg via on-chain Pyth oracle. Vault sells when price tries to exceed $1. Vault buys when price drops below $1. Both directions are permissionless — anyone can trigger them.</div>
```

- [ ] **Step 3: Verify no other accidental matches**

Run: `grep -n "step1_desc\|step3_desc" index.html`
Expected: only the two lines above match.

---

### Task 2: Fix three existing FAQ answers (a2, a5, a8)

**Files:**
- Modify: `index.html` (lines ~1281, ~1302, ~1323)

- [ ] **Step 1: Update faq_a2**

```html
<!-- AFTER (line ~1281) -->
<div class="faq-a"><div class="faq-a-inner" data-i18n="faq_a2">Minting stops permanently. No more tokens can ever be created. The vault continues to enforce the $1 peg in both directions — selling TOBE for SOL when price tries to exceed $1, buying TOBE with SOL when price drops below. The token becomes fully deflationary: fixed supply, two-way price defense at $1.</div></div>
```

- [ ] **Step 2: Update faq_a5**

```html
<!-- AFTER (line ~1302) -->
<div class="faq-a"><div class="faq-a-inner" data-i18n="faq_a5">Both halves stay inside the protocol. 5 SOL accumulates in the LP-pending PDA — anyone can trigger a deposit into Raydium when at least 1 SOL has built up. The other 5 SOL backs the vault SOL reserve, used to buy TOBE at $1 when the market dips below the peg. <strong>Zero SOL flows to the authority from mints.</strong> The team only earns from arbitrage proceeds when the price reaches $1 (via buy_from_vault sales). Every transaction is trackable on-chain.</div></div>
```

- [ ] **Step 3: Update faq_a8**

```html
<!-- AFTER (line ~1323) -->
<div class="faq-a"><div class="faq-a-inner" data-i18n="faq_a8">Every time someone mints, 50% of the tokens go to the minter and 50% go to a PDA-controlled vault. The vault enforces a two-way $1 peg via on-chain Pyth oracle: it sells TOBE for SOL when the market price tries to exceed $1, and it buys TOBE with SOL (drawn from the vault SOL reserve) when price drops below $1. Both directions are permissionless. The vault grows with every mint.</div></div>
```

- [ ] **Step 4: Verify keys still resolve**

Run: `grep -c "faq_a2\|faq_a5\|faq_a8" index.html`
Expected: 3 (one per key in HTML; lang.js will be updated in Task 6).

---

### Task 3: Add 3 new FAQ items (English-only, with TODO marker)

**Files:**
- Modify: `index.html` (insert after line ~1359, before `</div>` closing `.faq-grid`)

- [ ] **Step 1: Insert 3 new faq-item blocks**

Insert immediately after the `faq_a13` `</div>` block, before the closing `</div>` of `.faq-grid`:

```html
      <!-- TODO i18n: translate q14-q16, a14-a16 to all 10 languages in lang.js -->
      <div class="faq-item">
        <div class="faq-q" onclick="this.parentElement.classList.toggle('open')">
          <span data-i18n="faq_q14">What is Pyth and how does the $1 peg work?</span>
          <span class="faq-arrow">+</span>
        </div>
        <div class="faq-a"><div class="faq-a-inner" data-i18n="faq_a14">Pyth Network is an on-chain price oracle. Our program reads the SOL/USD price directly from Pyth on every peg-related instruction (buy_from_vault, sell_to_vault), validates that the price is fresh (under 60 seconds old) and confident (interval under 1% of price), and uses it to price TOBE at exactly $1 USD. No keeper bot. No admin signer. The math runs entirely on-chain.</div></div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="this.parentElement.classList.toggle('open')">
          <span data-i18n="faq_q15">Who can call flush_lp_to_raydium?</span>
          <span class="faq-arrow">+</span>
        </div>
        <div class="faq-a"><div class="faq-a-inner" data-i18n="faq_a15">Anyone. It's permissionless. Once at least 1 SOL has accumulated in pool_sol_reserve from minting, any wallet can call the instruction. It wraps SOL to wSOL, deposits with proportional TOBE from the vault into the Raydium pool, and burns the LP tokens — all atomically. Callers pay only the transaction fee. There is no admin gating.</div></div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="this.parentElement.classList.toggle('open')">
          <span data-i18n="faq_q16">What backs the floor when price drops below $1?</span>
          <span class="faq-arrow">+</span>
        </div>
        <div class="faq-a"><div class="faq-a-inner" data-i18n="faq_a16">The vault SOL reserve. Every mint sends 5 SOL into this PDA — accumulating up to 5,120 SOL across all 1,024 rounds. When market price drops below $1, anyone can call sell_to_vault: deliver TOBE, receive SOL at $1/TOBE drawn from this reserve. The bought-back TOBE returns to the vault to defend future ceiling breaches. The peg is honest: backed by verifiable on-chain SOL.</div></div>
      </div>
```

- [ ] **Step 2: Verify the count**

Run: `grep -c "class=\"faq-item\"" index.html`
Expected: 16 (was 13, now 13 + 3).

---

### Task 4: Rewrite Raydium section (5 steps + summary stats)

**Files:**
- Modify: `index.html` (lines ~1408-1463)

- [ ] **Step 1: Update each step title + description**

```html
<!-- ray_step1 -->
<h4 data-i18n="ray_step1_title">Mints Split SOL Into Protocol PDAs</h4>
<p data-i18n-html="ray_step1_desc">Every 10 SOL mint splits in two: <span class="raydium-highlight mint">5 SOL</span> accumulates in the LP-pending PDA for future Raydium injection; <span class="raydium-highlight vault">5 SOL</span> backs the vault SOL reserve. <strong>None goes to the authority.</strong></p>

<!-- ray_step2 -->
<h4 data-i18n="ray_step2_title">Authority Creates the Pool — Once</h4>
<p data-i18n-html="ray_step2_desc">As a one-time setup, the authority creates a Raydium CPMM <span class="raydium-highlight mint">$TOBE / wSOL</span> pool with seed liquidity, then calls <code style="color:var(--accent);font-size:12px;">set_pool_config</code> to record the pool addresses on-chain. After this, the program knows where to deposit.</p>

<!-- ray_step3 -->
<h4 data-i18n="ray_step3_title">Anyone Triggers a Flush</h4>
<p data-i18n-html="ray_step3_desc">Once at least 1 SOL has accumulated, <strong>anyone</strong> can call <code style="color:var(--accent);font-size:12px;">flush_lp_to_raydium</code>. The instruction wraps SOL into wSOL, computes proportional $TOBE from the vault using the current pool ratio, and deposits both into the Raydium pool — atomically.</p>

<!-- ray_step4 -->
<h4 data-i18n="ray_step4_title">LP Tokens Burned — Forever</h4>
<p data-i18n-html="ray_step4_desc">In the same transaction, the LP tokens received from Raydium are <span class="raydium-highlight lock">burned permanently</span>. Liquidity cannot be removed. Not in 2 years, not in 100. Verifiable on-chain.</p>

<!-- ray_step5 -->
<h4 data-i18n="ray_step5_title">Floor Protection + Pyth Peg</h4>
<p data-i18n-html="ray_step5_desc">The vault never drains below 30% of its baseline — even mid-flush. Combined with the on-chain Pyth oracle that powers <code style="color:var(--accent);font-size:12px;">buy_from_vault</code> and <code style="color:var(--accent);font-size:12px;">sell_to_vault</code>, $TOBE has both deep monotonically-growing liquidity AND a defended $1 peg in both directions. No keeper bot needed.</p>
```

- [ ] **Step 2: Update Raydium summary stats**

```html
<!-- BEFORE -->
<div class="raydium-stat">
  <div class="raydium-stat-value">2 yr</div>
  <div class="raydium-stat-label" data-i18n="lp_lock_period">LP Lock Period</div>
</div>

<!-- AFTER -->
<div class="raydium-stat">
  <div class="raydium-stat-value">∞</div>
  <div class="raydium-stat-label" data-i18n="lp_lock_period">LP Locked (Burned)</div>
</div>
```

- [ ] **Step 3: Verify all 5 steps still present**

Run: `grep -c "ray_step[1-5]_title" index.html`
Expected: 5.

---

## Chunk 2: token-metadata.json

### Task 5: Refresh token-metadata.json

**Files:**
- Modify: `token-metadata.json`

- [ ] **Step 1: Update description and Vault Mechanism attribute**

```json
{
  "name": "TOBESTABLE",
  "symbol": "TOBE",
  "description": "Anti-inflationary Solana token with 1024 decreasing mint rounds. 50% to minter, 50% to vault. The vault enforces a two-way $1 peg via on-chain Pyth oracle — selling TOBE above $1, buying TOBE below $1. Permanent locked liquidity on Raydium (LP tokens burned). No team tokens, no pre-mine, no insiders, no SOL to the team from mints. Built to be stable.",
  "image": "https://tobestable.com/logo.png",
  "external_url": "https://tobestable.com",
  "attributes": [
    { "trait_type": "Total Rounds", "value": "1024" },
    { "trait_type": "Max Supply", "value": "537395200" },
    { "trait_type": "Mint Cost", "value": "10 SOL" },
    { "trait_type": "Vault Mechanism", "value": "Two-way Pyth peg at $1 (sells above, buys below)" },
    { "trait_type": "Liquidity", "value": "Permanent — LP tokens burned" },
    { "trait_type": "Network", "value": "Solana" }
  ],
  "properties": {
    "category": "currency",
    "creators": [
      { "address": "Eis6SPak12JXqunZqLqgHneomygF1ouuoRk5PFXB5Bvf", "share": 100 }
    ]
  }
}
```

- [ ] **Step 2: Validate JSON**

Run: `node -e "JSON.parse(require('fs').readFileSync('token-metadata.json','utf8')); console.log('valid')"`
Expected: `valid`.

---

## Chunk 3: tobestable/index.html sync

### Task 6: Mirror all index.html changes to the duplicate

**Files:**
- Modify: `tobestable/index.html`

- [ ] **Step 1: Verify they are currently identical (excluding our edits)**

Run: `diff -q index.html tobestable/index.html`
Expected: differs because we just edited the root.

- [ ] **Step 2: Copy root over duplicate**

Run: `cp index.html tobestable/index.html`

- [ ] **Step 3: Verify sync**

Run: `diff -q index.html tobestable/index.html`
Expected: no output (identical).

---

## Chunk 4: lang.js translations

### Task 7: Translate the 7 priority i18n keys to all 10 languages

**Files:**
- Modify: `lang.js` (search for each key, replace its block)

For each of these keys, update **all 10 language entries** with translations:

- `step1_desc` (How section)
- `step3_desc` (How section)
- `faq_a2`
- `faq_a5`
- `faq_a8`
- `ray_step1_title`, `ray_step1_desc`
- `ray_step2_title`, `ray_step2_desc`
- `ray_step3_title`, `ray_step3_desc`
- `ray_step4_title`, `ray_step4_desc`
- `ray_step5_title`, `ray_step5_desc`
- `lp_lock_period`

The 10 languages are: `en, de, es, fr, pt, tr, ru, zh, ja, ko`.

- [ ] **Step 1: For each key listed, locate the existing entry and rewrite all 10 translations**

Pattern in lang.js looks like:
```javascript
step1_desc: {
  en: '...',
  tr: '...',
  // ... 8 more
},
```

Translation guidance:
- Keep terminology consistent with existing site (e.g., "vault" stays "vault" in English; use established translations in other languages by checking surrounding keys for precedent)
- Preserve any HTML/code markers (e.g., `<strong>`, `<code>`, `<span class="...">`)
- Latin-script languages (de/es/fr/pt/tr): high-quality translations expected
- Russian (ru): use existing terminology from elsewhere in lang.js
- Asian (zh/ja/ko): functional translations; flag as "TODO native review" in commit message

- [ ] **Step 2: Verify no key was lost**

Run: `node -e "const t=require('./lang.js'); console.log(Object.keys(t.TRANSLATIONS).length)"`

Note: lang.js may not export `TRANSLATIONS` as CommonJS. If require fails, instead run a grep:

Run: `grep -c "^  [a-z_0-9]*: {" lang.js`
Expected: same count as before (pre-edit baseline).

---

### Task 8: Add English-only stubs for new FAQ keys (q14-q16, a14-a16)

**Files:**
- Modify: `lang.js` (insert near other faq keys)

- [ ] **Step 1: Add 6 new keys (3 question, 3 answer) with all 10 languages = English fallback**

For i18n strategy C, foreign-language entries get English text as fallback so the page never shows undefined keys. Mark with TODO comment.

```javascript
// TODO i18n: native translations for q14/a14, q15/a15, q16/a16 (Phase A additions)
faq_q14: {
  en: 'What is Pyth and how does the $1 peg work?',
  tr: 'What is Pyth and how does the $1 peg work?',
  es: 'What is Pyth and how does the $1 peg work?',
  pt: 'What is Pyth and how does the $1 peg work?',
  fr: 'What is Pyth and how does the $1 peg work?',
  de: 'What is Pyth and how does the $1 peg work?',
  ru: 'What is Pyth and how does the $1 peg work?',
  zh: 'What is Pyth and how does the $1 peg work?',
  ja: 'What is Pyth and how does the $1 peg work?',
  ko: 'What is Pyth and how does the $1 peg work?',
},
faq_a14: { /* English in all 10, same pattern */ },
faq_q15: { /* ... */ },
faq_a15: { /* ... */ },
faq_q16: { /* ... */ },
faq_a16: { /* ... */ },
```

(Full English text for each answer is in the spec doc and Task 3 above.)

- [ ] **Step 2: Verify lang.js still parses**

Run: `node -c lang.js` (syntax check) — actually `node` doesn't have `-c`. Use:
Run: `node -e "require('./lang.js'); console.log('parsed')"` — won't work either if it's not exported.

Best check: Run: `node --check lang.js`
Expected: no syntax errors.

---

## Chunk 5: Verify + ship

### Task 9: Browser preview verification

**Files:**
- (no edits)

- [ ] **Step 1: Start preview server**

Use Claude Preview MCP: `mcp__Claude_Preview__preview_start` with name `tobe-mint`. The launch.json config from the previous PR is still at `.claude/launch.json` (gitignored).

- [ ] **Step 2: Visual check in EN, TR, DE**

Take screenshot in default (likely TR) language. Switch to EN via the lang picker. Switch to DE. For each:
- Scroll to How section — verify step 1 + step 3 read correctly in that language
- Open FAQ a2, a5, a8 — verify translations
- Scroll to Raydium section — verify all 5 steps read correctly
- Verify "∞ LP Locked (Burned)" stat shows
- Confirm new q14/q15/q16 show English text in non-EN languages (acceptable per strategy C)

- [ ] **Step 3: Console must be clean**

Use `mcp__Claude_Preview__preview_console_logs` with `level: 'error'`. Expected: no output.

- [ ] **Step 4: State read still works**

Use `mcp__Claude_Preview__preview_eval` to call `await fetchMintState()`. Expected: returns full object with raydiumPoolState etc. (regression-test the previous PR's parser).

---

### Task 10: Commit + PR

**Files:**
- (no edits)

- [ ] **Step 1: Stage all changes**

Run: `git add index.html tobestable/index.html lang.js token-metadata.json`

- [ ] **Step 2: Commit**

Run a single commit (per spec, this is one cohesive content update):

```bash
git commit -m "$(cat <<'EOF'
feat: Phase A truth-in-advertising — sync site copy with deployed program

Fixes 7 misleading claims that contradicted the on-chain Phase 1 + 2
behavior:

- step1_desc, faq_a5: "Payment goes to project treasury" → 5/5 split into
  PDAs, none to authority
- step3_desc, faq_a2, faq_a8: "Vault sells at SOL ceiling" → two-way Pyth
  peg at $1 USD (sells above, buys below)
- Raydium section (5 steps) + lp_lock_period stat: seed_pool + 2-year
  lock_lp narrative → permissionless flush_lp_to_raydium + permanent LP
  burn
- token-metadata.json: refreshed description + Vault Mechanism attribute

Adds 3 new FAQ items (English-only, TODO i18n markers):
- What is Pyth and how does the $1 peg work?
- Who can call flush_lp_to_raydium?
- What backs the floor when price drops below $1?

i18n strategy C: priority fixes translated to all 10 languages; new FAQ
items English-only as fallback in all languages. Asian-language
translations flagged for native review.
EOF
)"
```

- [ ] **Step 3: Push branch**

Run: `git push -u origin phase-a-truth-content`

- [ ] **Step 4: Open PR**

Run: `gh pr create --base master --head phase-a-truth-content --title "Phase A: truth-in-advertising — sync content with deployed program"` with body summarizing the 7 fixes + 3 new FAQs + i18n strategy.

- [ ] **Step 5: Confirm PR URL printed**

---

## Out of scope (Phase B)

- Peg arbitrage UI (buy_from_vault / sell_to_vault buttons)
- Flush LP trigger button
- Vault stats panel (poolSolBalance + vault SOL reserve depth)
- Personal wallet panel (TOBE balance + projected $ at peg)

## Out of scope (Phase C)

- Live Raydium pool reads (depth, spot price, peg deviation)
- Pool depth sparkline
- "Time since last flush" indicator
