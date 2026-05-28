import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const menuItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/dashboard/orders", label: "Orders" },
    { path: "/dashboard/holdings", label: "Holdings" },
    { path: "/dashboard/positions", label: "Positions" },
    { path: "/dashboard/funds", label: "Funds" },
    { path: "/dashboard/apps", label: "Apps" },
  ];

  return (
    <div className="menu-container">
      <Link to="/">
        <img src="/media/logo.svg" style={{ width: "50px" }} alt="Zerodha" />
      </Link>
      <div className="menus">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link style={{ textDecoration: "none" }} to={item.path}>
                <p className={location.pathname === item.path ? "menu selected" : "menu"}>
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        <div className="profile" onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
          <div className="avatar">AT</div>
          <p className="username">Apoorv</p>
        </div>
        {isProfileDropdownOpen && (
          <div className="profile-dropdown">
            <p>Profile</p>
            <p>Settings</p>
            <p onClick={() => (window.location.href = "/")}>Logout</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
