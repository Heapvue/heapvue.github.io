'use client';

export default function IntegrationsSection() {
  return (
    <section className="integrations-section-wrapper">
      <div className="integrations-container">
        {/* Title Block (745w x 50h Hug) */}
        <h2 className="integrations-title">
          Natively integrates with your enterprise stack
        </h2>

        {/* 10 Logos Grid Block (1200w x 208h) */}
        <div className="integrations-grid">
          {/* Box 1: Microsoft Sentinel */}
          <div className="integration-box">
            <svg width="140" height="32" viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L4 8v10c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V8l-8-4z" stroke="#1f2937" strokeWidth="2" fill="none"/>
              <circle cx="12" cy="15" r="3" fill="#1f2937"/>
              <text x="26" y="16" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="12" fontWeight="700" fill="#1f2937">Microsoft</text>
              <text x="26" y="27" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="9.5" fontWeight="400" fill="#4b5563">Sentinel</text>
            </svg>
          </div>

          {/* Box 2: DATADOG */}
          <div className="integration-box">
            <svg width="130" height="32" viewBox="0 0 140 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="6" width="18" height="20" rx="3" stroke="#1f2937" strokeWidth="2" fill="none"/>
              <path d="M8 11h10M8 16h10M8 21h6" stroke="#1f2937" strokeWidth="1.5"/>
              <circle cx="20" cy="11" r="2" fill="#1f2937"/>
              <text x="28" y="22" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="13" fontWeight="800" fill="#1f2937" letterSpacing="0.5">DATADOG</text>
            </svg>
          </div>

          {/* Box 3: Elastic */}
          <div className="integration-box">
            <svg width="110" height="32" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="18" r="4" fill="#1f2937"/>
              <circle cx="17" cy="10" r="3.5" fill="#1f2937"/>
              <circle cx="17" cy="26" r="3.5" fill="#1f2937"/>
              <circle cx="25" cy="18" r="4" fill="#1f2937"/>
              <text x="36" y="24" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="17" fontWeight="600" fill="#1f2937" letterSpacing="-0.3">elastic</text>
            </svg>
          </div>

          {/* Box 4: QRadar */}
          <div className="integration-box">
            <svg width="110" height="32" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 24 A 9 9 0 0 1 12 12" stroke="#1f2937" strokeWidth="2.5" fill="none"/>
              <path d="M9 27 A 13 13 0 0 1 9 9" stroke="#1f2937" strokeWidth="1.8" fill="none"/>
              <circle cx="12" cy="18" r="2.5" fill="#1f2937"/>
              <text x="26" y="24" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="17" fill="#1f2937"><tspan fontWeight="700">Q</tspan><tspan fontWeight="400">Radar</tspan></text>
            </svg>
          </div>

          {/* Box 5: Splunk> */}
          <div className="integration-box">
            <svg width="110" height="32" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="2" y="24" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="21" fontWeight="800" fill="#1f2937" letterSpacing="-0.5">
                splunk<tspan fill="#1f2937" fontWeight="900">&gt;</tspan>
              </text>
            </svg>
          </div>

          {/* Box 6: DUO */}
          <div className="integration-box">
            <svg width="90" height="32" viewBox="0 0 100 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g fill="#1f2937">
                <path d="M4 8h10c5.5 0 9 3.5 9 10s-3.5 10-9 10H4V8zm6 15h4c2.5 0 4-1.5 4-5s-1.5-5-4-5h-4v10z"/>
                <path d="M27 8h6v11.5c0 3 1.5 4.5 4 4.5s4-1.5 4-4.5V8h6v11.5c0 6.5-4.5 10-10 10s-10-3.5-10-10V8z"/>
                <path d="M51 18c0-6 4.5-10.5 10.5-10.5S72 12 72 18s-4.5 10.5-10.5 10.5S51 24 51 18zm15 0c0-3.5-2-5.5-4.5-5.5S57 14.5 57 18s2 5.5 4.5 5.5 4.5-2 4.5-5.5z"/>
              </g>
            </svg>
          </div>

          {/* Box 7: Emblem Star */}
          <div className="integration-box">
            <svg width="40" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L32 18L20 30L8 18Z" stroke="#1f2937" strokeWidth="2.5" fill="none"/>
              <circle cx="20" cy="18" r="3" fill="#1f2937"/>
            </svg>
          </div>

          {/* Box 8: Okta */}
          <div className="integration-box">
            <svg width="100" height="32" viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="18" r="8" stroke="#1f2937" strokeWidth="4" fill="none"/>
              <text x="28" y="24" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="19" fontWeight="700" fill="#1f2937" letterSpacing="-0.3">okta</text>
            </svg>
          </div>

          {/* Box 9: Ping */}
          <div className="integration-box">
            <svg width="80" height="32" viewBox="0 0 90 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="8" width="20" height="20" fill="#1f2937" rx="2"/>
              <text x="9" y="21" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="8" fontWeight="700" fill="#ffffff">Ping</text>
            </svg>
          </div>

          {/* Box 10: Diamond Outline */}
          <div className="integration-box">
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="20,6 33,18 20,30 7,18" stroke="#1f2937" strokeWidth="2.5" fill="none"/>
              <polygon points="20,12 26,18 20,24 14,18" stroke="#1f2937" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
