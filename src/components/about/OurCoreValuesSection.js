'use client';

import React from 'react';
import Image from 'next/image';

const coreValuesData = [
  {
    id: 'integrity',
    title: 'Integrity',
    description: 'We uphold honesty and transparency in all our engagements.',
    icon: '/images/integrity.png',
    bgImage: '/images/bluebg.png',
  },
  {
    id: 'excellence',
    title: 'Excellence',
    description: 'We are committed to exceeding expectations with every project.',
    icon: '/images/excellence.png',
    bgImage: '/images/greenbg.png',
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    description: 'We work hand-in-hand with our clients, ensuring seamless communication.',
    icon: '/images/colloboration.png',
    bgImage: '/images/bluebg.png',
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'We constantly push the boundaries of technology for impactful solutions.',
    icon: '/images/innovation.png',
    bgImage: '/images/greenbg.png',
  },
];

export default function OurCoreValuesSection() {
  return (
    <section className="our-core-values-wrapper">
      <div className="our-core-values-container">
        {/* Top Header Box (1200 x 148 Hug) */}
        <div className="values-header-box">
          {/* Left Title Box */}
          <div className="values-header-left">
            <div className="values-badge-capsule">
              <span className="badge-bullet"></span>
              <span className="badge-text">Our Core Values</span>
            </div>
            <h2 className="values-main-title">
              Our <span className="values-blue-highlight">core values</span> guide everything we do.
            </h2>
          </div>

          {/* Right Subtext Box */}
          <div className="values-header-right">
            <p>
              Heapvue is built on innovation, collaboration, and a commitment to delivering intelligent technology solutions that create meaningful business impact. Our core values shape how we build products, work with clients, and grow as a team in a rapidly evolving digital world.
            </p>
          </div>
        </div>

        {/* 4 Core Value Cards Grid */}
        <div className="values-cards-grid">
          {coreValuesData.map((card) => (
            <div
              key={card.id}
              className="values-card"
              style={{ backgroundImage: `url('${card.bgImage}')` }}
            >
              <div className="values-card-top">
                <div className="values-card-icon-wrapper">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={40}
                    height={40}
                    className="values-card-icon"
                  />
                </div>
              </div>
              <div className="values-card-bottom">
                <h3 className="values-card-title">{card.title}</h3>
                <p className="values-card-desc">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
