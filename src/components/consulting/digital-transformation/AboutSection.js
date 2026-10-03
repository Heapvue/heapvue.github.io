'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="about-ai-consulting-wrapper">
      <div className="about-ai-consulting-container">
        {/* Left Content Box */}
        <div className="about-ai-consulting-content">
          <div className="about-ai-consulting-badge">
            <span className="badge-bullet" />
            <span className="badge-text">About Digital Transformation</span>
          </div>

          <h2 className="about-ai-consulting-title">
            Aligning Technology with <span className="blue-italic-text">Business Objectives</span>
          </h2>

          <div className="about-ai-consulting-text-group">
            <p className="about-ai-consulting-text">
              Technology alone does not create business value—it must align with an organisation's goals, processes, and long-term vision. Many organisations invest in digital tools without a clear roadmap, resulting in disconnected systems, inefficient workflows, and missed opportunities.
            </p>
            <p className="about-ai-consulting-text">
              Heapvue helps organisations develop practical digital transformation strategies that align technology investments with business objectives. We work with leadership teams to identify opportunities, define technology roadmaps, and design digital solutions that improve efficiency, scalability, and customer experience.
            </p>
          </div>
        </div>

        {/* Right Images Box */}
        <div className="about-ai-consulting-images-box">
          <div className="consulting-img-item">
            <Image
              src="/images/con1.png"
              alt="Digital Transformation Planning"
              width={289}
              height={510}
              className="consulting-dual-img"
              priority
            />
          </div>
          <div className="consulting-img-item">
            <Image
              src="/images/con2.png"
              alt="Business Strategy Architecture"
              width={289}
              height={510}
              className="consulting-dual-img"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
