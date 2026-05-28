import React, { useState } from "react";
import Menu from "./Menu";

const TopBar = () => {
  const [indices] = useState({
    nifty: { value: "22,532.75", change: "+0.42%", isUp: true },
    sensex: { value: "74,119.39", change: "+0.38%", isUp: true },
  });

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className={`index-points ${indices.nifty.isUp ? "profit" : "loss"}`}>
            {indices.nifty.value}
          </p>
          <p className={`percent ${indices.nifty.isUp ? "profit" : "loss"}`}>
            {indices.nifty.change}
          </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className={`index-points ${indices.sensex.isUp ? "profit" : "loss"}`}>
            {indices.sensex.value}
          </p>
          <p className={`percent ${indices.sensex.isUp ? "profit" : "loss"}`}>
            {indices.sensex.change}
          </p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
