'use client';

import React from 'react';

export default function MobileHero() {
  return (
    <section className="solutions-hero-wrapper">
      <div className="solutions-hero-bg-overlay"></div>
      <div className="solutions-hero-container">
        {/* Badge Capsule */}
        <div className="solutions-hero-badge-capsule">
          <span className="badge-bullet"></span>
          <span className="badge-text">Mobile Applications</span>
        </div>

        {/* Main Title */}
        <h1 className="solutions-hero-title">
          Mobile Applications
        </h1>

        {/* Subtitle */}
        <p className="solutions-hero-subtext">
          Designing and building mobile applications that deliver practical functionality, intuitive user experiences, and reliable performance.
        </p>
      </div>
    </section>
  );
}
