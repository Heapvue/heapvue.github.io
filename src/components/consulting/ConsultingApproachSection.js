'use client';

import React from 'react';
import Image from 'next/image';

const approachSteps = [
  {
    id: 1,
    title: 'Understanding Business Challenges',
    description: 'We analyse your objectives and challenges to define the right AI approach.',
    icon: '/images/con7.png',
  },
  {
    id: 2,
    title: 'Identifying AI Value Opportunities',
    description: 'We uncover high-value opportunities to drive real business impact.',
    icon: '/images/con7.png',
  },
  {
    id: 3,
    title: 'Selecting the Right AI Technology',
    description: 'We evaluate & recommend the right technologies & models for your needs.',
    icon: '/images/con7.png',
  },
  {
    id: 4,
    title: 'Designing Integrated AI Solutions',
    description: 'We design scalable solutions that work seamlessly with your current infrastructure.',
    icon: '/images/con7.png',
  },
  {
    id: 5,
    title: 'AI Implementation & Optimisation',
    description: 'We partner with you through deployment, optimisation & ongoing enhancement.',
    icon: '/images/con7.png',
  },
];

export default function ConsultingApproachSection() {
  return (
    <section className="consulting-approach-wrapper">
      <div className="consulting-approach-container">
        {/* Top Header Box (801 x 212 Hug) */}
        <div className="approach-header-box">
          <div className="approach-badge-capsule">
            <span className="badge-bullet" />
            <span className="badge-text">Our Approach</span>
          </div>

          <h2 className="approach-main-title">
            Intelligent Technology
            <br />
            Built for <span className="blue-italic-text">Modern Businesses.</span>
          </h2>

          <p className="approach-subtext">
            Every successful AI initiative begins with understanding the business problem rather than selecting a technology. Our consulting approach typically includes:
          </p>
        </div>

        {/* 5 Columns Grid (1200 x 335 Hug - Each box 227.75 x 263.16) */}
        <div className="approach-columns-grid">
          {approachSteps.map((step) => (
            <div key={step.id} className="approach-col-item">
              <div className="approach-col-icon">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={88}
                  height={88}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className="approach-col-title">{step.title}</h3>
              <p className="approach-col-desc">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Footer Subtext */}
        <p className="approach-footer-text">
          This approach ensures that AI is deployed where it creates meaningful impact rather than being implemented simply because it is available.
        </p>
      </div>
    </section>
  );
}
