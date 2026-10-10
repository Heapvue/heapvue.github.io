'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiPlus, FiMinus } from 'react-icons/fi';

const defaultFaqData = [
  {
    id: 1,
    question: 'What is Heapvue’s hybrid technology model?',
    answer: 'Heapvue combines ready-to-deploy proprietary software products (like VueCart, HeapSync, and ChatPress) with bespoke cloud and AI engineering capabilities. Clients can deploy pre-built platforms rapidly, build custom architectures, or customize a hybrid solution.',
  },
  {
    id: 2,
    question: 'How do you handle data privacy and security?',
    answer: 'All architectures are built with zero-trust security foundations, end-to-end encryption, and role-based access controls designed to comply with DPDP, GDPR, and HIPAA regulatory frameworks.',
  },
  {
    id: 3,
    question: 'Can Heapvue integrate with our existing enterprise stack?',
    answer: 'Yes. We specialize in building secure API gateways, middleware connectors, and cloud telemetry linking natively with Microsoft Sentinel, Datadog, Splunk, Elastic, and other enterprise systems.',
  },
  {
    id: 4,
    question: 'How can we schedule a technical discovery call?',
    answer: 'You can submit an inquiry through our Contact page. Our solutions architects will review your requirements and coordinate an introductory session within 24 business hours.',
  },
];

export default function FaqSection({ customFaqs }) {
  const faqs = customFaqs || defaultFaqData;
  const [openId, setOpenId] = useState(1); // Item 1 open by default

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="faq-section-wrapper">
      {/* Dynamic JSON-LD Schema for FAQs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="faq-container">
        {/* Main 2-Column Box */}
        <div className="faq-main-box">
          {/* Left Column */}
          <div className="faq-left-column">
            <div className="faq-left-top">
              {/* Badge Capsule */}
              <div className="faq-badge-capsule">
                <span className="badge-bullet"></span>
                <span className="badge-text">Frequently Asked Questions</span>
              </div>

              {/* Left Title Block */}
              <h2 className="faq-title">
                Have <span className="faq-highlight">Questions</span>?
                <br />
                We Got Answers
              </h2>
            </div>

            {/* Bottom Half-cut Logo Image */}
            <div className="faq-logo-wrapper">
              <Image
                src="/images/qlogo.png"
                alt="Heapvue Emblem"
                width={418}
                height={292}
                className="faq-qlogo-img"
              />
            </div>
          </div>

          {/* Right Column Accordion */}
          <div className="faq-right-column">
            {faqs.map((item, index) => {
              const itemId = item.id || index + 1;
              const isOpen = openId === itemId;

              return (
                <div
                  key={itemId}
                  className={`faq-accordion-item ${isOpen ? 'active' : ''}`}
                >
                  <button
                    className="faq-accordion-header"
                    onClick={() => toggleFaq(itemId)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{item.question}</span>
                    <span className="faq-icon-wrapper">
                      {isOpen ? (
                        <FiMinus className="faq-icon-svg" />
                      ) : (
                        <FiPlus className="faq-icon-svg" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-accordion-body">
                      <p className="faq-answer-text">{item.answer}</p>
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
