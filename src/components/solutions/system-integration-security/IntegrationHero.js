'use client';

import React from 'react';

export default function IntegrationHero() {
  return (
    <section className="solutions-hero-wrapper">
      <div className="solutions-hero-bg-overlay"></div>
      <div className="solutions-hero-container">
        {/* Badge Capsule */}
        <div className="solutions-hero-badge-capsule">
          <span className="badge-bullet"></span>
          <span className="badge-text">System Integration & Security</span>
        </div>

        {/* Main Title */}
        <h1 className="solutions-hero-title">
          System Integration & Security
        </h1>

        {/* Subtitle */}
        <p className="solutions-hero-subtext">
          Integrating digital systems and strengthening infrastructure security so data flows seamlessly across platforms while maintaining strong protection against cyber threats.
        </p>
      </div>
    </section>
  );
}
