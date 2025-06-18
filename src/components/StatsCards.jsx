import React from "react";

const StatCards = () => {
  return (
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
      <div className="stat-card">
        <h3>Check BMI</h3>
        <p>Track your health</p>
        <button className="btn-green">Open BMI Calculator</button>
      </div>
    </div>
  );
};

export default StatCards;
