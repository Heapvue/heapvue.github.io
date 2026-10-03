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
            <span className="badge-text">About Technology Consulting</span>
          </div>

          <h2 className="about-ai-consulting-title">
            Building Scalable <span className="blue-italic-text">Technology Foundations</span>
          </h2>

          <div className="about-ai-consulting-text-group">
            <p className="about-ai-consulting-text">
              Choosing the right technology is one of the most important decisions an organisation can make. Whether building a new digital product, modernising existing systems, or integrating multiple platforms, organisations need technology decisions that support both immediate requirements and long-term growth.
            </p>
            <p className="about-ai-consulting-text">
              Heapvue provides technology consulting services that help organisations evaluate, plan, and implement the right technology solutions. We work closely with business leaders and technical teams to design scalable architectures, select appropriate technology stacks, and build systems that are secure, reliable, and future-ready.
            </p>
          </div>
        </div>

        {/* Right Images Box */}
        <div className="about-ai-consulting-images-box">
          <div className="consulting-img-item">
            <Image
              src="/images/con1.png"
              alt="Technology Advisory Meeting"
              width={289}
              height={510}
              className="consulting-dual-img"
              priority
            />
          </div>
          <div className="consulting-img-item">
            <Image
              src="/images/con2.png"
              alt="System Architecture Diagram"
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
