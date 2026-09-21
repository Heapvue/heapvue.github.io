'use client';

import React from 'react';

export default function ConsultingHero() {
  return (
    <section className="consulting-hero-wrapper">
      {/* Background Gradient Overlay */}
      <div className="consulting-hero-bg-overlay" />

      <div className="consulting-hero-container">
        {/* Badge Capsule */}
        <div className="consulting-hero-badge-capsule">
          <span className="badge-bullet" />
          <span className="badge-text">AI Consulting</span>
        </div>

        {/* Main Hero Title */}
        <h1 className="consulting-hero-title">
          Turn AI Potential Into
          <br />
          Business Impact.
        </h1>

        {/* Subtitle Description */}
        <p className="consulting-hero-subtext">
          Successful AI adoption goes beyond choosing the latest models. Heapvue helps organisations identify high-value opportunities, select the right technologies, and implement intelligent solutions that align with business goals, streamline operations, and create measurable impact.
        </p>
      </div>
    </section>
  );
}
