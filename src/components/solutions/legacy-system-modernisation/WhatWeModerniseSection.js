'use client';

import React from 'react';
import Image from 'next/image';

const moderniseItems = [
  {
    id: 1,
    title: 'Migrating outdated technology stacks to modern frameworks',
    description: 'Transition legacy software and outdated programming frameworks to active, high-performance tech stacks for long-term maintainability.',
    icon: '/images/sol1.png',
    alt: 'Migrating outdated technology stacks to modern frameworks',
  },
  {
    id: 2,
    title: 'Redesigning system architecture for scalability',
    description: 'Re-architecting software structures into scalable cloud architectures designed to adapt effortlessly as business demands increase.',
    icon: '/images/sol2.png',
    alt: 'Redesigning system architecture for scalability',
  },
  {
    id: 3,
    title: 'Improving security and protecting sensitive data',
    description: 'Fortifying security layers, patching vulnerabilities, and safeguarding critical organizational data against modern cyber threats.',
    icon: '/images/sol3.png',
    alt: 'Improving security and protecting sensitive data',
  },
  {
    id: 4,
    title: 'Integrating legacy systems with modern applications and APIs',
    description: 'Exposing APIs and building middleware connectors to seamlessly link legacy databases with modern SaaS and cloud tools.',
    icon: '/images/sol1.png',
    alt: 'Integrating legacy systems with modern applications and APIs',
  },
  {
    id: 5,
    title: 'Eliminating instability caused by outdated plugins or components',
    description: 'Removing vulnerable third-party plugins and legacy extensions, replacing them with custom stable components.',
    icon: '/images/sol2.png',
    alt: 'Eliminating instability caused by outdated plugins or components',
  },
  {
    id: 6,
    title: 'Improving system performance and reliability',
    description: 'Optimizing code execution, query performance, and server response times to deliver high availability and smooth user experiences.',
    icon: '/images/sol3.png',
    alt: 'Improving system performance and reliability',
  },
];

export default function WhatWeModerniseSection() {
  return (
    <section className="platforms-build-wrapper">
      <div className="platforms-build-container">
        {/* Top Header Box */}
        <div className="platforms-header-box">
          {/* Left Title Box */}
          <div className="platforms-header-left">
            <div className="platforms-badge-capsule">
              <span className="badge-bullet"></span>
              <span className="badge-text">What We Modernise</span>
            </div>
            <h2 className="platforms-main-title">
              What We Help <span className="blue-italic-text">Organisations Modernise</span>
            </h2>
          </div>

          {/* Right Description Box */}
          <div className="platforms-header-right">
            <p className="platforms-header-desc">
              Legacy modernisation can involve several improvements depending on the organisation’s needs. Our approach focuses on retaining the core value of existing systems while upgrading them for long-term sustainability.
            </p>
          </div>
        </div>

        {/* 6 Icons Grid Box */}
        <div className="platforms-grid-box">
          {moderniseItems.map((item) => (
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
