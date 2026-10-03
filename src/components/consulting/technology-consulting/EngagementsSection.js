'use client';

import React from 'react';
import Image from 'next/image';

const engagementItems = [
  {
    id: 1,
    title: 'Technology Architecture for a HealthTech Platform',
    description:
      'Designed a modern system architecture and technology roadmap to replace a legacy application while improving scalability, security, and system integration.',
    image: '/images/con4.png',
    alt: 'Technology Architecture for a HealthTech Platform',
  },
  {
    id: 2,
    title: 'Modern E-commerce Architecture for an FMCG Company',
    description:
      'Recommended and implemented a scalable technology architecture to replace an unstable WooCommerce platform with a custom-built solution.',
    image: '/images/con5.png',
    alt: 'Modern E-commerce Architecture for an FMCG Company',
  },
  {
    id: 3,
    title: 'Product Architecture for a Multilingual Mobile Application',
    description:
      'Designed the technical foundation and architecture for a subscription-based mobile application capable of multilingual voice processing and third-party integration.',
    image: '/images/con6.png',
    alt: 'Product Architecture for a Multilingual Mobile Application',
  },
];

export default function EngagementsSection() {
  return (
    <section className="consulting-engagements-wrapper">
      <div className="consulting-engagements-container">
        {/* Top Header Box */}
        <div className="engagements-header-box">
          <div className="engagements-header-left">
            <div className="engagements-badge-capsule">
              <span className="badge-bullet" />
              <span className="badge-text">Typical Engagements</span>
            </div>
            <h2 className="engagements-main-title">
              Typical Engagements in
              <br />
              <span className="blue-italic-text">Technology Consulting</span>
            </h2>
          </div>

          <div className="engagements-header-right">
            <p className="engagements-header-desc">
              We help business leaders and technical teams navigate complex architectural choices with confidence.
            </p>
          </div>
        </div>

        {/* 3 Cards Block */}
        <div className="engagements-cards-block">
          {engagementItems.map((item) => (
            <div key={item.id} className="engagement-card-item">
              <div className="engagement-card-img-box">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={365}
                  height={225}
                  className="engagement-card-img"
                  priority
                />
              </div>

              <div className="engagement-card-body">
                <div className="blue-dash-line" />
                <h3 className="engagement-card-title">{item.title}</h3>
                <p className="engagement-card-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
