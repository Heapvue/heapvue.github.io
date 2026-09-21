'use client';

import React from 'react';
import Image from 'next/image';

const contactOptionsData = [
  {
    id: 'enquiries',
    title: 'General Enquiries',
    description: 'Have questions about our services or collaborations? Our team is here to guide and support you.',
    icon: '/images/enquiries.png',
  },
  {
    id: 'project',
    title: 'Project Consultation',
    description: "Let’s discuss your ideas, goals, and requirements to build scalable solutions tailored to your needs.",
    icon: '/images/project.png',
  },
  {
    id: 'technical',
    title: 'Technical Support',
    description: 'Need help with an existing project? Our team is here to resolve issues efficiently.',
    icon: '/images/technical.png',
  },
  {
    id: 'career',
    title: 'Career Opportunities',
    description: 'Interested in joining Heapvue? Explore careers and be part of our tech-driven team.',
    icon: '/images/career.png',
  },
];

export default function ContactOptionsSection() {
  return (
    <section className="contact-options-wrapper">
      <div className="contact-options-container">
        <div className="contact-options-grid">
          {contactOptionsData.map((item) => (
            <div key={item.id} className="contact-option-card">
              <div className="contact-option-icon-box">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={56}
                  height={56}
                  className="contact-option-icon"
                />
              </div>
              <h3 className="contact-option-title">{item.title}</h3>
              <p className="contact-option-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
