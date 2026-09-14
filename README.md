# USDC Deposit Demo

A minimal Apple-style multi-chain USDC deposit interface built with Next.js for Vercel.

## Flow

- One platform-wide USDC balance.
- Deposit button opens a centered network selector.
- Primary networks: Solana, BNB Smart Chain, Ethereum, Robinhood Chain, and Base.
- Additional networks are available behind the three-dot control.
- Selecting a network shows a demo deposit address and makes it clear that only USDC should be sent.
- The included addresses are intentionally invalid placeholders. Do not send real funds.

## Local development

```bash
npm install
npm run dev
```

## Production integration

Before accepting real deposits, replace the placeholder address layer with a custody/deposit-address provider or your own wallet infrastructure, verify native USDC contracts per network, add deposit monitoring/indexing, confirmations, reconciliation, and user crediting logic.
