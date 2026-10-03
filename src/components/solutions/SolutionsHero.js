'use client';

import React from 'react';

export default function SolutionsHero({
  badgeText = 'Platform Development',
  title = 'Building Scalable and High-Performance Digital Platforms',
  subtext = 'Designing and developing robust, scalable platforms tailored to business needs, ensuring seamless performance, flexibility, and future-ready growth.',
}) {
  return (
    <section className="solutions-hero-wrapper">
      <div className="solutions-hero-bg-overlay"></div>
      <div className="solutions-hero-container">
        {/* Badge Capsule */}
        <div className="solutions-hero-badge-capsule">
          <span className="badge-bullet"></span>
          <span className="badge-text">{badgeText}</span>
        </div>

        {/* Main Title */}
        <h1 className="solutions-hero-title">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="solutions-hero-subtext">
          {subtext}
        </p>
      </div>
    </section>
  );
}

