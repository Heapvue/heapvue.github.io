'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiPlus, FiMinus } from 'react-icons/fi';

const defaultFaqData = [
  {
    id: 1,
    question: "Are Heapvue's messages really personalized, or just sophisticated templates?",
    answer: "Every Heapvue message is based on 60+ data points of research - recent LinkedIn posts, company news, podcast appearances, funding rounds, job changes, mutual connections. The AI references what the prospect actually cares about, in your voice.",
  },
  {
    id: 2,
    question: "Does Heapvue find leads, or do I provide lists?",
    answer: "Heapvue can do both. Our AI continuously scans buying signals to discover high-intent leads automatically, or you can import existing target account lists to enrich and sequence.",
  },
  {
    id: 3,
    question: "Will my LinkedIn account get restricted?",
    answer: "No. Heapvue enforces human-like delay patterns, cloud-based dedicated IP addresses, and safety limits that strictly adhere to platform usage terms.",
  },
  {
    id: 4,
    question: "What does Heapvue replace in my current stack?",
    answer: "Heapvue replaces separate data enrichment subscriptions, manual outreach tools, and sales intelligence add-ons into one unified AI automation workflow.",
  },
  {
    id: 5,
    question: "How fast can we get onboarded and start generating meetings?",
    answer: "Most teams are fully onboarded and launching their first automated AI campaigns within less than 24 hours.",
  },
];

export default function FaqSection({ customFaqs }) {
  const faqs = customFaqs || defaultFaqData;
  const [openId, setOpenId] = useState(1); // Item 1 open by default

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section-wrapper">
      <div className="faq-container">
        {/* Main 2-Column Box (1200w x 586h) */}
        <div className="faq-main-box">
          {/* Left Column (Question Title & Half-cut Logo) */}
          <div className="faq-left-column">
            <div className="faq-left-top">
              {/* Badge Capsule */}
              <div className="faq-badge-capsule">
                <span className="badge-bullet"></span>
                <span className="badge-text">Book an Appointment</span>
              </div>

              {/* Left Title Block (303w x 164h Hug) */}
              <h2 className="faq-title">
                Have <span className="faq-highlight">Questions</span>?
                <br />
                We got Answers
              </h2>
            </div>

            {/* Bottom Half-cut Logo Image (418w x 292h) */}
            <div className="faq-logo-wrapper">
              <Image
                src="/images/qlogo.png"
                alt="Heapvue Q Emblem"
                width={418}
                height={292}
                className="faq-qlogo-img"
              />
            </div>
          </div>

          {/* Right Column Accordion (598w x 726h) */}
          <div className="faq-right-column">
            {faqs.map((item, index) => {
              const itemId = item.id || index + 1;
              const isOpen = openId === itemId;
              return (
                <div
                  key={itemId}
                  className={`faq-accordion-item ${isOpen ? 'active' : ''}`}
                  onClick={() => toggleFaq(itemId)}
                >
                  <div className="faq-accordion-header">
                    <h3 className="faq-question">{item.question}</h3>
                    <button className="faq-toggle-btn" aria-label="Toggle answer">
                      {isOpen ? <FiMinus size={18} /> : <FiPlus size={18} />}
                    </button>
                  </div>

                  {isOpen && (
                    <div className="faq-accordion-content">
                      <p className="faq-answer">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

