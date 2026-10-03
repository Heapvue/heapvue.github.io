'use client';

import React from 'react';
import Image from 'next/image';

const supportItems = [
  {
    id: 1,
    title: 'Developing custom e-commerce platforms tailored to business needs',
    description:
      'Building high-performance custom shopping platforms designed specifically around your unique product catalogs and operational workflows.',
    image: '/images/indus7.png',
    alt: 'Developing custom e-commerce platforms',
  },
  {
    id: 2,
    title: 'Building inventory and operations management systems',
    description:
      'Creating centralized tools to manage real-time inventory tracking, staff task assignments, and order processing across physical stores.',
    image: '/images/indus8.png',
    alt: 'Building inventory and operations management systems',
  },
  {
    id: 3,
    title: 'Designing and optimising digital storefronts',
    description:
      'Crafting intuitive, responsive digital storefronts that engage online visitors, increase conversion rates, and elevate brand value.',
    image: '/images/indus9.png',
    alt: 'Designing and optimising digital storefronts',
  },
  {
    id: 4,
    title: 'Migrating businesses from unstable or outdated platforms',
    description:
      'Smoothly transitioning your storefront from fragile legacy plugins to secure, cloud-native Node.js or modern headless architectures.',
    image: '/images/indus10.png',
    alt: 'Migrating businesses from unstable platforms',
  },
  {
    id: 5,
    title: 'Integrating e-commerce platforms with payment systems and backend tools',
    description:
      'Establishing secure API connections to payment gateways, shipping providers, accounting software, and inventory management suites.',
    image: '/images/indus11.png',
    alt: 'Integrating e-commerce platforms with payment systems',
  },
];

export default function RetailSupportSection() {
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
              <span className="blue-italic-text">Retail & E-commerce</span>
            </h2>
          </div>

          <div className="support-header-right">
            <p className="support-header-desc">
              Heapvue works with retail brands, e-commerce businesses, and multi-store operations to build systems that support both customer-facing experiences and internal operations. Our work typically includes:
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
