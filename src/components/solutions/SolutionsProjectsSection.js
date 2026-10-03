'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const defaultSolutionsProjects = [
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

export default function SolutionsProjectsSection({
  badgeText = 'Selected Projects',
  title = <>Highlighted Projects Across <span className="blue-italic-text">Enterprise Solutions</span></>,
  subtext = 'As organizations continue to evolve digitally, systems must be secure, reliable, and easy to manage. Heapvue helps businesses build and modernise digital infrastructure that supports growth and operational efficiency.',
  projects = defaultSolutionsProjects,
}) {
  return (
    <section className="solutions-projects-wrapper">
      <div className="solutions-projects-container">
        {/* Top Header Box (1200 x 162 Hug) */}
        <div className="solutions-projects-header">
          {/* Pill Badge */}
          <div className="selected-projects-badge">
            <span className="badge-bullet"></span>
            <span className="badge-text">{badgeText}</span>
          </div>

          {/* Main Title */}
          <h2 className="highlighted-projects-title">
            {title}
          </h2>

          {/* Subtext */}
          <p className="highlighted-projects-subtext">
            {subtext}
          </p>
        </div>

        {/* 3 Cards Block Container (1200 x 430.85 Hug) */}
        <div className="solutions-cards-block">
          {projects.map((project, index) => (
            <div key={project.id || index} className="solutions-card-item">
              <div className="solutions-card-img-box">
                <Image
                  src={project.image || '/images/sol4.png'}
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
                <Link href={project.link || '/contact'} className="solutions-card-link">
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

