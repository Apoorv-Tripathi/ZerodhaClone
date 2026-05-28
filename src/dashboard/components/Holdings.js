import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState(null);
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings")
      .then((res) => { setAllHoldings(res.data); setLoading(false); })
      .catch(() => { setError("Backend not running. Showing sample data."); setLoading(false); });
  }, []);

  const handleSort = (key) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else { setSortKey(key); setSortAsc(true); }
  };

  const displayed = [...allHoldings]
    .filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (!sortKey) return 0;
      const v = sortKey === "name" ? a[sortKey].localeCompare(b[sortKey])
        : a[sortKey] - b[sortKey];
      return sortAsc ? v : -v;
    });

  const totalInvestment = allHoldings.reduce((s, h) => s + h.avg * h.qty, 0);
  const currentValue = allHoldings.reduce((s, h) => s + h.price * h.qty, 0);
  const pnl = currentValue - totalInvestment;
  const pnlPct = totalInvestment > 0 ? ((pnl / totalInvestment) * 100).toFixed(2) : 0;

  const SortTh = ({ label, sKey }) => (
    <th onClick={() => handleSort(sKey)} style={{ cursor: "pointer", userSelect: "none" }}>
      {label} {sortKey === sKey ? (sortAsc ? "▲" : "▼") : ""}
    </th>
  );

  const data = {
    labels: allHoldings.map((s) => s.name),
    datasets: [{ label: "Stock Price", data: allHoldings.map((s) => s.price), backgroundColor: "rgba(56,126,209,0.5)" }],
  };

  if (loading) return <p className="title">Loading holdings...</p>;

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <h3 className="title" style={{ margin: 0 }}>Holdings ({allHoldings.length})</h3>
        <input
          type="text" placeholder="Search instrument..."
          value={search} onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "6px 12px", border: "1px solid #ddd", borderRadius: "6px", fontSize: "13px", outline: "none", width: "200px" }}
        />
      </div>

      {error && <p style={{ color: "#e17055", fontSize: "13px", marginBottom: "12px" }}>⚠ {error}</p>}

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <SortTh label="Instrument" sKey="name" />
              <SortTh label="Qty." sKey="qty" />
              <SortTh label="Avg. cost" sKey="avg" />
              <SortTh label="LTP" sKey="price" />
              <th>Cur. val</th>
              <th>P&amp;L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {displayed.map((stock, i) => {
              const curValue = stock.price * stock.qty;
              const pnlVal = curValue - stock.avg * stock.qty;
              const profClass = pnlVal >= 0 ? "profit" : "loss";
              return (
                <tr key={i}>
                  <td><strong>{stock.name}</strong></td>
                  <td>{stock.qty}</td>
                  <td>₹{stock.avg.toFixed(2)}</td>
                  <td>₹{stock.price.toFixed(2)}</td>
                  <td>₹{curValue.toFixed(2)}</td>
                  <td className={profClass}>{pnlVal >= 0 ? "+" : ""}₹{pnlVal.toFixed(2)}</td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={stock.isLoss ? "loss" : "profit"}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div style={{ display: "flex", gap: "16px", marginTop: "20px" }}>
        {[
          { label: "Total investment", value: `₹${totalInvestment.toFixed(2)}`, cls: "" },
          { label: "Current value", value: `₹${currentValue.toFixed(2)}`, cls: "" },
          { label: "P&L", value: `${pnl >= 0 ? "+" : ""}₹${pnl.toFixed(2)} (${pnl >= 0 ? "+" : ""}${pnlPct}%)`, cls: pnl >= 0 ? "profit" : "loss" },
        ].map((c) => (
          <div key={c.label} style={{ background: "#fff", borderRadius: "8px", padding: "14px 20px", flex: 1, border: "1px solid #eee" }}>
            <h5 className={c.cls} style={{ margin: "0 0 4px", fontWeight: 700, fontSize: "18px" }}>{c.value}</h5>
            <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>{c.label}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "24px" }}>
        <VerticalGraph data={data} />
      </div>
    </>
  );
};

export default Holdings;
