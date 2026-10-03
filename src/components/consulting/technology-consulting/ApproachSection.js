'use client';

import React from 'react';
import Image from 'next/image';

const approachSteps = [
  {
    id: 1,
    title: 'Understanding Objectives',
    description: 'Understanding business objectives and technical requirements.',
    icon: '/images/con7.png',
  },
  {
    id: 2,
    title: 'Reviewing Systems',
    description: 'Reviewing existing systems and identifying limitations.',
    icon: '/images/con7.png',
  },
  {
    id: 3,
    title: 'Evaluating Stacks',
    description: 'Evaluating suitable technologies and architectural approaches.',
    icon: '/images/con7.png',
  },
  {
    id: 4,
    title: 'Designing Architecture',
    description: 'Designing scalable, secure, and maintainable solutions.',
    icon: '/images/con7.png',
  },
  {
    id: 5,
    title: 'Supporting Implementation',
    description: 'Supporting implementation and continuous optimisation.',
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
            Outcome-Driven
            <br />
            <span className="blue-italic-text">Technical Decision Making.</span>
          </h2>

          <p className="approach-subtext">
            Every technology decision should be driven by business outcomes rather than trends. Our consulting approach focuses on understanding the organisation's goals before recommending technical solutions.
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
          Our methodology ensures tech stack choices match your real-world scalability, performance, and security needs.
        </p>
      </div>
    </section>
  );
}
