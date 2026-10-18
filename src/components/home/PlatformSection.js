'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FiArrowRight,
  FiArrowUpRight,
  FiTrendingUp,
  FiShoppingBag,
  FiUsers,
  FiActivity
} from 'react-icons/fi';

export default function PlatformSection() {
  return (
    <section className="platform-section-wrapper" id="platform-showcase">
      {/* Background with 3D Spheres & Lavender Mesh */}
      <div className="platform-bg-backdrop"></div>

      <div className="platform-main-container">
        {/* Top Interactive Diagram Area */}
        <div className="platform-diagram-stage">
          {/* Concentric Orbit Rings in Center */}
          <div className="platform-concentric-rings" aria-hidden="true">
            <div className="platform-ring platform-ring-outer"></div>
            <div className="platform-ring platform-ring-middle"></div>
            <div className="platform-ring platform-ring-inner"></div>
          </div>

          {/* SVG Curved Dashed Connector Lines */}
          <svg
            className="platform-connector-svg"
            viewBox="0 0 1140 460"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Top-Left Connector */}
            <path
              d="M 465 195 C 400 195, 395 105, 345 105"
              stroke="#818cf8"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <circle cx="465" cy="195" r="3.5" fill="#4f46e5" />
            <circle cx="345" cy="105" r="3.5" fill="#4f46e5" />

            {/* Bottom-Left Connector */}
            <path
              d="M 465 265 C 400 265, 395 340, 345 340"
              stroke="#818cf8"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <circle cx="465" cy="265" r="3.5" fill="#4f46e5" />
            <circle cx="345" cy="340" r="3.5" fill="#4f46e5" />

            {/* Top-Right Connector */}
            <path
              d="M 675 195 C 740 195, 745 105, 795 105"
              stroke="#818cf8"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <circle cx="675" cy="195" r="3.5" fill="#4f46e5" />
            <circle cx="795" cy="105" r="3.5" fill="#4f46e5" />

            {/* Bottom-Right Connector */}
            <path
              d="M 675 265 C 740 265, 745 340, 795 340"
              stroke="#818cf8"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <circle cx="675" cy="265" r="3.5" fill="#4f46e5" />
            <circle cx="795" cy="340" r="3.5" fill="#4f46e5" />
          </svg>

          {/* Central White Disc with Heapvue Logo */}
          <div className="platform-center-disc-wrapper">
            <div className="platform-center-disc">
              <Image
                src="/images/Heapvue Icon.png"
                alt="Heapvue Logo"
                width={112}
                height={112}
                className="platform-v-symbol-img"
                priority
              />
            </div>
          </div>

          {/* 4 Feature Floating Metric Cards */}
          <div className="platform-cards-layout">
            {/* Card 1: Top-Left (20+ Businesses Served) */}
            <div className="platform-card platform-card-tl">
              <div className="platform-card-icon-box icon-tl">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="platform-icon" aria-hidden="true">
                  <rect x="3" y="14" width="4.5" height="7" rx="2" fill="currentColor" />
                  <rect x="9.75" y="8" width="4.5" height="13" rx="2" fill="currentColor" />
                  <rect x="16.5" y="3" width="4.5" height="18" rx="2" fill="currentColor" />
                </svg>
              </div>
              <div className="platform-card-body">
                <span className="platform-card-title">Businesses Served</span>
                <div className="platform-card-metric-row">
                  <span className="platform-card-metric">20+</span>
                  <FiTrendingUp className="platform-trend-icon" size={19} />
                </div>
                <p className="platform-card-desc">
                  Businesses served through Heapvue products and services.
                </p>
              </div>
            </div>

            {/* Card 2: Bottom-Left (100+ Stores Powered) */}
            <div className="platform-card platform-card-bl">
              <div className="platform-card-icon-box icon-bl">
                <FiShoppingBag size={22} className="platform-icon" />
              </div>
              <div className="platform-card-body">
                <span className="platform-card-title">Stores Powered</span>
                <div className="platform-card-metric-row">
                  <span className="platform-card-metric">100+</span>
                  <FiTrendingUp className="platform-trend-icon" size={19} />
                </div>
                <p className="platform-card-desc">
                  Stores supported by Vuecart.
                </p>
              </div>
            </div>

            {/* Card 3: Top-Right (250K+ Users Reached) */}
            <div className="platform-card platform-card-tr">
              <div className="platform-card-icon-box icon-tr">
                <FiUsers size={22} className="platform-icon" />
              </div>
              <div className="platform-card-body">
                <span className="platform-card-title">Users Reached</span>
                <div className="platform-card-metric-row">
                  <span className="platform-card-metric">250K+</span>
                  <FiTrendingUp className="platform-trend-icon" size={19} />
                </div>
                <p className="platform-card-desc">
                  Users across Heapvue platforms.
                </p>
              </div>
            </div>

            {/* Card 4: Bottom-Right (99.98% Uptime) */}
            <div className="platform-card platform-card-br">
              <div className="platform-card-icon-box icon-br">
                <FiActivity size={22} className="platform-icon" />
              </div>
              <div className="platform-card-body">
                <span className="platform-card-title">Uptime</span>
                <div className="platform-card-metric-row">
                  <span className="platform-card-metric">99.98%</span>
                  <FiTrendingUp className="platform-trend-icon" size={19} />
                </div>
                <p className="platform-card-desc">
                  Measured uptime over the last 30 days.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Headings & Subtitle (Positioned on the Image) */}
        <div className="platform-hero-text-block">
          <h2 className="platform-hero-heading">
            We Build the Technology Behind{' '}
            <span className="platform-hero-highlight">Your Next Big Move.</span>
          </h2>
          <p className="platform-hero-subtitle">
            From business-ready software platforms to cloud infrastructure and custom engineering, Heapvue helps businesses build, launch, and scale their digital operations.
          </p>
        </div>
      </div>

      {/* CTA Buttons Row Placed Below the Image Area in the White Dispersed Zone */}
      <div className="platform-cta-container">
        <div className="platform-cta-row">
          <a href="https://Vuecart.heapvue.com/in-en" target="_blank" rel="noopener noreferrer" className="platform-primary-btn">
            Explore Our Platforms <FiArrowRight size={17} className="btn-arrow" />
          </a>
          <Link href="/contact" className="platform-secondary-btn">
            Talk to Our Team <FiArrowUpRight size={17} className="btn-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
