import React, { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100; // cm → meters

    if (!weightNum || !heightNum || heightNum === 0) {
      setBmi(null);
      setStatus("Please enter valid values");
      return;
    }

    const bmiValue = weightNum / (heightNum * heightNum);
    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) setStatus("Underweight");
    else if (bmiValue < 24.9) setStatus("Normal");
    else if (bmiValue < 29.9) setStatus("Overweight");
    else setStatus("Obese");
  };

  return (
    <div className="bmi-calculator">
      <h3>📏 BMI Calculator</h3>
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={calculateBMI}>Calculate</button>
      {bmi && (
        <p>
          Your BMI is <strong>{bmi}</strong> – <span>{status}</span>
        </p>
      )}
    </div>
  );
};

export default BMICalculator;
