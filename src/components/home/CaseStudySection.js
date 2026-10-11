'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const caseStudies = [
  {
    id: 1,
    title: 'Helping Bonnacci Users Communicate More Naturally',
    titleLine1: 'Helping Bonnacci Users',
    titleLine2: 'Communicate More Naturally',
    description: 'Heapvue partnered with Bonnacci to build an AI-powered communication platform that helps users improve writing accuracy and interact naturally through intelligent language assistance.',
    tags: ['UI/UX Design', 'AI & Machine Learning', 'Cloud Computing', 'Software Development', 'Content Writing'],
    image: '/images/bonacci_person.png',
    bgImage: '/images/bonacci_bg.png',
    ctaText: 'Read Full Story',
    ctaLink: '/contact',
  },
  {
    id: 2,
    title: 'AI-Powered Digital Health & Telehealth Platform',
    titleLine1: 'AI-Powered Digital Health &',
    titleLine2: 'Telehealth Platform',
    description: 'Engineered a HIPAA-compliant real-time patient engagement architecture, eliminating downtime and scaling clinical telemedicine across healthcare networks.',
    tags: ['Healthcare IT', 'Zero Trust Security', 'Cloud Infrastructure', 'API Modernization', 'Compliance'],
    image: '/images/casestudy_flower.png',
    bgImage: '/images/casestudy_bg_pink.png',
    ctaText: 'Read Full Story',
    ctaLink: '/contact',
  },
  {
    id: 3,
    title: 'Headless Commerce Scaling for Enterprise Brands',
    titleLine1: 'Headless Commerce Scaling',
    titleLine2: 'for Enterprise Brands',
    description: 'Transformed a legacy monolithic shopping platform into a high-speed modular architecture, reducing catalog loading latency to sub-second thresholds.',
    tags: ['Headless E-Commerce', 'Node.js Microservices', 'High-Availability', 'DevOps Automation', 'Scalability'],
    image: '/images/twoguys.png',
    bgImage: '/images/casestudy_bg_blue.png',
    ctaText: 'Read Full Story',
    ctaLink: '/contact',
  },
];

export default function CaseStudySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCase = () => {
    setCurrentIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const nextCase = () => {
    setCurrentIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="casestudy-section-wrapper">
      <div className="casestudy-container">
        {/* Top Header Area */}
        <div className="casestudy-header">
          <div className="casestudy-badge-capsule">
            <span className="badge-bullet">▪</span>
            <span className="badge-text">Our Case Study</span>
          </div>

          <h2 className="casestudy-title">
            Real Business <span className="highlight-text">Problems.</span> Smart
            <br className="desktop-break" />
            Technology <span className="highlight-text">Solutions.</span>
          </h2>

          <p className="casestudy-subtext">
            Explore how Heapvue helps businesses transform operations, automate workflows, and build scalable
            digital products through AI, cloud technologies, and modern engineering solutions.
          </p>
        </div>

        {/* Carousel Viewport with Peeking Next Card */}
        <div className="casestudy-carousel-viewport">
          <div
            className="casestudy-carousel-track"
            style={{
              transform: `translateX(calc(-${currentIndex} * (var(--cs-card-w, 1200px) + 24px)))`,
            }}
          >
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="casestudy-card"
                style={{ backgroundImage: `url(${study.bgImage})` }}
              >
                {/* Left Column: Image with "Listening..." float */}
                <div className="casestudy-card-media">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="casestudy-card-person-img"
                  />
                </div>

                {/* Right Column: Content */}
                <div className="casestudy-card-content">
                  <div className="casestudy-card-top-info">
                    <h3 className="casestudy-card-heading">
                      {study.titleLine1}
                      <br />
                      {study.titleLine2}
                    </h3>
                    <p className="casestudy-card-description">
                      {study.description}
                    </p>
                  </div>

                  <div className="casestudy-card-bottom-info">
                    <div className="casestudy-card-tags">
                      {study.tags.map((tag, idx) => (
                        <span key={idx} className="casestudy-tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="casestudy-card-action">
                      <Link href={study.ctaLink} className="casestudy-read-btn">
                        <span>{study.ctaText}</span> <FiArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="casestudy-nav-buttons">
          <button
            type="button"
            onClick={prevCase}
            className="casestudy-nav-btn prev-btn"
            aria-label="Previous case study"
          >
            <FiArrowLeft size={18} />
          </button>
          <button
            type="button"
            onClick={nextCase}
            className="casestudy-nav-btn next-btn"
            aria-label="Next case study"
          >
            <FiArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
