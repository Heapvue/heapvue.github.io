'use client';

import React from 'react';
import Image from 'next/image';

const ecommerceBuildItems = [
  {
    id: 1,
    title: 'Corporate websites and digital platforms',
    description: 'Build modern, high-performance enterprise websites that establish brand credibility and engage visitors.',
    icon: '/images/sol1.png',
    alt: 'Corporate websites and digital platforms',
  },
  {
    id: 2,
    title: 'E-commerce platforms and online storefronts',
    description: 'Design robust online stores and shopping platforms engineered for seamless checkout and sales growth.',
    icon: '/images/sol2.png',
    alt: 'E-commerce platforms and online storefronts',
  },
  {
    id: 3,
    title: 'Shopify-based online stores',
    description: 'Implement tailored Shopify store builds with streamlined product management and custom theme development.',
    icon: '/images/sol3.png',
    alt: 'Shopify-based online stores',
  },
  {
    id: 4,
    title: 'Custom e-commerce systems tailored to business workflows',
    description: 'Develop custom e-commerce platforms aligned with specific business processes and complex catalog needs.',
    icon: '/images/sol1.png',
    alt: 'Custom e-commerce systems tailored to business workflows',
  },
  {
    id: 5,
    title: 'SEO-optimised websites that improve online visibility',
    description: 'Optimize digital platforms for search engine visibility, organic traffic growth, and higher rankings.',
    icon: '/images/sol2.png',
    alt: 'SEO-optimised websites that improve online visibility',
  },
  {
    id: 6,
    title: 'Digital platforms that integrate with payment systems and business tools',
    description: 'Seamlessly connect digital storefronts with secure payment gateways, ERPs, and inventory management systems.',
    icon: '/images/sol3.png',
    alt: 'Digital platforms that integrate with payment systems and business tools',
  },
];

export default function WhatWeDeliverEcommerceSection() {
  return (
    <section className="platforms-build-wrapper">
      <div className="platforms-build-container">
        {/* Top Header Box */}
        <div className="platforms-header-box">
          {/* Left Title Box */}
          <div className="platforms-header-left">
            <div className="platforms-badge-capsule">
              <span className="badge-bullet"></span>
              <span className="badge-text">What We Build</span>
            </div>
            <h2 className="platforms-main-title">
              Digital Solutions We <span className="blue-italic-text">Design</span>
              <br />
              and <span className="blue-italic-text">Deliver</span>
            </h2>
          </div>

          {/* Right Description Box */}
          <div className="platforms-header-right">
            <p className="platforms-header-desc">
              Our digital solutions are designed to improve both customer experience and operational efficiency. Our focus is on creating reliable and user-friendly digital platforms that support business growth and customer engagement.
            </p>
          </div>
        </div>

        {/* 6 Icons Grid Box */}
        <div className="platforms-grid-box">
          {ecommerceBuildItems.map((item) => (
            <div key={item.id} className="platform-card-item">
              <div className="platform-icon-box">
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={141}
                  height={141}
                  className="platform-icon-img"
                />
              </div>
              <h3 className="platform-card-title">{item.title}</h3>
              <p className="platform-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
