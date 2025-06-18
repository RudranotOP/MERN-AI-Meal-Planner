import React, { useEffect, useRef, useState } from 'react';
import '../style/style.css';
import mealImage from '../assets/float2.jpeg';
import { FaMoon, FaTimes } from 'react-icons/fa';

const Hero = () => {
  const tips = [
    "💧 Stay hydrated! Drink at least 8 glasses of water daily.",
    "🥗 Add more greens and fiber to your meals for better digestion.",
    "🍎 Eat the rainbow – include colorful fruits and veggies.",
    "🏃‍♂️ Stay active for at least 30 minutes every day.",
    "😴 Get 7-8 hours of quality sleep every night.",
    "🧘‍♀️ Manage stress through breathing and mindfulness.",
  ];

  const [currentTip, setCurrentTip] = useState(0);
  const [fade, setFade] = useState(true);
  const [showBmi, setShowBmi] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTip((prev) => (prev + 1) % tips.length);
        setFade(true);
      }, 500);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (!h || !w) return;

    const bmiValue = w / (h * h);
    const rounded = bmiValue.toFixed(1);
    setBmi(rounded);

    if (bmiValue < 18.5) setBmiCategory('Underweight');
    else if (bmiValue < 25) setBmiCategory('Normal');
    else if (bmiValue < 30) setBmiCategory('Overweight');
    else setBmiCategory('Obese');
  };

  const getBmiColor = () => {
    if (bmiCategory === 'Normal') return '#28a745'; // green
    if (bmiCategory === 'Underweight') return '#ffc107'; // yellow
    if (bmiCategory === 'Overweight') return '#fd7e14'; // orange
    return '#dc3545'; // red
  };

  const getPulseClass = () => {
    if (bmiCategory === 'Normal') return 'pulse-green';
    if (bmiCategory === 'Underweight') return 'pulse-yellow';
    if (bmiCategory === 'Overweight') return 'pulse-orange';
    if (bmiCategory === 'Obese') return 'pulse-red';
    return '';
  };

  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowBmi(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Eat Smart, Live Better</h1>
        <p>Your personalized AI-powered meal planner</p>

        <div className={`daily-tip ${fade ? 'fade-in' : 'fade-out'}`}>
          {tips[currentTip]}
        </div>

        <a href="select-plan.html" className="primary-btn pulse">Generate Meal Plan</a>
        <button className="secondary-btn pulse" onClick={() => setShowBmi(true)}>Check BMI</button>
      </div>

      <div className="hero-image">
        <img src={mealImage} alt="Meal" className="floating-meal" />
      </div>

      {/* BMI Popup */}
      {showBmi && (
        <div className="bmi-popup-overlay" onClick={closePopup}>
          <div
            className={`bmi-popup-card ${darkMode ? 'dark' : ''} ${isClosing ? 'fade-out' : ''}`}
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
          >
            <button className="bmi-close-btn" onClick={closePopup}><FaTimes /></button>

            <h3>🧮 BMI Calculator</h3>

            <label>Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="e.g. 170"
            />
            <label>Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="e.g. 65"
            />
            <button className="btn-green" onClick={calculateBMI}>Calculate</button>

            {bmi && (
              <div className="bmi-circle-container">
                <div className={`bmi-circle-pulse ${getPulseClass()}`}>
                  <svg width="120" height="120">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="#e6e6e6"
                      strokeWidth="10"
                      fill="none"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke={getBmiColor()}
                      strokeWidth="10"
                      fill="none"
                      strokeDasharray="314"
                      strokeDashoffset="0"
                      transform="rotate(-90 60 60)"
                    />
                    <text
                      x="60"
                      y="65"
                      textAnchor="middle"
                      fontSize="20"
                      fontWeight="bold"
                      fill={darkMode ? '#fff' : '#000'}
                    >
                      {bmi}
                    </text>
                  </svg>
                </div>
                <p style={{ fontWeight: 'bold', marginTop: '10px' }}>
                  You are <span style={{ color: getBmiColor() }}>{bmiCategory}</span>.
                </p>
              </div>
            )}

            <div className="bmi-dark-toggle" onClick={() => setDarkMode(!darkMode)}>
              <FaMoon className="moon-icon" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
