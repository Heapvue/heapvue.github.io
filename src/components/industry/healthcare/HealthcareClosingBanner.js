'use client';

import React from 'react';

export default function HealthcareClosingBanner() {
  return (
    <section className="py-5 bg-white text-center">
      <div className="container" style={{ maxWidth: '900px' }}>
        <p 
          className="text-secondary fs-6 mb-0 px-3"
          style={{ lineHeight: '1.7', color: '#475569', fontWeight: '400' }}
        >
          As healthcare continues to evolve digitally, organisations require systems that are secure, reliable, and easy to manage. Heapvue helps healthcare providers build and modernise digital infrastructure that supports better patient care, efficient operations, and long-term scalability.
        </p>
      </div>
    </section>
  );
}
