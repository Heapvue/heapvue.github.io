'use client';

import React from 'react';
import Image from 'next/image';

const ecommerceApproachSteps = [
  {
    step: '// 001',
    title: 'Understanding the organisation’s brand, customers, and business model',
    description:
      'Analysing brand identity, target audience profiles, and commercial objectives to align the digital platform strategy.',
    image: '/images/sol5.png',
    alt: 'Understanding the organisation’s brand, customers, and business model',
  },
  {
    step: '// 002',
    title: 'Designing digital platforms that prioritise usability and performance',
    description:
      'Designing intuitive navigation flows, modern interfaces, and fast-loading web layouts optimized for high conversion.',
    image: '/images/sol6.png',
    alt: 'Designing digital platforms that prioritise usability and performance',
  },
  {
    step: '// 003',
    title: 'Building secure and scalable e-commerce infrastructure',
    description:
      'Engineering resilient digital storefronts capable of handling high traffic volumes and maintaining data security.',
    image: '/images/sol7.png',
    alt: 'Building secure and scalable e-commerce infrastructure',
  },
  {
    step: '// 004',
    title: 'Integrating payment gateways, inventory systems, and business tools',
    description:
      'Seamlessly connecting digital platforms with secure payment processors, inventory management tools, and ERP systems.',
    image: '/images/sol8.png',
    alt: 'Integrating payment gateways, inventory systems, and business tools',
  },
  {
    step: '// 005',
    title: 'Optimising platforms for search visibility and long-term maintainability',
    description:
      'Implementing technical SEO best practices, site speed optimization, and maintainable platform code for ongoing growth.',
    image: '/images/sol9.png',
    alt: 'Optimising platforms for search visibility and long-term maintainability',
  },
];

export default function EcommerceApproachSection() {
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
              <span className="blue-italic-text">Digital Platforms</span>
            </h2>
          </div>

          {/* Right Description Box */}
          <div className="platform-approach-header-right">
            <p className="platform-approach-header-desc">
              Building successful digital platforms requires balancing user experience, performance, and operational efficiency. This ensures that organisations have digital platforms that not only look good but also function reliably and support business growth.
            </p>
          </div>
        </div>

        {/* 5 Approach Rows */}
        <div className="platform-approach-rows">
          {ecommerceApproachSteps.map((item, index) => (
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
