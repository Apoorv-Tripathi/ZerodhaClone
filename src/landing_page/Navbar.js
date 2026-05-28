import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/signup", label: "Signup" },
    { to: "/about", label: "About" },
    { to: "/product", label: "Product" },
    { to: "/pricing", label: "Pricing" },
    { to: "/support", label: "Support" },
  ];

  return (
    <nav
      style={{
        backgroundColor: "#fff",
        borderBottom: scrolled ? "1px solid #e8e8e8" : "1px solid #f0f0f0",
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
        position: "sticky", top: 0, zIndex: 999,
        transition: "box-shadow 0.2s",
      }}
      className="navbar navbar-expand-lg"
    >
      <div className="container py-2">
        <Link className="navbar-brand" to="/">
          <img src="/media/logo.svg" style={{ width: "110px" }} alt="Zerodha" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-1">
            {links.map(({ to, label }) => (
              <li className="nav-item" key={to}>
                <Link
                  className="nav-link px-3"
                  to={to}
                  style={{
                    color: location.pathname === to ? "#387ed1" : "#555",
                    fontWeight: location.pathname === to ? "600" : "400",
                    fontSize: "14px",
                    borderRadius: "6px",
                    transition: "all 0.15s",
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="nav-item ms-2">
              <Link
                to="/dashboard"
                className="btn btn-primary px-4"
                style={{ fontSize: "14px", borderRadius: "6px", fontWeight: "500" }}
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
