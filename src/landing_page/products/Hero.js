import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section style={{ padding: "80px 0 60px", textAlign: "center", background: "#fff", borderBottom: "1px solid #f0f0f0" }}>
      <div className="container">
        <h1 style={{ fontSize: "44px", fontWeight: "700", marginBottom: "16px" }}>Technology</h1>
        <p style={{ fontSize: "18px", color: "#666", marginBottom: "16px", maxWidth: "500px", margin: "0 auto 16px" }}>
          Sleek, modern and intuitive trading platforms
        </p>
        <p style={{ fontSize: "14px", color: "#888" }}>
          Check out our{" "}
          <Link to="/pricing" style={{ color: "#387ed1", textDecoration: "none", fontWeight: "500" }}>
            investment offerings →
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Hero;
