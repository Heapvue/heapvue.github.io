'use client';

import React from 'react';
import Image from 'next/image';

const mobileBuildItems = [
  {
    id: 1,
    title: 'Customer service and engagement apps',
    description: 'Build mobile apps that simplify user interactions, deliver instant support, and improve customer retention.',
    icon: '/images/sol1.png',
    alt: 'Customer service and engagement apps',
  },
  {
    id: 2,
    title: 'Healthcare and appointment management applications',
    description: 'Develop secure mobile portals for appointment scheduling, patient follow-ups, doctor recommendations, and online consultations.',
    icon: '/images/sol2.png',
    alt: 'Healthcare and appointment management applications',
  },
  {
    id: 3,
    title: 'Lifestyle and coaching platforms',
    description: 'Create personalized wellness apps delivering diet plans, exercise routines, reminders, and educational content.',
    icon: '/images/sol3.png',
    alt: 'Lifestyle and coaching platforms',
  },
  {
    id: 4,
    title: 'Subscription-based mobile services',
    description: 'Build subscription mobile platforms capable of processing multilingual inputs, recurring access, and structured outputs.',
    icon: '/images/sol1.png',
    alt: 'Subscription-based mobile services',
  },
  {
    id: 5,
    title: 'Apps that integrate with existing business platforms',
    description: 'Seamlessly connect mobile client applications to your existing cloud backends, CRMs, and operational databases.',
    icon: '/images/sol2.png',
    alt: 'Apps that integrate with existing business platforms',
  },
  {
    id: 6,
    title: 'Mobile solutions that combine data, communication, and automation',
    description: 'Engineer feature-rich mobile tools uniting real-time data sync, push notifications, and automated workflows.',
    icon: '/images/sol3.png',
    alt: 'Mobile solutions that combine data, communication, and automation',
  },
];

export default function WhatWeBuildMobileSection() {
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
              Mobile Applications We <span className="blue-italic-text">Design</span>
              <br />
              and <span className="blue-italic-text">Engineer</span>
            </h2>
          </div>

          {/* Right Description Box */}
          <div className="platforms-header-right">
            <p className="platforms-header-desc">
              Our mobile applications are designed to support a wide range of organisational needs. Each application is built with a focus on usability, reliability, and seamless integration with backend systems. Typical solutions include:
            </p>
          </div>
        </div>

        {/* 6 Icons Grid Box */}
        <div className="platforms-grid-box">
          {mobileBuildItems.map((item) => (
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
