import React from "react";
import { positions } from "../data/data";

const Positions = () => {
  const totalPnl = positions.reduce((s, p) => s + (p.price - p.avg) * p.qty, 0);

  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&amp;L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((stock, i) => {
              const pnlVal = (stock.price - stock.avg) * stock.qty;
              const profClass = pnlVal >= 0 ? "profit" : "loss";
              return (
                <tr key={i}>
                  <td><span style={{ background: "#eef", color: "#387ed1", borderRadius: "3px", padding: "2px 6px", fontSize: "11px", fontWeight: 600 }}>{stock.product}</span></td>
                  <td><strong>{stock.name}</strong></td>
                  <td>{stock.qty}</td>
                  <td>₹{stock.avg.toFixed(2)}</td>
                  <td>₹{stock.price.toFixed(2)}</td>
                  <td className={profClass}>{pnlVal >= 0 ? "+" : ""}₹{pnlVal.toFixed(2)}</td>
                  <td className={stock.isLoss ? "loss" : "profit"}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: "20px", background: "#fff", borderRadius: "8px", padding: "14px 20px", border: "1px solid #eee", display: "inline-block" }}>
        <h5 className={totalPnl >= 0 ? "profit" : "loss"} style={{ margin: "0 0 4px", fontWeight: 700, fontSize: "18px" }}>
          {totalPnl >= 0 ? "+" : ""}₹{totalPnl.toFixed(2)}
        </h5>
        <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>Total P&amp;L</p>
      </div>
    </>
  );
};

export default Positions;
