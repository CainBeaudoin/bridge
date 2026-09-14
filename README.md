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

## Relay network data

The network selector is modeled from Relay's current bridge chain metadata. Chain artwork is loaded directly from Relay's public asset convention:

`https://assets.relay.link/icons/square/{chainId}/light.png`

The USDC artwork uses Relay's currency asset:

`https://assets.relay.link/icons/currencies/usdc.png`

The selector currently contains 74 network entries, including the five primary choices (Solana, BNB Smart Chain, Ethereum, Robinhood Chain, and Base) plus 69 searchable networks under the three-dot control. The UI also displays the corresponding chain ID.

The chain catalog is a UI/demo reference, not a promise that USDC deposits are currently available on every listed network. Token availability and routes can change and must be validated against Relay/current backend routing before enabling real deposits.

## Flow

- One platform-wide USDC balance.
- Deposit button opens a centered network selector.
- Primary networks: Solana, BNB Smart Chain, Ethereum, Robinhood Chain, and Base.
- Additional Relay networks are searchable behind the three-dot control.
- Selecting a network shows a demo deposit address, chain logo, and chain ID.
- All included addresses are intentionally invalid placeholders. Do not send real funds.

## Production integration

Before accepting real deposits, replace the placeholder address layer with a custody/deposit-address provider or your own wallet infrastructure, validate USDC support and the correct token contract/route for the selected network, add deposit monitoring/indexing, confirmations, reconciliation, and user crediting logic.
