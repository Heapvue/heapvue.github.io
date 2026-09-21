'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'Patient Engagement Mobile App for a Hospital Chain',
    description:
      'A hospital chain needed a mobile app for managing appointments and consultations.',
    image: '/images/indus12.png',
    link: '/contact',
  },
  {
    id: 2,
    title: 'HealthTech Platform Modernisation',
    description:
      'Heapvue modernised the architecture, ensuring secure data flow, enhanced performance, and greater scalability.',
    image: '/images/indus13.png',
    link: '/contact',
  },
  {
    id: 3,
    title: 'Infrastructure Security for a Healthcare Platform',
    description:
      'A healthcare platform faced critical cybersecurity threats, including brute-force attacks and SQL injection attempts.',
    image: '/images/indus14.png',
    link: '/contact',
  },
];

export default function HealthcareProjectsGridSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="projects-grid-wrapper">
      <div className="projects-grid-outer">
        {/* Left Nav Arrow Button */}
        <button
          className="projects-nav-btn prev-btn"
          onClick={handlePrev}
          aria-label="Previous project"
        >
          <FiArrowLeft size={16} />
        </button>

        {/* Main Grid Container (1199.84 x 502 Hug) */}
        <div className="projects-grid-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card-item">
              <div className="project-card-image-wrapper">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={384}
                  height={335}
                  className="project-card-img"
                  priority
                />
              </div>
              <div className="project-card-body">
                <div>
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.description}</p>
                </div>
                <Link href={project.link} className="project-card-link">
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Right Nav Arrow Button */}
        <button
          className="projects-nav-btn next-btn"
          onClick={handleNext}
          aria-label="Next project"
        >
          <FiArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
