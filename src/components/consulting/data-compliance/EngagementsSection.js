'use client';

import React from 'react';
import Image from 'next/image';

const engagementItems = [
  {
    id: 1,
    title: 'Infrastructure Security for a Healthcare Platform',
    description:
      'Strengthened infrastructure security to protect a healthcare system from cyber threats while improving the protection of sensitive patient information.',
    image: '/images/con4.png',
    alt: 'Infrastructure Security for a Healthcare Platform',
  },
  {
    id: 2,
    title: 'Secure Data Architecture for a HealthTech Startup',
    description:
      'Designed a secure technology architecture that enabled seamless system integration while maintaining strong controls over sensitive healthcare data.',
    image: '/images/con5.png',
    alt: 'Secure Data Architecture for a HealthTech Startup',
  },
  {
    id: 3,
    title: 'Privacy & Security Assessment',
    description:
      'Reviewed existing applications and infrastructure to identify security risks and recommend improvements that support data privacy and regulatory compliance.',
    image: '/images/con6.png',
    alt: 'Privacy & Security Assessment',
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
              <span className="blue-italic-text">Data & Compliance</span>
            </h2>
          </div>

          <div className="engagements-header-right">
            <p className="engagements-header-desc">
              Heapvue helps organisations build security and regulatory compliance directly into their digital infrastructure.
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
