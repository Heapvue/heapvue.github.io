'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ecommerceProjects = [
  {
    id: 1,
    title: 'Website and Digital Branding for a Dental and Maxillofacial Clinic',
    description:
      'A leading dental clinic in South India wanted to strengthen its digital presence and improve brand visibility. Heapvue designed and developed a modern website along with SEO implementation, helping the clinic establish a stronger online identity and reach more patients.',
    image: '/images/sol4.png',
    link: '/contact',
  },
  {
    id: 2,
    title: 'Custom E-commerce Platform for an FMCG Company',
    description:
      'An FMCG company operating on WooCommerce faced frequent disruptions due to plugin conflicts and maintenance issues. Heapvue developed a custom e-commerce platform built on Node.js, providing greater platform stability and a more scalable architecture for online sales.',
    image: '/images/sol4.png',
    link: '/contact',
  },
  {
    id: 3,
    title: 'Shopify-based Online Store for a Boutique Brand',
    description:
      'An online boutique wanted to modernise its website and build its digital commerce operations on Shopify. Heapvue redesigned the website and implemented a Shopify-based platform to support product management, online sales, and a smoother customer shopping experience.',
    image: '/images/sol4.png',
    link: '/contact',
  },
];

export default function EcommerceProjectsSection() {
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
            Highlighted Projects in <span className="blue-italic-text">E-commerce & Digital Experience</span>
          </h2>

          {/* Subtext */}
          <p className="highlighted-projects-subtext">
            Discover how Heapvue builds modern digital platforms, custom e-commerce engines, and high-converting online storefronts.
          </p>
        </div>

        {/* 3 Cards Block Container */}
        <div className="solutions-cards-block">
          {ecommerceProjects.map((project) => (
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
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
