'use client';

import React from 'react';

export default function AiHero() {
  return (
    <section className="solutions-hero-wrapper">
      <div className="solutions-hero-bg-overlay"></div>
      <div className="solutions-hero-container">
        {/* Badge Capsule */}
        <div className="solutions-hero-badge-capsule">
          <span className="badge-bullet"></span>
          <span className="badge-text">AI & Intelligent Automation</span>
        </div>

        {/* Main Title */}
        <h1 className="solutions-hero-title">
          AI & Intelligent Automation
        </h1>

        {/* Subtitle */}
        <p className="solutions-hero-subtext">
          Building practical AI applications that enhance customer engagement, automate interactions, and improve operational efficiency.
        </p>
      </div>
    </section>
  );
}
