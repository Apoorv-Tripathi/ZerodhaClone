import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders")
      .then((res) => { setOrders(res.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p className="title">Loading orders...</p>;

  if (orders.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "80px 20px" }}>
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>📋</div>
        <h4 style={{ color: "#888", fontWeight: 400 }}>No orders placed today</h4>
        <p style={{ color: "#aaa", fontSize: "14px" }}>Use the watchlist on the left to place your first order.</p>
        <Link to="/dashboard" className="btn btn-blue" style={{ marginTop: "16px", display: "inline-block" }}>
          Go to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <>
      <h3 className="title">Orders ({orders.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={i}>
                <td><strong>{order.name}</strong></td>
                <td>{order.qty}</td>
                <td>{order.price > 0 ? `₹${order.price}` : "Market"}</td>
                <td>
                  <span style={{
                    background: order.mode === "BUY" ? "#e8f5e9" : "#ffebee",
                    color: order.mode === "BUY" ? "#28a745" : "#dc3545",
                    padding: "2px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: 600,
                  }}>
                    {order.mode}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
