'use client';

import React from 'react';
import Image from 'next/image';

const challengesData = [
  {
    num: '01',
    title: 'Speed & Scalability',
    description: 'Building a product quickly while ensuring scalability.',
    image: '/images/indus1.png',
  },
  {
    num: '02',
    title: 'Technology Architecture',
    description: 'Choosing the right technology architecture for long-term growth.',
    image: '/images/indus2.png',
  },
  {
    num: '03',
    title: 'Evolving Requirements',
    description: 'Managing frequent changes in product requirements as market feedback comes in.',
    image: '/images/indus3.png',
  },
  {
    num: '04',
    title: 'Tool & API Integrations',
    description: 'Integrating multiple third-party tools and services as the business evolves.',
    image: '/images/indus4.png',
  },
  {
    num: '05',
    title: 'Early Performance & Security',
    description: 'Ensuring high performance, reliability, and data protection from day one.',
    image: '/images/indus5.png',
  },
  {
    num: '06',
    title: 'Speed vs Quality Balance',
    description: 'Balancing rapid speed of development with software quality and system stability.',
    image: '/images/indus6.png',
  },
];

export default function StartupsChallengesSection() {
  return (
    <section className="healthcare-challenges-wrapper">
      <div className="healthcare-challenges-container">
        <div className="challenges-header-box">
          <div className="challenges-badge-capsule">
            <span className="badge-bullet"></span>
            <span className="badge-text">Typical Challenges</span>
          </div>

          <h2 className="challenges-main-title">
            Typical <span className="blue-highlight">Challenges</span> for Startups
          </h2>

          <p className="challenges-subtext">
            Heapvue works closely with startups to build flexible systems that can evolve with the business while maintaining performance and reliability.
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
