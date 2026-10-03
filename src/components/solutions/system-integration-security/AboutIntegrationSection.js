'use client';

import React from 'react';
import CompanyLogosSection from '@/components/home/CompanyLogosSection';

export default function AboutIntegrationSection() {
  return (
    <section className="about-platform-wrapper">
      {/* Top Title & Description Box */}
      <div className="about-platform-content">
        {/* Pill Badge */}
        <div className="about-platform-badge">
          <span className="badge-bullet"></span>
          <span className="badge-text">About Integration & Security</span>
        </div>

        {/* Main Heading */}
        <h2 className="about-platform-title">
          Connecting Systems with <span className="blue-italic-text">Enterprise Protection</span>
        </h2>

        {/* Paragraphs */}
        <div className="about-platform-text-group">
          <p className="about-platform-text">
            Many organisations operate multiple digital systems that were built at different times and often do not communicate effectively with each other. This can lead to fragmented data, manual workarounds, operational inefficiencies, and increased security risks.
          </p>
          <p className="about-platform-text">
            Heapvue helps organisations integrate their digital systems and strengthen their infrastructure security so that data flows seamlessly across platforms while maintaining strong protection against cyber threats. Our solutions focus on building reliable connections between systems while implementing modern security practices to protect sensitive information.
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
