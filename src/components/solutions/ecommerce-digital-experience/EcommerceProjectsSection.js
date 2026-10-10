'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ecommerceProjects = [
  {
    id: 1,
    title: 'Website and Digital Branding for a Healthcare Specialty Clinic',
    description:
      'A leading specialty clinic required a high-performance web platform and digital branding overhaul. Heapvue designed and developed a modern responsive website with SEO architecture, improving patient engagement and consultation inquiries.',
    image: '/images/sol8.png',
    link: '/contact',
  },
  {
    id: 2,
    title: 'Custom Headless E-commerce Platform for an FMCG Brand',
    description:
      'An FMCG enterprise operating on legacy monolithic commerce faced high cart abandonment and plugin conflicts. Heapvue developed a headless Node.js storefront providing instant page loads and a resilient checkout flow.',
    image: '/images/sol9.png',
    link: '/contact',
  },
  {
    id: 3,
    title: 'Modern Digital Storefront for a Boutique Retail Brand',
    description:
      'An emerging retail brand required a modern, mobile-first digital commerce presence. Heapvue implemented a customized headless digital shopping experience supporting rapid product catalog expansion and global payments.',
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
            Highlighted Projects in <span className="blue-italic-text">Web &amp; E-commerce Platforms</span>
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
