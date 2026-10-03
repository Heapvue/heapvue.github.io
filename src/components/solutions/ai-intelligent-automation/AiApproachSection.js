'use client';

import React from 'react';
import Image from 'next/image';

const aiApproachSteps = [
  {
    step: '// 001',
    title: 'Understanding the business problem and user interactions',
    description:
      'Analysing business objectives, customer pain points, and user interaction flows to establish clear AI system goals.',
    image: '/images/sol5.png',
    alt: 'Understanding the business problem and user interactions',
  },
  {
    step: '// 002',
    title: 'Identifying where AI can improve efficiency or experience',
    description:
      'Pinpointing high-impact opportunities where artificial intelligence can automate tasks and elevate customer satisfaction.',
    image: '/images/sol6.png',
    alt: 'Identifying where AI can improve efficiency or experience',
  },
  {
    step: '// 003',
    title: 'Designing AI systems that integrate with existing platforms',
    description:
      'Architecting seamless API connections and custom interfaces that integrate smoothly into your digital infrastructure.',
    image: '/images/sol7.png',
    alt: 'Designing AI systems that integrate with existing platforms',
  },
  {
    step: '// 004',
    title: 'Training models using relevant data and knowledge sources',
    description:
      'Grounding and fine-tuning AI models on verified enterprise documentation and relevant data pipelines for reliable answers.',
    image: '/images/sol8.png',
    alt: 'Training models using relevant data and knowledge sources',
  },
  {
    step: '// 005',
    title: 'Deploying and continuously improving the system based on usage',
    description:
      'Launching AI solutions into production, gathering real-world usage insights, and continuously refining model performance.',
    image: '/images/sol9.png',
    alt: 'Deploying and continuously improving the system based on usage',
  },
];

export default function AiApproachSection() {
  return (
    <section className="platform-approach-wrapper">
      <div className="platform-approach-container">
        {/* Top Header Box */}
        <div className="platform-approach-header">
          {/* Left Title Box */}
          <div className="platform-approach-header-left">
            <div className="platform-approach-badge">
              <span className="badge-bullet"></span>
              <span className="badge-text">Our Methodology</span>
            </div>
            <h2 className="platform-approach-main-title">
              Our Approach to
              <br />
              <span className="blue-italic-text">AI Solutions</span>
            </h2>
          </div>

          {/* Right Description Box */}
          <div className="platform-approach-header-right">
            <p className="platform-approach-header-desc">
              Successful AI implementations require more than just models—they must fit into real operational environments. This approach ensures that AI solutions are reliable, practical, and aligned with real-world business needs.
            </p>
          </div>
        </div>

        {/* 5 Approach Rows */}
        <div className="platform-approach-rows">
          {aiApproachSteps.map((item, index) => (
            <div key={index} className="platform-approach-row">
              {/* Left Content */}
              <div className="approach-row-left">
                <span className="approach-step-tag">{item.step}</span>
                <h3 className="approach-row-title">{item.title}</h3>
                <p className="approach-row-desc">{item.description}</p>
              </div>

              {/* Right Image */}
              <div className="approach-row-right">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={180}
                  height={180}
                  className="approach-row-img"
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
