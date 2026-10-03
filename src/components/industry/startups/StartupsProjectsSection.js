'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const startupProjects = [
  {
    id: 1,
    title: 'Multilingual Voice-to-Text Product Platform',
    description:
      'A startup wanted to build a mobile application that converts voice input in one language into text in another language with grammar correction. Heapvue developed a scalable, subscription-based product that enables multilingual communication and can be integrated into other applications.',
    image: '/images/sol9.png',
    link: '/contact',
  },
  {
    id: 2,
    title: 'HealthTech Platform Modernisation and Integration',
    description:
      'A health tech startup operating on a legacy system needed to upgrade its platform for better security, scalability, and integration. Heapvue redesigned the architecture and implemented a modern system that supports seamless data flow and future growth.',
    image: '/images/indus13.png',
    link: '/contact',
  },
  {
    id: 3,
    title: 'Lifestyle Coaching Mobile Application',
    description:
      'A lifestyle coaching startup required a mobile app to deliver diet plans, exercise routines, reminders, and educational content. Heapvue built a user-friendly platform that supports structured guidance and ongoing user engagement.',
    image: '/images/twoguys.png',
    link: '/contact',
  },
];

export default function StartupsProjectsSection() {
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
            Highlighted Projects Across <span className="blue-italic-text">Startup Solutions</span>
          </h2>
          <p className="industry-projects-subtext">
            Startups need technology partners who can move quickly while building for the future. Heapvue helps startups turn ideas into scalable products, build reliable systems, and create a strong technical foundation for growth.
          </p>
        </div>

        {/* 3 Clickable Cards Grid */}
        <div className="industry-projects-grid">
          {startupProjects.map((project) => (
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
