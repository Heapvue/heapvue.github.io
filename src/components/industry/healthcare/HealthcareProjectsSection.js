'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ProjectModal from '@/components/industry/ProjectModal';

const healthcareProjects = [
  {
    id: 1,
    title: 'Patient Engagement Mobile App for a Hospital Chain',
    description:
      'A hospital chain needed a mobile app for managing appointments and consultations.',
    image: '/images/indus12.png',
    meta: {
      industry: 'Healthcare',
      service: 'Mobile Application Development',
      duration: '6 Months',
    },
    challenge:
      'The hospital chain needed a user-friendly mobile app to streamline appointment scheduling and virtual consultations across multiple locations.',
    solution:
      'We developed a secure, scalable mobile app for booking, video consultations, prescriptions, and real-time notifications.',
    impact:
      'Improved patient engagement, reduced no-shows, and more efficient consultation workflows across the hospital network.',
    metrics: [
      { value: '40%', label: 'Reduction in no-show rates' },
      { value: '60%', label: 'Increase in patient engagement' },
      { value: '3x', label: 'Faster appointment scheduling' },
    ],
  },
  {
    id: 2,
    title: 'HealthTech Platform Modernisation',
    description:
      'Heapvue modernised the architecture, ensuring secure data flow, enhanced performance, and greater scalability.',
    image: '/images/indus13.png',
    meta: {
      industry: 'Healthcare',
      service: 'Legacy System Modernisation',
      duration: '8 Months',
    },
    challenge:
      'A healthcare startup operating on an outdated legacy monolith struggled with severe latency, integration barriers, and escalating maintenance overhead.',
    solution:
      'Heapvue decoupled the system into resilient microservices, optimized database queries, and implemented modern REST/FHIR APIs for real-time interoperability.',
    impact:
      'Achieved 99.99% system availability, reduced server response times drastically, and enabled friction-free integrations with partner health systems.',
    metrics: [
      { value: '75%', label: 'Faster data processing speed' },
      { value: '99.9%', label: 'System uptime and stability' },
      { value: '4x', label: 'Platform scalability growth' },
    ],
  },
  {
    id: 3,
    title: 'Infrastructure Security for a Healthcare Platform',
    description:
      'A healthcare platform faced critical cybersecurity threats, including brute-force attacks and SQL injection attempts.',
    image: '/images/indus14.png',
    meta: {
      industry: 'Healthcare',
      service: 'System Integration & Security',
      duration: '4 Months',
    },
    challenge:
      'The platform experienced unauthorized access attempts, data vulnerability risks, and compliance hurdles against strict HIPAA data privacy regulations.',
    solution:
      'We implemented comprehensive zero-trust network architecture, multi-factor authentication, end-to-end encryption, and automated intrusion detection.',
    impact:
      'Zero security breaches post-deployment, full regulatory compliance certification, and hardened defenses against continuous threat vectors.',
    metrics: [
      { value: '100%', label: 'HIPAA compliance achieved' },
      { value: '0', label: 'Security breaches recorded' },
      { value: '90%', label: 'Reduction in vulnerability risks' },
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
