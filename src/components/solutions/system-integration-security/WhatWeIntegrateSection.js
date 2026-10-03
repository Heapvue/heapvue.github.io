'use client';

import React from 'react';
import Image from 'next/image';

const integrationAchieveItems = [
  {
    id: 1,
    title: 'Connect multiple software systems through secure integrations',
    description: 'Link independent software applications via secure API gateways and robust middleware connections.',
    icon: '/images/sol1.png',
    alt: 'Connect multiple software systems through secure integrations',
  },
  {
    id: 2,
    title: 'Enable seamless data exchange across platforms',
    description: 'Synchronize information across disparate databases and cloud tools for real-time operational visibility.',
    icon: '/images/sol2.png',
    alt: 'Enable seamless data exchange across platforms',
  },
  {
    id: 3,
    title: 'Improve operational efficiency by reducing manual data handling',
    description: 'Eliminate manual duplicate data entry and human error through automated data transfer pipelines.',
    icon: '/images/sol3.png',
    alt: 'Improve operational efficiency by reducing manual data handling',
  },
  {
    id: 4,
    title: 'Strengthen infrastructure against cyber threats',
    description: 'Fortify networks against brute-force attacks, SQL injection attempts, and emerging security vulnerabilities.',
    icon: '/images/sol1.png',
    alt: 'Strengthen infrastructure against cyber threats',
  },
  {
    id: 5,
    title: 'Protect sensitive business and customer data',
    description: 'Implement end-to-end payload encryption, access controls, and security standards to safeguard critical records.',
    icon: '/images/sol2.png',
    alt: 'Protect sensitive business and customer data',
  },
  {
    id: 6,
    title: 'Improve monitoring and control over digital systems',
    description: 'Establish centralized system logging, identity management, and threat monitoring across digital platforms.',
    icon: '/images/sol3.png',
    alt: 'Improve monitoring and control over digital systems',
  },
];

export default function WhatWeIntegrateSection() {
  return (
    <section className="platforms-build-wrapper">
      <div className="platforms-build-container">
        {/* Top Header Box */}
        <div className="platforms-header-box">
          {/* Left Title Box */}
          <div className="platforms-header-left">
            <div className="platforms-badge-capsule">
              <span className="badge-bullet"></span>
              <span className="badge-text">What We Achieve</span>
            </div>
            <h2 className="platforms-main-title">
              What We Help <span className="blue-italic-text">Organisations Achieve</span>
            </h2>
          </div>

          {/* Right Description Box */}
          <div className="platforms-header-right">
            <p className="platforms-header-desc">
              Our system integration and security solutions ensure that organisations can operate with connected, secure, and reliable digital infrastructure. Typical outcomes include:
            </p>
          </div>
        </div>

        {/* 6 Icons Grid Box */}
        <div className="platforms-grid-box">
          {integrationAchieveItems.map((item) => (
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
