"use client";

import { useEffect, useMemo, useState } from "react";

type Network = {
  id: string;
  name: string;
  short: string;
  tone: string;
  address: string;
  primary?: boolean;
};

const networks: Network[] = [
  {
    id: "solana",
    name: "Solana",
    short: "S",
    tone: "#111111",
    address: "DEMO_SOLANA_USDC_ADDRESS_DO_NOT_SEND",
    primary: true,
  },
  {
    id: "bsc",
    name: "BNB Smart Chain",
    short: "B",
    tone: "#f3ba2f",
    address: "0xDEMO_BSC_USDC_ADDRESS_DO_NOT_SEND",
    primary: true,
  },
  {
    id: "ethereum",
    name: "Ethereum",
    short: "E",
    tone: "#627eea",
    address: "0xDEMO_ETH_USDC_ADDRESS_DO_NOT_SEND",
    primary: true,
  },
  {
    id: "robinhood",
    name: "Robinhood Chain",
    short: "R",
    tone: "#00c805",
    address: "0xDEMO_RH_USDC_ADDRESS_DO_NOT_SEND",
    primary: true,
  },
  {
    id: "base",
    name: "Base",
    short: "B",
    tone: "#0052ff",
    address: "0xDEMO_BASE_USDC_ADDRESS_DO_NOT_SEND",
    primary: true,
  },
  {
    id: "arbitrum",
    name: "Arbitrum",
    short: "A",
    tone: "#28a0f0",
    address: "0xDEMO_ARB_USDC_ADDRESS_DO_NOT_SEND",
  },
  {
    id: "optimism",
    name: "Optimism",
    short: "O",
    tone: "#ff0420",
    address: "0xDEMO_OP_USDC_ADDRESS_DO_NOT_SEND",
  },
  {
    id: "polygon",
    name: "Polygon",
    short: "P",
    tone: "#8247e5",
    address: "0xDEMO_POLYGON_USDC_ADDRESS_DO_NOT_SEND",
  },
  {
    id: "avalanche",
    name: "Avalanche",
    short: "A",
    tone: "#e84142",
    address: "0xDEMO_AVAX_USDC_ADDRESS_DO_NOT_SEND",
  },
  {
    id: "megaeth",
    name: "MegaETH",
    short: "M",
    tone: "#151515",
    address: "0xDEMO_MEGAETH_USDC_ADDRESS_DO_NOT_SEND",
  },
  {
    id: "linea",
    name: "Linea",
    short: "L",
    tone: "#121212",
    address: "0xDEMO_LINEA_USDC_ADDRESS_DO_NOT_SEND",
  },
  {
    id: "scroll",
    name: "Scroll",
    short: "S",
    tone: "#d8b177",
    address: "0xDEMO_SCROLL_USDC_ADDRESS_DO_NOT_SEND",
  },
  {
    id: "sui",
    name: "Sui",
    short: "S",
    tone: "#6fbcf0",
    address: "DEMO_SUI_USDC_ADDRESS_DO_NOT_SEND",
  },
];

export default function Home() {
  const [depositOpen, setDepositOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState<Network | null>(null);
  const [copied, setCopied] = useState(false);

  const primaryNetworks = useMemo(() => networks.filter((network) => network.primary), []);
  const moreNetworks = useMemo(() => networks.filter((network) => !network.primary), []);

  useEffect(() => {
    if (!depositOpen) {
      setSelectedNetwork(null);
      setShowMore(false);
      setCopied(false);
    }
  }, [depositOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDepositOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  async function copyAddress() {
    if (!selectedNetwork) return;

    try {
      await navigator.clipboard.writeText(selectedNetwork.address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className="page-shell">
      <section className="account-panel" aria-label="USDC account">
        <div className="brand-mark" aria-hidden="true">
          <span />
        </div>

        <div className="balance-block">
          <div className="asset-row">
            <div className="usdc-icon">$</div>
            <span>USDC</span>
          </div>
          <div className="balance">12,480.38</div>
          <div className="balance-caption">Available balance</div>
        </div>

        <button className="deposit-button" onClick={() => setDepositOpen(true)}>
          <span className="plus">+</span>
          Deposit
        </button>
      </section>

      <p className="platform-note">One balance. Deposit USDC from supported networks.</p>

      {depositOpen && (
        <div className="modal-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setDepositOpen(false);
        }}>
          <section className="deposit-modal" role="dialog" aria-modal="true" aria-label="Deposit USDC">
            <button className="close-button" aria-label="Close deposit modal" onClick={() => setDepositOpen(false)}>
              ×
            </button>

            {!selectedNetwork ? (
              <>
                <div className="modal-heading">
                  <div className="modal-token-icon">$</div>
                  <h1>Deposit USDC</h1>
                  <p>Select the network you are sending from.</p>
                  <span className="usdc-only-pill">USDC only</span>
                </div>

                <div className="network-grid">
                  {primaryNetworks.map((network) => (
                    <NetworkButton
                      key={network.id}
                      network={network}
                      onClick={() => setSelectedNetwork(network)}
                    />
                  ))}

                  <button
                    className={`network-button more-button ${showMore ? "active" : ""}`}
                    onClick={() => setShowMore((value) => !value)}
                    aria-expanded={showMore}
                  >
                    <span className="network-icon more-icon">•••</span>
                    <span className="network-name">More</span>
                  </button>
                </div>

                {showMore && (
                  <div className="more-networks">
                    <div className="more-label">More networks</div>
                    <div className="network-grid compact-grid">
                      {moreNetworks.map((network) => (
                        <NetworkButton
                          key={network.id}
                          network={network}
                          onClick={() => setSelectedNetwork(network)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div className="modal-footnote">
                  Send only USDC using the network you select. Other assets are not supported.
                </div>
              </>
            ) : (
              <div className="address-view">
                <button className="back-button" onClick={() => setSelectedNetwork(null)}>
                  <span>‹</span> Networks
                </button>

                <div className="selected-network-icon" style={{ background: selectedNetwork.tone }}>
                  {selectedNetwork.short}
                </div>
                <h1>Deposit on {selectedNetwork.name}</h1>
                <p className="address-intro">Send USDC to the address below.</p>

                <div className="address-card">
                  <div className="address-label-row">
                    <span>Deposit address</span>
                    <span className="demo-badge">Demo</span>
                  </div>
                  <div className="address-value">{selectedNetwork.address}</div>
                  <button className="copy-button" onClick={copyAddress}>
                    {copied ? "Copied" : "Copy address"}
                  </button>
                </div>

                <div className="warning-card">
                  <div className="warning-dot">!</div>
                  <p>
                    <strong>Demo only.</strong> This is a placeholder address. Do not send real funds.
                  </p>
                </div>

                <div className="deposit-details">
                  <div>
                    <span>Asset</span>
                    <strong>USDC</strong>
                  </div>
                  <div>
                    <span>Network</span>
                    <strong>{selectedNetwork.name}</strong>
                  </div>
                  <div>
                    <span>Destination</span>
                    <strong>Your USDC balance</strong>
                  </div>
                </div>

                <div className="waiting-row">
                  <span className="pulse-dot" />
                  Waiting for deposit
                </div>
              </div>
            )}
          </section>
        </div>
      )}
    </main>
  );
}

function NetworkButton({ network, onClick }: { network: Network; onClick: () => void }) {
  return (
    <button className="network-button" onClick={onClick}>
      <span className="network-icon" style={{ background: network.tone }}>
        {network.short}
      </span>
      <span className="network-name">{network.name}</span>
    </button>
  );
}
