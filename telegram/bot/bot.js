// TOBESTABLE Telegram bot — live on-chain status/price + verified facts.
//
// Reads mint_state and the Raydium pool directly from chain (no Anchor dep),
// mirroring the frontend's manual deserialization. Same honest framing as the
// site: hard $1 ceiling, reserve-bounded floor — NOT a guaranteed stablecoin.
//
// Run:  TELEGRAM_BOT_TOKEN=<token> NETWORK=devnet node bot.js
// See README.md.

const TelegramBot = require('node-telegram-bot-api');
const { Connection, PublicKey } = require('@solana/web3.js');

// Load a local .env (KEY=VALUE per line) if present, so you can run with just
// `node bot.js` — no need to set env vars on the command line. .env is gitignored.
try {
  const fs = require('fs'), path = require('path');
  for (const line of fs.readFileSync(path.join(__dirname, '.env'), 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
} catch { /* no .env — rely on real env vars */ }

// ── Config ────────────────────────────────────────────────────────────────
const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
if (!TOKEN) { console.error('Set TELEGRAM_BOT_TOKEN'); process.exit(1); }
const NETWORK = process.env.NETWORK === 'mainnet' ? 'mainnet' : 'devnet';

const CFG = {
  devnet: {
    programId: 'CfdXZeKuFRGMxiedAHBemm35rANWPvcriwPEyh9KVnBQ',
    rpc: process.env.RPC_URL || 'https://api.devnet.solana.com',
    explorer: 'https://explorer.solana.com',
    cluster: '?cluster=devnet',
  },
  mainnet: {
    programId: 'Eekx6ftd6WZfSpubr9otS1G6wbKdSCWuXt7n1cbQjmdX',
    rpc: process.env.RPC_URL || 'https://api.mainnet-beta.solana.com',
    explorer: 'https://explorer.solana.com',
    cluster: '',
  },
}[NETWORK];

const PROGRAM_ID = new PublicKey(CFG.programId);
const TOKEN_PROGRAM_ID = new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');
const DECIMALS = 1e9, MAX_ROUNDS = 1024, MAX_SUPPLY = 537_395_200;
const SITE = 'https://tobestable.com';
const GITHUB = 'https://github.com/thatsjustthechemistry-cell/tobestable-protocol';
const REALMS = 'https://v2.realms.today/dao/9VUbq5QHSPezGPseqY1kgrwSVLGtndk3XT1y3dfMB5o';
const TREASURY = 'Cb7TsQFqMbbshjFEXmxEhCBj1Ab5K3T94M4NLiusqVAC';
const COUNCIL_MINT = '2ZdbLGkKi1Zvk5dKLqcY5UBcDdJVss8u2tGmMnN3gRHN';

const connection = new Connection(CFG.rpc, 'confirmed');
const [mintStatePda] = PublicKey.findProgramAddressSync([Buffer.from('mint_state')], PROGRAM_ID);

// ── On-chain reads (cached ~30s) ────────────────────────────────────────────
let _cache = { at: 0, state: null };
async function getState() {
  if (Date.now() - _cache.at < 30_000) return _cache.state;
  let state = null;
  try {
    const info = await connection.getAccountInfo(mintStatePda);
    if (info) state = decodeMintState(info.data);
  } catch (e) { console.warn('getState error:', e.message); }
  _cache = { at: Date.now(), state };
  return state;
}

function decodeMintState(buf) {
  const data = buf.slice(8); // skip Anchor discriminator
  let o = 0;
  const pk = () => { const p = new PublicKey(data.slice(o, o + 32)).toBase58(); o += 32; return p; };
  const u64 = () => { const v = Number(data.readBigUInt64LE(o)); o += 8; return v; };
  const i64 = () => { const v = Number(data.readBigInt64LE(o)); o += 8; return v; };
  const bool = () => { const v = data[o] === 1; o += 1; return v; };
  const u8 = () => { const v = data[o]; o += 1; return v; };
  const s = {
    authority: pk(), pendingAuthority: pk(), treasury: pk(), tobeMint: pk(), lpMint: pk(),
    currentRound: u64(), vaultBalance: u64(), totalVaultReleased: u64(),
    lpLockUntil: i64(), lpLocked: bool(), paused: bool(), poolSeeded: bool(),
    bump: u8(), vaultBump: u8(), lpLockBump: u8(), totalMinted: u64(), poolSolBalance: u64(),
  };
  if (data.length >= o + 32 * 5 + 1 + 8) {
    s.raydiumPoolState = pk(); s.raydiumPoolAuthority = pk(); s.raydiumLpMint = pk();
    s.raydiumToken0Vault = pk(); s.raydiumToken1Vault = pk();
    s.tobeIsToken0 = bool(); s.vaultTobeAtConfig = u64();
    if (data.length >= o + 1) s.floorActive = bool();
  }
  return s;
}

async function getTobeUsd(state) {
  if (!state || !state.raydiumPoolState || state.raydiumPoolState === PublicKey.default.toBase58()) return null;
  try {
    const [t0, t1] = await Promise.all([
      connection.getTokenAccountBalance(new PublicKey(state.raydiumToken0Vault)),
      connection.getTokenAccountBalance(new PublicKey(state.raydiumToken1Vault)),
    ]);
    const poolTobe = Number(state.tobeIsToken0 ? t0.value.amount : t1.value.amount);
    const poolSol = Number(state.tobeIsToken0 ? t1.value.amount : t0.value.amount);
    if (!poolTobe || !poolSol) return null;
    const solUsd = await getSolUsd();
    const tobePerSol = poolSol / poolTobe; // both 9-decimal → SOL per TOBE
    return { tobeUsd: tobePerSol * solUsd, solUsd };
  } catch (e) { console.warn('price error:', e.message); return null; }
}

let _sol = { at: 0, v: 150 };
async function getSolUsd() {
  if (Date.now() - _sol.at < 60_000) return _sol.v;
  try {
    const r = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
    const j = await r.json();
    if (j?.solana?.usd) _sol = { at: Date.now(), v: j.solana.usd };
  } catch (e) { console.warn('sol price error:', e.message); }
  return _sol.v;
}

// ── Helpers ─────────────────────────────────────────────────────────────────
const fmt = (n) => n.toLocaleString('en-US');
const addr = (a) => `${a.slice(0, 4)}…${a.slice(-4)}`;
const net = NETWORK === 'mainnet' ? 'Mainnet' : 'Devnet';

// ── Bot ─────────────────────────────────────────────────────────────────────
const bot = new TelegramBot(TOKEN, { polling: true });
console.log(`TOBESTABLE bot online (${net}). Program ${CFG.programId}`);

const HELP = [
  '*TOBESTABLE bot* — commands:',
  '/status — live round, supply & vault',
  '/price — TOBE/USD & peg deviation',
  '/contract — verified on-chain addresses',
  '/mint — how to participate',
  '/faq — what TOBE actually is',
  '/site — official links',
].join('\n');

bot.onText(/^\/(start|help)/, (m) => {
  bot.sendMessage(m.chat.id,
    `👋 *TOBESTABLE ($TOBE)* — fair-launch Solana token with an on-chain $1 reference: a *hard ceiling* above $1 and a *reserve-backed floor* below. Not a guaranteed stablecoin — we say what it is.\n\n${HELP}\n\n⚠️ Admins never DM you first.`,
    { parse_mode: 'Markdown', disable_web_page_preview: true });
});

bot.onText(/^\/status/, async (m) => {
  const s = await getState();
  if (!s) return bot.sendMessage(m.chat.id, `🚀 *Launching soon* — the program isn't initialized on ${net} yet. Follow announcements and check back.`, { parse_mode: 'Markdown' });
  const minted = s.totalMinted / DECIMALS;
  const pct = ((s.currentRound / MAX_ROUNDS) * 100).toFixed(1);
  bot.sendMessage(m.chat.id, [
    `📊 *TOBESTABLE — live (${net})*`,
    '',
    `Round: *${s.currentRound} / ${MAX_ROUNDS}*  (${pct}%)`,
    `Total minted: *${fmt(Math.round(minted))}* TOBE  (max ${fmt(MAX_SUPPLY)})`,
    `Vault balance: *${fmt(Math.round(s.vaultBalance / DECIMALS))}* TOBE`,
    `Pool configured: *${s.raydiumPoolState && s.raydiumPoolState !== PublicKey.default.toBase58() ? 'yes' : 'not yet'}*`,
    `$1 floor armed: *${s.floorActive ? 'yes' : 'not yet (arms once TOBE first reaches $1)'}*`,
    `Paused: *${s.paused ? '⛔ yes' : 'no'}*`,
  ].join('\n'), { parse_mode: 'Markdown' });
});

bot.onText(/^\/price/, async (m) => {
  const s = await getState();
  if (!s) return bot.sendMessage(m.chat.id, '🚀 Not live yet — no price until the program is initialized.', { parse_mode: 'Markdown' });
  const p = await getTobeUsd(s);
  if (!p) return bot.sendMessage(m.chat.id, 'No Raydium pool / reserves yet — price will appear once the pool is live.', { parse_mode: 'Markdown' });
  const dev = ((p.tobeUsd - 1) * 100);
  const devStr = `${dev >= 0 ? '+' : ''}${dev.toFixed(2)}%`;
  bot.sendMessage(m.chat.id, [
    `💱 *TOBE price (${net})*`,
    '',
    `TOBE/USD: *$${p.tobeUsd.toFixed(4)}*`,
    `Peg deviation: *${devStr}* from $1`,
    `SOL/USD: $${p.solUsd.toFixed(2)}`,
    '',
    '_Hard ceiling caps above $1; the floor is reserve-bounded and only active once TOBE first reaches $1._',
  ].join('\n'), { parse_mode: 'Markdown' });
});

bot.onText(/^\/contract/, (m) => {
  bot.sendMessage(m.chat.id, [
    `🔎 *Verify on-chain (${net})* — don't trust, check:`,
    '',
    `Program: \`${CFG.programId}\``,
    `Treasury / authority: \`${TREASURY}\``,
    `Council mint (2-of-3): \`${COUNCIL_MINT}\``,
    '',
    `[Explorer](${CFG.explorer}/address/${CFG.programId}${CFG.cluster}) · [Realms DAO](${REALMS}) · [Code + audit](${GITHUB})`,
  ].join('\n'), { parse_mode: 'Markdown', disable_web_page_preview: true });
});

bot.onText(/^\/mint/, (m) => {
  bot.sendMessage(m.chat.id, [
    '🪙 *How to mint $TOBE*',
    '',
    '• Each round costs *10 SOL*; you receive that round\'s TOBE (round 1 = 524,288; fewer each round).',
    '• 50% to you, 50% to the protocol vault. No presale, no team allocation.',
    `• Connect a Solana wallet at ${SITE} and mint, or buy on Raydium once a pool exists.`,
  ].join('\n'), { parse_mode: 'Markdown', disable_web_page_preview: true });
});

bot.onText(/^\/faq/, (m) => {
  bot.sendMessage(m.chat.id, [
    '*Is $TOBE a stablecoin?*',
    'Not a guaranteed one. It has an on-chain $1 reference: a *hard ceiling* (the vault sells TOBE at $1, so it rarely trades above) and a *reserve-bounded floor* (the vault buys at $1 from a finite SOL reserve, as far as the reserve reaches). The floor activates once TOBE first reaches $1.',
    '',
    '*Can the team rug?*',
    'Authority + treasury are a 2-of-3 multisig; liquidity is locked on Raydium (LP burned). No team tokens, no SOL to the team from mints. All verifiable — /contract.',
    '',
    '*Audited?*',
    'Self-audited across 8 classes, 3 passes, all findings fixed (not a paid pro audit — stated plainly). Code public on GitHub.',
  ].join('\n'), { parse_mode: 'Markdown', disable_web_page_preview: true });
});

bot.onText(/^\/site/, (m) => {
  bot.sendMessage(m.chat.id, `🌐 ${SITE}\n🔧 ${GITHUB}\n🏛 ${REALMS}`, { disable_web_page_preview: true });
});

bot.on('polling_error', (e) => console.warn('polling_error:', e.code || e.message));
