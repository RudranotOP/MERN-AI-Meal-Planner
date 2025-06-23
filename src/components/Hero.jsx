import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../style/style.css';
import mealImage from '../assets/float2.jpeg';
import { FaTimes } from 'react-icons/fa';

const Hero = () => {
  const location = useLocation();

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
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');
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
    if (bmiCategory === 'Normal') return '#28a745';
    if (bmiCategory === 'Underweight') return '#ffc107';
    return '#dc3545';
  };

  const getBmiPulseClass = () => {
    if (bmiCategory === 'Normal') return 'green';
    if (bmiCategory === 'Underweight') return 'orange';
    return 'red';
  };

  const closePopup = () => {
    setShowBmi(false);
  };

  // 🔒 Hide Hero on /generate-meal-plan page
  if (location.pathname === '/generate-meal-plan') {
    return null;
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Eat Smart, Live Better</h1>
        <p>Your personalized AI-powered meal planner</p>

        <div className={`daily-tip ${fade ? 'fade-in' : 'fade-out'}`}>
          {tips[currentTip]}
        </div>

        <button
          className="secondary-btn pulse"
          onClick={() => setShowBmi(true)}
          style={{ marginTop: '12px' }}
        >
          Check BMI
        </button>
      </div>

      <div className="hero-image">
        <img src={mealImage} alt="Meal" className="floating-meal" />
      </div>

      {showBmi && (
        <div className="bmi-popup-overlay" onClick={closePopup}>
          <div
            className="bmi-popup-card dark"
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
          >
            <button className="bmi-close-btn" onClick={closePopup}>
              <FaTimes />
            </button>

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
            <button className="btn-green" onClick={calculateBMI}>
              Calculate
            </button>

            {bmi && (
              <div className="bmi-circle-container">
                <div className={`bmi-pulse-wrapper ${getBmiPulseClass()}`}>
                  <div
                    className="bmi-circle"
                    style={{ borderColor: getBmiColor() }}
                  >
                    {bmi}
                  </div>
                </div>
                <p className="bmi-category-text">
                  You are{' '}
                  <span style={{ color: getBmiColor() }}>{bmiCategory}</span>.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
