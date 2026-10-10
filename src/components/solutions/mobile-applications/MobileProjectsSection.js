'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const mobileProjects = [
  {
    id: 1,
    title: 'Patient Engagement App for a Hospital Chain',
    description:
      'A leading hospital chain wanted a mobile application that would allow patients to schedule appointments, manage follow-ups, access doctor recommendations, and conduct online consultations. Heapvue developed a mobile platform that simplified patient interactions and improved access to healthcare services.',
    image: '/images/sol1.png',
    link: '/contact',
  },
  {
    id: 2,
    title: 'Lifestyle Coaching and Wellness Mobile App',
    description:
      'A lifestyle coaching company required a mobile application to deliver diet plans, exercise routines, reminders, and educational content to its users. Heapvue built an app that allowed users to access personalised guidance and helpful resources to support healthier lifestyle habits.',
    image: '/images/sol5.png',
    link: '/contact',
  },
  {
    id: 3,
    title: 'Multilingual Voice-to-Text Mobile Client Application',
    description:
      'Engineered an iOS and Android client application with low-latency audio capture, offline buffer synchronization, and real-time transcription display connecting to cloud speech translation pipelines.',
    image: '/images/sol6.png',
    link: '/contact',
  },
];

export default function MobileProjectsSection() {
  return (
    <section className="solutions-projects-wrapper">
      <div className="solutions-projects-container">
        {/* Top Header Box */}
        <div className="solutions-projects-header">
          {/* Pill Badge */}
          <div className="selected-projects-badge">
            <span className="badge-bullet"></span>
            <span className="badge-text">Selected Projects</span>
          </div>

          {/* Main Title */}
          <h2 className="highlighted-projects-title">
            Highlighted Projects in <span className="blue-italic-text">Mobile Applications</span>
          </h2>

          {/* Subtext */}
          <p className="highlighted-projects-subtext">
            Discover how Heapvue builds mobile platforms for healthcare patient engagement, lifestyle coaching, and multilingual voice processing.
          </p>
        </div>

        {/* 3 Cards Block Container */}
        <div className="solutions-cards-block">
          {mobileProjects.map((project) => (
            <div key={project.id} className="solutions-card-item">
              <div className="solutions-card-img-box">
                <Image
                  src={project.image}
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
                <Link href={project.link} className="solutions-card-link">
                  Discuss similar project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
