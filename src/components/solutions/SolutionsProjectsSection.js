'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ProjectModal from '@/components/industry/ProjectModal';

const defaultSolutionsProjects = [
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

export default function SolutionsProjectsSection({
  badgeText = 'Selected Projects',
  title = <>Highlighted Projects Across <span className="blue-italic-text">Healthcare Solutions</span></>,
  subtext = 'As healthcare continues to evolve digitally, organisations require systems that are secure, reliable, and easy to manage. Heapvue helps healthcare providers build and modernise digital infrastructure that supports better patient care, efficient operations, and long-term scalability.',
  projects = defaultSolutionsProjects,
}) {
  const [activeModalIndex, setActiveModalIndex] = useState(null);

  const openModal = (index) => {
    setActiveModalIndex(index);
  };

  const closeModal = () => {
    setActiveModalIndex(null);
  };

  const handlePrevModal = () => {
    setActiveModalIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const handleNextModal = () => {
    setActiveModalIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="solutions-projects-wrapper">
      <div className="solutions-projects-container">
        {/* Top Header Box */}
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

        {/* 3 Cards Block Container */}
        <div className="solutions-cards-block">
          {projects.map((project, idx) => (
            <div
              key={project.id || idx}
              className="solutions-card-item"
              onClick={() => openModal(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') openModal(idx);
              }}
            >
              <div className="solutions-card-img-box">
                <Image
                  src={project.image || '/images/induspatient.png'}
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
                <span
                  className="solutions-card-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(idx);
                  }}
                >
                  View Project
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reusable Project Modal from Industries */}
      <ProjectModal
        isOpen={activeModalIndex !== null}
        projects={projects}
        activeIndex={activeModalIndex}
        onClose={closeModal}
        onPrev={handlePrevModal}
        onNext={handleNextModal}
      />
    </section>
  );
}

