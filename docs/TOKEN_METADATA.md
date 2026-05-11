# Token Metadata — How To Update

`token-metadata.json` is the off-chain JSON file that the on-chain Metaplex Token Metadata account points to. Wallets, explorers, and aggregators fetch this file via HTTPS to render TOBE's name, logo, description, and links.

## How the link works

```
on-chain Metaplex metadata account
  ↓ stores
URI string: "https://tobestable.com/token-metadata.json"
  ↓ resolves to
this file (token-metadata.json)
  ↓ wallets read
{ name, symbol, image, description, ... }
```

The on-chain URI is **set during `initialize`** and points to the URL above. This URL is hard-coded in `programs/neco_token/src/lib.rs::initialize`. To change just the JSON content, **update this file and redeploy the website** — no on-chain transaction needed. The next time wallets refetch, they get the new content.

To change the URI itself (e.g., switch to IPFS), call the `update_metadata` instruction from the authority.

## Current schema

| Field | Filled? |
|---|---|
| `name` / `symbol` / `description` | ✅ |
| `image` | ✅ (https://tobestable.com/logo.png) |
| `external_url` | ✅ |
| `attributes[]` | ✅ (8 entries — Total Rounds, Max Supply, Mint Cost, Vault Mechanism, Liquidity, Decimals, Network, Standard) |
| `properties.category` | ✅ ("currency") |
| `properties.files[]` | ✅ (logo) |
| `properties.creators[]` | ✅ (single creator at 100% share) |
| `extensions.website` / `extensions.github` | ✅ |
| `extensions.twitter` | ⏳ Add when Twitter handle exists |
| `extensions.discord` | ⏳ Optional, add if/when Discord launches |
| `extensions.telegram` | ⏳ Optional |
| `extensions.coingeckoId` | ⏳ Add after CoinGecko approval |
| `extensions.coinmarketcapId` | ⏳ Add after CoinMarketCap approval |

## Update checklist (in order, by milestone)

### Pre-mainnet launch
- [ ] Confirm `image` URL returns a 200x200 PNG (`curl -I https://tobestable.com/logo.png`)
- [ ] Confirm `external_url` (https://tobestable.com) is live and informative

### When Twitter handle is set up
- [ ] Add to `extensions.twitter`: `"https://twitter.com/YOUR_HANDLE"`
- [ ] Push to website
- [ ] No on-chain action needed

### When CoinGecko listing approved
- [ ] Add to `extensions.coingeckoId`: `"tobestable"` (or whatever ID they assigned)
- [ ] Update Jupiter Verified Token List submission to include the same ID
- [ ] Push to website

### When CoinMarketCap listing approved
- [ ] Add to `extensions.coinmarketcapId`: `"tobestable"` (or assigned ID)
- [ ] Push to website

### When audited
- [ ] Add to `extensions.audit`: `"https://link-to-audit-report.pdf"`
- [ ] Add audit firm name + date to README + SECURITY.md too

### When Squads multisig migration completes
- [ ] Update `properties.creators[0].address` to the multisig vault pubkey
- [ ] Push to website
- [ ] (Optional) Call `update_metadata` to refresh the on-chain creator info

## Schema reference

Following the [Metaplex Token Metadata Token Standard](https://developers.metaplex.com/token-metadata/token-standard) for fungible tokens (`category: "currency"`):

```json
{
  "name": "string",
  "symbol": "string",
  "description": "string",
  "image": "url",
  "external_url": "url",
  "attributes": [
    { "trait_type": "string", "value": "string" }
  ],
  "properties": {
    "category": "currency | image | video | audio | vr | html",
    "files": [
      { "uri": "url", "type": "mime/type" }
    ],
    "creators": [
      { "address": "solana pubkey", "share": 0-100 }
    ]
  },
  "extensions": {
    "website": "url",
    "twitter": "url",
    "discord": "url",
    "telegram": "url",
    "github": "url",
    "coingeckoId": "string",
    "coinmarketcapId": "string"
  }
}
```

`extensions` is the de-facto standard used by Solana wallets (Phantom, Solflare) but not strictly part of the Metaplex spec — it's safe to add but not required.

## Validation

Always validate before pushing:

```bash
node -e "JSON.parse(require('fs').readFileSync('token-metadata.json','utf8')); console.log('valid JSON')"
```

For production, also test the URL after deploy:

```bash
curl -s https://tobestable.com/token-metadata.json | jq .
```

## Common mistakes

| Mistake | Fix |
|---|---|
| Logo URL returns 404 | Check tobestable.com deployment; logo must be at the URL `image` points to |
| Logo wrong size | Use 200x200 PNG; some wallets reject other dimensions |
| `creators[0].address` is the deployer wallet, not multisig | Update after multisig migration |
| Adding fields wallets don't expect | Stick to the spec + extensions; novel fields are silently ignored |
| Forgetting to push the updated JSON to live URL | The on-chain URI doesn't update from a git commit — only the live URL matters to wallets |

## File locations

| Location | Used by |
|---|---|
| `token-metadata.json` (this repo, root) | Source of truth — gets deployed to https://tobestable.com/token-metadata.json |
| `tobestable/token-metadata.json` (this repo, subdir) | Verbatim duplicate (same as `index.html` pattern) |
| https://tobestable.com/token-metadata.json | What the on-chain Metaplex metadata account points to |
