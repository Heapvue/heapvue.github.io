'use client';

import React from 'react';
import Image from 'next/image';

const aiBuildItems = [
  {
    id: 1,
    title: 'AI-powered conversational assistants',
    description: 'Build context-aware conversational bots to interact with users, answer complex queries, and guide customer journeys in real time.',
    icon: '/images/sol1.png',
    alt: 'AI-powered conversational assistants',
  },
  {
    id: 2,
    title: 'Intelligent customer support systems',
    description: 'Automate customer service desk interactions, support ticketing, and issue resolution with intelligent AI systems.',
    icon: '/images/sol2.png',
    alt: 'Intelligent customer support systems',
  },
  {
    id: 3,
    title: 'Knowledge retrieval and information assistants',
    description: 'Enable instant knowledge search across enterprise documentation using RAG-based AI search and retrieval engines.',
    icon: '/images/sol3.png',
    alt: 'Knowledge retrieval and information assistants',
  },
  {
    id: 4,
    title: 'Voice-to-text and language processing systems',
    description: 'Convert voice inputs across multiple languages with automated grammar correction, translation, and text synthesis.',
    icon: '/images/sol1.png',
    alt: 'Voice-to-text and language processing systems',
  },
  {
    id: 5,
    title: 'AI-powered recommendation engines',
    description: 'Deliver personalized product and content recommendations based on real-time customer behavior and historical data.',
    icon: '/images/sol2.png',
    alt: 'AI-powered recommendation engines',
  },
  {
    id: 6,
    title: 'Automation of repetitive workflows using intelligent systems',
    description: 'Streamline repetitive manual tasks, data entry, and multi-step operational processes with autonomous AI agents.',
    icon: '/images/sol3.png',
    alt: 'Automation of repetitive workflows using intelligent systems',
  },
];

export default function WhatWeAutomateSection() {
  return (
    <section className="platforms-build-wrapper">
      <div className="platforms-build-container">
        {/* Top Header Box */}
        <div className="platforms-header-box">
          {/* Left Title Box */}
          <div className="platforms-header-left">
            <div className="platforms-badge-capsule">
              <span className="badge-bullet"></span>
              <span className="badge-text">What We Build</span>
            </div>
            <h2 className="platforms-main-title">
              Practical AI Solutions We <span className="blue-italic-text">Design</span>
              <br />
              and <span className="blue-italic-text">Deploy</span>
            </h2>
          </div>

          {/* Right Description Box */}
          <div className="platforms-header-right">
            <p className="platforms-header-desc">
              Our AI solutions are designed to integrate seamlessly with business processes and digital platforms. Our focus is on building practical AI applications that improve user experience and reduce operational workload.
            </p>
          </div>
        </div>

        {/* 6 Icons Grid Box */}
        <div className="platforms-grid-box">
          {aiBuildItems.map((item) => (
            <div key={item.id} className="platform-card-item">
              <div className="platform-icon-box">
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={141}
                  height={141}
                  className="platform-icon-img"
                />
              </div>
              <h3 className="platform-card-title">{item.title}</h3>
              <p className="platform-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
