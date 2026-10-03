'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section className="consulting-hero-wrapper">
      <div className="consulting-hero-bg-overlay" />
      <div className="consulting-hero-container">
        <div className="consulting-hero-badge-capsule">
          <span className="badge-bullet" />
          <span className="badge-text">Technology Consulting</span>
        </div>

        <h1 className="consulting-hero-title">
          Technology Consulting &
          <br />
          Architecture Advisory
        </h1>

        <p className="consulting-hero-subtext">
          Evaluating, planning, and implementing scalable technology foundations that support immediate requirements and long-term business growth.
        </p>
      </div>
    </section>
  );
}
