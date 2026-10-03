'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const financeProjects = [
  {
    id: 1,
    title: 'Custom CRM Platform for a Financial Services Firm',
    description:
      'A financial services company needed a system to manage leads, track client interactions, create proposals, and maintain records. Heapvue developed a custom CRM platform tailored to their workflow, improving client management and operational efficiency.',
    image: '/images/con1.png',
    link: '/contact',
  },
  {
    id: 2,
    title: 'Secure System Architecture for Data-Driven Applications',
    description:
      'Organisations handling sensitive data require strong infrastructure security and controlled data access. Heapvue implemented secure system architecture to ensure safe data handling, improve system reliability, and support scalable operations.',
    image: '/images/indus10.png',
    link: '/contact',
  },
];

export default function FinanceProjectsSection() {
  return (
    <section className="industry-projects-wrapper">
      <div className="industry-projects-container">
        {/* Header Block */}
        <div className="industry-projects-header">
          <div className="industry-projects-badge">
            <span className="badge-bullet"></span>
            <span className="badge-text">Selected Projects</span>
          </div>
          <h2 className="industry-projects-title">
            Highlighted Projects Across <span className="blue-italic-text">Financial Solutions</span>
          </h2>
          <p className="industry-projects-subtext">
            Financial services organisations require systems that are reliable, structured, and secure. Heapvue helps businesses build and optimise digital platforms that improve client management, streamline operations, and ensure data integrity.
          </p>
        </div>

        {/* 2 Clickable Cards Grid */}
        <div className="industry-projects-grid two-cols">
          {financeProjects.map((project) => (
            <Link key={project.id} href={project.link} className="industry-project-card">
              <div className="industry-project-card-img-wrapper">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={384}
                  height={220}
                  className="industry-project-card-img"
                />
              </div>
              <div className="industry-project-card-body">
                <div>
                  <h3 className="industry-project-card-title">{project.title}</h3>
                  <p className="industry-project-card-desc">{project.description}</p>
                </div>
                <span className="industry-project-card-link">View Project</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
