import React from "react";
import { Link } from "react-router-dom";

const stats = [
  { value: "1.3Cr+", label: "Clients" },
  { value: "₹3.5L Cr", label: "Assets held" },
  { value: "15%+", label: "of retail order vol." },
  { value: "₹0", label: "Equity delivery" },
];

function Stats() {
  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      {/* Stat pills */}
      <div className="container mb-5">
        <div className="row g-4 text-center">
          {stats.map(s => (
            <div className="col-6 col-md-3" key={s.label}>
              <div style={{ padding: "28px 16px", background: "#f0f6ff", borderRadius: "12px" }}>
                <div style={{ fontSize: "28px", fontWeight: "700", color: "#387ed1" }}>{s.value}</div>
                <div style={{ fontSize: "13px", color: "#666", marginTop: "4px" }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust section */}
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h2 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "32px" }}>Trust with confidence</h2>
            {[
              { title: "Customer-first always", desc: "That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments." },
              { title: "No spam or gimmicks", desc: 'No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace.' },
              { title: "The Zerodha universe", desc: "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer tailored services for your needs." },
              { title: "Do better with money", desc: "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better." },
            ].map(item => (
              <div key={item.title} style={{ marginBottom: "24px" }}>
                <h4 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "6px", color: "#1a1a1a" }}>{item.title}</h4>
                <p style={{ color: "#666", fontSize: "14px", margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="col-lg-6 text-center">
            <img src="/media/ecosystem.png" alt="Zerodha ecosystem" style={{ maxWidth: "440px", width: "100%" }} />
            <div style={{ marginTop: "24px", display: "flex", justifyContent: "center", gap: "32px" }}>
              <Link to="/product" style={{ textDecoration: "none", fontSize: "14px", color: "#387ed1", fontWeight: "500" }}>
                Explore products →
              </Link>
              <a href="https://kite.zerodha.com" target="_blank" rel="noreferrer" style={{ textDecoration: "none", fontSize: "14px", color: "#387ed1", fontWeight: "500" }}>
                Try Kite demo →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
