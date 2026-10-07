'use client';

import Image from 'next/image';

export default function FlowDiagram() {
  return (
    <div className="diagram-wrapper">
      {/* SVG Connector Lines - Centered and absolute behind the V logo */}
      <svg className="diagram-lines-svg" viewBox="0 0 990 426" preserveAspectRatio="none">
        {/* Main Vertical Center Line */}
        <line x1="495" y1="40" x2="495" y2="335" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3 3" />
        
        {/* Middle row horizontal connector */}
        <line x1="360" y1="112" x2="630" y2="112" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="360" cy="112" r="3.5" fill="#002299" />
        <circle cx="630" cy="112" r="3.5" fill="#002299" />

        {/* Bottom row horizontal connector */}
        <line x1="280" y1="195" x2="710" y2="195" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="280" cy="195" r="3.5" fill="#002299" />
        <circle cx="710" cy="195" r="3.5" fill="#002299" />
      </svg>

      {/* The Illustration Content Image containing the 5 cards */}
      <div className="illustration-img-container">
        <Image 
          src="/images/Illustration Content.png" 
          alt="Workflow diagram showing Company Page Visitors, Linkedin Intent Signals, Buyer Engagement Tracking, AI Message Personalization, and Revenue Opportunity Alerts" 
          width={990} 
          height={250} 
          className="illustration-img"
          priority
        />
      </div>

      {/* The V Logo Card centered at the bottom */}
      <div className="v-logo-wrapper">
        <div className="v-logo-card">
          <Image 
            src="/images/Heapvue_Logo (3).png" 
            alt="Heapvue logo" 
            width={155} 
            height={108} 
            className="v-logo-img"
            priority
          />
        </div>
      </div>
    </div>
  );
}
