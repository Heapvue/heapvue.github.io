'use client';

import React from 'react';
import CompanyLogosSection from '@/components/home/CompanyLogosSection';

export default function AboutPlatformSection({
  badgeText = 'About Platform Development',
  title = <>Building Future-Ready <span className="blue-italic-text">Digital Platforms</span></>,
  paragraphs = [
    'Many organisations struggle to manage their operations using generic software that does not fit their workflows. Off-the-shelf systems often lack flexibility, integrate poorly with other tools, or cannot scale as the organisation grows.',
    'Heapvue helps organisations design and build custom digital platforms tailored to their operational needs. These platforms can manage internal processes, customer interactions, transactions, and data flows while integrating seamlessly with other systems.',
    'Our approach focuses on building scalable, secure, and easy-to-manage platforms that simplify operations and support long-term growth.',
  ],
}) {
  return (
    <section className="about-platform-wrapper">
      {/* Top Title & Description Box (685w x 356h Hug) */}
      <div className="about-platform-content">
        {/* Pill Badge */}
        <div className="about-platform-badge">
          <span className="badge-bullet"></span>
          <span className="badge-text">{badgeText}</span>
        </div>

        {/* Main Heading */}
        <h2 className="about-platform-title">
          {title}
        </h2>

        {/* Paragraphs */}
        <div className="about-platform-text-group">
          {paragraphs.map((para, index) => (
            <p key={index} className="about-platform-text">
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Bottom Logos Marquee (1440 Fill x 120) */}
      <div className="about-platform-logos-wrapper">
        <CompanyLogosSection />
      </div>
    </section>
  );
}

