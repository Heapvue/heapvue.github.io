'use client';

import React from 'react';
import CompanyLogosSection from '@/components/home/CompanyLogosSection';

export default function AboutPlatformDevSection() {
  return (
    <section className="about-platform-wrapper">
      <div className="about-platform-content">
        <div className="about-platform-badge">
          <span className="badge-bullet"></span>
          <span className="badge-text">About Platform Development</span>
        </div>

        <h2 className="about-platform-title">
          Building Future-Ready <span className="blue-italic-text">Digital Platforms</span>
        </h2>

        <div className="about-platform-text-group">
          <p className="about-platform-text">
            Many organisations struggle to manage their operations using generic software that does not fit their workflows. Off-the-shelf systems often lack flexibility, integrate poorly with other tools, or cannot scale as the organisation grows.
          </p>
          <p className="about-platform-text">
            Heapvue helps organisations design and build custom digital platforms tailored to their operational needs. These platforms can manage internal processes, customer interactions, transactions, and data flows while integrating seamlessly with other systems.
          </p>
          <p className="about-platform-text">
            Our approach focuses on building scalable, secure, and easy-to-manage platforms that simplify operations and support long-term growth.
          </p>
        </div>
      </div>

      <div className="about-platform-logos-wrapper">
        <CompanyLogosSection />
      </div>
    </section>
  );
}
