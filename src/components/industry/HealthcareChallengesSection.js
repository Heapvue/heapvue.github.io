'use client';

import React from 'react';
import Image from 'next/image';

const challengesData = [
  {
    num: '01',
    title: 'Digital Care',
    description: 'Managing patient appointments, follow-ups, and consultations digitally.',
    image: '/images/indus1.png',
  },
  {
    num: '02',
    title: 'System Integration',
    description: 'Integrating multiple healthcare systems and data sources.',
    image: '/images/indus2.png',
  },
  {
    num: '03',
    title: 'Data Security',
    description: 'Protecting sensitive patient information from security threats.',
    image: '/images/indus3.png',
  },
  {
    num: '04',
    title: 'Platform Modernization',
    description: 'Modernising outdated software platforms used for healthcare operations.',
    image: '/images/indus4.png',
  },
  {
    num: '05',
    title: 'Patient Engagement',
    description: 'Improving patient engagement through mobile applications and digital platforms.',
    image: '/images/indus5.png',
  },
  {
    num: '06',
    title: 'Care Communication',
    description: 'Ensuring reliable communication between healthcare providers and patients.',
    image: '/images/indus6.png',
  },
];

export default function HealthcareChallengesSection() {
  return (
    <section className="healthcare-challenges-wrapper">
      <div className="healthcare-challenges-container">
        {/* Header Box (801 x 171) */}
        <div className="challenges-header-box">
          {/* Badge Capsule */}
          <div className="challenges-badge-capsule">
            <span className="badge-bullet"></span>
            <span className="badge-text">What are the obstacles</span>
          </div>

          {/* Main Title */}
          <h2 className="challenges-main-title">
            Typical <span className="blue-highlight">Challenges</span> in Healthcare
          </h2>

          {/* Sub-description */}
          <p className="challenges-subtext">
            Heapvue works closely with healthcare organisations to design secure and scalable digital systems that address these operational challenges.
          </p>
        </div>

        {/* 6 Cards Grid (1200 x 418 per row / total grid) */}
        <div className="challenges-cards-grid">
          {challengesData.map((item) => (
            <div key={item.num} className="challenge-card-item">
              <div className="challenge-img-wrapper">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={385}
                  height={218}
                  className="challenge-img"
                />
              </div>

              <div className="challenge-card-body">
                <span className="challenge-num-badge">{item.num}</span>
                <h3 className="challenge-card-title">{item.title}</h3>
                <p className="challenge-card-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
