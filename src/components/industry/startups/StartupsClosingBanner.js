'use client';

import React from 'react';

export default function StartupsClosingBanner() {
  return (
    <section className="py-5 bg-white text-center">
      <div className="container" style={{ maxWidth: '900px' }}>
        <p 
          className="text-secondary fs-6 mb-0 px-3"
          style={{ lineHeight: '1.7', color: '#475569', fontWeight: '400' }}
        >
          Startups need technology partners who can move quickly while building for the future. Heapvue helps startups turn ideas into scalable products, build reliable systems, and create a strong technical foundation for growth.
        </p>
      </div>
    </section>
  );
}
