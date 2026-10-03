'use client';

import React from 'react';
import Image from 'next/image';

const supportItems = [
  {
    id: 1,
    title: 'MVP development and rapid product prototyping',
    description:
      'Engineered to get minimum viable products into the hands of real users fast, validating core features without technical debt.',
    image: '/images/indus7.png',
    alt: 'MVP development and rapid product prototyping',
  },
  {
    id: 2,
    title: 'Building scalable backend systems and architectures',
    description:
      'Designing clean backend services, microservices, and databases built to handle exponential user growth smoothly.',
    image: '/images/indus8.png',
    alt: 'Building scalable backend systems and architectures',
  },
  {
    id: 3,
    title: 'Developing mobile and web applications',
    description:
      'Creating responsive web apps and iOS/Android mobile applications optimized for user engagement and retention.',
    image: '/images/indus9.png',
    alt: 'Developing mobile and web applications',
  },
  {
    id: 4,
    title: 'Integrating third-party tools and platforms',
    description:
      'Connecting analytics, payments, AI models, CRM systems, and cloud infrastructure into unified product stacks.',
    image: '/images/indus10.png',
    alt: 'Integrating third-party tools and platforms',
  },
  {
    id: 5,
    title: 'Designing systems that can evolve with changing requirements',
    description:
      'Architecting modular software codebases that adapt swiftly as product roadmaps pivot and scale.',
    image: '/images/indus11.png',
    alt: 'Designing systems that can evolve with changing requirements',
  },
];

export default function StartupsSupportSection() {
  return (
    <section className="healthcare-support-wrapper">
      <div className="healthcare-support-container">
        <div className="support-header-box">
          <div className="support-header-left">
            <div className="support-badge-capsule">
              <span className="badge-bullet"></span>
              <span className="badge-text">How We Support</span>
            </div>
            <h2 className="support-main-title">
              How We <span className="blue-italic-text">Support</span>
              <br />
              <span className="blue-italic-text">Startups</span>
            </h2>
          </div>

          <div className="support-header-right">
            <p className="support-header-desc">
              Heapvue works with early-stage and growing startups to build systems that support both product development and business scalability. Our work typically includes:
            </p>
          </div>
        </div>

        <div className="support-rows-container">
          {supportItems.map((item) => (
            <div key={item.id} className="support-row-item">
              <div className="support-col-title">
                <h3>{item.title}</h3>
              </div>
              <div className="support-col-desc">
                <p>{item.description}</p>
              </div>
              <div className="support-col-image">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={489}
                  height={196}
                  className="support-row-img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
