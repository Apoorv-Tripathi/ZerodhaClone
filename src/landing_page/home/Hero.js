import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section style={{ padding: "80px 0 60px", textAlign: "center", background: "#fff" }}>
      <div className="container">
        <h1 style={{ fontSize: "48px", fontWeight: "700", color: "#1a1a1a", marginBottom: "16px" }}>
          Invest in everything
        </h1>
        <p style={{ fontSize: "18px", color: "#666", marginBottom: "36px", maxWidth: "520px", margin: "0 auto 36px" }}>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs, and more
        </p>
        <Link
          to="/signup"
          className="btn btn-primary"
          style={{ fontSize: "16px", padding: "12px 40px", borderRadius: "8px", fontWeight: "500", marginBottom: "60px" }}
        >
          Open a free account
        </Link>
        <div style={{ marginTop: "60px" }}>
          <img
            src="/media/homeHero.png"
            alt="Zerodha Trading Platform"
            style={{ maxWidth: "100%", borderRadius: "12px", boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
