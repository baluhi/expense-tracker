// src/components/HeroSection.js
import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <section className="hero-section">
        <div className="hero-text">
          <h1>Manage Your Expenses Effortlessly</h1>
          <p>Keep track of your spending and stay within your budget.</p>
          <button className="button">Explore Now</button>
        </div>
        <div className="hero-image">
          <img src="https://img.freepik.com/free-vector/finance-department-employees-are-calculating-expenses-company-s-business_1150-41782.jpg" alt="Expenses" />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
