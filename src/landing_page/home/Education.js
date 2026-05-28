import React from "react";

function Education() {
  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center">
            <img src="/media/education.svg" alt="Education" style={{ maxWidth: "400px", width: "100%" }} />
          </div>
          <div className="col-lg-6">
            <h2 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "20px" }}>
              Free and open market education
            </h2>
            <div style={{ marginBottom: "28px" }}>
              <p style={{ fontSize: "15px", color: "#555" }}>
                Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
              </p>
              <a href="https://zerodha.com/varsity/" target="_blank" rel="noreferrer"
                style={{ textDecoration: "none", fontSize: "14px", color: "#387ed1", fontWeight: "500" }}>
                Varsity →
              </a>
            </div>
            <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: "24px" }}>
              <p style={{ fontSize: "15px", color: "#555" }}>
                TradingQ&amp;A, the most active trading and investment community in India for all your market related queries.
              </p>
              <a href="https://tradingqna.com/" target="_blank" rel="noreferrer"
                style={{ textDecoration: "none", fontSize: "14px", color: "#387ed1", fontWeight: "500" }}>
                TradingQ&amp;A →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
