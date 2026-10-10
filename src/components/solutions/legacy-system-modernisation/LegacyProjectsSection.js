'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const legacyProjects = [
  {
    id: 1,
    title: 'HealthTech Platform Migration and Modernisation',
    description:
      'A health tech company was operating on a legacy PHP monolithic system that posed security risks and made third-party API integration difficult. Heapvue migrated the platform to a modern containerized stack, improving security and enabling real-time data exchange.',
    image: '/images/sol5.png',
    link: '/contact',
  },
  {
    id: 2,
    title: 'Enterprise ERP & Order Engine Modernisation',
    description:
      'An established retail distributor faced system bottlenecks during peak sales due to legacy database locks. Heapvue decoupled the order processing pipeline into an asynchronous event-driven service, increasing transaction throughput by 4x.',
    image: '/images/sol6.png',
    link: '/contact',
  },
  {
    id: 3,
    title: 'Database Cloud Migration & Infrastructure Modernisation',
    description:
      'Migrated complex on-premise relational database clusters to secure cloud-managed database instances with zero data loss, implementing automated automated failover and automated backups.',
    image: '/images/sol7.png',
    link: '/contact',
  },
];

export default function LegacyProjectsSection() {
  return (
    <section className="solutions-projects-wrapper">
      <div className="solutions-projects-container">
        {/* Top Header Box */}
        <div className="solutions-projects-header">
          {/* Pill Badge */}
          <div className="selected-projects-badge">
            <span className="badge-bullet"></span>
            <span className="badge-text">Selected Projects</span>
          </div>

          {/* Main Title */}
          <h2 className="highlighted-projects-title">
            Highlighted Projects in <span className="blue-italic-text">Legacy Modernisation</span>
          </h2>

          {/* Subtext */}
          <p className="highlighted-projects-subtext">
            Discover how Heapvue helps organisations upgrade aging systems, eliminate technical debt, and establish resilient cloud foundations.
          </p>
        </div>

        {/* 3 Cards Block Container */}
        <div className="solutions-cards-block">
          {legacyProjects.map((project) => (
            <div key={project.id} className="solutions-card-item">
              <div className="solutions-card-img-box">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={385}
                  height={220}
                  className="solutions-card-img"
                  priority
                />
              </div>
              <div className="solutions-card-body">
                <div>
                  <h3 className="solutions-card-title">{project.title}</h3>
                  <p className="solutions-card-desc">{project.description}</p>
                </div>
                <Link href={project.link} className="solutions-card-link">
                  Discuss similar project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
