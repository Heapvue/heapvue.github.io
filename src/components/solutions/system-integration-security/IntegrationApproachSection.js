'use client';

import React from 'react';
import Image from 'next/image';

const integrationApproachSteps = [
  {
    step: '// 001',
    title: 'Understanding the organisation’s existing systems and data flows',
    description:
      'Mapping existing software applications, legacy databases, data touchpoints, and security policies.',
    image: '/images/sol5.png',
    alt: 'Understanding the organisation’s existing systems and data flows',
  },
  {
    step: '// 002',
    title: 'Designing secure integration architecture using APIs and modern frameworks',
    description:
      'Architecting clean API schemas, middleware data mapping, and secure integration gateways.',
    image: '/images/sol6.png',
    alt: 'Designing secure integration architecture using APIs and modern frameworks',
  },
  {
    step: '// 003',
    title: 'Implementing infrastructure security measures and access controls',
    description:
      'Deploying network security firewalls, multi-factor authentication, and granular access permission structures.',
    image: '/images/sol7.png',
    alt: 'Implementing infrastructure security measures and access controls',
  },
  {
    step: '// 004',
    title: 'Protecting systems against common cyber threats and vulnerabilities',
    description:
      'Hardening system perimeters against brute-force attacks, SQL injections, and unauthorized data exposure.',
    image: '/images/sol8.png',
    alt: 'Protecting systems against common cyber threats and vulnerabilities',
  },
  {
    step: '// 005',
    title: 'Ensuring reliable data exchange and system performance',
    description:
      'Conducting stress testing, automated error retries, and continuous monitoring for high system availability.',
    image: '/images/sol9.png',
    alt: 'Ensuring reliable data exchange and system performance',
  },
];

export default function IntegrationApproachSection() {
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
              <span className="blue-italic-text">Integration & Security</span>
            </h2>
          </div>

          {/* Right Description Box */}
          <div className="platform-approach-header-right">
            <p className="platform-approach-header-desc">
              Effective integration and security require careful system design and ongoing monitoring. This approach ensures that organisations can operate on connected systems that remain secure, resilient, and scalable.
            </p>
          </div>
        </div>

        {/* 5 Approach Rows */}
        <div className="platform-approach-rows">
          {integrationApproachSteps.map((item, index) => (
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
