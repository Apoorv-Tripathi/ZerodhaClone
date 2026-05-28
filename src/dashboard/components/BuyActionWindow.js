import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [orderType, setOrderType] = useState("Market");
  const [mode, setMode] = useState("BUY");
  const [loading, setLoading] = useState(false);

  const generalContext = useContext(GeneralContext);

  const handleOrder = () => {
    setLoading(true);
    axios.post("http://localhost:3002/newOrder", {
      name: uid, qty: stockQuantity, price: stockPrice, mode,
    })
      .then(() => generalContext.closeBuyWindow())
      .catch(() => generalContext.closeBuyWindow())
      .finally(() => setLoading(false));
  };

  const margin = (stockQuantity * stockPrice * 0.2).toFixed(2);

  return (
    <div id="buy-window" draggable="true">
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
        <strong style={{ fontSize: "14px", color: "#1a1a1a" }}>{uid}</strong>
        <div style={{ display: "flex", gap: "6px" }}>
          {["BUY", "SELL"].map((m) => (
            <button key={m} onClick={() => setMode(m)}
              style={{
                padding: "4px 14px", borderRadius: "4px", border: "none", cursor: "pointer", fontSize: "12px", fontWeight: 600,
                background: mode === m ? (m === "BUY" ? "#387ed1" : "#e84040") : "#f0f0f0",
                color: mode === m ? "#fff" : "#555",
              }}>
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Order type */}
      <div className="order-type-tabs">
        {["Market", "Limit", "SL", "SL-M"].map((type) => (
          <button key={type} className={`tab-btn ${orderType === type ? "active" : ""}`}
            onClick={() => setOrderType(type)}>{type}</button>
        ))}
      </div>

      {/* Inputs */}
      <div className="inputs">
        <fieldset>
          <legend>Qty.</legend>
          <input type="number" min="1" value={stockQuantity}
            onChange={(e) => setStockQuantity(Number(e.target.value))} />
        </fieldset>
        {orderType !== "Market" && (
          <fieldset>
            <legend>Price</legend>
            <input type="number" step="0.05" min="0" value={stockPrice}
              onChange={(e) => setStockPrice(Number(e.target.value))} />
          </fieldset>
        )}
      </div>

      {/* Footer */}
      <div className="buttons">
        <span>Margin ≈ ₹{margin}</span>
        <div>
          <button className={`btn ${mode === "BUY" ? "btn-blue" : "btn-sell"}`}
            onClick={handleOrder} disabled={loading}>
            {loading ? "..." : mode}
          </button>
          <button className="btn btn-grey" onClick={generalContext.closeBuyWindow}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
