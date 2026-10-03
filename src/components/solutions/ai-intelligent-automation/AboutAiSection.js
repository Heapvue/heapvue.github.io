'use client';

import React from 'react';
import CompanyLogosSection from '@/components/home/CompanyLogosSection';

export default function AboutAiSection() {
  return (
    <section className="about-platform-wrapper">
      {/* Top Title & Description Box */}
      <div className="about-platform-content">
        {/* Pill Badge */}
        <div className="about-platform-badge">
          <span className="badge-bullet"></span>
          <span className="badge-text">About AI Solutions</span>
        </div>

        {/* Main Heading */}
        <h2 className="about-platform-title">
          Building Practical AI Systems for <span className="blue-italic-text">Real Business Value</span>
        </h2>

        {/* Paragraphs */}
        <div className="about-platform-text-group">
          <p className="about-platform-text">
            Artificial Intelligence is increasingly being used by organisations to improve customer interactions, automate repetitive tasks, and extract insights from data. However, implementing AI effectively requires systems that are properly designed, integrated with existing workflows, and aligned with business objectives.
          </p>
          <p className="about-platform-text">
            Heapvue helps organisations build AI-powered systems that enhance customer engagement, automate interactions, and improve operational efficiency. Our solutions combine modern AI models with practical business workflows, allowing organisations to deploy intelligent systems that deliver real value.
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
