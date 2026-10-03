'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const legacyProjects = [
  {
    id: 1,
    title: 'HealthTech Platform Migration and Modernisation',
    description:
      'A health tech startup was operating on a legacy PHP Laravel system that posed security risks and made integration with other platforms difficult. Heapvue migrated the platform to a modern technology stack and integrated multiple systems, improving security and enabling seamless data exchange.',
    image: '/images/sol4.png',
    link: '/contact',
  },
  {
    id: 2,
    title: 'E-commerce Platform Migration for an FMCG Company',
    description:
      'An FMCG company faced frequent disruptions due to WooCommerce plugin conflicts and platform instability. Heapvue developed a custom Node.js platform tailored to their operational needs, providing greater stability, scalability, and long-term maintainability.',
    image: '/images/sol4.png',
    link: '/contact',
  },
  {
    id: 3,
    title: 'Security Hardening for a Healthcare Technology Platform',
    description:
      'A healthcare company faced multiple security threats, including brute-force attacks and SQL injection attempts. Heapvue strengthened their infrastructure using secure network architecture and implemented enhanced security measures to protect sensitive data and prevent system vulnerabilities.',
    image: '/images/sol4.png',
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
            Discover how Heapvue helps organisations upgrade their legacy systems, overcome security vulnerabilities, and establish resilient digital platforms.
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
