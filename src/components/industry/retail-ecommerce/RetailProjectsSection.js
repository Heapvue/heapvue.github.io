'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ProjectModal from '@/components/industry/ProjectModal';

const retailProjects = [
  {
    id: 1,
    title: 'Custom E-commerce Platform for an FMCG Company',
    description:
      'An FMCG company faced frequent disruptions due to WooCommerce plugin issues and platform instability. Heapvue built a custom Node.js-based e-commerce platform that improved system reliability and enabled scalable online sales operations.',
    image: '/images/sol4.png',
    meta: {
      industry: 'Retail & FMCG',
      service: 'Headless E-commerce Engineering',
      duration: '5 Months',
    },
    challenge:
      'The brand suffered frequent check-out crashes, checkout timeouts during high-traffic flash sales, and sluggish page load speeds.',
    solution:
      'Heapvue engineered a custom Node.js and Next.js headless e-commerce store with elastic cloud scaling, Redis caching, and unified order orchestration.',
    impact:
      'Handled 10x traffic spikes with zero downtime, improved page speed by 70%, and dramatically lifted checkout conversions.',
    metrics: [
      { value: '10x', label: 'Concurrent traffic capacity' },
      { value: '70%', label: 'Faster page load speed' },
      { value: '42%', label: 'Lift in checkout conversion' },
    ],
  },
  {
    id: 2,
    title: 'Inventory and Staff Management System for a Boutique Chain',
    description:
      'A boutique retailer operating multiple stores required a system to track inventory and manage tasks across sales and field staff. Heapvue developed a platform that enabled real-time inventory tracking and improved coordination across locations.',
    image: '/images/indus8.png',
    meta: {
      industry: 'Retail & Apparel',
      service: 'Enterprise Resource Planning (ERP)',
      duration: '6 Months',
    },
    challenge:
      'Stock discrepancies across multiple physical boutique outlets caused stockouts, over-ordering, and disjointed staff scheduling.',
    solution:
      'Heapvue built a real-time multi-location inventory synchronization engine and mobile staff management app with barcode scanning.',
    impact:
      'Eliminated stockout discrepancies across all stores, reduced inventory audit times from days to hours, and streamlined staff task assignments.',
    metrics: [
      { value: '99.5%', label: 'Inventory sync accuracy' },
      { value: '85%', label: 'Faster stocktaking cycles' },
      { value: '25%', label: 'Reduction in holding costs' },
    ],
  },
  {
    id: 3,
    title: 'Shopify-based Online Store for a Boutique Brand',
    description:
      'An online boutique wanted to modernise its digital storefront and streamline its e-commerce operations. Heapvue redesigned the website and implemented a Shopify-based platform to support product management and improve the customer shopping experience.',
    image: '/images/sol6.png',
    meta: {
      industry: 'Fashion & Luxury',
      service: 'Digital Storefront Modernisation',
      duration: '3 Months',
    },
    challenge:
      'An outdated web store had a convoluted mobile user journey, poor SEO rankings, and high bounce rates among shoppers.',
    solution:
      'Heapvue crafted a bespoke, high-converting digital storefront with bespoke liquid components, fluid animations, and frictionless 1-click checkout.',
    impact:
      'Decreased bounce rate by 45%, increased mobile revenue by 120%, and delivered a modern editorial brand experience.',
    metrics: [
      { value: '120%', label: 'Mobile revenue surge' },
      { value: '45%', label: 'Reduction in bounce rate' },
      { value: '2.8x', label: 'Average session duration' },
    ],
  },
];

export default function RetailProjectsSection() {
  const [activeModalIndex, setActiveModalIndex] = useState(null);

  const openModal = (index) => {
    setActiveModalIndex(index);
  };

  const closeModal = () => {
    setActiveModalIndex(null);
  };

  const handlePrevModal = () => {
    setActiveModalIndex((prev) =>
      prev === 0 ? retailProjects.length - 1 : prev - 1
    );
  };

  const handleNextModal = () => {
    setActiveModalIndex((prev) =>
      prev === retailProjects.length - 1 ? 0 : prev + 1
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
            <span className="blue-highlight-text">
              Retail & E-commerce Solutions
            </span>
          </h2>
          <p className="industry-projects-subtext">
            Retail and e-commerce businesses require digital systems that are
            reliable, scalable, and aligned with their operational needs. Heapvue
            helps organisations build and modernise digital platforms that
            improve efficiency, enhance customer experience, and support
            long-term growth.
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
            {retailProjects.map((project, idx) => (
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
            onClick={() => openModal(retailProjects.length - 1)}
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
        projects={retailProjects}
        activeIndex={activeModalIndex}
        onClose={closeModal}
        onPrev={handlePrevModal}
        onNext={handleNextModal}
      />
    </section>
  );
}
