import Link from 'next/link';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import './not-found.css';

export const metadata = {
  title: '404 - Page Not Found | Heapvue',
  description: 'The page you are looking for could not be found. Return to the Heapvue homepage or contact our team.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="not-found-section">
      <div className="not-found-container">
        {/* Prominent 404 Number Display */}
        <div className="not-found-code" aria-hidden="true">
          404
        </div>

        {/* Main Headline */}
        <h1 className="not-found-title">
          Looking for something that isn&apos;t here?
        </h1>

        {/* Description Subtext */}
        <p className="not-found-subtext">
          The page you requested may have been moved, renamed, or is no longer available.
          You can return to our homepage or get in touch with our team directly.
        </p>

        {/* Action Buttons Matching Navbar & Contact Design */}
        <div className="not-found-actions">
          <Link href="/" className="not-found-btn not-found-btn-primary">
            <FiArrowLeft size={16} /> Back to Homepage
          </Link>
          <Link href="/contact" className="not-found-btn not-found-btn-secondary">
            Contact Our Team <FiArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
