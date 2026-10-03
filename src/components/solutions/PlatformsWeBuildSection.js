'use client';

import React from 'react';
import Image from 'next/image';

const defaultPlatformItems = [
  {
    id: 1,
    title: 'Customer relationship management (CRM) systems',
    description:
      'Manage customer interactions, sales pipelines, and data to improve relationships, retention, and overall business growth.',
    icon: '/images/sol1.png',
    alt: 'Customer relationship management (CRM) systems',
  },
  {
    id: 2,
    title: 'Operational management platforms',
    description:
      'Streamline business operations by managing processes, tasks, resources, and internal workflows efficiently.',
    icon: '/images/sol2.png',
    alt: 'Operational management platforms',
  },
  {
    id: 3,
    title: 'Client and service management systems',
    description:
      'Organise client data, track services, and enable seamless communication to deliver consistent and high-quality customer experiences.',
    icon: '/images/sol3.png',
    alt: 'Client and service management systems',
  },
  {
    id: 4,
    title: 'Inventory and workflow management platforms',
    description:
      'Monitor inventory levels & automate workflows to enhance operational efficiency, reduce errors, & optimize resource management.',
    icon: '/images/sol1.png',
    alt: 'Inventory and workflow management platforms',
  },
  {
    id: 5,
    title: 'Education and Learning Management Systems (LMS)',
    description:
      'Facilitate online learning with course management, student tracking, and interactive tools for engaging and scalable educational experiences.',
    icon: '/images/sol2.png',
    alt: 'Education and Learning Management Systems (LMS)',
  },
  {
    id: 6,
    title: 'Custom enterprise software platforms',
    description:
      'Develop tailored software solutions aligned with business needs, enabling scalability, flexibility, and efficient enterprise-wide operations.',
    icon: '/images/sol3.png',
    alt: 'Custom enterprise software platforms',
  },
];

export default function PlatformsWeBuildSection({
  badgeText = 'What We Build',
  title = <>Platforms We <span className="blue-italic-text">Design</span><br />and <span className="blue-italic-text">Deliver</span></>,
  desc = 'We develop platforms designed around how businesses actually operate. Typical platform solutions include:',
  items = defaultPlatformItems,
}) {
  return (
    <section className="platforms-build-wrapper">
      <div className="platforms-build-container">
        {/* Top Header Box (1200 x 148 Hug) */}
        <div className="platforms-header-box">
          {/* Left Title Box */}
          <div className="platforms-header-left">
            <div className="platforms-badge-capsule">
              <span className="badge-bullet"></span>
              <span className="badge-text">{badgeText}</span>
            </div>
            <h2 className="platforms-main-title">
              {title}
            </h2>
          </div>

          {/* Right Description Box */}
          <div className="platforms-header-right">
            <p className="platforms-header-desc">
              {desc}
            </p>
          </div>
        </div>

        {/* 6 Icons Grid Box (1200 x 610) */}
        <div className="platforms-grid-box">
          {items.map((item, index) => (
            <div key={item.id || index} className="platform-card-item">
              <div className="platform-icon-box">
                <Image
                  src={item.icon || '/images/sol1.png'}
                  alt={item.alt || item.title}
                  width={141}
                  height={141}
                  className="platform-icon-img"
                />
              </div>
              <h3 className="platform-card-title">{item.title}</h3>
              <p className="platform-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

