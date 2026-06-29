# TOBESTABLE — Telegram setup

The standard, trust-friendly layout for a token project is **three linked pieces**:

```
┌─────────────────────┐     linked      ┌─────────────────────┐
│  📢 CHANNEL          │ ───────────────▶│  💬 GROUP           │
│  (announcements)     │   discussion    │  (community chat)   │
│  you post, all read  │                 │  members talk       │
└─────────────────────┘                 └──────────┬──────────┘
                                                    │ runs in
                                          ┌─────────▼──────────┐
                                          │  🤖 BOT            │
                                          │  /price /status …  │
                                          └────────────────────┘
```

- **Channel** = your official voice. Broadcast-only, so it can't be spammed. This is the link you put on the site / X bio.
- **Group** = the community room, *linked as the channel's discussion group* so each channel post gets a comment thread.
- **Bot** = lives in the group (and optionally posts to the channel). Answers `/price`, `/status`, etc. from on-chain data so you don't field the same questions 100×.

> ⚠️ You must create these yourself in the Telegram app (they're tied to your phone number). The copy to paste is in [`CONTENT.md`](./CONTENT.md); the bot code is in [`bot/`](./bot).

## Step 1 — Create the channel (~3 min)
1. Telegram → new message (pencil) → **New Channel**.
2. Name + description: use [`CONTENT.md`](./CONTENT.md) → "Channel".
3. **Public**, set a username like `@tobestable` (or `@tobestable_ann`). This becomes `t.me/tobestable`.
4. Upload the logo (`../logo.png`) as the channel photo.

## Step 2 — Create the discussion group (~3 min)
1. New message → **New Group**. Name + description: [`CONTENT.md`](./CONTENT.md) → "Group".
2. Public username, e.g. `@tobestable_chat` → `t.me/tobestable_chat`.
3. Same logo.
4. **Link it to the channel:** open the Channel → ⚙️ → **Discussion** → add the group. Now channel posts get comment threads.

## Step 3 — Configure the group for safety (~5 min)
1. Add **@MissRose_bot** (or @Shieldy / @CombotBot) for anti-spam + a captcha on join (essential — token groups attract bots/scammers instantly).
2. Group → Permissions: keep "Send media/links" off for new members until they pass captcha.
3. Pin the rules message ([`CONTENT.md`](./CONTENT.md) → "Group rules").
4. **Never** let anyone but you have admin. Scam #1 in token groups is a fake "admin" DMing members — set the welcome message to say *"Admins will NEVER DM you first."*

## Step 4 — Create + run the bot (~10 min)
1. Telegram → **@BotFather** → `/newbot` → name it (e.g. "TOBESTABLE Bot", username `@tobestable_bot`). Copy the **token** it gives you.
2. Add the bot to the group as admin (so it can read commands / post).
3. Run it — see [`bot/README.md`](./bot/README.md). In short:
   ```
   cd telegram/bot
   npm install
   TELEGRAM_BOT_TOKEN=<your-token> NETWORK=devnet node bot.js
   ```
   (Use `NETWORK=mainnet` after launch.)
4. Host it so it stays online — Railway, Render, Fly.io free tiers, or a small VPS. The bot uses long-polling, so no public URL/webhook needed.

## Step 5 — Wire links everywhere
Once the usernames exist, add `t.me/<channel>` to: the site footer, your X bio, the launch announcement (`tobestable-protocol/docs/LAUNCH_ANNOUNCEMENT.md`), and the token metadata `extensions` (`../token-metadata.json`).

## Positioning note
A community channel is fine and useful. Just keep the **same honest framing** as the site — "hard $1 ceiling, reserve-bounded floor," not "guaranteed stablecoin." A Telegram that overclaims while the site/contract are honest reads as a bait-and-switch. The bot's `/faq` and `/contract` enforce this by pulling the same verified facts.
