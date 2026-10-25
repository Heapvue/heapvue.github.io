import Link from 'next/link';
import {
  FiArrowLeft,
  FiArrowRight,
  FiCpu,
  FiCode,
  FiCloud,
  FiBookOpen,
} from 'react-icons/fi';

export const metadata = {
  title: '404 - Page Not Found | Heapvue',
  description: 'The page you are looking for could not be found. Explore Heapvue custom software engineering, AI workflows, and cloud architecture solutions.',
  robots: {
    index: false,
    follow: true,
  },
};

const SUGGESTED_LINKS = [
  {
    icon: FiCode,
    title: 'Custom Software Development',
    desc: 'Scalable platforms, APIs, and modern architectures.',
    href: '/solutions/platform-development',
  },
  {
    icon: FiCpu,
    title: 'AI & Intelligent Automation',
    desc: 'Autonomous LLM agents and intelligent workflows.',
    href: '/solutions/ai-intelligent-automation',
  },
  {
    icon: FiCloud,
    title: 'Cloud & Legacy Modernisation',
    desc: 'Resilient multi-cloud DevOps and microservices.',
    href: '/solutions/legacy-system-modernisation',
  },
  {
    icon: FiBookOpen,
    title: 'Heapvue Insights & Articles',
    desc: 'Engineering guides, cloud trends, and case studies.',
    href: '/blog',
  },
];

export default function NotFound() {
  return (
    <div
      className="not-found-wrapper py-5 d-flex align-items-center"
      style={{
        minHeight: '75vh',
        backgroundColor: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Soft Ambient Radial Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '500px',
          background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(0, 51, 204, 0.08), transparent 75%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      <div className="container position-relative text-center" style={{ zIndex: 1, maxWidth: '880px' }}>
        {/* Status Badge Capsule */}
        <div
          className="d-inline-flex align-items-center gap-2 px-3 py-1 mb-3 rounded-pill bg-white shadow-sm"
          style={{
            border: '1px solid rgba(0, 51, 204, 0.2)',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: '#0044cc',
              display: 'inline-block',
            }}
          />
          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: 600,
              color: '#0033cc',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            404 &bull; Page Not Found
          </span>
        </div>

        {/* Large Gradient 404 Display */}
        <div
          className="mb-2 user-select-none"
          style={{
            fontSize: 'clamp(5rem, 14vw, 8.5rem)',
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: '-0.04em',
          }}
        >
          <span
            style={{
              background: 'linear-gradient(135deg, #0033cc 0%, #1d4ed8 45%, #60a5fa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            404
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className="h2 mb-3"
          style={{
            color: '#0a0f29',
            fontWeight: 700,
            letterSpacing: '-0.02em',
          }}
        >
          Looking for something that isn&apos;t here?
        </h1>

        {/* Subtitle */}
        <p
          className="mb-4 text-muted fs-6"
          style={{
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.6,
            color: '#4a5568',
          }}
        >
          The page you requested may have been moved, renamed, or is no longer available.
          Explore our solutions below or head back to the homepage.
        </p>

        {/* Primary Action Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          <Link
            href="/"
            className="btn btn-primary d-inline-flex align-items-center gap-2 px-4 py-2"
            style={{
              backgroundColor: '#0033cc',
              borderColor: '#0033cc',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '0.95rem',
              boxShadow: '0 4px 14px rgba(0, 51, 204, 0.25)',
            }}
          >
            <FiArrowLeft size={16} /> Back to Homepage
          </Link>
          <Link
            href="/contact"
            className="btn btn-outline-secondary d-inline-flex align-items-center gap-2 px-4 py-2"
            style={{
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '0.95rem',
              color: '#0a0f29',
              borderColor: '#cbd5e1',
              backgroundColor: '#ffffff',
            }}
          >
            Contact Our Team <FiArrowRight size={16} />
          </Link>
        </div>

        {/* Helpful Suggested Destinations Grid */}
        <div
          className="p-4 rounded text-start"
          style={{
            background: 'rgba(248, 250, 252, 0.85)',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
          }}
        >
          <p
            className="mb-3 text-uppercase fw-semibold"
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              color: '#64748b',
            }}
          >
            Popular Destinations
          </p>
          <div className="row g-3">
            {SUGGESTED_LINKS.map(({ icon: Icon, title, desc, href }) => (
              <div key={title} className="col-12 col-md-6">
                <Link
                  href={href}
                  className="p-3 bg-white d-flex align-items-start gap-3 text-decoration-none rounded h-100 transition-all"
                  style={{
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div
                    className="p-2 rounded d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      backgroundColor: 'rgba(0, 51, 204, 0.08)',
                      color: '#0033cc',
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div className="flex-grow-1">
                    <div
                      className="fw-semibold text-dark mb-1"
                      style={{ fontSize: '0.92rem' }}
                    >
                      {title}
                    </div>
                    <div
                      className="text-muted"
                      style={{ fontSize: '0.8rem', lineHeight: 1.4 }}
                    >
                      {desc}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
