'use client';

import React from 'react';

export default function EcommerceHero() {
  return (
    <section className="solutions-hero-wrapper">
      <div className="solutions-hero-bg-overlay"></div>
      <div className="solutions-hero-container">
        {/* Badge Capsule */}
        <div className="solutions-hero-badge-capsule">
          <span className="badge-bullet"></span>
          <span className="badge-text">E-commerce & Digital Experience</span>
        </div>

        {/* Main Title */}
        <h1 className="solutions-hero-title">
          E-commerce & Digital Experience
        </h1>

        {/* Subtitle */}
        <p className="solutions-hero-subtext">
          Building modern digital platforms that support online engagement, improve user experience, and enable reliable e-commerce operations.
        </p>
      </div>
    </section>
  );
}
