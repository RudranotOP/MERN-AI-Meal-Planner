import React, { useState } from 'react';
import '../style/style.css'; // Make sure your CSS has proper styles

const GeneratePlan = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((opt) => opt !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Preferences:", selectedOptions);
    alert("Meal plan generation logic goes here!");
  };

  const createCheckboxGroup = (title, options) => (
    <div className="diet-group">
      <h3>{title}</h3>
      {options.map((opt) => (
        <label key={opt} className="checkbox-label">
          <input
            type="checkbox"
            value={opt}
            checked={selectedOptions.includes(opt)}
            onChange={handleChange}
          />
          {opt}
        </label>
      ))}
    </div>
  );

  return (
    <div className="generate-plan-page">
      <h1>🍽️ Generate Your Meal Plan</h1>
      <form onSubmit={handleSubmit} className="generate-form">
        {createCheckboxGroup("Special Purpose Diets", [
          "Keto (Ketogenic)",
          "Paleo",
          "Mediterranean",
          "Mental Wellness Diet"
        ])}

        {createCheckboxGroup("Allergy-Friendly", [
          "Gluten Free",
          "Lactose Free",
          "Nut-Free"
        ])}

        {createCheckboxGroup("Lifestyle / Ethical Diets", [
          "Vegetarian",
          "Vegan",
          "Non-Vegetarian",
          "Flexitarian",
          "Pescatarian"
        ])}

        {createCheckboxGroup("Health Conditions Based", [
          "Diabetic Friendly",
          "Heart Healthy",
          "PCOS/Thyroid Friendly",
          "Renal Diet"
        ])}

        {createCheckboxGroup("Goal-Oriented", [
          "Weight Loss",
          "Weight Gain",
          "Muscle Building",
          "Athletic Performance"
        ])}

        {createCheckboxGroup("Gym-Oriented", [
          "Gym Diet - Vegetarian",
          "Gym Diet - Non-Vegetarian"
        ])}

        <button type="submit" className="primary-btn pulse">
          Generate Plan
        </button>
      </form>
    </div>
  );
};

export default GeneratePlan;
