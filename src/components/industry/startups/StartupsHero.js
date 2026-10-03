'use client';

import React from 'react';

export default function StartupsHero() {
  return (
    <section className="industry-hero-wrapper">
      <div className="industry-hero-bg-overlay"></div>
      <div className="industry-hero-container">
        <div className="industry-hero-badge-capsule">
          <span className="badge-bullet"></span>
          <span className="badge-text">Industries / Startups</span>
        </div>

        <h1 className="industry-hero-title">
          Technology Platforms & Product Engineering for Startups
        </h1>

        <p className="industry-hero-subtext">
          Heapvue works with early-stage and growing startups to design, build, and scale digital products—from rapid MVP development to resilient cloud architectures.
        </p>
      </div>
    </section>
  );
}
