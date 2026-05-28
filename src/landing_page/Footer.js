import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ background: "#f9f9f9", borderTop: "1px solid #e8e8e8", paddingTop: "60px", paddingBottom: "40px" }}>
      <div className="container">
        <div className="row g-4 mb-5">
          <div className="col-lg-4">
            <img src="/media/logo.svg" style={{ width: "110px", marginBottom: "16px" }} alt="Zerodha" />
            <p style={{ fontSize: "13px", color: "#888", lineHeight: "1.7" }}>
              &copy; 2010 – 2024, Zerodha Broking Ltd.<br />All rights reserved.
            </p>
          </div>
          {[
            {
              heading: "Company",
              links: [
                { label: "About", to: "/about", internal: true },
                { label: "Products", to: "/product", internal: true },
                { label: "Pricing", to: "/pricing", internal: true },
                { label: "Careers", to: "https://zerodha.com/careers/", internal: false },
                { label: "Zerodha.tech", to: "https://zerodha.tech", internal: false },
              ]
            },
            {
              heading: "Support",
              links: [
                { label: "Contact", to: "/support", internal: true },
                { label: "Support portal", to: "/support", internal: true },
                { label: "Z-Connect blog", to: "https://zerodha.com/z-connect/", internal: false },
                { label: "List of charges", to: "https://zerodha.com/charges/", internal: false },
              ]
            },
            {
              heading: "Account",
              links: [
                { label: "Open an account", to: "/signup", internal: true },
                { label: "Fund transfer", to: "https://kite.zerodha.com/funds", internal: false },
                { label: "60 day challenge", to: "https://zerodha.com/60-day-challenge/", internal: false },
              ]
            },
          ].map(col => (
            <div className="col-lg-2 col-6" key={col.heading}>
              <p style={{ fontWeight: "600", fontSize: "13px", color: "#333", marginBottom: "12px" }}>{col.heading}</p>
              {col.links.map(link => (
                col.internal
                  ? <Link key={link.label} to={link.to} style={{ display: "block", fontSize: "13px", color: "#666", textDecoration: "none", lineHeight: "2.2" }}>{link.label}</Link>
                  : <a key={link.label} href={link.to} target="_blank" rel="noreferrer" style={{ display: "block", fontSize: "13px", color: "#666", textDecoration: "none", lineHeight: "2.2" }}>{link.label}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid #eee", paddingTop: "24px" }}>
          <p style={{ fontSize: "12px", color: "#aaa", lineHeight: "1.8" }}>
            Zerodha Broking Ltd.: Member of NSE &amp; BSE – SEBI Registration no.: INZ000031633. CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015. Registered Address: #153/154, 4th Cross, Dollars Colony, J.P Nagar 4th Phase, Bengaluru - 560078.
          </p>
          <p style={{ fontSize: "12px", color: "#aaa", lineHeight: "1.8" }}>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
