# TOBESTABLE Telegram bot

Live on-chain `/status` and `/price`, plus `/contract` `/mint` `/faq` `/site`. Reads `mint_state` + the Raydium pool directly (no Anchor dependency). Same honest framing as the site.

## Run locally
```bash
cd telegram/bot
npm install
TELEGRAM_BOT_TOKEN=<token-from-@BotFather> NETWORK=devnet node bot.js
```
- `NETWORK` — `devnet` (default) or `mainnet`. Switch to `mainnet` on launch day.
- `RPC_URL` — optional override (recommended on mainnet: a ws-capable endpoint like a Helius mainnet key; default is the public RPC).
- Node ≥ 18 (uses global `fetch`).

## Get a token
Telegram → **@BotFather** → `/newbot` → copy the token. Then add the bot to your group as an admin.

## Commands
| Command | Does |
|---|---|
| `/start` `/help` | Intro + command list |
| `/status` | Round, total minted, vault balance, floor-armed, paused (live) |
| `/price` | TOBE/USD + peg deviation (pool reserves × SOL/USD) |
| `/contract` | Verified program/treasury/council addresses + explorer/Realms/GitHub links |
| `/mint` | How to participate |
| `/faq` | What $TOBE actually is (honest framing) |
| `/site` | Official links |

Pre-launch, `/status` and `/price` return a graceful "launching soon" until the program is initialized and a pool exists.

## Host it (stay online)
Long-polling — no public URL/webhook needed. Free options:
- **Railway / Render / Fly.io** — point at this folder, set `TELEGRAM_BOT_TOKEN` (and `NETWORK`, `RPC_URL`) as env vars, start command `node bot.js`.
- **Any VPS** — `npm install`, run under `pm2` or a systemd service.

## Safety
The bot never asks for funds, keys, or seed phrases, and never DMs first. Make sure your group's pinned rules say the same (admins/bots never DM first) — see `../CONTENT.md`.

## Extending
Commands are plain `bot.onText(/^\/cmd/, …)` handlers in `bot.js`. Add round-change or peg-deviation **alerts** by polling `getState()` on an interval and `bot.sendMessage(CHANNEL_ID, …)` when a threshold is crossed.
