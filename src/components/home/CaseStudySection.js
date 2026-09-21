'use client';

import Image from 'next/image';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

export default function CaseStudySection() {
  return (
    <section className="casestudy-section-wrapper">
      <div className="casestudy-container">
        {/* Top Header Area: W 801.54px x H 209px, Gap 16 */}
        <div className="casestudy-header">
          {/* Pill Badge */}
          <div className="casestudy-badge-capsule">
            <span className="badge-bullet"></span>
            <span className="badge-text">Our Case Study</span>
          </div>

          {/* Heading */}
          <h2 className="casestudy-title">
            Real Business <span className="highlight-text">Problems</span>. Smart Technology <span className="highlight-text">Solutions</span>.
          </h2>

          {/* Subtext */}
          <p className="casestudy-subtext">
            Explore how Heapvue helps businesses transform operations, automate workflows, and build scalable digital products through AI, cloud technologies, and modern engineering solutions.
          </p>
        </div>

        {/* Green Case Study Card: W 1200px x H 554px */}
        <div className="casestudy-card-wrapper">
          <Image
            src="/images/bonacci.png"
            alt="Helping Bonnacci Users Communicate More Naturally"
            width={1200}
            height={554}
            className="casestudy-card-img"
            priority
          />
        </div>

        {/* Navigation Buttons (Left & Right arrows) */}
        <div className="casestudy-nav-buttons">
          <button className="casestudy-nav-btn prev-btn" aria-label="Previous case study">
            <FiArrowLeft size={18} />
          </button>
          <button className="casestudy-nav-btn next-btn" aria-label="Next case study">
            <FiArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
