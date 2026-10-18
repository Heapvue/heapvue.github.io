'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ProjectModal from '@/components/industry/ProjectModal';

const startupProjects = [
  {
    id: 1,
    title: 'Multilingual Voice-to-Text Product Platform',
    description:
      'A startup wanted to build a mobile application that converts voice input in one language into text in another language with grammar correction. Heapvue developed a scalable, subscription-based product that enables multilingual communication and can be integrated into other applications.',
    image: '/images/sol9.png',
    meta: {
      industry: 'AI & SaaS Startups',
      service: 'AI Product Engineering',
      duration: '4 Months',
    },
    challenge:
      'The startup needed to rapidly build an MVP capable of low-latency speech recognition, multi-language translation, and grammatical polishing.',
    solution:
      'Heapvue developed a high-performance audio processing pipeline integrating whisper AI models, real-time WebSockets, and subscription billing.',
    impact:
      'Launched MVP 3 weeks ahead of schedule, onboarded 50,000+ beta users in month one, and helped client close seed funding.',
    metrics: [
      { value: '50k+', label: 'Beta users onboarded' },
      { value: '<500ms', label: 'Audio translation latency' },
      { value: '98%', label: 'Transcription accuracy' },
    ],
  },
  {
    id: 2,
    title: 'HealthTech Platform Modernisation and Integration',
    description:
      'A health tech startup operating on a legacy system needed to upgrade its platform for better security, scalability, and integration. Heapvue redesigned the architecture and implemented a modern system that supports seamless data flow and future growth.',
    image: '/images/indus13.png',
    meta: {
      industry: 'HealthTech Startups',
      service: 'Platform Architecture & API Design',
      duration: '6 Months',
    },
    challenge:
      'Rapid user growth overwhelmed the early-stage monolith, threatening compliance standards and third-party integrations.',
    solution:
      'Heapvue restructured the backend into event-driven microservices, established HIPAA-compliant data pipelines, and engineered developer-friendly APIs.',
    impact:
      'Supported 5x user volume growth with zero degradation in system stability and accelerated partner onboarding by 4x.',
    metrics: [
      { value: '5x', label: 'User volume scaling' },
      { value: '99.95%', label: 'Platform uptime' },
      { value: '4x', label: 'Faster API partner setup' },
    ],
  },
  {
    id: 3,
    title: 'Lifestyle Coaching Mobile Application',
    description:
      'A lifestyle coaching startup required a mobile app to deliver diet plans, exercise routines, reminders, and educational content. Heapvue built a user-friendly platform that supports structured guidance and ongoing user engagement.',
    image: '/images/twoguys.png',
    meta: {
      industry: 'Wellness & Mobile Consumer',
      service: 'Cross-Platform Mobile App (React Native)',
      duration: '5 Months',
    },
    challenge:
      'The client required an intuitive mobile app that could keep users engaged daily with customized fitness schedules, habit tracking, and push notifications.',
    solution:
      'Heapvue delivered a performant iOS and Android app featuring personalized routine calendars, offline video playback, and in-app coach messaging.',
    impact:
      'Drove an 88% 30-day user retention rate, 4.8-star app store rating, and established a steady recurring subscription revenue stream.',
    metrics: [
      { value: '88%', label: '30-day user retention rate' },
      { value: '4.8★', label: 'App store user rating' },
      { value: '3.5x', label: 'Growth in active daily users' },
    ],
  },
];

export default function StartupsProjectsSection() {
  const [activeModalIndex, setActiveModalIndex] = useState(null);

  const openModal = (index) => {
    setActiveModalIndex(index);
  };

  const closeModal = () => {
    setActiveModalIndex(null);
  };

  const handlePrevModal = () => {
    setActiveModalIndex((prev) =>
      prev === 0 ? startupProjects.length - 1 : prev - 1
    );
  };

  const handleNextModal = () => {
    setActiveModalIndex((prev) =>
      prev === startupProjects.length - 1 ? 0 : prev + 1
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
            <span className="blue-highlight-text">Startup Solutions</span>
          </h2>
          <p className="industry-projects-subtext">
            Startups need technology partners who can move quickly while
            building for the future. Heapvue helps startups turn ideas into
            scalable products, build reliable systems, and create a strong
            technical foundation for growth.
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
            {startupProjects.map((project, idx) => (
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
            onClick={() => openModal(startupProjects.length - 1)}
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
        projects={startupProjects}
        activeIndex={activeModalIndex}
        onClose={closeModal}
        onPrev={handlePrevModal}
        onNext={handleNextModal}
      />
    </section>
  );
}
