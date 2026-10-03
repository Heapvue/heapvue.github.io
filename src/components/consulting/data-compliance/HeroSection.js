'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section className="consulting-hero-wrapper">
      <div className="consulting-hero-bg-overlay" />
      <div className="consulting-hero-container">
        <div className="consulting-hero-badge-capsule">
          <span className="badge-bullet" />
          <span className="badge-text">Data & Compliance</span>
        </div>

        <h1 className="consulting-hero-title">
          Data Privacy & Regulatory
          <br />
          Compliance Consulting
        </h1>

        <p className="consulting-hero-subtext">
          Designing technology architectures that support data privacy, strengthen security, and align with DPDP, GDPR, and HIPAA regulations.
        </p>
      </div>
    </section>
  );
}
