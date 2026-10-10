'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const integrationProjects = [
  {
    id: 1,
    title: 'Zero-Trust Infrastructure for a Healthcare Technology Platform',
    description:
      'A healthcare platform faced repeated brute-force attacks and SQL injection attempts threatening sensitive patient data. Heapvue deployed zero-trust network architecture, web application firewalls (WAF), and automated intrusion prevention, hardening the environment against malicious traffic.',
    image: '/images/sol7.png',
    link: '/contact',
  },
  {
    id: 2,
    title: 'Enterprise API Gateway & Multi-System Data Integration',
    description:
      'A multi-subsidiary enterprise required disparate ERP, CRM, and accounting systems to synchronize bi-directionally. Heapvue engineered a resilient API gateway with rate-limiting, event queues, and automated schema reconciliation.',
    image: '/images/sol8.png',
    link: '/contact',
  },
  {
    id: 3,
    title: 'Cloud SIEM Telemetry & Automated Threat Monitoring',
    description:
      'Implemented centralized audit telemetry connecting AWS CloudTrail, Microsoft Sentinel, and Datadog to provide real-time visibility and automated anomaly alerts for a high-concurrency fintech environment.',
    image: '/images/sol9.png',
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
            Highlighted Projects in <span className="blue-italic-text">System Integration &amp; Security</span>
          </h2>

          {/* Subtext */}
          <p className="highlighted-projects-subtext">
            Discover how Heapvue protects sensitive enterprise data, unifies middleware pipelines, and hardens cloud architecture.
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
