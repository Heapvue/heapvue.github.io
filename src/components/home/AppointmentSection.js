'use client';

import React from 'react';
import Link from 'next/link';
import { FiArrowRight, FiCode, FiLayers, FiShield, FiClock } from 'react-icons/fi';

export default function AppointmentSection() {
  return (
    <section className="appointment-section-wrapper py-5">
      <div className="appointment-container">
        {/* Top Header Block */}
        <div className="appointment-header text-center mb-5">
          <div className="appointment-badge-capsule mb-2">
            <span className="badge-bullet"></span>
            <span className="badge-text">Technical Consultation</span>
          </div>

          <h2 className="appointment-main-title">
            Discuss Your Vision with <span className="appointment-highlight">Senior Engineers</span>
          </h2>

          <p className="appointment-subtext mx-auto" style={{ maxWidth: '720px' }}>
            Whether evaluating one of our ready-to-deploy software products or scoping custom enterprise architecture, our team is ready to map out your technical blueprint.
          </p>
        </div>

        {/* Content Box */}
        <div className="appointment-main-box">
          {/* Left Box (Dark textured background with warm amber glow, matching reference image) */}
          <div className="appointment-left-box">
            <div className="appointment-left-top">
              <div className="pipeline-tag">
                DIRECT ACCESS TO PRACTITIONERS
              </div>

              <h3 className="appointment-box-title">
                Schedule an Architecture &amp; Solution Discovery Call
              </h3>
            </div>

            <div className="appointment-left-bottom">
              <Link href="/contact" className="appointment-demo-btn">
                Book Consultation Now <FiArrowRight size={16} />
              </Link>

              <p className="appointment-box-subtext">
                Connect directly with our solutions architects to evaluate feasibility, determine buy vs. build trade-offs, and receive transparent estimates.
              </p>
            </div>
          </div>

          {/* Right Box: Modern Gradient Theme Cards (Zero Radius, No Buttons) */}
          <div className="appointment-right-box">
            <div className="appointment-cards-grid">
              {/* Card 1: Electric Heapvue Blue */}
              <div className="appointment-coverage-card card-heapvue-blue">
                <div className="coverage-card-icon">
                  <FiCode size={24} />
                </div>
                <h5 className="coverage-card-title">
                  Technical Feasibility &amp; Stack Fit
                </h5>
                <p className="coverage-card-desc">
                  Analysis of your existing codebase, APIs, and cloud environment.
                </p>
              </div>

              {/* Card 2: Deep Obsidian Navy */}
              <div className="appointment-coverage-card card-deep-navy">
                <div className="coverage-card-icon">
                  <FiLayers size={24} />
                </div>
                <h5 className="coverage-card-title">
                  Buy vs. Build vs. Customise Evaluation
                </h5>
                <p className="coverage-card-desc">
                  Compare proprietary product deployment vs. custom engineering.
                </p>
              </div>

              {/* Card 3: Royal Midnight Blue */}
              <div className="appointment-coverage-card card-royal-blue">
                <div className="coverage-card-icon">
                  <FiShield size={24} />
                </div>
                <h5 className="coverage-card-title">
                  Compliance &amp; Security Baseline
                </h5>
                <p className="coverage-card-desc">
                  Initial review of data privacy (DPDP, GDPR) and zero-trust guidelines.
                </p>
              </div>

              {/* Card 4: Dark Slate */}
              <div className="appointment-coverage-card card-dark-slate">
                <div className="coverage-card-icon">
                  <FiClock size={24} />
                </div>
                <h5 className="coverage-card-title">
                  Rapid Response SLA
                </h5>
                <p className="coverage-card-desc">
                  All inquiries acknowledged with direct calendar access within 24 business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
