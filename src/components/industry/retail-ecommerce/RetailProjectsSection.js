'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const retailProjects = [
  {
    id: 1,
    title: 'Custom E-commerce Platform for an FMCG Company',
    description:
      'An FMCG company faced frequent disruptions due to WooCommerce plugin issues and platform instability. Heapvue built a custom Node.js-based e-commerce platform that improved system reliability and enabled scalable online sales operations.',
    image: '/images/sol4.png',
    link: '/contact',
  },
  {
    id: 2,
    title: 'Inventory and Staff Management System for a Boutique Chain',
    description:
      'A boutique retailer operating multiple stores required a system to track inventory and manage tasks across sales and field staff. Heapvue developed a platform that enabled real-time inventory tracking and improved coordination across locations.',
    image: '/images/indus8.png',
    link: '/contact',
  },
  {
    id: 3,
    title: 'Shopify-based Online Store for a Boutique Brand',
    description:
      'An online boutique wanted to modernise its digital storefront and streamline its e-commerce operations. Heapvue redesigned the website and implemented a Shopify-based platform to support product management and improve the customer shopping experience.',
    image: '/images/sol6.png',
    link: '/contact',
  },
];

export default function RetailProjectsSection() {
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
            Highlighted Projects Across <span className="blue-italic-text">Retail & E-commerce Solutions</span>
          </h2>
          <p className="industry-projects-subtext">
            Retail and e-commerce businesses require digital systems that are reliable, scalable, and aligned with their operational needs. Heapvue helps organisations build and modernise digital platforms that improve efficiency, enhance customer experience, and support long-term growth.
          </p>
        </div>

        {/* 3 Clickable Cards Grid */}
        <div className="industry-projects-grid">
          {retailProjects.map((project) => (
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
