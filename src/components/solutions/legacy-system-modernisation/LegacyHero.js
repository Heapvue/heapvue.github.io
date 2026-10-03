'use client';

import React from 'react';

export default function LegacyHero() {
  return (
    <section className="solutions-hero-wrapper">
      <div className="solutions-hero-bg-overlay"></div>
      <div className="solutions-hero-container">
        {/* Badge Capsule */}
        <div className="solutions-hero-badge-capsule">
          <span className="badge-bullet"></span>
          <span className="badge-text">Legacy System Modernisation</span>
        </div>

        {/* Main Title */}
        <h1 className="solutions-hero-title">
          Legacy System Modernisation
        </h1>

        {/* Subtitle */}
        <p className="solutions-hero-subtext">
          Upgrading, securing, and re-architecting legacy software systems to ensure long-term scalability, performance, and seamless digital evolution.
        </p>
      </div>
    </section>
  );
}
