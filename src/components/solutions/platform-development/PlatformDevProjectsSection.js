'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const solutionsProjects = [
  {
    id: 1,
    title: 'Custom CRM Platform for a Financial Services Firm',
    description:
      'A financial firm needed lead and client management. We built a CRM that streamlined workflows and improved tracking.',
    image: '/images/sol4.png',
    link: '/contact',
  },
  {
    id: 2,
    title: 'EdTech Student Enrolment and Course Platform',
    description:
      'An edtech company needed enrolment & course management. We delivered a system that centralised operations & simplified administration.',
    image: '/images/sol4.png',
    link: '/contact',
  },
  {
    id: 3,
    title: 'Retail Inventory & Staff Management Platform',
    description:
      'A retail chain needed inventory and staff coordination. We built a platform enabling real-time tracking and task management.',
    image: '/images/sol4.png',
    link: '/contact',
  },
];

export default function PlatformDevProjectsSection() {
  return (
    <section className="solutions-projects-wrapper">
      <div className="solutions-projects-container">
        <div className="solutions-projects-header">
          <div className="selected-projects-badge">
            <span className="badge-bullet"></span>
            <span className="badge-text">Selected Projects</span>
          </div>

          <h2 className="highlighted-projects-title">
            Highlighted Projects Across <span className="blue-italic-text">Enterprise Platforms</span>
          </h2>

          <p className="highlighted-projects-subtext">
            Organisations require digital platforms that are secure, reliable, and easy to scale. Heapvue helps enterprises engineer multi-tenant systems, operational dashboards, and high-performance digital infrastructure.
          </p>
        </div>

        <div className="solutions-cards-block">
          {solutionsProjects.map((project) => (
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
