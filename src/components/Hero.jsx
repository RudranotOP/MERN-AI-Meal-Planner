import React, { useEffect, useState } from 'react';
import '../style/style.css';
import mealImage from '../assets/float2.jpeg';

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

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTip((prev) => (prev + 1) % tips.length);
        setFade(true);
      }, 500); // Match with fade-out duration
    }, 6000); // Total time each tip stays

    return () => clearInterval(interval);
  }, [tips.length]);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Eat Smart, Live Better</h1>
        <p>Your personalized AI-powered meal planner</p>

        {/* ✅ Tip with fade class toggle */}
        <div className={`daily-tip ${fade ? 'fade-in' : 'fade-out'}`}>
          {tips[currentTip]}
        </div>

        <a href="select-plan.html" className="primary-btn pulse">
          Generate Meal Plan
        </a>
      </div>

      <div className="hero-image">
        <img src={mealImage} alt="Meal" className="floating-meal" />
      </div>
    </section>
  );
};

export default Hero;
