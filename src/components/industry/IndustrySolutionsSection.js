'use client';

import React from 'react';
import Image from 'next/image';

const industryCards = [
  {
    id: 'healthcare',
    title: 'Healthcare & Life Sciences',
    description: 'AI-driven patient care, clinical workflow automation, HIPAA-compliant platforms, and predictive health analytics.',
    icon: '/images/heart.png',
    bg: '/images/bluebg.png',
  },
  {
    id: 'finance',
    title: 'Finance & FinTech',
    description: 'Secure, high-performance financial systems, algorithmic trading tools, fraud detection, and digital banking platforms.',
    icon: '/images/card.png',
    bg: '/images/greenbg.png',
  },
  {
    id: 'saas',
    title: 'Enterprise & SaaS',
    description: 'Scalable multi-tenant cloud platforms, custom enterprise software, and seamless third-party API integrations.',
    icon: '/images/saas.png',
    bg: '/images/bluebg.png',
  },
  {
    id: 'automation',
    title: 'AI & Automation',
    description: 'Intelligent process automation, custom AI models, NLP engines, and predictive analytics for modern enterprises.',
    icon: '/images/automation.png',
    bg: '/images/greenbg.png',
  },
  {
    id: 'logistics',
    title: 'Logistics & Supply Chain',
    description: 'Real-time fleet tracking, intelligent warehouse management, route optimization, and supply chain visibility.',
    icon: '/images/logi.png',
    bg: '/images/greenbg.png',
  },
  {
    id: 'real-estate',
    title: 'Real Estate & PropTech',
    description: 'Property management portals, virtual tour platforms, automated tenant engagement, and smart analytics.',
    icon: '/images/real.png',
    bg: '/images/bluebg.png',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce & Retail',
    description: 'High-converting online storefronts, personalized recommendation engines, and omnichannel commerce platforms.',
    icon: '/images/shop.png',
    bg: '/images/greenbg.png',
  },
  {
    id: 'government',
    title: 'Government & Public Sector',
    description: 'Secure, compliant digital infrastructure, public service portals, and automated administrative operations.',
    icon: '/images/gov.png',
    bg: '/images/bluebg.png',
  },
];

export default function IndustrySolutionsSection() {
  return (
    <section className="industry-solutions-wrapper">
      <div className="industry-solutions-container">
        {/* Header Block */}
        <div className="industry-solutions-header">
          <div className="industry-solutions-badge-capsule">
            <span className="badge-bullet"></span>
            <span className="badge-text">TRANSFORMING SECTORS</span>
          </div>
          
          <h2 className="industry-solutions-title">
            Tailored Industry <span className="blue-highlight">Solutions</span>
          </h2>
          
          <p className="industry-solutions-desc">
            Heapvue partners with organizations worldwide to build scalable, AI-powered digital solutions designed for real-world impact across diverse industry sectors.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="industry-solutions-grid">
          {industryCards.map((card) => (
            <div
              key={card.id}
              className="industry-solution-card"
              style={{ backgroundImage: `url(${card.bg})` }}
            >
              <div className="industry-card-icon-wrapper">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={40}
                  height={40}
                  className="industry-card-icon"
                />
              </div>

              <div className="industry-card-content">
                <h3 className="industry-card-title">{card.title}</h3>
                <p className="industry-card-desc">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
