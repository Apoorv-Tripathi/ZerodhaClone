import React from "react";

const plans = [
  { img: "/media/pricingEquity.svg",  label: "Free equity delivery", desc: "All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage." },
  { img: "/media/intradayTrades.svg",  label: "Intraday and F&O", desc: "Flat ₹20 or 0.03% (whichever is lower) per executed order across equity, currency, and commodity." },
  { img: "/media/pricingEquity.svg",  label: "Free direct MF", desc: "All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges." },
];

function Hero() {
  return (
    <section style={{ padding: "80px 0", background: "#fff", borderBottom: "1px solid #f0f0f0" }}>
      <div className="container text-center">
        <h1 style={{ fontSize: "44px", fontWeight: "700", marginBottom: "12px" }}>Pricing</h1>
        <p style={{ fontSize: "18px", color: "#666", marginBottom: "60px" }}>
          Free equity investments and flat ₹20 intraday and F&amp;O trades
        </p>
        <div className="row g-4 justify-content-center">
          {plans.map(p => (
            <div className="col-md-4" key={p.label}>
              <div style={{ background: "#fafafa", border: "1px solid #eee", borderRadius: "12px", padding: "36px 24px", height: "100%" }}>
                <img src={p.img} alt={p.label} style={{ width: "72px", marginBottom: "20px" }} />
                <div style={{ fontSize: "16px", fontWeight: "600", color: "#387ed1", marginBottom: "12px" }}>{p.label}</div>
                <p style={{ fontSize: "14px", color: "#888", lineHeight: "1.7", margin: 0 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
