import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./dashboard/dashboard.css";

// Landing pages
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductsPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound";

// Dashboard
import DashboardHome from "./dashboard/components/Home";

const LandingLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {/* Dashboard - full screen, no landing navbar/footer */}
      <Route path="/dashboard/*" element={<DashboardHome />} />

      {/* Landing pages */}
      <Route path="/" element={<LandingLayout><HomePage /></LandingLayout>} />
      <Route path="/signup" element={<LandingLayout><Signup /></LandingLayout>} />
      <Route path="/about" element={<LandingLayout><AboutPage /></LandingLayout>} />
      <Route path="/product" element={<LandingLayout><ProductsPage /></LandingLayout>} />
      <Route path="/pricing" element={<LandingLayout><PricingPage /></LandingLayout>} />
      <Route path="/support" element={<LandingLayout><SupportPage /></LandingLayout>} />
      <Route path="*" element={<LandingLayout><NotFound /></LandingLayout>} />
    </Routes>
  </BrowserRouter>
);
