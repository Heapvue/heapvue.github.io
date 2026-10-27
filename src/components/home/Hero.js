'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { openFloatingChat } from '@/lib/chatHandoff';
import {
  FiArrowRight,
  FiBox,
  FiCpu,
  FiCloud,
  FiShield,
  FiX,
  FiShoppingCart,
  FiUsers
} from 'react-icons/fi';
import { BsStars } from 'react-icons/bs';
import { IoSend } from 'react-icons/io5';

// Short labels for the chips, full questions for the assistant (bare labels retrieve poorly).
const QUICK_PROMPTS = [
  { label: 'Vuecart e-commerce', icon: FiShoppingCart, query: 'What is Vuecart and how can it power our online store?' },
  { label: 'Heapsync CRM', icon: FiUsers, query: 'What can Heapsync CRM do for our sales team?' },
  { label: 'Custom AI agents', icon: FiCpu, query: 'Can Heapvue build custom AI agents to automate our business workflows?' },
  { label: 'Cloud modernization', icon: FiCloud, query: 'How can Heapvue help us modernize and scale our cloud infrastructure?' }
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

  // The conversation lives in the floating chat: asking here opens it and the chat continues there.
  const askAssistant = (rawQuery) => {
    const query = rawQuery.trim();
    if (!query) return;
    setInputValue('');
    openFloatingChat(query, 'hero');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // An empty submit asks the question being typed out in the placeholder.
    askAssistant(inputValue.trim() || RANDOM_QUESTIONS[questionIndex]);
  };

  const handleClear = () => {
    setInputValue('');
    inputRef.current?.focus();
  };

  return (
    <div className="hero-content">
      {/* Top Section: Headline */}
      <div className="hero-top-block">
        <h1 className="hero-main-title single-line">Intelligent Technology Solutions</h1>
        <p className="hero-subtitle">
          Modular software platforms and custom engineering built for growing businesses and modern teams.
        </p>
      </div>

      {/* Center Section: Chatpress Console */}
      <div className="hero-center-block">
        <div className="hero-ai-console-wrapper">
          <form onSubmit={handleFormSubmit} className="hero-ai-form-row">
            {/* Pill container with animated moving light beam */}
            <div className="hero-ai-pill-light-box">
              <div className="hero-ai-light-beam" aria-hidden="true"></div>
              <div className="hero-ai-input-rounded">
                <BsStars className="hero-ai-star-icon" size={24} />
                <div className="hero-ai-field-container">
                  <input
                    ref={inputRef}
                    type="text"
                    aria-label="Ask Heapvue AI"
                    maxLength={1000}
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
                    <FiX size={18} />
                  </button>
                )}
                <button type="submit" className="hero-ai-send-btn" aria-label="Send question">
                  <IoSend size={20} />
                </button>
              </div>
            </div>
          </form>

          {/* Suggestions related to products & services: one click asks the question in the floating chat */}
          <div className="hero-ai-chips-container">
            <span className="hero-ai-chips-label">Try asking about</span>
            {QUICK_PROMPTS.map(({ label, icon: Icon, query }) => (
              <button
                key={label}
                type="button"
                className="hero-ai-chip"
                onClick={() => askAssistant(query)}
              >
                <Icon size={14} aria-hidden="true" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: 4 Business Offering Cards */}
      <div className="hero-bottom-block">
        {/* Mobile visual scroll cue */}
        <div className="hero-mobile-scroll-cue d-lg-none" aria-hidden="true">
          <span className="scroll-cue-text">Swipe to explore offerings</span>
          <FiArrowRight size={13} className="scroll-cue-arrow" />
        </div>

        <div className="hero-quad-cards-grid">

          {/* Card 1: SaaS Products */}
          <div className="hero-quad-card">
            <div className="hero-quad-icon">
              <FiBox size={20} />
            </div>
            <h3 className="hero-quad-title">
              Vuecart &amp; Heapsync Business Platforms
            </h3>
            <p className="hero-quad-desc">
              Deploy modular business software platforms including headless e-commerce, CRM, and automated LMS.
            </p>
            <a href="https://Vuecart.heapvue.com/in-en" target="_blank" rel="noopener noreferrer" className="hero-quad-link">
              <span>Know More</span>
              <FiArrowRight size={14} />
            </a>
          </div>

          {/* Card 2: AI Engineering */}
          <div className="hero-quad-card">
            <div className="hero-quad-icon">
              <FiCpu size={20} />
            </div>
            <h3 className="hero-quad-title">
              AI Engineering &amp; Autonomous LLM Systems
            </h3>
            <p className="hero-quad-desc">
              Engineer bespoke domain models, multi-agent workflows, and intelligent semantic automation.
            </p>
            <Link href="/solutions/ai-intelligent-automation" className="hero-quad-link">
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
            <Link href="/solutions/legacy-system-modernisation" className="hero-quad-link">
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
            <Link href="/solutions/system-integration-security" className="hero-quad-link">
              <span>Know More</span>
              <FiArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
