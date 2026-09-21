'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const servicesData = [
  {
    id: 'ai',
    icon: '/images/ai.png',
    title: 'AI & Machine Learning',
    description: 'AI systems that automate workflows, analyze data, and enable faster decisions.',
  },
  {
    id: 'sde',
    icon: '/images/sde.png',
    title: 'Software Development',
    description: 'Custom web, mobile, and enterprise applications engineered for scalability, security, and high performance.',
  },
  {
    id: 'cloud',
    icon: '/images/cloud.png',
    title: 'Cloud Computing',
    description: 'Reliable cloud infrastructure and deployment solutions built for flexibility, scalability, and continuity.',
  },
  {
    id: 'ui',
    icon: '/images/ui.png',
    title: 'UI/UX Designing',
    description: 'Modern, intuitive interfaces designed to improve engagement, usability, and conversion.',
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section-wrapper">
      <div className="services-section-container">
        {/* Top Header Area */}
        <div className="services-header">
          {/* Pill Badge */}
          <div className="services-badge-capsule">
            <span className="badge-bullet"></span>
            <span className="badge-text">Our Services</span>
          </div>

          {/* Title Image (801.54px width x 114.8px height) */}
          <div className="services-title-img-wrapper">
            <Image
              src="/images/technologyservices.png"
              alt="Technology Services Built for Modern Businesses."
              width={801}
              height={115}
              className="services-title-img"
              priority
            />
          </div>

          {/* Subtitle Words (801.54px width x 45px height) */}
          <p className="services-subtext">
            Heapvue helps businesses accelerate growth with AI-powered software solutions, cloud infrastructure, scalable applications, and modern digital experiences designed for performance and long-term success.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-box">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={140}
                  height={140}
                  className="service-icon-img"
                />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Explore Button */}
        <div className="services-btn-wrapper">
          <Link href="/services" className="btn services-btn">
            Explore Our Services <FiArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
