'use client';

import React from 'react';
import Image from 'next/image';

const approachSteps = [
  {
    id: 1,
    title: 'Understanding Business Goals',
    description: 'Understanding business goals and operational challenges.',
    icon: '/images/con7.png',
  },
  {
    id: 2,
    title: 'Assessing Technology',
    description: 'Assessing existing technology and processes.',
    icon: '/images/con7.png',
  },
  {
    id: 3,
    title: 'Identifying Opportunities',
    description: 'Identifying opportunities for improvement and automation.',
    icon: '/images/con7.png',
  },
  {
    id: 4,
    title: 'Defining Technology Roadmap',
    description: 'Defining a technology and implementation roadmap.',
    icon: '/images/con7.png',
  },
  {
    id: 5,
    title: 'Supporting Execution',
    description: 'Supporting execution and continuous improvement.',
    icon: '/images/con7.png',
  },
];

export default function ApproachSection() {
  return (
    <section className="consulting-approach-wrapper">
      <div className="consulting-approach-container">
        {/* Top Header Box */}
        <div className="approach-header-box">
          <div className="approach-badge-capsule">
            <span className="badge-bullet" />
            <span className="badge-text">Our Approach</span>
          </div>

          <h2 className="approach-main-title">
            Structured Strategy
            <br />
            Built for <span className="blue-italic-text">Growth.</span>
          </h2>

          <p className="approach-subtext">
            Every organisation's digital transformation journey is different. Our approach is collaborative, structured, and focused on delivering measurable business value. Our engagement typically includes:
          </p>
        </div>

        {/* 5 Columns Grid */}
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
          We work alongside your leadership and engineering teams to ensure digital investments deliver long-term competitive advantage.
        </p>
      </div>
    </section>
  );
}
