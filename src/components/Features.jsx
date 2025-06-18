import React from "react";
import "../style/style.css";

// ✅ Make sure these image files exist with **exact names** in src/assets/
import mealsIcon from "../assets/meals.png";
import caloriesIcon from "../assets/kcal.png";
import aiIcon from "../assets/aimeal.png";
import weeklyIcon from "../assets/calendar.png";

const Features = () => {
  return (
    <section className="features" id="features">
      <h2>Features</h2>
      <div className="features-grid">
        <div className="feature-card">
          <img src={mealsIcon} alt="Meals Icon" className="feature-icon" />
          <h3>🍽️ Personalized Meals</h3>
          <p>
            Get meals tailored to your health goals, dietary needs, and taste
            preferences using AI suggestions.
          </p>
        </div>

        <div className="feature-card">
          <img src={caloriesIcon} alt="Calories Icon" className="feature-icon" />
          <h3>💪 Track Calories</h3>
          <p>
            Monitor your daily intake and stay on track with your fitness or
            weight goals effortlessly.
          </p>
        </div>

        <div className="feature-card">
          <img src={aiIcon} alt="AI Icon" className="feature-icon" />
          <h3>🧠 AI Suggestions</h3>
          <p>
            Let our smart engine analyze your inputs and recommend optimal meal
            combinations every day.
          </p>
        </div>

        <div className="feature-card">
          <img src={weeklyIcon} alt="Weekly Icon" className="feature-icon" />
          <h3>📅 Weekly Plans</h3>
          <p>
            Plan your meals for the entire week with a balanced nutritional
            approach and minimal repetition.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
