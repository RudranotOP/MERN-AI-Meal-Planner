import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/style.css";

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <h2>Nutri Mind</h2>
      <ul>
        <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>🏠 Home</Link></li>
        <li><Link to="/preferences" className={location.pathname === "/preferences" ? "active" : ""}>⚙️ Preferences</Link></li>
        <li><Link to="/dashboard" className={location.pathname === "/dashboard" ? "active" : ""}>📊 Dashboard</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
