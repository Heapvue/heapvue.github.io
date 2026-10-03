'use client';

import React from 'react';
import Image from 'next/image';

const challengesData = [
  {
    num: '01',
    title: 'Client Pipeline Management',
    description: 'Managing client relationships and lead pipelines efficiently.',
    image: '/images/indus1.png',
  },
  {
    num: '02',
    title: 'Deal & Proposal Tracking',
    description: 'Tracking proposals, communications, and deal progress across advisors.',
    image: '/images/indus2.png',
  },
  {
    num: '03',
    title: 'Financial Data Security',
    description: 'Handling sensitive financial data securely with zero risk of exposure.',
    image: '/images/indus3.png',
  },
  {
    num: '04',
    title: 'Organised Records',
    description: 'Maintaining organised, searchable, and easily accessible client records.',
    image: '/images/indus4.png',
  },
  {
    num: '05',
    title: 'Workflow Efficiency',
    description: 'Reducing manual processes and improving internal workflow efficiency.',
    image: '/images/indus5.png',
  },
  {
    num: '06',
    title: 'Tool & Data Integration',
    description: 'Integrating multiple tools and systems used across daily operations.',
    image: '/images/indus6.png',
  },
];

export default function FinanceChallengesSection() {
  return (
    <section className="healthcare-challenges-wrapper">
      <div className="healthcare-challenges-container">
        <div className="challenges-header-box">
          <div className="challenges-badge-capsule">
            <span className="badge-bullet"></span>
            <span className="badge-text">Typical Challenges</span>
          </div>

          <h2 className="challenges-main-title">
            Typical <span className="blue-highlight">Challenges</span> in Finance
          </h2>

          <p className="challenges-subtext">
            Heapvue works with financial organisations to build systems that improve visibility, streamline operations, and ensure secure data management.
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
