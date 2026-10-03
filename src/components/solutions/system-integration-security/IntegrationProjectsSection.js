'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const integrationProjects = [
  {
    id: 1,
    title: 'Secure Infrastructure for a Healthcare Technology Platform',
    description:
      'A healthcare company faced repeated brute-force attacks, SQL injection attempts, and other security vulnerabilities that threatened sensitive patient data. Heapvue implemented a secure network architecture and strengthened system protections, significantly improving infrastructure security.',
    image: '/images/sol4.png',
    link: '/contact',
  },
  {
    id: 2,
    title: 'Integrated Data Systems for a HealthTech Startup',
    description:
      'A health tech startup required multiple systems to communicate seamlessly while maintaining strong data protection. Heapvue designed integrations between their applications and implemented a modern architecture that enabled secure and efficient data flow across platforms.',
    image: '/images/sol4.png',
    link: '/contact',
  },
  {
    id: 3,
    title: 'Secure System Architecture for Scalable Applications',
    description:
      'Organisations operating complex digital platforms often require secure system architecture that supports both integration and protection. Heapvue implemented secure infrastructure solutions that enabled safe communication between services while strengthening overall platform security.',
    image: '/images/sol4.png',
    link: '/contact',
  },
];

export default function IntegrationProjectsSection() {
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
            Highlighted Projects in <span className="blue-italic-text">System Integration & Security</span>
          </h2>

          {/* Subtext */}
          <p className="highlighted-projects-subtext">
            Discover how Heapvue protects sensitive patient records, unifies data systems for healthtech startups, and secures scalable system architectures.
          </p>
        </div>

        {/* 3 Cards Block Container */}
        <div className="solutions-cards-block">
          {integrationProjects.map((project) => (
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
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
