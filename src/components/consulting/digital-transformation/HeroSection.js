'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section className="consulting-hero-wrapper">
      <div className="consulting-hero-bg-overlay" />
      <div className="consulting-hero-container">
        <div className="consulting-hero-badge-capsule">
          <span className="badge-bullet" />
          <span className="badge-text">Digital Transformation</span>
        </div>

        <h1 className="consulting-hero-title">
          Digital Transformation
          <br />
          Strategy & Planning
        </h1>

        <p className="consulting-hero-subtext">
          Aligning technology investments with organizational goals, processes, and long-term vision to drive real business value.
        </p>
      </div>
    </section>
  );
}
