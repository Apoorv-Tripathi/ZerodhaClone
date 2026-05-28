import React from "react";

const ticketCategories = [
  {
    title: "Account Opening",
    icon: "fa-user-plus",
    links: [
      "Online Account Opening",
      "Offline Account Opening",
      "Company, Partnership and HUF Account Opening",
      "NRI Account Opening",
      "Charges at Zerodha",
      "Zerodha IDFC FIRST Bank 3-in-1 Account",
      "Getting Started",
    ],
  },
  {
    title: "Your Zerodha Account",
    icon: "fa-cog",
    links: [
      "Profile & Account Details",
      "Login & Password Issues",
      "Two-Factor Authentication",
      "Bank Account Changes",
      "Nominee Details",
      "Power of Attorney (POA)",
      "Segment Activation",
    ],
  },
  {
    title: "Trading & Markets",
    icon: "fa-line-chart",
    links: [
      "Placing Orders on Kite",
      "Order Types & Products",
      "Margins",
      "Positions & Holdings",
      "Market Timings",
      "Corporate Actions",
      "IPO Applications",
    ],
  },
  {
    title: "Funds",
    icon: "fa-money",
    links: [
      "Adding Funds",
      "Withdrawing Funds",
      "Fund Transfer Issues",
      "UPI Payments",
      "Demat Account Charges",
      "Ledger & Statements",
    ],
  },
  {
    title: "Kite & Apps",
    icon: "fa-mobile",
    links: [
      "Kite Web Issues",
      "Kite Mobile App",
      "Coin (Mutual Funds)",
      "Console Reports",
      "Varsity Learning App",
      "Kite Connect API",
    ],
  },
  {
    title: "Mutual Funds",
    icon: "fa-pie-chart",
    links: [
      "Investing in Direct MFs",
      "SIP Setup & Management",
      "MF Redemption",
      "MF Statements",
      "Tax on Mutual Funds",
      "MF Portfolio Review",
    ],
  },
];

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 mb-4">To create a ticket, select a relevant topic</h1>
        {ticketCategories.map((category, index) => (
          <div className="col-4 p-4 mt-2 mb-2" key={index}>
            <h4>
              <i className={`fa ${category.icon}`} aria-hidden="true"></i>{" "}
              {category.title}
            </h4>
            {category.links.map((link, linkIndex) => (
              <React.Fragment key={linkIndex}>
                <a href="#!" style={{ textDecoration: "none", lineHeight: "2.5", display: "block" }}>
                  {link}
                </a>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
