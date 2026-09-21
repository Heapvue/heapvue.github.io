'use client';

import React from 'react';

export default function HighlightedProjectsSection() {
  return (
    <section className="highlighted-projects-wrapper">
      <div className="highlighted-projects-container">
        {/* Pill Badge capsule */}
        <div className="selected-projects-badge">
          <span className="badge-bullet"></span>
          <span className="badge-text">Selected Projects</span>
        </div>

        {/* Main Title */}
        <h2 className="highlighted-projects-title">
          Highlighted Projects Across <span className="blue-italic-text">Healthcare Solutions</span>
        </h2>

        {/* Description Subtext */}
        <p className="highlighted-projects-subtext">
          As healthcare continues to evolve digitally, organisations require systems that are secure, reliable, and easy to manage. Heapvue helps healthcare providers build and modernise digital infrastructure that supports better patient care, efficient operations, and long-term scalability.
        </p>
      </div>
    </section>
  );
}
