'use client';

import React from 'react';

export default function HealthcareHero() {
  return (
    <section className="industry-hero-wrapper">
      <div className="industry-hero-bg-overlay"></div>
      <div className="industry-hero-container">
        <div className="industry-hero-badge-capsule">
          <span className="badge-bullet"></span>
          <span className="badge-text">Industries / Healthcare</span>
        </div>

        <h1 className="industry-hero-title">
          Healthcare Digital Solutions & System Modernisation
        </h1>

        <p className="industry-hero-subtext">
          Heapvue helps healthcare organisations build secure digital platforms, modernise legacy systems, and develop patient-facing applications that improve operational efficiency while protecting sensitive patient data.
        </p>
      </div>
    </section>
  );
}
