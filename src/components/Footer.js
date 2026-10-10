'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import {
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaFacebookF
} from 'react-icons/fa6';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleCtaSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Demo requested for: ${email}`);
      setEmail('');
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      alert(`Subscribed to newsletter: ${newsletterEmail}`);
      setNewsletterEmail('');
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

            {/* Sub Text (Reduced to fit in one line across all resolutions) */}
            <p className="cta-subtext">
              Let's create innovative solutions for your business.
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

              {/* Subtext */}
              <h3 className="footer-tagline">
                Where Innovation Meets Organization
              </h3>

              {/* Subscribe Newsletter Form */}
              <form onSubmit={handleNewsletterSubmit} className="footer-work-email-form">
                <div className="work-email-box">
                  <input
                    type="email"
                    placeholder="Subscribe newsletter"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                  />
                  <button type="submit" aria-label="Subscribe to newsletter">
                    <FiArrowRight size={18} />
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
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/careers">Careers</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                </ul>
              </div>

              {/* Products */}
              <div className="footer-links-col">
                <h4 className="footer-col-title">Products</h4>
                <ul>
                  <li><a href="https://vuecart.heapvue.com/in-en" target="_blank" rel="noopener noreferrer">Vuecart</a></li>
                  <li><a href="https://heapsync.heapvue.com/" target="_blank" rel="noopener noreferrer">Heapsync</a></li>
                  <li><a href="https://chatpress.heapvue.com/" target="_blank" rel="noopener noreferrer">Chatpress</a></li>
                  <li><a href="https://apptuner.dev/" target="_blank" rel="noopener noreferrer">Apptuner</a></li>
                  <li><a href="https://learnly.heapvue.com/" target="_blank" rel="noopener noreferrer">Learnly</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div className="footer-links-col">
                <h4 className="footer-col-title">Resources</h4>
                <ul>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/solutions">Solutions</Link></li>
                  <li><Link href="/consulting">Consulting</Link></li>
                  <li><Link href="/industries">Industries</Link></li>
                </ul>
              </div>

              {/* Socials - Icon Buttons */}
              <div className="footer-links-col footer-socials-col">
                <h4 className="footer-col-title">Socials</h4>
                <div className="footer-social-icons">
                  <a
                    href="https://www.linkedin.com/company/heapvue/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="footer-social-btn"
                  >
                    <FaLinkedinIn size={16} />
                  </a>
                  <a
                    href="https://x.com/heapvue"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                    className="footer-social-btn"
                  >
                    <FaXTwitter size={15} />
                  </a>
                  <a
                    href="https://www.instagram.com/heapvue/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="footer-social-btn"
                  >
                    <FaInstagram size={16} />
                  </a>
                  <a
                    href="https://www.facebook.com/heapvue"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="footer-social-btn"
                  >
                    <FaFacebookF size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Legal (Small letters, no underlines) */}
          <div className="footer-bottom-bar">
            <p className="copyright-text">
              &copy; {currentYear} Heapvue. All rights reserved.
            </p>
            <div className="legal-links">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Services</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
