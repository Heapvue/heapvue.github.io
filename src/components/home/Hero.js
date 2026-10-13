'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  FiArrowRight,
  FiBox,
  FiCpu,
  FiCloud,
  FiShield,
  FiX
} from 'react-icons/fi';
import { BsStars } from 'react-icons/bs';
import { IoSend } from 'react-icons/io5';

const QUICK_PROMPTS = [
  'Deploy VueCart E-Commerce',
  'Explore HeapSync CRM',
  'Cloud Architecture & Modernization'
];

export default function Hero() {
  const [inputValue, setInputValue] = useState('');

  const handleSelectPrompt = (promptText) => {
    setInputValue(promptText);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const val = inputValue.toLowerCase();
    if (val.includes('vuecart') || val.includes('product') || val.includes('e-commerce')) {
      window.location.href = '/products';
    } else if (val.includes('crm') || val.includes('heapsync')) {
      window.location.href = '/products';
    } else {
      window.location.href = '/solutions';
    }
  };

  const handleClear = () => {
    setInputValue('');
  };

  return (
    <div className="hero-content">
      {/* Top Section: Refined Headline */}
      <div className="hero-top-block">
        <h1 className="hero-main-title single-line">
          Intelligent Technology Solutions
        </h1>
      </div>

      {/* Center Section: Enlarged ChatPress Console */}
      <div className="hero-center-block">
        <div className="hero-ai-console-wrapper">
          <form onSubmit={handleFormSubmit} className="hero-ai-form-row">
            {/* Pill container with animated moving light beam */}
            <div className="hero-ai-pill-light-box">
              <div className="hero-ai-light-beam" aria-hidden="true"></div>
              <div className="hero-ai-input-rounded">
                <BsStars className="hero-ai-star-icon" size={28} />
                <input
                  type="text"
                  className="hero-ai-input"
                  placeholder="Ask ChatPress"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                {inputValue && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="hero-ai-clear-btn"
                    aria-label="Clear input"
                  >
                    <FiX size={20} />
                  </button>
                )}
              </div>
            </div>

            {/* Outside Rounded Send Button with Plane Icon (No hover effects) */}
            <button
              type="submit"
              className="hero-ai-send-btn-outside"
              aria-label="Send query"
            >
              <IoSend size={26} />
            </button>
          </form>

          {/* 3 Suggestions Related to Products & Services */}
          <div className="hero-ai-chips-container">
            {QUICK_PROMPTS.map((promptText, idx) => (
              <button
                key={idx}
                type="button"
                className="hero-ai-chip"
                onClick={() => handleSelectPrompt(promptText)}
              >
                {promptText}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: 4 Business Offering Cards */}
      <div className="hero-bottom-block">
        <div className="hero-quad-cards-grid">
          {/* Card 1: SaaS Products */}
          <div className="hero-quad-card">
            <div className="hero-quad-icon">
              <FiBox size={20} />
            </div>
            <h3 className="hero-quad-title">
              VueCart &amp; HeapSync Enterprise Suite
            </h3>
            <p className="hero-quad-desc">
              Deploy specialized business SaaS platforms including headless e-commerce, CRM, and automated LMS.
            </p>
            <Link href="/products" className="hero-quad-link">
              <span>Know More</span>
              <FiArrowRight size={14} />
            </Link>
          </div>

          {/* Card 2: AI Engineering */}
          <div className="hero-quad-card">
            <div className="hero-quad-icon">
              <FiCpu size={20} />
            </div>
            <h3 className="hero-quad-title">
              Enterprise AI &amp; Autonomous LLM Systems
            </h3>
            <p className="hero-quad-desc">
              Engineer bespoke domain models, multi-agent workflows, and intelligent semantic automation.
            </p>
            <Link href="/solutions" className="hero-quad-link">
              <span>Know More</span>
              <FiArrowRight size={14} />
            </Link>
          </div>

          {/* Card 3: Cloud Modernization */}
          <div className="hero-quad-card">
            <div className="hero-quad-icon">
              <FiCloud size={20} />
            </div>
            <h3 className="hero-quad-title">
              Cloud Modernization &amp; DevOps at Scale
            </h3>
            <p className="hero-quad-desc">
              Architect resilient multi-cloud microservices, Kubernetes clusters, and automated CI/CD pipelines.
            </p>
            <Link href="/solutions" className="hero-quad-link">
              <span>Know More</span>
              <FiArrowRight size={14} />
            </Link>
          </div>

          {/* Card 4: Security & Compliance */}
          <div className="hero-quad-card">
            <div className="hero-quad-icon">
              <FiShield size={20} />
            </div>
            <h3 className="hero-quad-title">
              Zero-Trust Architecture &amp; Data Compliance
            </h3>
            <p className="hero-quad-desc">
              Implement enterprise identity governance, encrypted audit logs, and regulatory compliance protocols.
            </p>
            <Link href="/solutions" className="hero-quad-link">
              <span>Know More</span>
              <FiArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
