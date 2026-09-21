'use client';

import React from 'react';
import Image from 'next/image';

const engagementItems = [
  {
    id: 1,
    title: 'AI Customer Assistant for a Nutraceutical Company',
    description:
      'Designed and implemented a RAG-based AI assistant that answers customer questions, provides product information, and delivers personalised recommendations.',
    image: '/images/con4.png',
    alt: 'AI Customer Assistant for a Nutraceutical Company',
  },
  {
    id: 2,
    title: 'AI Product Strategy for a Multilingual Platform',
    description:
      'Developed the AI architecture and product roadmap for a multilingual voice-to-text application capable of language translation and grammar correction.',
    image: '/images/con5.png',
    alt: 'AI Product Strategy for a Multilingual Platform',
  },
  {
    id: 3,
    title: 'AI Opportunity Assessment',
    description:
      'Worked with organisations to identify practical AI use cases, evaluate feasibility, and develop implementation roadmaps aligned with business goals.',
    image: '/images/con6.png',
    alt: 'AI Opportunity Assessment',
  },
];

export default function ConsultingEngagementsSection() {
  return (
    <section className="consulting-engagements-wrapper">
      <div className="consulting-engagements-container">
        {/* Top Header Box (1201 x 148 Hug) */}
        <div className="engagements-header-box">
          {/* Left Title Box */}
          <div className="engagements-header-left">
            <div className="engagements-badge-capsule">
              <span className="badge-bullet" />
              <span className="badge-text">How We Enable Healthcare</span>
            </div>
            <h2 className="engagements-main-title">
              Typical Engagements in
              <br />
              <span className="blue-italic-text">AI Consulting</span>
            </h2>
          </div>

          {/* Right Description Box */}
          <div className="engagements-header-right">
            <p className="engagements-header-desc">
              From strategy and automation to intelligent products, Heapvue helps organisations turn AI opportunities into practical, scalable solutions.
            </p>
          </div>
        </div>

        {/* 3 Cards Block (1199 x 531 Hug - Each card 392 x 531) */}
        <div className="engagements-cards-block">
          {engagementItems.map((item) => (
            <div key={item.id} className="engagement-card-item">
              {/* Top Image Box (365 x 225) */}
              <div className="engagement-card-img-box">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={365}
                  height={225}
                  className="engagement-card-img"
                  priority
                />
              </div>

              {/* Body Content */}
              <div className="engagement-card-body">
                <div className="blue-dash-line" />
                <h3 className="engagement-card-title">{item.title}</h3>
                <p className="engagement-card-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
