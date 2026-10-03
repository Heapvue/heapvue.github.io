'use client';

import React from 'react';
import Image from 'next/image';

const aiServices = [
  {
    id: 1,
    title: 'AI strategy and opportunity assessment',
    description: 'Identify high-value AI opportunities and build a practical roadmap aligned with business goals.',
    bg: '/images/bluebg.png',
  },
  {
    id: 2,
    title: 'Generative AI consulting',
    description: 'Design practical generative AI solutions that improve productivity and business outcomes.',
    bg: '/images/greenbg.png',
  },
  {
    id: 3,
    title: 'Conversational AI and intelligent chatbots',
    description: 'Build intelligent chatbots that enhance interactions and deliver personalised experiences.',
    bg: '/images/bluebg.png',
  },
  {
    id: 4,
    title: 'Retrieval-Augmented Generation (RAG) solutions',
    description: 'Connect AI models with trusted data to deliver accurate and contextual responses.',
    bg: '/images/greenbg.png',
  },
  {
    id: 5,
    title: 'AI-powered customer support and virtual assistants',
    description: 'Enable smarter customer support with faster, personalised, and intelligent assistance.',
    bg: '/images/bluebg.png',
  },
  {
    id: 6,
    title: 'Workflow automation using AI',
    description: 'Automate repetitive workflows to improve efficiency, productivity, and operational performance.',
    bg: '/images/bluebg.png',
  },
  {
    id: 7,
    title: 'AI integration with existing business systems',
    description: 'Integrate AI with existing systems to enhance capabilities & streamline business operations.',
    bg: '/images/bluebg.png',
  },
  {
    id: 8,
    title: 'AI product strategy and architecture',
    description: 'Define scalable AI strategies and architectures built for performance and long-term growth.',
    bg: '/images/greenbg.png',
  },
  {
    id: 9,
    title: 'Proof of Concept (PoC) development and validation',
    description: 'Validate AI ideas through working prototypes before investing in full-scale implementation.',
    bg: '/images/bluebg.png',
  },
];

export default function ServicesGridSection() {
  return (
    <section className="consulting-grid-wrapper">
      <div className="consulting-grid-container">
        {/* Top Header Box */}
        <div className="consulting-grid-header">
          <div className="consulting-grid-header-left">
            <div className="consulting-grid-badge">
              <span className="badge-bullet" />
              <span className="badge-text">How We Help</span>
            </div>
            <h2 className="consulting-grid-main-title">
              From AI Strategy to
              <br />
              <span className="blue-italic-text">Real-World Solutions.</span>
            </h2>
          </div>

          <div className="consulting-grid-header-right">
            <p className="consulting-grid-header-desc">
              Our AI consulting services help organisations explore, plan, and implement AI solutions that address real business challenges. Our expertise includes:
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="consulting-cards-grid">
          {aiServices.map((service) => (
            <div
              key={service.id}
              className="consulting-service-card"
              style={{ backgroundImage: `url('${service.bg}')` }}
            >
              <div className="consulting-card-icon">
                <Image
                  src="/images/con3.png"
                  alt="AI Icon"
                  width={42}
                  height={42}
                  style={{ objectFit: 'contain' }}
                />
              </div>

              <div className="consulting-card-body">
                <h3 className="consulting-card-title">{service.title}</h3>
                <p className="consulting-card-desc">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Subtext */}
        <p className="consulting-grid-footer-text">
          Our focus is on building AI solutions that improve efficiency, enhance customer experience, and create sustainable business value.
        </p>
      </div>
    </section>
  );
}
