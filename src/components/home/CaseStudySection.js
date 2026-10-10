'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const caseStudies = [
  {
    id: 1,
    tag: 'AI Engineering & Speech NLP',
    title: 'Multilingual Voice-to-Text Platform Architecture',
    subtitle: 'Helping Global Users Communicate More Naturally',
    description: 'Developed an intelligent voice-processing architecture capable of capturing audio in one language, running neural translation models, correcting grammar in real time, and delivering low-latency output across multiple target languages.',
    results: [
      'Sub-200ms audio transcription & translation latency',
      'Automated neural grammar correction and text formatting',
      'High-throughput cloud backend designed for rapid scale',
    ],
    ctaText: 'Discuss Similar Project',
    ctaLink: '/contact',
    accentBg: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #0f172a 100%)',
  },
  {
    id: 2,
    tag: 'Cloud & System Security',
    title: 'Healthcare Infrastructure & Zero-Trust Hardening',
    subtitle: 'Protecting Sensitive Patient Data Under Regulatory Scrutiny',
    description: 'Designed and deployed network architecture safeguards to mitigate brute-force attempts and SQL injection vulnerabilities for an established healthcare platform, ensuring HIPAA and DPDP compliance.',
    results: [
      'Zero unauthorized intrusions post-hardening',
      'Automated encrypted audit trails and secret rotation',
      'Comprehensive DPDP and HIPAA regulatory alignment',
    ],
    ctaText: 'Discuss Similar Project',
    ctaLink: '/contact',
    accentBg: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #0284c7 100%)',
  },
  {
    id: 3,
    tag: 'E-commerce & Platform Architecture',
    title: 'Enterprise Headless Commerce Migration',
    subtitle: 'Stabilizing High-Volume Consumer Goods Sales',
    description: 'Re-architected an unstable monolithic WooCommerce setup into a high-performance headless Node.js commerce platform, eliminating plugin conflict downtime and providing seamless checkout performance during peak sales events.',
    results: [
      '99.98% platform uptime during high-volume promotions',
      '3.2x faster checkout and catalog browsing speeds',
      'Scalable microservices ready for multi-region expansion',
    ],
    ctaText: 'Discuss Similar Project',
    ctaLink: '/contact',
    accentBg: 'linear-gradient(135deg, #312e81 0%, #4338ca 60%, #1e1b4b 100%)',
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

  const current = caseStudies[currentIndex];

  return (
    <section className="casestudy-section-wrapper">
      <div className="casestudy-container">
        {/* Top Header Area */}
        <div className="casestudy-header">
          <div className="casestudy-badge-capsule">
            <span className="badge-bullet"></span>
            <span className="badge-text">Featured Work</span>
          </div>

          <h2 className="casestudy-title">
            Real Business <span className="highlight-text">Problems</span>. Smart Technology <span className="highlight-text">Solutions</span>.
          </h2>

          <p className="casestudy-subtext">
            Explore how Heapvue engineers custom digital infrastructure, AI systems, and modern digital platforms that transform operational efficiency.
          </p>
        </div>

        {/* Live HTML Banner (replaces the image-only banner with drawn button) */}
        <div 
          className="casestudy-card-wrapper p-4 p-md-5 d-flex flex-column justify-content-between position-relative overflow-hidden text-white"
          style={{
            background: current.accentBg,
            minHeight: '440px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            boxShadow: '0 16px 40px -10px rgba(0, 0, 0, 0.25)',
          }}
        >
          {/* Top Pill & Title */}
          <div>
            <div className="d-inline-flex align-items-center px-3 py-1 rounded-pill mb-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.04em' }}>
              {current.tag}
            </div>
            <h3 className="fw-bold mb-2 text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', lineHeight: 1.25 }}>
              {current.title}
            </h3>
            <h4 className="fw-normal mb-3" style={{ fontSize: '1.05rem', color: '#93c5fd' }}>
              {current.subtitle}
            </h4>
            <p className="text-light opacity-90 mb-4" style={{ maxWidth: '780px', fontSize: '0.98rem', lineHeight: 1.6 }}>
              {current.description}
            </p>

            {/* Results bullets */}
            <div className="row g-2 mb-4" style={{ maxWidth: '820px' }}>
              {current.results.map((res, i) => (
                <div key={i} className="col-12 col-md-4 d-flex align-items-center gap-2" style={{ fontSize: '0.88rem' }}>
                  <FiCheckCircle size={16} className="text-info flex-shrink-0" />
                  <span className="text-light opacity-90">{res}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Live Action CTA Button */}
          <div className="pt-3 border-top border-white-50 d-flex flex-wrap align-items-center justify-content-between gap-3">
            <Link 
              href={current.ctaLink} 
              className="btn btn-light d-inline-flex align-items-center gap-2 fw-semibold px-4 py-2"
              style={{ borderRadius: '8px', color: '#0f172a' }}
            >
              {current.ctaText} <FiArrowRight size={16} />
            </Link>

            <span className="text-white-50 small">
              Case Study {currentIndex + 1} of {caseStudies.length}
            </span>
          </div>
        </div>

        {/* Navigation Buttons (Left & Right arrows) */}
        <div className="casestudy-nav-buttons mt-4">
          <button onClick={prevCase} className="casestudy-nav-btn prev-btn" aria-label="Previous case study">
            <FiArrowLeft size={18} />
          </button>
          <button onClick={nextCase} className="casestudy-nav-btn next-btn" aria-label="Next case study">
            <FiArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
