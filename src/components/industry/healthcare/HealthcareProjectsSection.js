'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ProjectModal from '@/components/industry/ProjectModal';

const healthcareProjects = [
  {
    id: 1,
    title: 'Custom CRM Platform for a Financial Services Firm',
    description:
      'A financial firm needed lead and client management. We built a CRM that streamlined workflows and improved tracking.',
    image: '/images/induspatient.png',
    meta: {
      industry: 'Financial Services',
      service: 'Custom Platform Development',
      duration: '5 Months',
    },
    challenge:
      'The client was losing high-value prospects due to disconnected communication channels, manual data entry in legacy spreadsheets, and lack of real-time client interaction tracking.',
    solution:
      'Heapvue engineered a custom multi-tenant CRM platform with automated lead routing, pipeline analytics, secure document portals, and end-to-end audit trails.',
    impact:
      'Eliminated manual tracking overhead, boosted lead conversion velocity, and empowered relationship managers with a single source of client truth.',
    metrics: [
      { value: '45%', label: 'Increase in lead conversion' },
      { value: '60%', label: 'Reduction in manual reporting' },
      { value: '99.9%', label: 'Platform availability' },
    ],
  },
  {
    id: 2,
    title: 'EdTech Student Enrolment and Course Platform',
    description:
      'An edtech company needed enrolment & course management. We delivered a system that centralised operations & simplified administration.',
    image: '/images/induspatient.png',
    meta: {
      industry: 'EdTech & Learning',
      service: 'Web & Platform Development',
      duration: '4 Months',
    },
    challenge:
      'A rapidly expanding EdTech provider struggled with fragmented student registrations, disconnected course payment gateways, and recurring system downtime during peak enrolment seasons.',
    solution:
      'We designed and deployed a unified, cloud-scalable student lifecycle platform featuring automated verification, localized billing gateways, and an interactive student portal.',
    impact:
      'Streamlined admissions, provided zero downtime during high-traffic enrolment spikes, and significantly lowered administrative overhead.',
    metrics: [
      { value: '80%', label: 'Faster application processing' },
      { value: '3x', label: 'Concurrent user capacity' },
      { value: '50%', label: 'Drop in admin overhead' },
    ],
  },
  {
    id: 3,
    title: 'Retail Inventory & Staff Management Platform',
    description:
      'A retail chain needed inventory and staff coordination. We built a platform enabling real-time tracking and task management.',
    image: '/images/induspatient.png',
    meta: {
      industry: 'Retail & Commerce',
      service: 'Platform & Operations',
      duration: '6 Months',
    },
    challenge:
      'Multi-outlet retail chains faced recurrent stock discrepancies, delayed supply-chain replenishments, and lack of shift accountability across store locations.',
    solution:
      'Heapvue developed a centralized cloud platform integrating POS data, barcode tracking, dynamic stock replenishment triggers, and an automated staff shift management console.',
    impact:
      'Achieved near-zero stockout events, streamlined nationwide workforce scheduling, and provided executive management with instant store-by-store sales analytics.',
    metrics: [
      { value: '35%', label: 'Reduction in holding costs' },
      { value: '99.5%', label: 'Inventory tracking accuracy' },
      { value: '4x', label: 'Faster stock audit cycles' },
    ],
  },
];

export default function HealthcareProjectsSection() {
  const [activeModalIndex, setActiveModalIndex] = useState(null);

  const openModal = (index) => {
    setActiveModalIndex(index);
  };

  const closeModal = () => {
    setActiveModalIndex(null);
  };

  const handlePrevModal = () => {
    setActiveModalIndex((prev) =>
      prev === 0 ? healthcareProjects.length - 1 : prev - 1
    );
  };

  const handleNextModal = () => {
    setActiveModalIndex((prev) =>
      prev === healthcareProjects.length - 1 ? 0 : prev + 1
    );
  };

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
            Highlighted Projects Across{' '}
            <span className="blue-highlight-text">Healthcare Solutions</span>
          </h2>
          <p className="industry-projects-subtext">
            As healthcare continues to evolve digitally, organisations require
            systems that are secure, reliable, and easy to manage. Heapvue helps
            healthcare providers build and modernise digital infrastructure that
            supports better patient care, efficient operations, and long-term
            scalability.
          </p>
        </div>

        {/* Carousel & Cards Layout with side navigation arrows */}
        <div className="industry-projects-carousel-outer">
          <button
            type="button"
            className="projects-slider-btn prev-btn"
            onClick={() => openModal(0)}
            aria-label="Previous Projects"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>

          <div className="industry-projects-grid">
            {healthcareProjects.map((project, idx) => (
              <div
                key={project.id}
                className="industry-project-card"
                onClick={() => openModal(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') openModal(idx);
                }}
              >
                <div className="industry-project-card-img-wrapper">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={384}
                    height={235}
                    className="industry-project-card-img"
                  />
                </div>
                <div className="industry-project-card-body">
                  <div className="industry-project-card-text-block">
                    <h3 className="industry-project-card-title">
                      {project.title}
                    </h3>
                    <p className="industry-project-card-desc">
                      {project.description}
                    </p>
                  </div>
                  <span className="industry-project-card-link">
                    View Project
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="projects-slider-btn next-btn"
            onClick={() => openModal(healthcareProjects.length - 1)}
            aria-label="Next Projects"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Project Details Modal Popup */}
      <ProjectModal
        isOpen={activeModalIndex !== null}
        projects={healthcareProjects}
        activeIndex={activeModalIndex}
        onClose={closeModal}
        onPrev={handlePrevModal}
        onNext={handleNextModal}
      />
    </section>
  );
}
