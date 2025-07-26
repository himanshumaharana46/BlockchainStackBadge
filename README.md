# BlockchainStackBadge
# Proof-of-Blockchain Badge System – NFT

## 1. Project Title
Proof‑of‑Blockchain Badge System – Earn Badge NFTs

## 2. Project Description
A Clarity smart contract that awards NFT badges to participants who complete blockchain knowledge tasks. When a user qualifies (e.g. passes a quiz or meets criteria), they receive a unique badge NFT on‑chain.

## 3. Project Vision
- Issue verifiable on‑chain badges as proof of blockchain literacy or accomplishment.
- Enable decentralized validation of badge ownership via wallet tools.
- Create a lightweight badge system that can integrate into educational or reputation platforms.

## 4. Future Scope
- Add metadata URIs per badge for visuals, issue date, or badge level.
- Support multiple badge types (e.g. Bronze, Silver, Gold).
- Restrict transferability (soul-bound badges) or enable secondary transfers.
- Add badge revocation or expiration.
- Build front‑end that calls `award-badge` function and displays owned badges using SIP‑009 utilities.

## 5. Contract Addendum
- Complies with **SIP‑009 NFT standard** via `impl-trait` to ensure interoperability with wallets and apps :contentReference[oaicite:1]{index=1}.
- Defines non‑fungible token type `badge-nft` and tracks last minted ID.
- Minimal design: two functions—**award-badge** (to mint) and **has-badge?** (check ownership).
ST28FCMDR8WWGTBHQT654619PNB5WG05ESWMYC5Y9.badge-nft
<img width="1902" height="902" alt="image" src="https://github.com/user-attachments/assets/8c5e67e8-5926-4439-bca7-046402cd14ec" />
