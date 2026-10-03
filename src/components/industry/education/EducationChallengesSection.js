'use client';

import React from 'react';
import Image from 'next/image';

const challengesData = [
  {
    num: '01',
    title: 'Enrolment & Allocation',
    description: 'Managing student enrolment and course allocation efficiently.',
    image: '/images/indus1.png',
  },
  {
    num: '02',
    title: 'Fee Collection & Access',
    description: 'Handling fee collection and access control across multiple learning platforms.',
    image: '/images/indus2.png',
  },
  {
    num: '03',
    title: 'Engaging Content Delivery',
    description: 'Delivering structured and engaging learning experiences to diverse audiences.',
    image: '/images/indus3.png',
  },
  {
    num: '04',
    title: 'Roles & Permissions',
    description: 'Managing multiple users, roles, and granular administrative permissions.',
    image: '/images/indus4.png',
  },
  {
    num: '05',
    title: 'EdTech System Integration',
    description: 'Integrating learning management platforms with other operational software.',
    image: '/images/indus5.png',
  },
  {
    num: '06',
    title: 'Specialised Learning Tools',
    description: 'Creating accessible tools that support diverse and special learning needs.',
    image: '/images/indus6.png',
  },
];

export default function EducationChallengesSection() {
  return (
    <section className="healthcare-challenges-wrapper">
      <div className="healthcare-challenges-container">
        <div className="challenges-header-box">
          <div className="challenges-badge-capsule">
            <span className="badge-bullet"></span>
            <span className="badge-text">Typical Challenges</span>
          </div>

          <h2 className="challenges-main-title">
            Typical <span className="blue-highlight">Challenges</span> in Education
          </h2>

          <p className="challenges-subtext">
            Heapvue works with education organisations to design systems that streamline administration while improving the learning experience.
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
