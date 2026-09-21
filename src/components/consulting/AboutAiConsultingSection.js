'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutAiConsultingSection() {
  return (
    <section className="about-ai-consulting-wrapper">
      <div className="about-ai-consulting-container">
        {/* Left Content Box (541 x 378 Hug) */}
        <div className="about-ai-consulting-content">
          {/* Badge Capsule */}
          <div className="about-ai-consulting-badge">
            <span className="badge-bullet" />
            <span className="badge-text">About AI Consulting</span>
          </div>

          {/* Main Title */}
          <h2 className="about-ai-consulting-title">AI Consulting</h2>

          {/* Description Paragraphs */}
          <div className="about-ai-consulting-text-group">
            <p className="about-ai-consulting-text">
              Artificial Intelligence is transforming the way organisations interact with customers, automate processes, and make business decisions. However, successful AI adoption requires more than implementing the latest models—it requires identifying the right opportunities, selecting appropriate technologies, and integrating AI into existing business processes.
            </p>
            <p className="about-ai-consulting-text">
              Heapvue helps organisations identify, design, and implement practical AI solutions that deliver measurable business value. Whether enhancing customer engagement, automating workflows, or developing intelligent digital products, we work closely with organisations to ensure AI initiatives are aligned with business goals and operational requirements.
            </p>
          </div>
        </div>

        {/* Right Images Box (598 x 510 Hug) */}
        <div className="about-ai-consulting-images-box">
          <div className="consulting-img-item">
            <Image
              src="/images/con1.png"
              alt="AI Consulting Team Working"
              width={289}
              height={510}
              className="consulting-dual-img"
              priority
            />
          </div>
          <div className="consulting-img-item">
            <Image
              src="/images/con2.png"
              alt="AI Data Visualization & Engineering"
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
