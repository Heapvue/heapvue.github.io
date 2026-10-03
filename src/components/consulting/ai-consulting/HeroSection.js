'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section className="consulting-hero-wrapper">
      <div className="consulting-hero-bg-overlay" />
      <div className="consulting-hero-container">
        <div className="consulting-hero-badge-capsule">
          <span className="badge-bullet" />
          <span className="badge-text">AI Consulting</span>
        </div>

        <h1 className="consulting-hero-title">
          Turn AI Potential Into
          <br />
          Business Impact.
        </h1>

        <p className="consulting-hero-subtext">
          Artificial Intelligence is transforming how organisations interact with customers, automate processes, and make decisions. Heapvue helps organisations identify, design, and implement practical AI solutions that deliver measurable value.
        </p>
      </div>
    </section>
  );
}
