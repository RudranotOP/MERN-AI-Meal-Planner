import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = ({ onLoginClick, onToggleDark }) => {
  return (
    <header className="navbar">
      <div className="logo">🥗 Nutri Mind</div>
      <nav className="navbar-right">
        <a href="#">🏠 Home</a>
        <a href="#features">✨ Features</a>
        <a href="#how-it-works">⚙️ How It Works</a>
        <a href="#testimonials">💬 Testimonials</a>
        <a href="bmi.html">BMI Calculator</a>
        <li>
  <Link to="/dashboard">📊 Dashboard</Link>
</li>
        <a href="#about">ℹ️ About</a>
        <button onClick={onLoginClick} className="cta">Login</button>
        
        {/* 🌙 Dark Mode Toggle */}
        <span
          id="dark-mode-toggle"
          onClick={onToggleDark}
          title="Toggle Dark Mode"
          style={{
            cursor: 'pointer',
            fontSize: '20px',
            marginLeft: '10px',
            userSelect: 'none'
          }}
        >
          🌙
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
