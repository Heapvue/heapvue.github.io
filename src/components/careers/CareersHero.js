'use client';

import React from 'react';

export default function CareersHero() {
  return (
    <section className="careers-hero-wrapper">
      <div className="careers-hero-bg-overlay"></div>
      <div className="careers-hero-container">
        {/* Capsule Badge */}
        <div className="careers-hero-badge-capsule">
          <span className="badge-bullet"></span>
          <span className="badge-text">Build the Future with Heapvue</span>
        </div>

        {/* Main Title */}
        <h1 className="careers-hero-title">
          Be Part of Our Mission <br />
          to Transform
        </h1>

        {/* Subtitle Subtext */}
        <p className="careers-hero-subtext">
          Join a team passionate about AI, software innovation, and building scalable digital solutions that create real-world impact.
        </p>
      </div>
    </section>
  );
}
