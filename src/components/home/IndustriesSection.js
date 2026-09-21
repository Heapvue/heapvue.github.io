'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const industriesData = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Digital healthcare solutions focused on patient engagement, wellness, and scalable ecosystems.',
    icon: '/images/heart.png',
    bg: '/images/bluebg.png',
  },
  {
    id: 'finance',
    title: 'Finance & FinTech',
    description: 'Secure, high-performance platforms built for financial operations, automation, and modern banking.',
    icon: '/images/card.png',
    bg: '/images/greenbg.png',
  },
  {
    id: 'saas',
    title: 'Enterprise & SaaS',
    description: 'Custom enterprise and SaaS applications designed for scalability, efficiency, and growth.',
    icon: '/images/saas.png',
    bg: '/images/bluebg.png',
  },
  {
    id: 'automation',
    title: 'AI & Automation',
    description: 'AI-powered systems and automation solutions that streamline workflows and boost productivity.',
    icon: '/images/automation.png',
    bg: '/images/greenbg.png',
  },
  {
    id: 'logistics',
    title: 'Logistics',
    description: 'Scalable logistics systems built to optimize operations, improve tracking, and enhance supply chain efficiency.',
    icon: '/images/logi.png',
    bg: '/images/greenbg.png',
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: 'Smart real estate solutions that streamline property management, communication, and workflows.',
    icon: '/images/real.png',
    bg: '/images/bluebg.png',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    description: 'Custom e-commerce solutions for seamless shopping, secure transactions, and scalable growth.',
    icon: '/images/shop.png',
    bg: '/images/greenbg.png',
  },
  {
    id: 'government',
    title: 'Government Solutions',
    description: 'Secure, scalable solutions to modernize public services, operations, and citizen experiences.',
    icon: '/images/gov.png',
    bg: '/images/bluebg.png',
  },
];

export default function IndustriesSection() {
  return (
    <section className="industries-section-wrapper">
      <div className="industries-container">
        {/* Top Header Block (1200w x 148h) */}
        <div className="industries-header">
          {/* Left Title Block (512w x 100h) */}
          <div className="industries-title-block">
            {/* Pill Badge Capsule */}
            <div className="industries-badge-capsule">
              <span className="badge-bullet"></span>
              <span className="badge-text">Industries We Work For</span>
            </div>

            {/* Main Heading */}
            <h2 className="industries-main-title">
              Smart Technology <span className="industries-highlight">Solutions</span>
              <br />
              for <span className="industries-highlight">Modern Industries</span>.
            </h2>
          </div>

          {/* Right Subheading Subtext */}
          <p className="industries-subtext">
            Heapvue partners with businesses across multiple industries to build scalable digital platforms, automate operations, and deliver intelligent user experiences powered by modern technology.
          </p>
        </div>

        {/* 8 Boxes Grid (1200w x 660h) */}
        <div className="industries-grid">
          {industriesData.map((item) => (
            <div
              key={item.id}
              className="industry-box-card"
              style={{ backgroundImage: `url(${item.bg})` }}
            >
              <div className="industry-box-icon-wrapper">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="industry-box-icon"
                />
              </div>

              <div className="industry-box-content">
                <h3 className="industry-box-title">{item.title}</h3>
                <p className="industry-box-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Explore Link */}
        <div className="industries-footer-link">
          <Link href="/industries" className="explore-more-link">
            Explore More <FiArrowRight size={16} className="explore-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
