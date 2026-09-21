'use client';

import Link from 'next/link';

export default function OurMissionSection() {
  return (
    <section className="our-mission-wrapper">
      <div className="our-mission-container">
        {/* Top Pill Badge Capsule */}
        <div className="mission-badge-capsule">
          <span className="badge-bullet"></span>
          <span className="badge-text">Our Mission</span>
        </div>

        {/* Main Heading */}
        <h2 className="mission-main-title">
          Transforming Businesses
          <br />
          Through <span className="mission-highlight">Intelligent Technology</span>
        </h2>

        {/* Subtext Paragraph */}
        <p className="mission-subtext">
          Heapvue is redefining how modern businesses scale through AI, machine learning, cloud computing, and intelligent automation. We help organizations streamline operations, improve decision-making, and unlock new growth opportunities with future-ready digital solutions.
        </p>

        {/* Bottom Careers Button */}
        <div className="mission-btn-wrapper">
          <Link href="/careers" className="btn mission-careers-btn">
            Looking for Careers?
          </Link>
        </div>
      </div>
    </section>
  );
}
