import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #387ed1 0%, #2563b0 100%)", textAlign: "center" }}>
      <div className="container">
        <h2 style={{ fontSize: "36px", fontWeight: "700", color: "#fff", marginBottom: "12px" }}>
          Open a Zerodha account
        </h2>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.85)", marginBottom: "8px" }}>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&amp;O trades.
        </p>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)", marginBottom: "36px" }}>
          Join 1.3+ crore investors already on Zerodha
        </p>
        <Link to="/signup" style={{
          display: "inline-block", background: "#fff", color: "#387ed1",
          padding: "14px 52px", borderRadius: "8px", fontSize: "16px",
          fontWeight: "700", textDecoration: "none",
          boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
        }}>
          Sign up for free →
        </Link>
      </div>
    </section>
  );
}

export default OpenAccount;
