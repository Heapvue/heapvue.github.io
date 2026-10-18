'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ProjectModal from '@/components/industry/ProjectModal';

const financeProjects = [
  {
    id: 1,
    title: 'Custom CRM Platform for a Financial Services Firm',
    description:
      'A financial services company needed a system to manage leads, track client interactions, create proposals, and maintain records. Heapvue developed a custom CRM platform tailored to their workflow, improving client management and operational efficiency.',
    image: '/images/con1.png',
    meta: {
      industry: 'Financial Services',
      service: 'Custom CRM & Workflow Engineering',
      duration: '7 Months',
    },
    challenge:
      'The firm was hindered by scattered spreadsheets and fragmented client records, resulting in lead leakage and slow proposal turnaround times.',
    solution:
      'Heapvue developed a tailored, highly secure CRM platform centralising client pipelines, automated KYC document validation, and proposal generation.',
    impact:
      'Shortened client onboarding cycle by 65%, eliminated lead attribution errors, and empowered financial advisors with real-time portfolio insights.',
    metrics: [
      { value: '65%', label: 'Faster client onboarding' },
      { value: '100%', label: 'Audit compliance score' },
      { value: '4x', label: 'Advisor productivity boost' },
    ],
  },
  {
    id: 2,
    title: 'Secure System Architecture for Data-Driven Applications',
    description:
      'Organisations handling sensitive data require strong infrastructure security and controlled data access. Heapvue implemented secure system architecture to ensure safe data handling, improve system reliability, and support scalable operations.',
    image: '/images/indus10.png',
    meta: {
      industry: 'FinTech & Banking',
      service: 'Cloud Security Architecture',
      duration: '6 Months',
    },
    challenge:
      'High-frequency financial transaction pipelines faced strict latency benchmarks alongside rigorous regulatory compliance against cyber vulnerabilities.',
    solution:
      'Heapvue architected a zero-trust infrastructure with hardware-backed encryption, role-based authorization, and real-time anomaly detection.',
    impact:
      'Delivered sub-millisecond encryption throughput, achieved zero downtime during security audits, and completely secured all financial ledger data.',
    metrics: [
      { value: '99.99%', label: 'Infrastructure availability' },
      { value: '0', label: 'Data vulnerability incidents' },
      { value: '<10ms', label: 'Encrypted query latency' },
    ],
  },
];

export default function FinanceProjectsSection() {
  const [activeModalIndex, setActiveModalIndex] = useState(null);

  const openModal = (index) => {
    setActiveModalIndex(index);
  };

  const closeModal = () => {
    setActiveModalIndex(null);
  };

  const handlePrevModal = () => {
    setActiveModalIndex((prev) =>
      prev === 0 ? financeProjects.length - 1 : prev - 1
    );
  };

  const handleNextModal = () => {
    setActiveModalIndex((prev) =>
      prev === financeProjects.length - 1 ? 0 : prev + 1
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
            <span className="blue-highlight-text">Financial Solutions</span>
          </h2>
          <p className="industry-projects-subtext">
            Financial services organisations require systems that are reliable,
            structured, and secure. Heapvue helps businesses build and optimise
            digital platforms that improve client management, streamline
            operations, and ensure data integrity.
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

          <div className="industry-projects-grid two-cols">
            {financeProjects.map((project, idx) => (
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
            onClick={() => openModal(financeProjects.length - 1)}
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
        projects={financeProjects}
        activeIndex={activeModalIndex}
        onClose={closeModal}
        onPrev={handlePrevModal}
        onNext={handleNextModal}
      />
    </section>
  );
}
