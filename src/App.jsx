import './style/style.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Dashboard from './components/Dashboard';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';

import { useState, useEffect } from 'react';

// ✅ Wrapper to use `useLocation`
const AppWrapper = () => {
  const location = useLocation();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const openLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const openRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const closeModals = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  return (
    <>
      {/* 🌈 Floating Background Icons */}
      <div className="floating-icons">
        <span className="icon icon1">🍎</span>
        <span className="icon icon2">🥦</span>
        <span className="icon icon3">🧠</span>
        <span className="icon icon4">🍞</span>
      </div>

      {/* ✅ Show Navbar only on non-dashboard routes */}
      {location.pathname !== "/dashboard" && (
        <Navbar onLoginClick={openLogin} onToggleDark={() => setDarkMode(!darkMode)} />
      )}

      {/* 🚀 Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <HowItWorks />
              <Testimonials />
              <About />
            </>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {/* 🔐 Modals */}
      {showLogin && (
        <LoginModal isVisible onClose={closeModals} onSwitch={openRegister} />
      )}
      {showRegister && (
        <RegisterModal isVisible onClose={closeModals} onSwitch={openLogin} />
      )}
    </>
  );
};

// ✅ Wrap everything inside BrowserRouter
function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
