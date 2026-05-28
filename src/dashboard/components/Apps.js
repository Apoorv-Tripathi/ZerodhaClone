import React from "react";

const apps = [
  { name: "Kite", desc: "Our flagship trading platform for web and mobile", color: "#387ed1", icon: "📈",  },
  { name: "Console", desc: "Central dashboard for reports and analytics", color: "#6c5ce7", icon: "📊",  },
  { name: "Coin", desc: "Direct mutual funds with zero commission", color: "#00b894", icon: "💰",  },
  { name: "Varsity", desc: "Free stock market education platform", color: "#e17055", icon: "📚",  },
  { name: "Sensibull", desc: "Options trading made easy", color: "#fdcb6e", icon: "🎯",  },
  { name: "Streak", desc: "Algo trading without coding", color: "#74b9ff", icon: "⚡",  },
];

const Apps = () => {
  return (
    <div>
      <h3 className="title">Apps</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
        {apps.map((app) => (
          <a
            key={app.name}
            href={app.link}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div style={{
              background: "#fff", borderRadius: "10px", padding: "24px",
              border: "1px solid #eee", boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              transition: "box-shadow 0.2s", cursor: "pointer",
            }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.1)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)"}
            >
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>{app.icon}</div>
              <h5 style={{ fontWeight: "700", color: app.color, marginBottom: "6px" }}>{app.name}</h5>
              <p style={{ fontSize: "13px", color: "#888", margin: 0 }}>{app.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Apps;
