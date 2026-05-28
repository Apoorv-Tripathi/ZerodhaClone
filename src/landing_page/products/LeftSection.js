import React from "react";

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
  return (
    <section style={{ padding: "72px 0", borderBottom: "1px solid #f0f0f0" }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center">
            <img src={imageURL} alt={productName} style={{ maxWidth: "88%", borderRadius: "12px", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }} />
          </div>
          <div className="col-lg-6">
            <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "16px" }}>{productName}</h2>
            <p style={{ fontSize: "16px", color: "#666", lineHeight: "1.7", marginBottom: "28px" }}>{productDescription}</p>
            <div style={{ display: "flex", gap: "24px", marginBottom: "24px" }}>
              {tryDemo && <a href={tryDemo} target="_blank" rel="noreferrer" style={{ color: "#387ed1", fontWeight: "500", fontSize: "14px", textDecoration: "none" }}>Try Demo →</a>}
              {learnMore && <a href={learnMore} target="_blank" rel="noreferrer" style={{ color: "#387ed1", fontWeight: "500", fontSize: "14px", textDecoration: "none" }}>Learn More →</a>}
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {googlePlay && <a href={googlePlay} target="_blank" rel="noreferrer"><img src="/media/googlePlayBadge.svg" alt="Google Play" style={{ height: "40px" }} /></a>}
              {appStore && <a href={appStore} target="_blank" rel="noreferrer"><img src="/media/appstoreBadge.svg" alt="App Store" style={{ height: "40px" }} /></a>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftSection;
