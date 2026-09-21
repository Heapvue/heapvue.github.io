'use client';

const logosData = [
  {
    id: 'umbrella',
    name: 'umbrella',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v2" />
        <path d="M12 4a8 8 0 0 1 8 8H4a8 8 0 0 1 8-8z" />
        <path d="M12 12v6a2 2 0 0 0 4 0" />
      </svg>
    ),
  },
  {
    id: 'network',
    name: 'Network',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M12 9v3" />
        <path d="M6 15l6-3 6 3" />
      </svg>
    ),
  },
  {
    id: 'flash',
    name: 'Flash',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: 'cactus',
    name: 'Cactus',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10" />
        <path d="M9 10v4a1 1 0 0 0 1 1h2" />
        <path d="M15 11v3a1 1 0 0 1-1 1h-2" />
      </svg>
    ),
  },
  {
    id: 'visic',
    name: 'visic',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9z" />
      </svg>
    ),
  },
];

export default function CompanyLogosSection() {
  const marqueeItems = [...logosData, ...logosData, ...logosData, ...logosData];

  return (
    <section className="company-logos-wrapper">
      <div className="company-logos-container">
        {/* Left Fixed Label - Left aligned */}
        <div className="logos-label-box">
          <span className="logos-label-line">Trusted by</span>
          <span className="logos-label-line">Users Worldwide</span>
        </div>

        {/* Right Marquee Viewport with Spacing: 38px */}
        <div className="logos-marquee-viewport">
          <div className="marquee-fade-right"></div>
          <div className="logos-marquee-track">
            {marqueeItems.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="logo-item">
                <span className="logo-icon">{item.icon}</span>
                <span className="logo-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
