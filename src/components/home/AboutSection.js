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

            {/* Heading with upright normal accent text */}
            <h2 className="about-heading">
              We specialize in creating<br />
              software solutions that are<br />
              tailored to your{' '}
              <span className="about-heading-accent">
                unique<br />business needs.
              </span>
            </h2>
          </div>

          {/* Bottom Features Grid */}
          <div className="about-features-grid">
            {/* Feature 1: Security */}
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <FiShield size={26} color="#0052ff" strokeWidth={2.2} />
              </div>
              <div className="feature-text-wrapper">
                <h4 className="feature-title">Security</h4>
                <p className="feature-desc">
                  Zero-trust security architectures and automated threat mitigation to protect your critical systems.
                </p>
              </div>
            </div>

            {/* Feature 2: Performance */}
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <FiZap size={26} color="#0052ff" strokeWidth={2.2} />
              </div>
              <div className="feature-text-wrapper">
                <h4 className="feature-title">Performance</h4>
                <p className="feature-desc">
                  Proactive system monitoring and continuous infrastructure optimization for dependable application resilience.
                </p>
              </div>
            </div>

            {/* Feature 3: Support */}
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <FiHeadphones size={26} color="#0052ff" strokeWidth={2.2} />
              </div>
              <div className="feature-text-wrapper">
                <h4 className="feature-title">Support</h4>
                <p className="feature-desc">
                  Dedicated engineering advisory and responsive ongoing support to keep your systems running smoothly.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Box */}
        <div className="about-right-box">
          <div className="about-right-left-col">
            {/* Blue Quote Card */}
            <div className="about-quote-card">
              <p className="quote-text">
                “We now rely on Heapvue for all our intelligent software solutions.”
              </p>
              <Link href="/contact" className="quote-btn">
                Book a demo <FiArrowRight size={15} />
              </Link>
            </div>

            {/* Flower Visual Graphic */}
            <div className="flower-card-wrapper">
              <Image 
                src="/images/flowerdesign.png" 
                alt="Modern technology abstract visual" 
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="flower-img"
              />
            </div>
          </div>

          {/* Team Collaboration Graphic */}
          <div className="twoguys-card-wrapper">
            <Image 
              src="/images/twoguys.png" 
              alt="Engineering collaboration and platform architecture" 
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="twoguys-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
