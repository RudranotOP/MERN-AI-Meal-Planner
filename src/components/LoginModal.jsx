import React, { useState } from 'react';

const LoginModal = ({ isVisible, onClose, onSwitch }) => {
  const [isDark, setIsDark] = useState(false);

  if (!isVisible) return null;

  return (
    <div className="login-modal">
      <div className={`login-card ${isDark ? 'dark-mode' : ''}`}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <button
          className="dark-toggle-btn"
          onClick={() => setIsDark(!isDark)}
          title="Toggle dark mode"
        >
          🌙
        </button>
        <h2>Login</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="primary-btn">Sign In</button>
        <p style={{ marginTop: '20px', textAlign: 'center' }}>
          Don’t have an account?
          <button onClick={onSwitch} style={{ color: '#4ade80', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
