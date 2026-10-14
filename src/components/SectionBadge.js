'use client';

import React from 'react';

export default function SectionBadge({ text, children, className = '' }) {
  return (
    <div className={`section-badge-capsule ${className}`.trim()}>
      <span className="badge-bullet"></span>
      <span className="badge-text">{text || children}</span>
    </div>
  );
}
