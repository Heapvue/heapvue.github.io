'use client';

import React from 'react';

export default function FinanceHero() {
  return (
    <section className="industry-hero-wrapper">
      <div className="industry-hero-bg-overlay"></div>
      <div className="industry-hero-container">
        <div className="industry-hero-badge-capsule">
          <span className="badge-bullet"></span>
          <span className="badge-text">Industries / Finance</span>
        </div>

        <h1 className="industry-hero-title">
          Financial Services Technology Solutions
        </h1>

        <p className="industry-hero-subtext">
          Heapvue helps financial services firms build custom platforms, improve operational workflows, and manage client data more effectively with strong security, structured architectures, and high reliability.
        </p>
      </div>
    </section>
  );
}
