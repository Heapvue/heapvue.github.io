'use client';

import React from 'react';
import Link from 'next/link';
import { FiArrowRight, FiClock, FiShield, FiCode, FiCheck } from 'react-icons/fi';

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
        <div className="appointment-main-box row g-4 align-items-stretch" style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '36px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
          {/* Left Box */}
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-between pe-lg-4">
            <div>
              <div className="pipeline-tag mb-3 d-inline-block px-3 py-1 rounded-pill" style={{ backgroundColor: '#eff6ff', color: '#0555ff', fontSize: '0.8rem', fontWeight: 700 }}>
                DIRECT ACCESS TO PRACTITIONERS
              </div>

              <h3 className="appointment-box-title mb-3" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a' }}>
                Schedule an Architecture &amp; Solution Discovery Call
              </h3>

              <p className="text-muted mb-4" style={{ lineHeight: 1.6 }}>
                Connect directly with our solutions architects to evaluate feasibility, determine buy vs. build trade-offs, and receive transparent estimates.
              </p>
            </div>

            <div className="pt-2">
              <Link href="/contact" className="btn btn-primary d-inline-flex align-items-center gap-2 px-4 py-3 fw-semibold shadow-sm" style={{ backgroundColor: '#0555ff', borderRadius: '8px', fontSize: '0.95rem' }}>
                Book Consultation Now <FiArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Box (Replaces static calender.png image with real interactive schedule card) */}
          <div className="col-12 col-lg-6">
            <div className="p-4 rounded-3 h-100 d-flex flex-column justify-content-center" style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <h4 className="fw-bold mb-3 text-dark" style={{ fontSize: '1.1rem' }}>
                What We Cover in Your 30-Minute Session:
              </h4>

              <div className="d-flex flex-column gap-3 mb-4">
                <div className="d-flex align-items-start gap-3">
                  <div className="rounded-circle p-1 bg-white border d-flex align-items-center justify-content-center text-primary mt-1" style={{ width: '28px', height: '28px' }}>
                    <FiCode size={14} />
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold" style={{ fontSize: '0.92rem' }}>Technical Feasibility &amp; Stack Fit</h6>
                    <small className="text-muted">Analysis of your existing codebase, APIs, and cloud environment.</small>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div className="rounded-circle p-1 bg-white border d-flex align-items-center justify-content-center text-success mt-1" style={{ width: '28px', height: '28px' }}>
                    <FiCheck size={14} />
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold" style={{ fontSize: '0.92rem' }}>Buy vs. Build vs. Customise Evaluation</h6>
                    <small className="text-muted">Compare proprietary product deployment vs. custom engineering.</small>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div className="rounded-circle p-1 bg-white border d-flex align-items-center justify-content-center text-warning mt-1" style={{ width: '28px', height: '28px' }}>
                    <FiShield size={14} />
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold" style={{ fontSize: '0.92rem' }}>Compliance &amp; Security Baseline</h6>
                    <small className="text-muted">Initial review of data privacy (DPDP, GDPR) and zero-trust guidelines.</small>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div className="rounded-circle p-1 bg-white border d-flex align-items-center justify-content-center text-info mt-1" style={{ width: '28px', height: '28px' }}>
                    <FiClock size={14} />
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold" style={{ fontSize: '0.92rem' }}>Rapid Response SLA</h6>
                    <small className="text-muted">All inquiries acknowledged with direct calendar access within 24 hours.</small>
                  </div>
                </div>
              </div>

              <div className="text-center pt-2 border-top">
                <span className="text-muted small">No sales pressure. Direct discussion with technology architects.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
