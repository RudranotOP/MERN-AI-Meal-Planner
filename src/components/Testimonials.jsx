import React from "react";
import "../style/style.css"; // Ensure this path is correct

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2 className="section-title">What Users Say</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <p>
            "This planner helped me eat healthier without stress. AI suggestions are always on point!"
          </p>
          <h4>— Priya S., Nutrition Enthusiast</h4>
        </div>

        <div className="testimonial-card">
          <p>
            "Perfect for busy professionals. I just input my goals and get meals I love every week."
          </p>
          <h4>— Rohan K., Software Engineer</h4>
        </div>

        <div className="testimonial-card">
          <p>
            "Tracking calories has never been easier. Plus, the interface is beautiful and intuitive!"
          </p>
          <h4>— Meera T., Fitness Coach</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
