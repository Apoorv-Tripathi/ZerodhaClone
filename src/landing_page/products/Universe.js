import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <section style={{ padding: "80px 0", background: "#fafafa", borderTop: "1px solid #f0f0f0", textAlign: "center" }}>
      <div className="container">
        <h2 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "12px" }}>The Zerodha Universe</h2>
        <p style={{ fontSize: "16px", color: "#666", marginBottom: "48px" }}>
          Extend your trading and investment experience even further with our partner platforms
        </p>
        <div className="row justify-content-center g-4 mb-5">
          {[
            { name: "Smallcase", img:"/media/smallcaseLogo.png", desc: "Thematic investment platform" },
            { name: "Sensibull", img:"/media/sensibullLogo.svg",desc: "Options trading platform" },
            { name: "Streak", img:"/media/streakLogo.png",desc: "Algo trade without coding" },
            { name: "Ditto", img:"/media/dittoLogo.png",desc: "Simplified insurance" },
            { name: "GoldenPi", img:"/media/goldenpiLogo.png",desc: "Bonds and debentures" },
            { name: "Tijori", img:"/media/tijori.png",desc: "Investment research" },
          ].map(p => (
            <div className="col-6 col-md-4 col-lg-2" key={p.name}>
              <div style={{ background: "#fff", borderRadius: "10px", padding: "19px 12px", border: "1px solid #eee", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <img src={p.img} alt={p.name} style={{ height: "32px", objectFit: "contain", marginBottom: "10px" }} />
                <p style={{ fontWeight: "600", fontSize: "13px", color: "#333", margin: "0 0 4px" }}>{p.name}</p>
                <p style={{ fontSize: "11px", color: "#999", margin: 0 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/signup" className="btn btn-primary" style={{ fontSize: "16px", padding: "12px 48px", borderRadius: "8px" }}>
          Open a free account
        </Link>
      </div>
    </section>
  );
}

export default Universe;
