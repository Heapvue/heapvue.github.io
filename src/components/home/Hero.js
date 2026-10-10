'use client';

import Link from 'next/link';
import { FiArrowRight, FiBox, FiCpu, FiCalendar } from 'react-icons/fi';

export default function Hero() {
  return (
    <div className="hero-content">
      {/* Category Badge Capsule */}
      <div className="badge-capsule">
        <span className="badge-bullet"></span>
        <span className="badge-text">
          Enterprise Cloud, AI Engineering &amp; Business Software Products
        </span>
      </div>

      {/* Semantic Live H1 (replaces the old headline image) */}
      <h1 className="hero-main-title">
        Intelligent Technology Solutions for <span className="hero-gradient-text">Modern Businesses</span>
      </h1>

      {/* Subtitle */}
      <p className="hero-subheading">
        Heapvue bridges the gap between custom engineering and off-the-shelf SaaS. We engineer bespoke platforms, modernize enterprise infrastructure, and deliver specialized business products built to scale.
      </p>

      {/* Option C: Dual-Lane Hero Routing (Products vs. Services) */}
      <div className="hero-dual-lane-container">
        {/* Lane 1: Products */}
        <div className="hero-lane-card">
          <div className="hero-lane-header">
            <div className="hero-lane-icon products-icon">
              <FiBox size={20} />
            </div>
            <div>
              <span className="hero-lane-eyebrow">Ready-to-Deploy</span>
              <h3 className="hero-lane-title">Our Software Products</h3>
            </div>
          </div>
          <p className="hero-lane-desc">
            Explore our specialized platforms including VueCart, HeapSync CRM, ChatPress AI, AppTuner, and Learnly LMS.
          </p>
          <Link href="/products" className="hero-lane-link">
            Explore Products <FiArrowRight size={14} />
          </Link>
        </div>

        {/* Lane 2: Custom Engineering & Services */}
        <div className="hero-lane-card">
          <div className="hero-lane-header">
            <div className="hero-lane-icon services-icon">
              <FiCpu size={20} />
            </div>
            <div>
              <span className="hero-lane-eyebrow">Custom Engineering</span>
              <h3 className="hero-lane-title">Solutions &amp; Consulting</h3>
            </div>
          </div>
          <p className="hero-lane-desc">
            Bespoke platform development, legacy modernization, cloud architecture, and regulatory data compliance.
          </p>
          <Link href="/solutions" className="hero-lane-link">
            Explore Solutions <FiArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Direct Contact / Consultation Action */}
      <div className="hero-direct-cta">
        <Link href="/contact" className="btn btn-primary hero-consult-btn">
          <FiCalendar size={16} /> Schedule a Technical Consultation <FiArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
