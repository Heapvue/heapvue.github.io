'use client';

import { useState, useEffect, useRef } from 'react';
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
  'Deploy Vuecart E-Commerce',
  'Explore Heapsync CRM',
  'Cloud Architecture & Modernization'
];

const RANDOM_QUESTIONS = [
  'How can AI & LLMs automate our business workflows?',
  'What enterprise features are included in Vuecart?',
  'How do we modernize our legacy systems with Heapvue?',
  'Can you build custom autonomous AI agents for us?',
  'How does Heapsync compare to enterprise CRMs?',
  'How can we scale our cloud infrastructure with DevOps?',
  'Can Heapvue develop a modern mobile app for us?',
  'How do we schedule a technical architecture consultation?',
];

export default function Hero() {
  const [inputValue, setInputValue] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const inputRef = useRef(null);

  // Typing effect animation loop
  useEffect(() => {
    // When user has typed something, pause typing animation
    if (inputValue) return;

    const currentFullText = RANDOM_QUESTIONS[questionIndex];
    let timeout;

    if (!isDeleting) {
      // Typing mode
      if (typedText.length < currentFullText.length) {
        timeout = setTimeout(() => {
          setTypedText(currentFullText.slice(0, typedText.length + 1));
        }, 45);
      } else {
        // Full question completed, pause before erasing
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      // Deleting mode
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(currentFullText.slice(0, typedText.length - 1));
        }, 25);
      } else {
        // Erased completely, pick a different random question
        setIsDeleting(false);
        setQuestionIndex((prevIndex) => {
          let nextIndex;
          do {
            nextIndex = Math.floor(Math.random() * RANDOM_QUESTIONS.length);
          } while (nextIndex === prevIndex && RANDOM_QUESTIONS.length > 1);
          return nextIndex;
        });
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, questionIndex, inputValue]);

  const handleSelectPrompt = (promptText) => {
    setInputValue(promptText);
    inputRef.current?.focus();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const query = inputValue.trim() || typedText.trim() || RANDOM_QUESTIONS[questionIndex];
    if (!query) return;

    const val = query.toLowerCase();
    if (val.includes('vuecart') || val.includes('product') || val.includes('e-commerce') || val.includes('heapsync') || val.includes('crm')) {
      window.location.href = '/products';
    } else {
      window.location.href = '/solutions';
    }
  };

  const handleClear = () => {
    setInputValue('');
    inputRef.current?.focus();
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
                <div className="hero-ai-field-container">
                  <input
                    ref={inputRef}
                    type="text"
                    className="hero-ai-input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  {/* Animated typing question: remains visible on focus until user actually types */}
                  {!inputValue && (
                    <div 
                      className="hero-ai-typing-placeholder"
                      onClick={() => inputRef.current?.focus()}
                      aria-hidden="true"
                    >
                      <span className="typing-text">{typedText}</span>
                      <span className="typing-cursor">|</span>
                    </div>
                  )}
                </div>
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
              Vuecart &amp; Heapsync Enterprise Suite
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
