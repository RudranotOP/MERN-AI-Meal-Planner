import React from "react";

const WeeklyGoals = () => {
  return (
    <div className="progress-group">
      <h2 className="section-title">Weekly Goals</h2>
      <p>Calories</p>
      <div className="progress-bar"><div className="fill" style={{ width: "75%" }}>75%</div></div>
      <p>Protein</p>
      <div className="progress-bar"><div className="fill" style={{ width: "60%" }}>60%</div></div>
      <p>Water</p>
      <div className="progress-bar"><div className="fill" style={{ width: "90%" }}>90%</div></div>
    </div>
  );
};

export default WeeklyGoals;
