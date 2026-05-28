import React from "react";
import { Link } from "react-router-dom";
import { holdings, positions } from "../data/data";

const Summary = () => {
  const totalInvestment = holdings.reduce((s, h) => s + h.avg * h.qty, 0);
  const currentValue = holdings.reduce((s, h) => s + h.price * h.qty, 0);
  const holdingsPnl = currentValue - totalInvestment;
  const holdingsPnlPct = ((holdingsPnl / totalInvestment) * 100).toFixed(2);

  const positionsPnl = positions.reduce((s, p) => s + (p.price - p.avg) * p.qty, 0);

  const fmt = (n) =>
    n >= 1000 ? (n / 1000).toFixed(2) + "k" : n.toFixed(2);

  return (
    <div style={{ padding: "4px 0" }}>
      <div className="username">
        <h6>Hi, Apoorv 👋</h6>
        <hr className="divider" />
      </div>

      {/* Equity Margin */}
      <div className="section">
        <span><p>Equity</p></span>
        <div className="data">
          <div className="first">
            <h3>₹3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />
          <div className="second">
            <p>Margins used <span>₹0</span></p>
            <p>Opening balance <span>₹3.74k</span></p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      {/* Holdings */}
      <div className="section">
        <span>
          <p>
            Holdings ({holdings.length}){" "}
            <Link to="/dashboard/holdings" style={{ fontSize: "11px", color: "#387ed1", textDecoration: "none", marginLeft: "6px" }}>
              View all →
            </Link>
          </p>
        </span>
        <div className="data">
          <div className="first">
            <h3 className={holdingsPnl >= 0 ? "profit" : "loss"}>
              {holdingsPnl >= 0 ? "+" : ""}₹{fmt(Math.abs(holdingsPnl))}{" "}
              <small className={holdingsPnl >= 0 ? "profit" : "loss"}>
                {holdingsPnl >= 0 ? "+" : ""}{holdingsPnlPct}%
              </small>
            </h3>
            <p>P&amp;L</p>
          </div>
          <hr />
          <div className="second">
            <p>Current value <span>₹{fmt(currentValue)}</span></p>
            <p>Investment <span>₹{fmt(totalInvestment)}</span></p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      {/* Positions */}
      <div className="section">
        <span>
          <p>
            Positions ({positions.length}){" "}
            <Link to="/dashboard/positions" style={{ fontSize: "11px", color: "#387ed1", textDecoration: "none", marginLeft: "6px" }}>
              View all →
            </Link>
          </p>
        </span>
        <div className="data">
          <div className="first">
            <h3 className={positionsPnl >= 0 ? "profit" : "loss"}>
              {positionsPnl >= 0 ? "+" : ""}₹{fmt(Math.abs(positionsPnl))}
            </h3>
            <p>Day P&amp;L</p>
          </div>
          <hr />
          <div className="second">
            {positions.map((p) => (
              <p key={p.name}>
                {p.name}{" "}
                <span className={(p.price - p.avg) >= 0 ? "profit" : "loss"}>
                  {(p.price - p.avg) >= 0 ? "+" : ""}₹{((p.price - p.avg) * p.qty).toFixed(2)}
                </span>
              </p>
            ))}
          </div>
        </div>
        <hr className="divider" />
      </div>
    </div>
  );
};

export default Summary;
