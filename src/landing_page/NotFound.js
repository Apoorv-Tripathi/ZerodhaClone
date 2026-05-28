import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "40px" }}>
      <div>
        <div style={{ fontSize: "80px", fontWeight: "700", color: "#e8e8e8", lineHeight: 1 }}>404</div>
        <h2 style={{ fontWeight: "700", marginTop: "16px" }}>Page not found</h2>
        <p style={{ color: "#888", marginBottom: "28px" }}>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn btn-primary me-3">Go Home</Link>
        <Link to="/support" className="btn btn-outline-secondary">Contact Support</Link>
      </div>
    </div>
  );
}

export default NotFound;
