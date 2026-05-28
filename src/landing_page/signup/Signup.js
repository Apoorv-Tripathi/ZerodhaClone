import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", padding: "40px" }}>
          <div style={{ fontSize: "60px", marginBottom: "16px" }}>🎉</div>
          <h2 style={{ fontWeight: "700", marginBottom: "8px" }}>Account Created!</h2>
          <p style={{ color: "#666", marginBottom: "24px" }}>Welcome, {form.name}! Your Zerodha account is ready.</p>
          <Link to="/" className="btn btn-primary me-3">Go to Home</Link>
          <Link to="/dashboard" className="btn btn-outline-primary">Open Dashboard</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f9f9f9", padding: "40px 16px" }}>
      <div style={{ width: "100%", maxWidth: "440px" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <img src="/media/logo.svg" alt="Zerodha" style={{ width: "120px", marginBottom: "16px" }} />
          <h2 style={{ fontWeight: "700", fontSize: "22px", marginBottom: "6px" }}>Open a free account</h2>
          <p style={{ color: "#888", fontSize: "14px" }}>Invest in stocks, F&amp;O, mutual funds and more</p>
        </div>
        <div style={{ background: "#fff", borderRadius: "12px", padding: "32px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
          <form onSubmit={handleSubmit}>
            {[
              { name: "name", label: "Full Name", type: "text", placeholder: "Enter your full name" },
              { name: "email", label: "Email Address", type: "email", placeholder: "Enter your email" },
              { name: "phone", label: "Mobile Number", type: "tel", placeholder: "10-digit mobile number" },
              { name: "password", label: "Create Password", type: "password", placeholder: "Minimum 8 characters" },
            ].map(field => (
              <div key={field.name} style={{ marginBottom: "18px" }}>
                <label style={{ fontSize: "13px", fontWeight: "500", color: "#444", display: "block", marginBottom: "6px" }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={form[field.name]}
                  onChange={handleChange}
                  required
                  minLength={field.name === "password" ? 8 : undefined}
                  pattern={field.name === "phone" ? "[0-9]{10}" : undefined}
                  style={{
                    width: "100%", padding: "10px 14px", border: "1px solid #ddd",
                    borderRadius: "6px", fontSize: "14px", outline: "none",
                    transition: "border-color 0.15s",
                  }}
                  onFocus={e => e.target.style.borderColor = "#387ed1"}
                  onBlur={e => e.target.style.borderColor = "#ddd"}
                />
              </div>
            ))}
            <button type="submit" className="btn btn-primary w-100 mt-2" style={{ padding: "11px", fontSize: "15px", fontWeight: "500", borderRadius: "6px" }}>
              Create Account
            </button>
          </form>
          <p style={{ textAlign: "center", fontSize: "12px", color: "#aaa", marginTop: "16px", marginBottom: 0 }}>
            By signing up, you agree to Zerodha's{" "}
            <a href="https://zerodha.com/terms-and-conditions/" target="_blank" rel="noreferrer">Terms &amp; Conditions</a>
          </p>
        </div>
        <p style={{ textAlign: "center", fontSize: "13px", color: "#888", marginTop: "20px" }}>
          Already have an account?{" "}
          <a href="https://kite.zerodha.com" target="_blank" rel="noreferrer" style={{ color: "#387ed1", fontWeight: "500" }}>Log in</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
