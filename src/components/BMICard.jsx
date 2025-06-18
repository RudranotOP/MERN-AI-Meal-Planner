// src/components/BMICard.jsx
import React, { useState } from 'react';
import { FaTimes, FaMoon } from 'react-icons/fa';
import './BMICard.css';

const BMICard = ({ onClose }) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const calculateBMI = () => {
    if (!weight || !height || isNaN(weight) || isNaN(height)) return;
    const heightInMeters = parseFloat(height) / 100;
    const calculatedBMI = parseFloat(weight) / (heightInMeters * heightInMeters);
    const roundedBMI = parseFloat(calculatedBMI.toFixed(1));
    setBmi(roundedBMI);

    if (roundedBMI < 18.5) setStatus('Underweight');
    else if (roundedBMI < 24.9) setStatus('Normal');
    else if (roundedBMI < 29.9) setStatus('Overweight');
    else setStatus('Obese');
  };

  const toggleDark = () => setDarkMode(!darkMode);

  const getColor = () => {
    if (status === 'Normal') return '#28a745';
    if (status === 'Underweight') return '#ffc107';
    if (status === 'Overweight') return '#fd7e14';
    if (status === 'Obese') return '#dc3545';
    return '#6c757d';
  };

  return (
    <div className={`bmi-card-wrapper ${darkMode ? 'dark' : ''}`}>
      <div className="bmi-card">
        <button className="close-btn" onClick={onClose}><FaTimes /></button>
        <h2>📊 BMI Calculator</h2>

        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <button className="calculate-btn" onClick={calculateBMI}>Calculate</button>

        {bmi && (
          <div className="bmi-result">
            <div className="bmi-circle" style={{ borderColor: getColor() }}>
              {bmi}
            </div>
            <p><strong>
              {status === 'Normal' && 'You have a normal weight.'}
              {status === 'Underweight' && 'You are underweight.'}
              {status === 'Overweight' && 'You are overweight.'}
              {status === 'Obese' && 'You are obese.'}
            </strong></p>
          </div>
        )}

        <button className="dark-toggle" onClick={toggleDark}>
          <FaMoon />
        </button>
      </div>
    </div>
  );
};

export default BMICard;
