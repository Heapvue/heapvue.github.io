'use client';

import React from 'react';

export default function IndustryHero() {
  return (
    <section className="industry-hero-wrapper">
      <div className="industry-hero-bg-overlay"></div>
      
      <div className="industry-hero-container">
        {/* Badge Capsule */}
        <div className="industry-hero-badge-capsule">
          <span className="badge-bullet"></span>
          <span className="badge-text">Healthcare Solutions</span>
        </div>

        {/* Main Title */}
        <h1 className="industry-hero-title">
          AI-Powered <br />
          Healthcare Solutions
        </h1>

        {/* Subtitle / Description */}
        <p className="industry-hero-subtext">
          Heapvue delivers cutting-edge healthcare technology solutions powered by artificial intelligence that enhance patient care, streamline clinical workflows, and improve operational efficiency. Our AI-driven solutions help healthcare providers deliver better outcomes while reducing costs and ensuring compliance.
        </p>
      </div>
    </section>
  );
}
