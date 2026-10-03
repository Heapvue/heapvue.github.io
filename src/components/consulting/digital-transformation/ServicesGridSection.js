'use client';

import React from 'react';
import Image from 'next/image';

const transformationServices = [
  {
    id: 1,
    title: 'Digital transformation strategy and planning',
    description: 'Build actionable transformation frameworks aligned with organizational goals.',
    bg: '/images/bluebg.png',
  },
  {
    id: 2,
    title: 'Technology roadmap development',
    description: 'Define phased technology investment milestones for long-term scalability.',
    bg: '/images/greenbg.png',
  },
  {
    id: 3,
    title: 'Business process digitisation',
    description: 'Streamline manual workflows and operations with modern digital systems.',
    bg: '/images/bluebg.png',
  },
  {
    id: 4,
    title: 'Legacy system assessment and modernisation planning',
    description: 'Evaluate legacy software risks and create de-risked migration strategies.',
    bg: '/images/greenbg.png',
  },
  {
    id: 5,
    title: 'Technology architecture advisory',
    description: 'Design future-ready, secure, and scalable cloud architectures.',
    bg: '/images/bluebg.png',
  },
  {
    id: 6,
    title: 'Product strategy and MVP planning for startups',
    description: 'Formulate MVP scope, technology stack choices, and product launch roadmaps.',
    bg: '/images/bluebg.png',
  },
  {
    id: 7,
    title: 'Digital adoption and transformation consulting',
    description: 'Drive team adoption, change management, and continuous process optimization.',
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
              Digital Transformation
              <br />
              <span className="blue-italic-text">Expertise.</span>
            </h2>
          </div>

          <div className="consulting-grid-header-right">
            <p className="consulting-grid-header-desc">
              Our consulting services are focused on helping organisations make informed technology decisions and successfully navigate digital transformation initiatives. Our areas of expertise include:
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="consulting-cards-grid">
          {transformationServices.map((service) => (
            <div
              key={service.id}
              className="consulting-service-card"
              style={{ backgroundImage: `url('${service.bg}')` }}
            >
              <div className="consulting-card-icon">
                <Image
                  src="/images/con3.png"
                  alt="Transformation Icon"
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
          We combine business understanding with technology expertise to create strategies that are practical, scalable, and aligned with organisational goals.
        </p>
      </div>
    </section>
  );
}
