import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";
import BmiChart from "./BmiChart";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`dashboard-wrapper ${darkMode ? "dark" : ""}`}>
      {/* 🌗 Dark Mode Toggle */}
      <div className="dashboard-toggle">
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider round"></span>
        </label>
      </div>

      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Nutri Mind</h2>
        <ul>
          <li><Link to="/">🏠 Home</Link></li>
          <li><Link to="/preferences">⚙️ Preferences</Link></li>
          <li><Link to="/dashboard" className="active">📊 Dashboard</Link></li>
        </ul>
      </aside>

      {/* Main Dashboard Content */}
      <main className="dashboard-content">
        <h1>Your Health Dashboard</h1>
        <p>👋 Hello, Rudra! Welcome back to your healthy journey.</p>

        {/* Quick Stats */}
        <div className="stat-cards">
          <div className="stat-card">
            <h3>Today's Calories</h3>
            <p>1,950 kcal</p>
          </div>
          <div className="stat-card">
            <h3>Protein Intake</h3>
            <p>120g</p>
          </div>
          <div className="stat-card">
            <h3>Water Intake</h3>
            <p>2.3L</p>
          </div>
        </div>

        {/* Weekly Goals Progress */}
        <h2 className="section-title">Weekly Goals</h2>
        <div className="progress-group">
          <p>Calories</p>
          <div className="progress-bar">
            <div className="fill" style={{ width: "75%" }}>75%</div>
          </div>
          <p>Protein</p>
          <div className="progress-bar">
            <div className="fill" style={{ width: "60%" }}>60%</div>
          </div>
          <p>Water</p>
          <div className="progress-bar">
            <div className="fill" style={{ width: "90%" }}>90%</div>
          </div>
        </div>

        {/* BMI History Chart */}
        <div className="bmi-chart">
          <h3>📈 Your BMI History</h3>
          <BmiChart />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
