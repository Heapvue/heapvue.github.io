'use client';

import React from 'react';
import CompanyLogosSection from '@/components/home/CompanyLogosSection';

export default function AboutEcommerceSection() {
  return (
    <section className="about-platform-wrapper">
      {/* Top Title & Description Box */}
      <div className="about-platform-content">
        {/* Pill Badge */}
        <div className="about-platform-badge">
          <span className="badge-bullet"></span>
          <span className="badge-text">About Digital Experience</span>
        </div>

        {/* Main Heading */}
        <h2 className="about-platform-title">
          Building Modern Platforms for <span className="blue-italic-text">Online Growth</span>
        </h2>

        {/* Paragraphs */}
        <div className="about-platform-text-group">
          <p className="about-platform-text">
            A strong digital presence is essential for organisations that want to reach customers, build credibility, and manage online sales effectively. However, many businesses struggle with outdated websites, unstable e-commerce platforms, or digital systems that are difficult to manage and scale.
          </p>
          <p className="about-platform-text">
            Heapvue helps organisations build modern digital platforms that support online engagement, improve user experience, and enable reliable e-commerce operations. From corporate websites to fully customised e-commerce systems, we design solutions that are secure, scalable, and aligned with business goals.
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
