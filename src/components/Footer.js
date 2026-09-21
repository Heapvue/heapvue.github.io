'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [workEmail, setWorkEmail] = useState('');

  const handleCtaSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Demo requested for: ${email}`);
      setEmail('');
    }
  };

  const handleWorkEmailSubmit = (e) => {
    e.preventDefault();
    if (workEmail) {
      alert(`Work email submitted: ${workEmail}`);
      setWorkEmail('');
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-assembly-wrapper">
      {/* 1. Top Closure CTA Banner Section (1440 Fill x 550) */}
      <section className="cta-banner-wrapper">
        <div className="cta-banner-container">
          {/* Top-Right Striped Graphic (up.png) */}
          <div className="cta-graphic-top-right">
            <Image
              src="/images/up.png"
              alt="Striped graphic design top right"
              width={332}
              height={184}
              className="cta-graphic-img"
              priority
            />
          </div>

          {/* Bottom-Left Striped Graphic (down.png) */}
          <div className="cta-graphic-bottom-left">
            <Image
              src="/images/down.png"
              alt="Striped graphic design bottom left"
              width={332}
              height={184}
              className="cta-graphic-img"
              priority
            />
          </div>

          {/* Centered CTA Content */}
          <div className="cta-content-box">
            {/* Small Box AI Powered (370w x 40h Hug) */}
            <div className="cta-badge-capsule">
              <span className="badge-bullet"></span>
              <span className="badge-text">
                AI-Powered Revenue Intelligence for Modern GTM Teams
              </span>
            </div>

            {/* Main Title (814w x 144h Hug) */}
            <h2 className="cta-main-title">
              Transform Your Vision Into
              <br />
              Digital Reality
            </h2>

            {/* Sub Text (491w x 24h Hug) */}
            <p className="cta-subtext">
              Let's create innovative solutions together that drive your business forward.
            </p>

            {/* Book a Demo Form Box (470w x 47h) */}
            <form onSubmit={handleCtaSubmit} className="cta-form-wrapper">
              <div className="cta-form-container">
                <input
                  type="email"
                  className="cta-email-input"
                  placeholder="Enter your email here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="cta-submit-btn">
                  Book a Demo <FiArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 2. Main Site Footer (1440 Fill x 492) */}
      <footer className="site-footer">
        <div className="site-footer-container">
          <div className="footer-top-grid">
            {/* Left Brand Column */}
            <div className="footer-brand-col">
              {/* Heapvue Logo White (181.4w x 42.59h) */}
              <Link href="/" className="footer-logo-wrapper">
                <Image
                  src="/images/Heapvue_Logo_white.png"
                  alt="Heapvue Logo"
                  width={181}
                  height={43}
                  className="footer-heapvue-logo"
                  priority
                />
              </Link>

              {/* Tagline */}
              <h3 className="footer-tagline">
                Valley AI - LinkedIn Outbound That Books Meetings
              </h3>

              {/* Contact Link */}
              <p className="footer-contact">
                Contact: <a href="mailto:hey@joinvalley.co">hey@joinvalley.co</a>
              </p>

              {/* Work Email Form */}
              <form onSubmit={handleWorkEmailSubmit} className="footer-work-email-form">
                <div className="work-email-box">
                  <input
                    type="email"
                    placeholder="Work Email"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    required
                  />
                  <button type="submit" aria-label="Submit work email">
                    <FiArrowRight size={16} />
                  </button>
                </div>
              </form>
            </div>

            {/* Right Navigation Columns */}
            <div className="footer-links-grid">
              {/* Company */}
              <div className="footer-links-col">
                <h4 className="footer-col-title">Company</h4>
                <ul>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/careers">Careers</Link></li>
                </ul>
              </div>

              {/* Products */}
              <div className="footer-links-col">
                <h4 className="footer-col-title">Products</h4>
                <ul>
                  <li><Link href="/services">Personalization</Link></li>
                  <li><Link href="/pricing">Pricing</Link></li>
                </ul>
              </div>

              {/* Resources */}
              <div className="footer-links-col">
                <h4 className="footer-col-title">Resources</h4>
                <ul>
                  <li><Link href="/roi-calculator">ROI Calculator</Link></li>
                  <li><Link href="/examples">Messaging Examples</Link></li>
                  <li><Link href="/fit">Is Valley a fit for me?</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                </ul>
              </div>

              {/* Socials */}
              <div className="footer-links-col">
                <h4 className="footer-col-title">Socials</h4>
                <ul>
                  <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                  <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Enabled</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Legal */}
          <div className="footer-bottom-bar">
            <p className="copyright-text">
              &copy; {currentYear} HEAPVUE. ALL RIGHTS RESERVED
            </p>
            <div className="legal-links">
              <Link href="/privacy">PRIVACY POLICY</Link>
              <Link href="/terms">TERMS OF SERVICES</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
