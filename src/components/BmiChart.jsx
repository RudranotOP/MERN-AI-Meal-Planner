import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const BmiChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "BMI Value",
        backgroundColor: "#4ade80",
        data: [22.5, 22.3, 22.6, 22.4, 22.7],
      },
    ],
  };

  return (
    <div className="bmi-chart">
      <h3>📈 Your BMI History</h3>
      <Bar data={data} height={100} />
    </div>
  );
};

export default BmiChart;
