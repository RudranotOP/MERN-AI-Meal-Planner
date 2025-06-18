// src/pages/BMICalculator.jsx

import React, { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) return;

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(bmiValue);
    setCategory(getCategory(bmiValue));
  };

  const getCategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white px-4">
      <h1 className="text-3xl font-bold mb-6">BMI Calculator</h1>

      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg space-y-4">
        <div>
          <label className="block mb-1">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-700"
          />
        </div>

        <div>
          <label className="block mb-1">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-700"
          />
        </div>

        <button
          onClick={calculateBMI}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Calculate BMI
        </button>

        {bmi && (
          <div className="mt-4 text-center">
            <p className="text-lg">Your BMI: <strong>{bmi}</strong></p>
            <p className="text-md">
              Category: <span className="font-semibold">{category}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
