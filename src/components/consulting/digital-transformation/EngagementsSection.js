'use client';

import React from 'react';
import Image from 'next/image';

const engagementItems = [
  {
    id: 1,
    title: 'Digital Transformation Roadmap for a HealthTech Startup',
    description:
      'Developed a strategic roadmap to modernise a legacy platform, improve security, and integrate multiple business systems.',
    image: '/images/con4.png',
    alt: 'Digital Transformation Roadmap for a HealthTech Startup',
  },
  {
    id: 2,
    title: 'Technology Strategy for an FMCG Business',
    description:
      'Designed a scalable technology roadmap that replaced an unstable e-commerce platform with a custom-built solution.',
    image: '/images/con5.png',
    alt: 'Technology Strategy for an FMCG Business',
  },
  {
    id: 3,
    title: 'Product Strategy for a Startup',
    description:
      'Worked with founders to define product architecture, technology choices, and a scalable development roadmap before product implementation.',
    image: '/images/con6.png',
    alt: 'Product Strategy for a Startup',
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
              <span className="blue-italic-text">Digital Transformation</span>
            </h2>
          </div>

          <div className="engagements-header-right">
            <p className="engagements-header-desc">
              Heapvue works closely with leadership teams to turn transformation goals into actionable, measurable execution plans.
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
