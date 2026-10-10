'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiShield, FiZap, FiHeadphones } from 'react-icons/fi';

export default function AboutSection() {
  return (
    <section className="about-section-wrapper">
      <div className="about-section-container">
        {/* Left Box */}
        <div className="about-left-box">
          <div className="about-left-top">
            {/* Pill Badge */}
            <div className="about-badge-capsule">
              <span className="badge-bullet"></span>
              <span className="badge-text">About Heapvue</span>
            </div>

            {/* Heading */}
            <div className="wespecialize-img-wrapper">
              <h2 className="fw-bold text-dark mb-3" style={{ fontSize: '2rem', lineHeight: 1.3 }}>
                We engineer scalable technology tailored to your business ambitions.
              </h2>
            </div>
          </div>

          {/* Bottom Features Grid - Distinct React Icons instead of repeating feedback.png */}
          <div className="about-features-grid">
            {/* Feature 1 */}
            <div className="feature-item">
              <div className="feature-icon-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0555ff' }}>
                <FiShield size={24} />
              </div>
              <h4 className="feature-title">Security First</h4>
              <p className="feature-desc">
                Architectures built with zero-trust principles and robust data encryption.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-item">
              <div className="feature-icon-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a' }}>
                <FiZap size={24} />
              </div>
              <h4 className="feature-title">High Performance</h4>
              <p className="feature-desc">
                Engineered for low latency, horizontal scalability, and continuous uptime.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-item">
              <div className="feature-icon-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8b5cf6' }}>
                <FiHeadphones size={24} />
              </div>
              <h4 className="feature-title">Dedicated Support</h4>
              <p className="feature-desc">
                Proactive maintenance, SLA guarantees, and ongoing engineering support.
              </p>
            </div>
          </div>
        </div>

        {/* Right Box */}
        <div className="about-right-box">
          <div className="about-right-left-col">
            {/* Value Proposition Card */}
            <div className="about-quote-card">
              <p className="quote-text">
                “Bridging ready-to-deploy software products with bespoke cloud and AI engineering.”
              </p>
              <Link href="/contact" className="btn quote-btn">
                Contact Our Team <FiArrowRight size={14} />
              </Link>
            </div>

            {/* Visual Graphic */}
            <div className="flower-card-wrapper">
              <Image 
                src="/images/flowerdesign.png" 
                alt="Modern technology abstract visual" 
                width={289} 
                height={202} 
                className="flower-img"
              />
            </div>
          </div>

          {/* Team Collaboration Graphic */}
          <div className="twoguys-card-wrapper">
            <Image 
              src="/images/twoguys.png" 
              alt="Engineering collaboration and platform architecture" 
              width={299} 
              height={510} 
              className="twoguys-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
