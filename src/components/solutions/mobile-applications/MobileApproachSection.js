'use client';

import React from 'react';
import Image from 'next/image';

const mobileApproachSteps = [
  {
    step: '// 001',
    title: 'Understanding the user journey and application objectives',
    description:
      'Analysing target audience habits, touchpoints, and core functionality goals before designing mobile interfaces.',
    image: '/images/sol5.png',
    alt: 'Understanding the user journey and application objectives',
  },
  {
    step: '// 002',
    title: 'Designing intuitive and responsive user interfaces',
    description:
      'Creating clean UI/UX prototypes tailored for mobile screens, touch patterns, and intuitive user engagement.',
    image: '/images/sol6.png',
    alt: 'Designing intuitive and responsive user interfaces',
  },
  {
    step: '// 003',
    title: 'Developing secure and scalable mobile architecture',
    description:
      'Engineering high-performance mobile codebases built for reliability, data security, and seamless operation.',
    image: '/images/sol7.png',
    alt: 'Developing secure and scalable mobile architecture',
  },
  {
    step: '// 004',
    title: 'Integrating the app with backend systems and APIs',
    description:
      'Connecting mobile client applications seamlessly with cloud databases, external APIs, and business systems.',
    image: '/images/sol8.png',
    alt: 'Integrating the app with backend systems and APIs',
  },
  {
    step: '// 005',
    title: 'Testing, deploying, and continuously improving the application',
    description:
      'Testing across physical iOS and Android devices, handling store publishing, and collecting feedback for ongoing iterations.',
    image: '/images/sol9.png',
    alt: 'Testing, deploying, and continuously improving the application',
  },
];

export default function MobileApproachSection() {
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
              <span className="blue-italic-text">Mobile App Development</span>
            </h2>
          </div>

          {/* Right Description Box */}
          <div className="platform-approach-header-right">
            <p className="platform-approach-header-desc">
              Building effective mobile applications requires balancing user experience, performance, and integration with existing systems. This approach ensures that mobile applications are reliable, easy to use, and aligned with real operational needs.
            </p>
          </div>
        </div>

        {/* 5 Approach Rows */}
        <div className="platform-approach-rows">
          {mobileApproachSteps.map((item, index) => (
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
