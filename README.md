# USDC Deposit Demo

A dependency-free static USDC deposit interface for Vercel.

## Stack

- Plain HTML
- Plain CSS
- Plain browser JavaScript
- No React
- No Next.js
- No TypeScript
- No npm packages
- No install step
- No application build step

The complete demo lives in `public/index.html`.

## Vercel

`vercel.json` is configured to skip package installation, run only a harmless shell `echo` as the build command, and serve the existing `public` directory directly.

## Flow

- One platform-wide USDC balance.
- Deposit button opens a centered network selector.
- Primary networks: Solana, BNB Smart Chain, Ethereum, Robinhood Chain, and Base.
- Additional networks are available behind the three-dot control.
- Selecting a network shows a demo deposit address and makes it clear that only USDC should be sent.
- All included addresses are intentionally invalid placeholders. Do not send real funds.

## Production integration

Before accepting real deposits, replace the placeholder address layer with a custody/deposit-address provider or your own wallet infrastructure, verify native USDC contracts per network, add deposit monitoring/indexing, confirmations, reconciliation, and user crediting logic.
