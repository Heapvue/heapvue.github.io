'use client';

import React from 'react';
import Image from 'next/image';

const approachSteps = [
  {
    step: '// 001',
    title: 'Understand operational workflows & business requirements',
    description:
      'Analysing business operations and workflows to identify requirements, ensuring the platform aligns with real-world processes and organisational goals.',
    image: '/images/sol5.png',
    alt: 'Understand operational workflows & business requirements',
  },
  {
    step: '// 002',
    title: 'Design system architecture and platform structure',
    description:
      'Designing scalable system architecture and structured platforms to ensure performance, flexibility, and seamless integration across evolving business needs.',
    image: '/images/sol6.png',
    alt: 'Design system architecture and platform structure',
  },
  {
    step: '// 003',
    title: 'Build scalable and secure applications',
    description:
      'Developing scalable and secure applications that ensure high performance, data protection, and reliability while supporting future growth and evolving business demands.',
    image: '/images/sol7.png',
    alt: 'Build scalable and secure applications',
  },
  {
    step: '// 004',
    title: 'Integrate with existing systems and tools',
    description:
      'Seamlessly integrating with existing systems and tools to enable smooth data flow, enhance interoperability, and ensure efficient, connected business operations.',
    image: '/images/sol8.png',
    alt: 'Integrate with existing systems and tools',
  },
  {
    step: '// 005',
    title: 'Deploy and support the platform as it evolves',
    description:
      'Deploying and continuously supporting the platform to ensure stability, performance, and adaptability as business needs and technologies evolve over time.',
    image: '/images/sol9.png',
    alt: 'Deploy and support the platform as it evolves',
  },
];

export default function PlatformDevApproachSection() {
  return (
    <section className="platform-approach-wrapper">
      <div className="platform-approach-container">
        <div className="platform-approach-header">
          <div className="platform-approach-header-left">
            <div className="platform-approach-badge">
              <span className="badge-bullet"></span>
              <span className="badge-text">How We Enable Healthcare</span>
            </div>
            <h2 className="platform-approach-main-title">
              Our Approach to
              <br />
              <span className="blue-italic-text">Platform Development</span>
            </h2>
          </div>

          <div className="platform-approach-header-right">
            <p className="platform-approach-header-desc">
              Every organisation has unique operational needs. Our development process focuses on understanding these requirements and designing platforms that are both efficient and scalable.
            </p>
          </div>
        </div>

        <div className="platform-approach-rows">
          {approachSteps.map((item, index) => (
            <div key={index} className="platform-approach-row">
              <div className="approach-row-left">
                <span className="approach-step-tag">{item.step}</span>
                <h3 className="approach-row-title">{item.title}</h3>
                <p className="approach-row-desc">{item.description}</p>
              </div>

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
