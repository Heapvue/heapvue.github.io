'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const healthcareProjects = [
  {
    id: 1,
    title: 'Patient Engagement Mobile App for a Hospital Chain',
    description:
      'A leading hospital chain wanted a mobile application that allowed patients to manage appointments, follow-ups, and consultations from their smartphones. Heapvue developed a mobile platform that simplified patient interactions and improved access to healthcare services.',
    image: '/images/indus12.png',
    link: '/contact',
  },
  {
    id: 2,
    title: 'HealthTech Platform Modernisation',
    description:
      'A healthcare startup operating on a legacy system needed to upgrade its technology stack and integrate with multiple platforms while improving security. Heapvue modernised the system architecture, enabling secure data flow and better scalability.',
    image: '/images/indus13.png',
    link: '/contact',
  },
  {
    id: 3,
    title: 'Infrastructure Security for a Healthcare Platform',
    description:
      'A healthcare technology platform faced multiple cyber threats including brute-force attacks and SQL injection attempts. Heapvue strengthened the system infrastructure and implemented security measures that improved protection against vulnerabilities.',
    image: '/images/indus14.png',
    link: '/contact',
  },
];

export default function HealthcareProjectsSection() {
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
            Highlighted Projects Across <span className="blue-italic-text">Healthcare Solutions</span>
          </h2>
          <p className="industry-projects-subtext">
            As healthcare continues to evolve digitally, organisations require systems that are secure, reliable, and easy to manage. Heapvue helps healthcare providers build and modernise digital infrastructure that supports better patient care, efficient operations, and long-term scalability.
          </p>
        </div>

        {/* 3 Clickable Cards Grid */}
        <div className="industry-projects-grid">
          {healthcareProjects.map((project) => (
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
