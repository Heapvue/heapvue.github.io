'use client';

import React from 'react';
import Link from 'next/link';
import { FiArrowRight, FiClock, FiBookOpen } from 'react-icons/fi';

export default function BlogComingSoonPage() {
  return (
    <div 
      className="d-flex flex-column align-items-center justify-content-center text-center px-4"
      style={{
        minHeight: '75vh',
        backgroundColor: '#ffffff',
        paddingTop: '60px',
        paddingBottom: '80px',
      }}
    >
      <div 
        className="container d-flex flex-column align-items-center"
        style={{ maxWidth: '840px' }}
      >
        {/* Capsule Badge */}
        <div 
          className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill mb-4 shadow-sm"
          style={{
            backgroundColor: '#EFF6FF',
            border: '1px solid rgba(5, 85, 255, 0.2)',
          }}
        >
          <span 
            className="rounded-circle"
            style={{ width: '8px', height: '8px', backgroundColor: '#0555FF' }}
          />
          <span className="fw-semibold text-dark" style={{ fontSize: '0.85rem' }}>
            Blogs &amp; Insights
          </span>
        </div>

        {/* Coming Soon Main Banner Card */}
        <div 
          className="w-100 p-5 rounded-4 shadow-sm mb-4 position-relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #040D21 0%, #0F172A 60%, #1E293B 100%)',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div className="position-relative z-2">
            <div 
              className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
              style={{
                width: '64px',
                height: '64px',
                backgroundColor: 'rgba(5, 85, 255, 0.2)',
                color: '#38BDF8',
              }}
            >
              <FiBookOpen size={32} />
            </div>

            <h1 
              className="fw-bold mb-3"
              style={{
                fontSize: '2.8rem',
                lineHeight: '1.2',
                letterSpacing: '-0.02em',
              }}
            >
              Blogs Coming Soon
            </h1>

            <p 
              className="mx-auto text-light opacity-75"
              style={{
                fontSize: '1.1rem',
                maxWidth: '620px',
                lineHeight: '1.6',
              }}
            >
              We are working on bringing you insightful articles, expert industry trends, and AI &amp; cloud engineering deep dives. Stay tuned for our upcoming publications!
            </p>
          </div>
        </div>

        {/* Action Button */}
        <Link 
          href="/"
          className="btn d-inline-flex align-items-center gap-2 text-white px-4 py-3 fw-semibold shadow-sm"
          style={{
            backgroundColor: '#0555FF',
            borderRadius: '6px',
            fontSize: '0.95rem',
            transition: 'transform 0.2s ease',
          }}
        >
          Return to Homepage <FiArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
