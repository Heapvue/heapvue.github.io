'use client';

import React from 'react';
import Image from 'next/image';

const challengesData = [
  {
    num: '01',
    title: 'Platform Instability',
    description: 'Unstable e-commerce platforms due to plugin dependencies or outdated systems.',
    image: '/images/indus1.png',
  },
  {
    num: '02',
    title: 'Multi-Location Inventory',
    description: 'Managing inventory across multiple stores or locations seamlessly.',
    image: '/images/indus2.png',
  },
  {
    num: '03',
    title: 'Field & Staff Coordination',
    description: 'Coordinating sales teams and field staff operations across locations.',
    image: '/images/indus3.png',
  },
  {
    num: '04',
    title: 'Seamless Customer Experience',
    description: 'Providing a seamless and user-friendly online shopping experience.',
    image: '/images/indus4.png',
  },
  {
    num: '05',
    title: 'Scalable Performance',
    description: 'Scaling digital platforms to handle increasing customer demand and peak traffic.',
    image: '/images/indus5.png',
  },
  {
    num: '06',
    title: 'System Integrations',
    description: 'Integrating e-commerce systems with payment gateways, inventory tools, and backend ERPs.',
    image: '/images/indus6.png',
  },
];

export default function RetailChallengesSection() {
  return (
    <section className="healthcare-challenges-wrapper">
      <div className="healthcare-challenges-container">
        <div className="challenges-header-box">
          <div className="challenges-badge-capsule">
            <span className="badge-bullet"></span>
            <span className="badge-text">Typical Challenges</span>
          </div>

          <h2 className="challenges-main-title">
            Typical <span className="blue-highlight">Challenges</span> in Retail & E-commerce
          </h2>

          <p className="challenges-subtext">
            Heapvue works with retail businesses to build systems that improve operational control, enhance customer experience, and support scalable growth.
          </p>
        </div>

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
