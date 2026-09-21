'use client';

import React from 'react';

const whyJoinData = [
  {
    number: '01',
    title: 'Work on Real-World Technology Solutions',
    description: 'Build scalable AI systems, modern applications, and enterprise platforms that create meaningful business impact.',
  },
  {
    number: '02',
    title: 'Innovation-Driven Work Culture',
    description: 'Collaborate with passionate designers, developers, and innovators focused on creativity, growth, and problem-solving.',
  },
  {
    number: '03',
    title: 'People-First Environment',
    description: 'We believe great products are built by empowered teams working in a supportive and collaborative culture.',
  },
  {
    number: '04',
    title: 'Ownership & Career Growth',
    description: 'Take ownership of impactful projects while continuously learning, growing, and advancing your career.',
  },
  {
    number: '05',
    title: 'Diverse & Inclusive Team Culture',
    description: 'Work with talented individuals from different backgrounds, perspectives, and areas of expertise.',
  },
  {
    number: '06',
    title: 'Continuous Learning & Development',
    description: 'We support professional growth through mentorship, hands-on experience, and modern technology.',
  },
];

export default function WhyJoinSection() {
  return (
    <section className="why-join-wrapper">
      <div className="why-join-container">
        {/* Title Box (Spans 2 columns on top left) */}
        <div className="why-join-title-box">
          <div className="why-join-badge-capsule">
            <span className="badge-bullet"></span>
            <span className="badge-text">WHY JOIN HEAPVUE</span>
          </div>
          <h2 className="why-join-main-title">
            Build the Future with <br />
            Smart <span className="why-join-blue-highlight">Technology Solutions.</span>
          </h2>
        </div>

        {/* 6 Grid Items */}
        {whyJoinData.map((item) => (
          <div key={item.number} className={`why-join-card item-${item.number}`}>
            <span className="why-join-number">{item.number}</span>
            <h3 className="why-join-card-title">{item.title}</h3>
            <p className="why-join-card-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
