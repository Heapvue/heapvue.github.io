'use client';

import React from 'react';
import Image from 'next/image';

const approachSteps = [
  {
    id: 1,
    title: 'Understanding Regulations',
    description: 'Understanding applicable regulatory and business requirements.',
    icon: '/images/con7.png',
  },
  {
    id: 2,
    title: 'Assessing Data Flows',
    description: 'Assessing existing systems, infrastructure, and data flows.',
    icon: '/images/con7.png',
  },
  {
    id: 3,
    title: 'Identifying Risks',
    description: 'Identifying privacy, security, and compliance risks.',
    icon: '/images/con7.png',
  },
  {
    id: 4,
    title: 'Recommending Controls',
    description: 'Recommending technical and operational improvements.',
    icon: '/images/con7.png',
  },
  {
    id: 5,
    title: 'Supporting Validation',
    description: 'Supporting implementation, validation, and ongoing compliance initiatives.',
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
            Integrating Privacy into
            <br />
            <span className="blue-italic-text">System Architecture.</span>
          </h2>

          <p className="approach-subtext">
            Effective compliance begins with well-designed technology and well-defined processes. Our consulting approach focuses on integrating privacy and security into every stage of system design and implementation.
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
          We work alongside internal IT teams, legal advisors, and compliance officers to ensure technology supports your broader compliance objectives.
        </p>
      </div>
    </section>
  );
}
