import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Mon", bmi: 22.5 },
  { date: "Tue", bmi: 23.0 },
  { date: "Wed", bmi: 23.1 },
  { date: "Thu", bmi: 22.9 },
  { date: "Fri", bmi: 23.3 },
  { date: "Sat", bmi: 23.0 },
  { date: "Sun", bmi: 22.8 },
];

const BmiChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis domain={[20, 25]} />
      <Tooltip />
      <Line type="monotone" dataKey="bmi" stroke="#82ca9d" strokeWidth={2} />
    </LineChart>
  </ResponsiveContainer>
);

export default BmiChart;
