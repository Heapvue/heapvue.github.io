'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ProjectModal from '@/components/industry/ProjectModal';

const educationProjects = [
  {
    id: 1,
    title:
      'Student Enrolment and Course Management Platform for an EdTech Company',
    description:
      'An edtech company needed a platform to manage student enrolment, course assignments, fee collection, and access control. Heapvue developed a comprehensive system that centralised academic operations and simplified student management.',
    image: '/images/con2.png',
    meta: {
      industry: 'Education & EdTech',
      service: 'Platform Development',
      duration: '6 Months',
    },
    challenge:
      'An edtech company needed a unified platform to manage complex student enrolment, curriculum assignments, automated fee collection, and tiered access control.',
    solution:
      'Heapvue developed a comprehensive, cloud-native portal that centralised academic operations, automated fee processing, and simplified student life-cycle management.',
    impact:
      'Streamlined registration workflows by 80%, reduced administrative overhead, and improved real-time communication between educators and students.',
    metrics: [
      { value: '80%', label: 'Reduction in admin overhead' },
      { value: '15k+', label: 'Active students managed' },
      { value: '3x', label: 'Faster course enrolment' },
    ],
  },
  {
    id: 2,
    title: 'Interactive Learning Module for Special Education',
    description:
      'An organisation required a training tool to help children with special needs learn words and phrases through visual engagement. Heapvue developed an interactive module that uses images and structured exercises to make learning more accessible and engaging.',
    image: '/images/product_learnly.png',
    meta: {
      industry: 'Special Education',
      service: 'E-Learning Software Development',
      duration: '5 Months',
    },
    challenge:
      'Special education instructors struggled with rigid learning tools that lacked adaptive visual engagement tailored for children with neurodivergent needs.',
    solution:
      'Heapvue developed an interactive, sensory-friendly module using intuitive visual cues, progressive speech exercises, and reward-based feedback loops.',
    impact:
      'Significantly enhanced student focus and vocabulary retention, receiving widespread adoption across special education learning centres.',
    metrics: [
      { value: '92%', label: 'Student engagement rate' },
      { value: '4.9★', label: 'Educator satisfaction score' },
      { value: '2x', label: 'Vocabulary retention gain' },
    ],
  },
];

export default function EducationProjectsSection() {
  const [activeModalIndex, setActiveModalIndex] = useState(null);

  const openModal = (index) => {
    setActiveModalIndex(index);
  };

  const closeModal = () => {
    setActiveModalIndex(null);
  };

  const handlePrevModal = () => {
    setActiveModalIndex((prev) =>
      prev === 0 ? educationProjects.length - 1 : prev - 1
    );
  };

  const handleNextModal = () => {
    setActiveModalIndex((prev) =>
      prev === educationProjects.length - 1 ? 0 : prev + 1
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
            <span className="blue-highlight-text">Education Solutions</span>
          </h2>
          <p className="industry-projects-subtext">
            As education continues to evolve digitally, organisations need
            systems that are flexible, scalable, and easy to manage. Heapvue
            helps education providers build digital platforms that streamline
            operations and enhance the overall learning experience.
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
            {educationProjects.map((project, idx) => (
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
            onClick={() => openModal(educationProjects.length - 1)}
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
        projects={educationProjects}
        activeIndex={activeModalIndex}
        onClose={closeModal}
        onPrev={handlePrevModal}
        onNext={handleNextModal}
      />
    </section>
  );
}
