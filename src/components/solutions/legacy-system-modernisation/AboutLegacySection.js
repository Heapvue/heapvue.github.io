'use client';

import React from 'react';
import CompanyLogosSection from '@/components/home/CompanyLogosSection';

export default function AboutLegacySection() {
  return (
    <section className="about-platform-wrapper">
      {/* Top Title & Description Box */}
      <div className="about-platform-content">
        {/* Pill Badge */}
        <div className="about-platform-badge">
          <span className="badge-bullet"></span>
          <span className="badge-text">About Legacy Modernisation</span>
        </div>

        {/* Main Heading */}
        <h2 className="about-platform-title">
          Upgrading Core Infrastructure for <span className="blue-italic-text">Future Growth</span>
        </h2>

        {/* Paragraphs */}
        <div className="about-platform-text-group">
          <p className="about-platform-text">
            Many organisations continue to operate on legacy systems that were built years ago and no longer meet current security, performance, or scalability requirements. These systems may be difficult to maintain, vulnerable to security risks, and challenging to integrate with newer technologies.
          </p>
          <p className="about-platform-text">
            Heapvue helps organisations modernise their legacy software systems by redesigning architecture, upgrading technology stacks, and improving system security and performance. Our goal is to ensure that businesses can operate on reliable, scalable, and secure digital infrastructure while preserving valuable data and operational continuity.
          </p>
        </div>
      </div>

      {/* Bottom Logos Marquee */}
      <div className="about-platform-logos-wrapper">
        <CompanyLogosSection />
      </div>
    </section>
  );
}
