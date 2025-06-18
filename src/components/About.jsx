import React from "react";
import "../style/style.css"; // Adjust path if needed

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About AI Meal Planner</h2>
      <div className="about-content">
        <p>
          AI Meal Planner is your intelligent assistant for crafting personalized,
          balanced, and delicious meal plans. Our mission is to make healthy eating
          effortless for everyone.
        </p>
        <p>
          Powered by advanced AI and nutrition science, we help you align your food
          with your fitness, lifestyle, and preferences—no more guesswork, just smart eating.
        </p>
      </div>
    </section>
  );
};

export default About;
