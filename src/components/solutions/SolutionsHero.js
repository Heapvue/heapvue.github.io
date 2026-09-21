'use client';

import React from 'react';

export default function SolutionsHero() {
  return (
    <section className="solutions-hero-wrapper">
      <div className="solutions-hero-bg-overlay"></div>
      <div className="solutions-hero-container">
        {/* Badge Capsule */}
        <div className="solutions-hero-badge-capsule">
          <span className="badge-bullet"></span>
          <span className="badge-text">Platform Development</span>
        </div>

        {/* Main Title */}
        <h1 className="solutions-hero-title">
          Building Scalable and High-Performance Digital Platforms
        </h1>

        {/* Subtitle */}
        <p className="solutions-hero-subtext">
          Designing and developing robust, scalable platforms tailored to business needs, ensuring seamless performance, flexibility, and future-ready growth.
        </p>
      </div>
    </section>
  );
}
