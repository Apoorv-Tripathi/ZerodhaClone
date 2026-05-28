import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <section style={{ padding: "80px 0", background: "#fafafa", borderTop: "1px solid #f0f0f0" }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <h2 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "16px" }}>Unbeatable pricing</h2>
            <p style={{ fontSize: "16px", color: "#666", marginBottom: "24px" }}>
              We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
            </p>
            <Link to="/pricing" style={{ textDecoration: "none", fontSize: "15px", color: "#387ed1", fontWeight: "500" }}>
              See full pricing →
            </Link>
          </div>
          <div className="col-lg-7">
            <div className="row g-4">
              {[
                { img: "/media/pricingEquity.svg",  label: "Equity Delivery", desc: "Free for all equity delivery trades and direct mutual funds" },
                { img: "/media/intradayTrades.svg",  label: "Intraday & F&O", desc: "Flat ₹20 or 0.03% per executed order, whichever is lower" },
              ].map(card => (
                <div className="col-6" key={card.label}>
                  <div style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: "12px", padding: "28px", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                    <img src={card.img} alt={card.label} style={{ width: "64px", marginBottom: "16px" }} />
                    <div style={{ fontSize: "36px", fontWeight: "700", color: "#1a1a1a", marginBottom: "4px" }}>{card.price}</div>
                    <div style={{ fontSize: "14px", fontWeight: "600", color: "#387ed1", marginBottom: "8px" }}>{card.label}</div>
                    <div style={{ fontSize: "13px", color: "#888" }}>{card.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
