'use client';

import React from 'react';
import Image from 'next/image';

const techServices = [
  {
    id: 1,
    title: 'Technology stack selection and evaluation',
    description: 'Assess and select frameworks, languages, and tools tailored for growth.',
    bg: '/images/bluebg.png',
  },
  {
    id: 2,
    title: 'Software architecture consulting',
    description: 'Design modular, resilient microservices and application architectures.',
    bg: '/images/greenbg.png',
  },
  {
    id: 3,
    title: 'Cloud and infrastructure planning',
    description: 'Plan cloud migration, serverless deployments, and cost-effective hosting.',
    bg: '/images/bluebg.png',
  },
  {
    id: 4,
    title: 'System integration strategy',
    description: 'Design secure API gateways and middleware data sync pipelines.',
    bg: '/images/greenbg.png',
  },
  {
    id: 5,
    title: 'Legacy system assessment and migration planning',
    description: 'Audit legacy codebases and plan low-risk cloud re-platforming.',
    bg: '/images/bluebg.png',
  },
  {
    id: 6,
    title: 'Application modernisation',
    description: 'Upgrade outdated stacks into high-performance, maintainable codebases.',
    bg: '/images/bluebg.png',
  },
  {
    id: 7,
    title: 'Product architecture consulting',
    description: 'Formulate scalable technical blueprints for web and mobile products.',
    bg: '/images/bluebg.png',
  },
  {
    id: 8,
    title: 'Performance, scalability, and security reviews',
    description: 'Perform deep technical audits to uncover performance bottlenecks and security risks.',
    bg: '/images/greenbg.png',
  },
];

export default function ServicesGridSection() {
  return (
    <section className="consulting-grid-wrapper">
      <div className="consulting-grid-container">
        {/* Top Header Box */}
        <div className="consulting-grid-header">
          <div className="consulting-grid-header-left">
            <div className="consulting-grid-badge">
              <span className="badge-bullet" />
              <span className="badge-text">How We Help</span>
            </div>
            <h2 className="consulting-grid-main-title">
              Technology Evaluation &
              <br />
              <span className="blue-italic-text">Architecture Advisory.</span>
            </h2>
          </div>

          <div className="consulting-grid-header-right">
            <p className="consulting-grid-header-desc">
              Our technology consulting services are designed to help organisations make informed technical decisions and build systems that are aligned with business objectives. Our expertise includes:
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="consulting-cards-grid">
          {techServices.map((service) => (
            <div
              key={service.id}
              className="consulting-service-card"
              style={{ backgroundImage: `url('${service.bg}')` }}
            >
              <div className="consulting-card-icon">
                <Image
                  src="/images/con3.png"
                  alt="Tech Icon"
                  width={42}
                  height={42}
                  style={{ objectFit: 'contain' }}
                />
              </div>

              <div className="consulting-card-body">
                <h3 className="consulting-card-title">{service.title}</h3>
                <p className="consulting-card-desc">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Subtext */}
        <p className="consulting-grid-footer-text">
          Our focus is on building technology foundations that support business growth while reducing complexity and technical risk.
        </p>
      </div>
    </section>
  );
}
