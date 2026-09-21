'use client';

import React from 'react';
import Image from 'next/image';

const whyChooseData = [
  {
    id: 'client-focus',
    title: 'Client Focus',
    description: 'We listen, understand, and deliver solutions tailored to your unique business needs.',
    icon: '/images/clientfocus.png',
  },
  {
    id: 'expert-team',
    title: 'Expert Team',
    description: 'Our team of skilled professionals combines technical expertise with industry knowledge.',
    icon: '/images/group.png',
  },
  {
    id: 'quality-assurance',
    title: 'Quality Assurance',
    description: 'We follow stringent quality control measures to ensure flawless execution.',
    icon: '/images/quality.png',
  },
  {
    id: 'innovation-driven',
    title: 'Innovation-Driven',
    description: 'We leverage the latest technologies to build future-ready applications.',
    icon: '/images/innovation1.png',
  },
];

export default function WhyChooseSection() {
  return (
    <section className="why-choose-wrapper">
      <div className="why-choose-container">
        {/* Top Header Content (801 x 212) */}
        <div className="why-choose-header">
          <div className="why-badge-capsule">
            <span className="badge-bullet"></span>
            <span className="badge-text">Why Choose Heapvue?</span>
          </div>

          <h2 className="why-main-title">
            Intelligent Technology <br />
            Built for <span className="why-blue-highlight">Modern Businesses.</span>
          </h2>

          <p className="why-subtext">
            Heapvue delivers scalable AI-driven solutions, modern digital products, and cloud-powered technologies designed to help businesses grow faster and smarter.
          </p>
        </div>

        {/* Bottom Feature Cards Grid (1200 Fill x 269 Hug) */}
        <div className="why-cards-grid">
          {whyChooseData.map((item) => (
            <div key={item.id} className="why-card-item">
              <div className="why-icon-box">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={56}
                  height={56}
                  className="why-icon-img"
                />
              </div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
