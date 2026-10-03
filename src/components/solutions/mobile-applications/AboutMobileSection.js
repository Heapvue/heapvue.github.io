'use client';

import React from 'react';
import CompanyLogosSection from '@/components/home/CompanyLogosSection';

export default function AboutMobileSection() {
  return (
    <section className="about-platform-wrapper">
      {/* Top Title & Description Box */}
      <div className="about-platform-content">
        {/* Pill Badge */}
        <div className="about-platform-badge">
          <span className="badge-bullet"></span>
          <span className="badge-text">About Mobile Development</span>
        </div>

        {/* Main Heading */}
        <h2 className="about-platform-title">
          Connecting Businesses with Users via <span className="blue-italic-text">Mobile Apps</span>
        </h2>

        {/* Paragraphs */}
        <div className="about-platform-text-group">
          <p className="about-platform-text">
            Mobile applications have become an essential channel for organisations to engage with customers, deliver services, and manage digital interactions. Well-designed mobile apps can simplify processes, improve accessibility, and create a more direct connection between organisations and their users.
          </p>
          <p className="about-platform-text">
            Heapvue helps organisations design and build mobile applications that deliver practical functionality, intuitive user experiences, and reliable performance. Our mobile solutions are built to integrate with existing platforms and support both customer-facing services and operational workflows.
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
