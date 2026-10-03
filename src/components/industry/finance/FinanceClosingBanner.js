'use client';

import React from 'react';

export default function FinanceClosingBanner() {
  return (
    <section className="py-5 bg-white text-center">
      <div className="container" style={{ maxWidth: '900px' }}>
        <p 
          className="text-secondary fs-6 mb-0 px-3"
          style={{ lineHeight: '1.7', color: '#475569', fontWeight: '400' }}
        >
          Financial services organisations require systems that are reliable, structured, and secure. Heapvue helps businesses build and optimise digital platforms that improve client management, streamline operations, and ensure data integrity.
        </p>
      </div>
    </section>
  );
}
