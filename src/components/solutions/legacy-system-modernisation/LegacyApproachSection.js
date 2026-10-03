'use client';

import React from 'react';
import Image from 'next/image';

const approachSteps = [
  {
    step: '// 001',
    title: 'Assessing the current system architecture and limitations',
    description:
      'Auditing system dependencies, code quality, and infrastructure limitations to build a clear migration blueprint.',
    image: '/images/sol5.png',
    alt: 'Assessing the current system architecture and limitations',
  },
  {
    step: '// 002',
    title: 'Identifying security risks and performance bottlenecks',
    description:
      'Pinpointing critical vulnerabilities, plugin conflicts, and performance slowdowns before initiating technical upgrades.',
    image: '/images/sol6.png',
    alt: 'Identifying security risks and performance bottlenecks',
  },
  {
    step: '// 003',
    title: 'Designing a modern and scalable system architecture',
    description:
      'Designing structured, future-ready architecture aligned with enterprise scalability and high-availability standards.',
    image: '/images/sol7.png',
    alt: 'Designing a modern and scalable system architecture',
  },
  {
    step: '// 004',
    title: 'Migrating or rebuilding key components using updated technologies',
    description:
      'Upgrading outdated tech stacks, refactoring codebases, and building modern components tailored to business needs.',
    image: '/images/sol8.png',
    alt: 'Migrating or rebuilding key components using updated technologies',
  },
  {
    step: '// 005',
    title: 'Integrating with existing systems and ensuring data continuity',
    description:
      'Connecting modern applications with existing databases and tools to guarantee complete data integrity and zero operational disruption.',
    image: '/images/sol9.png',
    alt: 'Integrating with existing systems and ensuring data continuity',
  },
];

export default function LegacyApproachSection() {
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
              <span className="blue-italic-text">Modernisation</span>
            </h2>
          </div>

          {/* Right Description Box */}
          <div className="platform-approach-header-right">
            <p className="platform-approach-header-desc">
              Modernising legacy systems requires careful planning to avoid operational disruptions while ensuring a successful transition. This process ensures that organisations can transition to modern infrastructure without losing existing operational capabilities or data integrity.
            </p>
          </div>
        </div>

        {/* 5 Approach Rows */}
        <div className="platform-approach-rows">
          {approachSteps.map((item, index) => (
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
