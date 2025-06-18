import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLoginClick, onToggleDark }) => {
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar">
      <div className="logo">🥗 Nutri Mind</div>
      <nav className="navbar-right">
        <Link to="/" className="nav-link">🏠 Home</Link>
        <button className="nav-link" onClick={() => scrollToSection('#features')}>✨ Features</button>
        <button className="nav-link" onClick={() => scrollToSection('#how-it-works')}>⚙️ How It Works</button>
        <button className="nav-link" onClick={() => scrollToSection('#testimonials')}>💬 Testimonials</button>
        <Link to="/dashboard" className="nav-link">📊 Dashboard</Link>
        <button className="nav-link" onClick={() => scrollToSection('#about')}>ℹ️ About</button>

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
